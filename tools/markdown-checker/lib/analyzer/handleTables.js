const {
  CELL, TABLE, ROW, LINK, TEXT, HTML,
} = require('../../enums');
const globalData = require('../data');

const { tableHead } = globalData;
const { iterateAndExtractTextFromHTML, handleLinkReference } = require('../utils');

/**
 *
 * @param {Array} headNodes
 * @return {handleTables}
 */
const createHead = (headNodes) => {
  headNodes.forEach(({ type, children }) => {
    if (type !== CELL) return null;
    const head = iterateAndExtractTextFromHTML(children);
    tableHead.push(head);
    return tableHead;
  });
  return tableHead;
};

const handleCellLinkReference = (cell, idx) => {
  const relatedHead = tableHead[idx];
  return {
    [relatedHead]: handleLinkReference(cell, globalData.linkDefinitions),
  };
};

/**
 *
 * @param {Object} result
 * @param {String} head
 * @return {boolean}
 */
const checkNodeHasPropertyAndLink = (result, head) => result && result[head] && typeof result[head].url !== 'undefined';

/**
 *
 * @param {Object} cell
 * @param {number} idx
 * @param {Object} result
 * @return {Object}
 */
const handleCellTextHTML = (cell, idx, result) => {
  const relatedHead = tableHead[idx];
  if (checkNodeHasPropertyAndLink(result, relatedHead)) {
    return result;
  }
  const value = result ? `${result[relatedHead]} ${cell.value}` : cell.value;
  return {
    [relatedHead]: value,
  };
};

/**
 * FIXME:
 *
 * from: Change  /  to not coerce  / /  (repo link TBD)
 * to: Change `Number.parseInt`/`parseFloat` to not coerce `null`/`undefined`/`NaN` (repo link TBD)
 *
 * from: Object.freeze + Object.seal syntax
 * to: `Object.freeze` + `Object.seal syntax`
 *
 * from: Math.seededRandoms()
 * to: `Math.seededRandoms()`
 *
 */

const handleCell = (cells, idx) => {
  let result;
  if (cells.length) {
    cells.forEach((cell) => {
      switch (cell.type) {
        case LINK:
          result = handleCellLinkReference(cell, idx);
          return result;
        case TEXT:
          result = handleCellTextHTML(cell, idx, result);
          return result;
        case HTML:
          result = handleCellTextHTML(cell, idx, result);
          return result;
        default:
          return {};
      }
    });
  }
  return result;
};

const handleRows = (row) => {
  let obj = {};
  row.forEach(({ type, children }, idx) => {
    if (type !== CELL) return null;
    const rowLine = handleCell(children, idx);
    obj = { ...obj, ...rowLine };
  });
  return obj;
};

/**
 * @param {Object} table
 * @returns {Array}
 */
const handleTables = ({ align: { length }, type, children }) => {
  const arr = [];
  if (type !== TABLE) return null;
  children.forEach(({ children: tableRow, type: rowType }, idx) => {
    if (rowType !== ROW) return [];
    if (idx === 0) {
      createHead(tableRow);
      return [];
    }
    const row = handleRows(tableRow, length);
    arr.push(row);
    return arr;
  });
  return arr;
};

module.exports = handleTables;
