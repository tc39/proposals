const { concatValue, iterateAndConcatValue, handleLinkReference } = require('./utils');
const MockChildrenHTMLNodes = require('../mocks/ChildrenHTMLNodes');
const MockLinkReference = require('../mocks/linkReference');
const MockLinkDefinitions = require('../mocks/linkDefinitions');

describe('testing concatValue', () => {
  test('is returned string with concatenated the given string and node', () => {
    const accumulator = '<br />';
    const node = {
      type: 'text',
      value: 'Last Presented',
    };
    expect(concatValue(accumulator, node)).toBe('<br />Last Presented');
  });
  test('is returned string with concatenating the given multiple objects', () => {
    const accumulator = {
      type: 'html',
      value: '<br />',
    };
    const node = {
      type: 'text',
      value: 'Last Presented',
    };
    expect(concatValue(accumulator, node)).toBe('<br />Last Presented');
  });
});

describe('testing iterateAndConcatValue', () => {
  test("is returned string with concatenating node's children of LinkReferences ", () => {
    const output = 'export v from \\"mod\\"; statements';
    expect(iterateAndConcatValue(MockLinkReference.children)).toBe(output);
  });

  test("is returned string with concatenating node's children of HTML ", () => {
    const output = '<sub>Last Presented</sub> this is</br>next line';
    expect(iterateAndConcatValue(MockChildrenHTMLNodes.children)).toBe(output);
  });

  test('is returned value property of node  ', () => {
    const output = 'Author';
    expect(iterateAndConcatValue([{ type: 'text', value: 'Author' }])).toBe(output);
  });
});

describe('testing handleLinkRefence', () => {
  test("creates url with by comparing linkDefinitions and node's identifier", () => {
    const linkReference = {
      type: 'linkReference',
      identifier: 'export-from',
    };
    const output = {
      url: MockLinkDefinitions[linkReference.identifier],
    };
    expect(handleLinkReference(linkReference, MockLinkDefinitions)).toStrictEqual(output);
  });
});
