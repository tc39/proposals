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
| [`Intl Locale Info`][intl-locale-info]                                 | Frank Tang                       | Frank Tang                       | [Oct&nbsp;2021][intl-locale-info-notes]               |
| [Intl Enumeration API][intl-enumeration]                               | Frank Tang                       | Frank Tang                       | July&nbsp;2021                                        |
| [`Intl.NumberFormat` V3][intl-v3]                                      | Shane Carr                       | Shane Carr                       | July&nbsp;2021                                        |
| [`Intl.DurationFormat`][intl.durationformat]                           | Younies Mahmoud, Ujjwal Sharma   | Younies Mahmoud, Ujjwal Sharma   | [Oct&nbsp;2020][intl.durationformat-notes]            |

### Stage 2

| Proposal                                                               | Author                           | Champion                         | <sub>Last Presented</sub>                   |
| ---------------------------------------------------------------------- | -------------------------------- | -------------------------------- | -------------------------------------------- |

### Stage 1

| Proposal                                                     | Author               | Champion               | <sub>Last Presented</sub>                                        |
| ------------------------------------------------------------ | -------------------- | ---------------------- | ---------------------------------------------------------------- |
| [Smart Unit Preferences in Intl.NumberFormat][smart-units]   | Younies Mahmoud      | Younies Mahmoud        | [June 2020][smart-units-notes]                                   |
| [eraDisplay option for `Intl.DateTimeFormat`][eradisplay]    | Louis-Aime           | Shane Carr, Louis-Aime | [January&nbsp;2021][eradisplay-notes]                |
| [Intl LocaleMatcher][localematcher]                          | Long Ho              | Shane Carr, Long Ho    | [January&nbsp;2021][localematcher-notes]             |
| [`Intl.Segmenter v2`][Intl.Segmenter-v2]                     | Frank Yung-Fong Tang | Frank Yung-Fong Tang   | December&nbsp;2021                                   |

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[intl.durationformat]: https://github.com/tc39/proposal-intl-duration-format
[intl.durationformat-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-10/oct-25.md#durationformat
[intl-v3]: https://github.com/tc39/proposal-intl-numberformat-v3
[intl-v3-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-07/july-15.md#intlnumberformat-v3-for-stage-3
[intl-enumeration]: https://github.com/tc39/proposal-intl-enumeration
[intl-enumeration-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-07/july-13.md#intl-enumeration-api-for-stage-3
[smart-units]: https://github.com/tc39/proposal-smart-unit-preferences
[smart-units-notes]: https://github.com/tc39/notes/blob/840c700dc7fa7b9f6d0a3c208bd66b333e304717/meetings/2020-06/june-4.md#smart-unit-preferences-in-intlnumberformat-for-stage-1
[intl-locale-info]: https://github.com/tc39/proposal-intl-locale-info
[intl-locale-info-notes]: https://github.com/tc39/notes/blob/886ead863abbef6c7546c97c36e0fae7aba8dc8d/meetings/2021-04/apr-20.md#intl-locale-info-for-stage-3
[eradisplay]: https://github.com/tc39/proposal-intl-eradisplay
[eradisplay-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-27.md#eradisplay-for-stage-1
[localematcher]: https://github.com/tc39/proposal-intl-localematcher
[localematcher-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-28.md#intl-localematcher-for-stage-1
[Intl.Segmenter-v2]: https://github.com/FrankYFTang/proposal-intl-segmenter-v2
