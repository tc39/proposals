# [ECMAScript](https://github.com/tc39/ecma262) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)
 - [Inactive Proposals](inactive-proposals.md)

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

| 🚀 | Proposal                                                         | Champion                                        | Stage |
|---|------------------------------------------------------------------|-------------------------------------------------|-------|
|   | [`Function.prototype.toString` revision][function-to-string]     | Michael Ficarra                                 | 3 |
|   | [`global`][global]                                               | Jordan Harband                                  | 3 |
|   | [Rest/Spread Properties][object-rest-spread]                     | Sebastian Markbage                              | 3 |
|   | [Asynchronous Iteration][async-iteration]                        | Domenic Denicola                                | 3 |
|   | [`import()`][dynamic-import]                                     | Domenic Denicola                                | 3 |
|   | [RegExp Lookbehind Assertions][lookbehind]                       | Daniel Ehrenberg                                | 3 |
|   | [RegExp Unicode Property Escapes][unicode-escapes]               | Brian Terlson, Daniel Ehrenberg, Mathias Bynens | 3 |
|   | [RegExp named capture groups][named-groups]                      | Daniel Ehrenberg, Brian Terlson                 | 3 |
|   | [`s` (`dotAll`) flag for regular expressions][dot-all]           | Mathias Bynens, Brian Terlson                   | 3 |
|   | [Legacy RegExp features in JavaScript][regexp-legacy]            | Mark Miller, Claude Pache                       | 3 |
|   | [`Promise.prototype.finally`][finally]                           | Jordan Harband                                  | 3 |
|   | [BigInt][bigint]                                                 | Daniel Ehrenberg                                | 3 |
|   | [Class Fields][class-fields]                                     | Daniel Ehrenberg, Jeff Morrison                 | 3 |
|   | [Optional catch binding][optional-catch]                         | Michael Ficarra                                 | 3 |
|   | [`function.sent` metaproperty][function-sent]                    | Allen Wirfs-Brock                               | 2 |
|   | [`String.prototype.{trimStart,trimEnd}`][trims]                  | Sebastian Markbage                              | 2 |
|   | [Class and Property Decorators][decorators] ([update][unified-class]) | Yehuda Katz and Brian Terlson                   | 2 |
|   | [`Intl.Segmenter`][intl-segmenter]                               | Daniel Ehrenberg                                | 2 |
|   | [`import.meta`][import-meta]                                     | Domenic Denicola                                | 2 |
|   | [`Intl.RelativeTimeFormat`][relative-time]                       | Zibi Braniecki, Daniel Ehrenberg                | 2 |
|   | [Numeric separators][numeric_separators]                         | Sam Goto                                        | 2 |
|   | [`export * as ns from "mod";` statements][export-ns-from]        | Ben Newman and John-David Dalton                | 2 |
|   | [Private methods and accessors][private-methods]                 | Daniel Ehrenberg, Kevin Gibbons                 | 2 |
|   | [`Date.parse` fallback semantics][date-parse]                    | Morgan Phillips                                 | 1 |
|   | [`export v from "mod";` statements][export-from]                 | Ben Newman and John-David Dalton                | 1 |
| 🚀 | [Observable][observable]                                         | Jafar Husain and Mark Miller                    | 1 |
|   | [`String#matchAll`][matchall]                                    | Jordan Harband                                  | 1 |
|   | [WeakRefs][weakrefs]                                             | Dean Tribble                                    | 1 |
|   | [Frozen Realms][frozen-realms]                                   | Mark S. Miller, Chip Morningstar, Caridy Patiño | 1 |
|   | [`Math` Extensions][more-math]                                   | Rick Waldron                                    | 1 |
|   | [`of` and `from` on collection constructors][collection-of-from] | Leo Balter                                      | 1 |
|   | Generator arrow functions (`=>*`)                                | Brendan Eich, Domenic Denicola                  | 1 |
|   | [`Promise.try`][try]                                             | Jordan Harband                                  | 1 |
|   | [Optional Chaining][chaining]                                    | Gabriel Isenberg                                | 1 |
|   | [`Math.signbit`: IEEE-754 sign bit][signbit]                     | JF Bastien                                      | 1 |
|   | [Error stacks][stacks]                                           | Jordan Harband                                  | 1 |
|   | [`do` expressions][do]                                           | Dave Herman                                     | 1 |
|   | [Realms][realms]                                                 | Dave Herman, Mark Miller, Caridy Patiño         | 1 |
|   | [Temporal][temporal]                                             | Maggie Pint, Brian Terlson                      | 1 |
|   | [Float16 on TypedArrays, DataView, Math.hfround][float16s]       | Leo Balter                                      | 1 |
|   | [Atomics.waitNonblocking][nonblocking]                           | Shu-yu Guo, Lars Hansen                         | 1 |
|   | [`Symbol.prototype.description`][symbol-description]             | Michael Ficarra                                 | 1 |
|   | change Number.parseInt/parseFloat to not coerce null/undefined/NaN (repo link TBD) | Brendan Eich                  | 1 |
|   | [Array.prototype.flat{Map,ten}][flat]                            | Brian Terlson, Michael Ficarra                  | 1 |
|   | [Throw expressions][throw-expressions]                           | Rob Buckton                                     | 1 |
|   | [Binary AST][binary-ast]                                         | Shu-yu Guo                                      | 1 |

🚀 means the champion thinks it's ready to advance but has not yet presented to the committee.

### Contributing new proposals

Please see [Contributing to ECMAScript](/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to @bterlson
2. Email @bterlson at brian.terlson AT microsoft.com notifying me of the transfer (GitHub's transfer notification is not the most obvious thing and there's only a short window to accept the transfer)
3. @bterlson will transfer your repository to the TC39 organization.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, redirects will continue to work.

[function-to-string]: https://github.com/tc39/Function-prototype-toString-revision
[global]: https://github.com/tc39/proposal-global
[object-rest-spread]: https://github.com/tc39/proposal-object-rest-spread
[async-iteration]: https://github.com/tc39/proposal-async-iteration
[dynamic-import]: https://github.com/tc39/proposal-dynamic-import
[lookbehind]: https://github.com/tc39/proposal-regexp-lookbehind
[unicode-escapes]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[named-groups]: https://github.com/tc39/proposal-regexp-named-groups
[dot-all]: https://github.com/tc39/proposal-regexp-dotall-flag
[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[finally]: https://github.com/tc39/proposal-promise-finally
[bigint]: https://github.com/tc39/proposal-bigint
[class-fields]: https://github.com/tc39/proposal-class-fields
[optional-catch]: https://github.com/tc39/proposal-optional-catch-binding
[function-sent]: https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
[trims]: https://github.com/sebmarkbage/ecmascript-string-left-right-trim
[decorators]: http://github.com/tc39/proposal-decorators
[intl-segmenter]: https://github.com/tc39/proposal-intl-segmenter
[import-meta]: https://github.com/tc39/proposal-import-meta
[relative-time]: https://github.com/tc39/proposal-intl-relative-time
[numeric_separators]: https://github.com/samuelgoto/proposal-numeric-separator
[export-ns-from]: https://github.com/tc39/proposal-export-ns-from
[private-methods]: https://github.com/littledan/proposal-private-methods
[unified-class]: https://github.com/littledan/proposal-unified-class-features
[date-parse]: https://github.com/mrrrgn/proposal-date-time-string-format
[export-from]: https://github.com/tc39/proposal-export-default-from
[observable]: https://github.com/tc39/proposal-observable
[matchall]: https://github.com/tc39/String.prototype.matchAll
[weakrefs]: https://github.com/tc39/proposal-weakrefs
[frozen-realms]: https://github.com/FUDCo/frozen-realms
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[collection-of-from]: https://github.com/leobalter/proposal-setmap-offrom
[try]: https://github.com/ljharb/proposal-promise-try
[chaining]: https://github.com/tc39/proposal-optional-chaining
[signbit]: http://jfbastien.github.io/papers/Math.signbit.html
[stacks]: https://github.com/ljharb/proposal-error-stacks
[do]: https://gist.github.com/dherman/1c97dfb25179fa34a41b5fff040f9879
[realms]: https://github.com/caridy/proposal-realms
[temporal]: https://github.com/maggiepint/proposal-temporal
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[symbol-description]: https://github.com/tc39/proposal-Symbol-description
[flat]: https://github.com/tc39/proposal-flatMap
[throw-expressions]: https://github.com/rbuckton/proposal-throw-expressions
[binary-ast]: https://github.com/syg/ecmascript-binary-ast
