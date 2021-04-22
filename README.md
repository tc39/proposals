# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 1 Proposals](stage-1-proposals.md)
* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn/rejected, or become finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.

### Stage 3

| Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                            | <sub>Last Presented</sub>                                  |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]        | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>            |
| [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]     | <sub>[November&nbsp;2018][hashbang-notes]</sub>            |
| [Top-level `await`][await]                                                     | Myles Borins                                                            | Myles Borins                                                            | [:white_check_mark:][tests-await]                | <sub>[June&nbsp;2019][await-notes]</sub>                   |
| [RegExp Match Indices][regex-match-indices]                                    | Ron Buckton                                                             | Ron Buckton                                                             | [:white_check_mark:][tests-regexp-match-indices] | <sub>[November&nbsp;2020][regex-match-indices-notes]</sub> |
| [`Atomics.waitAsync`][nonblocking]                                             | Lars Hansen                                                             | Shu-yu Guo<br />Lars Hansen                                             | [:white_check_mark:][tests-nonblocking]          | <sub>[December&nbsp;2019][nonblocking-notes]</sub>         |
| [`.at()`][at]                                                              | Shu-yu Guo<br />Tab Atkins                                                  | Shu-yu Guo<br />Tab Atkins                                              | [:white_check_mark:][tests-at]                   | <sub>[November&nbsp;2020][at-notes]</sub>                  |
| [Import Assertions][import-assertions]                                         | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | :question:                                       | <sub>[November&nbsp;2020][import-assertions-notes]</sub>   |
| [JSON Modules][json-modules]                                                   | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | :question:                                       | <sub>January&nbsp;2021</sub>                               |
| [Ergonomic brand checks for Private Fields][private-fields-in-in]              | Jordan Harband                                                          | Jordan Harband                                                          | :question:                                       | <sub>January&nbsp;2021</sub>                               |
| [Class Static Block][static-blocks]                                            | Ron Buckton                                           | Ron Buckton                                                                 | :question:                                       | <sub>March&nbsp;2021</sub>                               |
| [Error Cause][error-cause]                                                     | Chengzhong Wu                                                           | Chengzhong Wu<br /> Hemanth HM                                          | :question:                                       | <sub>March&nbsp;2021</sub>                               |
| [Temporal][temporal]                                                           | Maggie Pint<br />Matt Johnson<br />Philipp Dunkel                       | Maggie Pint<br />Philipp Dunkel<br />Brian Terlson                      | :question:                                       | <sub>March&nbsp;2021</sub>                               |

### Stage 2

| Proposal                                                                       | Author                                                | Champion                                                                          | <sub>Last Presented</sub>                                             |
| ------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                     | HE Shi-Jun                                                               | <sub>[July&nbsp;2019][function-sent-notes]</sub>                               |
| [Decorators][decorators]                                                       | Daniel Ehrenberg                                      | Yehuda Katz<br />Brian Terlson<br />Daniel Ehrenberg                              | <sub>[September&nbsp;2020][decorators-notes]</sub>                    |
| [`throw` expressions][throw-expressions]                                       | Ron Buckton                                           | Ron Buckton                                                                       | <sub>[January&nbsp;2018][throw-expressions-notes]</sub>               |
| [Function implementation hiding][censorship]                                   | Domenic Denicola<br />Michael Ficarra                 | Michael Ficarra                                                                   | <sub>[June&nbsp;2020][censorship-notes]</sub>                         |
| [New Set methods][set-methods]                                                 | Michał Wadas<br />Sathya Gunasekaran                  | Sathya Gunasekaran                                                                | <sub>[January&nbsp;2019][set-methods-notes]</sub>                     |
| [Realms][realms]                                                               | Caridy Patiño<br />Jean-Francois Paradis              | Dave Herman<br />Mark Miller<br />Caridy Patiño                                   | <sub>[November&nbsp;2020][realms-notes]</sub>                         |
| [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                        | Mathias Bynens                                                                    | <sub>[October&nbsp;2019][unicode-sequence-properties-notes]</sub>     |
| [collection normalization][collection-rekey]                                   | Bradley Farias                                        | Bradley Farias                                                                    | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                     |
| [Array.isTemplateObject][isTemplateObject]                                     | Mike Samuel, Krzysztof Kotowicz                       | Krzysztof Kotowicz                                                                | <sub>[December&nbsp;2019][isTemplateObject-notes]</sub>               |
| [Iterator helpers][iterator-helpers]                                           | Gus Caplan                                            | Michael Ficarra<br />Jonathan Keslin                                              | <sub>[July&nbsp;2020][iterator-helpers-notes]</sub>                   |
| [Explicit Resource Management][resource-management]                            | Ron Buckton                                           | Ron Buckton                                                                       | <sub>[February&nbsp;2020][resource-management-notes]</sub>            |
| [`Map.prototype.emplace`][map-emplace]                                         | Bradley Farias                                        | Erica Pramer                                                                      | <sub>[July&nbsp;2020][map-emplace-notes]</sub>                        |
| [Dynamic Import Host Adjustment][]                                             | Mike Samuel, Krzysztof Kotowicz                       | Krzysztof Kotowicz                                                                | <sub>[December&nbsp;2019][Dynamic Import Host Adjustment notes]</sub> |
| [WeakRefs `cleanupSome`][cleanup-some]                                         | Yulia Startsev<br />Daniel Ehrenberg                  | Yulia Startsev<br />Daniel Ehrenberg                                              | <sub>[July&nbsp;2020][cleanup-some-notes]</sub>                       |
| [Record & Tuple][record-tuple]                                                 | Robin Ricard<br />Richard Button                      | Robin Ricard<br />Richard Button                                                  | <sub>[September&nbsp;2020][record-tuple-notes]</sub>                  |
| [JSON.parse source text access][json-parse-source]                             | Richard Gibson                                        | Richard Gibson                                                                    | <sub>[July&nbsp;2020][json-parse-source-notes]</sub>                  |
| [Resizable and growable ArrayBuffers][resizable]                               | Shu-yu Guo                                            | Shu-yu Guo                                                                        | <sub>[September&nbsp;2020][resizable-notes]</sub>                     |
| [Module Blocks][module-blocks]                                                 | Surma<br />Daniel Ehrenberg                           | Surma                                                                             | <sub>January&nbsp;2021</sub>                                          |
| [Array find from last][find-last]                                              | Wenlu Wang                                            | Wenlu Wang<br />Daniel Rosenwasser                                                | <sub>January&nbsp;2021</sub>                                          |
| [`Intl.DurationFormat`][intl-durationformat]                                   | Younies Mahmoud<br />Ujjwal Sharma                    | Younies Mahmoud<br />Ujjwal Sharma                                                | <sub>[January&nbsp;2021][intl-durationformat-notes]</sub>             |
| [Accessible `Object.prototype.hasOwnProperty`][object-has]                     | Jamie Kyle                                            | Tierney Cyren                                                                     | <sub>April&nbsp;2021</sub>                                            |
| [Symbols as WeakMap keys][symbols-weakmap]                                     | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard<br />Leo Balter<br />Rick Waldron<br />Caridy Patiño | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard<br />Leo Balter<br />Rick Waldron<br />Caridy Patiño | <sub>April&nbsp;2021</sub> |

:white_check_mark: means a pull request for tests was merged.

:question: means there is no pull request for tests yet.

:construction: means a pull request for tests was created, but not merged yet.

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not a member of that organization, please contact [@LJHarb](https://github.com/ljharb)
2. One of the chairs ([@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), [@MylesBorins](https://github.com/MylesBorins), or [@robpalme](https://github.com/robpalme)) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[tests-regexp-legacy]: https://github.com/tc39/test262/pull/2650
[function-sent]: https://github.com/tc39/proposal-function.sent
[function-sent-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-07/july-23.md#making-functionsent-inactive
[decorators]: https://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-23.md#decorators-a-new-proposal-iteration
[realms]: https://github.com/tc39/proposal-realms
[realms-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-17.md#realms-for-stage-3
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-18.md#tour-of-temporal
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-4.md#atomicswaitasync-for-stage-3
[tests-nonblocking]: https://github.com/tc39/test262/issues/2511
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-24.md#13iiii-throw-expressions-for-stage-3
[censorship]: https://github.com/tc39/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-2.md#function-implementation-hiding-for-stage-3
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-06/june-6.md#top-level-await-for-stage-3
[tests-await]: https://github.com/tc39/test262/pull/2274
[set-methods]: https://github.com/tc39/proposal-set-methods
[set-methods-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-29.md#update-on-set-methods
[hashbang-grammar]: https://github.com/tc39/proposal-hashbang
[tests-hashbang-grammar]: https://github.com/tc39/test262/pull/2065
[hashbang-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-11/nov-28.md#hash-bang-grammar
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[unicode-sequence-properties]: https://github.com/tc39/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-2.md#update-on-sequence-property-escapes-in-unicode-regular-expressions
[regex-match-indices]: https://github.com/tc39/proposal-regexp-match-indices
[regex-match-indices-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-16.md#regexp-matches-indices-jsc-implementation-feedback
[tests-regexp-match-indices]: https://github.com/tc39/test262/pull/2309
[resource-management]: https://github.com/tc39/proposal-explicit-resource-management
[resource-management-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#updates-on-explicit-resource-management
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-26.md#javascript-standard-library
[collection-rekey]: https://github.com/tc39/proposal-collection-normalization
[iterator-helpers]: https://github.com/tc39/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-21.md#iterator-helpers-update
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[isTemplateObject]: https://github.com/tc39/proposal-array-is-template-object
[isTemplateObject-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-4.md#arrayistemplateobject-update
[resource-management-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-24.md#explicit-resource-management
[map-emplace]: https://github.com/tc39/proposal-upsert
[map-emplace-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#upsert-now-renamed-emplace-updates--for-stage-3
[Dynamic Import Host Adjustment]: https://github.com/tc39/dynamic-import-host-adjustment
[Dynamic Import Host Adjustment notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#dynamic-import-host-adjustment-for-stage-2
[private-fields-in-in]: https://github.com/tc39/proposal-private-fields-in-in
[private-fields-in-in-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-23.md#ergonomic-brand-checks-for-private-fields-for-stage-3
[cleanup-some]: https://github.com/tc39/proposal-cleanup-some
[cleanup-some-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-21.md#weakrefs-for-stage-4--cleanupsome-for-stage-23
[json-modules]: https://github.com/tc39/proposal-json-modules
[json-modules-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-19.md#json-modules-for-stage-3-cont
[at]: https://github.com/tc39/proposal-relative-indexing-method
[at-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-17.md#item-rename--revisit-inclusion-on-string
[tests-at]: https://github.com/tc39/test262/pull/2812
[record-tuple]: https://github.com/tc39/proposal-record-tuple
[record-tuple-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-22.md#records--tuples
[json-parse-source]: https://github.com/tc39/proposal-json-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#jsonparse-source-text-access-for-stage-2
[import-assertions]: https://github.com/tc39/proposal-import-assertions
[import-assertions-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-17.md#import-assertions-status-update
[static-blocks]: https://github.com/tc39/proposal-class-static-block
[static-blocks-notes]: https://github.com/tc39/notes/blob/34be73a9a3aef9a87f74ef4db11ce8bf63625c09/meetings/2021-01/jan-25.md#conclusionresolution-6
[resizable]: https://github.com/tc39/proposal-resizablearraybuffer
[resizable-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-24.md#resizable-and-growable-arraybuffers-for-stage-2
[error-cause]: https://github.com/tc39/proposal-error-cause
[error-cause-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-19.md#error-cause-for-stage-2
[module-blocks]: https://github.com/tc39/proposal-js-module-blocks
[module-blocks-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-18.md#js-module-blocks
[find-last]: https://github.com/tc39/proposal-array-find-from-last
[object-has]: https://github.com/tc39-transfer/proposal-accessible-object-hasownproperty
[symbols-weakmap]: https://github.com/tc39/proposal-symbols-as-weakmap-keys
[symbols-weakmap-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#symbols-as-weakmap-keys-for-stage-2
[intl-durationformat]: https://github.com/tc39/proposal-intl-duration-format
[intl-durationformat-notes]: https://github.com/tc39/notes/blob/master/meetings/2021-01/jan-25.md#ecma-402-editors-report
