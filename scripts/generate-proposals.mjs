#!/usr/bin/env node

import fs from 'node:fs';
import process from 'node:process';
import { pathToFileURL, URL } from 'node:url';

import delegates from '@tc39/data-delegates' with { type: 'json' };
import proposals from '@tc39/data-proposals' with { type: 'json' };

const DOCUMENT_PATHS = [
  'README.md',
  'stage-0-proposals.md',
  'stage-1-proposals.md',
  'inactive-proposals.md',
  'finished-proposals.md',
  'ecma402/README.md',
  'ecma402/stage-0-proposals.md',
  'ecma402/inactive-proposals.md',
  'ecma402/finished-proposals.md',
];

const INACTIVE_STAGES = new Set([
  'abandoned',
  'rejected',
  'subsumed',
  'withdrawn',
]);

const INACTIVE_STAGE_LABELS = new Map([
  ['abandoned', 'Abandoned'],
  ['rejected', 'Rejected'],
  ['subsumed', 'Subsumed'],
  ['withdrawn', 'Withdrawn'],
]);

const WARNING = `<!--
THIS FILE IS GENERATED. DO NOT EDIT IT BY HAND.

Generator: https://github.com/tc39/proposals/blob/HEAD/scripts/generate-proposals.mjs
Proposal data: https://github.com/tc39/data/blob/HEAD/data/proposals/index.json
Delegate data: https://github.com/tc39/data/blob/HEAD/data/delegates/index.json
-->`;

const PROJECT_ROOT = new URL('../', import.meta.url);

/** Convert a recorded presentation date to an ordering key. */
function presentationTime(date) {
  const [year, month, day = 1] = date.split('-').map(Number);
  return Date.UTC(year, month - 1, day);
}

/** Escape plain data that will occupy a Markdown table cell. */
function renderPlainText(value) {
  return value.replaceAll('|', '\\|').replaceAll('\n', '<br />');
}

/** Render a link without relying on document-local reference definitions. */
function renderLink(label, url) {
  return `[${renderPlainText(label)}](<${url}>)`;
}

/** Sort proposals newest-first by their first presentation. */
export function sortProposals(proposalsToSort) {
  return [...proposalsToSort].sort((left, right) => {
    const leftTime = left.presentations.length === 0
      ? null
      : presentationTime(left.presentations[0].date);
    const rightTime = right.presentations.length === 0
      ? null
      : presentationTime(right.presentations[0].date);

    // Never-presented proposals follow every proposal with a recorded date.
    if (leftTime === null && rightTime !== null) return 1;
    if (leftTime !== null && rightTime === null) return -1;
    if (leftTime !== rightTime) return rightTime - leftTime;

    const nameOrder = left.name.localeCompare(right.name, 'en');
    return nameOrder === 0 ? left.id.localeCompare(right.id, 'en') : nameOrder;
  });
}

/** Resolve and render the people associated with a proposal. */
export function renderPeople(people, delegateData) {
  return people.map((person) => {
    if (person.kind === 'community') {
      return renderPlainText(person.name);
    }
    if (person.kind !== 'delegate') {
      throw new Error(`Unknown person kind: ${person.kind}`);
    }

    const delegate = delegateData[person.abbreviation];
    if (!delegate) {
      throw new Error(`Unknown delegate abbreviation: ${person.abbreviation}`);
    }
    return renderPlainText(delegate.name);
  }).join('<br />');
}

/** Render a proposal's presentation history newest-first. */
export function renderPresentations(presentations) {
  if (presentations.length === 0) {
    return '<sub>Never presented</sub>';
  }

  const entries = [...presentations]
    .sort((left, right) => presentationTime(right.date) - presentationTime(left.date))
    .map(({ date, notesUrl }) => {
      return `&nbsp;-${notesUrl ? renderLink(date, notesUrl) : date}`;
    });

  return `<sub>${entries.join('<br />')}</sub>`;
}

/** Render Test262 metadata used by Stage 2.7 and Stage 3 tables. */
export function renderTest262(test262) {
  if (!test262) {
    return ':question:';
  }
  if (test262.hasTests && !test262.url) {
    throw new Error('Test262 coverage records with tests must provide a URL.');
  }

  const label = test262.featureFlag
    ?? (test262.hasTests ? 'Test262 tests' : 'No Test262 tests');
  const rendered = test262.url ? renderLink(label, test262.url) : renderPlainText(label);
  return `<sub>${rendered}</sub>`;
}

/** Preserve the source Markdown while making it safe for a table cell. */
export function renderRationale(rationale) {
  return rationale.replaceAll('|', '\\|').replaceAll('\n', '<br />');
}

/** Render a compact, consistently formatted Markdown table. */
function renderTable(headers, rows) {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ].join('\n');
}

/** Render the proposal name as a link when it has a canonical URL. */
function renderProposal(proposal) {
  return proposal.url
    ? renderLink(proposal.name, proposal.url)
    : renderPlainText(proposal.name);
}

/** Render one active-stage section with its stage-specific metadata column. */
function renderActiveStage(stage, stageProposals, delegateData) {
  const showsTest262 = stage === '2.7' || stage === '3';
  const metadataHeader = showsTest262
    ? '<sub>Test262 Feature Flag</sub>'
    : 'Stage 2.7 reviewers';
  const rows = sortProposals(stageProposals).map((proposal) => [
    renderProposal(proposal),
    renderPeople(proposal.authors, delegateData),
    renderPeople(proposal.champions, delegateData),
    showsTest262
      ? renderTest262(proposal.test262)
      : renderPeople(proposal.stage27Reviewers ?? [], delegateData),
    renderPresentations(proposal.presentations),
  ]);

  return `### Stage ${stage}

${renderTable([
    'Proposal',
    'Author',
    'Champion',
    metadataHeader,
    'Meeting Notes',
  ], rows)}`;
}

/** Render a Stage 0 or Stage 1 proposal table. */
function renderEarlyStageTable(stageProposals, delegateData) {
  const rows = sortProposals(stageProposals).map((proposal) => [
    renderProposal(proposal),
    renderPeople(proposal.authors, delegateData),
    renderPeople(proposal.champions, delegateData),
    renderPresentations(proposal.presentations),
  ]);

  return renderTable(['Proposal', 'Author', 'Champion', 'Meeting Notes'], rows);
}

/** Render a table of terminal proposals that did not reach Stage 4. */
function renderInactiveTable(inactiveProposals, delegateData) {
  const rows = sortProposals(inactiveProposals).map((proposal) => {
    const status = INACTIVE_STAGE_LABELS.get(proposal.stage);
    if (!status || !proposal.rationale) {
      throw new Error(`Inactive proposal lacks status metadata: ${proposal.id}`);
    }
    return [
      renderProposal(proposal),
      renderPeople(proposal.champions, delegateData),
      `${status}: ${renderRationale(proposal.rationale)}`,
      renderPresentations(proposal.presentations),
    ];
  });

  return renderTable(['Proposal', 'Champion', 'Rationale', 'Meeting Notes'], rows);
}

/** Render a table of proposals that reached Stage 4. */
function renderFinishedTable(finishedProposals, delegateData) {
  const rows = sortProposals(finishedProposals).map((proposal) => {
    if (!proposal.expectedPublicationYear) {
      throw new Error(`Finished proposal lacks a publication year: ${proposal.id}`);
    }
    return [
      renderProposal(proposal),
      renderPeople(proposal.authors, delegateData),
      renderPeople(proposal.champions, delegateData),
      renderPresentations(proposal.presentations),
      String(proposal.expectedPublicationYear),
    ];
  });

  return renderTable([
    'Proposal',
    'Author',
    'Champion(s)',
    'Meeting Notes',
    'Expected Publication Year',
  ], rows);
}

/** Identify the sole generated document that owns a proposal. */
function documentPathForProposal(proposal) {
  const { specification, stage } = proposal;

  if (specification === 'ECMA-262') {
    if (['2', '2.7', '3'].includes(stage)) return 'README.md';
    if (stage === '1') return 'stage-1-proposals.md';
    if (stage === '0') return 'stage-0-proposals.md';
    if (stage === '4') return 'finished-proposals.md';
    if (INACTIVE_STAGES.has(stage)) return 'inactive-proposals.md';
  }

  if (specification === 'ECMA-402') {
    if (['1', '2', '2.7', '3'].includes(stage)) return 'ecma402/README.md';
    if (stage === '0') return 'ecma402/stage-0-proposals.md';
    if (stage === '4') return 'ecma402/finished-proposals.md';
    if (INACTIVE_STAGES.has(stage)) return 'ecma402/inactive-proposals.md';
  }

  throw new Error(`Unsupported proposal classification: ${specification} stage ${stage}`);
}

/** Group every proposal into exactly one generated document. */
function groupProposals(proposalData) {
  const groups = new Map(DOCUMENT_PATHS.map((documentPath) => [documentPath, []]));
  const proposalIds = new Set();

  for (const proposal of proposalData) {
    if (proposalIds.has(proposal.id)) {
      throw new Error(`Duplicate proposal identifier: ${proposal.id}`);
    }
    proposalIds.add(proposal.id);
    groups.get(documentPathForProposal(proposal)).push(proposal);
  }

  return groups;
}

/** Select proposals at one stage from a document's assigned records. */
function atStage(group, stage) {
  return group.filter((proposal) => proposal.stage === stage);
}

/** Add the source warning and canonical trailing newline to a document. */
function generatedDocument(body) {
  return `${WARNING}\n\n${body.trim()}\n`;
}

/** Render all generated documents without touching the filesystem. */
export function getGeneratedDocuments(proposalData = proposals, delegateData = delegates) {
  const groups = groupProposals(proposalData);
  const ecma262Active = groups.get('README.md');
  const ecma402Active = groups.get('ecma402/README.md');

  const documents = new Map();

  documents.set('README.md', generatedDocument(`
# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 1 Proposals](stage-1-proposals.md)
* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

[Contributing to proposals](#contributing-to-proposals)

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn, rejected, or finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.

${renderActiveStage('3', atStage(ecma262Active, '3'), delegateData)}

${renderActiveStage('2.7', atStage(ecma262Active, '2.7'), delegateData)}

${renderActiveStage('2', atStage(ecma262Active, '2'), delegateData)}

The Test262 feature flag links to a code search of tests using that feature flag, which may constitute complete or partial coverage.
The :question: means there is no feature flag for tests yet.

## Contributing to proposals

See [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) and [How We Work](https://github.com/tc39/how-we-work/blob/main/README.md#proposals) for the most up-to-date information on contributing proposals to TC39 standards and how proposals advance.

### Onboarding proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organisation](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organisation.
   * If you are a TC39 delegate but not a member of that organisation, please contact [@LJHarb](https://github.com/ljharb).
2. The GitHub Administrator or one of the chairs will transfer your repository to the TC39 organisation at the next opportunity.

As part of the onboarding process, your repository name may be normalised. Repository redirects will continue to work as long as you never create a fork or new repository with the same name, although GitHub Pages redirects will be broken and should be updated.
  `));

  documents.set('stage-0-proposals.md', generatedDocument(`
# Stage 0 Proposals

Stage 0 proposals listed below are either:

* planned to be presented to the committee by a TC39 champion, or
* presented to the committee and not definitively rejected, without yet achieving the criteria for Stage 1.

${renderEarlyStageTable(groups.get('stage-0-proposals.md'), delegateData)}

See also the [active proposals](README.md), [Stage 1 proposals](stage-1-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.
  `));

  documents.set('stage-1-proposals.md', generatedDocument(`
# Stage 1 Proposals

Stage 1 proposals represent problems that the committee is interested in spending time exploring solutions to.

Proposals follow [this process document](https://tc39.es/process-document/).

${renderEarlyStageTable(groups.get('stage-1-proposals.md'), delegateData)}

See also the [active proposals](README.md), [Stage 0 proposals](stage-0-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.
  `));

  documents.set('inactive-proposals.md', generatedDocument(`
# Inactive Proposals

Inactive proposals were presented to the committee but were subsequently abandoned, withdrawn, rejected, or subsumed by other work.

${renderInactiveTable(groups.get('inactive-proposals.md'), delegateData)}

See also the [active proposals](README.md), [Stage 1 proposals](stage-1-proposals.md), [Stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.
  `));

  documents.set('finished-proposals.md', generatedDocument(`
# Finished Proposals

Finished proposals have reached Stage 4 and are, or soon will be, included in the [latest draft](https://tc39.es/ecma262/) of the specification.

${renderFinishedTable(groups.get('finished-proposals.md'), delegateData)}

See also the [active proposals](README.md), [Stage 1 proposals](stage-1-proposals.md), [Stage 0 proposals](stage-0-proposals.md), and [inactive proposals](inactive-proposals.md) documents.
  `));

  documents.set('ecma402/README.md', generatedDocument(`
# [ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402) proposals

* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript](../README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn, rejected, or finished.

${renderActiveStage('3', atStage(ecma402Active, '3'), delegateData)}

${renderActiveStage('2.7', atStage(ecma402Active, '2.7'), delegateData)}

${renderActiveStage('2', atStage(ecma402Active, '2'), delegateData)}

### Stage 1

${renderEarlyStageTable(atStage(ecma402Active, '1'), delegateData)}

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organisation](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organisation:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organisation.
   * If you are a TC39 delegate but not an administrator in that organisation, please contact [@LJHarb](https://github.com/ljharb).
2. The GitHub Administrator or one of the chairs will transfer your repository to the TC39 organisation at the next opportunity.

As part of the onboarding process, your repository name may be normalised. Repository redirects will continue to work as long as you never create a fork or new repository with the same name, although GitHub Pages redirects will be broken and should be updated.
  `));

  documents.set('ecma402/stage-0-proposals.md', generatedDocument(`
# Stage 0 Proposals

Stage 0 proposals listed below are either:

* planned to be presented to the committee by a TC39 champion, or
* presented to the committee and not definitively rejected, without yet achieving the criteria for Stage 1.

${renderEarlyStageTable(groups.get('ecma402/stage-0-proposals.md'), delegateData)}

See also the [finished proposals](finished-proposals.md), [active proposals](README.md), and [inactive proposals](inactive-proposals.md) documents.
  `));

  documents.set('ecma402/inactive-proposals.md', generatedDocument(`
# Inactive Proposals

Inactive proposals were presented to the committee but were subsequently abandoned, withdrawn, rejected, or subsumed by other work.

${renderInactiveTable(groups.get('ecma402/inactive-proposals.md'), delegateData)}

See also the [active proposals](README.md), [Stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.
  `));

  documents.set('ecma402/finished-proposals.md', generatedDocument(`
# Finished Proposals

Finished proposals have reached Stage 4 and are included in the [latest draft](https://tc39.es/ecma402/) of the specification.

${renderFinishedTable(groups.get('ecma402/finished-proposals.md'), delegateData)}

See also the [Stage 0 proposals](stage-0-proposals.md), [active proposals](README.md), and [inactive proposals](inactive-proposals.md) documents.
  `));

  return documents;
}

/** Write generated documents, or check that every existing document is current. */
export function generateProposals(check = false) {
  const generatedDocuments = getGeneratedDocuments();
  const staleDocuments = [];

  for (const [documentPath, generatedContents] of generatedDocuments) {
    const documentUrl = new URL(documentPath, PROJECT_ROOT);
    if (check) {
      const currentContents = fs.existsSync(documentUrl)
        ? fs.readFileSync(documentUrl, 'utf8')
        : null;
      if (currentContents !== generatedContents) {
        staleDocuments.push(documentPath);
      }
    } else {
      fs.writeFileSync(documentUrl, generatedContents);
    }
  }

  if (staleDocuments.length > 0) {
    process.stderr.write(`Generated proposal documents are out of date:\n${staleDocuments.map((documentPath) => `- ${documentPath}`).join('\n')}\nRun \`npm run generate-proposals\` to update them.\n`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arguments_ = process.argv.slice(2);
  if (arguments_.some((argument) => argument !== '--check')) {
    throw new Error(`Unknown argument: ${arguments_.find((argument) => argument !== '--check')}`);
  }
  generateProposals(arguments_.includes('--check'));
}
