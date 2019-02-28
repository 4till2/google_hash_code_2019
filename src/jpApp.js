const parse = require('./parseInput');
const interestMod = require('./interestFactor');
const fs = require('fs')

info = parse('./dataset/a_example.txt');

interestRes = interestMod.getAllInterestFactors(info);
fs.writeFileSync('./interestFactors/a_example_interest.json', JSON.stringify(interestRes));