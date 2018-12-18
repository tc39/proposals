# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| :rocket: | Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| -------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
|          | [`globalThis`][globalThis]                                                     | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-global]             | <sub>[July&nbsp;2018][globalThis-notes]</sub>           |
|          | [`import()`][dynamic-import]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-dynamic-import]     |                                                         |
|          | [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]      |                                                         |
|          | [`BigInt`][bigint]                                                             | Daniel Ehrenberg                                                        | Daniel Ehrenberg                                                        | [:white_check_mark:][tests-bigint]             | <sub>[May&nbsp;2018][bigint-notes]</sub>                |
|          | [`import.meta`][import-meta]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:question:][tests-import-meta]                |                                                         |
|          | [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:question:][tests-private-methods]            |                                                         |
| :rocket: | [`Array.prototype.{flat,flatMap}`][flat]                                       | Brian Terlson<br />Michael Ficarra                                      | Brian Terlson<br />Michael Ficarra                                      | [:white_check_mark:][tests-flat]               | <sub>[September&nbsp;2018][flat-notes]</sub>            |
|          | [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:question:][tests-class-fields]               | <sub>[September&nbsp;2018][class-fields-notes]</sub>    |
|          | [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo and Daniel Ehrenberg                                         |                                                | <sub>[May&nbsp;2018][static-class-features-notes]</sub> |
|          | [`String.prototype.{trimStart,trimEnd}`][trims]                                | Sebastian Markbåge                                                      | Sebastian Markbåge                                                      | [:white_check_mark:][tests-trims]              |                                                         |
|          | [`String.prototype.matchAll`][matchall]                                        | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-matchall]           | <sub>[September&nbsp;2018][matchall-notes]</sub>        |
|          | [`Object.fromEntries`][object-from-entries]                                    | Darien Maillet Valentine                                                | Jordan Harband<br />Kevin Gibbons                                       | [:white_check_mark:][tests-fromentries]        | <sub>[July&nbsp;2018][object-from-entries-notes]</sub>  |
|          | [Well-formed `JSON.stringify`][well-formed-stringify]                          | Richard Gibson                                                          | Mathias Bynens                                                          | [:white_check_mark:][tests-well-formd-strngfy] |                                                         |
|          | [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          |                                                | <sub>November&nbsp;2018</sub>                           |

### Stage 2

| :rocket: | Proposal                                                                       | Author                                   | Champion                                             | <sub>Last Presented</sub>                                           |
| -------- | ------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
|          | [Numeric separators][numeric_separators]                                       | Sam Goto<br />Rick Waldron               | Sam Goto<br />Rick Waldron                           | <sub>[May&nbsp;2018][numeric_separators-notes]</sub>                |
|          | [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                        | Allen Wirfs-Brock                                    |                                                                     |
|          | [Decorators][decorators]                                                       | Daniel Ehrenberg                         | Yehuda Katz<br />Brian Terlson<br />Daniel Ehrenberg | <sub>November 2018</sub>                                            |
| :rocket: | [`throw` expressions][throw-expressions]                                       | Ron Buckton                              | Ron Buckton                                          |                                                                     |
|          | [`Atomics.waitAsync`][nonblocking]                                             | Lars Hansen                              | Shu-yu Guo<br />Lars Hansen                          |                                                                     |
|          | [WeakRefs][weakrefs]                                                           | Dean Tribble                             | Dean Tribble                                         |                                                                     |
|          | [Top-level `await`][await]                                                     | Myles Borins                             | Myles Borins                                         | <sub>[May&nbsp;2018][await-notes]</sub>                             |
|          | [`Function.prototype.toString()` censorship][censorship]                       | Domenic Denicola                         | Domenic Denicola                                     | <sub>[May&nbsp;2018][censorship-notes]</sub>                        |
|          | [New Set methods][set-methods]                                                 | Michał Wadas<br />Sathya Gunasekaran     | Sathya Gunasekaran                                   | <sub>[May&nbsp;2018][set-methods-notes]</sub>                       |
|          | [Realms][realms]                                                               | Caridy Patiño<br />Jean-Francois Paradis | Dave Herman<br />Mark Miller<br />Caridy Patiño      | <sub>[May&nbsp;2018][realms-notes]</sub>                            |
|          | [`ArrayBuffer.prototype.transfer`][buffer-transfer]                            | Domenic Denicola                         | Domenic Denicola                                     | <sub>[July&nbsp;2018][buffer-transfer-notes]</sub>                  |
|          | [RegExp Match array offsets][regex-offsets]                                    | Ron Buckton                              | Ron Buckton                                          | <sub>[July&nbsp;2018][regex-offsets-notes]</sub>                    |
|          | [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                           | Mathias Bynens                                       | <sub>[September&nbsp;2018][unicode-sequence-properties-notes]</sub> |
|          | [`InterpreterDirective`][interpreter-directive]                                | Bradley Farias                           | Bradley Farias                                       |                                                                     |
|          | [Temporal][temporal]                                                           | Maggie Pint<br />Matt Johnson            | Maggie Pint<br />Brian Terlson                       | <sub>[September&nbsp;2018][temporal-notes]</sub>                    |

### Stage 1

| :rocket: | Proposal                                                                                     | Author                                                | Champion                                               | <sub>Last Presented</sub>                                  |
| -------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
|          | [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      |                                                            |
| :rocket: | [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          |                                                            |
|          | [Frozen Realms][frozen-realms]                                                               | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   |                                                            |
|          | [`Math` Extensions][more-math]                                                               | Rick Waldron                                          | Rick Waldron                                           |                                                            |
|          | [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             |                                                            |
|          | Generator arrow functions (`=>*`)                                                            |                                                       | Brendan Eich<br />Domenic Denicola                     |                                                            |
|          | [`Promise.try`][try]                                                                         | Jordan Harband                                        | Jordan Harband                                         |                                                            |
|          | [Optional Chaining][chaining]                                                                | Gabriel Isenberg<br />Claude Pache<br />Dustin Savery | Gabriel Isenberg<br />Dustin Savery                    | <sub>November&nbsp;2018</sub>                              |
|          | [`Math.signbit`: IEEE-754 sign bit][signbit]                                                 | JF Bastien                                            | JF Bastien                                             |                                                            |
|          | [Error stacks][stacks]                                                                       | Jordan Harband                                        | Jordan Harband                                         |                                                            |
|          | [`do` expressions][do]                                                                       | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2018][do-notes]</sub>                      |
|          | [Float16 on TypedArrays, DataView, `Math.hfround`][float16s]                                 | Leo Balter                                            | Leo Balter                                             |                                                            |
|          | Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           |                                                            |
|          | [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>[May&nbsp;2018][binary-ast-notes]</sub>               |
|          | [Pipeline Operator][pipeline]                                                                | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       |                                                            |
|          | [Extensible numeric literals][extensible-literals]                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       |                                                            |
|          | [First-class protocols][protocols]                                                           | Michael Ficarra                                       | Michael Ficarra                                        | <sub>[July&nbsp;2018][protocols-notes]</sub>               |
|          | [Nullish coalescing Operator][nullish-coalescing]                                            | Gabriel Isenberg                                      | Gabriel Isenberg                                       |                                                            |
|          | [Partial application][partial-application]                                                   | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][partial-application-notes]</sub>     |
|          | [Cancellation API][cancel-api]                                                               | Ron Buckton                                           | Ron Buckton & Brian Terlson                            | <sub>[July&nbsp;2018][cancel-api-notes]</sub>              |
|          | [`String.prototype.replaceAll`][replace-all]                                                 | Peter Marshall<br />Jakob Gruber<br />Mathias Bynens  | Mathias Bynens                                         |                                                            |
|          | [`String.prototype.codePoints`][codepoints]                                                  | Ingvar Stepanyan                                      | Mathias Bynens                                         | <sub>[May&nbsp;2018][codepoints-notes]</sub>               |
|          | [`Object.freeze` + `Object.seal` syntax][freeze-seal-syntax]                                 | Keith Cirkel                                          | Keith Cirkel                                           |                                                            |
|          | [Block Params][block-params]                                                                 | Sam Goto                                              | Sam Goto                                               |                                                            |
|          | [`{BigInt,Number}.fromString`][from-string]                                                  | Mathias Bynens                                        | Mathias Bynens                                         |                                                            |
|          | [`Math.seededRandoms()`][seeded-randoms]                                                     | Tab Atkins                                            | Tab Atkins                                             |                                                            |
|          | [Maximally minimal mixins][mixins]                                                           | Justin Fagnani                                        | Justin Fagnani                                         |                                                            |
| :rocket: | [Getting last element of Array][arraylast]                                                   | Keith Cirkel                                          | Keith Cirkel                                           |                                                            |
|          | [Collection methods][collection-methods]                                                     | Michał Wadas                                          | Sathya Gunasekaran                                     |                                                            |
|          | [Richer Keys][richer-keys]                                                                   | Bradley Farias                                        | Bradley Farias                                         |                                                            |
|          | [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     |                                                            |
|          | [Logical Assignment Operators][logical-assignment]                                           | Justin Ridgewell                                      | Justin Ridgewell                                       |                                                            |
|          | [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>[May&nbsp;2018][module-keys-notes]</sub>              |
|          | [Class Static Block][static-blocks]                                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][static-blocks-notes]</sub>            |
|          | [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][class-access-expressions-notes]</sub> |
|          | [Pattern Matching][matching]                                                                 | Kat Marchán<br />Brian Terlson                        | Kat Marchán<br />Brian Terlson<br />Sebastian Markbåge | <sub>[May&nbsp;2018][matching-notes]</sub>                 |
|          | [Explicit Resource Management][resource-management]                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][resource-management-notes]</sub>     |
|          | [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[July&nbsp;2018][dynamic-modules-notes]</sub>         |
|          | [JavaScript Standard Library][standard-library]                                              | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink                    | <sub>[July&nbsp;2018][standard-library-notes]</sub>        |
|          | [`"use module"`][modules-pragma]                                                             | Dave Herman                                           | Dave Herman                                            |                                                            |
|          | [`for-in` mechanics][for-in-mechanics]                                                       | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[September&nbsp;2018][for-in-mechanics-notes]</sub>   |
|          | [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][uniform-date-parse-notes]</sub> |
|          | [JSON.parse source text access][json-parse-source]                                           | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][json-parse-source-notes]</sub>  |
|          | [Promise.allSettled][allsettled]                                                             | Jason Williams                                        | Mathias Bynens                                         | <sub>[September&nbsp;2018][allsettled-notes]</sub>         |
|          | [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2018][idl-notes]</sub>                |
|          | [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>November&nbsp;2018</sub>                              |

:rocket: means the champion thinks it's ready to advance but has not yet presented to the committee.

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
[globalThis-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#revisit-global-name
[dynamic-import]: https://github.com/tc39/proposal-dynamic-import
[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[bigint]: https://github.com/tc39/proposal-bigint
[bigint-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#bigint-status-update
[class-fields]: https://github.com/tc39/proposal-class-fields
[class-fields-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-26.md#class-fields-and-private-methods-stage-3-update
[function-sent]: https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
[trims]: https://github.com/sebmarkbage/ecmascript-string-left-right-trim
[tests-trims]: https://github.com/tc39/test262/pull/1246
[decorators]: http://github.com/tc39/proposal-decorators
[import-meta]: https://github.com/tc39/proposal-import-meta
[numeric_separators]: https://github.com/tc39/proposal-numeric-separator
[numeric_separators-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#numeric-separators-update
[private-methods]: https://github.com/tc39/proposal-private-methods
[export-from]: https://github.com/tc39/proposal-export-default-from
[observable]: https://github.com/tc39/proposal-observable
[matchall]: https://github.com/tc39/String.prototype.matchAll
[matchall-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-25.md#update-on-stringprototypematchall
[tests-matchall]: https://github.com/tc39/test262/pull/1500
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[frozen-realms]: https://github.com/FUDCo/frozen-realms
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[collection-of-from]: https://github.com/leobalter/proposal-setmap-offrom
[try]: https://github.com/ljharb/proposal-promise-try
[chaining]: https://github.com/tc39/proposal-optional-chaining
[signbit]: http://jfbastien.github.io/papers/Math.signbit.html
[stacks]: https://github.com/ljharb/proposal-error-stacks
[do]: https://github.com/tc39/proposal-do-expressions
[do-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#update-on-do-expressions
[realms]: https://github.com/caridy/proposal-realms
[realms]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#realms
[temporal]: https://github.com/maggiepint/proposal-temporal
[temporal-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#temporal-for-stage-2
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[flat]: https://github.com/tc39/proposal-flatMap
[flat-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-26.md#arrayprototypeflatmap-for-stage-4-
[throw-expressions]: https://github.com/rbuckton/proposal-throw-expressions
[binary-ast]: https://github.com/syg/ecmascript-binary-ast
[binary-ast-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#binary-ast
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[extensible-literals]: https://github.com/littledan/proposal-extensible-numeric-literals
[protocols]: https://github.com/michaelficarra/proposal-first-class-protocols
[protocols-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#updates-on-first-class-protocols
[nullish-coalescing]: https://github.com/tc39/proposal-nullish-coalescing
[partial-application]: https://github.com/tc39/proposal-partial-application
[partial-application-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#partial-application
[cancel-api]: https://github.com/tc39/proposal-cancellation
[cancel-api-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#cancellation-update
[interpreter-directive]: https://gist.github.com/bmeck/59cf8c16959eccffd8b7e9828826a842
[replace-all]: https://github.com/psmarshall/string-replace-all-proposal
[codepoints]: https://github.com/tc39/proposal-string-prototype-codepoints
[codepoints-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#stringprototypecodepoints-for-stage-2
[freeze-seal-syntax]: https://github.com/keithamus/object-freeze-seal-syntax
[block-params]: https://github.com/samuelgoto/proposal-block-params
[static-class-features]: http://github.com/tc39/proposal-static-class-features/
[static-class-features-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-23.md#static-class-features-for-stage-3
[tests-function-to-string]: https://github.com/tc39/test262/issues/1163
[tests-global]: https://github.com/tc39/test262/issues/765
[tests-dynamic-import]: https://github.com/tc39/test262/issues/1164
[tests-regexp-legacy]: https://github.com/tc39/test262/issues/1165
[tests-bigint]: https://github.com/tc39/test262/issues/1056
[tests-optional-catch]: https://github.com/tc39/test262/issues/1166
[tests-import-meta]: https://github.com/tc39/test262/issues/1342
[tests-private-methods]: https://github.com/tc39/test262/issues/1343
[tests-flat]: https://github.com/tc39/test262/pull/1388
[tests-numeric_separators]: https://github.com/tc39/test262/issues/1051
[tests-class-fields]: https://github.com/tc39/test262/issues/1161
[from-string]: https://github.com/mathiasbynens/proposal-number-fromstring
[seeded-randoms]: https://github.com/tabatkins/js-seeded-random
[censorship]: https://github.com/domenic/proposal-function-prototype-tostring-censorship
[censorship-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-24.md#functionprototypetostring-censorship-for-stage-2-continued-discussion
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#top-level-await
[mixins]: https://github.com/justinfagnani/proposal-mixins
[arraylast]: https://github.com/keithamus/proposal-array-last
[set-methods]: https://github.com/tc39/set-methods
[set-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#set-methods
[collection-methods]: https://github.com/tc39/collection-methods
[object-from-entries]: https://github.com/bakkot/object-from-entries
[object-from-entries-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#objectfromentries-to-stage-3
[hashbang-grammar]: https://github.com/bmeck/proposal-hashbang
[richer-keys]: https://docs.google.com/presentation/d/1q3CGeXqskL1gHTATH_VE9Dhj0VGTIAOzJ1cR0dYqDBk/edit#slide=id.p
[slice-notation]: https://github.com/gsathya/proposal-slice-notation/
[logical-assignment]: https://github.com/jridgewell/proposal-logical-assignment
[unicode-sequence-properties]: https://github.com/mathiasbynens/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-26.md#sequence-properties-in-unicode-property-escapes-for-stage-2
[well-formed-stringify]: https://github.com/gibson042/ecma262-proposal-well-formed-stringify
[tests-well-formd-strngfy]: https://github.com/tc39/test262/pull/1787
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
[buffer-transfer-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es9/2018-07/july-24.md#arraybufferprototypetransfer
[resource-management]: https://github.com/rbuckton/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-24.md#explicit-resource-management
[dynamic-modules]: https://github.com/guybedford/proposal-dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-25.md#dynamic-modules
[standard-library]: https://github.com/msaboff/JavaScript-Standard-Library
[standard-library-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-07/july-26.md#javascript-standard-library
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[for-in-mechanics]: https://github.com/bakkot/for-in-exploration
[for-in-mechanics-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-25.md#for-in-mechanics
[uniform-date-parse]: https://github.com/gibson042/ecma262-proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[json-parse-source]: https://github.com/gibson042/ecma262-proposal-JSON-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#jsonparse-source-text-access
[allsettled]: https://github.com/tc39/proposal-promise-allSettled
[allsettled-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#promiseallsettled-for-stage-1
[idl]: https://github.com/littledan/proposal-idl
[idl-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-27.md#idl-for-javascript
[tests-fromentries]: https://github.com/tc39/test262/pull/1676
[asset-references]: https://github.com/sebmarkbage/ecmascript-asset-references
