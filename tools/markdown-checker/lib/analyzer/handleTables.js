const {
  CELL, TABLE, ROW, LINK, TEXT,
} = require('../../enums');
const globalData = require('../data');

const { tableHead, tables } = globalData;
const { iterateAndConcatValue, handleLinkReference, concatValue } = require('../utils');

/**
 *
 * @param {Array} headNodes
 * @return {handleTables}
 */
const createHead = (headNodes) => {
  headNodes.forEach(({ type, children }) => {
    if (type !== CELL) return null;
    tableHead.push(iterateAndConcatValue(children));
    return tableHead;
  });
  return tableHead;
};

const handleCell = (cells, length) => {
  // FIXME: collect only related cells
  if (cells.length) {
    let column = {};
    cells.forEach((cell, idx) => {
      if (cell.type === LINK) {
        const relatedHead = tableHead[idx];
        column[relatedHead] = handleLinkReference(cell, globalData.linkDefinitions);
      } if (cell.type === TEXT) {
        const relatedHead = tableHead[idx];
        column[relatedHead] = cell.value;
      }
      if (idx !== 0 && idx % length === 0) {
        tables.push(column);
        column = {};
      }
    });
  }
  return tables;
};

const handleRows = (row, length) => {
  row.forEach(({ type, children }) => {
    if (type !== CELL) return null;
    return handleCell(children, length);
  });
};

/**
 * @param {Object} table
 * @returns {Object} - collected header template
 */
const handleTables = ({ align: { length }, type, children }) => {
  if (type !== TABLE) return null;
  children.forEach(({ children: tableRow, type: rowType }, idx) => {
    if (rowType !== ROW) return null;
    if (idx === 0) return createHead(tableRow);
    return handleRows(tableRow, length);
  });
};

module.exports = handleTables;
