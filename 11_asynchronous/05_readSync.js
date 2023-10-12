const fs = require('fs');
let start = new Date();

    const data = fs.readFileSync('hello.txt', 'utf8');
    const data2 = fs.readFileSync('hello2.txt', 'utf8');
    let end = new Date();
    let time = end- start;
    console.log("Time ",time);

