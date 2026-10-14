const readMarkdown = require('../readMarkdown');
const {stage3} = require('../../../enums.js');
const parseToAST = require('./../parseToAst');
const checkHasTokenizationRererences = require('../__tests__/parserTokenTester');
const sourceCode = readMarkdown(stage3);

describe('testing path resolver and reader', () => {
  test('is defined', () => {
    expect(sourceCode).toBeDefined();
  });

  test('is resolved and read as a string', () => {
    expect(typeof sourceCode).toBe('string');
  });
});

describe('testing parser and crated AST', () => {
  const parsedFile = parseToAST(sourceCode);

  test('is defined', () => {
    expect(parsedFile).toBeDefined();
  });

  test('parsed file is an object', () => {
    expect(typeof parsedFile).toBe('object');
  });

  test('root node has tokenization references', () => {
    expect(
      parsedFile.position &&
        parsedFile.position.start &&
        parsedFile.position.start.line &&
        parsedFile.position.start.column &&
        parsedFile.position.start.offset &&
        parsedFile.position.end &&
        parsedFile.position.end.line &&
        parsedFile.position.end.column &&
        parsedFile.position.end.offset
    ).toBeDefined();
  });

  test('child nodes of the tree are created ', () => {
    expect(parsedFile.children).toBeDefined();
    expect(parsedFile.children.length).toBeDefined();
  });
});

describe('testing AST children nodes', () => {
  const parsedFile = parseToAST(sourceCode);

  test('all nodes have tokenization references', () => {
    const { children } = parsedFile;
    expect(checkHasTokenizationRererences(children)).not.toBe(false);
  });
});
