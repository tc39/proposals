function checkHasTokenizationRererences(node) {
  if (node.length) {
    for (n of node) {
      tokenState = checkPosition(n);
      n.children && checkHasTokenizationRererences(n.children);
    }
    return tokenState;
  }
  node.children && checkHasTokenizationRererences(node.children);
  return tokenState;
}

function checkPosition(node) {
  return (
    !!node.position &&
    !!node.position.start &&
    !!node.position.start.line &&
    !!node.position.start.column &&
    !!node.position.start.offset >= 0 &&
    !!node.position.end &&
    !!node.position.end.line &&
    !!node.position.end.column &&
    !!node.position.end.offset >= 0
  );
}

module.exports = checkHasTokenizationRererences;
