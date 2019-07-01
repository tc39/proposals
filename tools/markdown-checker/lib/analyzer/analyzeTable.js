/**
 * @todo inspect below and decide
 * @template [https://jsoneditoronline.org/?id=f1ce5803d66149d5bc86d0d53ffb40c0]
 *
 */

const detectTables = require("./detectTables");
const detectHeader = require("./detectHeaders");

/**
 *
 * @param {Object} node - current node of the parsed AST
 * @param {Object} linkDefinitions - represents all of the link shortcuts
 */

module.exports = function generateTable(node, linkDefinitions) {
  const table = node.children && detectTables(node);
  const rows =
    table && table["children"] && detectHeader(table);
};
