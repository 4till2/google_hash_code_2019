const fs = require('fs');

/*
** @param
{
	nbOfSlides: Int,
	slides: [
		{
			ids: []
		}
	]
}
*/

const createFormat = (data) => {
	const logger = fs.createWriteStream('result.txt', {
		flags: 'a'
	});
	logger.write(data.nbOfSlides.toString().concat('\n'));
	data.slides.forEach((slide) => {
		logger.write(slide.ids.join(' ').concat('\n'));
	});
}

module.exports = createFormat;
