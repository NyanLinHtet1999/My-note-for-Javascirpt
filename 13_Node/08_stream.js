const fs = require("fs");

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = fs.createReadStream('./13_Node/hello.txt', {encoding: 'utf8'});
logChunks(readable);