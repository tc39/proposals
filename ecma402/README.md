# [ECMAScript Internationalization API Specification](https://github.com/tc39/ecma402) proposals

 - [Stage 0 Proposals](stage-0-proposals.md)
 - [Finished Proposals](finished-proposals.md)

 [ECMAScript](../README.md) proposals

## Active proposals

Proposals follow [this process document](https://tc39.github.io/process-document/).
This list contains only stage 1 proposals and higher that have not yet been withdrawn/rejected, or become finished.

### Stage 3

| :rocket: | Proposal                                                               | Author                           | Champion                         |
| -------- | ---------------------------------------------------------------------- | -------------------------------- | -------------------------------- |
|          | [`Intl.Segmenter`: Unicode Segmentation in JavaScript][intl-segmenter] | Daniel Ehrenberg                 | Daniel Ehrenberg                 |
|          | [`Intl.ListFormat`][intl.listformat]                                   | Zibi Braniecki                   | Zibi Braniecki                   |
|          | [`Intl.RelativeTimeFormat`][intl.relativetimeformat]                   | Zibi Braniecki, Daniel Ehrenberg | Zibi Braniecki, Daniel Ehrenberg |

### Stage 2

| :rocket: | Proposal                                                  | Author                           | Champion                         |
| -------- | --------------------------------------------------------- | -------------------------------- | -------------------------------- |
|          | [`Intl.Locale`][intl.locale]                              | Zibi Braniecki, Daniel Ehrenberg | Zibi Braniecki, Daniel Ehrenberg |

### Stage 1

| :rocket: | Proposal                                                     | Author         | Champion       |
| -------- | ------------------------------------------------------------ | -------------- | -------------- |
|          | [`Intl.DurationFormat`][intl.durationformat]                 | Zibi Braniecki | Zibi Braniecki |
|          | [`Intl.UnitFormat`][intl.unitformat]                         | Zibi Braniecki | Zibi Braniecki |
|          | [`DateTimeFormat` `dateStyle` & `timeStyle`][datetimeformat] | Zibi Braniecki | Zibi Braniecki |

:rocket: means the champion thinks it's ready to advance but has not yet presented to the committee.

### Contributing new proposals

Please see [Contributing to ECMAScript](/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact @LJHarb
2. @bterlson or @littledan will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work - although Github Pages redirects will be broken (please update your links!).

[intl-segmenter]: https://github.com/tc39/proposal-intl-segmenter
[intl.listformat]: https://github.com/zbraniecki/proposal-intl-list-format
[intl.relativetimeformat]: https://github.com/tc39/proposal-intl-relative-time
[intl.durationformat]: https://github.com/tc39/ecma402/issues/47
[intl.unitformat]: https://github.com/tc39/ecma402/issues/32
[intl.pluralrules]: https://github.com/tc39/proposal-intl-plural-rules
[intl.datetimeformat.prototype.formattoparts]: https://github.com/tc39/proposal-intl-formatToParts
[intl.numberformat.prototype.formattoparts]: https://github.com/tc39/proposal-intl-formatToParts
[locale-info]: https://github.com/tc39/ecma402/issues/46
[datetimeformat]: https://github.com/zbraniecki/proposal-ecma402-datetime-style
[intl.locale]: https://github.com/zbraniecki/proposal-intl-locale
