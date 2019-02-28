const table = require('./hashTable');
const parsed = require('./parseInput');

let list = parsed('../dataset/a_example.txt');
table.createTable(list)
console.log(table.tags)