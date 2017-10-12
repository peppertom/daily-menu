const cheerio = require('cheerio');
const he = require('he');

module.exports = {
	name: 'Trafik',
	url: 'https://www.facebook.com/trafikapollo/',
	getMenu: body => {
		const $ = cheerio.load(body);
		const dailyMenu = $('.userContent').filter((i, e) => {
			return e.children.length;
		}).eq(0).find('.text_exposed_root').text();

		return dailyMenu.split(' - ')
			.map(el => he.decode(el));
	}
};
