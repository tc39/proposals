const readMarkdown = require('./lib/parser/readMarkdown');
const parseToAST = require('./lib/parser/parseToAst');
const globalData = require('./lib/data');
const generateJSONFile = require('./lib/writeFile');
const {
  collectLinkDefinitions,
} = require('./lib/analyzer/collectLinkDefinitions');
const { generateTable } = require('./lib/analyzer/analyzeTable');
const enums = require('./enums.js');

const processStage3 = (stage) => {
  /**
   * TODO: handle multiple table in readme.md
   * TODO: handle "Test" columns in stage3
   * TODO: handle different column lengths
   */
  //

  const activeStage = enums[stage];
  // parse stage
  const markdownStage = readMarkdown(activeStage);
  const parsedFile = parseToAST(markdownStage);

  globalData.linkDefinitions = collectLinkDefinitions(parsedFile);
  const table = generateTable(parsedFile);
  // creates JSON file
  const fileName = `${stage}Table.json`;
  generateJSONFile(fileName, JSON.stringify(table))
    .then(_ => console.log(`The ${fileName} has been created!`))
    .catch(err => console.log(`err: ${err}`));
};

processStage3('stage1');
