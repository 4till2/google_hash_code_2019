const parse = require('./parseInput');
const interestMod = require('./interestFactor');
const fs = require('fs')

info = parse('./dataset/b_lovely_landscapes.txt');
console.log('Finished Parsing input');

interestRes = interestMod.getAllInterestFactors(info);
console.log('Finished Calculating the interests');

fs.writeFileSync('./interestFactors/b_lovely_landscapes_interest.json', JSON.stringify(interestRes));
console.log('Finished saving the json obj');