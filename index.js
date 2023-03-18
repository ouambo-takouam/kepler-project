const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('./kepler_data.csv') // eventEmitter
	.on('data', (chunk) => {
		results.push(chunk);
		console.log(chunk);
	})
	.on('error', (error) => console.log(error))
	.on('end', () => {
		console.log('finished');
	});
