import assert from 'node:assert/strict';

import {
  getGeneratedDocuments,
  renderPeople,
  renderPresentations,
  renderRationale,
  renderTest262,
  sortProposals,
} from './generate-proposals.mjs';

const delegates = {
  ALI: { name: 'Alice' },
};

assert.equal(
  renderPeople([
    { kind: 'delegate', abbreviation: 'ALI' },
    { kind: 'community', name: 'Community Contributor' },
  ], delegates),
  'Alice<br />Community Contributor',
);
assert.throws(
  () => renderPeople([{ kind: 'delegate', abbreviation: 'UNK' }], delegates),
  /Unknown delegate abbreviation: UNK/u,
);

const sorted = sortProposals([
  { id: 'undated-zulu', name: 'Zulu', presentations: [] },
  { id: 'older', name: 'Older', presentations: [{ date: '2024-01' }] },
  { id: 'same-date-zulu', name: 'Zulu', presentations: [{ date: '2025-02' }] },
  { id: 'same-date-alpha', name: 'Alpha', presentations: [{ date: '2025-02-01' }] },
  { id: 'latest', name: 'Latest', presentations: [{ date: '2025-02-02' }] },
  { id: 'undated-alpha', name: 'Alpha', presentations: [] },
]);
assert.deepEqual(
  sorted.map(({ id }) => id),
  ['latest', 'same-date-alpha', 'same-date-zulu', 'older', 'undated-alpha', 'undated-zulu'],
);

assert.equal(
  renderPresentations([
    {
      date: '2024-01',
      notesUrl: 'https://github.com/tc39/notes/blob/HEAD/meetings/2024-01/example.md',
    },
    { date: '2025-02-03' },
  ]),
  '<sub>&nbsp;-2025-02-03<br />&nbsp;-[2024-01](<https://github.com/tc39/notes/blob/HEAD/meetings/2024-01/example.md>)</sub>',
);
assert.equal(renderPresentations([]), '<sub>Never presented</sub>');

assert.equal(renderTest262(undefined), ':question:');
assert.equal(
  renderTest262({
    featureFlag: 'example-feature',
    hasTests: true,
    url: 'https://github.com/tc39/test262/search?q=example-feature',
  }),
  '<sub>[example-feature](<https://github.com/tc39/test262/search?q=example-feature>)</sub>',
);
assert.equal(
  renderTest262({ hasTests: false }),
  '<sub>No Test262 tests</sub>',
);

assert.equal(
  renderRationale('subsumed by [Temporal](https://github.com/tc39/proposal-temporal)'),
  'subsumed by [Temporal](https://github.com/tc39/proposal-temporal)',
);

const generatedDocuments = getGeneratedDocuments([], {});
assert.deepEqual([...generatedDocuments.keys()], [
  'README.md',
  'stage-0-proposals.md',
  'stage-1-proposals.md',
  'inactive-proposals.md',
  'finished-proposals.md',
  'ecma402/README.md',
  'ecma402/stage-0-proposals.md',
  'ecma402/inactive-proposals.md',
  'ecma402/finished-proposals.md',
]);
for (const contents of generatedDocuments.values()) {
  assert.match(contents, /^<!--\nTHIS FILE IS GENERATED\. DO NOT EDIT IT BY HAND\./u);
  assert.match(contents, /scripts\/generate-proposals\.mjs/u);
  assert.match(contents, /data\/proposals\/index\.json/u);
  assert.match(contents, /data\/delegates\/index\.json/u);
}

assert.throws(
  () => getGeneratedDocuments([{
    authors: [],
    champions: [],
    id: 'unsupported-specification',
    name: 'Unsupported specification',
    presentations: [],
    specification: 'ECMA-404',
    stage: '1',
    url: 'https://example.com/unsupported-specification',
  }], {}),
  /Unsupported proposal classification: ECMA-404 stage 1/u,
);
