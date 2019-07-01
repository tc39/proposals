/**
 * @param {Object} AST
 * @returns {Object} - collected link definitions
 */
module.exports = function(AST) {
    let definitions = {};
    AST.children.forEach(node => {
      if (node.type === "definition") {
        let label = node.label;
        definitions[label] = node.url;
      }
    });
    return definitions;
  };
  