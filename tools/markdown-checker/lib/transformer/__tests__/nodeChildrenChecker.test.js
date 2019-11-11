const nodeChildrenChecker = require('../nodeChildrenChecker');

const tree = {
    children:[
    ]
};

const emptyTree = {}

describe('testing nodeChildrenChecker function', () => {
    test('is defined', () => {
       expect(nodeChildrenChecker).toBeDefined();        
    });
    test('has children', () => {
        expect(nodeChildrenChecker(tree)).toBe(true);
    });
    test('has not any children', () => {
        expect(nodeChildrenChecker(emptyTree)).toBe(false);
    });
})