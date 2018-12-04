const { join } = require('path');
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

async function getInput(basePath) {
  const file = join(basePath, 'input.txt');
  const data = await readFileAsync(file, 'utf8');
  return data;
}

module.exports = { getInput };
