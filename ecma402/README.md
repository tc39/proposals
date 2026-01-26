# [ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)
 - [Inactive Proposals](inactive-proposals.md)

 [ECMAScript](../README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.es/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| Proposal                                                               | Author                           | Champion                         | <sub>Test262 Feature Flag</sub>                                     | Meeting Notes                                              |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Intl Era and MonthCode Proposal][intl era monthCode]                  | Frank Yung-Fong Tang             | Frank Yung-Fong Tang             | :question:                                                          | <sub>&nbsp;-2026&#8209;01<br />&nbsp;-[2025&#8209;11][intl-era-monthcode-notes-2025-11]<br />&nbsp;-[2025&#8209;09][intl-era-monthcode-notes-2025-09]<br />&nbsp;-[2025&#8209;07][intl-era-monthcode-notes-2025-07]<br />&nbsp;-[2025&#8209;04][intl-era-monthcode-notes-2025-04]<br />&nbsp;-[2022&#8209;11][intl-era-monthcode-notes]</sub> |

### Stage 2.7

| Proposal                                                                       | Author         | Champion   | <sub>Test262 Feature Flag</sub> | Meeting Notes                                              |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Keep trailing zeros in Intl.NumberFormat and Intl.PluralRules][trailing-zero] | Eemeli Aro     | Eemeli Aro | :question:                      | <sub>&nbsp;-[2025&#8209;11][trailing-zero-notes-2025-11]<br />&nbsp;-[2025&#8209;07][trailing-zero-notes-2025-07]<br />&nbsp;-[2025&#8209;05][trailing-zero-notes]</sub> |

### Stage 2

| Proposal                                                               | Author                           | Champion                         | Stage 2.7 reviewers                        | Meeting Notes                                             |
| ------------------------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| [eraDisplay option for `Intl.DateTimeFormat`][eradisplay]              | Louis-Aime                       | Shane Carr, Louis-Aime           | :question:                                 | <sub>&nbsp;-[2022&#8209;11][eradisplay-notes-2022-11]<br />&nbsp;-[2021&#8209;01][eradisplay-notes]</sub> |
| [More Currency Display Choices][mo-money]                              | Eemeli Aro                       | Eemeli Aro                       | :question:                                 | <sub>&nbsp;-[2024&#8209;12][mo-money-notes]</sub> |

### Stage 1

| Proposal                                                     | Author               | Champion               | Meeting Notes                                                    |
| ------------------------------------------------------------ | -------------------- | ---------------------- | ---------------------------------------------------------------- |
| [Smart Unit Preferences in Intl.NumberFormat][smart-units]   | Younies Mahmoud      | Younies Mahmoud        | <sub>&nbsp;-[2024&#8209;10][smart-units-notes-2024-10]<br />&nbsp;-[2024&#8209;06][smart-units-notes-2024-06]<br />&nbsp;-[2020&#8209;06][smart-units-notes]</sub> |
| [Intl LocaleMatcher][localematcher]                          | Long Ho              | Shane Carr, Long Ho    | <sub>&nbsp;-[2021&#8209;01][localematcher-notes]</sub> |
| [`Intl.Segmenter v2`][Intl.Segmenter-v2]                     | Frank Yung-Fong Tang | Frank Yung-Fong Tang   | <sub>&nbsp;-[2022&#8209;01][segmenter-v2-notes-2022-01]<br />&nbsp;-[2021&#8209;12][segmenter-v2-notes]</sub> |
| [`Intl.MessageFormat`][intl.messageformat]                   | Eemeli Aro           | Eemeli Aro             | <sub>&nbsp;-[2024&#8209;06][messageformat-notes-2024-06]<br />&nbsp;-[2024&#8209;04][messageformat-notes-2024-04]<br />&nbsp;-[2024&#8209;02][messageformat-notes-2024-02]<br />&nbsp;-[2023&#8209;09][messageformat-notes-2023-09]<br />&nbsp;-[2022&#8209;03][messageformat-notes]</sub> |
| [`Intl.MessageResource`][intl.messageresource]               | Eemeli Aro           | Eemeli Aro             | <sub>&nbsp;-[2022&#8209;11][messageresource-notes]</sub> |
| [Intl.ZonedDateTimeFormat][intl.zoneddatetimeformat]         | Frank Yung-Fong Tang | Frank Yung-Fong Tang   | <sub>&nbsp;-[2023&#8209;05][zoneddatetimeformat-notes]</sub> |
| [explore associating a unit with a number][unit-protocol]    | Shane Carr           | Shane Carr             | <sub>&nbsp;-[2025&#8209;11][unit-protocol-notes]</sub> |

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/HEAD/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[smart-units]: https://github.com/tc39/proposal-smart-unit-preferences
[smart-units-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2020-06/june-4.md#smart-unit-preferences-in-intlnumberformat-for-stage-1
[smart-units-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-12.md#smart-units-progress-update
[smart-units-notes-2024-10]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-10.md#smart-units-stage-1-update
[eradisplay]: https://github.com/tc39/proposal-intl-eradisplay
[eradisplay-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-27.md#eradisplay-for-stage-1
[eradisplay-notes-2022-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/nov-29.md#eradisplay-option-for-intldatetimeformat
[localematcher]: https://github.com/tc39/proposal-intl-localematcher
[localematcher-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-01/jan-28.md#intl-localematcher-for-stage-1
[Intl.Segmenter-v2]: https://github.com/tc39/proposal-intl-segmenter-v2
[segmenter-v2-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md#intlsegmenter-v2
[segmenter-v2-notes-2022-01]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-01/jan-26.md#intlsegmenter-v2
[intl.messageformat]: https://github.com/tc39/proposal-intl-messageformat
[messageformat-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#intlmessageformat-for-stage-1
[messageformat-notes-2023-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-09/september-26.md#intlmessageformat-stage-1-update-and-discussion
[messageformat-notes-2024-02]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-02/feb-7.md#intlmessageformat
[messageformat-notes-2024-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-04/april-10.md#intlmessageformat-status-update
[messageformat-notes-2024-06]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-06/june-11.md#intlmessageformat-stage-1-open-question-involving-error-handling-design-patterns
[intl.messageresource]: https://github.com/tc39/proposal-intl-message-resource
[messageresource-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/nov-29.md#intl-messageresource-for-stage-1
[intl.zoneddatetimeformat]: https://github.com/FrankYFTang/intl-zoneddatetimeformat
[zoneddatetimeformat-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2023-05/may-17.md#intlzoneddatetimeformat-for-stage-1
[mo-money]: https://github.com/eemeli/proposal-intl-currency-display-choices
[mo-money-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2024-12/december-02.md#more-currency-display-choices
[trailing-zero]: https://github.com/tc39/proposal-intl-keep-trailing-zeros
[trailing-zero-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-05/may-28.md#keep-trailing-zeros-in-intlnumberformat-and-intlpluralrules-for-stage-1
[trailing-zero-notes-2025-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-29.md#keep-trailing-zeros-in-intlnumberformat-and-intlpluralrules-for-stage-2-or-27
[trailing-zero-notes-2025-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#keep-trailing-zeros-in-intlnumberformat-and-intlpluralrules-update
[unit-protocol]: https://github.com/sffc/proposal-intl-unit-protocol
[unit-protocol-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-18.md#intl-unit-protocol
[intl era monthCode]: https://github.com/tc39/proposal-intl-era-monthcode
[intl-era-monthcode-notes]: https://github.com/tc39/notes/blob/HEAD/meetings/2022-11/dec-01.md#intl-era-and-monthcode-proposal-for-stage-1
[intl-era-monthcode-notes-2025-04]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-04/april-16.md#intl-era-month-code-stage-2-update
[intl-era-monthcode-notes-2025-11]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-11/november-20.md#intl-era-monthcode-for-stage-3
[intl-era-monthcode-notes-2025-09]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-09/september-23.md#intl-era-monthcode
[intl-era-monthcode-notes-2025-07]: https://github.com/tc39/notes/blob/HEAD/meetings/2025-07/july-30.md#intl-era-and-month-code
