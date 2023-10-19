const fs = require('fs');
const util = require('util');
let readFilePromise = util.promisify(fs.readFile);

console.log("Before");
async function readFile()
{
     let data = await readFilePromise('./13_node/data.txt');
     console.log("Data ", data.toString());
}
readFile();
console.log("End");