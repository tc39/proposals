# Inactive Proposals

Inactive proposals are proposals that at one point were presented to the committee but were subsequently abandoned, withdrawn, or rejected.

| Proposal                                                             | Champion                                                   | Rationale                                                                                     | Meeting Notes |
| -------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| [Callable class constructors][callable-constructors]                 | Yehuda Katz<br />Allen Wirfs-Brock                         | Withdrawn: can be solved with decorators                                                      | <sub>&nbsp;-[2016&#8209;01][callable-constructors-notes]</sub> |
| [`{Set,Map}.prototype.toJSON`][collection-json]                      | David Bruant<br />Jordan Harband                           | Rejected: better solved by a custom replacer function.                                        | <sub>&nbsp;-[2016&#8209;03][collection-json-notes]</sub> |
| [Typed Objects][typed-objects-new]                                   | Till Schneidereit (previously [Dmitry Lomov, Niko Matsakis][typed-objects]) | Postponed: waiting for WebAssembly requirements to become clearer            | <sub>&nbsp;-[2018&#8209;11][typed-objects-notes-2018-11]<br />&nbsp;-[2014&#8209;01][typed-objects-notes-2014-01]</sub> |
| [Object enumerables][object-enums]                                   | Leo Balter<br />John-David Dalton                          | Rejected                                                                                      | <sub>&nbsp;-[2016&#8209;07][object-enums-notes]</sub> |
| [Cancelable Promises][cancel-promise]                                | Domenic Denicola                                           | Withdrawn                                                                                     | <sub>&nbsp;-[2016&#8209;09][cancel-promise-notes-2016-09]<br />&nbsp;-[2016&#8209;07][cancel-promise-notes-2016-07]<br />&nbsp;-[2016&#8209;05][cancel-promise-notes-2016-05]</sub> |
| [Proposed Grammar change to ES Modules][module-unambig]              | Bradley Farias                                             | Rejected: No consensus on this specific solution.                                             | <sub>&nbsp;-[2017&#8209;01][module-unambig-notes]</sub> |
| [Dynamic Module Reform][dynamic-module-reform]                       | Caridy Patiño                                              | Withdrawn: we decided to preserve the current semantics                                       | <sub>&nbsp;-[2018&#8209;07][dynamic-module-reform-notes-2018-07]<br />&nbsp;-[2016&#8209;09][dynamic-module-reform-notes-2016-09]</sub> |
| [SIMD.JS - SIMD APIs][simd]                                          | Peter Jensen<br />Yehuda Katz                              | Stage 1: Start with SIMD in WASM; implementations not pursuing SIMD.js for now.              | <sub>&nbsp;-[2017&#8209;03][simd-notes]<br />&nbsp;-[2016&#8209;01][simd-notes-2016-01]<br />&nbsp;-[2015&#8209;09][simd-notes-2015-09]<br />&nbsp;-[2015&#8209;07][simd-notes-2015-07]<br />&nbsp;-[2015&#8209;05][simd-notes-2015-05]<br />&nbsp;-[2014&#8209;07][simd-notes-2014-07]</sub> |
| [Updates to Tail Calls to include an explicit syntactic opt-in][ptc] | Brian Terlson<br />Eric Faust                              | Inactive                                                                                      | <sub>&nbsp;-[2016&#8209;05][ptc-notes-2016-05]<br />&nbsp;-[2016&#8209;03][ptc-notes-2016-03-31]<br />&nbsp;-[2016&#8209;03][ptc-notes-2016-03-29]</sub> |
| [Object.shallowEqual][shallow-equal]                                 | Sebastian Markbage                                         | Withdrawn                                                                                     | <sub>&nbsp;-[2016&#8209;07][shallow-equal-notes]</sub> |
| [`%constructor%.construct`][construct]                               | James M Snell                                              | Never presented                                                                               | <sub>Never presented</sub> |
| [`Builtins.typeOf()` and `Builtins.is()`][is-types]                  | James M Snell                                              | Withdrawn: can be solved in other ways                                                        | <sub>&nbsp;-[2017&#8209;09][is-types-notes]</sub> |
| [Tagged Collection Literals][collection-literals]                    | Kat Marchán                                                | Withdrawn: pursuing `when new` syntax and other alternatives                                  | <sub>&nbsp;-[2018&#8209;05][collection-literals-notes]</sub> |
| [`Date.parse` fallback semantics][date-parse]                        | Morgan Phillips                                            | Inactive; likely replaced by [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse] | <sub>&nbsp;-[2016&#8209;07][date-parse-notes]</sub> |
| [Distinguishing literal strings][distinguishing-literal-strings]     | Mike West<br />Adam Klein                                  | Withdrawn: [Trusted Types](https://github.com/w3c/webappsec-trusted-types) no longer a dependent | <sub>&nbsp;-[2017&#8209;11][distinguishing-literal-strings-notes]</sub> |
| Annex B — HTML Attribute Event Handlers                              | Allen Wirfs-Brock                                          | Withdrawn per [PR comment](https://github.com/tc39/ecma262/issues/1595#issuecomment-509348434) | <sub>&nbsp;-&nbsp;[2019&nbsp;07](https://github.com/tc39/ecma262/issues/1595#issuecomment-509348434)</sub> |
| [Normative ICU Reference][icu]                                       | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        | <sub>&nbsp;-[2017&#8209;05][icu-notes]</sub> |
| [Zones][zones]                                                       | Domenic Denicola<br />Miško Hevery                         | Withdrawn; champion is no longer participating in TC39                                        | <sub>&nbsp;-[2016&#8209;03][zones-notes-2016-03]<br />&nbsp;-[2016&#8209;01][zones-notes-2016-01]</sub> |
| [Blöcks][blocks]                                                     | Domenic Denicola                                           | Withdrawn; champion is no longer participating in TC39                                        | <sub>&nbsp;-[2018&#8209;05][blocks-notes]</sub> |
| [RegExp Atomic Groups & Possessive Quantifiers][re-atomic-groups]    | Justin Ridgewell                                           | Never presented; engines are not interested in the feature, mainly because it doesn't solve backtracking for most users | <sub>&nbsp;-[2021&#8209;10][re-atomic-groups-notes]</sub> |
| [RefCollection][refcollection]                                       | Robin Ricard                                               | Withdrawn; replaced with [Symbols as WeakMap keys][symbols-weakmap]; also there were OCAP/membrane concerns around providing a globally available pre-instantiated RefCollection | <sub>&nbsp;-[2020&#8209;04][refcollection-notes]</sub> |
| [Generic Comparison][spaceship]                                      | Hemanth HM<br />Jordan Harband                             | Withdrawn: replaced with [Array Equality][array-equality] | <sub>&nbsp;-[2020&#8209;06][spaceship-notes]</sub> |
| [`from ... import`][fromimport]                                      | Bradley Farias                                             | Never presented; preliminary feedback about syntax cost not being worth the weight            | <sub>Never presented</sub> |
| [TypedArray stride parameter][typedarray-stride-parameter]           | Shu-yu Guo                                                 | Withdrawn: concern about performance implications, and the proposal is not expressive enough | <sub>&nbsp;-[2020&#8209;09][typedarray-stride-parameter-notes]<br />&nbsp;-[2020&#8209;03][typedarray-stride-parameter-notes-2020-03]</sub> |
| [Unused Function Parameters][unused-params]                          | Gus Caplan                                                 | Rejected: the need to solve the problem does not outweigh the hazards | <sub>&nbsp;-[2020&#8209;09][unused-params-notes]</sub> |
| [Improving iteration on Objects][object-iteration]                   | Jonathan Keslin                                            | Withdrawn: concern about need for such an API                                                 | <sub>&nbsp;-[2020&#8209;02][object-iteration-notes]</sub> |
| [`String.prototype.at`][string-at]                                   | Mathias Bynens<br />Rick Waldron                           | Obsoleted by renamed `String.prototype.item` proposal                                         | <sub>Never presented</sub> |
| [`ArrayBuffer.prototype.transfer`][buffer-transfer]                  | Domenic Denicola<br />Shu-yu Guo                           | Withdrawn: superseded by [Resizable Buffers][resizable-buffers]                               | <sub>&nbsp;-[2018&#8209;07][buffer-transfer-notes-2018-07]<br />&nbsp;-[2014&#8209;09][buffer-transfer-notes-2014-09]</sub> |
| [`deprecated`][deprecated]                                           | James M Snell                                              | Never presented                                                                               | <sub>Never presented</sub> |
| [Function helpers][function-helpers]                                 | J. S. Choi                                                 | Presented and rejected before Stage 1 on 2021-10; split up into multiple subsequent proposals | <sub>&nbsp;-[2021&#8209;10][function-helpers-notes]</sub> |
| [`"use module"`][modules-pragma]                                     | Dave Herman                                                | Inactive; champion does not wish to pursue                                                    | <sub>&nbsp;-[2017&#8209;07][modules-pragma-notes]</sub> |
| [Function.pipe and flow][pipe-flow]                                  | J.S. Choi                                                  | Withdrawn: rejected for stage 1                                                               | <sub>&nbsp;-[2022&#8209;07][pipe-flow-notes]</sub> |
| [`Symbol.thenable`][symbol-thenable]                                 | Gus Caplan<br />Jordan Harband<br />Myles Borins           | Withdrawn; changing thenability on Module Namespace objects is not web compatible, and allowing non-Promise use of "then" is not worth slowing down all Promise operations | <sub>&nbsp;-[2018&#8209;05][symbol-thenable-notes]</sub> |
| [WeakRefs `cleanupSome`][cleanup-some]                               | Yulia Startsev<br />Daniel Ehrenberg                       | Withdrawn; subsumed by WebAssembly JS Promise Integration, which avoids the long task issue | <sub>&nbsp;-[2020&#8209;07][cleanup-some-notes]</sub> |
| [Operator overloading][overloading]                                  | Daniel Ehrenberg                                           | Withdrawn | <sub>&nbsp;-[2023&#8209;11][overloading-notes-2023-11]<br />&nbsp;-[2019&#8209;12][overloading-notes]<br />&nbsp;-[2018&#8209;01][overloading-notes-2018-01]</sub> |
| [Extensible numeric literals][extensible-literals]                   | Daniel Ehrenberg                                           | Withdrawn | <sub>&nbsp;-[2020&#8209;09][extensible-literals-notes]</sub> |
| [JSON.tryParse][json-tryparse]                                       | Jack Works                                                 | Rejected; some deemed this too specific a solution for a generalized language-wide problem | <sub>&nbsp;-[2023&#8209;11][json-tryparse-notes]</sub> |
| [UUID][uuid]                                                         | Benjamin Coe                                               | Withdrawn; moved to `crypto.randomUUID()` in February 2023 | <sub>&nbsp;-[2019&#8209;12][uuid-notes-2019-12]<br />&nbsp;-[2019&#8209;10][uuid-notes]</sub> |
| [`Math` Extensions][more-math]                                       | Rick Waldron                                               | Withdrawn: no interested champions in February 2024 | <sub>&nbsp;-[2016&#8209;07][more-math-notes]</sub> |
| [Generator arrow functions][generator-arrow-functions]               | Sergey Rubanov<br />Brendan Eich                           | Withdrawn: no interested champions in February 2024 | <sub>&nbsp;-[2016&#8209;09][generator-arrow-functions-notes]</sub> |
| [`Math.signbit`: IEEE-754 sign bit][signbit]                         | JF Bastien                                                 | Withdrawn: no interested champions in February 2024 | <sub>&nbsp;-[2017&#8209;05][signbit-notes]</sub> |
| [Getting last element of Array][arraylast]                           | Keith Cirkel                                               | Withdrawn; the [Array#at](https://github.com/tc39/proposal-relative-indexing-method) proposal supersedes this work. | <sub>&nbsp;-[2018&#8209;03][arraylast-notes]</sub> |
| [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                   | Withdrawn; subsumed by [RegExp v flag with set notation + properties of strings][regexp-v-flag] proposal | <sub>&nbsp;-[2019&#8209;10][unicode-sequence-properties-notes]<br />&nbsp;-[2018&#8209;05][unicode-sequence-properties-notes-2018-05]</sub> |
| [Record & Tuple][record-tuple]                                                 | Robin Ricard<br />Richard Button                 | Withdrawn; subsumed by [Composites][composite]      | <sub>&nbsp;-[2025&#8209;04][record-tuple-notes-2025-04]<br />&nbsp;-[2025&#8209;02][record-tuple-notes-2025-02]<br />&nbsp;-[2022&#8209;11][record-tuple-notes-2022-11]<br />&nbsp;-[2022&#8209;09][record-tuple-notes-2022-09]<br />&nbsp;-[2022&#8209;07][record-tuple-notes-2022-07]<br />&nbsp;-[2021&#8209;12][record-tuple-notes-2021-12]<br />&nbsp;-[2021&#8209;10][record-tuple-notes-2021-10]<br />&nbsp;-[2021&#8209;03][record-tuple-notes-2021-03]<br />&nbsp;-[2020&#8209;09][record-tuple-notes-2020-09]<br />&nbsp;-[2020&#8209;07][record-tuple-notes-2020-07]<br />&nbsp;-[2020&#8209;06][record-tuple-notes-2020-06]<br />&nbsp;-[2020&#8209;03][record-tuple-notes-2020-03]<br />&nbsp;-[2019&#8209;10][record-tuple-notes]</sub> |
| [Time Zone Canonicalization][proposal-canonical-tz] | Justin Grant<br />Richard Gibson | Reached Stage 3 in July 2023, then was merged into [Temporal][temporal] | <sub>&nbsp;-[2023-07][time-zone-canon-notes-2023-07]<br>&nbsp;-[2023-05][time-zone-canon-notes-2023-05] &nbsp;-[2023-03][time-zone-canon-notes-2023-03]</sub>  |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.

[proposal-canonical-tz]: https://github.com/tc39/proposal-canonical-tz
[time-zone-canon-notes-2023-07]: https://github.com/tc39/notes/blob/main/meetings/2023-07/july-12.md#time-zone-canonicalization-for-stage-3
[time-zone-canon-notes-2023-05]: https://github.com/tc39/notes/blob/main/meetings/2023-05/may-17.md#time-zone-canonicalization-for-stage-2
[time-zone-canon-notes-2023-03]: https://github.com/tc39/notes/blob/main/meetings/2023-03/mar-23.md#time-zone-canonicalization-for-stage-1
[temporal]: https://github.com/tc39/proposal-temporal
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
[record-tuple]: https://github.com/tc39/proposal-record-tuple
[record-tuple-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-1.md#records--tuples-for-stage-1
[composite]: https://github.com/tc39/proposal-composites
[collection-json-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-31.md#mapprototypetojsonsetprototypetojson
[typed-objects-notes-2018-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-29.md#typed-objects-1000-am
[typed-objects-notes-2014-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-01/jan-29.md#typed-objects
[cancel-promise-notes-2016-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-29.md#11ivb-cancelable-promises
[cancel-promise-notes-2016-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-28.md#10ivb-cancelable-promises-update
[cancel-promise-notes-2016-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-05/may-25.md#cancelable-promises-dd
[simd-notes-2016-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-01/jan-26.md#5xi-daniel-presenting-simd-changes-since-december
[simd-notes-2015-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-09/sept-22.md#52-simdjs-stage-3-proposal
[simd-notes-2015-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-07/july-29.md#68-simdjs-start-the-process-to-move-towards-stage-3
[simd-notes-2015-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-05/may-27.md#simdjs-stage-2-pj-jm-presenting
[simd-notes-2014-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-07/jul-30.md#52-simdjs
[shallow-equal-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-28.md#10iiid-objectshallowequal
[is-types-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-28.md#14ia-builtinstypeof-and-builtinsis
[collection-literals-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-24.md#tagged-collection-literals-for-stage-1
[distinguishing-literal-strings-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-29.md#9ivc-distinguishing-literal-strings-proposal-for-stage-0
[zones-notes-2016-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-29.md#zones-update
[zones-notes-2016-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-01/jan-26.md#5i-zones
[blocks-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-24.md#blöcks-syntax-for-stage-0
[spaceship-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-4.md#generic-comparison
[typedarray-stride-parameter-notes-2020-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/march-31.md#typedarray-stride-parameter-for-stage-2
[buffer-transfer-notes-2018-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-24.md#arraybufferprototypetransfer
[buffer-transfer-notes-2014-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-09/sept-23.md#53-arraybuffertransfer
[function-helpers-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-28.md#function-helpers
[overloading-notes-2023-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-11/november-28.md#withdrawing-operator-overloading
[overloading-notes-2018-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-24.md#13vd-operator-overloading-for-stage-1
[json-tryparse-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-11/november-29.md#jsontryparse
[uuid-notes-2019-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-4.md#uuid-updates
[arraylast-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-03/mar-20.md#10ic-getting-last-item-of-array-for-stage-2
[unicode-sequence-properties-notes-2018-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-22.md#11ia-sequence-properties-in-unicode-property-escapes
[record-tuple-notes-2025-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-14.md#withdrawing-records--tuples
[record-tuple-notes-2025-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-19.md#records-and-tuples-future-directions
[record-tuple-notes-2022-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/nov-30.md#records-and-tuples
[record-tuple-notes-2022-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-09/sep-13.md#record-and-tuple-update
[record-tuple-notes-2022-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-19.md#record--tuple-update
[record-tuple-notes-2021-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md#records-and-tuples
[record-tuple-notes-2021-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-28.md#records--tuples-update
[record-tuple-notes-2021-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-03/mar-9.md#records-and-tuples-update
[record-tuple-notes-2020-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-22.md#records--tuples
[record-tuple-notes-2020-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-22.md#record-and-tuple-for-stage-2
[record-tuple-notes-2020-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-1.md#record--tuple-status-update
[record-tuple-notes-2020-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/april-1.md#record-and-tuple-update
[callable-constructors-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-01/jan-28.md#progress-review-callable-class-constructors-allen
[module-unambig-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-25.md#13iia-proposed-grammar-change-to-es-modules
[dynamic-module-reform-notes-2018-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-25.md#dynamic-modules
[dynamic-module-reform-notes-2016-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-28.md#es-modules-lifecycle
[ptc-notes-2016-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-05/may-24.md#syntactic-tail-calls-bt
[ptc-notes-2016-03-31]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-31.md#tail-calls
[ptc-notes-2016-03-29]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-03/march-29.md#tco
[date-parse-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-27.md#9ig-dateparse-fallback-semantics
[icu-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-23.md#normative-icu-reference
[re-atomic-groups-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-28.md#regexp-atomic-operations
[object-iteration-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-5.md#object-iteration-for-stage-2
[refcollection-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/april-1.md#record-and-tuple-update
[object-enums-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-26.md#9iib-objectenumerablekeysvaluesentries
