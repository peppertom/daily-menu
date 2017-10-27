const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Trafik',
	url: 'https://www.facebook.com/pg/trafikapollo/posts/?ref=page_internal',
	getMenu: body => {
		const $ = cheerio.load(body);
		const separators = ['<br>', '<p>', '</span>', ' - '];
		const dailyMenu = $('.userContent')
			.filter((i, e) => e.children.length)
			.filter((i, e) => $(e).text().indexOf(' mai ebéd') !== -1 || $(e).text().indexOf(' mai menü ') !== -1)
			.eq(0)
			.find('.text_exposed_root')
			.html();

		return dailyMenu
			.split(new RegExp(separators.join('|'), 'g'))
			.map(el => el.trim())
			.map(el => striptags(el))
			.map(el => he.decode(el))
			.map(el => el.replace(/Trafik/g, ''))
			.map(el => el.replace(/mai ebéd!/g, ''))
			.map(el => el.replace(/mai menü!/g, ''))
			.map(el => el.replace(/Jó étvágyat!/g, ''))
			.map(el => el.replace(/Továbbiak/g, ''))
			.map(el => el.replace(/\.\.\./g, ''));
	}
};
