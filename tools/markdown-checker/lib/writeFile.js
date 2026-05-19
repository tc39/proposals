const fs = require('fs');

module.exports = (nameFile, textToWrite) => new Promise((resolve, reject) => fs.writeFile(nameFile, textToWrite, err => (err ? reject(err) : resolve(textToWrite))));
