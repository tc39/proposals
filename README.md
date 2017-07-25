# [ECMAScript](https://github.com/tc39/ecma262) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)
 - [Inactive Proposals](inactive-proposals.md)

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

| 🚀 | Proposal                                                                                                    | Champion                           | Stage |
|---|-------------------------------------------------------------------------------------------------------------|------------------------------------|-------|
|   | [`Function.prototype.toString` revision](https://github.com/tc39/Function-prototype-toString-revision)      | Michael Ficarra                    | 3 |
|   | [`global`](https://github.com/tc39/proposal-global)                                                         | Jordan Harband                     | 3 |
|   | [Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread)                               | Sebastian Markbage                 | 3 |
|   | [Asynchronous Iteration](https://github.com/tc39/proposal-async-iteration)                                  | Domenic Denicola                   | 3 |
|   | [`import()`](https://github.com/tc39/proposal-dynamic-import)                                               | Domenic Denicola                   | 3 |
|   | [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)                          | Daniel Ehrenberg                   | 3 |
|   | [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)         | Brian Terlson, Daniel Ehrenberg, Mathias Bynens | 3 |
|   | [RegExp named capture groups](https://github.com/tc39/proposal-regexp-named-groups)                         | Daniel Ehrenberg, Brian Terlson    | 3 |
|   | [`s` (`dotAll`) flag for regular expressions](https://github.com/mathiasbynens/es-regexp-dotall-flag)       | Mathias Bynens, Brian Terlson      | 3 |
|   | [Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features)             | Mark Miller, Claude Pache          | 3 |
|   | [`function.sent` metaproperty](https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md)  | Allen Wirfs-Brock                  | 2 |
|   | [`String.prototype.{trimStart,trimEnd}`](https://github.com/sebmarkbage/ecmascript-string-left-right-trim)  | Sebastian Markbage                 | 2 |
|   | [Class Fields](https://github.com/tc39/proposal-class-fields)                                               | Daniel Ehrenberg, Jeff Morrison    | 2 |
| 🚀 | [`Promise.prototype.finally`](https://github.com/tc39/proposal-promise-finally)                             | Jordan Harband                     | 2 |
|   | [Class and Property Decorators](http://tc39.github.io/proposal-decorators/)                                 | Yehuda Katz and Brian Terlson      | 2 |
|   | [`Intl.Segmenter`](https://github.com/tc39/proposal-intl-segmenter)                                         | Daniel Ehrenberg                   | 2 |
|   | [Arbitrary-precision Integers](https://github.com/tc39/proposal-integer)                                    | Daniel Ehrenberg                   | 2 |
|   | [`import.meta`](https://github.com/tc39/proposal-import-meta)                                               | Domenic Denicola                   | 2 |
|   | [`Date.parse` fallback semantics](https://github.com/mrrrgn/proposal-date-time-string-format)               | Morgan Phillips                    | 1 |
|   | [`export * as ns from "mod";` statements](https://github.com/tc39/proposal-export-ns-from)                  | Ben Newman and John-David Dalton   | 1 |
|   | [`export v from "mod";` statements](https://github.com/tc39/proposal-export-default-from)                   | Ben Newman and John-David Dalton   | 1 |
| 🚀 | [Observable](https://github.com/tc39/proposal-observable)                                                   | Jafar Husain and Mark Miller       | 1 |
|   | [`String#matchAll`](https://github.com/tc39/String.prototype.matchAll)                                      | Jordan Harband                     | 1 |
|   | [WeakRefs](https://github.com/tc39/proposal-weakrefs)                                                       | Dean Tribble                       | 1 |
|   | [Frozen Realms](https://github.com/FUDCo/frozen-realms)                                                     | Mark S. Miller, Chip Morningstar, Caridy Patiño | 1 |
|   | [`Math` Extensions](https://github.com/rwaldron/proposal-math-extensions)                                   | Rick Waldron                       | 1 |
|   | [`of` and `from` on collection constructors](https://github.com/leobalter/proposal-setmap-offrom)           | Leo Balter                         | 1 |
|   | Generator arrow functions (`=>*`)                                                                           | Brendan Eich, Domenic Denicola     | 1 |
|   | [`Promise.try`](https://github.com/ljharb/proposal-promise-try)                                             | Jordan Harband                     | 1 |
|   | [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)                                      | Gabriel Isenberg                  | 1 |
|   | [`Math.signbit`: IEEE-754 sign bit](http://jfbastien.github.io/papers/Math.signbit.html)                     | JF Bastien                        | 1 |
|   | [Error stacks](https://github.com/ljharb/proposal-error-stacks)                                              | Jordan Harband                    | 1 |
|   | [`do` expressions](https://gist.github.com/dherman/1c97dfb25179fa34a41b5fff040f9879)                         | Dave Herman                       | 1 |
|   | [Realms](https://github.com/caridy/proposal-realms)                                                          | Dave Herman, Mark Miller, Caridy Patiño | 1 |
|   | [Temporal](https://github.com/maggiepint/proposal-temporal)                                                  | Maggie Pint, Brian Terlson        | 1 |
|   | [Float16 on TypedArrays, DataView, Math.hfround](https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing) | Leo Balter | 1 |
|   | [Atomics.waitNonblocking](https://github.com/lars-t-hansen/moz-sandbox/blob/master/sab/waitNonblocking.md)   | Shu-yu Guo, Lars Hansen           | 1 |
|   | [Numeric separators](https://github.com/samuelgoto/proposal-numeric-separator)                               | Sam Goto                          | 1 |

🚀 means the champion thinks it's ready to advance but has not yet presented to the committee.

### Contributing new proposals

Please see [Contributing to ECMAScript](/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to @bterlson
2. Email @bterlson at brian.terlson AT microsoft.com notifying me of the transfer (GitHub's transfer notification is not the most obvious thing and there's only a short window to accept the transfer)
3. @bterlson will transfer your repository to the TC39 organization.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, redirects will continue to work.
