const unified = require("unified");
const markdown = require("remark-parse");

/**
 * @param {string} file - file path
 * @returns {Object} - returns parsed markdown file as an AST 
 */
module.exports = function(file) {
  return unified()
    .use(markdown)
    .parse(file);
};