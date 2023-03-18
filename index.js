const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('./kepler_data.csv')
	.pipe(
		parse({
			comment: '#',
			columns: true,
		})
	)
	.on('data', (obj) => {
		results.push(obj);
	})
	.on('error', (error) => console.log(error))
	.on('end', () => {
		console.log(results);
		console.log('finished');
	});
