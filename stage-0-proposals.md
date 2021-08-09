# Stage 0 Proposals

Stage 0 proposals are either

* planned to be presented to the committee by a TC39 champion, or
* have been presented to the committee and not rejected definitively, but have not yet achieved any of the criteria to get into stage 1.

| Proposal                                                           | Author                                | Champion                              | Last Presented                    |
| ------------------------------------------------------------------ | ------------------------------------- | ------------------------------------- | --------------------------------- |
| [Additional metaproperties][metaprops]                             | Allen Wirfs-Brock                     | Allen Wirfs-Brock                     |                                   |
| [Defensible Classes][defensible-classes]                           | Mark Miller<br />Doug Crockford       | Mark Miller<br />Doug Crockford       |                                   |
| [Function bind syntax][bind-syntax]                                | Kevin Smith                           | Brian Terlson<br />Matthew Podwysocki | [March 2015][bind-notes]          |
| [Function expression decorators][func-expr-decorators]             | Igor Minar                            | Igor Minar                            |                                   |
| [Method parameter decorators][method-param-decorators]             | Igor Minar                            | Igor Minar                            |                                   |
| [Nested `import` declarations][nested-imports]                     | Ben Newman                            | Ben Newman                            | [July 2016][nested-notes]         |
| [Orthogonal Classes][ortho]                                        | Mark Miller<br />Allen Wirfs-Brock    | Mark Miller<br />Allen Wirfs-Brock    | [March 2017][ortho-notes]         |
| [`Reflect.{isCallable,isConstructor}`][is-callable-is-constructor] | Caitlin Potter                        | Caitlin Potter                        |                                   |
| [Relationships][relationships]                                     | Mark Miller<br />Waldemar Horwat      | Mark Miller<br />Waldemar Horwat      |                                   |
| [Structured Clone][clone]                                          | Dmitry Lomov                          | Dmitry Lomov                          | [Jan 2014][clone-notes]           |
| [WHATWG URL][url]                                                  | James M Snell                         | James M Snell                         |                                   |
| [Object Shorthand Improvements][object-shorthand-improvements]     | Ron Buckton                           | Ron Buckton                           | [Sep 2017][shorthand-notes]       |
| [`deprecated`][deprecated]                                         | James M Snell                         | James M Snell                         |                                   |
| [`as` destructuring patterns][as-patterns]                         | Kat Marchán                           | Kat Marchán                           |                                   |
| [`Symbol.thenable`][symbol-thenable]                               | Gus Caplan                            | Jordan Harband<br />Myles Borins      | [May 2018][symbol-thenable-notes] |
| [Async Context][async-context]                                     | Chengzhong Wu                         | Chengzhong Wu                         | [July 2020][async-context-notes]  |
| [String trim characters][string-trim-characters]                   | Wenlu Wang                            | Wenlu Wang                            |                                   |
| [`Array.asyncFrom`][array-async-from]                              | J. S. Choi                            | J. S. Choi                               | |
| [Explicit `this` parameter][explicit-this-param]                   | Gilbert                               | HE Shi-Jun                            | [Feb 2020][explicit-this-param-notes] |
| [`this` argument reflection][this-arg-reflection]                  | HE Shi-Jun                            | HE Shi-Jun                            | [Feb 2020][this-arg-reflection-notes] |
| [Index from end syntax][index-from-end]                            | HE Shi-Jun                            | HE Shi-Jun                            | [Jan 2021][index-from-end-notes] |
| [JSON `\//` hint][json-slashes-hint]                               | HE Shi-Jun                            | HE Shi-Jun                            | |
| [Serializer][serializer]                                           | Jack Works                            | Jack Works                            | |
| [Maybe][maybe]                                                     | Jiming Yang                           | Jiming Yang                           | |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.

[metaprops]: https://github.com/allenwb/ESideas/blob/HEAD/ES7MetaProps.md
[defensible-classes]: https://web.archive.org/web/20160804042547/http://wiki.ecmascript.org/doku.php?id=strawman:defensible_classes
[bind-syntax]: https://github.com/tc39/proposal-bind-operator
[func-expr-decorators]: https://goo.gl/8MmCMG
[method-param-decorators]: https://goo.gl/r1XT9b
[nested-imports]: https://github.com/benjamn/reify/blob/HEAD/PROPOSAL.md
[ortho]: https://github.com/erights/Orthogonal-Classes
[is-callable-is-constructor]: https://github.com/caitp/TC39-Proposals/blob/HEAD/tc39-reflect-isconstructor-iscallable.md
[relationships]: https://web.archive.org/web/20160804042554/http://wiki.ecmascript.org/doku.php?id=strawman:relationships
[clone]: https://github.com/dslomov/ecmascript-structured-clone
[url]: https://github.com/jasnell/proposal-url
[object-shorthand-improvements]: https://github.com/rbuckton/proposal-shorthand-improvements
[deprecated]: https://github.com/jasnell/proposal-deprecated
[as-patterns]: https://github.com/zkat/proposal-as-patterns
[bind-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2015-03/mar-25.md#6vi-function-bind-and-private-fields-redux-kevin-smith
[nested-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2016-07/jul-27.md#10iiic-nested-import-declaration
[ortho-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-03/mar-22.md#10iiia-orthogonal-classes
[clone-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2014-01/jan-30.md#structured-clone
[shorthand-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-28.md#13i-object-shorthand-improvements
[builtins-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-28.md#14ia-builtinstypeof-and-builtinsis
[symbol-thenable]: https://github.com/devsnek/proposal-symbol-thenable
[symbol-thenable-notes]: https://github.com/tc39/notes/blob/def2ee0c04bc91612576237314a4f3b1fe2edaef/meetings/2018-05/may-24.md#symbolthenable-for-stage-1-or-2
[async-context]: https://github.com/legendecas/proposal-async-context
[async-context-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-07/july-23.md#async-context-updates--for-stage-1
[string-trim-characters]: https://github.com/Kingwl/proposal-string-trim-characters
[array-async-from]: https://github.com/js-choi/proposal-array-async-from
[explicit-this-param]: https://github.com/gilbert/es-explicit-this
[explicit-this-param-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-6.md#syntax-for-explicitly-this-argument-for-stage-1
[this-arg-reflection]: https://github.com/hax/proposal-function-this
[this-arg-reflection-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-6.md#function-thisargumentexpected-property
[index-from-end]: https://github.com/hax/proposal-index-from-end
[index-from-end-notes]: https://github.com/tc39/notes/blob/master/meetings/2021-01/jan-28.md#index-from-end-syntax
[json-slashes-hint]: https://gist.github.com/hax/5691ca8acdf9179e63043857cdc3616b
[serializer]: https://github.com/Jack-Works/proposal-serializer
[maybe]: https://github.com/futurist/proposal-maybe
