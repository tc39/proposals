# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
| [`globalThis`][globalThis]                                                     | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-global]             | <sub>[November&nbsp;2018](globalThis-notes)</sub>       |
| [`import()`][dynamic-import]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-dynamic-import]     | <sub>[November&nbsp;2016][dynamic-import-notes]</sub>   |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]      | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>         |
| [`BigInt`][bigint]                                                             | Daniel Ehrenberg                                                        | Daniel Ehrenberg                                                        | [:white_check_mark:][tests-bigint]             | <sub>[May&nbsp;2018][bigint-notes]</sub>                |
| [`import.meta`][import-meta]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-import-meta]        | <sub>[September&nbsp;2017][import-meta-notes]</sub>     |
| [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:question:][tests-private-methods]            | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:question:][tests-class-fields]               | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo<br />Daniel Ehrenberg                                        |                                                | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [`String.prototype.matchAll`][matchall]                                        | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-matchall]           | <sub>[September&nbsp;2018][matchall-notes]</sub>        |
| [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]   | <sub>[November&nbsp;2018][hashbang-notes]</sub>         |

### Stage 2

| Proposal                                                                       | Author                                            | Champion                                             | <sub>Last Presented</sub>                                           |
| ------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| [Numeric separators][numeric_separators]                                       | Sam Goto<br />Rick Waldron                        | Sam Goto<br />Rick Waldron                           | <sub>[May&nbsp;2018][numeric_separators-notes]</sub>                |
| [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                 | Allen Wirfs-Brock                                    | <sub>[November&nbsp;2015][function-sent-notes]</sub>                |
| [Decorators][decorators]                                                       | Daniel Ehrenberg                                  | Yehuda Katz<br />Brian Terlson<br />Daniel Ehrenberg | <sub>[January&nbsp;2019][decorators-notes]</sub>                    |
| [`throw` expressions][throw-expressions]                                       | Ron Buckton                                       | Ron Buckton                                          | <sub>[January&nbsp;2018][throw-expressions-notes]</sub>             |
| [`Atomics.waitAsync`][nonblocking]                                             | Lars Hansen                                       | Shu-yu Guo<br />Lars Hansen                          | <sub>[September&nbsp;2017][nonblocking-notes]</sub>                 |
| [WeakRefs][weakrefs]                                                           | Dean Tribble                                      | Dean Tribble                                         | <sub>[March&nbsp;2018][weakrefs-notes]</sub>                        |
| [Top-level `await`][await]                                                     | Myles Borins                                      | Myles Borins                                         | <sub>[May&nbsp;2018][await-notes]</sub>                             |
| [`Function.prototype.toString()` censorship][censorship]                       | Domenic Denicola                                  | Domenic Denicola                                     | <sub>[May&nbsp;2018][censorship-notes]</sub>                        |
| [New Set methods][set-methods]                                                 | Michał Wadas<br />Sathya Gunasekaran              | Sathya Gunasekaran                                   | <sub>[January&nbsp;2019][set-methods-notes]</sub>                   |
| [Realms][realms]                                                               | Caridy Patiño<br />Jean-Francois Paradis          | Dave Herman<br />Mark Miller<br />Caridy Patiño      | <sub>[May&nbsp;2018][realms-notes]</sub>                            |
| [`ArrayBuffer.prototype.transfer`][buffer-transfer]                            | Domenic Denicola                                  | Domenic Denicola                                     | <sub>[July&nbsp;2018][buffer-transfer-notes]</sub>                  |
| [RegExp Match array offsets][regex-offsets]                                    | Ron Buckton                                       | Ron Buckton                                          | <sub>[July&nbsp;2018][regex-offsets-notes]</sub>                    |
| [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                    | Mathias Bynens                                       | <sub>[September&nbsp;2018][unicode-sequence-properties-notes]</sub> |
| [Temporal][temporal]                                                           | Maggie Pint<br />Matt Johnson<br />Philipp Dunkel | Maggie Pint<br />Philipp Dunkel<br />Brian Terlson   | <sub>[September&nbsp;2018][temporal-notes]</sub>                    |
| [`Promise.allSettled`][allsettled]                                             | Jason Williams<br />Robert Pamely                 | Mathias Bynens                                       | <sub>[January&nbsp;2019][allsettled-notes]</sub>                    |
| [collection normalization][collection-rekey]                                   | Bradley Farias                                    | Bradley Farias                                       | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                   |

### Stage 1

| Proposal                                                                                     | Author                                                | Champion                                               | <sub>Last Presented</sub>                                         |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      | <sub>[July&nbsp;2017][export-from-notes]</sub>                    |
| [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          | <sub>[May&nbsp;2017][observable-notes]</sub>                      |
| [Frozen Realms][frozen-realms]                                                               | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   | <sub>[March&nbsp;2018][frozen-realms-notes]</sub>                 |
| [`Math` Extensions][more-math]                                                               | Rick Waldron                                          | Rick Waldron                                           | <sub>[July&nbsp;2016][more-math-notes]</sub>                      |
| [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             | <sub>[September&nbsp;2016][collection-of-from-notes]</sub>        |
| Generator arrow functions (`=>*`)                                                            |                                                       | Brendan Eich<br />Domenic Denicola                     | <sub>[September&nbsp;2016][generator-arrow-functions-notes]</sub> |
| [`Promise.try`][try]                                                                         | Jordan Harband                                        | Jordan Harband                                         | <sub>[November&nbsp;2016][try-notes]</sub>                        |
| [Optional Chaining][chaining]                                                                | Gabriel Isenberg<br />Claude Pache<br />Dustin Savery | Gabriel Isenberg<br />Dustin Savery                    | <sub>[November&nbsp;2018][chaining-notes]</sub>                   |
| [`Math.signbit`: IEEE-754 sign bit][signbit]                                                 | JF Bastien                                            | JF Bastien                                             | <sub>[May&nbsp;2017][signbit-notes]</sub>                         |
| [Error stacks][stacks]                                                                       | Jordan Harband                                        | Jordan Harband                                         | <sub>[January&nbsp;2017][stacks-notes]</sub>                      |
| [`do` expressions][do]                                                                       | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2018][do-notes]</sub>                             |
| [Float16 on TypedArrays, DataView, `Math.hfround`][float16s]                                 | Leo Balter                                            | Leo Balter                                             | <sub>[May&nbsp;2017][float16s-notes]</sub>                        |
| Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           | <sub>[July&nbsp;2017][parseInt-to-parseFloat]</sub>               |
| [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>[May&nbsp;2018][binary-ast-notes]</sub>                      |
| [Pipeline Operator][pipeline]                                                                | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[March&nbsp;2018][pipeline-notes]</sub>                      |
| [Extensible numeric literals][extensible-literals]                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][extensible-literals-notes]               |
| [First-class protocols][protocols]                                                           | Michael Ficarra                                       | Michael Ficarra                                        | <sub>[July&nbsp;2018][protocols-notes]</sub>                      |
| [Nullish coalescing Operator][nullish-coalescing]                                            | Gabriel Isenberg                                      | Gabriel Isenberg                                       | <sub>[March&nbsp;2018][nullish-coalescing-notes]</sub>            |
| [Partial application][partial-application]                                                   | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][partial-application-notes]</sub>            |
| [Cancellation API][cancel-api]                                                               | Ron Buckton                                           | Ron Buckton<br />Brian Terlson                         | <sub>[July&nbsp;2018][cancel-api-notes]</sub>                     |
| [`String.prototype.replaceAll`][replace-all]                                                 | Peter Marshall<br />Jakob Gruber<br />Mathias Bynens  | Mathias Bynens                                         | <sub>[November&nbsp;2017][replace-all-notes]</sub>                |
| [`String.prototype.codePoints`][codepoints]                                                  | Ingvar Stepanyan                                      | Mathias Bynens                                         | <sub>[May&nbsp;2018][codepoints-notes]</sub>                      |
| [`Object.freeze` + `Object.seal` syntax][freeze-seal-syntax]                                 | Keith Cirkel                                          | Keith Cirkel                                           | <sub>[November&nbsp;2017][freeze-seal-syntax]</sub>               |
| [Block Params][block-params]                                                                 | Sam Goto                                              | Sam Goto                                               | <sub>[November&nbsp;2017][block-params-notes]</sub>               |
| [`{BigInt,Number}.fromString`][from-string]                                                  | Mathias Bynens                                        | Mathias Bynens                                         | <sub>[January&nbsp;2018][from-string-notes]</sub>                 |
| [`Math.seededRandoms()`][seeded-randoms]                                                     | Tab Atkins                                            | Tab Atkins                                             | <sub>[January&nbsp;2018][seeded-randoms-notes]</sub>              |
| [Maximally minimal mixins][mixins]                                                           | Justin Fagnani                                        | Justin Fagnani                                         | <sub>[January&nbsp;2018][mixins-notes]</sub>                      |
| [Getting last element of Array][arraylast]                                                   | Keith Cirkel                                          | Keith Cirkel                                           | <sub>[January&nbsp;2018][arraylast-notes]</sub>                   |
| [Collection methods][collection-methods]                                                     | Michał Wadas                                          | Sathya Gunasekaran                                     | <sub>[January&nbsp;2018][collection-methods-notes] </sub>         |
| [Richer Keys][richer-keys]                                                                   | Bradley Farias                                        | Bradley Farias                                         | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                 |
| [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     | <sub>[March&nbsp;2018][slice-notation-notes]</sub>                |
| [Logical Assignment Operators][logical-assignment]                                           | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[March&nbsp;2018][logical-assignment-notes]</sub>            |
| [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>[May&nbsp;2018][module-keys-notes]</sub>                     |
| [Class Static Block][static-blocks]                                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][static-blocks-notes]</sub>                   |
| [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][class-access-expressions-notes]</sub>        |
| [Pattern Matching][matching]                                                                 | Kat Marchán<br />Brian Terlson                        | Kat Marchán<br />Brian Terlson<br />Sebastian Markbåge | <sub>[May&nbsp;2018][matching-notes]</sub>                        |
| [Explicit Resource Management][resource-management]                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][resource-management-notes]</sub>            |
| [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[July&nbsp;2018][dynamic-modules-notes]</sub>                |
| [JavaScript Standard Library][standard-library]                                              | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink                    | <sub>[July&nbsp;2018][standard-library-notes]</sub>               |
| [`"use module"`][modules-pragma]                                                             | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2017][modules-pragma-notes]</sub>                 |
| [`for-in` mechanics][for-in-mechanics]                                                       | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[September&nbsp;2018][for-in-mechanics-notes]</sub>          |
| [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][uniform-date-parse-notes]</sub>        |
| [JSON.parse source text access][json-parse-source]                                           | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][json-parse-source-notes]</sub>         |
| [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2018][idl-notes]</sub>                       |
| [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>[November&nbsp;2018][asset-references-notes]</sub>           |
| [Freezing prototypes][freeze-proto]                                                          | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[January&nbsp;2019][freeze-proto-notes]</sub>                |
| [`new.initialize`][new.initialize]                                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][new.initialize-notes]</sub>              |
| [Iterator helpers][iterator-helpers]                                                         | Gus Caplan                                            | Domenic Denicola                                       | <sub>[January&nbsp;2019][iterator-helpers-notes]</sub>            |

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
[globalThis-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-11/nov-29.md#kevins-1pm-talk
[dynamic-import]: https://github.com/tc39/proposal-dynamic-import
[dynamic-import-notes]: https://github.com/tc39/tc39-notes/blob/master/es7/2016-11/dec-1.md#14ii-import-open-issues-and-stage-3-discussion
[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[bigint]: https://github.com/tc39/proposal-bigint
[bigint-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#bigint-status-update
[class-fields]: https://github.com/tc39/proposal-class-fields
[class-fields-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#private-fields-and-methods-refresher
[function-sent]: https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
[function-sent-notes]: https://github.com/tc39/tc39-notes/blob/7b808eae2192f7e5d2abe035519583cd13d7a30c/es7/2015-11/nov-17.md#functionsent
[decorators]: http://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#decorators-for-stage-3
[import-meta]: https://github.com/tc39/proposal-import-meta
[import-meta-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2017-09/sep-27.md#12iiic-importmeta-for-stage-3
[numeric_separators]: https://github.com/tc39/proposal-numeric-separator
[numeric_separators-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#numeric-separators-update
[private-methods]: https://github.com/tc39/proposal-private-methods
[private-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#private-fields-and-methods-refresher
[export-from]: https://github.com/tc39/proposal-export-default-from
[export-from-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2017-07/jul-27.md#export-default-from
[observable]: https://github.com/tc39/proposal-observable
[observable-notes]: https://github.com/tc39/tc39-notes/blob/1d2cb2c585b301732ec9e83ea41f543b38398291/es8/2017-05/may-25.md#17iiia-observable-proposal-to-stage-2
[matchall]: https://github.com/tc39/String.prototype.matchAll
[matchall-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-25.md#update-on-stringprototypematchall
[tests-matchall]: https://github.com/tc39/test262/pull/1500
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[weakrefs-notes]: https://github.com/tc39/tc39-notes/blob/c2aaad7ef4a348b7ab019cca9f19b07f7484478a/es9/2018-03/mar-22.md#weak-references-for-stage-2
[frozen-realms]: https://github.com/tc39/proposal-frozen-realms
[frozen-realms-notes]: https://github.com/tc39/tc39-notes/blob/c2aaad7ef4a348b7ab019cca9f19b07f7484478a/es9/2018-03/mar-20.md#10ia-update-on-frozen-realms-in-light-of-meltdown-and-spectre
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[more-math-notes]: https://github.com/tc39/tc39-notes/blob/c2aaad7ef4a348b7ab019cca9f19b07f7484478a/es7/2016-07/jul-26.md#9iie-math-extensions
[collection-of-from]: https://github.com/leobalter/proposal-setmap-offrom
[collection-of-from-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es7/2016-09/sept-29.md#11iic-set-map-weakset-and-weakmap-of-and-from-methods
[try]: https://github.com/tc39/proposal-promise-try
[try-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es7/2016-11/nov-29.md#11iib-promisetry
[chaining]: https://github.com/tc39/proposal-optional-chaining
[chaining-notes]: https://github.com/tc39/tc39-notes/blob/927f4e98d8e0fef59fb69e52fb40ec6619a6eacb/es9/2018-11/nov-28.md#update-on-optional-chaining
[signbit]: http://jfbastien.github.io/papers/Math.signbit.html
[signbit-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es8/2017-05/may-23.md#16ib-mathsignbit-proposal
[stacks]: https://github.com/tc39/proposal-error-stacks
[stacks-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es7/2017-01/jan-25.md#15iiia-error-stacks-seeking-stage-1
[do]: https://github.com/tc39/proposal-do-expressions
[do-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#update-on-do-expressions
[realms]: https://github.com/tc39/proposal-realms
[realms-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#realms
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#temporal-for-stage-2
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[float16s-notes]: https://github.com/tc39/tc39-notes/blob/1d2cb2c585b301732ec9e83ea41f543b38398291/es8/2017-05/may-23.md#16ig-float16-on-typedarrays-dataview-mathhfround-for-stage-1
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/tc39-notes/blob/7b7efb7b26d058dbf5ae2faeefe6cac1c5d2d2de/es8/2017-09/sept-26.md#12ig--atomicswaitasync-for-stage-2
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2018-01/jan-24.md#13iiii-throw-expressions-for-stage-3
[binary-ast]: https://github.com/tc39/proposal-binary-ast
[binary-ast-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#binary-ast
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[pipeline-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-03/mar-22.md#pipeline-operator
[extensible-literals]: https://github.com/tc39/proposal-extended-numeric-literals
[extensible-literals-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#extended-numeric-literals-status-update-and-consider-restoring-numeric-separators-to-stage-3
[protocols]: https://github.com/michaelficarra/proposal-first-class-protocols
[protocols-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#updates-on-first-class-protocols
[nullish-coalescing]: https://github.com/tc39/proposal-nullish-coalescing
[nullish-coalescing-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-03/mar-22.md#10iif-nullish-coalescing-for-stage-2
[partial-application]: https://github.com/tc39/proposal-partial-application
[partial-application-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#partial-application
[cancel-api]: https://github.com/tc39/proposal-cancellation
[cancel-api-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#cancellation-update
[replace-all]: https://github.com/psmarshall/string-replace-all-proposal
[replace-all-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2017-11/nov-28.md#10ih-stringprototypereplaceall-for-stage-1
[codepoints]: https://github.com/tc39/proposal-string-prototype-codepoints
[codepoints-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#stringprototypecodepoints-for-stage-2
[freeze-seal-syntax]: https://github.com/keithamus/object-freeze-seal-syntax
[freeze-seal-syntax-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es8/2017-11/nov-30.md#10ivd-objectfreeze--objectseal-syntax-proposal-for-stage-0
[block-params]: https://github.com/samuelgoto/proposal-block-params
[block-params-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es8/2017-11/nov-30.md#9iiia-block-params-to-stage-1
[static-class-features]: http://github.com/tc39/proposal-static-class-features/
[static-class-features-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#static-class-features-for-stage-3
[tests-function-to-string]: https://github.com/tc39/test262/issues/1163
[tests-global]: https://github.com/tc39/test262/issues/765
[tests-dynamic-import]: https://github.com/tc39/test262/issues/1164
[tests-import-meta]: https://github.com/tc39/test262/pull/1888
[tests-regexp-legacy]: https://github.com/tc39/test262/issues/1165
[tests-bigint]: https://github.com/tc39/test262/issues/1056
[tests-optional-catch]: https://github.com/tc39/test262/issues/1166
[tests-private-methods]: https://github.com/tc39/test262/issues/1343
[tests-flat]: https://github.com/tc39/test262/pull/1388
[tests-numeric_separators]: https://github.com/tc39/test262/issues/1051
[tests-class-fields]: https://github.com/tc39/test262/issues/1161
[from-string]: https://github.com/mathiasbynens/proposal-number-fromstring
[from-string-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2018-01/jan-23.md#13iic-bigintnumberfromstring-for-stage-1
[seeded-randoms]: https://github.com/tabatkins/js-seeded-random
[seeded-randoms-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2018-01/jan-23.md#13iif-mathseededrandoms-for-stage-1
[censorship]: https://github.com/domenic/proposal-function-prototype-tostring-censorship
[censorship-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#functionprototypetostring-censorship-for-stage-2-continued-discussion
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#top-level-await
[mixins]: https://github.com/justinfagnani/proposal-mixins
[mixins-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2018-01/jan-23.md#13iiie-maximally-minimal-mixins-proposal
[arraylast]: https://github.com/keithamus/proposal-array-last
[arraylast-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2018-01/jan-24.md#13iiim-getting-last-item-from-array-for-stage-2
[set-methods]: https://github.com/tc39/set-methods
[set-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-29.md#update-on-set-methods
[collection-methods]: https://github.com/tc39/collection-methods
[collection-methods-notes]: https://github.com/tc39/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es8/2018-01/jan-23.md#13iiik-new-set-builtin-methods-for-stage-2
[hashbang-grammar]: https://github.com/bmeck/proposal-hashbang
[tests-hashbang-grammar]: https://github.com/tc39/test262/pull/2065
[hashbang-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-11/nov-28.md#hash-bang-grammar
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#richer-keys-for-stage-2
[slice-notation]: https://github.com/gsathya/proposal-slice-notation/
[slice-notation-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-03/mar-22.md#slice-notation-for-stage-1
[logical-assignment]: https://github.com/jridgewell/proposal-logical-assignment
[logical-assignment-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-03/mar-22.md#10ie-logical-assignment-operators-for-stage-1-cont
[unicode-sequence-properties]: https://github.com/mathiasbynens/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-31.md#update-on-sequence-properties-in-unicode-property-escapes
[module-keys]: https://github.com/mikesamuel/tc39-module-keys
[module-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#module-keys-strawman-for-stage-1
[static-blocks]: https://github.com/rbuckton/proposal-class-static-block#readme
[static-blocks-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#class-static-block
[class-access-expressions]: https://github.com/rbuckton/proposal-class-access-expressions
[class-access-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#class-access-expressions
[matching]: https://github.com/tc39/proposal-pattern-matching
[matching-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#pattern-matching-for-stage-1
[regex-offsets]: https://github.com/rbuckton/proposal-regexp-match-offsets
[regex-offsets-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#regexp-match-offsets
[buffer-transfer]: https://github.com/domenic/proposal-arraybuffer-transfer/
[buffer-transfer-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#arraybufferprototypetransfer
[resource-management]: https://github.com/rbuckton/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#explicit-resource-management
[dynamic-modules]: https://github.com/guybedford/proposal-dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#dynamic-modules
[standard-library]: https://github.com/msaboff/JavaScript-Standard-Library
[standard-library-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-26.md#javascript-standard-library
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[modules-pragma-notes]: https://github.com/tc39/tc39-notes/blob/master/es8/2017-07/jul-26.md#9ivb-modulescript-pragma-for-stage-2
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-25.md#for-in-mechanics
[uniform-date-parse]: https://github.com/gibson042/ecma262-proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[json-parse-source]: https://github.com/gibson042/ecma262-proposal-JSON-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#jsonparse-source-text-access
[allsettled]: https://github.com/tc39/proposal-promise-allSettled
[allsettled-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-30.md#promiseallsettled
[idl]: https://github.com/littledan/proposal-idl
[idl-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#idl-for-javascript
[tests-fromentries]: https://github.com/tc39/test262/pull/1676
[asset-references]: https://github.com/sebmarkbage/ecmascript-asset-references
[asset-references-notes]: https://github.com/tc39/tc39-notes/blob/927f4e98d8e0fef59fb69e52fb40ec6619a6eacb/es9/2018-11/nov-28.md#asset-references-for-stage-1
[generator-arrow-functions-notes]: https://github.com/tc39/tc39-notes/blob/1d2cb2c585b301732ec9e83ea41f543b38398291/es7/2016-09/sept-27.md#11ic-generator-arrow-functions
[parseInt-to-parseFloat]: https://github.com/tc39/tc39-notes/blob/c2aaad7ef4a348b7ab019cca9f19b07f7484478a/es8/2017-07/jul-26.md#13iib-consider-changing-numberparseint-and-numberparsefloat
[collection-rekey]: https://github.com/tc39-transfer/proposal-collection-normalization
[freeze-proto]: https://github.com/bakkot/proposal-freeze-prototype
[freeze-proto-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-31.md#freezing-prototypes-for-stage-1
[new.initialize]: https://github.com/littledan/proposal-new-initialize
[new.initialize-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-31.md#newinitialize-for-stage-1
[iterator-helpers]: https://github.com/devsnek/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-31.md#iterator-helpers-for-stage-1
