# Stage 1 Proposals

Stage 1 proposals represent problems that the committee is interested in spending time exploring solutions to.

Proposals follow [this process document](https://tc39.es/process-document/).

| Proposal                                                                                     | Author                                                | Champion                                               | <sub>Last Presented</sub>                                         |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      | <sub>[July&nbsp;2017][export-from-notes]</sub>                    |
| [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          | <sub>[May&nbsp;2017][observable-notes]</sub>                      |
| [SES (Secure EcmaScript)][secure-ecmascript]                                                 | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   | <sub>[February&nbsp;2020][secure-ecmascript-notes]</sub>          |
| [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             | <sub>[September&nbsp;2016][collection-of-from-notes]</sub>        |
| [Error stacks][stacks]                                                                       | Jordan Harband<br />Mark Miller                       | Jordan Harband<br />Mark Miller                        | <sub>[January&nbsp;2017][stacks-notes]</sub>                      |
| [`do` expressions][do]                                                                       | Dave Herman                                           | Kevin Gibbons                                          | <sub>[June&nbsp;2020][do-notes]</sub>                             |
| Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           | <sub>[July&nbsp;2017][parseInt-to-parseFloat]</sub>               |
| [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>[May&nbsp;2018][binary-ast-notes]</sub>                      |
| [First-class protocols][protocols]                                                           | Michael Ficarra                                       | Michael Ficarra                                        | <sub>[July&nbsp;2018][protocols-notes]</sub>                      |
| [Partial application][partial-application]                                                   | Ron Buckton                                           | Ron Buckton                                            | <sub>[July&nbsp;2018][partial-application-notes]</sub>            |
| [Cancellation API][cancel-api]                                                               | Ron Buckton                                           | Ron Buckton<br />Brian Terlson                         | <sub>[July&nbsp;2018][cancel-api-notes]</sub>                     |
| [`String.prototype.codePoints`][codepoints]                                                  | Ingvar Stepanyan                                      | Mathias Bynens                                         | <sub>[May&nbsp;2018][codepoints-notes]</sub>                      |
| [`Object.freeze` + `Object.seal` syntax][freeze-seal-syntax]                                 | Keith Cirkel                                          | Keith Cirkel                                           | <sub>[November&nbsp;2017][freeze-seal-syntax]</sub>               |
| [Block Params][block-params]                                                                 | Sam Goto                                              | Sam Goto                                               | <sub>[November&nbsp;2017][block-params-notes]</sub>               |
| [`{BigInt,Number}.fromString`][from-string]                                                  | Mathias Bynens                                        | Mathias Bynens                                         | <sub>[January&nbsp;2018][from-string-notes]</sub>                 |
| [`Math.seededRandoms()`][seeded-randoms]                                                     | Tab Atkins                                            | Tab Atkins                                             | <sub>[January&nbsp;2018][seeded-randoms-notes]</sub>              |
| [Maximally minimal mixins][mixins]                                                           | Justin Fagnani                                        | Justin Fagnani                                         | <sub>[January&nbsp;2018][mixins-notes]</sub>                      |
| [Collection methods][collection-methods]                                                     | Michał Wadas                                          | Sathya Gunasekaran                                     | <sub>[January&nbsp;2018][collection-methods-notes] </sub>         |
| [Richer Keys][richer-keys]                                                                   | Bradley Farias                                        | Bradley Farias                                         | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                 |
| [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     | <sub>[July&nbsp;2020][slice-notation-notes]</sub>                 |
| [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>[May&nbsp;2018][module-keys-notes]</sub>                     |
| [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>[September&nbsp;2020][class-access-expressions-notes]</sub>  |
| [Pattern Matching][matching]                                                                 | Jordan Harband<br />Mark Cohen<br />Tab Atkins<br />Daniel Rosenwasser<br />Jack Works<br />Ross Kirsling | Jordan Harband<br />Mark Cohen<br />Tab Atkins<br />Daniel Rosenwasser<br />Jack Works<br />Ross Kirsling | <sub>[March&nbsp;2022][matching-notes]</sub> |
| [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[July&nbsp;2018][dynamic-modules-notes]</sub>                |
| [Built In Modules (aka JS Standard Library)][built-in-modules]                               | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink<br />Mark Miller   | <sub>[September&nbsp;2020][built-in-modules-notes]</sub>          |
| [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>[September&nbsp;2018][uniform-date-parse-notes]</sub>        |
| [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[September&nbsp;2018][idl-notes]</sub>                       |
| [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>[November&nbsp;2018][asset-references-notes]</sub>           |
| [Freezing prototypes][freeze-proto]                                                          | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>[January&nbsp;2019][freeze-proto-notes]</sub>                |
| [`new.initialize`][new.initialize]                                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>[January&nbsp;2019][new.initialize-notes]</sub>              |
| [Private declarations][private-declarations]                                                 | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[March&nbsp;2019][private-declarations-notes]</sub>          |
| [Emitter][emitter]                                                                           | Shu-yu Guo<br />Pedram Emrouznejad                    | Shu-yu Guo<br />Pedram Emrouznejad                     | <sub>[June&nbsp;2019][emitter-notes]</sub>                        |
| [Reverse iteration][reverse-iteration]                                                       | Leo Balter<br />Jordan Harband                        | Leo Balter<br />Jordan Harband                         | <sub>[July&nbsp;2019][reverse-iteration-notes]</sub>              |
| [Declarations in Conditionals][declarations-in-conditionals]                                 | Devin Rousso                                          | Devin Rousso                                           | <sub>[October&nbsp;2019][declarations-in-conditionals-notes]</sub> |
| [Readonly Collections][readonly-collections]                                                 | Mark Miller<br />Peter Hoddie                         | Mark Miller<br />Peter Hoddie                          | <sub>[October&nbsp;2019][readonly-collections-notes]</sub>        |
| [Support for Distributed Promise Pipelining][eventual-send]                                  | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>[October&nbsp;2019][eventual-send-notes]</sub>               |
| [Wavy Dot: Syntactic Support for Promise Pipelining][promise-pipelining]                     | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>[December&nbsp;2019][promise-pipelining-notes]</sub>         |
| [OOM Fails Fast][oom]                                                                        | Mark Miller                                           | Mark Miller                                            | <sub>[December&nbsp;2019][oom-notes]</sub>                        |
| [Array filtering][array-filtering]                                                           | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>[February&nbsp;2020][array-filtering-notes]</sub>            |
| [Async initialization][async-init]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>[February&nbsp;2020][async-init-notes]</sub>                 |
| [Decimal][decimal]                                                                           | Daniel Ehrenberg<br />Andrew Paprocki                 | Philip Chimento<br />Andrew Paprocki<br />Jesse Alama  | <sub>[December&nbsp;2021][decimal-notes]</sub>                    |
| [Preserve Host Virtualizability][virtualize]                    | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | <sub>[February&nbsp;2020][virtualize-notes]</sub> |
| [Legacy reflection features for functions in JavaScript][legacy-reflection]                  | Mark Miller<br />Claude Pache<br />Jack Works         | Mark Miller<br />Claude Pache<br />Jack Works          | <sub>[February&nbsp;2020][legacy-reflection-notes]</sub>          |
| [Cryptographically Secure Random Number Generation][csprng]                                  | Ron Buckton                                           | Ron Buckton                                            | <sub>[February&nbsp;2020][csprng-notes]</sub>                     |
| [Compartments][proposal-compartments]                                                        | Bradley Farias                                        | Bradley Farias<br />Mark S. Miller<br />Caridy Patiño<br />J.F. Paradis<br />Patrick Soquet<br />Kris Kowal | <sub>[March&nbsp;2020][proposal-compartments-notes]</sub> |
| [Deep Path Properties in Record Literals][deep-path-properties]                              | Rick Button                                           | Rick Button                                            | <sub>[June&nbsp;2020][deep-path-properties-notes]</sub>           |
| [Restrict subclassing support in built-in methods][species-extinct]                          | Yulia Startsev<br />Shu-yu Guo                        | Yulia Startsev<br />Shu-yu Guo                         | <sub>[June&nbsp;2020][species-extinct-notes]</sub>                |
| [Array Equality][array-equality]                                                             | Hemanth HM<br />Jordan Harband                        | Hemanth HM<br />Jordan Harband                         | <sub>[June&nbsp;2020][array-equality-notes]</sub>                 |
| [await operations][await.ops]                                                                | Jack Works                                             | Jack Works<br />Jordan Harband                        | <sub>[July&nbsp;2020][await.ops-notes]</sub>                      |
| [`Array.prototype.unique()`][array-unique]                                                   | [TechQuery](https://github.com/TechQuery)              | Jack Works                                            | <sub>[July&nbsp;2020][array-unique-notes]</sub>                   |
| [Double-Ended Iterator and Destructuring][double-ended-iterator]                             | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>[September&nbsp;2020][double-ended-iterator-notes]</sub>     |
| [Standardized Debug][debug]                                                                  | Gus Caplan                                             | Gus Caplan                                            | <sub>[November&nbsp;2020][debug-notes]</sub>            _         |
| [Modulus and Additional Integer Math][modulus]                                               | Peter Hoddie                                           | Peter Hoddie                                          | <sub>[September&nbsp;2020][modulus-notes]</sub>                   |
| [Extensions][extensions]                                                                     | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>[November&nbsp;2020][extensions-notes]</sub>                 |
| [Grouped Accessors and Auto-Accessors][accessors]                                            | Ron Buckton                                            | Ron Buckton                                           | <sub>[November&nbsp;2020][accessors-notes]</sub>                  |
| [`async do` expressions][async-do]                                                           | Kevin Gibbons                                          | Kevin Gibbons                                         | <sub>[January&nbsp;2021][async-do-notes]</sub>                    |
| [Class Brand Checks][class-brand-check]                                                      | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>[January&nbsp;2021][class-brand-check-notes]</sub>           |
| [Limited ArrayBuffer][limited-array-buffer]                                                  | Jack Works                                             | Jack Works                                            | <sub>[April&nbsp;2021][limited-array-buffer-notes]</sub>          |
| [BigInt Math][bigint-math]                                                                   | J.S. Choi                                              | J.S. Choi                                             | <sub>[August&nbsp;2021][bigint-math-notes]</sub>                  |
| [Get Intrinsic][get-intrinsic]                                                               | Jordan Harband                                         | Jordan Harband                                        | <sub>[August&nbsp;2021][get-intrinsic-notes]</sub>                |
| [`String.cooked`][string.cooked]                                                             | Darien Maillet Valentine                               | Jamie Kyle<br />Hemanth HM                            | <sub>[October&nbsp;2021][string.cooked-notes]</sub>               |
| [Call-this operator][call-this]                                                              | J.S. Choi                                              | J.S. Choi                                             | <sub>[October&nbsp;2021][call-this-notes]</sub>                   |
| [RegExp Extended Mode and Comments][regexp-x-mode]                                           | Ron Buckton                                            | Ron Buckton                                           | <sub>[October&nbsp;2021][regexp-x-mode-notes]</sub>               |
| [RegExp `\R` Escape][regexp-r-escape]                                                        | Ron Buckton                                            | Ron Buckton                                           | <sub>[December&nbsp;2021][regexp-r-escape-notes]</sub>            |
| [Reversible string split][reversible-string-split]                                           | Luca Casonato                                          | Luca Casonato                                         | <sub>[January&nbsp;2022][reversible-string-split-notes]</sub>     |
| [Function once][once]                                                                        | J. S. Choi                                             | J. S. Choi                                            | <sub>[March&nbsp;2022][once-notes]</sub>                          |
| [Type Annotations][type-annotations]                                                         | Gil Tayar<br />Daniel Rosenwasser<br />Romulo Cintra<br />Rob Palmer | Daniel Rosenwasser<br />Romulo Cintra<br />Rob Palmer | <sub>[March&nbsp;2022][type-annotations-notes]</sub> |
| [Faster Promise adoption][faster-promise-adoption]                                           | Justin Ridgewell                                       | Justin Ridgewell                                      | <sub>[June&nbsp;2022][faster-promise-adoption-notes]</sub>        |
| [RegExp Atomic Operators][regexp-atomic-operators]                                           | Ron Buckton                                            | Ron Buckton                                           | <sub>[June&nbsp;2022][regexp-atomic-operators-notes]</sub>        |
| [Policy Maps and Sets][policy-maps]                                                          | J.S. Choi                                              | J.S. Choi<br />Hemanth HM                             | <sub>[July&nbsp;2022][policy-maps-notes]</sub>                    |
| [Function Memoization][memoization]                                                          | J.S. Choi                                              | J.S. Choi<br />Hemanth HM                             | <sub>[July&nbsp;2022][memoization-notes]</sub>                    |
| [Object pick/omit][pick-omit]                                                                | Hemanth HM<br />Aleen                                  | Hemanth HM                                            | <sub>[July&nbsp;2022][pick-omit-notes]</sub>                      |
| [Mass Proxy Revocation][mass-proxy-revocation]                                               | Alex Vincent                                           | Mark S. Miller, Jack Works                            | <sub>[November&nbsp;2022][mass-proxy-revocation-notes]</sub>      |
| [Prototype pollution mitigation][proto-pollution]                                            | Santiago Díaz<br />Jun Kokatsu                         | Shu-yu Guo                                            | <sub>[January&nbsp;2023][proto-pollution-notes]</sub>             |
| [Await Dictionary][await-dictionary]                                                         | Alexander J. Vincent                                   | Ashley Claymore<br />Jordan Harband<br />Chris de Almeida | <sub>[March&nbsp;2023][await-dictionary-notes]</sub>          |
| [Class Method Parameter Decorators][class-param-decorators]                                  | Ron Buckton                                            | Ron Buckton                                           | <sub>[March&nbsp;2023][class-param-decorators-notes]</sub>        |
| [Optional chaining in assignment LHS][optional-assign]                                       | Nicolò Ribaudo                                         | Nicolò Ribaudo                                        | <sub>[July&nbsp;2023][optional-assign-notes]<sub>                 |
| [DataView get/set Uint8Clamped methods][dataview-uint8c]                                     | Jordan Harband                                         | Jordan Harband                                        | <sub>[July&nbsp;2023][dataview-uint8c-notes]</sub>                |
| [Stable Formatting][stable-format]                                                           | Eemeli Aro                                             | Eemeli Aro                                            | <sub>[September&nbsp;2023][stable-format-notes]</sub>             |
| [Negated `in` and `instanceof` operators][negated-in]                                        | Pablo Gorostiaga Belio                                 | Pablo Gorostiaga Belio                                | <sub>[September&nbsp;2023][negated-in-notes]</sub>                |
| [Locale Extensions][locale-extensions]                                                       | Ben Allen                                              | Ben Allen                                             | <sub>[September&nbsp;2023][locale-extensions-notes]</sub>         |
| [Module sync assert][module-sync-assert]                                                     | Jack Works                                             | Jack Works                                            | <sub>[November&nbsp;2023][module-sync-assert-notes]</sub>         |
| [Iterator unique][iterator-unique]                                                           | Michael Ficarra                                        | Michael Ficarra                                       | <sub>[February&nbsp;2024][iterator-unique-notes]</sub>            |
| [Improved Escapes for Template Literals][template-literals]                                  | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>[February&nbsp;2024][template-literals-notes]</sub>          |
| [Function and Object Literal Decorators][func-obj-decs]                                      | Ron Buckton                                            | Ron Buckton                                           | <sub>[February&nbsp;2024][func-obj-decs-notes]</sub>              |
| [Strict Enforcement of 'using'][strict-using]                                                | Ron Buckton                                            | Ron Buckton                                           | <sub>[April&nbsp;2024][strict-using-notes]</sub>                  |
| [Signals][signals]                                                                           | Rob Eisenberg<br />Daniel Ehrenberg                    | Daniel Ehrenberg<br />Yehuda Katz<br />Jatin Ramanathan<br />Shay Lewis<br />Kristen Hewell Garrett<br />Dominic Gannaway<br />Preston Sego<br />Milo M<br />Rob Eisenberg | <sub>[April&nbsp;2024][signals-notes]</sub> |
| [Concurrency Control][concurrency-control]                                                   | Michael Ficarra<br />Luca Casonato<br />Kevin Gibbons  | Michael Ficarra<br />Luca Casonato                    | <sub>[July&nbsp;2024][concurrency-control-notes]</sub>            |
| [Unordered Async Iterator Helpers][unordered-async]                                          | Michael Ficarra                                        | Michael Ficarra                                       | <sub>[July&nbsp;2024][unordered-async-notes]</sub>                |
| [`Array.zip` and `Array.zipKeyed`][array.zip]                                                | Jordan Harband                                         | Jordan Harband                                        | <sub>[October&nbsp;2024][array.zip-notes]</sub>                   |
| [Stabilize][stabilize]                                                                       | Mark Miller<br />Chip Morningstar<br />Richard Gibson<br />Mathieu Hofman | Mark Miller<br />Chip Morningstar<br />Richard Gibson<br />Mathieu Hofman | <sub>December&nbsp;2024</sub> |
| [Sync Imports][import-sync]                                                                  | Guy Bedford                                            | Guy Bedford                                           | <sub>December&nbsp;2024</sub>                                     |

See also the [active proposals](README.md), [stage 0 proposals](stage-0-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.

[export-from]: https://github.com/tc39/proposal-export-default-from
[export-from-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-07/jul-27.md#export-default-from
[observable]: https://github.com/tc39/proposal-observable
[observable-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-25.md#17iiia-observable-proposal-to-stage-2
[secure-ecmascript]: https://github.com/tc39/proposal-ses
[secure-ecmascript-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-6.md#ses-compartments
[collection-of-from]: https://github.com/tc39/proposal-setmap-offrom
[collection-of-from-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-29.md#11iic-set-map-weakset-and-weakmap-of-and-from-methods
[stacks]: https://github.com/tc39/proposal-error-stacks
[stacks-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-25.md#15iiia-error-stacks-seeking-stage-1
[do]: https://github.com/tc39/proposal-do-expressions
[do-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-1.md#do-expressions-for-stage-2
[parseInt-to-parseFloat]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-07/jul-26.md#13iib-consider-changing-numberparseint-and-numberparsefloat
[binary-ast]: https://github.com/tc39/proposal-binary-ast
[binary-ast-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-24.md#binary-ast
[protocols]: https://github.com/tc39/proposal-first-class-protocols
[protocols-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-25.md#updates-on-first-class-protocols
[partial-application]: https://github.com/tc39/proposal-partial-application
[partial-application-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-25.md#partial-application
[cancel-api]: https://github.com/tc39/proposal-cancellation
[cancel-api-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-25.md#cancellation-update
[codepoints]: https://github.com/tc39/proposal-string-prototype-codepoints
[codepoints-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-22.md#stringprototypecodepoints-for-stage-2
[freeze-seal-syntax]: https://github.com/keithamus/proposal-object-freeze-seal-syntax
[freeze-seal-syntax-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-30.md#10ivd-objectfreeze--objectseal-syntax-proposal-for-stage-0
[block-params]: https://github.com/samuelgoto/proposal-block-params
[block-params-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-30.md#9iiia-block-params-to-stage-1
[from-string]: https://github.com/tc39/proposal-number-fromstring
[from-string-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#13iic-bigintnumberfromstring-for-stage-1
[seeded-randoms]: https://github.com/tc39/proposal-seeded-random
[seeded-randoms-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#13iif-mathseededrandoms-for-stage-1
[mixins]: https://github.com/justinfagnani/proposal-mixins
[mixins-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#13iiie-maximally-minimal-mixins-proposal
[collection-methods]: https://github.com/tc39/proposal-collection-methods
[collection-methods-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#13iiik-new-set-builtin-methods-for-stage-2
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[slice-notation]: https://github.com/tc39/proposal-slice-notation
[slice-notation-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-21.md#slice-notation-for-stage-2
[module-keys]: https://github.com/tc39/proposal-module-keys
[module-keys-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-23.md#module-keys-strawman-for-stage-1
[class-access-expressions]: https://github.com/tc39/proposal-class-access-expressions
[class-access-expressions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-22.md#class-access-expressions-for-stage-2
[matching]: https://github.com/tc39/proposal-pattern-matching
[matching-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-28.md#pattern-matching-for-stage-2
[dynamic-modules]: https://github.com/nodejs/dynamic-modules
[dynamic-modules-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-07/july-25.md#dynamic-modules
[built-in-modules]: https://github.com/tc39/proposal-built-in-modules
[built-in-modules-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-24.md#builtin-modules-for-stage-2
[uniform-date-parse]: https://github.com/tc39/proposal-uniform-interchange-date-parsing
[uniform-date-parse-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-09/sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input
[idl]: https://github.com/tc39/proposal-idl
[idl-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-09/sept-27.md#idl-for-javascript
[asset-references]: https://github.com/tc39/proposal-asset-references
[asset-references-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-11/nov-28.md#asset-references-for-stage-1
[freeze-proto]: https://github.com/tc39/proposal-freeze-prototype
[freeze-proto-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-31.md#freezing-prototypes-for-stage-1
[new.initialize]: https://github.com/littledan/proposal-new-initialize
[new.initialize-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-31.md#newinitialize-for-stage-1
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[private-declarations-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-03/mar-28.md#private-declarations-for-stage-1
[emitter]: https://github.com/tc39/proposal-emitter
[emitter-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-06/june-5.md#emitter-for-stage-1
[reverse-iteration]: https://github.com/tc39/proposal-reverseIterator
[reverse-iteration-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-07/july-23.md#symbolreverse
[declarations-in-conditionals]: https://github.com/tc39/proposal-Declarations-in-Conditionals
[declarations-in-conditionals-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-2.md#declarations-in-conditionals
[readonly-collections]: https://github.com/tc39/proposal-readonly-collections
[readonly-collections-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-3.md#readonly-collections-for-stage-1
[eventual-send]: https://github.com/tc39/proposal-eventual-send
[eventual-send-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-10/october-3.md#eventual-send-support-for-distributed-promise-pipelining
[promise-pipelining]: https://github.com/tc39/proposal-wavy-dot
[promise-pipelining-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#update-on-promise-pipelining
[oom]: https://github.com/tc39/proposal-oom-fails-fast
[oom-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#update-on-oom-must-fail-fast
[array-filtering]: https://github.com/tc39/proposal-array-filtering
[array-filtering-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-5.md#status-update-on-array-filtering
[decimal]: https://github.com/tc39/proposal-decimal
[decimal-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md#decimals
[virtualize]: https://github.com/Agoric/proposal-preserve-virtualizability
[virtualize-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-4.md#preserve-host-virtualizability
[legacy-reflection]: https://github.com/claudepache/es-legacy-function-reflection
[legacy-reflection-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-5.md#legacy-reflection-features-for-functions-in-javascript-for-stage-1
[async-init]: https://docs.google.com/presentation/d/1DsjZAzBjn2gCrr4l0uZzCymPIWZTKM8KzcnMBF31HAg/edit#slide=id.g7d23d45064_0_196
[async-init-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-4.md#async-initialization-for-stage-1
[csprng]: https://github.com/tc39/proposal-csprng
[csprng-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-5.md#arraybufferfillrandom-for-stage-1
[proposal-compartments]: https://github.com/tc39/proposal-compartments
[proposal-compartments-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/april-1.md#compartments-for-stage-1
[deep-path-properties]: https://github.com/tc39/proposal-deep-path-properties-for-record
[deep-path-properties-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-3.md#deep-path-properties
[species-extinct]: https://github.com/tc39/proposal-rm-builtin-subclassing
[species-extinct-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-3.md#restrict-subclassing-support-for-built-in-methods-stage-1
[array-equality]: https://github.com/tc39/proposal-array-equality
[array-equality-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-4.md#generic-comparison
[await.ops]: https://github.com/tc39/proposal-await.ops
[await.ops-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-22.md#await-operations-for-stage-1
[array-unique]: https://github.com/tc39/proposal-array-unique
[array-unique-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-22.md#arrayprototypeunique-proposal-for-stage-1
[double-ended-iterator]: https://github.com/tc39/proposal-deiter
[double-ended-iterator-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-24.md#double-ended-iterator-and-destructuring-for-stage-1
[debug]: https://github.com/tc39/proposal-standardized-debug
[debug-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-11/nov-17.md#standardized-debug-for-stage-2
[modulus]: https://github.com/tc39/proposal-integer-and-modulus-math
[modulus-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-09/sept-24.md#modulus-and-additional-integer-math-for-stage-1
[extensions]: https://github.com/tc39/proposal-extensions
[extensions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-11/nov-19.md#extensions-for-stage-1
[accessors]: https://github.com/tc39/proposal-grouped-and-auto-accessors
[accessors-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-11/nov-19.md#continuation-grouped-accessors-and-auto-accessors
[async-do]: https://github.com/tc39/proposal-async-do-expressions
[async-do-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-27.md#async-do-expressions
[class-brand-check]: https://github.com/tc39/proposal-class-brand-check
[class-brand-check-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-27.md#class-brand-checks
[limited-array-buffer]: https://github.com/tc39/proposal-limited-arraybuffer
[limited-array-buffer-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-04/apr-21.md#read-only-arraybuffer-and-fixed-view-of-arraybuffer-for-stage-1
[bigint-math]: https://github.com/tc39/proposal-bigint-math
[bigint-math-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-26.md#bigint-math-update
[get-intrinsic]: https://github.com/tc39/proposal-get-intrinsic
[get-intrinsic-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-08/sept-01.md#get-intrinsic-for-stage-1
[string.cooked]: https://github.com/tc39/proposal-string-cooked
[string.cooked-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-27.md#stringcooked
[call-this]: https://github.com/tc39/proposal-call-this
[call-this-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-27.md#bind-this-operator-for-stage-1
[regexp-x-mode]: https://github.com/tc39/proposal-regexp-x-mode
[regexp-x-mode-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-27.md#regexp-extended-mode-and-comments
[regexp-r-escape]: https://github.com/tc39/proposal-regexp-r-escape
[regexp-r-escape-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-14.md#regexp-r-escape-for-stage-2
[reversible-string-split]: https://github.com/tc39/proposal-reversible-string-split
[reversible-string-split-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-01/jan-25.md#reversible-string-split
[once]: https://github.com/tc39/proposal-function-once
[once-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-29.md#functionprototypeonce-for-stage-1
[type-annotations]: https://github.com/tc39/proposal-type-annotations
[type-annotations-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-29.md#types-as-comments-for-stage-1
[faster-promise-adoption]: https://github.com/tc39/proposal-faster-promise-adoption
[faster-promise-adoption-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-06.md#remove-job-from-promise-resolve-functions
[regexp-atomic-operators]: https://github.com/tc39/proposal-regexp-atomic-operators
[regexp-atomic-operators-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-06/jun-08.md#regex-atomic-operators
[policy-maps]: https://github.com/tc39/proposal-policy-map-set
[policy-maps-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-21.md#policy-maps-and-sets-for-stage-1
[memoization]: https://github.com/tc39/proposal-function-memo
[memoization-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-21.md#function-memoization-for-stage-1
[pick-omit]: https://github.com/tc39/proposal-object-pick-or-omit
[pick-omit-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-21.md#ergonomic-dynamic-object-restructuring
[mass-proxy-revocation]: https://github.com/tc39/proposal-mass-proxy-revocation
[mass-proxy-revocation-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#mass-proxy-revocation-for-stage-1
[proto-pollution]: https://github.com/tc39/proposal-symbol-proto
[proto-pollution-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-01/jan-30.md#prototype-pollution-mitigation--symbolproto
[await-dictionary]: https://github.com/tc39/proposal-await-dictionary
[await-dictionary-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-22.md#await-dictionary-for-stage-1
[class-param-decorators]: https://github.com/tc39/proposal-class-method-parameter-decorators
[class-param-decorators-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-23.md#class-constructor-and-method-parameter-decorators
[optional-assign]: https://github.com/tc39/proposal-optional-chaining-assignment
[optional-assign-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-13.md#optional-chaining-in-assignment-lhs-for-stage-1-or-2
[dataview-uint8c]: https://github.com/tc39/proposal-dataview-get-set-uint8clamped
[dataview-uint8c-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-13.md#dataview-getset-uint8clamped-methods-for-stage-1-or-2-or-3
[stable-format]: https://github.com/tc39/proposal-stable-formatting
[stable-format-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-27.md#stable-formatting-for-stage-1
[negated-in]: https://github.com/tc39/proposal-negated-in-instanceof
[negated-in-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-28.md#negated-in-and-instanceof-operators-for-stage-1
[locale-extensions]: https://github.com/ben-allen/locale-extensions
[locale-extensions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-28.md#locale-extensions-for-stage-1
[module-sync-assert]: https://github.com/tc39/proposal-module-sync-assert
[module-sync-assert-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-11/november-29.md#module-sync-assert-for-stage-1
[iterator-unique]: https://github.com/tc39/proposal-iterator-unique
[iterator-unique-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-6.md#iterator-unique-for-stage-1
[template-literals]: https://github.com/hax/proposal-raw-string-literals
[template-literals-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-7.md#raw-string-literals-for-stage-1
[func-obj-decs]: https://github.com/tc39/proposal-function-and-object-literal-element-decorators
[func-obj-decs-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-8.md#function-and-object-literal-element-decorators-for-stage-1
[signals]: https://github.com/tc39/proposal-signals
[signals-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-11.md#signals-for-stage-1
[strict-using]: https://github.com/tc39/proposal-using-enforcement
[strict-using-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-11.md#strict-enforcement-of-using
[unordered-async]: https://github.com/tc39/proposal-unordered-async-iterator-helpers
[unordered-async-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-30.md#unordered-async-iterator-helpers-for-stage-1
[concurrency-control]: https://github.com/tc39/proposal-concurrency-control
[concurrency-control-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-29.md#concurrency-control-presenter-mf-and-lca
[array.zip]: https://github.com/tc39/proposal-array-zip
[array.zip-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#arrayzip-for-stage-1-or-2-or-27
[stabilize]: https://github.com/Agoric/proposal-stabilize
[import-sync]: https://github.com/guybedford/proposal-import-sync
