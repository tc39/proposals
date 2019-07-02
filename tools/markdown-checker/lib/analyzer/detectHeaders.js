const traverseChildren = require("./../transformer/traverser").traverseChildren;
/**
 * @param {Object} tableRow
 * @returns {Object} - collected header template 
 */
module.exports = function detectHeaders(tableRow) {
  let cellSize = tableRow.align.length;
  let [headerNode] =  tableRow.children;
  //create header template here
};
