# Stage 1 Proposals

Stage 1 proposals represent problems that the committee is interested in spending time exploring solutions to.

Proposals follow [this process document](https://tc39.github.io/process-document/).

| Proposal                                                                                     | Author                                                | Champion                                               | <sub>Last Presented</sub>                                         |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      | <sub>[July&nbsp;2017][export-from-notes]</sub>                    |
| [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          | <sub>[May&nbsp;2017][observable-notes]</sub>                      |
| [Frozen Realms][frozen-realms]                                                               | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   | <sub>[March&nbsp;2018][frozen-realms-notes]</sub>                 |
| [`Math` Extensions][more-math]                                                               | Rick Waldron                                          | Rick Waldron                                           | <sub>[July&nbsp;2016][more-math-notes]</sub>                      |
| [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             | <sub>[September&nbsp;2016][collection-of-from-notes]</sub>        |
| Generator arrow functions (`=>*`)                                                            |                                                       | Brendan Eich<br />Domenic Denicola                     | <sub>[September&nbsp;2016][generator-arrow-functions-notes]</sub> |
| [`Promise.try`][try]                                                                         | Jordan Harband                                        | Jordan Harband                                         | <sub>[November&nbsp;2016][try-notes]</sub>                        |
| [`Math.signbit`: IEEE-754 sign bit][signbit]                                                 | JF Bastien                                            | JF Bastien                                             | <sub>[May&nbsp;2017][signbit-notes]</sub>                         |
| [Error stacks][stacks]                                                                       | Jordan Harband                                        | Jordan Harband                                         | <sub>[January&nbsp;2017][stacks-notes]</sub>                      |
| [`do` expressions][do]                                                                       | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2018][do-notes]</sub>                             |
| [Float16 on TypedArrays, DataView, `Math.hfround`][float16s]                                 | Leo Balter                                            | Leo Balter                                             | <sub>[May&nbsp;2017][float16s-notes]</sub>                        |
| Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           | <sub>[July&nbsp;2017][parseInt-to-parseFloat]</sub>               |
| [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>[May&nbsp;2018][binary-ast-notes]</sub>                      |
| [Pipeline Operator][pipeline]                                                                | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[March&nbsp;2018][pipeline-notes]</sub>                      |
| [Extensible numeric literals][extensible-literals]                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][extensible-literals-notes]               |
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
| [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     | <sub>[March&nbsp;2018][slice-notation-notes]</sub>                |
| [Logical Assignment Operators][logical-assignment]                                           | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[March&nbsp;2018][logical-assignment-notes]</sub>            |
| [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>[May&nbsp;2018][module-keys-notes]</sub>                     |
| [Class Static Block][static-blocks]                                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][static-blocks-notes]</sub>                   |
| [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>[May&nbsp;2018][class-access-expressions-notes]</sub>        |
| [Pattern Matching][matching]                                                                 | Kat Marchán<br />Brian Terlson                        | Kat Marchán<br />Brian Terlson<br />Sebastian Markbåge | <sub>[May&nbsp;2018][matching-notes]</sub>                        |
| [Explicit Resource Management][resource-management]                                          | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][resource-management-notes]</sub>            |
| [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[July&nbsp;2018][dynamic-modules-notes]</sub>                |
| [JavaScript Standard Library][standard-library]                                              | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink                    | <sub>[July&nbsp;2018][standard-library-notes]</sub>               |
| [`"use module"`][modules-pragma]                                                             | Dave Herman                                           | Dave Herman                                            | <sub>[July&nbsp;2017][modules-pragma-notes]</sub>                 |
| [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][uniform-date-parse-notes]</sub>        |
| [JSON.parse source text access][json-parse-source]                                           | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][json-parse-source-notes]</sub>         |
| [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2018][idl-notes]</sub>                       |
| [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>[November&nbsp;2018][asset-references-notes]</sub>           |
| [Freezing prototypes][freeze-proto]                                                          | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[January&nbsp;2019][freeze-proto-notes]</sub>                |
| [`new.initialize`][new.initialize]                                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][new.initialize-notes]</sub>              |
| [Iterator helpers][iterator-helpers]                                                         | Gus Caplan                                            | Domenic Denicola                                       | <sub>[January&nbsp;2019][iterator-helpers-notes]</sub>            |
| [`Promise.any`][promise-any]                                                                 | Mathias Bynens<br />Kevin Gibbons<br />Sergey Rubanov | Mathias Bynens                                         | <sub>[March&nbsp;2019][promise-any-notes]</sub>                   |
| [Private declarations][private-declarations]                                                 | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[March&nbsp;2019][private-declarations-notes]</sub>          |
| [Emitter][emitter]                                                                           | Shu-yu Guo<br />Pedram Emrouznejad                    | Shu-yu Guo<br />Pedram Emrouznejad                     | <sub>June&nbsp;2019</sub>                                         |
| [dynamic-code-brand-checks][]                                                                | Mike Samuel                                           | Mike Samuel                                            | <sub>June&nbsp;2019</sub>                                         |

See also the [active proposals](README.md), [stage 0 proposals](stage-0-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.


[export-from]: https://github.com/tc39/proposal-export-default-from
[export-from-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-07/jul-27.md#export-default-from
[observable]: https://github.com/tc39/proposal-observable
[observable-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-25.md#17iiia-observable-proposal-to-stage-2
[frozen-realms]: https://github.com/tc39/proposal-frozen-realms
[frozen-realms-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-20.md#10ia-update-on-frozen-realms-in-light-of-meltdown-and-spectre
[more-math]: https://github.com/rwaldron/proposal-math-extensions
[more-math-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-07/jul-26.md#9iie-math-extensions
[collection-of-from]: https://github.com/leobalter/proposal-setmap-offrom
[collection-of-from-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-09/sept-29.md#11iic-set-map-weakset-and-weakmap-of-and-from-methods
[generator-arrow-functions-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-09/sept-27.md#11ic-generator-arrow-functions
[try]: https://github.com/tc39/proposal-promise-try
[try-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-11/nov-29.md#11iib-promisetry
[signbit]: http://jfbastien.github.io/papers/Math.signbit.html
[signbit-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-23.md#16ib-mathsignbit-proposal
[stacks]: https://github.com/tc39/proposal-error-stacks
[stacks-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-01/jan-25.md#15iiia-error-stacks-seeking-stage-1
[do]: https://github.com/tc39/proposal-do-expressions
[do-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#update-on-do-expressions
[float16s]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing
[float16s-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-23.md#16ig-float16-on-typedarrays-dataview-mathhfround-for-stage-1
[parseInt-to-parseFloat]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-07/jul-26.md#13iib-consider-changing-numberparseint-and-numberparsefloat
[binary-ast]: https://github.com/tc39/proposal-binary-ast
[binary-ast-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-24.md#binary-ast
[pipeline]: https://github.com/tc39/proposal-pipeline-operator
[pipeline-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#pipeline-operator
[extensible-literals]: https://github.com/tc39/proposal-extended-numeric-literals
[extensible-literals-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#extended-numeric-literals-status-update-and-consider-restoring-numeric-separators-to-stage-3
[protocols]: https://github.com/michaelficarra/proposal-first-class-protocols
[protocols-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#updates-on-first-class-protocols
[partial-application]: https://github.com/tc39/proposal-partial-application
[partial-application-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#partial-application
[cancel-api]: https://github.com/tc39/proposal-cancellation
[cancel-api-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#cancellation-update
[codepoints]: https://github.com/tc39/proposal-string-prototype-codepoints
[codepoints-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-22.md#stringprototypecodepoints-for-stage-2
[freeze-seal-syntax]: https://github.com/keithamus/object-freeze-seal-syntax
[freeze-seal-syntax-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-11/nov-30.md#10ivd-objectfreeze--objectseal-syntax-proposal-for-stage-0
[block-params]: https://github.com/samuelgoto/proposal-block-params
[block-params-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-11/nov-30.md#9iiia-block-params-to-stage-1
[from-string]: https://github.com/mathiasbynens/proposal-number-fromstring
[from-string-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-23.md#13iic-bigintnumberfromstring-for-stage-1
[seeded-randoms]: https://github.com/tabatkins/js-seeded-random
[seeded-randoms-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-23.md#13iif-mathseededrandoms-for-stage-1
[mixins]: https://github.com/justinfagnani/proposal-mixins
[mixins-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-23.md#13iiie-maximally-minimal-mixins-proposal
[arraylast]: https://github.com/keithamus/proposal-array-last
[arraylast-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-24.md#13iiim-getting-last-item-from-array-for-stage-2
[collection-methods]: https://github.com/tc39/collection-methods
[collection-methods-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-01/jan-23.md#13iiik-new-set-builtin-methods-for-stage-2
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[slice-notation]: https://github.com/tc39/proposal-slice-notation/
[slice-notation-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#slice-notation-for-stage-1
[logical-assignment]: https://github.com/tc39/proposal-logical-assignment
[logical-assignment-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-03/mar-22.md#10ie-logical-assignment-operators-for-stage-1-cont
[module-keys]: https://github.com/tc39/tc39-module-keys
[module-keys-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#module-keys-strawman-for-stage-1
[static-blocks]: https://github.com/tc39/proposal-class-static-block#readme
[static-blocks-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#class-static-block
[class-access-expressions]: https://github.com/tc39/proposal-class-access-expressions
[class-access-expressions-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-23.md#class-access-expressions
[matching]: https://github.com/tc39/proposal-pattern-matching
[matching-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-05/may-24.md#pattern-matching-for-stage-1
[resource-management]: https://github.com/tc39/proposal-using-statement
[resource-management-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-24.md#explicit-resource-management
[dynamic-modules]: https://github.com/guybedford/proposal-dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-25.md#dynamic-modules
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-07/july-26.md#javascript-standard-library
[modules-pragma]: https://github.com/tc39/proposal-modules-pragma
[modules-pragma-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-07/jul-26.md#9ivb-modulescript-pragma-for-stage-2
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[json-parse-source]: https://github.com/tc39/proposal-json-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-27.md#jsonparse-source-text-access
[idl]: https://github.com/littledan/proposal-idl
[idl-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-09/sept-27.md#idl-for-javascript
[asset-references]: https://github.com/sebmarkbage/ecmascript-asset-references
[asset-references-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2018-11/nov-28.md#asset-references-for-stage-1
[freeze-proto]: https://github.com/tc39/proposal-freeze-prototype
[freeze-proto-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#freezing-prototypes-for-stage-1
[new.initialize]: https://github.com/littledan/proposal-new-initialize
[new.initialize-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#newinitialize-for-stage-1
[iterator-helpers]: https://github.com/tc39/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-01/jan-31.md#iterator-helpers-for-stage-1
[promise-any]: https://github.com/tc39/proposal-promise-any
[promise-any-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-27.md#promiseany
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[private-declarations-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2019-03/mar-28.md#private-declarations-for-stage-1
[emitter]: https://github.com/pemrouz/proposal-emitter
[dynamic-code-brand-checks]: https://github.com/tc39-transfer/dynamic-code-brand-checks
