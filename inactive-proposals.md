# Inactive Proposals

Inactive proposals are proposals that at one point were presented to the committee but were subsequently abandoned, withdrawn, or rejected.

| Proposal                                                             | Champion                                                   | Rationale                                                                                     |
| -------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`RegExp.escape`][escape]                                            | Domenic Denicola, Benjamin Gruenbaum                       | [Rejected][escape-notes]: in favor of exploring a template tag function solution              |
| [Callable class constructors][callable-constructors]                 | Yehuda Katz and Allen Wirfs-Brock                          | Withdrawn: can be solved with decorators                                                      |
| [`Error.isError`][is-error]                                          | Jordan Harband                                             | Withdrawn: in favor of [`Error` stack traces][error-stacks] proposal                          |
| [`{Set,Map}.prototype.toJSON`][collection-json]                      | David Bruant and Jordan Harband                            | Rejected: better solved by a custom replacer function.                                        |
| [Typed Objects][typed-objects]                                       | Till Schneidereit (previously Dmitry Lomov, Niko Matsakis) | Postponed: waiting for WebAssembly requirements to become clearer                             |
| [Object enumerables][object-enums]                                   | Leo Balter & John-David Dalton                             | Rejected                                                                                      |
| [Cancelable Promises][cancel-promise]                                | Domenic Denicola                                           | Withdrawn                                                                                     |
| [Proposed Grammar change to ES Modules][module-unambig]              | Bradley Farias                                             | Rejected: No consensus on this specific solution.                                             |
| [Dynamic Module Reform][dynamic-module-reform]                       | Caridy Patiño                                              | Withdrawn: we decided to preserve the current semantics                                       |
| [SIMD.JS - SIMD APIs][simd]                                          | Peter Jensen, Yehuda Katz                                  | [Stage 1][simd-notes]: Start with SIMD in WASM; implementations not pursuing SIMD.js for now. |
| [Updates to Tail Calls to include an explicit syntactic opt-in][ptc] | Brian Terlson & Eric Faust                                 | Inactive                                                                                      |
| [Object.shallowEqual][shallow-equal]                                 | Sebastian Markbage                                         | Withdrawn                                                                                     |
| [`%constructor%.construct`][construct]                               | James M Snell                                              | Withdrawn                                                                                     |
| [`Builtins.typeOf()` and `Builtins.is()`][is-types]                  | James M Snell                                              | Withdrawn: can be solved in other ways                                                        |
| [Tagged Collection Literals][collection-literals]                    | Kat Marchán                                                | Withdrawn: pursuing `when new` syntax and other alternatives                                  |
| [`Date.parse` fallback semantics][date-parse]                        | Morgan Phillips                                            | Inactive; likely replaced by [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse] |
| [Distinguishing literal strings][distinguishing-literal-strings]     | Mike West & Adam Klein                                     | Withdrawn: [Trusted Types](https://github.com/WICG/trusted-types) no longer a dependent |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [stage 0 proposals](stage-0-proposals.md), and [finished proposals](finished-proposals.md) documents.

[distinguishing-literal-strings]: https://github.com/mikewest/tc39-proposal-literals
[escape]: https://github.com/benjamingr/RegExp.escape
[escape-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#62-regexpescape
[callable-constructors]: https://github.com/tc39/ecma262/blob/master/workingdocs/callconstructor.md
[is-error]: https://github.com/ljharb/proposal-is-error
[collection-json]: https://github.com/DavidBruant/Map-Set.prototype.toJSON
[typed-objects]: https://github.com/dslomov/typed-objects-es7
[object-enums]: https://github.com/leobalter/object-enumerables
[cancel-promise]: https://github.com/tc39/proposal-cancelable-promises
[module-unambig]: https://github.com/bmeck/UnambiguousJavaScriptGrammar
[dynamic-module-reform]: https://github.com/caridy/proposal-dynamic-modules
[simd]: https://github.com/tc39/ecmascript_simd/
[simd-notes]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2017-03/mar-21.md#conclusionresolution-10
[ptc]: https://github.com/tc39/proposal-ptc-syntax
[shallow-equal]: https://github.com/sebmarkbage/ecmascript-shallow-equal
[construct]: https://github.com/jasnell/proposal-construct
[is-types]: https://github.com/jasnell/proposal-istypes
[error-stacks]: https://github.com/ljharb/proposal-error-stacks
[collection-literals]: https://github.com/zkat/proposal-collection-literals
[date-parse]: https://github.com/tc39-transfer/proposal-date-time-string-format
[uniform-date-parse]: https://github.com/gibson042/ecma262-proposal-uniform-interchange-date-parsing
