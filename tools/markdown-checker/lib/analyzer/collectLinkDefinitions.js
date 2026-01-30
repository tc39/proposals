const { DEFINITION } = require('./../../enums.js');

/**
 *
 * @param {Object} definitions
 * @param {Object} node
 * @returns {Object}
 */
function addLinkIntoDefinitions(definitions, node) {
  const { label, url } = node;
  // eslint-disable-next-line no-param-reassign
  definitions[label] = url;
  return {
    label,
    url,
  };
}

/**
 * @param {Object} AST
 * @returns {Object} - collected link definitions
 */
function collectLinkDefinitions(AST) {
  const definitions = {};
  AST.children.forEach((node) => {
    // eslint-disable-next-line no-unused-expressions
    node.type === DEFINITION && addLinkIntoDefinitions(definitions, node);
  });
  return definitions;
}

module.exports = { collectLinkDefinitions };
