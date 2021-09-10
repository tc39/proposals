const {
  CELL, TABLE, ROW, LINK, TEXT,
} = require('../../enums');
const globalData = require('../data');

const { tableHead, tables } = globalData;
const { iterateAndConcatValue, handleLinkReference } = require('../utils');

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

const handleCellLinkReference = (cell, idx) => {
  const relatedHead = tableHead[idx];
  return {
    [relatedHead]: handleLinkReference(cell, globalData.linkDefinitions),
  };
};

const handleCellText = (cell, idx) => {
  const relatedHead = tableHead[idx];
  return {
    [relatedHead]: cell.value,
  };
};

const handleCell = (cells, idx) => {
  // FIXME: collect only related cells
  let result;
  if (cells.length) {
    cells.forEach((cell) => {
      switch (cell.type) {
        case LINK:
          result = handleCellLinkReference(cell, idx);
          return result;
        case TEXT:
          result = handleCellText(cell, idx);
          return result;
        default:
          return {};
      }
    });
  }
  return result;
};

const handleRows = (row) => {
  row.forEach(({ type, children }, idx) => {
    if (type !== CELL) return null;
    const rowLine = handleCell(children, idx);
    tables.push(rowLine);
  });
  return tables;
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
    handleRows(tableRow, length);
  });
  return [...tables];
};

module.exports = handleTables;
