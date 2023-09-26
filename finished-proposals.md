# Finished Proposals

Finished proposals are proposals that have reached stage 4, and are included in the [latest draft](https://tc39.es/ecma262/) of the specification.

| Proposal                                                                 | Author                                                 | Champion(s)                                             | TC39 meeting notes                          | Expected Publication Year |
| ------------------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------- | ------------------------- |
| [`Array.prototype.includes`][array-includes]                             | Domenic Denicola                                       | Domenic Denicola<br />Rick Waldron                      | [November 2015][array-includes-notes]       | 2016                      |
| [Exponentiation operator][exponentiation]                                | Rick Waldron                                           | Rick Waldron                                            | [January 2016][exponentiation-notes]        | 2016                      |
| [`Object.values`/`Object.entries`][object-values-entries]                | Jordan Harband                                         | Jordan Harband                                          | [March 2016][object-values-entries-notes]   | 2017                      |
| [String padding][string-padding]                                         | Jordan Harband                                         | Jordan Harband<br />Rick Waldron                        | [May 2016][string-padding-notes]            | 2017                      |
| [`Object.getOwnPropertyDescriptors`][object-gopds]                       | Jordan Harband<br />Andrea Giammarchi                  | Jordan Harband<br />Andrea Giammarchi                   | [May 2016][object-gopds-notes]              | 2017                      |
| [Trailing commas in function parameter lists and calls][function-commas] | Jeff Morrison                                          | Jeff Morrison                                           | [July 2016][function-commas-notes]          | 2017                      |
| [Async functions][async-await]                                           | Brian Terlson                                          | Brian Terlson                                           | [July 2016][async-await-notes]              | 2017                      |
| [Shared memory and atomics][atomics]                                     | Lars T Hansen                                          | Lars T Hansen                                           | [January 2017][atomics-notes]               | 2017                      |
| [Lifting template literal restriction][template-literal-lift]            | Tim Disney                                             | Tim Disney                                              | [March 2017][template-literal-lift-notes]   | 2018                      |
| [`s` (`dotAll`) flag for regular expressions][dot-all]                   | Mathias Bynens                                         | Brian Terlson<br />Mathias Bynens                       | [November 2017][dot-all-notes]              | 2018                      |
| [RegExp named capture groups][named-groups]                              | Gorkem Yakin<br />Daniel Ehrenberg                     | Daniel Ehrenberg<br />Brian Terlson<br />Mathias Bynens | [November 2017][named-groups-notes]         | 2018                      |
| [Rest/Spread Properties][object-rest-spread]                             | Sebastian Markbåge                                     | Sebastian Markbåge                                      | [January 2018][object-rest-spread-notes]    | 2018                      |
| [RegExp Lookbehind Assertions][lookbehind]                               | Gorkem Yakin<br />Nozomu Katō<br />Daniel Ehrenberg    | Daniel Ehrenberg<br />Mathias Bynens                    | [January 2018][lookbehind-notes]            | 2018                      |
| [RegExp Unicode Property Escapes][unicode-escapes]                       | Mathias Bynens                                         | Brian Terlson<br />Daniel Ehrenberg<br />Mathias Bynens | [January 2018][unicode-escapes-notes]       | 2018                      |
| [`Promise.prototype.finally`][finally]                                   | Jordan Harband                                         | Jordan Harband                                          | [January 2018][finally-notes]               | 2018                      |
| [Asynchronous Iteration][async-iteration]                                | Domenic Denicola                                       | Domenic Denicola                                        | [January 2018][async-iteration-notes]       | 2018                      |
| [Optional `catch` binding][optional-catch]                               | Michael Ficarra                                        | Michael Ficarra                                         | [May 2018][optional-catch-notes]            | 2019                      |
| [JSON superset][json-superset]                                           | Richard Gibson                                         | Mark Miller<br />Mathias Bynens                         | [May 2018][json-superset-notes]             | 2019                      |
| [`Symbol.prototype.description`][symbol-description]                     | Michael Ficarra                                        | Michael Ficarra                                         | [November 2018][symbol-description-notes]   | 2019                      |
| [`Function.prototype.toString` revision][function-to-string]             | Michael Ficarra                                        | Michael Ficarra                                         | [November 2018][function-to-string-notes]   | 2019                      |
| [`Object.fromEntries`][object-from-entries]                              | Darien Maillet Valentine                               | Jordan Harband<br />Kevin Gibbons                       | [January 2019][object-from-entries-notes]   | 2019                      |
| [Well-formed `JSON.stringify`][well-formed-stringify]                    | Richard Gibson                                         | Mathias Bynens                                          | [January 2019][well-formed-stringify-notes] | 2019                      |
| [`String.prototype.{trimStart,trimEnd}`][trims]                          | Sebastian Markbåge                                     | Sebastian Markbåge<br />Mathias Bynens                  | [January 2019][trims-notes]                 | 2019                      |
| [`Array.prototype.{flat,flatMap}`][flat]                                 | Brian Terlson<br />Michael Ficarra<br />Mathias Bynens | Brian Terlson<br />Michael Ficarra                      | [January 2019][flat-notes]                  | 2019                      |
| [`String.prototype.matchAll`][matchall]                                  | Jordan Harband                                         | Jordan Harband                                          | [March 2019][matchall-notes]                | 2020                      |
| [`import()`][dynamic-import]                                             | Domenic Denicola                                       | Domenic Denicola                                        | [June 2019][dynamic-import-notes]           | 2020                      |
| [`BigInt`][bigint]                                                       | Daniel Ehrenberg                                       | Daniel Ehrenberg                                        | [June 2019][bigint-notes]                   | 2020                      |
| [`Promise.allSettled`][allsettled]                                       | Jason Williams<br />Robert Pamely<br />Mathias Bynens  | Mathias Bynens                                          | [July 2019][allsettled-notes]               | 2020                      |
| [`globalThis`][globalThis]                                               | Jordan Harband                                         | Jordan Harband                                          | [October 2019][globalThis-notes]            | 2020                      |
| [`for-in` mechanics][for-in-mechanics]                                   | Kevin Gibbons                                          | Kevin Gibbons                                           | [December 2019][for-in-mechanics-notes]     | 2020                      |
| [Optional Chaining][chaining]                                            | Gabriel Isenberg<br />Claude Pache<br />Dustin Savery  | Gabriel Isenberg<br />Dustin Savery<br />Justin Ridgewell<br />Daniel Rosenwasser | [December 2019][chaining-notes] | 2020        |
| [Nullish coalescing Operator][nullish-coalescing]                        | Gabriel Isenberg                                       | Gabriel Isenberg<br />Justin Ridgewell<br />Daniel Rosenwasser | [December 2019][nullish-coalescing-notes] | 2020                 |
| [`import.meta`][import-meta]                                             | Domenic Denicola                                       | Gus Caplan                                              | [March 2020][import-meta-notes]             | 2020                      |
| [`String.prototype.replaceAll`][replace-all]                             | Peter Marshall<br />Jakob Gruber<br />Mathias Bynens   | Mathias Bynens                                          | [June 2020][replace-all-notes]              | 2021                      |
| [`Promise.any`][promise-any]                                             | Mathias Bynens<br />Kevin Gibbons<br />Sergey Rubanov  | Mathias Bynens                                          | [July 2020][promise-any-notes]              | 2021                      |
| [WeakRefs][weakrefs]                                                     | Dean Tribble<br />Sathya Gunasekaran                   | Dean Tribble<br />Mark Miller<br />Till Schneidereit<br />Sathya Gunasekaran<br />Daniel Ehrenberg    | [July 2020][weakrefs-notes] | 2021 |
| [Logical Assignment Operators][logical-assignment]                       | Justin Ridgewell                                       | Justin Ridgewell <br /> Hemanth HM                      | [July 2020][logical-assignment-notes]       | 2021                      |
| [Numeric separators][numeric_separators]                                 | Sam Goto<br />Rick Waldron                             | Sam Goto<br />Rick Waldron <br />Leo Balter             | [July 2020][numeric_separators-notes]       | 2021                      |
| Class Fields ([Private instance methods and accessors][private-methods], [Class Public Instance Fields & Private Instance Fields][class-fields], [Static class fields and private static methods][static-class-features]) | Daniel Ehrenberg | Daniel Ehrenberg<br />Kevin Gibbons | [April 2021][class-fields-notes] | 2022 |
| [RegExp Match Indices][regex-match-indices]                              | Ron Buckton                                            | Ron Buckton                                             | [May 2021][regex-match-indices-notes]       | 2022                      |
| [Top-level `await`][await]                                               | Myles Borins<br />Yulia Startsev<br />Daniel Ehrenberg<br />Guy Bedford<br />Ms2ger | Myles Borins<br />Yulia Startsev | [May 2021][await-notes]               | 2022                      |
| [Ergonomic brand checks for Private Fields][private-fields-in-in]        | Jordan Harband                                         | Jordan Harband                                          | [July 2021][private-fields-in-in-notes]     | 2022                      |
| [`.at()`][at]                                                            | Shu-yu Guo<br />Tab Atkins                             | Shu-yu Guo<br />Tab Atkins                              | [August 2021][at-notes]                     | 2022                      |
| [Accessible `Object.prototype.hasOwnProperty`][object-has]               | Jamie Kyle                                             | Tierney Cyren<br />Jamie Kyle                           | [August 2021][object-has-notes]             | 2022                      |
| [Class Static Block][static-blocks]                                      | Ron Buckton                                            | Ron Buckton                                             | [August 2021][static-blocks-notes]          | 2022                      |
| [Error Cause][error-cause]                                               | Chengzhong Wu                                          | Chengzhong Wu<br /> Hemanth HM                          | [October 2021][error-cause-notes]           | 2022                      |
| [Array find from last][find-last]                                        | Wenlu Wang                                             | Wenlu Wang<br />Daniel Rosenwasser                      | [June 2022][find-last-notes]                | 2023                      |
| [Hashbang Grammar][hashbang-grammar]                                     | Bradley Farias                                         | Bradley Farias                                          | July 2022                                   | 2023                      |
| [Symbols as WeakMap keys][symbols-weakmap]                               | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard<br />Leo Balter<br />Rick Waldron<br />Caridy Patiño | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard<br />Leo Balter<br />Rick Waldron<br />Caridy Patiño | [January 2023][symbols-weakmap-notes] | 2023                      |
| [Change Array by Copy][change-array-by-copy]                             | Ashley Claymore<br />Robin Ricard                      | Ashley Claymore<br />Robin Ricard                       | March 2022                                  | 2023                      |
| [Well-Formed Unicode Strings][usv-string]                                | Guy Bedford<br />Bradley Farias                        | Guy Bedford<br />Bradley Farias<br />Michael Ficarra    | [May 2023][usv-string-notes]                | 2024                      |
| [`Atomics.waitAsync`][nonblocking]                                       | Lars Hansen                                            | Shu-yu Guo<br />Lars Hansen                             | [May 2023][nonblocking-notes]               | 2024                      |
| [RegExp v flag with set notation + properties of strings][regexp-v-flag] | Markus Scherer<br />Mathias Bynens                     | Mathias Bynens                                          | [May 2023][regexp-v-flag-notes]             | 2024                      |
| [Resizable and growable ArrayBuffers][resizable]                         | Shu-yu Guo                                             | Shu-yu Guo                                              | September&nbsp;2023]                        | 2024                      |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [inactive proposals](inactive-proposals.md) documents.

[array-includes]: https://github.com/tc39/proposal-Array.prototype.includes
[array-includes-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-11/nov-17.md#arrayprototypeincludes
[exponentiation]: https://github.com/tc39/proposal-exponentiation-operator
[exponentiation-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-01/jan-28.md#5xviii-exponentiation-operator-rw
[object-values-entries]: https://github.com/tc39/proposal-object-values-entries
[object-values-entries-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-29.md#objectvalues--objectentries
[string-padding]: https://github.com/tc39/proposal-string-pad-start-end
[string-padding-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-05/may-25.md#stringprototypepadstartend-jhd
[object-gopds]: https://github.com/tc39/proposal-object-getownpropertydescriptors
[object-gopds-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-05/may-25.md#objectgetownpropertydescriptors-jhd
[function-commas]: https://github.com/tc39/proposal-trailing-function-commas
[function-commas-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-26.md#9ie-trailing-commas-in-functions
[async-await]: https://github.com/tc39/proposal-async-await
[async-await-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-28.md#10iv-async-functions
[atomics]: https://github.com/tc39/proposal-ecmascript-sharedmem
[atomics-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-24.md#13if-seeking-stage-4-for-sharedarraybuffer
[template-literal-lift]: https://github.com/tc39/proposal-template-literal-revision
[template-literal-lift-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-03/mar-21.md#10ia-template-literal-updates
[dot-all]: https://github.com/tc39/proposal-regexp-dotall-flag
[dot-all-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-28.md#9ie-regexp-dotall-status-update
[named-groups]: https://github.com/tc39/proposal-regexp-named-groups
[named-groups-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-28.md#9if-regexp-named-captures-status-update
[object-rest-spread]: https://github.com/tc39/proposal-object-rest-spread
[object-rest-spread-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#restspread-properties-for-stage-4
[lookbehind]: https://github.com/tc39/proposal-regexp-lookbehind
[lookbehind-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#conclusionresolution-16
[unicode-escapes]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[unicode-escapes-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-24.md#conclusionresolution-1
[finally]: https://github.com/tc39/proposal-promise-finally
[finally-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-24.md#conclusionresolution-2
[async-iteration]: https://github.com/tc39/proposal-async-iteration
[async-iteration-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-25.md#conclusionresolution
[optional-catch]: https://github.com/tc39/proposal-optional-catch-binding
[optional-catch-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-22.md#conclusionresolution-7
[json-superset]: https://github.com/tc39/proposal-json-superset
[json-superset-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-22.md#conclusionresolution-8
[symbol-description]: https://github.com/tc39/proposal-Symbol-description
[symbol-description-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-27.md#conclusionresolution-12
[function-to-string]: https://github.com/tc39/Function-prototype-toString-revision
[function-to-string-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-27.md#conclusionresolution-13
[object-from-entries]: https://github.com/tc39/proposal-object-from-entries
[object-from-entries-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-29.md#objectfromentries-for-stage-4
[well-formed-stringify]: https://github.com/tc39/proposal-well-formed-stringify
[well-formed-stringify-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-29.md#well-formed-jsonstringify-for-stage-4
[trims]: https://github.com/tc39/proposal-string-left-right-trim
[trims-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-29.md#stringprototypetrimstarttrimend-for-stage-4
[flat]: https://github.com/tc39/proposal-flatMap
[flat-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-29.md#arrayprototypeflatflatmap-for-stage-4
[matchall]: https://github.com/tc39/proposal-string-matchall
[matchall-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-03/mar-26.md#stringprototypematchall-for-stage-4
[dynamic-import]: https://github.com/tc39/proposal-dynamic-import
[dynamic-import-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-06/june-4.md#dynamic-import-for-stage-4
[allsettled]: https://github.com/tc39/proposal-promise-allSettled
[allsettled-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-07/july-24.md#promiseallsettled
[bigint]: https://github.com/tc39/proposal-bigint
[bigint-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-06/june-4.md#bigint-to-stage-4
[globalThis]: https://github.com/tc39/proposal-global
[globalThis-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-1.md#globalthis-to-stage-4
[for-in-mechanics]: https://github.com/tc39/proposal-for-in-order
[for-in-mechanics-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-4.md#for-in-order-for-stage-4
[chaining]: https://github.com/tc39/proposal-optional-chaining
[chaining-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-4.md#optional-chaining-for-stage-4
[nullish-coalescing]: https://github.com/tc39/proposal-nullish-coalescing
[nullish-coalescing-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-4.md#nullish-coalescing-for-stage-4
[import-meta]: https://github.com/tc39/proposal-import-meta
[import-meta-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/april-1.md#importmeta-for-stage-4-continued-from-previous-day
[replace-all]: https://github.com/tc39/proposal-string-replaceall
[replace-all-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-2.md#stringprototypereplaceall-for-stage-4
[promise-any]: https://github.com/tc39/proposal-promise-any
[promise-any-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#promiseany--aggregateerror-for-stage-4
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[weakrefs-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#weakrefs-for-stage-4--cleanupsome-for-stage-23
[logical-assignment]: https://github.com/tc39/proposal-logical-assignment
[logical-assignment-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#logical-assignment-for-stage-4
[numeric_separators]: https://github.com/tc39/proposal-numeric-separator
[numeric_separators-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#numericliteralseparator-for-stage-4
[private-methods]: https://github.com/tc39/proposal-private-methods
[class-fields]: https://github.com/tc39/proposal-class-fields
[static-class-features]: https://github.com/tc39/proposal-static-class-features
[class-fields-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-04/apr-19.md#class-fields-private-methods-and-static-class-features-for-stage-4
[regex-match-indices]: https://github.com/tc39/proposal-regexp-match-indices
[regex-match-indices-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-05/may-25.md#regexp-match-indices
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-05/may-25.md#top-level-await
[private-fields-in-in]: https://github.com/tc39/proposal-private-fields-in-in
[private-fields-in-in-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-07/july-14.md#ergonomic-brand-checks-for-stage-4
[at]: https://github.com/tc39/proposal-relative-indexing-method
[at-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#relative-indexing-at-method-for-stage-4
[object-has]: https://github.com/tc39/proposal-accessible-object-hasownproperty
[object-has-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#accessible-object-hasownproperty-for-stage-4
[static-blocks]: https://github.com/tc39/proposal-class-static-block
[static-blocks-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/aug-31.md#class-static-initialization-blocks-for-stage-4
[error-cause]: https://github.com/tc39/proposal-error-cause
[error-cause-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-26.md#error-cause-for-stage-4
[find-last]: https://github.com/tc39/proposal-array-find-from-last
[find-last-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-06.md#findlastfindlastindex-for-stage-4
[hashbang-grammar]: https://github.com/tc39/proposal-hashbang
[hashbang-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-28.md#hash-bang-grammar
[symbols-weakmap]: https://github.com/tc39/proposal-symbols-as-weakmap-keys
[symbols-weakmap-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-01/jan-30.md#symbols-as-weakmap-keys
[change-array-by-copy]: https://github.com/tc39/proposal-change-array-by-copy
[change-array-by-copy-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#change-array-by-copy
[usv-string]: https://github.com/tc39/proposal-is-usv-string
[usv-string-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-15.md#well-formed-unicode-strings-for-stage-4
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-15.md#atomicswaitasync-for-stage-4
[regexp-v-flag]: https://github.com/tc39/proposal-regexp-v-flag
[regexp-v-flag-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-16.md#regexp-v-flag-for-stage-4
[resizable]: https://github.com/tc39/proposal-resizablearraybuffer
[resizable-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-05/may-25.md#resizable-arraybuffers-for-stage-3
