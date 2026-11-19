import type { Language } from './i18n';

const galleryAlt: Record<string, Record<Language, string>> = {
	'20241122_145642_22654915-EDCC-409F-B993-EEAF1B1E9D09.JPG': { it: 'Pesce sul ponte della barca', en: 'Fish on the boat deck' },
	'20250808_124229(0).jpg': { it: 'Tonno sul ponte della barca', en: 'Tuna on the boat deck' },
	'20250907_113413.jpg': { it: 'Pesce sul ponte accanto a una borsa', en: 'Fish on the deck next to a bag' },
	'20251009_112310.jpg': { it: 'Pescatore a bordo con un pesce', en: 'Angler holding a fish on board' },
	'20251220_084739.jpg': { it: 'Polpo appena pescato', en: 'Freshly caught octopus' },
	'20260521_121323.jpg': { it: 'Pesce luna sulla superficie del mare', en: 'Ocean sunfish at the surface' },
	'20260525_202117.jpg': { it: 'Pasto a bordo davanti al tramonto sul mare', en: 'Meal on board at sunset' },
	'20260623_115243.jpg': { it: 'Canna da pesca e mulinello sul mare calmo', en: 'Fishing rod and reel over calm water' },
	'20260710_204424.jpg': { it: 'Tramonto sul mare visto dalla barca', en: 'Sunset over the sea seen from the boat' },
	'20260714_103933.jpg': { it: 'Schermo dell’ecoscandaglio a bordo', en: 'Fish finder screen on board' },
	'20260729_200656.jpg': { it: 'Barche in porto al tramonto', en: 'Boats in the harbor at sunset' },
	'20260801_142920.jpg': { it: 'Schermata dell’ecoscandaglio Garmin', en: 'Garmin fish finder display' },
	'20260801_150537(0).jpg': { it: 'Gruppo di pescatori a bordo con un pesce', en: 'Group of anglers holding a fish on board' },
	'20260827_112052.jpg': { it: 'Schermata dell’ecoscandaglio durante la pesca', en: 'Fish finder display during a fishing trip' },
	'20260906_104016.jpg': { it: 'Canne da pesca sulla poppa della barca', en: 'Fishing rods at the stern of the boat' },
	'20260913_131058.jpg': { it: 'Mulinello e canna da pesca davanti al mare', en: 'Fishing rod and reel overlooking the sea' },
	'20261003_124132.jpg': { it: 'Pesci pescati sul ponte della barca', en: 'Fish caught on the boat deck' },
	'20261005_174048.jpg': { it: 'Pesci raccolti a bordo', en: 'Fish caught and collected on board' },
	'IMG-20250705-WA0083.jpg': { it: 'Famiglia a bordo con il pescato', en: 'Family on board with their catch' },
	'IMG-20251129-WA0165.jpg': { it: 'Polpi pescati in una vasca a bordo', en: 'Caught octopuses in a container on board' },
	'IMG-20251129-WA0172.jpg': { it: 'Polpi pescati sul ponte della barca', en: 'Caught octopuses on the boat deck' },
	'IMG-20260408-WA0073.jpg': { it: 'Due pesci sul ponte della barca', en: 'Two fish on the boat deck' },
	'IMG-20260408-WA0075.jpg': { it: 'Mulinelli da pesca dorati', en: 'Gold fishing reels' },
	'IMG-20260408-WA0076.jpg': { it: 'Pesce sul ponte della barca', en: 'Fish on the boat deck' },
	'IMG-20260408-WA0077.jpg': { it: 'Canna da pesca piegata verso il mare', en: 'Fishing rod bent over the water' },
	'IMG-20260408-WA0079.jpg': { it: 'Pesce sul ponte accanto all’attrezzatura da pesca', en: 'Fish on the deck next to fishing equipment' },
	'IMG-20260408-WA0080.jpg': { it: 'Scia della barca al tramonto', en: 'Boat wake at sunset' },
	'IMG-20260408-WA0081.jpg': { it: 'Pesce sul ponte della barca', en: 'Fish on the boat deck' },
	'IMG-20260408-WA0082.jpg': { it: 'Due canne da pesca sulla poppa', en: 'Two fishing rods at the stern' },
	'IMG-20260408-WA0083.jpg': { it: 'Primo piano di un mulinello da pesca sul mare', en: 'Close-up of a fishing reel at sea' },
	'IMG-20260408-WA0087.jpg': { it: 'Pesci a bordo accanto a una cima blu', en: 'Fish on board next to a blue rope' },
	'IMG-20260408-WA0091.jpg': { it: 'Pesce sul ponte accanto a una borsa', en: 'Fish on the deck next to a bag' },
	'IMG-20260408-WA0096.jpg': { it: 'Dettaglio del dorso di un pesce', en: 'Close-up of a fish’s back' },
	'IMG-20260408-WA0097.jpg': { it: 'Dettaglio della coda di un pesce sul ponte', en: 'Close-up of a fish’s tail on the deck' },
	'IMG-20260408-WA0098.jpg': { it: 'Canna da pesca piegata sopra il mare', en: 'Fishing rod bent over the sea' },
	'IMG-20260408-WA0099.jpg': { it: 'Pesce sul ponte della barca', en: 'Fish on the boat deck' },
	'IMG-20261015-WA0000.jpeg': { it: 'Vista del mare dalla barca', en: 'Sea view from the boat' },
	'spigola.jpg': { it: 'Spigola tenuta in mano davanti al mare', en: 'Sea bass held up in front of the sea' },
	'tuna.jpg': { it: 'Tonno sul ponte della barca', en: 'Tuna on the boat deck' },
};

const brandNames: Record<string, string> = {
	'108-m-decoy-300x225.png': 'Decoy',
	'160-m-smith-ltd.-300x225.png': 'Smith Ltd.',
	'Screenshot 2025-08-17 alle 18.46.59.png': 'Black Bart',
	'Screenshot 2026-10-25 alle 11.55.48.png': 'Fin-Nor',
	'Screenshot 2026-10-25 alle 12.14.49.png': 'Mustad',
	'alutecnos.PNG': 'Alutecnos',
	'ande-logo.webp': 'Ande',
	'download.png': 'Shimano',
	'images.png': 'Pulsator',
	'nomad_design_tackle_logo.jpg': 'Nomad Design',
	'seekerlogo-2-1.png': 'Seeker',
	'sunline.PNG': 'Sunline',
};

export function getImageAlt(group: 'gallery' | 'brands', name: string, lang: Language, fallback: string): string {
	if (group === 'gallery') return galleryAlt[name]?.[lang] ?? fallback;
	const brand = brandNames[name];
	return brand ? `Logo ${brand}` : fallback;
}
