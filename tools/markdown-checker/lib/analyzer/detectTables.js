/**
 * @param {Object} node - Parsed markdown file an AST Object
 * @returns {Array} - contains detected table nodes of the AST
 */
module.exports = function detectTables(node) {
  return node.children.filter(({ type }) => type === 'table');
};
