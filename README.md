# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 1 Proposals](stage-1-proposals.md)
* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn/rejected, or become finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.

### Stage 3

| Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
| [`globalThis`][globalThis]                                                     | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-global]             | <sub>[November&nbsp;2018][globalThis-notes]</sub>       |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]      | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>         |
| [`BigInt`][bigint]                                                             | Daniel Ehrenberg                                                        | Daniel Ehrenberg                                                        | [:white_check_mark:][tests-bigint]             | <sub>[May&nbsp;2018][bigint-notes]</sub>                |
| [`import.meta`][import-meta]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-import-meta]        | <sub>[September&nbsp;2017][import-meta-notes]</sub>     |
| [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:question:][tests-private-methods]            | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:question:][tests-class-fields]               | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo<br />Daniel Ehrenberg                                        | :question:                                     | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]   | <sub>[November&nbsp;2018][hashbang-notes]</sub>         |
| [`Promise.allSettled`][allsettled]                                             | Jason Williams<br />Robert Pamely<br />Mathias Bynens                   | Mathias Bynens                                                          | [:white_check_mark:][tests-allsettled]         | <sub>[March&nbsp;2019][allsettled-notes]</sub>          |
| [Numeric separators][numeric_separators]                                       | Sam Goto<br />Rick Waldron                                              | Sam Goto<br />Rick Waldron                                              | [:white_check_mark:][tests-numeric_separators] | <sub>[March&nbsp;2019][numeric_separators-notes]</sub>  |
| [Top-level `await`][await]                                                     | Myles Borins                                                            | Myles Borins                                                            | :question:                                     | <sub>June&nbsp;2019</sub>                               |
| [WeakRefs][weakrefs]                                                           | Dean Tribble                                         | Dean Tribble<br />Mark Miller<br />Till Schneidereit |  :question: | <sub>[June&nbsp;2019] </sub>                        |


### Stage 2

| Proposal                                                                       | Author                                               | Champion                                             | <sub>Last Presented</sub>                                           |
| ------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                    | Allen Wirfs-Brock                                    | <sub>[November&nbsp;2015][function-sent-notes]</sub>                |
| [Decorators][decorators]                                                       | Daniel Ehrenberg                                     | Yehuda Katz<br />Brian Terlson<br />Daniel Ehrenberg | <sub>[January&nbsp;2019][decorators-notes]</sub>                    |
| [`throw` expressions][throw-expressions]                                       | Ron Buckton                                          | Ron Buckton                                          | <sub>[January&nbsp;2018][throw-expressions-notes]</sub>             |
| [`Atomics.waitAsync`][nonblocking]                                             | Lars Hansen                                          | Shu-yu Guo<br />Lars Hansen                          | <sub>[September&nbsp;2017][nonblocking-notes]</sub>                 |
| [Function implementation hiding][censorship]                                   | Domenic Denicola<br />Michael Ficarra                | Domenic Denicola<br />Michael Ficarra                | <sub>[May&nbsp;2018][censorship-notes]</sub>                        |
| [New Set methods][set-methods]                                                 | Michał Wadas<br />Sathya Gunasekaran                 | Sathya Gunasekaran                                   | <sub>[January&nbsp;2019][set-methods-notes]</sub>                   |
| [Realms][realms]                                                               | Caridy Patiño<br />Jean-Francois Paradis             | Dave Herman<br />Mark Miller<br />Caridy Patiño      | <sub>[May&nbsp;2018][realms-notes]</sub>                            |
| [`ArrayBuffer.prototype.transfer`][buffer-transfer]                            | Domenic Denicola                                     | Domenic Denicola                                     | <sub>[July&nbsp;2018][buffer-transfer-notes]</sub>                  |
| [RegExp Match array offsets][regex-offsets]                                    | Ron Buckton                                          | Ron Buckton                                          | <sub>[July&nbsp;2018][regex-offsets-notes]</sub>                    |
| [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                       | Mathias Bynens                                       | <sub>[September&nbsp;2018][unicode-sequence-properties-notes]</sub> |
| [Temporal][temporal]                                                           | Maggie Pint<br />Matt Johnson<br />Philipp Dunkel    | Maggie Pint<br />Philipp Dunkel<br />Brian Terlson   | <sub>[September&nbsp;2018][temporal-notes]</sub>                    |
| [collection normalization][collection-rekey]                                   | Bradley Farias                                       | Bradley Farias                                       | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                   |
| [`String.prototype.replaceAll`][replace-all]                                   | Peter Marshall<br />Jakob Gruber<br />Mathias Bynens | Mathias Bynens                                       | <sub>[March&nbsp;2019][replace-all-notes]</sub>                     |
| [`for-in` mechanics][for-in-mechanics]                                         | Kevin Gibbons                                        | Kevin Gibbons                                        | <sub>June&nbsp;2019</sub>                                           |
| [Array.isTemplateObject][isTemplateObject]                                     | Mike Samuel                                          | Mike Samuel                                          | <sub>June&nbsp;2019</sub>                                           |
| [Optional Chaining][chaining]                    | Gabriel Isenberg<br />Claude Pache<br />Dustin Savery | Gabriel Isenberg<br />Dustin Savery<br />Justin Ridgewell<br />Daniel Rosenwasser | <sub>June&nbsp;2019</sub>                                           |
| [Nullish coalescing Operator][nullish-coalescing]                              | Gabriel Isenberg                          | Gabriel Isenberg<br />Justin Ridgewell<br />Daniel Rosenwasser  | <sub>June&nbsp;2019</sub>                                           |

:white_check_mark: means a pull request for tests was merged.

:question: means there is no pull request for tests yet.

:construction: means a pull request for tests was created, but not merged yet.

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[globalThis]: https://github.com/tc39/proposal-global
[globalThis-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-11/nov-29.md#kevins-1pm-talk
[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[bigint]: https://github.com/tc39/proposal-bigint
[bigint-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-22.md#bigint-status-update
[class-fields]: https://github.com/tc39/proposal-class-fields
[class-fields-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[function-sent]: https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
[function-sent-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2015-11/nov-17.md#functionsent
[decorators]: http://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#decorators-for-stage-3
[import-meta]: https://github.com/tc39/proposal-import-meta
[import-meta-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-09/sept-27.md#12iiic-importmeta-for-stage-3
[numeric_separators]: https://github.com/tc39/proposal-numeric-separator
[numeric_separators-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-28.md#decorator-based-extended-numeric-literals-status-update-and-numeric-separators-for-stage-3
[tests-numeric_separators]: https://test262.report/features/numeric-separator-literal
[private-methods]: https://github.com/tc39/proposal-private-methods
[private-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[weakrefs-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#weak-references-for-stage-2
[realms]: https://github.com/tc39/proposal-realms
[realms-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#realms
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-27.md#temporal-for-stage-2
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-09/sept-26.md#12ig--atomicswaitasync-for-stage-2
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-24.md#13iiii-throw-expressions-for-stage-3
[replace-all]: https://github.com/tc39/proposal-string-replaceall
[replace-all-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-26.md#stringprototypereplaceall-for-stage-2
[static-class-features]: http://github.com/tc39/proposal-static-class-features/
[static-class-features-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#static-class-features-for-stage-3
[tests-global]: https://github.com/tc39/test262/issues/765
[tests-import-meta]: https://github.com/tc39/test262/pull/1888
[tests-regexp-legacy]: https://github.com/tc39/test262/issues/1165
[tests-bigint]: https://github.com/tc39/test262/issues/1056
[tests-private-methods]: https://github.com/tc39/test262/issues/1343
[tests-numeric_separators]: https://github.com/tc39/test262/issues/1051
[tests-class-fields]: https://github.com/tc39/test262/issues/1161
[tests-allsettled]: https://github.com/tc39/test262/pull/2124
[censorship]: https://github.com/domenic/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-24.md#functionprototypetostring-censorship-for-stage-2-continued-discussion
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-22.md#top-level-await
[set-methods]: https://github.com/tc39/set-methods
[set-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-29.md#update-on-set-methods
[collection-methods]: https://github.com/tc39/collection-methods
[collection-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-23.md#13iiik-new-set-builtin-methods-for-stage-2
[hashbang-grammar]: https://github.com/tc39/proposal-hashbang
[tests-hashbang-grammar]: https://github.com/tc39/test262/pull/2065
[hashbang-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-11/nov-28.md#hash-bang-grammar
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[slice-notation]: https://github.com/tc39/proposal-slice-notation/
[slice-notation-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#slice-notation-for-stage-1
[logical-assignment]: https://github.com/tc39/proposal-logical-assignment
[logical-assignment-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#10ie-logical-assignment-operators-for-stage-1-cont
[unicode-sequence-properties]: https://github.com/tc39/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#update-on-sequence-properties-in-unicode-property-escapes
[module-keys]: https://github.com/tc39/tc39-module-keys
[module-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#module-keys-strawman-for-stage-1
[static-blocks]: https://github.com/tc39/proposal-class-static-block#readme
[static-blocks-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#class-static-block
[class-access-expressions]: https://github.com/tc39/proposal-class-access-expressions
[class-access-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#class-access-expressions
[matching]: https://github.com/tc39/proposal-pattern-matching
[matching-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-24.md#pattern-matching-for-stage-1
[regex-offsets]: https://github.com/tc39/proposal-regexp-match-offsets
[regex-offsets-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#regexp-match-offsets
[buffer-transfer]: https://github.com/domenic/proposal-arraybuffer-transfer/
[buffer-transfer-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#arraybufferprototypetransfer
[resource-management]: https://github.com/tc39/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#explicit-resource-management
[dynamic-modules]: https://github.com/guybedford/proposal-dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#dynamic-modules
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-26.md#javascript-standard-library
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[modules-pragma-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-07/jul-26.md#9ivb-modulescript-pragma-for-stage-2
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-25.md#for-in-mechanics
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[json-parse-source]: https://github.com/tc39/proposal-json-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-27.md#jsonparse-source-text-access
[allsettled]: https://github.com/tc39/proposal-promise-allSettled
[allsettled-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-26.md#promiseallsettled-for-stage-3
[collection-rekey]: https://github.com/tc39-transfer/proposal-collection-normalization
[freeze-proto]: https://github.com/tc39/proposal-freeze-prototype
[freeze-proto-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#freezing-prototypes-for-stage-1
[new.initialize]: https://github.com/littledan/proposal-new-initialize
[new.initialize-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#newinitialize-for-stage-1
[iterator-helpers]: https://github.com/tc39/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#iterator-helpers-for-stage-1
[promise-any]: https://github.com/tc39/proposal-promise-any
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-25.md#for-in-mechanics
[isTemplateObject]: https://github.com/tc39-transfer/proposal-array-is-template-object
[chaining]: https://github.com/tc39/proposal-optional-chaining
[chaining-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-11/nov-28.md#update-on-optional-chaining
[nullish-coalescing]: https://github.com/tc39/proposal-nullish-coalescing
[nullish-coalescing-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#10iif-nullish-coalescing-for-stage-2
