# Stage 1 Proposals

Stage 1 proposals represent problems that the committee is interested in spending time exploring solutions to.

Proposals follow [this process document](https://tc39.es/process-document/).

| Proposal                                                                                     | Author                                                | Champion                                               | Meeting Notes |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ | --- |
| [`export v from "mod";` statements][export-from]                                             | Lee Byron                                             | Ben Newman<br />John-David Dalton                      | <sub>&nbsp;-[2023&#8209;09][export-from-notes-2023-09]<br />&nbsp;-[2017&#8209;07][export-from-notes]<br />&nbsp;-[2015&#8209;05][export-from-notes-2015-05]</sub> |
| [Observable][observable]                                                                     | Jafar Husain                                          | Jafar Husain<br />Mark Miller                          | <sub>&nbsp;-[2017&#8209;05][observable-notes]<br />&nbsp;-[2016&#8209;09][observable-notes-2016-09]<br />&nbsp;-[2015&#8209;11][observable-notes-2015-11]<br />&nbsp;-[2015&#8209;07][observable-notes-2015-07]<br />&nbsp;-[2015&#8209;05][observable-notes-2015-05]</sub> |
| [SES (Secure EcmaScript)][secure-ecmascript]                                                 | Mark Miller<br />Chip Morningstar<br />Caridy Patiño  | Mark Miller<br />Chip Morningstar<br />Caridy Patiño   | <sub>&nbsp;-[2020&#8209;02][secure-ecmascript-notes]<br />&nbsp;-[2019&#8209;12][ses-notes-2019-12]<br />&nbsp;-[2018&#8209;05][ses-notes-2018-05]</sub> |
| [`of` and `from` on collection constructors][collection-of-from]                             | Leo Balter                                            | Leo Balter                                             | <sub>&nbsp;-[2016&#8209;09][collection-of-from-notes]</sub> |
| [Error stacks][stacks]                                                                       | Jordan Harband<br />Mark Miller                       | Jordan Harband<br />Mark Miller                        | <sub>&nbsp;-[2019&#8209;03][stacks-notes-2019-03]<br />&nbsp;-[2019&#8209;01][stacks-notes-2019-01]<br />&nbsp;-[2017&#8209;01][stacks-notes]</sub> |
| [`do` expressions][do]                                                                       | Dave Herman                                           | Kevin Gibbons                                          | <sub>&nbsp;-[2020&#8209;06][do-notes]<br />&nbsp;-[2017&#8209;01][do-notes-2017-01]<br />&nbsp;-[2014&#8209;01][do-notes-2014-01]</sub> |
| Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD) |                                                       | Brendan Eich                                           | <sub>&nbsp;-[2017&#8209;07][parseInt-to-parseFloat]</sub> |
| [Binary AST][binary-ast]                                                                     | Shu-yu Guo                                            | Shu-yu Guo                                             | <sub>&nbsp;-[2018&#8209;05][binary-ast-notes]<br />&nbsp;-[2017&#8209;07][binary-ast-notes-2017-07]</sub> |
| [First-class protocols][protocols]                                                           | Michael Ficarra                                       | Michael Ficarra                                        | <sub>&nbsp;-[2018&#8209;07][protocols-notes]</sub> |
| [Partial application][partial-application]                                                   | Ron Buckton                                           | Ron Buckton                                            | <sub>&nbsp;-[2021&#8209;10][partial-application-notes-2021-10]<br />&nbsp;-[2018&#8209;07][partial-application-notes]<br />&nbsp;-[2017&#8209;09][partial-application-notes-2017-09]</sub> |
| [Cancellation API][cancel-api]                                                               | Ron Buckton                                           | Ron Buckton<br />Brian Terlson                         | <sub>&nbsp;-[2018&#8209;07][cancel-api-notes]<br />&nbsp;-[2017&#8209;07][cancel-api-notes-2017-07]<br />&nbsp;-[2017&#8209;05][cancel-api-notes-2017-05]</sub> |
| [`String.prototype.codePoints`][codepoints]                                                  | Ingvar Stepanyan                                      | Mathias Bynens                                         | <sub>&nbsp;-[2018&#8209;05][codepoints-notes]</sub> |
| [`Object.freeze` + `Object.seal` syntax][freeze-seal-syntax]                                 | Keith Cirkel                                          | Keith Cirkel                                           | <sub>&nbsp;-[2017&#8209;11][freeze-seal-syntax-notes]</sub> |
| [Block Params][block-params]                                                                 | Sam Goto                                              | Sam Goto                                               | <sub>&nbsp;-[2017&#8209;11][block-params-notes]</sub> |
| [`{BigInt,Number}.fromString`][from-string]                                                  | Mathias Bynens                                        | Mathias Bynens                                         | <sub>&nbsp;-[2018&#8209;01][from-string-notes]</sub> |
| [Maximally minimal mixins][mixins]                                                           | Justin Fagnani                                        | Justin Fagnani                                         | <sub>&nbsp;-[2018&#8209;01][mixins-notes]</sub> |
| [Collection methods][collection-methods]                                                     | Michał Wadas                                          | Sathya Gunasekaran                                     | <sub>&nbsp;-[2018&#8209;01][collection-methods-notes]</sub> |
| [Richer Keys][richer-keys]                                                                   | Bradley Farias                                        | Bradley Farias                                         | <sub>&nbsp;-[2019&#8209;01][richer-keys-notes]</sub> |
| [Slice notation][slice-notation]                                                             | Sathya Gunasekaran                                    | Sathya Gunasekaran                                     | <sub>&nbsp;-[2020&#8209;07][slice-notation-notes]<br />&nbsp;-[2018&#8209;03][slice-notation-notes-2018-03]</sub> |
| [Module Keys][module-keys]                                                                   | Mike Samuel                                           | Mike Samuel                                            | <sub>&nbsp;-[2018&#8209;05][module-keys-notes]</sub> |
| [class Access Expressions][class-access-expressions]                                         | Ron Buckton                                           | Ron Buckton                                            | <sub>&nbsp;-[2020&#8209;09][class-access-expressions-notes]</sub> |
| [Pattern Matching][matching]                                                                 | Jordan Harband<br />Mark Cohen<br />Tab Atkins<br />Daniel Rosenwasser<br />Jack Works<br />Ross Kirsling | Jordan Harband<br />Mark Cohen<br />Tab Atkins<br />Daniel Rosenwasser<br />Jack Works<br />Ross Kirsling | <sub>&nbsp;-[2023&#8209;09][matching-notes-2023-09]<br />&nbsp;-[2022&#8209;03][matching-notes]<br />&nbsp;-[2021&#8209;04][matching-notes-2021-04]<br />&nbsp;-[2020&#8209;03][matching-notes-2020-03]<br />&nbsp;-[2018&#8209;05][matching-notes-2018-05]</sub> |
| [Dynamic Modules][dynamic-modules]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>&nbsp;-[2018&#8209;07][dynamic-modules-notes]</sub> |
| [Built In Modules (aka JS Standard Library)][built-in-modules]                               | Michael Saboff<br />Mattijs Hoitink                   | Michael Saboff<br />Mattijs Hoitink<br />Mark Miller   | <sub>&nbsp;-[2020&#8209;09][built-in-modules-notes]</sub> |
| [uniform parsing of quasi-standard `Date.parse` input][uniform-date-parse]                   | Richard Gibson                                        | Richard Gibson                                         | <sub>&nbsp;-[2018&#8209;09][uniform-date-parse-notes]</sub> |
| [IDL for ECMAScript][idl]                                                                    | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>&nbsp;-[2018&#8209;09][idl-notes]</sub> |
| [Asset References][asset-references]                                                         | Sebastian Markbage                                    | Sebastian Markbage                                     | <sub>&nbsp;-[2018&#8209;11][asset-references-notes]</sub> |
| [Freezing prototypes][freeze-proto]                                                          | Kevin Gibbons                                         | Kevin Gibbons                                          | <sub>&nbsp;-[2019&#8209;01][freeze-proto-notes]</sub> |
| [`new.initialize`][new.initialize]                                                           | Daniel Ehrenberg                                      | Daniel Ehrenberg                                       | <sub>&nbsp;-[2019&#8209;01][new.initialize-notes]</sub> |
| [Private declarations][private-declarations]                                                 | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>&nbsp;-[2019&#8209;03][private-declarations-notes]</sub> |
| [Emitter][emitter]                                                                           | Shu-yu Guo<br />Pedram Emrouznejad                    | Shu-yu Guo<br />Pedram Emrouznejad                     | <sub>&nbsp;-[2019&#8209;06][emitter-notes]</sub> |
| [Reverse iteration][reverse-iteration]                                                       | Leo Balter<br />Jordan Harband                        | Leo Balter<br />Jordan Harband                         | <sub>&nbsp;-[2019&#8209;07][reverse-iteration-notes]</sub> |
| [Declarations in Conditionals][declarations-in-conditionals]                                 | Devin Rousso                                          | Devin Rousso                                           | <sub>&nbsp;-[2019&#8209;10][declarations-in-conditionals-notes]</sub> |
| [Readonly Collections][readonly-collections]                                                 | Mark Miller<br />Peter Hoddie                         | Mark Miller<br />Peter Hoddie                          | <sub>&nbsp;-[2019&#8209;10][readonly-collections-notes]</sub> |
| [Support for Distributed Promise Pipelining][eventual-send]                                  | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>&nbsp;-[2019&#8209;10][eventual-send-notes]</sub> |
| [Wavy Dot: Syntactic Support for Promise Pipelining][promise-pipelining]                     | Mark Miller<br />Chip Morningstar<br />Michael Fig    | Mark Miller<br />Chip Morningstar<br />Michael Fig     | <sub>&nbsp;-[2019&#8209;12][promise-pipelining-notes]</sub> |
| [OOM Fails Fast][oom]                                                                        | Mark Miller                                           | Mark Miller                                            | <sub>&nbsp;-[2019&#8209;12][oom-notes]</sub> |
| [Array filtering][array-filtering]                                                           | Justin Ridgewell                                      | Justin Ridgewell                                       | <sub>&nbsp;-[2020&#8209;02][array-filtering-notes]</sub> |
| [Async initialization][async-init]                                                           | Bradley Farias                                        | Bradley Farias                                         | <sub>&nbsp;-[2020&#8209;02][async-init-notes]</sub> |
| [Decimal][decimal]                                                                           | Daniel Ehrenberg<br />Andrew Paprocki                 | Philip Chimento<br />Andrew Paprocki<br />Jesse Alama  | <sub>&nbsp;-[2024&#8209;10][decimal-notes-2024-10]<br />&nbsp;-[2024&#8209;07][decimal-notes-2024-07]<br />&nbsp;-[2024&#8209;06][decimal-notes-2024-06]<br />&nbsp;-[2024&#8209;04][decimal-notes-2024-04]<br />&nbsp;-[2023&#8209;11][decimal-notes-2023-11]<br />&nbsp;-[2023&#8209;09][decimal-notes-2023-09]<br />&nbsp;-[2023&#8209;07][decimal-notes-2023-07]<br />&nbsp;-[2023&#8209;03][decimal-notes-2023-03]<br />&nbsp;-[2021&#8209;12][decimal-notes]<br />&nbsp;-[2020&#8209;03][decimal-notes-2020-03]<br />&nbsp;-[2020&#8209;02][decimal-notes-2020-02]<br />&nbsp;-[2017&#8209;11][decimal-notes-2017-11]</sub> |
| [Preserve Host Virtualizability][virtualize]                    | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | Mark Miller<br />J.F. Paradis<br />Caridy Patiño<br />Dan Finley<br />Alan Schmitt | <sub>&nbsp;-[2020&#8209;02][virtualize-notes]</sub> |
| [Legacy reflection features for functions in JavaScript][legacy-reflection]                  | Mark Miller<br />Claude Pache<br />Jack Works         | Mark Miller<br />Claude Pache<br />Jack Works          | <sub>&nbsp;-[2020&#8209;02][legacy-reflection-notes]</sub> |
| [Cryptographically Secure Random Number Generation][csprng]                                  | Ron Buckton                                           | Ron Buckton                                            | <sub>&nbsp;-[2020&#8209;02][csprng-notes]</sub> |
| [Compartments][proposal-compartments]                                                        | Bradley Farias                                        | Bradley Farias<br />Mark S. Miller<br />Caridy Patiño<br />J.F. Paradis<br />Patrick Soquet<br />Kris Kowal | <sub>&nbsp;-[2022&#8209;07][compartments-notes-2022-07]<br />&nbsp;-[2020&#8209;03][proposal-compartments-notes]</sub> |
| [Deep Path Properties in Record Literals][deep-path-properties]                              | Rick Button                                           | Rick Button                                            | <sub>&nbsp;-[2020&#8209;06][deep-path-properties-notes]</sub> |
| [Restrict subclassing support in built-in methods][species-extinct]                          | Yulia Startsev<br />Shu-yu Guo                        | Yulia Startsev<br />Shu-yu Guo                         | <sub>&nbsp;-[2020&#8209;06][species-extinct-notes]</sub> |
| [Array Equality][array-equality]                                                             | Hemanth HM<br />Jordan Harband                        | Hemanth HM<br />Jordan Harband                         | <sub>&nbsp;-[2020&#8209;06][array-equality-notes]</sub> |
| [await operations][await.ops]                                                                | Jack Works                                             | Jack Works<br />Jordan Harband                        | <sub>&nbsp;-[2020&#8209;07][await.ops-notes]</sub> |
| [`Array.prototype.unique()`][array-unique]                                                   | [TechQuery](https://github.com/TechQuery)              | Jack Works                                            | <sub>&nbsp;-[2020&#8209;07][array-unique-notes]</sub> |
| [Double-Ended Iterator and Destructuring][double-ended-iterator]                             | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>&nbsp;-[2020&#8209;09][double-ended-iterator-notes]</sub> |
| [Standardized Debug][debug]                                                                  | Gus Caplan                                             | Gus Caplan                                            | <sub>&nbsp;-[2020&#8209;11][debug-notes]</sub> |
| [Modulus and Additional Integer Math][modulus]                                               | Peter Hoddie                                           | Peter Hoddie                                          | <sub>&nbsp;-[2020&#8209;09][modulus-notes]</sub> |
| [Extensions][extensions]                                                                     | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>&nbsp;-[2020&#8209;11][extensions-notes]</sub> |
| [Grouped Accessors and Auto-Accessors][accessors]                                            | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2020&#8209;11][accessors-notes]</sub> |
| [`async do` expressions][async-do]                                                           | Kevin Gibbons                                          | Kevin Gibbons                                         | <sub>&nbsp;-[2021&#8209;03][async-do-notes-2021-03]<br />&nbsp;-[2021&#8209;01][async-do-notes]</sub> |
| [Class Brand Checks][class-brand-check]                                                      | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>&nbsp;-[2021&#8209;01][class-brand-check-notes]</sub> |
| [Limited ArrayBuffer][limited-array-buffer]                                                  | Jack Works                                             | Jack Works                                            | <sub>&nbsp;-[2021&#8209;04][limited-array-buffer-notes]</sub> |
| [BigInt Math][bigint-math]                                                                   | J.S. Choi                                              | J.S. Choi                                             | <sub>&nbsp;-[2021&#8209;10][bigint-math-notes]</sub> |
| [Get Intrinsic][get-intrinsic]                                                               | Jordan Harband                                         | Jordan Harband                                        | <sub>&nbsp;-[2021&#8209;08][get-intrinsic-notes]</sub> |
| [`String.cooked`][string.cooked]                                                             | Darien Maillet Valentine                               | Jamie Kyle<br />Hemanth HM                            | <sub>&nbsp;-[2021&#8209;10][string.cooked-notes]</sub> |
| [Call-this operator][call-this]                                                              | J.S. Choi                                              | J.S. Choi                                             | <sub>&nbsp;-[2021&#8209;10][call-this-notes]</sub> |
| [RegExp Extended Mode and Comments][regexp-x-mode]                                           | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2021&#8209;10][regexp-x-mode-notes]</sub> |
| [RegExp `\R` Escape][regexp-r-escape]                                                        | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2021&#8209;12][regexp-r-escape-notes]</sub> |
| [Reversible string split][reversible-string-split]                                           | Luca Casonato                                          | Luca Casonato                                         | <sub>&nbsp;-[2022&#8209;01][reversible-string-split-notes]</sub> |
| [Function once][once]                                                                        | J. S. Choi                                             | J. S. Choi                                            | <sub>&nbsp;-[2022&#8209;03][once-notes]</sub> |
| [Type Annotations][type-annotations]                                                         | Gil Tayar<br />Daniel Rosenwasser<br />Romulo Cintra<br />Rob Palmer | Daniel Rosenwasser<br />Romulo Cintra<br />Rob Palmer | <sub>&nbsp;-[2023&#8209;09][type-annotations-notes-2023-09]<br />&nbsp;-[2023&#8209;03][type-annotations-notes-2023-03]<br />&nbsp;-[2022&#8209;03-31][type-annotations-notes-2023-03-31]<br />&nbsp;-[2022&#8209;03-29][type-annotations-notes]</sub> |
| [Faster Promise adoption][faster-promise-adoption]                                           | Justin Ridgewell                                       | Justin Ridgewell                                      | <sub>&nbsp;-[2022&#8209;06][faster-promise-adoption-notes]</sub> |
| [RegExp Atomic Operators][regexp-atomic-operators]                                           | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2022&#8209;06][regexp-atomic-operators-notes]</sub> |
| [Policy Maps and Sets][policy-maps]                                                          | J.S. Choi                                              | J.S. Choi<br />Hemanth HM                             | <sub>&nbsp;-[2022&#8209;07][policy-maps-notes]</sub> |
| [Function Memoization][memoization]                                                          | J.S. Choi                                              | J.S. Choi<br />Hemanth HM                             | <sub>&nbsp;-[2022&#8209;07][memoization-notes]</sub> |
| [Object pick/omit][pick-omit]                                                                | Hemanth HM<br />Aleen                                  | Hemanth HM                                            | <sub>&nbsp;-[2022&#8209;07][pick-omit-notes]</sub> |
| [Mass Proxy Revocation][mass-proxy-revocation]                                               | Alex Vincent                                           | Mark S. Miller, Jack Works                            | <sub>&nbsp;-[2022&#8209;11][mass-proxy-revocation-notes]</sub> |
| [Prototype pollution mitigation][proto-pollution]                                            | Santiago Díaz<br />Jun Kokatsu                         | Shu-yu Guo                                            | <sub>&nbsp;-[2023&#8209;01][proto-pollution-notes]</sub> |
| [Class Method Parameter Decorators][class-param-decorators]                                  | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2023&#8209;03][class-param-decorators-notes]</sub> |
| [Optional chaining in assignment LHS][optional-assign]                                       | Nicolò Ribaudo                                         | Nicolò Ribaudo                                        | <sub>&nbsp;-[2023&#8209;07][optional-assign-notes]</sub> |
| [DataView get/set Uint8Clamped methods][dataview-uint8c]                                     | Jordan Harband                                         | Jordan Harband                                        | <sub>&nbsp;-[2023&#8209;07][dataview-uint8c-notes]</sub> |
| [Stable Formatting][stable-format]                                                           | Eemeli Aro                                             | Eemeli Aro                                            | <sub>&nbsp;-[2023&#8209;09][stable-format-notes]</sub> |
| [Negated `in` and `instanceof` operators][negated-in]                                        | Pablo Gorostiaga Belio                                 | Pablo Gorostiaga Belio                                | <sub>&nbsp;-[2023&#8209;09][negated-in-notes]</sub> |
| [Locale Extensions][locale-extensions]                                                       | Ben Allen                                              | Ben Allen                                             | <sub>&nbsp;-[2023&#8209;09][locale-extensions-notes]</sub> |
| [Module sync assert][module-sync-assert]                                                     | Jack Works                                             | Jack Works                                            | <sub>&nbsp;-[2023&#8209;11][module-sync-assert-notes]</sub> |
| [Iterator unique][iterator-unique]                                                           | Michael Ficarra                                        | Michael Ficarra                                       | <sub>&nbsp;-[2024&#8209;02][iterator-unique-notes]</sub> |
| [Improved Escapes for Template Literals][template-literals]                                  | HE Shi-Jun                                             | HE Shi-Jun                                            | <sub>&nbsp;-[2024&#8209;02][template-literals-notes]</sub> |
| [Function and Object Literal Decorators][func-obj-decs]                                      | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2024&#8209;02][func-obj-decs-notes]</sub> |
| [Strict Enforcement of 'using'][strict-using]                                                | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2024&#8209;04][strict-using-notes]</sub> |
| [Signals][signals]                                                                           | Rob Eisenberg<br />Daniel Ehrenberg                    | Daniel Ehrenberg<br />Yehuda Katz<br />Jatin Ramanathan<br />Shay Lewis<br />Kristen Hewell Garrett<br />Dominic Gannaway<br />Preston Sego<br />Milo M<br />Rob Eisenberg | <sub>&nbsp;-[2024&#8209;04][signals-notes]</sub> |
| [Concurrency Control][concurrency-control]                                                   | Michael Ficarra<br />Luca Casonato<br />Kevin Gibbons  | Michael Ficarra<br />Luca Casonato                    | <sub>&nbsp;-[2024&#8209;07][concurrency-control-notes]</sub> |
| [Unordered Async Iterator Helpers][unordered-async]                                          | Michael Ficarra                                        | Michael Ficarra                                       | <sub>&nbsp;-[2024&#8209;07][unordered-async-notes]</sub> |
| [`Array.zip` and `Array.zipKeyed`][array.zip]                                                | Jordan Harband                                         | Jordan Harband                                        | <sub>&nbsp;-[2024&#8209;10][array.zip-notes]</sub> |
| [Stabilize][stabilize]                                                                       | Mark Miller<br />Chip Morningstar<br />Richard Gibson<br />Mathieu Hofman | Mark Miller<br />Chip Morningstar<br />Richard Gibson<br />Mathieu Hofman | <sub>&nbsp;-[2024&#8209;12][stabilize-notes]</sub> |
| [Curtailing the power of "Thenables"][thenables]                                             | Matthew Gaudet                                         | Matthew Gaudet                                        | <sub>&nbsp;-[2025&#8209;02][thenables-notes]</sub> |
| [`Composites`][composite]                                                                    | Ashley Claymore                                        | Ashley Claymore                                       | <sub>&nbsp;-[2025&#8209;04][composite-notes]</sub> |
| [Enums][enum]                                                                                | Ron Buckton                                            | Ron Buckton                                           | <sub>&nbsp;-[2025&#8209;04][enum-notes]</sub> |
| [`Object.propertyCount`][property-count]                                                     | Ruben Bridgewater<br />Jordan Harband                  | Ruben Bridgewater<br />Jordan Harband                 | <sub>&nbsp;-[2025&#8209;04][property-count-notes]</sub> |
| [Compare Strings by Codepoint][compare-codepoint]                                           | Mathieu Hofman<br />Mark Miller<br />Christopher Hiller | Mathieu Hofman<br />Mark Miller<br />Christopher Hiller | <sub>&nbsp;-[2025&#8209;04][compare-codepoint-notes]</sub> |
| [Disposable AsyncContext.Variable][disposable-asynccontext]                                  | Chengzhong Wu<br />Luca Casonato<br />Gus Caplan       | Chengzhong Wu<br />Luca Casonato<br />Gus Caplan      | <sub>&nbsp;-[2025&#8209;04][disposable-asynccontext-notes]</sub> |
| [More Random Functions][more-random-functions]                                               | Tab Atkins                                             | Tab Atkins                                            | <sub>&nbsp;-[2025&#8209;05][more-random-functions-notes]</sub> |
| [Inspector][inspector]                                                                       | Jacob Smith                                            | Jacob Smith<br />Richard Gibson                       | <sub>&nbsp;-[2025&#8209;05][inspector-notes]</sub> |
| [Module Global][module-global]                                                               | Zbyszek Tenerowicz<br />Kris Kowal<br />Richard Gibson<br />Mark S. Miller | Zbyszek Tenerowicz<br />Kris Kowal<br />Richard Gibson<br />Mark S. Miller | <sub>&nbsp;-[2025&#8209;07][module-global-notes]</sub> |
| [Representing Measures/Amounts][measure]                                                     | Ben Allen                                              | Ben Allen                                             | <sub>&nbsp;-[2025&#8209;09][measure-notes]</sub> |
| [Bulk-add array elements][bulk-add-array]                                                    | Daniel Rosenwasser                                     | Daniel Rosenwasser                                    | <sub>&nbsp;-[2025&#8209;09][bulk-add-array-notes]</sub> |
| [TypedArray Concat][typedarray-concat]                                                       | James Snell                                            | James Snell                                           | <sub>&nbsp;-[2025&#8209;11][typedarray-concat-notes]</sub> |
| [TypedArray Find Within][typedarray-findwithin]                                              | James Snell                                            | James Snell                                           | <sub>&nbsp;-[2025&#8209;11][typedarray-findwithin-notes]</sub> |
| [`Object.getNonIndexStringProperties()`][getNonIndexStringProperties]                        | Ruben Bridgewater<br />Jordan Harband                  | Ruben Bridgewater<br />Jordan Harband                 | <sub>&nbsp;-[2025&#8209;11][getNonIndexStringProperties-notes]</sub> |
| [Error option `framesAbove`][frames-above]                                                   | Ruben Bridgewater                                      | Ruben Bridgewater                                     | <sub>&nbsp;-2026&#8209;01</sub> |
| [Error option `limit`][error-limit]                                                          | Ruben Bridgewater                                      | Ruben Bridgewater                                     | <sub>&nbsp;-2026&#8209;01</sub> |
| [Alias Accessors][alias-accessors]                                                           | Lea Verou                                              | Lea Verou                                             | <sub>&nbsp;-2026&#8209;01</sub> |
| [Composable Accessors via built-in decorators][composable-accessors]                         | Lea Verou                                              | Lea Verou                                             | <sub>&nbsp;-2026&#8209;01</sub> |

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
[freeze-seal-syntax]: https://github.com/tc39/proposal-object-freeze-seal-syntax
[freeze-seal-syntax-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-30.md#10ivd-objectfreeze--objectseal-syntax-proposal-for-stage-0
[block-params]: https://github.com/samuelgoto/proposal-block-params
[block-params-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-30.md#9iiia-block-params-to-stage-1
[from-string]: https://github.com/tc39/proposal-number-fromstring
[from-string-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-01/jan-23.md#13iic-bigintnumberfromstring-for-stage-1
[mixins]: https://github.com/tc39/proposal-mixins
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
[virtualize]: https://github.com/tc39/proposal-preserve-virtualizability
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
[template-literals]: https://github.com/tc39/proposal-improve-template-literals
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
[stabilize]: https://github.com/tc39/proposal-stabilize
[stabilize-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-12/december-03.md#stabilize-to-stage-1
[thenables]: https://github.com/tc39/proposal-thenable-curtailment
[thenables-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-02/february-18.md#curtailing-the-power-of-thenables-for-stage-1
[composite]: https://github.com/tc39/proposal-composites
[composite-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-14.md#composite-keys-for-stage-1
[enum]: https://github.com/tc39/proposal-enum
[enum-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-15.md#enums-for-stage-1
[property-count]: https://github.com/tc39/proposal-object-property-count
[property-count-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-15.md#objectpropertycount-for-stage-1-or-2
[compare-codepoint]: https://github.com/tc39/proposal-compare-strings-by-codepoint
[compare-codepoint-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-16.md#compare-strings-by-codepoint-for-stage-1-or-2
[disposable-asynccontext]: https://github.com/tc39/proposal-async-context-disposable
[disposable-asynccontext-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-14.md#asynccontext-stage-2-update
[more-random-functions]: https://github.com/tc39/proposal-random-functions
[more-random-functions-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-29.md#more-random-functions-for-stage-1
[inspector]: https://github.com/tc39/proposal-inspector
[inspector-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-30.md#revisiting-comparison-for-stage-1
[module-global]: https://github.com/endojs/proposal-new-global
[module-global-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-30.md#module-import-hook-and-new-global-for-stage-1
[measure]: https://github.com/tc39/proposal-amount
[measure-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-24.md#continuation-amount-for-stage-2
[bulk-add-array]: https://github.com/tc39/proposal-bulk-add-array-elements
[bulk-add-array-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-22.md#arrayprototypepushall-for-stage-1
[typedarray-concat]: https://github.com/tc39/proposal-typedarray-concat
[typedarray-concat-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#typedarray-concatenation
[typedarray-findwithin]: https://github.com/tc39/proposal-typedarray-findwithin
[typedarray-findwithin-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#typedarray-find-within
[getNonIndexStringProperties]: https://github.com/tc39/proposal-array-get-non-index-string-properties
[getNonIndexStringProperties-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-20.md#objectgetnonindexstringproperties-for-stage-1-or-2
[frames-above]: https://github.com/tc39/proposal-error-frames-above
[error-limit]: https://github.com/tc39/proposal-error-limit-option
[export-from-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-26.md#reviving-export-default-from-for-stage-2-jhd
[export-from-notes-2015-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-05/may-27.md#module-export-from-additions-lb-presenting
[observable-notes-2016-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-09/sept-29.md#11iiic-observables
[observable-notes-2015-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-11/nov-19.md#observables-jh
[observable-notes-2015-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-07/july-30.md#65-proposed-changes-to-observable-api
[observable-notes-2015-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-05/may-28.md#observable-nominal-type-jh-ks
[ses-notes-2019-12]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-5.md#update-on-ses
[ses-notes-2018-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-23.md#realms
[stacks-notes-2019-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-03/mar-28.md#error-stacks-for-stage-2
[stacks-notes-2019-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2019-01/jan-29.md#security-implications-of-errorprototypestack
[do-notes-2017-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-26.md#13iie-seeking-stage-1-for-do-expressions
[do-notes-2014-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-01/jan-29.md#do-expression
[binary-ast-notes-2017-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-07/jul-26.md#13iiic-binary-ast
[partial-application-notes-2021-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-25.md#partial-function-application-for-stage-2
[partial-application-notes-2017-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-28.md#13i-partial-application
[cancel-api-notes-2017-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-07/jul-25.md#9iva-cancellation
[cancel-api-notes-2017-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-05/may-25.md#15ivb-updates-on-cancellation-proposals
[slice-notation-notes-2018-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-03/mar-22.md#slice-notation-for-stage-1
[matching-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-26.md#pattern-matching-updates
[matching-notes-2021-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-04/apr-20.md#pattern-matching-update
[matching-notes-2020-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/march-31.md#pattern-matching-update
[matching-notes-2018-05]: https://github.com/tc39/notes/blob/HEAD/meetings/2018-05/may-24.md#pattern-matching-for-stage-1
[decimal-notes-2024-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#decimal-stage-1-update
[decimal-notes-2024-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-07/july-31.md#decimal-for-stage-2
[decimal-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-13.md#decimal-for-stage-2
[decimal-notes-2024-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-11.md#decimal-for-stage-2
[decimal-notes-2023-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-11/november-27.md#decimal-stage-1-update--request-for-feedback
[decimal-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-27.md#decimal-stage-1-update-and-discussion
[decimal-notes-2023-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-07/july-12.md#decimal-open-ended-discussion
[decimal-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-22.md#decimal-stage-1-update
[decimal-notes-2020-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-03/march-31.md#decimal-update
[decimal-notes-2020-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-02/february-4.md#bigdecimal-for-stage-1
[decimal-notes-2017-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-11/nov-29.md#9ivb-decimal-for-stage-0
[compartments-notes-2022-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-07/jul-19.md#compartments-as-module-loaders
[async-do-notes-2021-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-03/mar-9.md#async-do-update-towards-stage-2
[type-annotations-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-27.md#type-annotations-stage-1-update-and-discussion
[type-annotations-notes-2023-03]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-22.md#type-annotations-proposal-update
[type-annotations-notes-2023-03-31]: https://github.com/tc39/notes/blob/59c6f56131851169e62051b7f292453e73cd0e92/meetings/2022-03/mar-31.md#types-as-comments-continuation
[alias-accessors]: https://github.com/tc39/proposal-alias-accessors
[composable-accessors]: https://github.com/tc39/proposal-composable-accessors
