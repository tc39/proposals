# [ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)

 [ECMAScript](../README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| Proposal                                                               | Author                           | Champion                         | <sub>Last Presented</sub>                             |
| ---------------------------------------------------------------------- | -------------------------------- | -------------------------------- | ----------------------------------------------------- |
| [`Intl Locale Info`][intl-locale-info]                                 | Frank Yung-Fong Tang             | Frank Yung-Fong Tang             | [July&nbsp;2024][intl-locale-info-notes]              |

### Stage 2

| Proposal                                                               | Author                           | Champion                         | <sub>Last Presented</sub>                   |
| ---------------------------------------------------------------------- | -------------------------------- | -------------------------------- | -------------------------------------------- |
| [eraDisplay option for `Intl.DateTimeFormat`][eradisplay]              | Louis-Aime                       | Shane Carr, Louis-Aime           | November&nbsp;2022                           |
| [Intl Era and MonthCode Proposal][intl era monthCode]                  | Frank Yung-Fong Tang             | Frank Yung-Fong Tang             | January&nbsp;2023                            |
| [More Currency Display Choices][mo-money]                              | Eemeli Aro                       | Eemeli Aro                       | December&nbsp;2024                           |

### Stage 1

| Proposal                                                     | Author               | Champion               | <sub>Last Presented</sub>                                        |
| ------------------------------------------------------------ | -------------------- | ---------------------- | ---------------------------------------------------------------- |
| [Smart Unit Preferences in Intl.NumberFormat][smart-units]   | Younies Mahmoud      | Younies Mahmoud        | [June 2020][smart-units-notes]                                   |
| [Intl LocaleMatcher][localematcher]                          | Long Ho              | Shane Carr, Long Ho    | [January&nbsp;2021][localematcher-notes]                         |
| [`Intl.Segmenter v2`][Intl.Segmenter-v2]                     | Frank Yung-Fong Tang | Frank Yung-Fong Tang   | December&nbsp;2021                                               |
| [`Intl.MessageFormat`][intl.messageformat]                   | Eemeli Aro           | Eemeli Aro             | March&nbsp;2022                                                  |
| [`Intl.MessageResource`][intl.messageresource]               | Eemeli Aro           | Eemeli Aro             | November&nbsp;2022                                               |
| [Intl.ZonedDateTimeFormat][intl.zoneddatetimeformat]         | Frank Yung-Fong Tang | Frank Yung-Fong Tang   | May&nbsp;2023                                                    |
| [Representing Measures][measure]                             | Ben Allen            | Ben Allen              | October&nbsp;2024                                                |

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[smart-units]: https://github.com/tc39/proposal-smart-unit-preferences
[smart-units-notes]: https://github.com/tc39/notes/blob/840c700dc7fa7b9f6d0a3c208bd66b333e304717/meetings/2020-06/june-4.md#smart-unit-preferences-in-intlnumberformat-for-stage-1
[intl-locale-info]: https://github.com/tc39/proposal-intl-locale-info
[intl-locale-info-notes]: https://github.com/tc39/notes/blob/4c253a989e8da200bc8c351f1e0a557e2a5d73e4/meetings/2024-07/july-30.md#intllocale-update-in-stage-3
[eradisplay]: https://github.com/tc39/proposal-intl-eradisplay
[eradisplay-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-27.md#eradisplay-for-stage-1
[localematcher]: https://github.com/tc39/proposal-intl-localematcher
[localematcher-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-28.md#intl-localematcher-for-stage-1
[Intl.Segmenter-v2]: https://github.com/tc39/proposal-intl-segmenter-v2
[intl.messageformat]: https://github.com/tc39/proposal-intl-messageformat
[intl.messageresource]: https://github.com/tc39/proposal-intl-message-resource
[intl era monthCode]: https://github.com/tc39/proposal-intl-era-monthcode
[intl.zoneddatetimeformat]: https://github.com/FrankYFTang/intl-zoneddatetimeformat
[measure]: https://github.com/ben-allen/proposal-measure
[mo-money]: https://github.com/eemeli/proposal-intl-currency-display-choices
