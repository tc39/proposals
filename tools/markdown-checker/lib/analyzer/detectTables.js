/**
 * @param {Object} node - Parsed markdown file an AST Object
 * @returns {Array} - contains detected table nodes of the AST   
 */
module.exports = function detectTables(node) {
  let tables = [];
  for (let i = 0; i < node.children.length; i++) {
    const currentNode = node.children[i];
    if (currentNode["type"] && currentNode["type"] === "table") {
      tables.push(currentNode)
    }
  }
  return tables;
};
