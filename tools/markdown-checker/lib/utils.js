/**
 * @param {Array} node
 * @param {function} callBackLogic
 */

const traverseChildren = (node, callBackLogic) => {
  node.forEach((n) => {
    callBackLogic(n);
    if (n.children) {
      traverseChildren(n.children);
    }
  });

  if (callBackLogic && typeof callBackLogic === 'function') callBackLogic(node);
};

/**
 *
 * @param {Object} node
 * @returns {Boolean}
 */
const checkNodeHasChildren = node => !!node.children;

/**
 *
 * @param {String | Object} acc
 * @param node {Object}
 * @return {Buffer | any[] | string}
 */
const concatValue = (acc = '', node) => {
  if (typeof acc === 'object') return acc.value + node.value;
  return acc + node.value;
};

const iterateAndConcatValue = (children) => {
  const [firstItem] = children;
  if (children.length <= 1) return firstItem.value;
  return children.reduce((acc, curr) => concatValue(acc, curr));
};

const handleLinkReference = ({ identifier, children }, linkDefinitions) => ({
  text: iterateAndConcatValue(children),
  url: linkDefinitions[identifier],
});

module.exports = {
  checkNodeHasChildren,
  traverseChildren,
  concatValue,
  iterateAndConcatValue,
  handleLinkReference,
};
