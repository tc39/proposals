const readMarkdown = require('./lib/parser/readMarkdown');
const parseToAST = require('./lib/parser/parseToAst');
const {
  collectLinkDefinitions
} = require('./lib/analyzer/collectLinkDefinitions');
const { generateTable } = require('./lib/analyzer/analyzeTable');
const config = require('./config.json');

function processStage3({ stage3 } = config) {
  // parse stage
  const markdownStage3 = readMarkdown(stage3);
  const parsedFile = parseToAST(markdownStage3);

  // transform stage
  const collectedLinkDefinitions = collectLinkDefinitions(parsedFile);
  const tableStage1 = generateTable(parsedFile, collectedLinkDefinitions);

  // generate stage
}

processStage3();
