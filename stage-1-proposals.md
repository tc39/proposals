# Stage 1 Proposals

Stage 1 proposals represent problems that the committee is interested in spending time exploring solutions to.

Proposals follow [this process document](https://tc39.es/process-document/).

| Proposal                                                                                     | Author                                                | Champion                                               | <sub>Last Presented</sub>                                         |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      | <sub>[July&nbsp;2017][export-from-notes]</sub>                    |
| [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          | <sub>[May&nbsp;2017][observable-notes]</sub>                      |
| [SES (Secure EcmaScript)][secure-ecmascript]                                                 | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   | <sub>[February&nbsp;2020][secure-ecmascript-notes]</sub>          |
| [`Math` Extensions][more-math]                                                               | Rick Waldron                                          | Rick Waldron                                           | <sub>[July&nbsp;2016][more-math-notes]</sub>                      |
| [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             | <sub>[September&nbsp;2016][collection-of-from-notes]</sub>        |
| [Generator arrow functions][generator-arrow-functions]                                       | Sergey Rubanov                                        | Brendan Eich                                           | <sub>[September&nbsp;2016][generator-arrow-functions-notes]</sub> |
| [`Promise.try`][try]                                                                         | Jordan Harband                                        | Jordan Harband                                         | <sub>[November&nbsp;2016][try-notes]</sub>                        |
| [`Math.signbit`: IEEE-754 sign bit][signbit]                                                 | JF Bastien                                            | JF Bastien                                             | <sub>[May&nbsp;2017][signbit-notes]</sub>                         |
| [Error stacks][stacks]                                                                       | Jordan Harband                                        | Jordan Harband                                         | <sub>[January&nbsp;2017][stacks-notes]</sub>                      |
| [`do` expressions][do]                                                                       | Dave Herman                                           | Kevin Gibbons                                          | <sub>[June&nbsp;2020][do-notes]</sub>                             |
| [Float16 on TypedArrays, DataView, `Math.hfround`][float16s]                                 | Leo Balter                                            | Leo Balter                                             | <sub>[May&nbsp;2017][float16s-notes]</sub>                        |
| Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           | <sub>[July&nbsp;2017][parseInt-to-parseFloat]</sub>               |
| [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>[May&nbsp;2018][binary-ast-notes]</sub>                      |
| [Pipeline Operator][pipeline]                                                                | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[March&nbsp;2018][pipeline-notes]</sub>                      |
| [Extensible numeric literals][extensible-literals]                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2020][extensible-literals-notes]             |
| [First-class protocols][protocols]                                                           | Michael Ficarra                                       | Michael Ficarra                                        | <sub>[July&nbsp;2018][protocols-notes]</sub>                      |
| [Partial application][partial-application]                                                   | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][partial-application-notes]</sub>            |
| [Cancellation API][cancel-api]                                                               | Ron Buckton                                           | Ron Buckton<br />Brian Terlson                         | <sub>[July&nbsp;2018][cancel-api-notes]</sub>                     |
| [`String.prototype.codePoints`][codepoints]                                                  | Ingvar Stepanyan                                      | Mathias Bynens                                         | <sub>[May&nbsp;2018][codepoints-notes]</sub>                      |
| [`Object.freeze` + `Object.seal` syntax][freeze-seal-syntax]                                 | Keith Cirkel                                          | Keith Cirkel                                           | <sub>[November&nbsp;2017][freeze-seal-syntax]</sub>               |
| [Block Params][block-params]                                                                 | Sam Goto                                              | Sam Goto                                               | <sub>[November&nbsp;2017][block-params-notes]</sub>               |
| [`{BigInt,Number}.fromString`][from-string]                                                  | Mathias Bynens                                        | Mathias Bynens                                         | <sub>[January&nbsp;2018][from-string-notes]</sub>                 |
| [`Math.seededRandoms()`][seeded-randoms]                                                     | Tab Atkins                                            | Tab Atkins                                             | <sub>[January&nbsp;2018][seeded-randoms-notes]</sub>              |
| [Maximally minimal mixins][mixins]                                                           | Justin Fagnani                                        | Justin Fagnani                                         | <sub>[January&nbsp;2018][mixins-notes]</sub>                      |
| [Getting last element of Array][arraylast]                                                   | Keith Cirkel                                          | Keith Cirkel                                           | <sub>[January&nbsp;2018][arraylast-notes]</sub>                   |
| [Collection methods][collection-methods]                                                     | Michał Wadas                                          | Sathya Gunasekaran                                     | <sub>[January&nbsp;2018][collection-methods-notes] </sub>         |
| [Richer Keys][richer-keys]                                                                   | Bradley Farias                                        | Bradley Farias                                         | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                 |
| [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     | <sub>[July&nbsp;2020][slice-notation-notes]</sub>                 |
| [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>[May&nbsp;2018][module-keys-notes]</sub>                     |
| [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>[September&nbsp;2020][class-access-expressions-notes]</sub>  |
| [Pattern Matching][matching]                                                                 | Kat Marchán<br />Brian Terlson                        | Jordan Harband                                         | <sub>[March&nbsp;2020][matching-notes]</sub>                      |
| [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[July&nbsp;2018][dynamic-modules-notes]</sub>                |
| [Built In Modules (aka JS Standard Library)][built-in-modules]                               | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink<br />Mark Miller   | <sub>[September&nbsp;2020][built-in-modules-notes]</sub>          |
| [`"use module"`][modules-pragma]                                                             | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2017][modules-pragma-notes]</sub>                 |
| [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][uniform-date-parse-notes]</sub>        |
| [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2018][idl-notes]</sub>                       |
| [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>[November&nbsp;2018][asset-references-notes]</sub>           |
| [Freezing prototypes][freeze-proto]                                                          | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[January&nbsp;2019][freeze-proto-notes]</sub>                |
| [`new.initialize`][new.initialize]                                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][new.initialize-notes]</sub>              |
| [Private declarations][private-declarations]                                                 | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[March&nbsp;2019][private-declarations-notes]</sub>          |
| [Emitter][emitter]                                                                           | Shu-yu Guo<br />Pedram Emrouznejad                    | Shu-yu Guo<br />Pedram Emrouznejad                     | <sub>[June&nbsp;2019][emitter-notes]</sub>                        |
| [Dynamic Code Brand Checks][dynamic-code-brand-checks]                                       | Mike Samuel, Krzysztof Kotowicz                       | Krzysztof Kotowicz                                     | <sub>[December&nbsp;2019][dynamic-code-brand-checks-notes]</sub>  |
| [Reverse iteration][reverse-iteration]                                                       | Leo Balter<br />Jordan Harband                        | Leo Balter<br />Jordan Harband                         | <sub>[July&nbsp;2019][reverse-iteration-notes]</sub>              |
| [Declarations in Conditionals][declarations-in-conditionals]                                 | Devin Rousso                                          | Devin Rousso                                           | <sub>[October&nbsp;2019][declarations-in-conditionals-notes]</sub> |
| [UUID][uuid]                                                                                | Benjamin Coe<br />Robert Kieffer <br />Christoph Tavan | Benjamin Coe                                           | <sub>[October&nbsp;2019][uuid-notes]</sub>                        |
| [Readonly Collections][readonly-collections]                                                 | Mark Miller<br />Peter Hoddie                         | Mark Miller<br />Peter Hoddie                          | <sub>[October&nbsp;2019][readonly-collections-notes]</sub>        |
| [Support for Distributed Promise Pipelining][eventual-send]                                  | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>[October&nbsp;2019][eventual-send-notes]</sub>               |
| [Wavy Dot: Syntactic Support for Promise Pipelining][promise-pipelining]                     | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>[December&nbsp;2019][promise-pipelining-notes]</sub>         |
| [OOM Fails Fast][oom]                                                                        | Mark Miller                                           | Mark Miller                                            | <sub>[December&nbsp;2019][oom-notes]</sub>                        |
| [Array filtering][array-filtering]                                                           | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[February&nbsp;2020][array-filtering-notes]</sub>            |
| [Operator overloading][overloading]                                                          | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[December&nbsp;2019][overloading-notes]</sub>                |
| [Async initialization][async-init]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[February&nbsp;2020][async-init-notes]</sub>                 |
| [Decimal][decimal]                                                                           | Daniel Ehrenberg<br />Andrew Paprocki                 | Daniel Ehrenberg<br />Andrew Paprocki                  | <sub>[March&nbsp;2020][decimal-notes]</sub>                       |
| [Preserve Host Virtualizability][virtualize]                    | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | <sub>[February&nbsp;2020][virtualize-notes]</sub> |
| [Legacy reflection features for functions in JavaScript][legacy-reflection]                  | Mark Miller<br />Claude Pache<br />Jack Works         | Mark Miller<br />Claude Pache<br />Jack Works          | <sub>[February&nbsp;2020][legacy-reflection-notes]</sub>          |
| [Cryptographically Secure Random Number Generation][csprng]                                  | Ron Buckton                                           | Ron Buckton                                            | <sub>[February&nbsp;2020][csprng-notes]</sub>                     |
| [Number.range & BigInt.range][number-bigint-range]                                           | Jack Works                                             | Jack Works                                             | <sub>[July&nbsp;2020][number-bigint-range-notes]</sub>           |
| [Compartments][proposal-compartments]                                                        | Bradley Farias                                        | Bradley Farias<br />Mark S. Miller<br />Caridy Patiño<br />J.F. Paradis<br />Patrick Soquet<br />Kris Kowal | <sub>[March&nbsp;2020][proposal-compartments-notes]</sub> |
| [Symbols as WeakMap keys][symbols-weakmap]                                                   | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard | Daniel Ehrenberg<br />Richard Button<br />Robin Ricard | <sub>[July&nbsp;2020][symbols-weakmap-notes]</sub>               |
| [Deep Path Properties in Record Literals][deep-path-properties]                              | Rick Button                                           | Rick Button                                             | <sub>[June&nbsp;2020][deep-path-properties-notes]</sub>          |
| [Restrict subclassing support in built-in methods][species-extinct]                          | Yulia Startsev<br />Shu-yu Guo                        | Yulia Startsev<br />Shu-yu Guo                          | <sub>[June&nbsp;2020][species-extinct-notes]</sub>               |
| [Array Equality][array-equality]                                                             | Hemanth HM<br />Jordan Harband                        | Hemanth HM<br />Jordan Harband                          | <sub>[June&nbsp;2020][array-equality-notes]</sub>                |
| [await operations][await.ops]                                                                | Jack Works                                             | Jack Works<br />Jordan Harband                         | <sub>[July&nbsp;2020][await.ops-notes]</sub>                     |
| [`Array.prototype.unique()`][array-unique]                                                   | [TechQuery](https://github.com/TechQuery)              | Jack Works                                             | <sub>[July&nbsp;2020][array-unique-notes]</sub>                  |
| [String.dedent][string.dedent]                                                               | Misha Kaletsky<br />Hemanth HM<br />Justin Ridgewell   | Hemanth HM<br />Justin Ridgewell                       | <sub>[September&nbsp;2020][string.dedent-notes]</sub>            |
| [Double-Ended Iterator and Destructuring][double-ended-iterator]                             | HE Shi-Jun                                             | HE Shi-Jun                                             | <sub>[September&nbsp;2020][double-ended-iterator-notes]</sub>    |
| [Standardized Debug][debug]                                                                  | Gus Caplan                                             | Gus Caplan                                             | <sub>[November&nbsp;2020][debug-notes]</sub>            _        |
| [Modulus and Additional Integer Math][modulus]                                               | Peter Hoddie                                           | Peter Hoddie                                           | <sub>[September&nbsp;2020][modulus-notes]</sub>                  |
| [Extensions][extensions]                                                                     | HE Shi-Jun                                             | HE Shi-Jun                                             | <sub>[November&nbsp;2020][extensions-notes]</sub>                |
| [Grouped Accessors and Auto-Accessors][accessors]                                            | Ron Buckton                                            | Ron Buckton                                            | <sub>[November&nbsp;2020][accessors-notes]</sub>                 |
| [`async do` expressions][async-do]                                                           | Kevin Gibbons                                          | Kevin Gibbons                                          | <sub>January&nbsp;2021</sub>                                      |
| [Class Brand Checks][class-brand-check]                                                      | HE Shi-Jun                                             | HE Shi-Jun                                             | <sub>January&nbsp;2021</sub>                                      |
| [Adopting Unicode behavior for set notation in regular expressions][regex-set-notation]      | Markus Scherer<br />Mathias Bynens                     | Mathias Bynens                                   | <sub>January&nbsp;2021</sub>                                      |
| [Escaping Strings for RegExps][escape]                                                       | Domenic Denicola<br />Benjamin Gruenbaum<br />Jordan Harband | Jordan Harband                                   | <sub>January&nbsp;2021</sub>                                      |
| [Array find from last][find-last]                                                            | Wenlu Wang                                             | Wenlu Wang                                             | <sub>January&nbsp;2021</sub>                                      |
| [defer module import eval][lazy-import]                                                      | Yulia Startsev                                         | Yulia Startsev                                         | <sub>January&nbsp;2021</sub>                                      |


See also the [active proposals](README.md), [stage 0 proposals](stage-0-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.


[export-from]: https://github.com/tc39/proposal-export-default-from
[export-from-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-07/jul-27.md#export-default-from
[observable]: https://github.com/tc39/proposal-observable
[observable-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-25.md#17iiia-observable-proposal-to-stage-2
[secure-ecmascript]: https://github.com/tc39/proposal-ses
[secure-ecmascript-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-6.md#ses-compartments
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[more-math-notes]: https://github.com/tc39/notes/blob/master/meetings/2016-07/jul-26.md#9iie-math-extensions
[collection-of-from]: https://github.com/tc39/proposal-setmap-offrom
[collection-of-from-notes]: https://github.com/tc39/notes/blob/master/meetings/2016-09/sept-29.md#11iic-set-map-weakset-and-weakmap-of-and-from-methods
[generator-arrow-functions]: https://github.com/tc39/proposal-generator-arrow-functions
[generator-arrow-functions-notes]: https://github.com/tc39/notes/blob/master/meetings/2016-09/sept-27.md#11ic-generator-arrow-functions
[try]: https://github.com/tc39/proposal-promise-try
[try-notes]: https://github.com/tc39/notes/blob/master/meetings/2016-11/nov-29.md#11iib-promisetry
[signbit]: https://github.com/tc39/proposal-Math.signbit
[signbit-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-23.md#16ib-mathsignbit-proposal
[stacks]: https://github.com/tc39/proposal-error-stacks
[stacks-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-01/jan-25.md#15iiia-error-stacks-seeking-stage-1
[do]: https://github.com/tc39/proposal-do-expressions
[do-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-1.md#do-expressions-for-stage-2
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[float16s-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-23.md#16ig-float16-on-typedarrays-dataview-mathhfround-for-stage-1
[parseInt-to-parseFloat]: https://github.com/tc39/notes/blob/master/meetings/2017-07/jul-26.md#13iib-consider-changing-numberparseint-and-numberparsefloat
[binary-ast]: https://github.com/tc39/proposal-binary-ast
[binary-ast-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-05/may-24.md#binary-ast
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[pipeline-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-03/mar-22.md#10ive-pipeline-operator
[extensible-literals]: https://github.com/tc39/proposal-extended-numeric-literals
[extensible-literals-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-21.md#numeric-literal-suffixes-update-separate-namespace-version
[protocols]: https://github.com/tc39/proposal-first-class-protocols
[protocols-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-25.md#updates-on-first-class-protocols
[partial-application]: https://github.com/tc39/proposal-partial-application
[partial-application-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-25.md#partial-application
[cancel-api]: https://github.com/tc39/proposal-cancellation
[cancel-api-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-25.md#cancellation-update
[codepoints]: https://github.com/tc39/proposal-string-prototype-codepoints
[codepoints-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-05/may-22.md#stringprototypecodepoints-for-stage-2
[freeze-seal-syntax]: https://github.com/keithamus/proposal-object-freeze-seal-syntax
[freeze-seal-syntax-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-11/nov-30.md#10ivd-objectfreeze--objectseal-syntax-proposal-for-stage-0
[block-params]: https://github.com/samuelgoto/proposal-block-params
[block-params-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-11/nov-30.md#9iiia-block-params-to-stage-1
[from-string]: https://github.com/tc39/proposal-number-fromstring
[from-string-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-23.md#13iic-bigintnumberfromstring-for-stage-1
[seeded-randoms]: https://github.com/tc39/proposal-seeded-random
[seeded-randoms-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-23.md#13iif-mathseededrandoms-for-stage-1
[mixins]: https://github.com/justinfagnani/proposal-mixins
[mixins-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-23.md#13iiie-maximally-minimal-mixins-proposal
[arraylast]: https://github.com/tc39/proposal-array-last
[arraylast-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-24.md#13iiim-getting-last-item-from-array-for-stage-2
[collection-methods]: https://github.com/tc39/proposal-collection-methods
[collection-methods-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-23.md#13iiik-new-set-builtin-methods-for-stage-2
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[slice-notation]: https://github.com/tc39/proposal-slice-notation
[slice-notation-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-21.md#slice-notation-for-stage-2
[module-keys]: https://github.com/tc39/proposal-module-keys
[module-keys-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-05/may-23.md#module-keys-strawman-for-stage-1
[class-access-expressions]: https://github.com/tc39/proposal-class-access-expressions
[class-access-expressions-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-22.md#class-access-expressions-for-stage-2
[matching]: https://github.com/tc39/proposal-pattern-matching
[matching-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/march-31.md#pattern-matching-update
[dynamic-modules]: https://github.com/nodejs/dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-25.md#dynamic-modules
[built-in-modules]: https://github.com/tc39/proposal-built-in-modules
[built-in-modules-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-24.md#builtin-modules-for-stage-2
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[modules-pragma-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-07/jul-26.md#9ivb-modulescript-pragma-for-stage-2
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[idl]: https://github.com/tc39/proposal-idl
[idl-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-09/sept-27.md#idl-for-javascript
[asset-references]: https://github.com/tc39/proposal-asset-references
[asset-references-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-11/nov-28.md#asset-references-for-stage-1
[freeze-proto]: https://github.com/tc39/proposal-freeze-prototype
[freeze-proto-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-31.md#freezing-prototypes-for-stage-1
[new.initialize]: https://github.com/littledan/proposal-new-initialize
[new.initialize-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-31.md#newinitialize-for-stage-1
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[private-declarations-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-03/mar-28.md#private-declarations-for-stage-1
[emitter]: https://github.com/tc39/proposal-emitter
[emitter-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-06/june-5.md#emitter-for-stage-1
[dynamic-code-brand-checks]: https://github.com/tc39/proposal-dynamic-code-brand-checks
[dynamic-code-brand-checks-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#dynamic-code-brand-checks-for-stage-2
[reverse-iteration]: https://github.com/tc39/proposal-reverseIterator
[reverse-iteration-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-07/july-23.md#symbolreverse
[declarations-in-conditionals]: https://github.com/tc39/proposal-Declarations-in-Conditionals
[declarations-in-conditionals-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-2.md#declarations-in-conditionals
[uuid]: https://github.com/tc39/proposal-uuid
[uuid-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-3.md#uuid-for-stage-1
[readonly-collections]: https://github.com/tc39/proposal-readonly-collections
[readonly-collections-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-3.md#readonly-collections-for-stage-1
[eventual-send]: https://github.com/tc39/proposal-eventual-send
[eventual-send-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-3.md#eventual-send-support-for-distributed-promise-pipelining
[promise-pipelining]: https://github.com/tc39/proposal-wavy-dot
[promise-pipelining-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#update-on-promise-pipelining
[oom]: https://github.com/tc39/proposal-oom-fails-fast
[oom-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#update-on-oom-must-fail-fast
[array-filtering]: https://github.com/tc39/proposal-array-filtering
[array-filtering-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#status-update-on-array-filtering
[overloading]: https://github.com/tc39/proposal-operator-overloading
[overloading-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#operator-overloading-for-stage-1
[decimal]: https://github.com/tc39/proposal-decimal
[decimal-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/march-31.md#decimal-update
[virtualize]: https://github.com/Agoric/proposal-preserve-virtualizability
[virtualize-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-4.md#preserve-host-virtualizability
[legacy-reflection]: https://github.com/claudepache/es-legacy-function-reflection
[legacy-reflection-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#legacy-reflection-features-for-functions-in-javascript-for-stage-1
[async-init]: https://docs.google.com/presentation/d/1DsjZAzBjn2gCrr4l0uZzCymPIWZTKM8KzcnMBF31HAg/edit#slide=id.g7d23d45064_0_196
[async-init-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-4.md#async-initialization-for-stage-1
[csprng]: https://github.com/tc39/proposal-csprng
[csprng-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#arraybufferfillrandom-for-stage-1
[number-bigint-range]: https://github.com/tc39/proposal-Number.range
[number-bigint-range-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#numberrange-for-stage-2
[proposal-compartments]: https://github.com/tc39/proposal-compartments
[proposal-compartments-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/april-1.md#compartments-for-stage-1
[symbols-weakmap]: https://github.com/tc39/proposal-symbols-as-weakmap-keys
[symbols-weakmap-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#symbols-as-weakmap-keys-for-stage-2
[deep-path-properties]: https://github.com/tc39/proposal-deep-path-properties-for-record
[deep-path-properties-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-3.md#deep-path-properties
[species-extinct]: https://github.com/tc39/proposal-rm-builtin-subclassing
[species-extinct-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-3.md#restrict-subclassing-support-for-built-in-methods-stage-1
[array-equality]: https://github.com/tc39/proposal-array-equality
[array-equality-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-4.md#generic-comparison
[await.ops]: https://github.com/tc39/proposal-await.ops
[await.ops-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#await-operations-for-stage-1
[array-unique]: https://github.com/tc39/proposal-array-unique
[array-unique-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-07/july-22.md#arrayprototypeunique-proposal-for-stage-1
[string.dedent]: https://github.com/tc39/proposal-string-dedent
[string.dedent-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-23.md#stringdedent-for-stage-1
[double-ended-iterator]: https://github.com/tc39/proposal-deiter
[double-ended-iterator-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-24.md#double-ended-iterator-and-destructuring-for-stage-1
[debug]: https://github.com/tc39/proposal-standardized-debug
[debug-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-17.md#standardized-debug-for-stage-2
[modulus]: https://github.com/phoddie/integer-and-modulus-math-proposal
[modulus-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-24.md#modulus-and-additional-integer-math-for-stage-1
[extensions]: https://github.com/tc39/proposal-extensions
[extensions-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-19.md#extensions-for-stage-1
[accessors]: https://github.com/rbuckton/proposal-grouped-and-auto-accessors
[accessors-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-19.md#continuation-grouped-accessors-and-auto-accessors
[async-do]: https://github.com/tc39/proposal-async-do-expressions
[class-brand-check]: https://github.com/tc39/proposal-class-brand-check
[regex-set-notation]: https://github.com/tc39/proposal-regexp-set-notation
[escape]: https://github.com/tc39/proposal-regex-escaping
[escape-notes]: https://github.com/tc39/notes/blob/master/meetings/2015-07/july-28.md#62-regexpescape
[find-last]: https://github.com/tc39/proposal-array-find-from-last
[lazy-import]: https://github.com/tc39/proposal-defer-import-eval
