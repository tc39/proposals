const readMarkdown = require('./../../parser/readMarkdown');
const parseToAST = require('./../../parser/parseToAst');
const {
  collectLinkDefinitions,
  addLinkIntoDefintions
} = require('../collectLinkDefinitions');
const definitionNode = require('../../../mocks/definitionNode');

describe('testing collectLinkDefiniton function', () => {
  let parsedMarkdown;
  let allLinkDefinitions;

  beforeAll(() => {
    const markdownFile = readMarkdown('../../mocks/stage3Mock.md');
    parsedMarkdown = parseToAST(markdownFile);
    allLinkDefinitions = collectLinkDefinitions(parsedMarkdown);
  });

  test('function is defined', () => {
    expect(collectLinkDefinitions).toBeDefined();
    expect(typeof collectLinkDefinitions).toBe('function');
  });

  test('definition added into hash', () => {
    const definitions = addLinkIntoDefintions({}, definitionNode);
    const { label, url } = definitions;
    expect(typeof definitions).toBe('object');
    expect(typeof label && typeof url).toBe('string');
    expect(label).toBe('regexp-legacy');
    expect(url).toBe('https://github.com/tc39/proposal-regexp-legacy-features');
  });

  test('link definitions are collected', () => {
    expect(allLinkDefinitions).toBeDefined();
    expect(typeof allLinkDefinitions).toBe('object');
    expect(allLinkDefinitions['buffer-transfer']).toBe(
      'https://github.com/domenic/proposal-arraybuffer-transfer/'
    );
    expect(allLinkDefinitions['private-methods']).toBe(
      'https://github.com/tc39/proposal-private-methods'
    );
  });
});
