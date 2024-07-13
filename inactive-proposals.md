# Inactive Proposals

Inactive proposals are proposals that at one point were presented to the committee but were subsequently abandoned, withdrawn, or rejected.

| Proposal                                                             | Champion                                                   | Rationale                                                                                     |
| -------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [Callable class constructors][callable-constructors]                 | Yehuda Katz<br />Allen Wirfs-Brock                         | Withdrawn: can be solved with decorators                                                      |
| [`{Set,Map}.prototype.toJSON`][collection-json]                      | David Bruant<br />Jordan Harband                           | Rejected: better solved by a custom replacer function.                                        |
| [Typed Objects][typed-objects-new]                                   | Till Schneidereit (previously [Dmitry Lomov, Niko Matsakis][typed-objects]) | Postponed: waiting for WebAssembly requirements to become clearer            |
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
| [Zones][zones]                                                       | Domenic Denicola<br />Miško Hevery                         | Withdrawn; champion is no longer participating in TC39                                        |
| [Blöcks][blocks]                                                     | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        |
| [RegExp Atomic Groups & Possessive Quantifiers][re-atomic-groups]    | Justin Ridgewell                                           | Never presented; engines are not interested in the feature, mainly because it doesn't solve backtracking for most users |
| [RefCollection][refcollection]                                       | Robin Ricard                                               | Withdrawn; replaced with [Symbols as WeakMap keys][symbols-weakmap]; also there were OCAP/membrane concerns around providing a globally available pre-instantiated RefCollection |
| [Generic Comparison][spaceship]                                      | Hemanth HM<br />Jordan Harband                             | Withdrawn: replaced with [Array Equality][array-equality]
| [`from ... import`][fromimport]                                      | Bradley Farias                                             | Never presented; preliminary feedback about syntax cost not being worth the weight            |
| [TypedArray stride parameter][typedarray-stride-parameter]           | Shu-yu Guo                                                 | [Withdrawn][typedarray-stride-parameter-notes]: concern about performance implications, and the proposal is not expressive enough
| [Unused Function Parameters][unused-params]                          | Gus Caplan                                                 | [Rejected][unused-params-notes]: the need to solve the problem does not outweigh the hazards
| [Improving iteration on Objects][object-iteration]                   | Jonathan Keslin                                            | Withdrawn: concern about need for such an API                                                 |
| [`String.prototype.at`][string-at]                                   | Mathias Bynens<br />Rick Waldron                           | Obsoleted by renamed `String.prototype.item` proposal                                         |
| [`ArrayBuffer.prototype.transfer`][buffer-transfer]                  | Domenic Denicola<br />Shu-yu Guo                           | Withdrawn: superseded by [Resizable Buffers][resizable-buffers]                               |
| [`deprecated`][deprecated]                                           | James M Snell                                              | Never presented                                                                               |
| [Function helpers][function-helpers]                                 | J. S. Choi                                                 | Presented and rejected before Stage 1 on 2021-10; split up into multiple subsequent proposals |
| [`"use module"`][modules-pragma]                                     | Dave Herman                                                | Inactive; champion does not wish to pursue                                                    |
| [Function.pipe and flow][pipe-flow]                                  | J.S. Choi                                                  | Withdrawn: [rejected for stage 1][pipe-flow-notes]                                            |
| [`Symbol.thenable`][symbol-thenable]                                 | Gus Caplan<br />Jordan Harband<br />Myles Borins           | Withdrawn; changing thenability on Module Namespace objects is not web compatible, and allowing non-Promise use of "then" is not worth slowing down all Promise operations |
| [WeakRefs `cleanupSome`][cleanup-some]                               | Yulia Startsev<br />Daniel Ehrenberg                       | Withdrawn; subsumed by WebAssembly JS Promise Integration, which avoids the long task issue |
| [Operator overloading][overloading]                                  | Daniel Ehrenberg                                           | Withdrawn |
| [Extensible numeric literals][extensible-literals]                   | Daniel Ehrenberg                                           | Withdrawn |
| [JSON.tryParse][json-tryparse]                                       | Jack Works                                                 | Rejected; some deemed this too specific a solution for a generalized language-wide problem |
| [UUID][uuid]                                                         | Benjamin Coe                                               | Withdrawn; moved to `crypto.randomUUID()` in February 2023 |
| [`Math` Extensions][more-math]                                       | Rick Waldron                                               | Withdrawn: no interested champions in February 2024 |
| [Generator arrow functions][generator-arrow-functions]               | Sergey Rubanov<br />Brendan Eich                           | Withdrawn: no interested champions in February 2024 |
| [`Math.signbit`: IEEE-754 sign bit][signbit]                         | JF Bastien                                                 | Withdrawn: no interested champions in February 2024 |
| [Getting last element of Array][arraylast]                           | Keith Cirkel                                               | Withdrawn; the [Array#at](https://github.com/tc39/proposal-relative-indexing-method) proposal supersedes this work. |
| [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                   | Withdrawn; subsumed by [RegExp v flag with set notation + properties of strings][regexp-v-flag] proposal |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.

[distinguishing-literal-strings]: https://github.com/mikewest/tc39-proposal-literals
[callable-constructors]: https://github.com/tc39/ecma262/blob/93183b81cb03116b75019615d148b5f788e70edf/workingdocs/callconstructor.md
[collection-json]: https://github.com/DavidBruant/Map-Set.prototype.toJSON
[typed-objects]: https://github.com/dslomov/typed-objects-es7
[typed-objects-new]: https://github.com/tschneidereit/proposal-typed-objects
[object-enums]: https://github.com/leobalter/object-enumerables
[cancel-promise]: https://github.com/tc39/proposal-cancelable-promises
[module-unambig]: https://github.com/tc39/proposal-UnambiguousJavaScriptGrammar
[dynamic-module-reform]: https://github.com/tc39/proposal-dynamic-modules
[simd]: https://github.com/tc39/ecmascript_simd/
[simd-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-03/mar-21.md#conclusionresolution-10
[ptc]: https://github.com/tc39/proposal-ptc-syntax
[shallow-equal]: https://github.com/sebmarkbage/ecmascript-shallow-equal
[construct]: https://github.com/jasnell/proposal-construct
[is-types]: https://github.com/jasnell/proposal-istypes
[error-stacks]: https://github.com/tc39/proposal-error-stacks
[collection-literals]: https://github.com/zkat/proposal-collection-literals
[date-parse]: https://github.com/tc39/proposal-date-time-string-format
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[icu]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-23.md#normative-icu-reference
[zones]: https://github.com/domenic/zones
[blocks]: https://github.com/domenic/proposal-blocks
[re-atomic-groups]: https://github.com/jridgewell/proposal-regexp-atomic-and-possessive
[refcollection]: https://github.com/rricard/proposal-refcollection/
[symbols-weakmap]: https://github.com/tc39/proposal-symbols-as-weakmap-keys
[spaceship]: https://github.com/hemanth/proposal-generic-comparison
[array-equality]: https://github.com/tc39/proposal-array-equality
[fromimport]: https://github.com/bmeck/proposal-from-import
[typedarray-stride-parameter]: https://github.com/tc39/proposal-typedarray-stride
[typedarray-stride-parameter-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-21.md#withdrawing-typedarray-stride
[unused-params]: https://github.com/devsnek/proposal-unused-function-parameters
[unused-params-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-24.md#unused-function-parameters-for-stage-1
[object-iteration]: https://github.com/tc39/proposal-object-iteration
[string-at]: https://github.com/mathiasbynens/String.prototype.at
[buffer-transfer]: https://github.com/domenic/proposal-arraybuffer-transfer
[resizable-buffers]: https://github.com/tc39/proposal-resizablearraybuffer
[deprecated]: https://github.com/jasnell/proposal-deprecated
[function-helpers]: https://github.com/tc39/proposal-function-helpers
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[modules-pragma-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-07/jul-26.md#9ivb-modulescript-pragma-for-stage-2
[pipe-flow]: https://github.com/tc39/proposal-function-pipe-flow
[pipe-flow-notes]: https://github.com/tc39/notes/blob/main/meetings/2022-07/jul-21.md#functionpipe--flow-for-stage-1
[symbol-thenable]: https://github.com/devsnek/proposal-symbol-thenable
[symbol-thenable-notes]: https://github.com/tc39/notes/blob/def2ee0c04bc91612576237314a4f3b1fe2edaef/meetings/2018-05/may-24.md#symbolthenable-for-stage-1-or-2
[cleanup-some]: https://github.com/tc39/proposal-cleanup-some
[cleanup-some-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#weakrefs-for-stage-4--cleanupsome-for-stage-23
[overloading]: https://github.com/tc39/proposal-operator-overloading
[overloading-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#operator-overloading-for-stage-1
[extensible-literals]: https://github.com/tc39/proposal-extended-numeric-literals
[extensible-literals-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-21.md#numeric-literal-suffixes-update-separate-namespace-version
[json-tryparse]: https://github.com/Jack-Works/proposal-json-tryParse
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[more-math-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-26.md#9iie-math-extensions
[generator-arrow-functions]: https://github.com/tc39/proposal-generator-arrow-functions
[generator-arrow-functions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-27.md#11ic-generator-arrow-functions
[signbit]: https://github.com/tc39/proposal-Math.signbit
[signbit-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-23.md#16ib-mathsignbit-proposal
[arraylast]: https://github.com/tc39/proposal-array-last
[unicode-sequence-properties]: https://github.com/tc39/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-2.md#update-on-sequence-property-escapes-in-unicode-regular-expressions
[regexp-v-flag]: https://github.com/tc39/proposal-regexp-v-flag
[uuid]: https://github.com/tc39/proposal-uuid
[uuid-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-3.md#uuid-for-stage-1
