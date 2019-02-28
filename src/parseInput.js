const readlineSync = require('read-each-line-sync');

const parse = (filename) => {
	const data = {
		nbOfPics: 0,
		pics: [],
	};
	let i = 0;
	readlineSync(filename, (line) => {
		const arr = line.split(' ');
		const obj = {
			id: i - 1,
			direction: '',
			tags: []
		};
		if (i !== 0) {
			arr.forEach((elem, index) => {
				if (index === 0) {
					obj.direction = elem;
				}
				if (index > 1) {
					obj.tags.push(elem);
				}
			});
			data.pics.push(obj);
		} else { data.nbOfPics = parseInt(arr[0]) }
		i++;
	});
	return data;
}

console.log(parse('../dataset/a_example.txt'));
module.exports = parse;
