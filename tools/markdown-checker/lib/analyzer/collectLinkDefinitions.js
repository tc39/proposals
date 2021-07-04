/**
 * @param {Object} AST
 * @returns {Object} - collected link definitions
 */
function collectLinkDefinitions(AST) {
  const definitions = {};
  AST.children.forEach(node => {
    node.type === 'definition' && addLinkIntoDefintions(definitions, node);
  });
  return definitions;
}

/**
 *
 * @param {Object} definitions
 * @param {Object} node
 * @returns {Object}
 */
function addLinkIntoDefintions(definitions, node) {
  const { label, url } = node;
  definitions[label] = url;
  return {
    label,
    url
  };
}

module.exports = { collectLinkDefinitions, addLinkIntoDefintions };
