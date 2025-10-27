const fs = require('fs');
const path = require('path');

/**
 * @param {string} markdownPath - path of the markdown file
 * @returns {string} - source code of the markdown as a string
 */
function readMarkdown(markdownPath) {
  const resolvedPath = path.resolve(__dirname, markdownPath);
  return fs.readFileSync(resolvedPath, 'utf-8');
}

module.exports = readMarkdown;
