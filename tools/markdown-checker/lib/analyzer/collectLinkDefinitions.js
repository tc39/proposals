/**
 * @param {Object} AST
 * @returns {Object} - collected link definitions
 */
function collectLinkDefinitions(AST) {
  const definitions = {};
  AST.children.forEach((node) => {
    if (node.type === 'definition') {
      const { label } = node;
      definitions[label] = node.url;
    }
  });
  return definitions;
}

module.exports = collectLinkDefinitions;
