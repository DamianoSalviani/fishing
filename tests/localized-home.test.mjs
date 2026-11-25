import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const domain = 'https://www.bigcatchfishingcharter.com';
const pages = [
	{
		file: 'dist/index.html',
		lang: 'en',
		path: '/',
		title: 'Big Catch Fishing Charter in Rome | Fishing Trips',
		hero: 'Set off on an unforgettable fishing adventure in Rome.',
		faq: 'Is Rome a good place for fishing?',
		trip: 'BIG GAME DRIFTING BLUEFIN TUNA',
		restaurantHeading: "From Sea to Table with L'Antico Molo",
		restaurantDescription: "Your fishing day doesn't end when you return to the harbor: thanks to our partnership with L'Antico Molo, every guest receives a 10% discount at the restaurant and the opportunity to bring their catch of the day (in compliance with current regulations) to have it cooked on the spot.",
	},
	{
		file: 'dist/it/index.html',
		lang: 'it',
		path: '/it/',
		title: 'Charter Pesca Roma e Fiumicino | Big Catch Fishing Charters',
		hero: "Parti per un'indimenticabile avventura di pesca a Roma.",
		faq: 'Roma è un posto adatto alla pesca?',
		trip: 'BIG GAME DRIFTING TONNO ROSSO',
		restaurantHeading: "Dal mare alla tavola con L'Antico Molo",
		restaurantDescription: "La giornata di pesca non finisce al rientro in porto: grazie alla collaborazione con L'Antico Molo, ogni cliente riceve il 10% di sconto al ristorante e ha la possibilità di portare il pescato del giorno (rispettando le normative vigenti) per farselo cucinare sul posto.",
	},
];

for (const page of pages) {
	test(`${page.path} contains localized HTML and language links`, () => {
		const html = readFileSync(page.file, 'utf8').replaceAll('&#39;', "'");
		assert.ok(html.includes(`<html lang="${page.lang}">`));
		assert.ok(html.includes(`<title>${page.title}</title>`));
		assert.ok(html.includes(page.hero));
		assert.ok(html.includes(page.faq));
		assert.ok(html.includes(page.trip));
		assert.ok(html.includes(page.restaurantHeading));
		assert.ok(html.includes(page.restaurantDescription));
		assert.ok(html.includes('src="/lantico-molo-logo.jpg" alt="'));
		assert.ok(html.indexOf('class="brand-marquee-track') < html.indexOf('id="restaurant-partnership"'));
		assert.ok(html.indexOf('id="restaurant-partnership"') < html.indexOf('id="gallery"'));
		assert.ok(html.includes(`<link rel="canonical" href="${domain}${page.path}">`));
		assert.ok(html.includes(`<link rel="alternate" hreflang="en" href="${domain}/">`));
		assert.ok(html.includes(`<link rel="alternate" hreflang="it" href="${domain}/it/">`));
		assert.match(html, /href="\/" data-lang="en"/);
		assert.match(html, /href="\/it\/" data-lang="it"/);
		assert.ok(html.includes('https://goo.gl/maps/u4prvC1JBiGoRSVHA?g_st=ac'));
	});
}

test('sitemap contains both canonical home pages', () => {
	const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
	for (const { path } of pages) {
		assert.ok(sitemap.includes(`<loc>${domain}${path}</loc>`));
	}
});

test('gallery image alt text is localized without changing the visible caption', () => {
	for (const { file, lang } of pages) {
		const html = readFileSync(file, 'utf8');
		const alt = lang === 'it'
			? 'Spigola tenuta in mano davanti al mare'
			: 'Sea bass held up in front of the sea';
		assert.ok(html.includes(`src="/gallery/spigola.jpg" alt="${alt}"`));
		assert.ok(html.includes('>Spigola</p>'));
		assert.ok(html.includes('alt="Logo Shimano"'));
	}
});

test('both home pages include the FishingBooker widget with localized surrounding text', () => {
	for (const { file, lang } of pages) {
		const html = readFileSync(file, 'utf8');
		assert.ok(html.includes('id="fbkr-widget-231"'));
		assert.ok(html.includes('https://fishingbooker.com/widget/get?charterId=42425&widget=your-rating&unique=231&shadow=true&size=large'));
		assert.ok(html.includes(lang === 'it' ? 'Le nostre recensioni' : 'Our reviews'));
		assert.ok(html.includes(lang === 'it' ? 'Scopri cosa dicono di noi su FishingBooker.' : 'See what people say about us on FishingBooker.'));
	}
});
