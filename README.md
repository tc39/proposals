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

| Proposal                                                                       | Author                                                                  | Champion                                                                | <sub>Test262 Feature Flag</sub>                                     | <sub>Last Presented</sub>                                  |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | <sub>[legacy-regexp][tests-regexp-legacy]</sub>                     | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>            |
| [Temporal][temporal]                                                           | Philipp Dunkel<br />Maggie Johnson-Pint<br />Matt Johnson-Pint<br />Brian Terlson<br />Shane Carr<br />Ujjwal Sharma<br />Philip Chimento<br />Jason Williams<br />Justin Grant | Philipp Dunkel<br />Maggie Johnson-Pint<br />Matt Johnson-Pint<br />Brian Terlson<br />Shane Carr<br />Ujjwal Sharma<br />Philip Chimento<br />Jason Williams<br />Justin Grant| <sub>[Temporal][temporal-tests] [testing plan][temporal-testplan]</sub> | <sub>[July&nbsp;2024][temporal-notes]</sub> |
| [Decorators][decorators]                                                       | Daniel Ehrenberg<br />Kristen Hewell Garrett                            | Kristen Hewell Garrett                                                  | <sub>[decorators][decorators-tests] [testing plan][decorators-testplan]</sub> | <sub>[March&nbsp;2023][decorators-notes]</sub>   |
| [JSON.parse source text access][json-parse-source]                             | Richard Gibson                                                          | Richard Gibson                                                          | <sub>[json-parse-with-source][json-parse-source-tests] [testing plan][json-parse-testplan]</sub> | <sub>[January&nbsp;2023][json-parse-source-notes]</sub> |
| [`Array.fromAsync`][from-async]                                                | J.S. Choi                                                               | J.S. Choi                                                               | <sub>[Array.fromAsync][from-async-tests]</sub>                      | <sub>[May&nbsp;2023][from-async-notes]</sub>               |
| [Explicit Resource Management][resource-management]                            | Ron Buckton                                                             | Ron Buckton                                                             | <sub>[explicit-resource-management][resource-management-tests]      | <sub>[March&nbsp;2023][resource-management-notes]</sub>    |
| [Decorator Metadata][decorator-metadata]                                       | Kristen Hewell Garrett                                                  | Kristen Hewell Garrett                                                  | <sub>[decorator-metadata][decorator-metadata-tests]</sub>           | <sub>[May&nbsp;2023][decorator-metadata-notes]</sub>       |
| [Source Phase Imports][source-phase-imports]                                   | Luca Casonato                                                           | Guy Bedford<br />Luca Casonato                                          | <sub>[source-phase-imports][source-phase-imports-tests]</sub>       | <sub>[July&nbsp;2023][source-phase-imports-notes]</sub>    |
| [Time Zone Canonicalization][time-zone-canon]                                  | Justin Grant                                                            | Justin Grant<br />Richard Gibson                                        | <sub>[Temporal.TimeZone][time-zone-canon-tests]                     | <sub>[July&nbsp;2023][time-zone-canon-notes]</sub>         |
| [Dynamic Code Brand Checks][dynamic-code-brand-checks]                         | Nicolò Ribaudo                                                          | Krzysztof Kotowicz<br />Mike Samuel<br />Nicolò Ribaudo                 | :question:                                                          | <sub>April&nbsp;2024</sub>                                 |
| [Redeclarable global `eval`-introduced `var`s][redeclarable-global-eval-vars]  | Shu-yu Guo                                                              | Shu-yu Guo                                                              | <sub>[Testing plan][redeclarable-global-eval-vars-testplan]</sub>   | <sub>[April&nbsp;2024][redeclarable-global-eval-vars-notes]</sub> |
| [`Atomics.pause`][atomics-pause]                                               | Shu-yu Guo                                                              | Shu-yu Guo                                                              | <sub>[Atomics.pause][atomics-pause-tests]</sub>                     | <sub>[October&nbsp;2024][atomics-pause-notes]</sub>        |
| [Deferring Module Evaluation][lazy-import]                                     | Yulia Startsev<br />Guy Bedford                                         | Yulia Startsev<br />Guy Bedford<br />Nicolò Ribaudo                     | <sub>[Testing plan][lazy-import-testplan]</sub>                     | <sub>[February&nbsp;2025][lazy-import-notes]</sub>         |
| [`Upsert`][upsert]                                                             | Daniel Minor, Lauritz Thoresen Angeltveit, Jonas Haukenes, Sune Lianes, Vetle Larsen, Mathias Hop Ness | Daniel Minor                             | <sub>[Testing plan][upsert-testing-plan]</sub>                      | <sub>[July&nbsp;2025][upsert-notes]</sub>                  |
| [Non-extensible Applies to Private][nonext-private]                            | Mark Miller<br />Shu-yu Guo<br />Chip Morningstar<br />Erik Marks | Mark Miller<br />Shu-yu Guo<br />Chip Morningstar<br />Erik Marks             | :question:                                                          | <sub>[September&nbsp;2025][nonext-private-notes]</sub>     |


### Stage 2.7

| Proposal                                                                       | Author                                                                  | Champion                                                                | <sub>Test262 Feature Flag</sub>                                     | <sub>Last Presented</sub>                                  |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [ShadowRealm][shadowrealm]                                                     | Caridy Patiño<br />Jean-Francois Paradis   | Dave Herman<br />Mark Miller<br />Caridy Patiño<br />Leo Balter<br />Rick Waldron<br />Chengzhong Wu | <sub>[ShadowRealm][realms-tests]</sub>                              | <sub>[February&nbsp;2024][realms-notes]</sub>              |
| [Joint Iteration][joint]                                                       | Michael Ficarra                                                         | Michael Ficarra                                                         | <sub>[Testing plan][joint-testplan]</sub>                           | <sub>[June&nbsp;2024][joint-notes]</sub>                   |
| [ESM Phase Imports][esm-phase]                                                 | Luca Casonato<br />Guy Bedford                                          | Luca Casonato<br />Guy Bedford                                          | :question:                                                          | <sub>[December&nbsp;2024][esm-phase-notes]</sub>           |
| [Immutable ArrayBuffers][immutable-abs]                                        | Mark Miller<br />Peter Hoddie<br />Richard Gibson<br />Jack Works | Mark Miller<br />Peter Hoddie<br />Richard Gibson<br />Jack Works             | :question:                                                          | <sub>[February&nbsp;2025][immutable-abs-notes]</sub>       |
| [iterator chunking][chunking]                                                  | Michael Ficarra                                                   | Michael Ficarra                                                               | :question:                                                          | <sub>[September&nbsp;2025][chunking-notes]</sub>           |
| [Import Bytes][import-bytes]                                                   | Steven Salat                                                      | Steven Salat                                                                  | :question:                                                          | <sub>[September&nbsp;2025][import-bytes-notes]</sub>       |


### Stage 2

| Proposal                                                                       | Author                                                | Champion                                                                          | Stage 2.7 reviewers                        | <sub>Last Presented</sub>                                             |
| ------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                     | HE Shi-Jun                                                                        |                                            | <sub>[July&nbsp;2019][function-sent-notes]</sub>                      |
| [`throw` expressions][throw-expressions]                                       | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>[February&nbsp;2024][throw-expressions-notes]</sub>              |
| [Function implementation hiding][censorship]                                   | Domenic Denicola<br />Michael Ficarra                 | Michael Ficarra                                                                   |                                            | <sub>[June&nbsp;2020][censorship-notes]</sub>                         |
| [collection normalization][collection-rekey]                                   | Bradley Farias                                        | Bradley Farias                                                                    |                                            | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                     |
| [isTemplateObject][isTemplateObject]                                           | Mike Samuel, Krzysztof Kotowicz                       | Daniel Ehrenberg<br />Jordan Harband                                              |                                            | <sub>[April&nbsp;2024][isTemplateObject-notes]</sub>                  |
| [Dynamic Import Host Adjustment][]                                             | Mike Samuel, Krzysztof Kotowicz                       | Krzysztof Kotowicz                                                                |                                            | <sub>[December&nbsp;2019][Dynamic Import Host Adjustment notes]</sub> |
| [Module Expressions][module-expressions]                                       | Surma<br />Daniel Ehrenberg<br />Nicolò Ribaudo       | Surma<br />Nicolò Ribaudo                                                         |                                            | <sub>[November&nbsp;2022][module-expressions-notes]</sub>             |
| [Pipeline Operator][pipeline]                                                  | J. S. Choi<br />James DiGioia<br />Ron Buckton<br />Tab Atkins | J. S. Choi<br />Ron Buckton<br />Tab Atkins                              |                                            | <sub>[August&nbsp;2021][pipe-notes]</sub>                             |
| [Destructure Private Fields][destructure-private]                              | Justin Ridgewell                                      | Justin Ridgewell                                                                  |                                            | <sub>[December&nbsp;2021][destructure-private-notes]</sub>            |
| [RegExp Buffer Boundaries (`\A`, `\z`, `\Z`)][regexp-buffer-boundaries]        | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>[December&nbsp;2021][regexp-buffer-boundaries-notes]</sub>       |
| [String.dedent][string.dedent]                                                 | Misha Kaletsky<br />Hemanth HM<br />Justin Ridgewell  | Hemanth HM<br />Justin Ridgewell                                                  |                                            | <sub>[June&nbsp;2022][string.dedent-notes]</sub>                      |
| [JSON.parseImmutable][json-parse-immutable]                                    | Robin Ricard<br />Richard Button<br />Nicolò Ribaudo<br />Ashley Claymore | Robin Ricard<br />Richard Button<br />Nicolò Ribaudo<br />Ashley Claymore |                                | <sub>[July&nbsp;2022][json-parse-source-notes]</sub>                  |
| [Module Declarations][module-declarations]                                     | Daniel Ehrenberg<br />Nicolò Ribaudo                  | Daniel Ehrenberg<br />Mark Miller<br />Nicolò Ribaudo                             |                                            | <sub>[November&nbsp;2022][module-declarations-notes]</sub>            |
| [Symbol Predicates][symbol-predicates]                                         | Robin Ricard<br />Jordan Harband                      | Ashley Claymore<br />Jordan Harband                                               |                                            | <sub>[May&nbsp;2023][symbol-predicates-notes]</sub>                   |
| [Async Iterator helpers][async-iterator-helpers]                               | Gus Caplan                                            | Michael Ficarra<br />Jonathan Keslin<br />Kevin Gibbons                           |                                            | <sub>[June&nbsp;2024][async-it-helper-notes]</sub>                    |
| [Iterator.range][iterator-range]                                               | Jack Works                                            | Jack Works                                                                        |                                            | <sub>[April&nbsp;2024][iterator-range-notes]</sub>                    |
| [Async Context][async-context]                                                 | Chengzhong Wu                                         | Andreu Botella<br />Chengzhong Wu<br />Justin Ridgewell                           | James M Snell<br />Mark S. Miller          | <sub>[April&nbsp;2024][async-context-notes]</sub>                     |
| ["Discard" (`void`) Bindings][discards]                                        | Ron Buckton                                           | Ron Buckton                                                                       |                                            | <sub>[June&nbsp;2024][discards-notes]</sub>                           |
| [Propagate active ScriptOrModule with JobCallback Record][scriptormodule]      | Chengzhong Wu                                         | Chengzhong Wu                                                                     |                                            | <sub>[July&nbsp;2024][scriptormodule-notes]</sub>                     |
| [Structs: Fixed Layout Objects and Some Synchronization Primitives][structs]   | Shu-yu Guo                                            | Shu-yu Guo                                          | Mark Miller<br />Waldemar Horwat<br />Yulia Startsev<br />Nicolò Ribaudo | <sub>[October&nbsp;2024][structs-notes]</sub>                         |
| [Extractors][extractors]                                                       | Ron Buckton                                           | Ron Buckton                                                                       | Jordan Harband<br />Justin Ridgewell       | <sub>[October&nbsp;2024][extractors-notes]</sub>                      |
| [Error Stack Accessor][stack-accessor]                                         | Jordan Harband                                        | Jordan Harband<br />Mark Miller                                                   | Nicolò Ribaudo<br />Michael Ficarra        | <sub>[February&nbsp;2025][stack-accessor-notes]</sub>                 |
| [Deferred Re-exports][deferred-reexport]                                       | Nicolò Ribaudo                                        | Nicolò Ribaudo                                                                    | Chengzhong Wu<br />Ashley Claymore<br />Guy Bedford | <sub>[April&nbsp;2025][deferred-reexport-notes]</sub>        |
| [SeededPRNG][seeded-randoms]                                                   | Tab Atkins                                            | Tab Atkins                                                                        | Kevin Gibbons<br />Jesse Alama<br />Mark Miller | <sub>[May&nbsp;2025][seeded-randoms-notes]</sub>                 |
| [`Math.clamp`][clamp]                                                          | Oliver Medhurst                                       | Oliver Medhurst                                                                   |                                            | <sub>[May&nbsp;2025][clamp-notes]</sub>                               |
| [Native Promise Predicate][native-promise-predicate]                           | Mathieu Hofman                                        | Mathieu Hofman                                                                    | Jordan Harband<br />James Snell<br />Justin Ridgewell | <sub>[September&nbsp;2025][native-promise-predicate-notes]</sub> |
| [`Error.captureStackTrace`][capturestacktrace]                                 | Matthew Gaudet                                         | Matthew Gaudet<br />Dan Minor                                                    | Jordan Harband<br />Michael Ficarra        | <sub>[February&nbsp;2025][capturestacktrace-notes]</sub>          |

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
[decorators-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-28.md#decorators-for-stage-3
[decorators-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=decorators
[decorators-testplan]: https://github.com/tc39/test262/issues/4042
[shadowrealm]: https://github.com/tc39/proposal-shadowrealm
[realms-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-7.md#shadowrealms-update
[realms-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=ShadowRealm
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-30.md#temporal-update--bug-fixes
[temporal-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=Temporal
[temporal-testplan]: https://github.com/tc39/test262/issues/3002
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-02/feb-8.md#throw-expressions-update-or-stage-27
[censorship]: https://github.com/tc39/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-2.md#function-implementation-hiding-for-stage-3
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[resource-management]: https://github.com/tc39/proposal-explicit-resource-management
[resource-management-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#explicit-resource-management-for-stage-3
[resource-management-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=explicit-resource-management
[async-resource-management]: https://github.com/tc39/proposal-async-explicit-resource-management
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-26.md#javascript-standard-library
[collection-rekey]: https://github.com/tc39/proposal-collection-normalization
[async-iterator-helpers]: https://github.com/tc39/proposal-async-iterator-helpers
[async-iterator-helpers-notes]: https://github.com/tc39/notes/blob/main/meetings/2023-01/jan-31.md#parallel-async-iterators-via-a-tweak-to-iterator-helpers
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[isTemplateObject]: https://github.com/tc39/proposal-array-is-template-object
[isTemplateObject-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-04/april-10.md#arrayistemplateobject-next-steps
[upsert]: https://github.com/tc39/proposal-upsert
[upsert-notes]: https://github.com/tc39/notes/blob/main/meetings/2025-07/july-28.md#upsert-for-stage-3
[upsert-testing-plan]: https://github.com/tc39/test262/issues/4470
[Dynamic Import Host Adjustment]: https://github.com/tc39/proposal-dynamic-import-host-adjustment
[Dynamic Import Host Adjustment notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#dynamic-import-host-adjustment-for-stage-2
[json-parse-source]: https://github.com/tc39/proposal-json-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/notes/blob/main/meetings/2022-07/jul-19.md#conclusiondecision-2
[json-parse-source-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=json-parse-with-source
[json-parse-testplan]: https://github.com/tc39/test262/issues/4096
[module-expressions]: https://github.com/tc39/proposal-module-expressions
[module-expressions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#module-expressions
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[pipe-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#pipeline-operator-for-stage-2
[destructure-private]: https://github.com/tc39/proposal-destructuring-private
[destructure-private-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-14.md#destructuring-private-fields
[from-async]: https://github.com/tc39/proposal-array-from-async
[from-async-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-09/sep-14.md#arrayfromasync-for-stage-3
[from-async-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=Array.fromAsync
[regexp-buffer-boundaries]: https://github.com/tc39/proposal-regexp-buffer-boundaries
[regexp-buffer-boundaries-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md#regexp-buffer-boundaries-for-stage-2
[decorator-metadata]: https://github.com/tc39/proposal-decorator-metadata
[decorator-metadata-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-18.md#decorator-metadata-final-spec-text-review-for-stage-3
[decorator-metadata-tests]: https://github.com/tc39/test262/pull/3971
[named-groups-tests]: https://github.com/tc39/test262/search?l=JavaScript&q=regexp-duplicate-named-groups
[string.dedent]: https://github.com/tc39/proposal-string-dedent
[string.dedent-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-07.md#stringdedent
[source-phase-imports]: https://github.com/tc39/proposal-source-phase-imports
[source-phase-imports-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-12.md#source-phase-imports-for-stage-3
[source-phase-imports-tests]: https://github.com/tc39/test262/pull/3980
[json-parse-immutable]: https://github.com/tc39/proposal-json-parseimmutable
[module-declarations]: https://github.com/tc39/proposal-module-declarations
[module-declarations-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#module-declarations
[symbol-predicates]: https://github.com/tc39/proposal-symbol-predicates
[symbol-predicates-notes]: https://github.com/tc39/notes/blob/4c253a989e8da200bc8c351f1e0a557e2a5d73e4/meetings/2023-05/may-15.md?plain=1#L385
[iterator-range]: https://github.com/tc39/proposal-iterator.range
[iterator-range-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-04/april-09.md#iteratorrange-for-stage-27
[async-context]: https://github.com/tc39/proposal-async-context
[async-context-notes]: https://github.com/tc39/notes/blob/main/meetings/2024-04/april-09.md#asynccontext-stage-2-updates
[time-zone-canon]: https://github.com/tc39/proposal-canonical-tz#readme
[time-zone-canon-notes]: https://github.com/tc39/notes/blob/main/meetings/2023-07/july-12.md#time-zone-canonicalization-for-stage-3
[time-zone-canon-tests]: https://github.com/tc39/test262/pull/3837
[lazy-import]: https://github.com/tc39/proposal-defer-import-eval
[lazy-import-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#import-defer-for-stage-3
[lazy-import-testplan]: https://github.com/tc39/test262/issues/4111
[joint]: https://github.com/tc39/proposal-joint-iteration
[joint-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-12.md#joint-iteration-for-stage-27
[joint-testplan]: https://github.com/tc39/test262/issues/4112
[redeclarable-global-eval-vars]: https://github.com/tc39/proposal-redeclarable-global-eval-vars
[redeclarable-global-eval-vars-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-08.md#make-eval-introduced-global-vars-redeclarable-for-stage-27
[redeclarable-global-eval-vars-testplan]: https://github.com/tc39/test262/issues/4223
[dynamic-code-brand-checks]: https://github.com/tc39/proposal-dynamic-code-brand-checks
[dynamic-code-brand-checks-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#dynamic-code-brand-checks-for-stage-2
[error-iserror-tests]: https://github.com/tc39/test262/pull/4266
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
[immutable-abs]: https://github.com/tc39/proposal-immutable-arraybuffer
[immutable-abs-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#immutable-arraybuffer
[stack-accessor]: https://github.com/tc39/proposal-error-stack-accessor
[stack-accessor-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-19.md#error-stack-accessor
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
[native-promise-predicate]: https://github.com/mhofman/proposal-native-promise-predicate
[native-promise-predicate-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-22.md#native-promise-predicate-for-stage-1-or-2
[capturestacktrace]: https://github.com/tc39/proposal-error-capturestacktrace
[capturestacktrace-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-19.md#errorcapturestacktrace-for-stage-1
