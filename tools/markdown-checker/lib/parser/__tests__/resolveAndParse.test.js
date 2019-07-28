const readMarkdown = require("../readMarkdown");
const config = require("./../../../config.json");
const parseToAST = require("./../parseToAst");

const sourceCode = readMarkdown(config.stage3);

function checkHasTokenizationRererences(node) {
  if(node.length){
    for(n of node){
      tokenState = checkPosition(n);
      n.children && checkHasTokenizationRererences(n.children);
    }
    return tokenState;
  }
  node.children && checkHasTokenizationRererences(node.children);
  return tokenState;
}

function checkPosition(node) {
  return (
    !!node.position &&
    !!node.position.start &&
    !!node.position.start.line &&
    !!node.position.start.column &&
    !!node.position.start.offset >= 0 &&
    !!node.position.end &&
    !!node.position.end.line &&
    !!node.position.end.column &&
    !!node.position.end.offset >= 0
  );
}

describe("testing path resolver and reader", () => {
  test("is defined", () => {
    expect(sourceCode).toBeDefined();
  });

  test("is resolved and read as a string", () => {
    expect(typeof sourceCode).toBe("string");
  });
});

describe("testing parser and crated AST", () => {
  const parsedFile = parseToAST(sourceCode);

  test("is defined", () => {
    expect(parsedFile).toBeDefined();
  });

  test("parsed file is an object", () => {
    expect(typeof parsedFile).toBe("object");
  });

  test("root node has tokenization references", () => {
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

  test("child nodes of the tree are created ", () => {
    expect(parsedFile.children).toBeDefined();
    expect(parsedFile.children.length).toBeDefined();
  });
});

describe("testing AST children nodes", () => {
  const parsedFile = parseToAST(sourceCode);

  test("all nodes have tokenization references", () => {
    const { children } = parsedFile;
    debugger;
    expect(checkHasTokenizationRererences(children)).not.toBe(false);
  });
});
