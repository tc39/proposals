/**
 * @todo inspect below and decide
 * @template [https://jsoneditoronline.org/?id=f1ce5803d66149d5bc86d0d53ffb40c0]
 *
 */

const detectTables = require('./detectTables');
const detectHeaders = require('./detectHeaders');
const checkNodeHasChildren = require('./../transformer/nodeChildrenChecker');
/**
 *
 * @param {Object} node - current node of the parsed AST
 * @param {Object} linkDefinitions - represents all of the link shortcuts
 */

function generateTable(node, linkDefinitions) {
  const tables = extractAllTablesFromTree(node);
  const rows = tables && detectHeaders(table);
}

/**
 *
 * @param {Object} node
 * @returns {Array}
 */
function extractAllTablesFromTree(node) {
  if (checkNodeHasChildren(node)) {
    return detectTables(node);
  }
  return [];
}

module.exports = { generateTable, extractAllTablesFromTree };
