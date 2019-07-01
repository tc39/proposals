const readMarkdown = require("./../readMarkdown");
const mock = require("../../mocks/mock");
const config = require("./../../../config.json");

const sourceCode = readMarkdown(config["stage3"]);
describe("testing parser", () => {
  test("should be defined ", () => {
    expect(sourceCode).toBeDefined();
  });
  test("result should be matched to given mock AST", () => {
    expect(sourceCode).toEqual(mock);
  });
});
