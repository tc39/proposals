# [ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)

 [ECMAScript](../README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| Fx Status | Proposal                                                               | Author                           | Champion                         | <sub>Last Presented</sub>                             |
| ---------- | ---------------------------------------------------------------------- | -------------------------------- | -------------------------------- | ----------------------------------------------------- |
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1496584) | [`Intl.DateFormat.prototype.formatRange`][formatrange]                 | Felipe Balbontín                 | Sathya Gunasekaran               | [March&nbsp;2019][formatrange-notes]                  |
| [Available](https://bugzilla.mozilla.org/show_bug.cgi?id=1423593) | [`Intl.Segmenter`: Unicode Segmentation in JavaScript][intl-segmenter] | Daniel Ehrenberg, Richard Gibson | Richard Gibson                   | [July&nbsp;2020][intl-segmenter-notes]                |

### Stage 2

| Fx Status | Proposal                                                               | Author                                    | Champion                                                       | <sub>Last Presented</sub>             |
| ---------- | ---------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1648139) | [`Intl.DurationFormat`][intl.durationformat]                           | Younies Mahmoud, Ujjwal Sharma   | Younies Mahmoud, Ujjwal Sharma   | [June&nbsp;2020][intl.durationformat-notes] |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1648137) | [`Intl.NumberFormat` V3][intl-v3]                                      | Shane Carr                       | Shane Carr                       | [June 2020][intl-v3-notes]                  |
| [Awaiting stage 3](https://bugzilla.mozilla.org/show_bug.cgi?id=1670033) | [Intl Enumeration API][intl-enumeration]                               | Frank Tang                       | Frank Tang                       | September 2020                              |

### Stage 1

| Proposal                                                     | Author          | Champion        | <sub>Last Presented</sub>                                        |
| ------------------------------------------------------------ | --------------- | --------------- | ---------------------------------------------------------------- |
| [Smart Unit Preferences in Intl.NumberFormat][smart-units]   | Younies Mahmoud | Younies Mahmoud | [June 2020][smart-units-notes] |
| [`Intl.DisplayNames v2`][intl.displaynames-v2]               | Frank Tang      | Frank Tang      | September 2020                 |
| [`Intl Locale Info`][intl-locale-info]                       | Frank Tang      | Frank Tang      | September 2020                 |

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[intl-segmenter]: https://github.com/tc39/proposal-intl-segmenter
[intl-segmenter-notes]: https://github.com/tc39/notes/blob/4ea41d0d11292c3a4788040bb822e7a6d88784de/meetings/2020-07/july-21.md#intlsegmenter-for-stage-3
[formatrange]: https://github.com/tc39/proposal-intl-DateTimeFormat-formatRange
[formatrange-notes]: https://github.com/tc39/notes/blob/master/meetings/2019-03/mar-26.md#intldatetimeformatprototypeformatrange-for-stage-3
[intl.durationformat]: https://github.com/tc39/proposal-intl-duration-format
[intl.durationformat-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-02/february-6.md#time-duration-format-proposal-for-stage-1
[intl-v3]: https://github.com/tc39/proposal-intl-numberformat-v3
[intl-v3-notes]: https://github.com/tc39/notes/blob/master/meetings/2020-06/june-2.md#intlnumberformat-v3-for-stage-2
[intl-enumeration]: https://github.com/tc39/proposal-intl-enumeration
[smart-units]: https://github.com/tc39/proposal-smart-unit-preferences
[smart-units-notes]: https://github.com/tc39/notes/blob/840c700dc7fa7b9f6d0a3c208bd66b333e304717/meetings/2020-06/june-4.md#smart-unit-preferences-in-intlnumberformat-for-stage-1
[intl.displaynames-v2]: https://github.com/tc39/intl-displaynames-v2
[intl-locale-info]: https://github.com/FrankYFTang/proposal-intl-locale-info/
