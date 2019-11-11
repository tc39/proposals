/**
 *
 * @param {Object} node
 * @returns {Boolean}
 */
function checkNodeHasChildren(node) {
  return !!node.children;
}

module.exports = checkNodeHasChildren;
