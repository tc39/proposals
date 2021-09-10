
const detectTables = require('./detectTables');
const handleTables = require('./handleTables');
const { checkNodeHasChildren } = require('../utils');
/**
 * @todo inspect below and decide
 * @template [https://jsoneditoronline.org/?id=f1ce5803d66149d5bc86d0d53ffb40c0]
 *
 */

/**
 *
 * @param {Object} node
 * @returns {Array}
 */
const extractAllTablesFromTree = (node) => {
  if (checkNodeHasChildren(node)) {
    return detectTables(node);
  }
  return [];
};
/**
 *
 * @param {Object} node - current node of the parsed AST
 * @param {Object} linkDefinitions - represents all of the link shortcuts
 */

const generateTable = (node) => {
  const tables = extractAllTablesFromTree(node);
  if (tables && tables.length > 0) {
    tables.forEach((table) => {
      if (Object.values(table).length > 0) {
        const JSONTables = handleTables(table);
        // TODO: create a row group based on the length
        debugger;
      }
    });
  }
  return [];
};

module.exports = { generateTable, extractAllTablesFromTree };
