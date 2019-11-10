const detectTables = require('./../detectTables');
const parsedMarkdownTree = require('./../../../mocks/parsedMarkdownTree');

describe('testing detectTables function', () => {
  let markdownTables;
  let child;
  beforeAll(() => {
    markdownTables = detectTables(parsedMarkdownTree);
    [child] = markdownTables;
  });
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
