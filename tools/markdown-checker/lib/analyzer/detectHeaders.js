const { traverseChildren } = require('./../transformer/traverser');
/**
 * @param {Object} tableRow
 * @returns {Object} - collected header template
 */
module.exports = function detectHeaders(tableRow) {
  const cellSize = tableRow.align.length;
  const [headerNode] = tableRow.children;
  // create header template here
};
