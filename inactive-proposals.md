# Inactive Proposals

Inactive proposals are proposals that at one point were presented to the committee but were subsequently abandoned, withdrawn, or rejected.

| Proposal                                                             | Champion                                                   | Rationale                                                                                     |
| -------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`RegExp.escape`][escape]                                            | Domenic Denicola<br />Benjamin Gruenbaum                   | [Rejected][escape-notes]: in favor of exploring a template tag function solution              |
| [Callable class constructors][callable-constructors]                 | Yehuda Katz<br />Allen Wirfs-Brock                         | Withdrawn: can be solved with decorators                                                      |
| [`Error.isError`][is-error]                                          | Jordan Harband                                             | Withdrawn: in favor of [`Error` stack traces][error-stacks] proposal                          |
| [`{Set,Map}.prototype.toJSON`][collection-json]                      | David Bruant<br />Jordan Harband                           | Rejected: better solved by a custom replacer function.                                        |
| [Typed Objects][typed-objects-new]                                   | Till Schneidereit (previously [Dmitry Lomov, Niko Matsakis][typed-objects]) | Postponed: waiting for WebAssembly requirements to become clearer                             |
| [Object enumerables][object-enums]                                   | Leo Balter<br />John-David Dalton                          | Rejected                                                                                      |
| [Cancelable Promises][cancel-promise]                                | Domenic Denicola                                           | Withdrawn                                                                                     |
| [Proposed Grammar change to ES Modules][module-unambig]              | Bradley Farias                                             | Rejected: No consensus on this specific solution.                                             |
| [Dynamic Module Reform][dynamic-module-reform]                       | Caridy Patiño                                              | Withdrawn: we decided to preserve the current semantics                                       |
| [SIMD.JS - SIMD APIs][simd]                                          | Peter Jensen<br />Yehuda Katz                              | [Stage 1][simd-notes]: Start with SIMD in WASM; implementations not pursuing SIMD.js for now. |
| [Updates to Tail Calls to include an explicit syntactic opt-in][ptc] | Brian Terlson<br />Eric Faust                              | Inactive                                                                                      |
| [Object.shallowEqual][shallow-equal]                                 | Sebastian Markbage                                         | Withdrawn                                                                                     |
| [`%constructor%.construct`][construct]                               | James M Snell                                              | Withdrawn                                                                                     |
| [`Builtins.typeOf()` and `Builtins.is()`][is-types]                  | James M Snell                                              | Withdrawn: can be solved in other ways                                                        |
| [Tagged Collection Literals][collection-literals]                    | Kat Marchán                                                | Withdrawn: pursuing `when new` syntax and other alternatives                                  |
| [`Date.parse` fallback semantics][date-parse]                        | Morgan Phillips                                            | Inactive; likely replaced by [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse] |
| [Distinguishing literal strings][distinguishing-literal-strings]     | Mike West<br />Adam Klein                                  | Withdrawn: [Trusted Types](https://github.com/w3c/webappsec-trusted-types) no longer a dependent |
| Annex B — HTML Attribute Event Handlers                              | Allen Wirfs-Brock                                          | Withdrawn per [PR comment](https://github.com/tc39/ecma262/issues/1595#issuecomment-509348434) |
| [Normative ICU Reference][icu]                                       | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        |
<<<<<<< HEAD
| [Zones][zones]                                                       | Domenic Denicola<br />Miško Hevery                         | Withdrawn; champion is no longer participating in TC39                                        |
| [Blöcks][blocks]                                                     | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        |
| [RegExp Atomic Groups & Possessive Quantifiers][re-atomic-groups]    | Justin Ridgewell                                           | Never presented; engines are not interested in the feature, mainly because it doesn't solve backtracking for most users |
| [RefCollection][refcollection]                                       | Robin Ricard                                               | Withdrawn; replaced with [Symbols as WeakMap keys][symbols-weakmap]; also there were OCAP/membrane concerns around providing a globally available pre-instantiated RefCollection |
| [Generic Comparison][spaceship]                                      | Hemanth HM<br />Jordan Harband                             | Withdrawn: replaced with [Array Equality][array-equality]
| [`from ... import`][fromimport] | Bradley Farias | Never presented; preliminary feedback about syntax cost not being worth the weight |
| [TypedArray stride parameter][typedarray-stride-parameter]           | Shu-yu Guo                                                 | Withdrawn: concern about performance implications, and the proposal is not expressive enough
| [Unused Function Parameters][unused-params]                          | Gus Caplan                                                 | Rejected: the need to solve the problem does not outweigh the hazards
=======
| [Zones][zones]                                                       | Domenic Denicola & Miško Hevery                            | Withdrawn; champion is no longer participating in TC39                                        |
| [Blöcks][blocks]                                                     | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        |
| [RegExp Atomic Groups & Possessive Quantifiers][re-atomic-groups]    | Justin Ridgewell                                           | Never presented; engines are not interested in the feature, mainly because it doesn't solve backtracking for most users |
| [RefCollection][refcollection]                                       | Robin Ricard                                               | Withdrawn; replaced with [Symbols as WeakMap keys][symbols-weakmap]; also there were OCAP/membrane concerns around providing a globally available pre-instantiated RefCollection |
| [Generic Comparison][spaceship]                                      | Hemanth HM & Jordan Harband                                | Withdrawn: replaced with [Array Equality][array-equality]
| [`from ... import`][fromimport] | Bradley Farias | Never presented; preliminary feedback about syntax cost not being worth the weight |
>>>>>>> 56db142... add last meeting

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.

[distinguishing-literal-strings]: https://github.com/mikewest/tc39-proposal-literals
[escape]: https://github.com/benjamingr/RegExp.escape
[escape-notes]: https://github.com/tc39/notes/blob/master/meetings/2015-07/july-28.md#62-regexpescape
[callable-constructors]: https://github.com/tc39/ecma262/blob/master/workingdocs/callconstructor.md
[is-error]: https://github.com/ljharb/proposal-is-error
[collection-json]: https://github.com/DavidBruant/Map-Set.prototype.toJSON
[typed-objects]: https://github.com/dslomov/typed-objects-es7
[typed-objects-new]: https://github.com/tschneidereit/proposal-typed-objects
[object-enums]: https://github.com/leobalter/object-enumerables
[cancel-promise]: https://github.com/tc39/proposal-cancelable-promises
[module-unambig]: https://github.com/tc39/proposal-UnambiguousJavaScriptGrammar
[dynamic-module-reform]: https://github.com/tc39/proposal-dynamic-modules
[simd]: https://github.com/tc39/ecmascript_simd/
[simd-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-03/mar-21.md#conclusionresolution-10
[ptc]: https://github.com/tc39/proposal-ptc-syntax
[shallow-equal]: https://github.com/sebmarkbage/ecmascript-shallow-equal
[construct]: https://github.com/jasnell/proposal-construct
[is-types]: https://github.com/jasnell/proposal-istypes
[error-stacks]: https://github.com/tc39/proposal-error-stacks
[collection-literals]: https://github.com/zkat/proposal-collection-literals
[date-parse]: https://github.com/tc39/proposal-date-time-string-format
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[icu]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-23.md#normative-icu-reference
[zones]: https://github.com/domenic/zones
[blocks]: https://github.com/domenic/proposal-blocks
[re-atomic-groups]: https://github.com/jridgewell/proposal-regexp-atomic-and-possessive
[refcollection]: https://github.com/rricard/proposal-refcollection/
<<<<<<< HEAD
[symbols-weakmap]: https://github.com/tc39/proposal-symbols-as-weakmap-keys
[spaceship]: https://github.com/hemanth/proposal-generic-comparison
[array-equality]: https://github.com/tc39/proposal-array-equality
[fromimport]: https://github.com/bmeck/proposal-from-import
[typedarray-stride-parameter]: https://github.com/tc39/proposal-typedarray-stride
[unused-params]: https://github.com/devsnek/proposal-unused-function-parameters
=======
[symbols-weakmap]: https://github.com/rricard/proposal-symbols-as-weakmap-keys
[spaceship]: https://github.com/hemanth/proposal-generic-comparison
[array-equality]: https://github.com/tc39/proposal-array-equality
[fromimport]: https://github.com/bmeck/proposal-from-import
>>>>>>> 56db142... add last meeting
