# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 1 Proposals](stage-1-proposals.md)
* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

[Contributing to proposals](#contributing-to-proposals)

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn/rejected, or become finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.

### Stage 3

| Proposal                                                                       | Author                                                                  | Champion                                                                | <sub>Test262 Feature Flag</sub>                                     | Meeting Notes                                              |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | <sub>[legacy-regexp][tests-regexp-legacy]</sub>                     | <sub>&nbsp;-2026&#8209;01<br />&nbsp;-[2017&#8209;05][regexp-legacy-notes]</sub>     |
| [Temporal][temporal]                                                           | Philipp Dunkel<br />Maggie Johnson-Pint<br />Matt Johnson-Pint<br />Brian Terlson<br />Shane Carr<br />Ujjwal Sharma<br />Philip Chimento<br />Jason Williams<br />Justin Grant | Philipp Dunkel<br />Maggie Johnson-Pint<br />Matt Johnson-Pint<br />Brian Terlson<br />Shane Carr<br />Ujjwal Sharma<br />Philip Chimento<br />Jason Williams<br />Justin Grant| <sub>[Temporal][temporal-tests] [testing plan][temporal-testplan]</sub> | <sub>&nbsp;-[2025&#8209;09][temporal-notes]<br />&nbsp;-[2024&#8209;10][temporal-notes-2024-10]<br />&nbsp;-[2024&#8209;02][temporal-notes-2024-02]<br />&nbsp;-[2023&#8209;03][temporal-notes-2023-03]<br />&nbsp;-[2022&#8209;06][temporal-notes-2022-06]<br />&nbsp;-[2021&#8209;03][temporal-notes-2021-03]<br />&nbsp;-[2020&#8209;09][temporal-notes-2020-09]<br />&nbsp;-[2018&#8209;09][temporal-notes-2018-09]</sub> |
| [Decorators][decorators]                                                       | Daniel Ehrenberg<br />Kristen Hewell Garrett                            | Kristen Hewell Garrett                                                  | <sub>[decorators][decorators-tests] [testing plan][decorators-testplan]</sub> | <sub>&nbsp;-[2025&#8209;02][decorators-notes]<br />&nbsp;-[2023&#8209;05][decorators-notes-2023-05]<br />&nbsp;-[2022&#8209;03][decorators-notes-2022-03]<br />&nbsp;-[2020&#8209;07][decorators-notes-2020-07]<br />&nbsp;-[2019&#8209;10][decorators-notes-2019-10]<br />&nbsp;-[2019&#8209;03][decorators-notes-2019-03]<br />&nbsp;-[2018&#8209;11][decorators-notes-2018-11]<br />&nbsp;-[2016&#8209;09][decorators-notes-2016-09]</sub> |
| [Explicit Resource Management][resource-management]                            | Ron Buckton                                                             | Ron Buckton                                                             | <sub>[explicit-resource-management][resource-management-tests]      | <sub>&nbsp;-[2025&#8209;05][resource-management-notes]<br />&nbsp;-[2024&#8209;06][resource-management-notes-2024-06]<br />&nbsp;-[2023&#8209;03][resource-management-notes-2023-03]<br />&nbsp;-[2023&#8209;01][resource-management-notes-2023-01]<br />&nbsp;-[2022&#8209;12][resource-management-notes-2022-12]<br />&nbsp;-[2021&#8209;10][resource-management-notes-2021-10]<br />&nbsp;-[2019&#8209;07][resource-management-notes-2019-07]<br />&nbsp;-[2018&#8209;07][resource-management-notes-2018-07]</sub> |
| [Decorator Metadata][decorator-metadata]                                       | Kristen Hewell Garrett                                                  | Kristen Hewell Garrett                                                  | <sub>[decorator-metadata][decorator-metadata-tests]</sub>           | <sub>&nbsp;-[2023&#8209;05][decorator-metadata-notes]</sub> |
| [Source Phase Imports][source-phase-imports]                                   | Luca Casonato                                                           | Guy Bedford<br />Luca Casonato                                          | <sub>[source-phase-imports][source-phase-imports-tests]</sub>       | <sub>&nbsp;-[2024&#8209;10][source-phase-imports-notes]<br />&nbsp;-[2023&#8209;07][source-phase-imports-notes-2023-07]<br />&nbsp;-[2023&#8209;03][source-phase-imports-notes-2023-03]</sub> |
| [Dynamic Code Brand Checks][dynamic-code-brand-checks]                         | Nicolo Ribaudo                                                          | Krzysztof Kotowicz<br />Mike Samuel<br />Nicolo Ribaudo                 | <sub>[No test262 tests][dynamic-code-brand-checks-no-tests]         | <sub>&nbsp;-[2024&#8209;06][dynamic-code-brand-checks-notes-2024-06]<br />&nbsp;-[2024&#8209;04][dynamic-code-brand-checks-notes-2024-04]<br />&nbsp;-[2021&#8209;01][dynamic-code-brand-checks-notes-2021-01]<br />&nbsp;-[2019&#8209;12][dynamic-code-brand-checks-notes]<br />&nbsp;-[2019&#8209;07][dynamic-code-brand-checks-notes-2019-07]</sub>                            |
| [`Atomics.pause`][atomics-pause]                                               | Shu-yu Guo                                                              | Shu-yu Guo                                                              | <sub>[Atomics.pause][atomics-pause-tests]</sub>                     | <sub>&nbsp;-[2024&#8209;10][atomics-pause-notes]</sub>     |
| [Deferring Module Evaluation][lazy-import]                                     | Yulia Startsev<br />Guy Bedford                                         | Yulia Startsev<br />Guy Bedford<br />Nicolò Ribaudo                     | <sub>[Testing plan][lazy-import-testplan]</sub>                     | <sub>&nbsp;-[2025&#8209;02][lazy-import-notes]<br />&nbsp;-[2024&#8209;06][lazy-import-notes-2024-06]<br />&nbsp;-[2023&#8209;07][lazy-import-notes-2023-07]<br />&nbsp;-[2021&#8209;01][lazy-import-notes-2021-01]</sub>       |
| [Non-extensible Applies to Private][nonext-private]                            | Mark Miller<br />Shu-yu Guo<br />Chip Morningstar<br />Erik Marks | Mark Miller<br />Shu-yu Guo<br />Chip Morningstar<br />Erik Marks             | :question:                                                          | <sub>&nbsp;-[2025&#8209;09][nonext-private-notes]</sub>    |
| [Joint Iteration][joint]                                                       | Michael Ficarra                                                         | Michael Ficarra                                                         | <sub>[Testing plan][joint-testplan]</sub>                           | <sub>&nbsp;-[2025&#8209;11][joint-notes]<br />&nbsp;-[2024&#8209;07][joint-notes-2024-07]</sub>             |

### Stage 2.7

| Proposal                                                                       | Author                                                                  | Champion                                                                | <sub>Test262 Feature Flag</sub>                                     | Meeting Notes                                              |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [ShadowRealm][shadowrealm]                                                     | Caridy Patiño<br />Jean-Francois Paradis   | Dave Herman<br />Mark Miller<br />Caridy Patiño<br />Leo Balter<br />Rick Waldron<br />Chengzhong Wu | <sub>[ShadowRealm][realms-tests]</sub>                              | <sub>&nbsp;-[2025&#8209;02][realms-notes]<br />&nbsp;-[2024&#8209;12][realms-notes-2024-12]<br />&nbsp;-[2024&#8209;06][realms-notes-2024-06]<br />&nbsp;-[2024&#8209;02][realms-notes-2024-02]<br />&nbsp;-[2023&#8209;11][realms-notes-2023-11]<br />&nbsp;-[2023&#8209;09][realms-notes-2023-09]<br />&nbsp;-[2022&#8209;11][realms-notes-2022-11]<br />&nbsp;-[2022&#8209;09][realms-notes-2022-09]<br />&nbsp;-[2022&#8209;06][realms-notes-2022-06]<br />&nbsp;-[2022&#8209;03][realms-notes-2022-03]<br />&nbsp;-[2021&#8209;12][realms-notes-2021-12]<br />&nbsp;-[2021&#8209;08][realms-notes-2021-08]<br />&nbsp;-[2021&#8209;07][realms-notes-2021-07]<br />&nbsp;-[2021&#8209;05][realms-notes-2021-05]<br />&nbsp;-[2021&#8209;04][realms-notes-2021-04]<br />&nbsp;-[2021&#8209;01][realms-notes-2021-01]<br />&nbsp;-[2020&#8209;11][realms-notes-2020-11]<br />&nbsp;-[2020&#8209;06][realms-notes-2020-06]<br />&nbsp;-[2020&#8209;02][realms-notes-2020-02]<br />&nbsp;-[2018&#8209;07][realms-notes-2018-07]<br />&nbsp;-[2018&#8209;05][realms-notes-2018-05]<br />&nbsp;-[2018&#8209;03][realms-notes-2018-03]<br />&nbsp;-[2017&#8209;03][realms-notes-2017-03]<br />&nbsp;-[2017&#8209;01][realms-notes-2017-01]<br />&nbsp;-[2016&#8209;03][realms-notes-2016-03]<br />&nbsp;-[2015&#8209;05][realms-notes-2015-05]<br />&nbsp;-[2014&#8209;06][realms-notes-2014-06]<br />&nbsp;-[2014&#8209;01][realms-notes-2014-01]</sub> |
| [ESM Phase Imports][esm-phase]                                                 | Luca Casonato<br />Guy Bedford                                          | Luca Casonato<br />Guy Bedford                                          | :question:                                                          | <sub>&nbsp;-[2024&#8209;12][esm-phase-notes]<br />&nbsp;-[2024&#8209;06][esm-phase-notes-2024-06]<br />&nbsp;-[2024&#8209;02][esm-phase-notes-2024-02]</sub>         |
| [Immutable ArrayBuffers][immutable-abs]                                        | Mark Miller<br />Peter Hoddie<br />Richard Gibson<br />Jack Works | Mark Miller<br />Peter Hoddie<br />Richard Gibson<br />Jack Works             | :question:                                                          | <sub>&nbsp;-[2025&#8209;07][immutable-abs-notes]</sub>     |
| [iterator chunking][chunking]                                                  | Michael Ficarra                                                   | Michael Ficarra                                                               | :question:                                                          | <sub>&nbsp;-[2025&#8209;09][chunking-notes]<br />&nbsp;-[2025&#8209;07][chunking-notes-2025-07]<br />&nbsp;-[2025&#8209;05][chunking-notes-2025-05]<br />&nbsp;-[2024&#8209;10][chunking-notes-2024-10]<br />&nbsp;-[2024&#8209;02][chunking-notes-2024-02]</sub> |
| [Import Bytes][import-bytes]                                                   | Steven Salat                                                      | Steven Salat                                                                  | :question:                                                          | <sub>&nbsp;-[2025&#8209;09][import-bytes-notes]</sub>      |
| [Await Dictionary][await-dictionary]                                           | Alexander J. Vincent                                              | Ashley Claymore<br />Jordan Harband<br />Chris de Almeida                     | :question:                                                          | <sub>&nbsp;-[2025&#8209;11][await-dictionary-notes]</sub>  |
| [Iterator Join][iterator-join]                                                 | Kevin Gibbons                                                     | Kevin Gibbons                                                                 | :question:                                                          | <sub>&nbsp;-[2025&#8209;11][iterator-join-notes]</sub>     |

### Stage 2

| Proposal                                                                       | Author                                                | Champion                                                                          | Stage 2.7 reviewers                        | Meeting Notes                                                         |
| ------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                     |                                                                                   |                                            | <sub>&nbsp;-[2024&#8209;06][function-sent-notes-2024-06]<br />&nbsp;-[2022&#8209;06][function-sent-notes-2022-06]<br />&nbsp;-[2019&#8209;07][function-sent-notes]<br />&nbsp;-[2018&#8209;03][function-sent-notes-2018-03]<br />&nbsp;-[2015&#8209;11][function-sent-notes-2015-11]</sub>                |
| [`throw` expressions][throw-expressions]                                       | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>&nbsp;-[2024&#8209;02][throw-expressions-notes]<br />&nbsp;-[2018&#8209;01][throw-expressions-notes-2018-01]<br />&nbsp;-[2017&#8209;11][throw-expressions-notes-2017-11]<br />&nbsp;-[2017&#8209;09][throw-expressions-notes-2017-09]</sub>            |
| [Function implementation hiding][censorship]                                   | Domenic Denicola<br />Michael Ficarra                 | Michael Ficarra                                                                   |                                            | <sub>&nbsp;-[2020&#8209;06][censorship-notes]</sub>                   |
| [collection normalization][collection-rekey]                                   | Bradley Farias                                        |                                                                                   |                                            | <sub>&nbsp;-2026&#8209;01<br />&nbsp;-[2019&#8209;01][richer-keys-notes]</sub>                  |
| [isTemplateObject][isTemplateObject]                                           | Mike Samuel, Krzysztof Kotowicz                       | Jordan Harband                                                                    |                                            | <sub>&nbsp;-[2024&#8209;04][isTemplateObject-notes]</sub>             |
| [Dynamic Import Host Adjustment][]                                             | Mike Samuel, Krzysztof Kotowicz                       | Krzysztof Kotowicz                                                                |                                            | <sub>&nbsp;-[2019&#8209;12][Dynamic Import Host Adjustment notes]</sub> |
| [Module Expressions][module-expressions]                                       | Surma<br />Daniel Ehrenberg<br />Nicolò Ribaudo       | Surma<br />Nicolò Ribaudo                                                         |                                            | <sub>&nbsp;-[2022&#8209;11][module-expressions-notes]</sub>           |
| [Pipeline Operator][pipeline]                                                  | J. S. Choi<br />James DiGioia<br />Ron Buckton<br />Tab Atkins | J. S. Choi<br />Ron Buckton<br />Tab Atkins                              |                                            | <sub>&nbsp;-[2022&#8209;03][pipe-notes-2022-03]<br />&nbsp;-[2022&#8209;01][pipe-notes-2022-01]<br />&nbsp;-[2021&#8209;08][pipe-notes]<br />&nbsp;-[2018&#8209;03][pipe-notes-2018-03]<br />&nbsp;-[2017&#8209;11][pipe-notes-2017-11]<br />&nbsp;-[2017&#8209;09][pipe-notes-2017-09]</sub>                         |
| [Destructure Private Fields][destructure-private]                              | Justin Ridgewell                                      |                                                                                   |                                            | <sub>&nbsp;-[2021&#8209;12][destructure-private-notes]</sub>          |
| [RegExp Buffer Boundaries (`\A`, `\z`, `\Z`)][regexp-buffer-boundaries]        | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>&nbsp;-[2021&#8209;12][regexp-buffer-boundaries-notes]</sub>     |
| [String.dedent][string.dedent]                                                 | Misha Kaletsky<br />Hemanth HM<br />Justin Ridgewell  | Hemanth HM<br />Justin Ridgewell                                                  |                                            | <sub>&nbsp;-[2022&#8209;06][string.dedent-notes]</sub>                |
| [JSON.parseImmutable][json-parse-immutable]                                    | Robin Ricard<br />Richard Button<br />Nicolò Ribaudo<br />Ashley Claymore | Robin Ricard<br />Richard Button<br />Nicolò Ribaudo<br />Ashley Claymore |                                | <sub>&nbsp;-[2022&#8209;07][json-parse-immutable-notes]</sub>         |
| [Module Declarations][module-declarations]                                     | Daniel Ehrenberg<br />Nicolò Ribaudo                  | Mark Miller<br />Nicolò Ribaudo                             |                                            | <sub>&nbsp;-[2022&#8209;11][module-declarations-notes]</sub>          |
| [Symbol Predicates][symbol-predicates]                                         | Robin Ricard<br />Jordan Harband                      | Ashley Claymore<br />Jordan Harband                                               |                                            | <sub>&nbsp;-[2023&#8209;05][symbol-predicates-notes]</sub>            |
| [Async Iterator helpers][async-iterator-helpers]                               | Gus Caplan                                            | Michael Ficarra<br />Jonathan Keslin<br />Kevin Gibbons                           |                                            | <sub>&nbsp;-[2025&#8209;11][async-iterator-helpers-notes]</sub>       |
| [Iterator.range][iterator-range]                                               | Jack Works                                            | Jack Works                                                                        |                                            | <sub>&nbsp;-[2024&#8209;04][iterator-range-notes]</sub>               |
| [Async Context][async-context]                                                 | Chengzhong Wu                                         | Andreu Botella<br />Chengzhong Wu<br />Justin Ridgewell                           | James M Snell<br />Mark S. Miller          | <sub>&nbsp;-[2025&#8209;09][async-context-notes]<br />&nbsp;-[2025&#8209;04][async-context-notes-2025-04]<br />&nbsp;-[2024&#8209;10][async-context-notes-2024-10]<br />&nbsp;-[2023&#8209;03][async-context-notes-2023-03]<br />&nbsp;-[2023&#8209;02][async-context-notes-2023-02]</sub>                |
| ["Discard" (`void`) Bindings][discards]                                        | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>&nbsp;-[2024&#8209;06][discards-notes]</sub>                     |
| [Propagate active ScriptOrModule with JobCallback Record][scriptormodule]      | Chengzhong Wu                                         | Chengzhong Wu                                                                     |                                            | <sub>&nbsp;-[2024&#8209;07][scriptormodule-notes]</sub>               |
| [Structs: Fixed Layout Objects and Some Synchronization Primitives][structs]   | Shu-yu Guo                                            | Shu-yu Guo                                          | Mark Miller<br />Waldemar Horwat<br />Yulia Startsev<br />Nicolò Ribaudo | <sub>&nbsp;-[2024&#8209;10][structs-notes]</sub>                      |
| [Extractors][extractors]                                                       | Ron Buckton                                           | Ron Buckton                                                                       | Jordan Harband<br />Justin Ridgewell       | <sub>&nbsp;-[2024&#8209;10][extractors-notes]</sub>                   |
| [Error Stack Accessor][stack-accessor]                                         | Jordan Harband                                        | Jordan Harband<br />Mark Miller                                                   | Nicolò Ribaudo<br />Michael Ficarra        | <sub>&nbsp;-[2025&#8209;11][stack-accessor-notes]</sub>               |
| [Deferred Re-exports][deferred-reexport]                                       | Nicolò Ribaudo                                        | Nicolò Ribaudo                                                                    | Chengzhong Wu<br />Ashley Claymore<br />Guy Bedford | <sub>&nbsp;-[2025&#8209;04][deferred-reexport-notes]</sub>   |
| [SeededPRNG][seeded-randoms]                                                   | Tab Atkins                                            | Tab Atkins                                                                        | Kevin Gibbons<br />Jesse Alama<br />Mark Miller | <sub>&nbsp;-[2025&#8209;05][seeded-randoms-notes]</sub>          |
| [`Math.clamp`][clamp]                                                          | Oliver Medhurst                                       | Oliver Medhurst                                                                   |                                            | <sub>&nbsp;-[2025&#8209;05][clamp-notes]</sub>                        |
| [Native Promise Predicate][native-promise-predicate]                           | Mathieu Hofman                                        | Mathieu Hofman                                                                    | Jordan Harband<br />James Snell<br />Justin Ridgewell | <sub>&nbsp;-[2025&#8209;09][native-promise-predicate-notes]</sub> |
| [`Error.captureStackTrace`][capturestacktrace]                                 | Matthew Gaudet                                        | Matthew Gaudet<br />Dan Minor                                                     | Jordan Harband<br />Michael Ficarra        | <sub>&nbsp;-[2025&#8209;02][capturestacktrace-notes]</sub>            |
| [Import Text][import-text]                                                     | Eemeli Aro                                            | Eemeli Aro                                                                        | Jordan Harband<br />Nicolò Ribaudo         | <sub>&nbsp;-[2025&#8209;11][import-text-notes]</sub>                  |
| [`Object.keysLength`][keyslength]                                              | Ruben Bridgewater<br />Jordan Harband                 | Ruben Bridgewater<br />Jordan Harband                                             | Eemeli Aro<br />James Snell                | <sub>&nbsp;-[2025&#8209;07][keyslength-notes-2025-07]</sub>                                       |
| [Sync Imports][import-sync]                                                    | Guy Bedford                                           | Guy Bedford                                                                       | Nicolò Ribaudo<br />James Snell            | <sub>&nbsp;-2026&#8209;01</sub>                                       |

The test262 feature flag links to a code search of tests using that feature flag, which may constitute complete or partial coverage.
The :question: means there is no feature flag for tests yet.

## Contributing to proposals

See [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) and [How We Work](https://github.com/tc39/how-we-work/blob/main/README.md#proposals) for the most up-to-date information on contributing to proposals to TC39 standards and how proposals advance.

### Onboarding proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
   * if you are a TC39 delegate, but not a member of that organization, please contact [@LJHarb](https://github.com/ljharb)
2. The Github Administrator, or one of the chairs, will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[tests-regexp-legacy]: https://github.com/tc39/test262/search?l=JavaScript&q=legacy-regexp
[function-sent]: https://github.com/tc39/proposal-function.sent
[function-sent-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-07/july-23.md#making-functionsent-inactive
[decorators]: https://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#decorators-implementation-updates
[decorators-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=decorators
[decorators-testplan]: https://github.com/tc39/test262/issues/4042
[shadowrealm]: https://github.com/tc39/proposal-shadowrealm
[realms-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#shadowrealm-status-update
[realms-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=ShadowRealm
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-23.md#temporal-update-and-normative-change
[temporal-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=Temporal
[temporal-testplan]: https://github.com/tc39/test262/issues/3002
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-02/feb-8.md#throw-expressions-update-or-stage-27
[censorship]: https://github.com/tc39/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-2.md#function-implementation-hiding-for-stage-3
[richer-keys-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[resource-management]: https://github.com/tc39/proposal-explicit-resource-management
[resource-management-notes]: https://github.com/tc39/notes/blob/main/meetings/2025-05/may-28.md#explicit-resource-management-continuation
[resource-management-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=explicit-resource-management
[async-resource-management]: https://github.com/tc39/proposal-async-explicit-resource-management
[collection-rekey]: https://github.com/tc39/proposal-collection-normalization
[async-iterator-helpers]: https://github.com/tc39/proposal-async-iterator-helpers
[async-iterator-helpers-notes]: https://github.com/tc39/notes/blob/main/meetings/2025-11/november-19.md#async-iterator-helpers-recapupdatepolyfill
[isTemplateObject]: https://github.com/tc39/proposal-array-is-template-object
[isTemplateObject-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-04/april-10.md#arrayistemplateobject-next-steps
[Dynamic Import Host Adjustment]: https://github.com/tc39/proposal-dynamic-import-host-adjustment
[Dynamic Import Host Adjustment notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#dynamic-import-host-adjustment-for-stage-2
[module-expressions]: https://github.com/tc39/proposal-module-expressions
[module-expressions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#module-expressions
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[pipe-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#pipeline-operator-for-stage-2
[destructure-private]: https://github.com/tc39/proposal-destructuring-private
[destructure-private-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-14.md#destructuring-private-fields
[regexp-buffer-boundaries]: https://github.com/tc39/proposal-regexp-buffer-boundaries
[regexp-buffer-boundaries-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md#regexp-buffer-boundaries-for-stage-2
[decorator-metadata]: https://github.com/tc39/proposal-decorator-metadata
[decorator-metadata-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-18.md#decorator-metadata-final-spec-text-review-for-stage-3
[decorator-metadata-tests]: https://github.com/tc39/test262/pull/3971
[string.dedent]: https://github.com/tc39/proposal-string-dedent
[string.dedent-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-07.md#stringdedent
[source-phase-imports]: https://github.com/tc39/proposal-source-phase-imports
[source-phase-imports-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-08.md#source-phase-imports
[source-phase-imports-tests]: https://github.com/tc39/test262/pull/3980
[json-parse-immutable]: https://github.com/tc39/proposal-json-parseimmutable
[json-parse-immutable-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-19.md#record--tuple-update
[module-declarations]: https://github.com/tc39/proposal-module-declarations
[module-declarations-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#module-declarations
[symbol-predicates]: https://github.com/tc39/proposal-symbol-predicates
[symbol-predicates-notes]: https://github.com/tc39/notes/blob/4c253a989e8da200bc8c351f1e0a557e2a5d73e4/meetings/2023-05/may-15.md?plain=1#L385
[iterator-range]: https://github.com/tc39/proposal-iterator.range
[iterator-range-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-04/april-09.md#iteratorrange-for-stage-27
[async-context]: https://github.com/tc39/proposal-async-context
[async-context-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-23.md#asynccontext-yield
[lazy-import]: https://github.com/tc39/proposal-defer-import-eval
[lazy-import-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#import-defer-for-stage-3
[lazy-import-testplan]: https://github.com/tc39/test262/issues/4111
[joint]: https://github.com/tc39/proposal-joint-iteration
[joint-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#joint-iteration-for-stage-3
[joint-testplan]: https://github.com/tc39/test262/issues/4112
[joint-notes-2024-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-30.md#joint-iteration-naming-discussion-issue-27
[dynamic-code-brand-checks]: https://github.com/tc39/proposal-dynamic-code-brand-checks
[dynamic-code-brand-checks-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#dynamic-code-brand-checks-for-stage-2
[dynamic-code-brand-checks-no-tests]: https://github.com/tc39/test262/issues/4229
[esm-phase]: https://github.com/tc39/proposal-esm-phase-imports
[esm-phase-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-12/december-04.md#esm-phase-imports-for-stage-27
[discards]: https://github.com/tc39/proposal-discard-binding
[discards-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-13.md#discard-bindings-update-or-stage-2
[scriptormodule]: https://github.com/tc39/proposal-jobcallback-module
[scriptormodule-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-31.md#continuation-propagate-active-scriptormodule-with-jobcallback-record
[async-it-helper-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-06/june-11.md#async-iterators-update
[atomics-pause-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-10/october-09.md#atomicspause-for-stage-3
[atomics-pause]: https://github.com/tc39/proposal-atomics-microwait
[atomics-pause-tests]: https://github.com/tc39/test262/pull/4147
[structs]: https://github.com/tc39/proposal-structs
[structs-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-08.md#structs-and-shared-structs-for-stage-2
[extractors]: https://github.com/tc39/proposal-extractors
[extractors-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#extractors-for-stage-2
[chunking]: https://github.com/tc39/proposal-iterator-chunking
[chunking-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-22.md#iterator-chunking-for-stage-27
[chunking-notes-2025-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-29.md#iterator-chunking-for-stage-27
[chunking-notes-2025-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-29.md#iterator-chunking-for-stage-27
[chunking-notes-2024-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#iterator-chunking-for-stage-2
[chunking-notes-2024-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-7.md#iterator-chunking-for-stage-1
[immutable-abs]: https://github.com/tc39/proposal-immutable-arraybuffer
[immutable-abs-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-29.md#immutable-arraybuffer-for-stage-3
[immutable-abs-testplan]: https://github.com/tc39/test262/issues/4509
[stack-accessor]: https://github.com/tc39/proposal-error-stack-accessor
[stack-accessor-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#errorprototypestack-accessor-for-stage-27
[nonext-private]: https://github.com/tc39/proposal-nonextensible-applies-to-private
[nonext-private-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-22.md#non-extensible-applies-to-private-for-stage-3
[deferred-reexport]: https://github.com/tc39/proposal-deferred-reexports
[deferred-reexport-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-16.md#export-defer-extracted-from-import-defer-stage-2-update-or-for-stage-1
[seeded-randoms]: https://github.com/tc39/proposal-seeded-random
[seeded-randoms-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-29.md#seededprng-for-stage-2
[clamp]: https://github.com/tc39/proposal-math-clamp
[clamp-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-29.md#mathclamp-for-stage-2
[import-bytes]: https://github.com/styfle/proposal-import-buffer
[import-bytes-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-23.md#import-bytes-for-stage-27
[import-sync]: https://github.com/tc39/proposal-import-sync
[native-promise-predicate]: https://github.com/mhofman/proposal-native-promise-predicate
[native-promise-predicate-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-22.md#native-promise-predicate-for-stage-1-or-2
[capturestacktrace]: https://github.com/tc39/proposal-error-capturestacktrace
[capturestacktrace-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-19.md#errorcapturestacktrace-for-stage-1
[await-dictionary]: https://github.com/tc39/proposal-await-dictionary
[await-dictionary-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#await-dictionary-for-stage-2-or-27
[import-text]: https://github.com/tc39/proposal-import-text
[import-text-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#import-text
[iterator-join]: https://github.com/tc39/proposal-iterator-join
[iterator-join-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-19.md#iterator-join-for-stage-1-2-or-27
[keyslength]: https://github.com/tc39/proposal-object-keys-length
[keyslength-notes-2025-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-31.md#objectpropertycount-for-stage-2

[temporal-notes-2024-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-08.md#temporal
[temporal-notes-2024-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-6.md#temporal-update
[temporal-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-21.md#temporal-update
[temporal-notes-2022-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-06.md#temporal-update
[temporal-notes-2021-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-03/mar-09.md#temporal-for-stage-3
[temporal-notes-2020-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-23.md#temporal-for-stage-3
[temporal-notes-2018-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-09/sept-26.md#temporal-for-stage-2

[decorators-notes-2023-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-16.md#decorators
[decorators-notes-2022-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-28.md#decorators-for-stage-3
[decorators-notes-2020-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#decorators-update--call-for-participation
[decorators-notes-2019-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-1.md#update-on-decorators
[decorators-notes-2019-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-03/mar-28.md#decorators-for-stage-3
[decorators-notes-2018-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-28.md#decorators-for-stage-3
[decorators-notes-2016-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-29.md#decorators

[resource-management-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-11.md#explicit-resource-management
[resource-management-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-23.md#async-explicit-resource-management-again
[resource-management-notes-2023-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-01/jan-31.md#explicit-resource-management-stage-3-update
[resource-management-notes-2022-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#explicit-resource-management-for-stage-3
[resource-management-notes-2021-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-27.md#explicit-resource-management-update
[resource-management-notes-2019-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-07/july-25.md#explicit-resource-management-for-stage-2-continuation-from-tuesday
[resource-management-notes-2018-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-24.md#explicit-resource-management

[realms-notes-2024-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-12/december-02.md#shadowrealm-for-stage-3
[realms-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-12.md#shadowrealm-update
[realms-notes-2024-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-7.md#shadowrealms-update
[realms-notes-2023-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-11/november-27.md#shadowrealm-stage-2-update
[realms-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-27.md#shadowrealm-implementer-feedback-and-demotion-to-stage-2
[realms-notes-2022-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#shadowrealm
[realms-notes-2022-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-09/sep-13.md#shadowrealm-update
[realms-notes-2022-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-06.md#shadowrealm-implementation-status-and-normate-updates
[realms-notes-2022-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-29.md#shadowrealms-updates
[realms-notes-2021-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-14.md#shadowrealms-updates-and-potential-normative-changes
[realms-notes-2021-08]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#realms-renaming-bikeshedding-thread
[realms-notes-2021-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-07/july-13.md#realms-for-stage-3
[realms-notes-2021-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-05/may-26.md#realms
[realms-notes-2021-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-04/apr-21.md#isolated-realms-update
[realms-notes-2021-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-26.md#realms-update
[realms-notes-2020-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-11/nov-17.md#realms-for-stage-3
[realms-notes-2020-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-4.md#realms-stage-2-update
[realms-notes-2020-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-5.md#update-on-realms
[realms-notes-2018-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-24.md#report-on-realms-shim-security-review
[realms-notes-2018-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-23.md#realms
[realms-notes-2018-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-03/mar-20.md#10ia-update-on-frozen-realms-in-light-of-meltdown-and-spectre
[realms-notes-2017-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-03/mar-23.md#10iic-realms-update
[realms-notes-2017-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-26.md#13iid-seeking-stage-1-for-realms
[realms-notes-2016-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-30.md#draft-proposed-frozen-realm-api
[realms-notes-2015-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-05/may-29.md#fresh-realms-breakout
[realms-notes-2014-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-06/jun-4.md#47-removal-of-realms-api-from-es6-postponement-to-es7
[realms-notes-2014-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-01/jan-29.md#security-review-for-loadersrealms

[pipe-notes-2022-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-29.md#bikeshedding-pipe-operator-topic-token
[pipe-notes-2022-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-01/jan-26.md#holistic-discussion-of-dataflow-proposals
[pipe-notes-2018-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-03/mar-22.md#pipeline-operator
[pipe-notes-2017-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-29.md#pipeline-operator
[pipe-notes-2017-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-26.md#pipeline-operator

[source-phase-imports-notes-2023-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-12.md#source-phase-imports-for-stage-3
[source-phase-imports-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-22.md#source-phase-imports-for-stage-3

[dynamic-code-brand-checks-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-11.md#dynamic-code-brand-checks
[dynamic-code-brand-checks-notes-2024-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-10.md#evalfunction-changes-for-trusted-types
[dynamic-code-brand-checks-notes-2021-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-26.md#dynamic-host-brand-checks-for-stage-2
[dynamic-code-brand-checks-notes-2019-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-07/july-25.md#dynamic-code-brand-checks

[lazy-import-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-11.md#deferred-import-evaluation-for-stage-27
[lazy-import-notes-2023-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-11.md#deferred-import-evaluation
[lazy-import-notes-2021-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-28.md#defer-module-import-eval

[esm-phase-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-13.md#esm-phase-imports
[esm-phase-notes-2024-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-6.md#esm-phase-imports

[function-sent-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-11.md#functionsent-metaproperty
[function-sent-notes-2022-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-07.md#functionsent-update
[function-sent-notes-2018-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-03/mar-22.md#12iiic-functionsent-needs-a-champion
[function-sent-notes-2015-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-11/nov-17.md#functionsent

[throw-expressions-notes-2018-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-24.md#throw-expressions
[throw-expressions-notes-2017-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-28.md#10ii-throw-expressions-request-for-reviewers-for-stage-3
[throw-expressions-notes-2017-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-27.md#throw-expressions-for-stage-2

[async-context-notes-2025-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-14.md#asynccontext-stage-2-update
[async-context-notes-2024-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#asynccontext
[async-context-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-23.md#async-context
[async-context-notes-2023-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-01/feb-01.md#async-context
