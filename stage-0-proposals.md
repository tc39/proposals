# Stage 0 Proposals

Stage 0 proposals are either

* planned to be presented to the committee by a TC39 champion, or
* have been presented to the committee and not rejected definitively, but have not yet achieved any of the criteria to get into stage 1.

| Proposal                                                           | Author                                | Champion                              | Last Presented                    |
| ------------------------------------------------------------------ | ------------------------------------- | ------------------------------------- | --------------------------------- |
| [Additional metaproperties][metaprops]                             | Allen Wirfs-Brock                     | Allen Wirfs-Brock                     |                                   |
| Annex B — HTML Attribute Event Handlers                            | Allen Wirfs-Brock                     | Allen Wirfs-Brock                     |                                   |
| [Defensible Classes][defensible-classes]                           | Mark Miller<br />Doug Crockford       | Mark Miller<br />Doug Crockford       |                                   |
| [Function bind syntax][bind-syntax]                                | Kevin Smith                           | Brian Terlson<br />Matthew Podwysocki | [March 2015][bind-notes]          |
| [Function expression decorators][func-expr-decorators]             | Igor Minar                            | Igor Minar                            |                                   |
| [Method parameter decorators][method-param-decorators]             | Igor Minar                            | Igor Minar                            |                                   |
| [Nested `import` declarations][nested-imports]                     | Ben Newman                            | Ben Newman                            | [July 2016][nested-notes]         |
| [Normative ICU Reference][icu]                                     | Domenic Denicola                      | Domenic Denicola                      | [May 2017][icu-notes]             |
| [Orthogonal Classes][ortho]                                        | Mark Miller<br />Allen Wirfs-Brock    | Mark Miller<br />Allen Wirfs-Brock    | [March 2017][ortho-notes]         |
| [`Reflect.{isCallable,isConstructor}`][is-callable-is-constructor] | Caitlin Potter                        | Caitlin Potter                        |                                   |
| [Relationships][relationships]                                     | Mark Miller<br />Waldemar Horwat      | Mark Miller<br />Waldemar Horwat      |                                   |
| [`String.prototype.at`][string-at]                                 | Mathias Bynens                        | Mathias Bynens<br />Rick Waldron      |                                   |
| [Structured Clone][clone]                                          | Dmitry Lomov                          | Dmitry Lomov                          | [Jan 2014][clone-notes]           |
| [WHATWG URL][url]                                                  | James M Snell                         | James M Snell                         |                                   |
| [Zones][zones] ([spec][zones-spec])                                | Domenic Denicola                      | Domenic Denicola<br />Miško Hevery    | [March 2016][zones-notes]         |
| [Object Shorthand Improvements][object-shorthand-improvements]     | Ron Buckton                           | Ron Buckton                           | [Sep 2017][shorthand-notes]       |
| [Decimal][decimal]                                                 | Andrew Paprocki<br />Daniel Ehrenberg | Andrew Paprocki<br />Daniel Ehrenberg | [Nov 2017][decimal-notes]         |
| [`deprecated`][deprecated]                                         | James M Snell                         | James M Snell                         |                                   |
| [`as` destructuring patterns][as-patterns]                         | Kat Marchán                           | Kat Marchán                           |                                   |
| [`Symbol.thenable`][symbol-thenable]                               | Gus Caplan                            | Jordan Harband<br />Myles Borins      | [May 2018][symbol-thenable-notes] |

See also the [active proposals](README.md), [stage 1 proposals](stage-1-proposals.md), [finished proposals](finished-proposals.md), and [inactive proposals](inactive-proposals.md) documents.

[metaprops]: https://github.com/allenwb/ESideas/blob/master/ES7MetaProps.md
[defensible-classes]: https://web.archive.org/web/20160804042547/http://wiki.ecmascript.org/doku.php?id=strawman:defensible_classes
[bind-syntax]: https://github.com/zenparsing/es-function-bind
[func-expr-decorators]: https://goo.gl/8MmCMG
[method-param-decorators]: https://goo.gl/r1XT9b
[nested-imports]: https://github.com/benjamn/reify/blob/master/PROPOSAL.md
[icu]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-23.md#normative-icu-reference
[ortho]: https://github.com/erights/Orthogonal-Classes
[is-callable-is-constructor]: https://github.com/caitp/TC39-Proposals/blob/master/tc39-reflect-isconstructor-iscallable.md
[relationships]: https://web.archive.org/web/20160804042554/http://wiki.ecmascript.org/doku.php?id=strawman:relationships
[string-at]: https://github.com/mathiasbynens/String.prototype.at
[clone]: https://github.com/dslomov-chromium/ecmascript-structured-clone
[url]: https://github.com/jasnell/proposal-url
[zones]: https://github.com/domenic/zones
[zones-spec]: https://domenic.github.io/zones/
[object-shorthand-improvements]: https://github.com/rbuckton/proposal-shorthand-improvements
[decimal]: https://docs.google.com/presentation/d/1jPsw7EGsS6BW59_BDRu9o0o3UwSXQeUhi38QG55ZoPI/edit?pli=1#slide=id.p
[deprecated]: https://github.com/jasnell/proposal-deprecated
[as-patterns]: https://github.com/zkat/proposal-as-patterns
[bind-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2015-03/mar-25.md#6vi-function-bind-and-private-fields-redux-kevin-smith
[nested-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-07/jul-27.md#10iiic-nested-import-declaration
[icu-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-05/may-23.md#normative-icu-reference
[ortho-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-03/mar-22.md#10iiia-orthogonal-classes
[clone-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2014-01/jan-30.md#structured-clone
[zones-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2016-03/march-29.md#zones-update
[shorthand-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-09/sept-28.md#13i-object-shorthand-improvements
[builtins-notes]: https://github.com/tc39/tc39-notes/blob/master/meetings/2017-09/sept-28.md#14ia-builtinstypeof-and-builtinsis
[decimal-notes]: https://github.com/rwaldron/tc39-notes/blob/master/meetings/2017-11/nov-29.md#9ivb-decimal-for-stage-0
[symbol-thenable]: https://github.com/devsnek/proposal-symbol-thenable
[symbol-thenable-notes]: https://github.com/rwaldron/tc39-notes/blob/def2ee0c04bc91612576237314a4f3b1fe2edaef/meetings/2018-05/may-24.md#symbolthenable-for-stage-1-or-2
