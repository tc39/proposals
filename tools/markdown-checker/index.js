const readMarkdown = require('./lib/parser/readMarkdown');
const parseToAST = require('./lib/parser/parseToAst');
const globalData = require('./lib/data');
const {
  collectLinkDefinitions,
} = require('./lib/analyzer/collectLinkDefinitions');
const { generateTable } = require('./lib/analyzer/analyzeTable');
const enums = require('./enums.js');

const processStage3 = (stage) => {
  const activeStage = enums[stage];
  // parse stage
  const markdownStage = readMarkdown(activeStage);
  const parsedFile = parseToAST(markdownStage);

  // transform stage
  globalData.linkDefinitions = collectLinkDefinitions(parsedFile);
  const tableStage1 = generateTable(parsedFile);

  // generate stage
};

processStage3('stage1');
