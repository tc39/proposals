# [ECMAScript](https://github.com/tc39/ecma262) proposals

* [Stage 1 Proposals](stage-1-proposals.md)
* [Stage 0 Proposals](stage-0-proposals.md)
* [Finished Proposals](finished-proposals.md)
* [Inactive Proposals](inactive-proposals.md)

[ECMAScript Internationalization API Specification](ecma402/README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 2 proposals and higher that have not yet been withdrawn/rejected, or become finished.
Stage 2 indicates that the committee expects these features to be developed and eventually included in the standard.

### Stage 3

| Fx Status | Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| ---------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1306461) | [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]      | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>         |
| [Fx81](https://bugzilla.mozilla.org/show_bug.cgi?id=1435826) | [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:white_check_mark:][tests-private-methods]    | <sub>[January&nbsp;2019][private-fields-and-methods-refresher-notes]</sub>      |
| [Public - Fx66](https://bugzilla.mozilla.org/show_bug.cgi?id=1499448), [Private, in progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1562054) | [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:white_check_mark:][tests-class-fields]       | <sub>[March&nbsp;2019][class-fields-notes]</sub> |
| [Public - Fx75](https://bugzilla.mozilla.org/show_bug.cgi?id=1535804), [Private - in progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1562054) | [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo<br />Daniel Ehrenberg                                        | [:white_check_mark:][tests-static-class-fields] | <sub>[January&nbsp;2019][private-fields-and-methods-refresher-notes]</sub>      |
| [Fx67](https://bugzilla.mozilla.org/show_bug.cgi?id=1519097) | [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]   | <sub>[November&nbsp;2018][hashbang-notes]</sub>         |
| [In Progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1519100) | [Top-level `await`][await]                                                     | Myles Borins                                                            | Myles Borins                                                            | [:white_check_mark:][tests-await]              | <sub>[June&nbsp;2019][await-notes]</sub>                |
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1519483) | [RegExp Match Indices][regex-match-indices]                                    | Ron Buckton                                                             | Ron Buckton                                                             | :question:                                     | <sub>[December&nbsp;2019][regex-match-indices-notes]</sub> |
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1467846) | [`Atomics.waitAsync`][nonblocking]                                             | Lars Hansen                                                             | Shu-yu Guo<br />Lars Hansen                                             | [:white_check_mark:][tests-nonblocking]        | <sub>[December&nbsp;2019][nonblocking-notes]</sub>      |
| [In Progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1658308)| [`.item()`][item]                                                              | Shu-yu Guo<br />Tab Atkins                                              | Shu-yu Guo<br />Tab Atkins                                              | [:construction:][tests-item]                   | <sub>September&nbsp;2020</sub>                          |
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1668330) | [Import Assertions][import-assertions]                                         | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg     | :question:                                     | <sub>September&nbsp;2020</sub>                          |

### Stage 2

| Fx Status | Proposal                                                                       | Author                                                | Champion                                                                          | <sub>Last Presented</sub>                                           |
| ----------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1243700) | [`function.sent` metaproperty][function-sent]                                  | Allen Wirfs-Brock                                     | HE Shi-Jun                                                               | <sub>[July&nbsp;2019][function-sent-notes]</sub>                             |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1435869) | [Decorators][decorators]                                                       | Daniel Ehrenberg                                      | Yehuda Katz<br />Brian Terlson<br />Daniel Ehrenberg                              | <sub>[January&nbsp;2019][decorators-notes]</sub>                    |
| [available](https://bugzilla.mozilla.org/show_bug.cgi?id=1566147) | [`throw` expressions][throw-expressions]                                       | Ron Buckton                                           | Ron Buckton                                                                       | <sub>[January&nbsp;2018][throw-expressions-notes]</sub>             |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1519482) | [Function implementation hiding][censorship]                                   | Domenic Denicola<br />Michael Ficarra                 | Michael Ficarra                                                                   | <sub>[December&nbsp;2019][censorship-notes]</sub>                   |
| [awaiting committee consensus](https://bugzilla.mozilla.org/show_bug.cgi?id=1566146) | [New Set methods][set-methods]                                                 | Michał Wadas<br />Sathya Gunasekaran                  | Sathya Gunasekaran                                                                | <sub>[January&nbsp;2019][set-methods-notes]</sub>                   |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1566145) | [Realms][realms]                                                               | Caridy Patiño<br />Jean-Francois Paradis              | Dave Herman<br />Mark Miller<br />Caridy Patiño                                   | <sub>[February&nbsp;2020][realms-notes]</sub>                       |
| [awaiting committee consensus]( https://bugzilla.mozilla.org/show_bug.cgi?id=1519163) | [`ArrayBuffer.prototype.transfer`][buffer-transfer]                            | Domenic Denicola                                      | Shu-yu Guo                                                                        | <sub>[July&nbsp;2018][buffer-transfer-notes]</sub>                  |
| [awaiting committee consensus](https://bugzilla.mozilla.org/show_bug.cgi?id=1519168) | [Sequence properties in Unicode property escapes][unicode-sequence-properties] | Mathias Bynens                                        | Mathias Bynens                                                                    | <sub>[October&nbsp;2019][unicode-sequence-properties-notes]</sub>   |
| [awaiting proposal stability](https://bugzilla.mozilla.org/show_bug.cgi?id=1519167) | [Temporal][temporal]                                                           | Maggie Pint<br />Matt Johnson<br />Philipp Dunkel     | Maggie Pint<br />Philipp Dunkel<br />Brian Terlson                                | <sub>[February&nbsp;2020][temporal-notes]</sub>                          |
| [awaiting committee consensus](https://bugzilla.mozilla.org/show_bug.cgi?id=1540312) | [collection normalization][collection-rekey]                                   | Bradley Farias                                        | Bradley Farias                                                                    | <sub>[January&nbsp;2019][richer-keys-notes]</sub>                   |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1557720) | [Array.isTemplateObject][isTemplateObject]                                     | Mike Samuel                                           | Mike Samuel                                                                       | <sub>[December&nbsp;2019][isTemplateObject-notes]</sub>             |
| [In Progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1568906) | [Iterator helpers][iterator-helpers]                                           | Gus Caplan                                            | Michael Ficarra<br />Jonathan Keslin                                              | <sub>[July&nbsp;2019][iterator-helpers-notes]</sub>                 |
| [awaiting committee consensus](https://bugzilla.mozilla.org/show_bug.cgi?id=1569081) | [Explicit Resource Management][resource-management]                            | Ron Buckton                                           | Ron Buckton                                                                       | <sub>[February&nbsp;2020][resource-management-notes]</sub>          |
| [awaiting team feedback](https://bugzilla.mozilla.org/show_bug.cgi?id=1586089) | [`Map.prototype.upsert`][map-upsert]                                           | Bradley Farias                                        | Erica Pramer                                                                      | <sub>[October&nbsp;2019][map-upsert-notes]</sub>                    |
| awaiting proposal stability | [Dynamic Import Host Adjustment][]                                             | Mike Samuel                                           | Mike Samuel                                                                       | <sub>[December&nbsp;2019][Dynamic Import Host Adjustment notes]</sub> |
| [In progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1648090)| [Ergonomic brand checks for Private Fields][private-fields-in-in]              | Jordan Harband                                        | Jordan Harband                                                                    | <sub>September&nbsp;2020</sub>                                      |
| awaiting user feedback | [WeakRefs `cleanupSome`][cleanup-some]                                         | Yulia Startsev<br />Daniel Ehrenberg                  | Yulia Startsev<br />Daniel Ehrenberg                                              | <sub>[July&nbsp;2020][cleanup-some-notes]</sub>                     |
| [Awaiting committee consensus](https://bugzilla.mozilla.org/show_bug.cgi?id=1670176) | [JSON Modules][json-modules]                                                                   | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg | Myles Borins<br />Sven Sauleau<br />Dan Clark<br />Daniel Ehrenberg | <sub>September&nbsp;2020</sub>                      |
| [In progress](https://bugzilla.mozilla.org/show_bug.cgi?id=1658309) | [Record & Tuple][record-tuple]                                                 | Robin Ricard<br />Richard Button                      | Robin Ricard<br />Richard Button                                                  | <sub>September&nbsp;2020</sub>                                      |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1658310) | [JSON.parse source text access][json-parse-source]                             | Richard Gibson                                        | Richard Gibson                                                                    | <sub>[July&nbsp;2020][json-parse-source-notes]</sub>                |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1670018) | [Class Static Block][static-blocks]                                            | Ron Buckton                                           | Ron Buckton                                                                       | <sub>September&nbsp;2020</sub>                                      |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1670026) | [Resizable and growable ArrayBuffers][resizable]                               | Shu-yu Guo                                            | Shu-yu Guo                                                                        | <sub>September&nbsp;2020</sub>                                      |


:white_check_mark: means a pull request for tests was merged.

:question: means there is no pull request for tests yet.

:construction: means a pull request for tests was created, but not merged yet.

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not a member of that organization, please contact [@LJHarb](https://github.com/ljharb)
2. One of the chairs ([@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), [@MylesBorins](https://github.com/MylesBorins), or [@robpalme](https://github.com/robpalme)) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[regexp-legacy]: https://github.com/tc39/proposal-regexp-legacy-features
[regexp-legacy-notes]: https://github.com/tc39/notes/blob/master/meetings/2017-05/may-25.md#15ia-regexp-legacy-features-for-stage-3
[tests-regexp-legacy]: https://github.com/tc39/test262/pull/2650
[class-fields]: https://github.com/tc39/proposal-class-fields
[class-fields-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/march-31.md#add-support-for-optionalchainprivateidentifier-in-class-features-proposals
[private-fields-and-methods-refresher-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[tests-class-fields]: https://github.com/tc39/test262/pulls?q=is%3Apr+is%3Aclosed+private+fields
[tests-static-class-fields]: https://github.com/tc39/test262/pulls?q=is%3Apr+is%3Aclosed+static+fields
[function-sent]: https://github.com/tc39/proposal-function.sent
[function-sent-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-07/july-23.md#making-functionsent-inactive
[decorators]: https://github.com/tc39/proposal-decorators
[decorators-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/april-2.md#decorators-update--call-for-participation
[private-methods]: https://github.com/tc39/proposal-private-methods
[private-methods-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-30.md#private-fields-and-methods-refresher
[tests-private-methods]: https://github.com/tc39/test262/pulls?q=is%3Apr+is%3Aclosed+private+methods
[realms]: https://github.com/tc39/proposal-realms
[realms-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#update-on-realms
[temporal]: https://github.com/tc39/proposal-temporal
[temporal-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/april-1.md#temporal-update
[nonblocking]: https://github.com/tc39/proposal-atomics-wait-async
[nonblocking-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-4.md#atomicswaitasync-for-stage-3
[tests-nonblocking]: https://github.com/tc39/test262/issues/2511
[throw-expressions]: https://github.com/tc39/proposal-throw-expressions
[throw-expressions-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-01/jan-24.md#13iiii-throw-expressions-for-stage-3
[static-class-features]: https://github.com/tc39/proposal-static-class-features
[static-class-features-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-05/may-23.md#static-class-features-for-stage-3
[censorship]: https://github.com/tc39/proposal-function-implementation-hiding
[censorship-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-4.md#update-on-function-implementation-hiding
[await]: https://github.com/tc39/proposal-top-level-await
[await-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-06/june-6.md#top-level-await-for-stage-3
[tests-await]: https://github.com/tc39/test262/pull/2274
[set-methods]: https://github.com/tc39/proposal-set-methods
[set-methods-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-29.md#update-on-set-methods
[hashbang-grammar]: https://github.com/tc39/proposal-hashbang
[tests-hashbang-grammar]: https://github.com/tc39/test262/pull/2065
[hashbang-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-11/nov-28.md#hash-bang-grammar
[richer-keys]: https://github.com/tc39/proposal-richer-keys
[richer-keys-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-01/jan-30.md#richer-keys-for-stage-2
[unicode-sequence-properties]: https://github.com/tc39/proposal-regexp-unicode-sequence-properties
[unicode-sequence-properties-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-2.md#update-on-sequence-property-escapes-in-unicode-regular-expressions
[regex-match-indices]: https://github.com/tc39/proposal-regexp-match-indices
[regex-match-indices-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-3.md#regexp-match-indices-performance-feedback
[tests-regexp-match-indices]: https://github.com/tc39/test262/pull/2309
[buffer-transfer]: https://github.com/domenic/proposal-arraybuffer-transfer
[buffer-transfer-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-24.md#arraybufferprototypetransfer
[resource-management]: https://github.com/tc39/proposal-explicit-resource-management
[resource-management-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-5.md#updates-on-explicit-resource-management
[standard-library]: https://github.com/tc39/proposal-javascript-standard-library
[standard-library-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-26.md#javascript-standard-library
[collection-rekey]: https://github.com/tc39/proposal-collection-normalization
[iterator-helpers]: https://github.com/tc39/proposal-iterator-helpers
[iterator-helpers-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-07/july-24.md#iterator-methods-update--stage-2
[private-declarations]: https://github.com/tc39/proposal-private-declarations
[isTemplateObject]: https://github.com/tc39/proposal-array-is-template-object
[isTemplateObject-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-4.md#arrayistemplateobject-update
[resource-management-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-07/july-24.md#explicit-resource-management
[map-upsert]: https://github.com/tc39/proposal-upsert
[map-upsert-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-10/october-2.md#mapupsert--previously-mapinsertorupdate
[Dynamic Import Host Adjustment]: https://github.com/tc39/dynamic-import-host-adjustment
[Dynamic Import Host Adjustment notes]: https://github.com/tc39/notes/blob/master/meetings/2019-12/december-5.md#dynamic-import-host-adjustment-for-stage-2
[private-fields-in-in]: https://github.com/tc39/proposal-private-fields-in-in
[private-fields-in-in-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/april-1.md#ergonomic-brand-checks-for-private-fields-for-stage-1
[cleanup-some]: https://github.com/tc39/proposal-cleanup-some
[cleanup-some-notes]: https://github.com/tc39/notes/blob/4ea41d0d11292c3a4788040bb822e7a6d88784de/meetings/2020-07/july-21.md#weakrefs-for-stage-4--cleanupsome-for-stage-23
[json-modules]: https://github.com/tc39/proposal-json-modules
[item]: https://github.com/tc39/proposal-item-method
[tests-item]: https://github.com/tc39/test262/pull/2812
[record-tuple]: https://github.com/tc39/proposal-record-tuple
[record-tuple-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-03/april-1.md#record-and-tuple-update
[json-parse-source]: https://github.com/tc39/proposal-json-parse-with-source
[json-parse-source-notes]: https://github.com/tc39/notes/blob/4ea41d0d11292c3a4788040bb822e7a6d88784de/meetings/2020-07/july-22.md#jsonparse-source-text-access-for-stage-2
[import-assertions]: https://github.com/tc39/proposal-import-assertions
[import-assertions-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-6.md#module-attributes-status-update
[static-blocks]: https://github.com/tc39/proposal-class-static-block
[static-blocks-notes]: https://github.com/tc39/notes/blob/master/meetings/2018-05/may-23.md#class-static-block
[resizable]: https://github.com/tc39/proposal-resizablearraybuffer
