[ECMAScript](https://github.com/tc39/ecma262)
====

## Active Proposals
Proposals follow [this process document](https://tc39.github.io/process-document/).

| 🚀 | Proposal                                                                                                  | Champion                           | Stage |
|---|-----------------------------------------------------------------------------------------------------------|------------------------------------|-------|
|   | [SIMD.JS - SIMD APIs](https://docs.google.com/presentation/d/1MY9NHrHmL7ma7C8dyNXvmYNNGgVmmxXk8ZIiQtPlfH4/edit?usp=sharing) + [polyfill](http://tc39.github.io/ecmascript_simd/) | John McCutchan, Peter Jensen, Dan Gohman, Daniel Ehrenberg | 3 |
|   | [`Function.prototype.toString` revision](https://github.com/tc39/Function-prototype-toString-revision)    | Michael Ficarra                    | 3 |
|   | [Lifting Template Literal Restriction](https://github.com/tc39/proposal-template-literal-revision)        | Tim Disney                         | 3 |
|   | [global](https://github.com/tc39/proposal-global)                                                         | Jordan Harband                     | 3 |
|   | [Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread)                           | Sebastian Markbage                 | 3 |
|   | [Asynchronous Iterators](https://github.com/tc39/proposal-async-iteration)                                | Domenic Denicola                   | 2 |
|   | [function.sent metaproperty](https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md)  | Allen Wirfs-Brock                  | 2 |
| 🚀 | [Shared memory and atomics](https://github.com/tc39/ecmascript_sharedmem)                                 | Lars T Hansen                      | 2 |
|   | [String.prototype.{trimStart,trimEnd}](https://github.com/sebmarkbage/ecmascript-string-left-right-trim)  | Sebastian Markbage                 | 2 |
|   | [Public Class Fields](https://tc39.github.io/proposal-class-public-fields/)                               | Jeff Morrison                      | 2 |
|   | [Promise.prototype.finally](https://github.com/tc39/proposal-promise-finally)                             | Jordan Harband                     | 2 |
|   | [Class and Property Decorators](http://tc39.github.io/proposal-decorators/)                               | Yehuda Katz and Brian Terlson      | 2 |
|   | [Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features)           | Mark Miller, Claude Pache          | 2 |
|   | [RegExp Unicode Property Escapes](https://github.com/mathiasbynens/es-regex-unicode-property-escapes) | Brian Terlson, Daniel Ehrenberg, Mathias Bynens | 2 |
|   | [Date.parse fallback semantics](https://github.com/mrrrgn/proposal-date-time-string-format)               | Morgan Phillips                    | 1 |
| 🚀 | [`export * as ns from "mod";` statements](https://github.com/leebyron/ecmascript-export-ns-from)          | Lee Byron                          | 1 |
| 🚀 | [`export v from "mod";` statements](https://github.com/leebyron/ecmascript-export-default-from)           | Lee Byron                          | 1 |
|   | [Observable](https://github.com/tc39/proposal-observable)                                                 | Jafar Husain                       | 1 |
|   | [String#matchAll](https://github.com/tc39/String.prototype.matchAll)                                      | Jordan Harband                     | 1 |
|   | [Private Fields](https://github.com/tc39/proposal-private-fields)                                         | Daniel Ehrenberg                   | 1 |
|   | [WeakRefs](https://github.com/tc39/proposal-weakrefs)                                                     | Dean Tribble                       | 1 |
|   | [Frozen Realms](https://github.com/FUDCo/frozen-realms)                                      | Mark S. Miller, Chip Morningstar, Caridy Patiño | 1 |
|   | [Cancelable Promises](https://github.com/tc39/proposal-cancelable-promises)                               | Domenic Denicola                   | 1 |
|   | [Math Extensions](https://github.com/rwaldron/proposal-math-extensions)                                   | Rick Waldron                       | 1 |
|   | [`of` and `from` on collection constructors](https://github.com/leobalter/proposal-setmap-offrom)         | Leo Balter                         | 1 |

🚀 means the champion thinks it's ready to advance but has not yet presented to the committee.

## Proposals
 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)
 - [Inactive Proposals](inactive-proposals.md)

### Contributing New Proposals

Please see [Contributing to ECMAScript](/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding Existing Proposals

Proposals that are Stage 1 and above must be transferred to the TC39 GitHub organization for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to @bterlson
2. Email @bterlson at brian.terlson AT microsoft.com notifying me of the transfer (github's transfer notification is not the most obvious thing and there's only a short window to accept the transfer)
3. @bterlson will transfer your repository to the TC39 organization.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, redirects will continue to work.
