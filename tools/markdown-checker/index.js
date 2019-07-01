const readMarkdown = require("./lib/parser/readMarkdown");
const parseToAST = require("./lib/parser/parseToAst");
const collectLinkDefinitions = require("./lib/analyzer/collectLinkDefinitions");
const tableAnalyzer = require("./lib/analyzer/analyzeTable");
const config = require("./config.json");

function processStage3({ stage3 } = config) {
  const markdownStage3 = readMarkdown(stage3);
  const parsedFile = parseToAST(markdownStage3);
  const collectedLinkDefinitions = collectLinkDefinitions(parsedFile);
  const tableStage1 = tableAnalyzer(parsedFile, collectedLinkDefinitions);
}

processStage3();
