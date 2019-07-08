/**
 * @param {Object} Node
 * @param {function} callBackLogic
 */

module.exports = function traverseChildren(node, callBackLogic) {
  node.forEach((n) => {
    callBackLogic();
    if (n.children) {
      traverseChildren(n);
    }
  });

  callBackLogic && callBackLogic(node);
};
