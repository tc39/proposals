/**
 * @param {Object} node - Parsed markdown file an AST Object
 * @returns {Array} - contains detected table nodes of the AST
 */
function detectTables(node) {
  return node.children.filter(({ type }) => type === 'table');
};

module.exports = detectTables;
