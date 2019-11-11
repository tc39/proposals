const detectTables = require('../detectTables');
const detectHeaders = require('../detectHeaders');
const parsedMarkdownTree = require('../../../mocks/parsedMarkdownTree');

const markdownTables = detectTables(parsedMarkdownTree);
const [child] = markdownTables;

describe('testing detectTables function', () => {
  test('is defined', () => {
    expect(detectTables).toBeDefined();
  });
  test('length is matched', () => {
    expect(markdownTables.length).toEqual(2);
  });
  test('has correct size of thead', () => {
      expect(child.align.length).toBe(5);
  })
  test('is returned table', () => {
    expect(child.type).toBe('table');
  });
  test('has row and cell children', () => {
    const [rowChild] = child.children;
    expect(rowChild.type).toBe('tableRow');

    const [cellChild] = rowChild.children;
    expect(cellChild.type).toBe('tableCell');
  });
});

describe('testing detectHeaders function', () => {
  let rowChild;
  beforeAll(() => {
    [rowChild] = child.children;
  });
  test('is defined', ()=>{
    expect(detectHeaders).toBeDefined();
  })
  test('is defined', ()=>{
    rowChild;
  })
})
