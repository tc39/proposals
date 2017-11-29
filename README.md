# [ECMAScript](https://github.com/tc39/ecma262) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)
 - [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| :rocket: | Proposal                                                 | Champion                                        |
|--|------------------------------------------------------------------|-------------------------------------------------|
|  | [`Function.prototype.toString` revision][function-to-string]     | Michael Ficarra                                 |
|  | [`global`][global]                                               | Jordan Harband                                  |
|  | [Rest/Spread Properties][object-rest-spread]                     | Sebastian Markbage                              |
|  | [Asynchronous Iteration][async-iteration]                        | Domenic Denicola                                |
|  | [`import()`][dynamic-import]                                     | Domenic Denicola                                |
|  | [RegExp Lookbehind Assertions][lookbehind]                       | Daniel Ehrenberg                                |
|  | [RegExp Unicode Property Escapes][unicode-escapes]               | Brian Terlson, Daniel Ehrenberg, Mathias Bynens |
|  | [RegExp named capture groups][named-groups]                      | Daniel Ehrenberg, Brian Terlson                 |
|  | [`s` (`dotAll`) flag for regular expressions][dot-all]           | Mathias Bynens, Brian Terlson                   |
|  | [Legacy RegExp features in JavaScript][regexp-legacy]            | Mark Miller, Claude Pache                       |
|  | [`Promise.prototype.finally`][finally]                           | Jordan Harband                                  |
|  | [BigInt][bigint]                                                 | Daniel Ehrenberg                                |
|  | [Class Fields][class-fields]                                     | Daniel Ehrenberg, Jeff Morrison                 |
|  | [Optional catch binding][optional-catch]                         | Michael Ficarra                                 |
|  | [`import.meta`][import-meta]                                     | Domenic Denicola                                |
|  | [Private methods and accessors][private-methods]                 | Daniel Ehrenberg, Kevin Gibbons                 |
|  | [Array.prototype.flatMap/flatten][flat]                          | Brian Terlson, Michael Ficarra                  |
|  | [Numeric separators][numeric_separators]                         | Sam Goto, Rick Waldron                          |

### Stage 2

| :rocket: | Proposal                                                 | Champion                                        |
|--|------------------------------------------------------------------|-------------------------------------------------|
|  | [`function.sent` metaproperty][function-sent]                    | Allen Wirfs-Brock                               |
|  | [`String.prototype.{trimStart,trimEnd}`][trims]                  | Sebastian Markbage                              |
|  | [Decorators][decorators]                                         | Yehuda Katz, Brian Terlson and Daniel Ehrenberg |
|  | [Throw expressions][throw-expressions]                           | Rob Buckton                                     |
|  | [`String#matchAll`][matchall]                                    | Jordan Harband                                  |
|  | [Atomics.waitAsync][nonblocking]                                 | Shu-yu Guo, Lars Hansen                         |
|  | [JSON superset][json-superset]                                   | Mark Miller, Richard Gibson, Mathias Bynens     |

### Stage 1

| :rocket: | Proposal                                                 | Champion                                        |
|--|------------------------------------------------------------------|-------------------------------------------------|
|  | [`Date.parse` fallback semantics][date-parse]                    | Morgan Phillips                                 |
|  | [`export v from "mod";` statements][export-from]                 | Ben Newman and John-David Dalton                |
| :rocket: | [Observable][observable]                                 | Jafar Husain and Mark Miller                    |
|  | [WeakRefs][weakrefs]                                             | Dean Tribble                                    |
|  | [Frozen Realms][frozen-realms]                                   | Mark S. Miller, Chip Morningstar, Caridy Patiño |
|  | [`Math` Extensions][more-math]                                   | Rick Waldron                                    |
|  | [`of` and `from` on collection constructors][collection-of-from] | Leo Balter                                      |
|  | Generator arrow functions (`=>*`)                                | Brendan Eich, Domenic Denicola                  |
|  | [`Promise.try`][try]                                             | Jordan Harband                                  |
|  | [Optional Chaining][chaining]                                    | Gabriel Isenberg                                |
|  | [`Math.signbit`: IEEE-754 sign bit][signbit]                     | JF Bastien                                      |
|  | [Error stacks][stacks]                                           | Jordan Harband                                  |
|  | [`do` expressions][do]                                           | Dave Herman                                     |
|  | [Realms][realms]                                                 | Dave Herman, Mark Miller, Caridy Patiño         |
|  | [Temporal][temporal]                                             | Maggie Pint, Brian Terlson                      |
|  | [Float16 on TypedArrays, DataView, Math.hfround][float16s]       | Leo Balter                                      |
|  | [`Symbol.prototype.description`][symbol-description]             | Michael Ficarra                                 |
|  | change Number.parseInt/parseFloat to not coerce null/undefined/NaN (repo link TBD) | Brendan Eich                  |
|  | [Binary AST][binary-ast]                                         | Shu-yu Guo                                      |
|  | [Pipeline Operator][pipeline]                                    | Daniel Ehrenberg                                |
|  | [Extensible numeric literals][extensible-literals]               | Daniel Ehrenberg                                |
|  | [First-Class Protocols][protocols]                               | Michael Ficarra                                 |
|  | [Nullary coalescing operator][nullary-coalescing]                | Gabriel Isenberg                                |
|  | [Partial application][partial-application]                       | Ron Buckton                                     |
|  | [InterpreterDirective][interpreter-directive]                    | Bradley Farias                                  |
|  | [`String.prototype.replaceAll`][replace-all]                     | Mathias Bynens                                  |

:rocket: means the champion thinks it's ready to advance but has not yet presented to the committee.

### Contributing new proposals

Please see [Contributing to ECMAScript](/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact @LJHarb
2. @bterlson or @littledan will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work - although Github Pages redirects will be broken (please update your links!).

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
[import-meta]: https://github.com/tc39/proposal-import-meta
[numeric_separators]: https://github.com/samuelgoto/proposal-numeric-separator
[private-methods]: https://github.com/littledan/proposal-private-methods
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
[do]: https://github.com/tc39/proposal-do-expressions
[realms]: https://github.com/caridy/proposal-realms
[temporal]: https://github.com/maggiepint/proposal-temporal
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[symbol-description]: https://github.com/tc39/proposal-Symbol-description
[flat]: https://github.com/tc39/proposal-flatMap
[throw-expressions]: https://github.com/rbuckton/proposal-throw-expressions
[binary-ast]: https://github.com/syg/ecmascript-binary-ast
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[extensible-literals]: https://github.com/littledan/proposal-extensible-numeric-literals
[protocols]: https://github.com/michaelficarra/proposal-first-class-protocols
[json-superset]: https://github.com/tc39/proposal-json-superset
[nullary-coalescing]: https://github.com/gisenberg/proposal-nullary-coalescing
[partial-application]: https://github.com/rbuckton/proposal-partial-application
[interpreter-directive]: https://gist.github.com/bmeck/59cf8c16959eccffd8b7e9828826a842
[replace-all]: https://github.com/psmarshall/string-replace-all-proposal
