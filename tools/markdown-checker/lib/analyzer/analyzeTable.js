
const detectTables = require('./detectTables');
const handleTables = require('./handleTables');
const { checkNodeHasChildren } = require('../utils');

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
  let JSONTables = [];
  if (tables && tables.length > 0) {
    tables.forEach((table) => {
      if (Object.values(table).length > 0) {
        JSONTables = handleTables(table);
      }
    });
  }
  return JSONTables;
};

module.exports = { generateTable, extractAllTablesFromTree };
