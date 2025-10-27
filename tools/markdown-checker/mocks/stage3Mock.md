# Stage 3 Mock
## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn/rejected, or become finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.


| Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:question:][tests-regexp-legacy]      | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>         |
| [`import.meta`][import-meta]                                                   | Domenic Denicola                                                        | (none)                                                                  | [:white_check_mark:][tests-import-meta]        | <sub>[September&nbsp;2017][import-meta-notes]</sub>     |
| [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:question:][tests-private-methods]            | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:question:][tests-class-fields]               | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo<br />Daniel Ehrenberg                                        | :question:                                     | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]   | <sub>[November&nbsp;2018][hashbang-notes]</sub>         |
| [Numeric separators][numeric_separators]                                       | Sam Goto<br />Rick Waldron                                              | Sam Goto<br />Rick Waldron                                              | [:white_check_mark:][tests-numeric_separators] | <sub>[June&nbsp;2019][numeric_separators-notes]</sub>   |
| [Top-level `await`][await]                                                     | Myles Borins                                                            | Myles Borins                                                            | [:white_check_mark:][tests-await]              | <sub>[June&nbsp;2019][await-notes]</sub>                |
| [WeakRefs][weakrefs]                                                           | Dean Tribble<br />Sathya Gunasekaran                          | Dean Tribble<br />Mark Miller<br />Till Schneidereit<br />Sathya Gunasekaran      | [:white_check_mark:][tests-weakrefs]           | <sub>[June&nbsp;2019][weakrefs-notes]</sub>             |
| [Nullish coalescing Operator][nullish-coalescing]                              | Gabriel Isenberg                                                        | Gabriel Isenberg<br />Justin Ridgewell<br />Daniel Rosenwasser          | [:white_check_mark:][tests-nullish-coalescing] | <sub>[July 2019][nullish-coalescing-notes]</sub>        |
| [RegExp Match array offsets][regex-offsets]                                    | Ron Buckton                                                             | Ron Buckton                                                             | :question:                                     | <sub>[July 2019][regex-offsets-notes]</sub>             |
| [Optional Chaining][chaining]                                                  | Gabriel Isenberg<br />Claude Pache<br />Dustin Savery         | Gabriel Isenberg<br />Dustin Savery<br />Justin Ridgewell<br />Daniel Rosenwasser | [:white_check_mark:][tests-chaining]           | <sub>[July 2019][chaining-notes]</sub>                  |
| [`for-in` mechanics][for-in-mechanics]                                         | Kevin Gibbons                                                           | Kevin Gibbons                                                           | :question:                                     | <sub>October&nbsp;2019</sub>                            |
| [`String.prototype.replaceAll`][replace-all]                                   | Peter Marshall<br />Jakob Gruber<br />Mathias Bynens                    | Mathias Bynens                                                          | :question:                                     | <sub>October&nbsp;2019</sub>                            |
| [`Promise.any`][promise-any]                                                   | Mathias Bynens<br />Kevin Gibbons<br />Sergey Rubanov                   | Mathias Bynens                                                          | [:question:][tests-promise-any]                | <sub>October 2019</sub>                                 |


[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[tests-regexp-legacy]: https://github.com/tc39/test262/issues/2371
[class-fields]: https://github.com/tc39/proposal-class-fields
[class-fields-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[tests-class-fields]: https://github.com/tc39/test262/issues/1161
[function-sent]: https://github.com/tc39/proposal-function.sent
[function-sent-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-23.md#making-functionsent-inactive
[decorators]: http://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#decorators-for-stage-3
[import-meta]: https://github.com/tc39/proposal-import-meta
[import-meta-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-09/sept-27.md#12iiic-importmeta-for-stage-3
[tests-import-meta]: https://github.com/tc39/test262/pull/1888
[numeric_separators]: https://github.com/tc39/proposal-numeric-separator
[numeric_separators-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-28.md#decorator-based-extended-numeric-literals-status-update-and-numeric-separators-for-stage-3
[tests-numeric_separators]: https://test262.report/features/numeric-separator-literal
[private-methods]: https://github.com/tc39/proposal-private-methods
[private-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[tests-private-methods]: https://github.com/tc39/test262/issues/1343
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[weakrefs-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-6.md#weakrefs
[tests-weakrefs]: https://github.com/tc39/test262/pull/2192
[realms]: https://github.com/tc39/proposal-realms
[realms-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#realms
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-27.md#temporal-for-stage-2
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-4.md#atomicswaitasync-asking-for-stage-3-reviewers
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-24.md#13iiii-throw-expressions-for-stage-3
[replace-all]: https://github.com/tc39/proposal-string-replaceall
[replace-all-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-26.md#stringprototypereplaceall-for-stage-2
[static-class-features]: http://github.com/tc39/proposal-static-class-features/
[static-class-features-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#static-class-features-for-stage-3
[censorship]: https://github.com/domenic/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-24.md#update-on-function-implementation-hiding
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-6.md#top-level-await-for-stage-3
[tests-await]: https://github.com/tc39/test262/pull/2274
[set-methods]: https://github.com/tc39/set-methods
[set-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-29.md#update-on-set-methods
[hashbang-grammar]: https://github.com/tc39/proposal-hashbang
[tests-hashbang-grammar]: https://github.com/tc39/test262/pull/2065
[hashbang-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-11/nov-28.md#hash-bang-grammar
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[unicode-sequence-properties]: https://github.com/tc39/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#update-on-sequence-properties-in-unicode-property-escapes
[regex-offsets]: https://github.com/tc39/proposal-regexp-match-offsets
[regex-offsets-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-24.md#regexp-match-offsets-update
[buffer-transfer]: https://github.com/domenic/proposal-arraybuffer-transfer/
[buffer-transfer-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#arraybufferprototypetransfer
[resource-management]: https://github.com/tc39/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-25.md#explicit-resource-management-for-stage-2-continuation-from-tuesday
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-26.md#javascript-standard-library
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-4.md#for-in-enumeration-order-for-stage-2
[collection-rekey]: https://github.com/tc39-transfer/proposal-collection-normalization
[iterator-helpers]: https://github.com/tc39/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-24.md#iterator-methods-update--stage-2
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-25.md#for-in-mechanics
[isTemplateObject]: https://github.com/tc39-transfer/proposal-array-is-template-object
[isTemplateObject-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-5.md#arrayistemplateobject-for-stage-1-or-2
[chaining]: https://github.com/tc39/proposal-optional-chaining
[chaining-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-25.md#optional-chaining-for-stage-3
[tests-chaining]: https://github.com/tc39/test262/pull/2212
[nullish-coalescing]: https://github.com/tc39/proposal-nullish-coalescing
[nullish-coalescing-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-23.md#nullish-coalescing
[tests-nullish-coalescing]: https://github.com/tc39/test262/pull/2402
[promise-any]: https://github.com/tc39/proposal-promise-any
[promise-any-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-24.md#promiseany
[tests-promise-any]: https://github.com/tc39/test262/issues/2410
[resource-management]: https://github.com/tc39/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#explicit-resource-management
[map-upsert]: https://github.com/thumbsupep/proposal-upsert
[map-upsert-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-25.md#mapupdateorinsert
