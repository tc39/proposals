# Finished Proposals

Finished proposals are proposals that have reached stage 4, and are included in the [latest draft](https://tc39.github.io/ecma262/) of the specification.

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
| [`String.prototype.matchAll`][matchall]                                  | Jordan Harband                                         | Jordan Harband                                          | March&nbsp;2019                             | 2020                      |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [inactive proposals](inactive-proposals.md) documents.

[array-includes]: https://github.com/tc39/Array.prototype.includes
[array-includes-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-11/nov-17.md#arrayprototypeincludes
[exponentiation]: https://github.com/rwaldron/exponentiation-operator
[exponentiation-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#5xviii-exponentiation-operator-rw
[object-values-entries]: https://github.com/tc39/proposal-object-values-entries
[object-values-entries-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#objectvalues--objectentries
[string-padding]: https://github.com/tc39/proposal-string-pad-start-end
[string-padding-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-05/may-25.md#stringprototypepadstartend-jhd
[object-gopds]: https://github.com/tc39/proposal-object-getownpropertydescriptors
[object-gopds-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-05/may-25.md#objectgetownpropertydescriptors-jhd
[function-commas]: https://github.com/tc39/proposal-trailing-function-commas
[function-commas-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-07/jul-26.md#9ie-trailing-commas-in-functions
[async-await]: https://github.com/tc39/ecmascript-asyncawait
[async-await-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-07/jul-28.md#10iv-async-functions
[atomics]: https://github.com/tc39/ecmascript_sharedmem
[atomics-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2017-01/jan-24.md#13if-seeking-stage-4-for-sharedarraybuffer
[template-literal-lift]: https://github.com/tc39/proposal-template-literal-revision
[template-literal-lift-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2017-03/mar-21.md#10ia-template-literal-updates
[dot-all]: https://github.com/tc39/proposal-regexp-dotall-flag
[dot-all-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2017-11/nov-28.md#9ie-regexp-dotall-status-update
[named-groups]: https://github.com/tc39/proposal-regexp-named-groups
[named-groups-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2017-11/nov-28.md#9if-regexp-named-captures-status-update
[object-rest-spread]: https://github.com/tc39/proposal-object-rest-spread
[object-rest-spread-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-23.md#restspread-properties-for-stage-4
[lookbehind]: https://github.com/tc39/proposal-regexp-lookbehind
[lookbehind-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-23.md#conclusionresolution-16
[unicode-escapes]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[unicode-escapes-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-24.md#conclusionresolution-1
[finally]: https://github.com/tc39/proposal-promise-finally
[finally-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-24.md#conclusionresolution-2
[async-iteration]: https://github.com/tc39/proposal-async-iteration
[async-iteration-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-25.md#conclusionresolution
[optional-catch]: https://github.com/tc39/proposal-optional-catch-binding
[optional-catch-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#conclusionresolution-7
[json-superset]: https://github.com/tc39/proposal-json-superset
[json-superset-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-05/may-22.md#conclusionresolution-8
[symbol-description]: https://github.com/tc39/proposal-Symbol-description
[symbol-description-notes]: https://github.com/rwaldron/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es9/2018-11/nov-27.md#conclusionresolution-12
[function-to-string]: https://github.com/tc39/Function-prototype-toString-revision
[function-to-string-notes]: https://github.com/rwaldron/tc39-notes/blob/be8c2af6d6dcfc9630e00ea15bbabf1a415245cb/es9/2018-11/nov-27.md#conclusionresolution-13
[object-from-entries]: https://github.com/tc39/proposal-object-from-entries
[object-from-entries-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-29.md#objectfromentries-for-stage-4
[well-formed-stringify]: https://github.com/tc39/proposal-well-formed-stringify
[well-formed-stringify-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-29.md#well-formed-jsonstringify-for-stage-4
[trims]: https://github.com/tc39/proposal-string-left-right-trim
[trims-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-29,md#stringprototypetrimstarttrimend-for-stage-4
[flat]: https://github.com/tc39/proposal-flatMap
[flat-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2019-01/jan-29.md#arrayprototypeflatflatmap-for-stage-4
[matchall]: https://github.com/tc39/String.prototype.matchAll
[matchall-notes]: https://github.com/tc39/tc39-notes/blob/master/es9/2018-09/sept-25.md#update-on-stringprototypematchall
