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
|          | [`Intl.Locale`][intl.locale]                                           | Zibi Braniecki, Daniel Ehrenberg | Zibi Braniecki, Daniel Ehrenberg |
|          | [`Intl.RelativeTimeFormat`][intl.relativetimeformat]                   | Zibi Braniecki, Daniel Ehrenberg | Zibi Braniecki, Daniel Ehrenberg |
|          | [Intl.NumberFormat Unified API Proposal][numberformat]                 | Shane Carr                       | Shane Carr                       |

### Stage 2

| :rocket: | Proposal                                                     | Author                           | Champion                         |
| -------- | ------------------------------------------------------------ | -------------------------------- | -------------------------------- |
|          | [`Intl.DateFormat.prototype.formatRange`][formatrange]       | Felipe Balbontín                 | Sathya Gunasekaran       |
|          | [`DateTimeFormat` `dateStyle` & `timeStyle`][datetimeformat] | Zibi Braniecki                   | Zibi Braniecki |                 |

### Stage 1

| :rocket: | Proposal                                                     | Author         | Champion       |
| -------- | ------------------------------------------------------------ | -------------- | -------------- |
|          | [Intl.DisplayNames][proposal-intl-displaynames]              | Frank Tang     | Frank Tang     |


:rocket: means the champion thinks it's ready to advance but has not yet presented to the committee.

### Contributing new proposals

Please see [Contributing to ECMAScript](https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md) for the most up-to-date information on contributing proposals to this standard.

### Onboarding existing proposals

Proposals that are Stage 1 and above must be transferred to [the TC39 GitHub organization](https://github.com/tc39) for discoverability and archival purposes. To onboard a proposal that lives outside the TC39 organization:

1. Transfer your repository to the [@tc39-transfer](http://github.com/tc39-transfer) organization
  - if you are a TC39 delegate, but not an admin in that organization, please contact [@LJHarb](https://github.com/ljharb)
2. [@bterlson](https://github.com/bterlson), [@gesa](https://github.com/gesa), or [@codehag](https://github.com/codehag) will transfer your repository to the TC39 organization the next chance they get.

Note that as part of the onboarding process your repository name may be normalized. Don't worry, repo redirects will continue to work **as long as** you never create a fork, or a new repository, with the same name - although Github Pages redirects will be broken (please update your links!).

[intl-segmenter]: https://github.com/tc39/proposal-intl-segmenter
[intl.listformat]: https://github.com/zbraniecki/proposal-intl-list-format
[intl.relativetimeformat]: https://github.com/tc39/proposal-intl-relative-time
[datetimeformat]: https://github.com/zbraniecki/proposal-ecma402-datetime-style
[intl.locale]: https://github.com/zbraniecki/proposal-intl-locale
[formatrange]: https://github.com/fabalbon/proposal-intl-DateTimeFormat-formatRange
[numberformat]: https://github.com/sffc/proposal-unified-intl-numberformat
[proposal-intl-displaynames]: https://github.com/tc39-transfer/proposal-intl-displaynames
