from pathlib import Path
import re
import subprocess

files = [
    "src/utils/i18n.ts", "src/pages/index.astro", "src/layouts/Layout.astro",
    "src/components/Header.astro", "src/components/Footer.astro",
]

revision = subprocess.check_output(
    ["git", "rev-parse", "HEAD"], text=True
).strip()

if revision != "a996690a4e3ce721db7fbb094e3d24e5189532fa":
    raise SystemExit(
        "Versione del repository diversa da quella prevista; nessuna modifica applicata."
    )

if subprocess.check_output(
    ["git", "status", "--porcelain", "--", *files, "src/pages/en"], text=True
).strip():
    raise SystemExit(
        "Ci sono modifiche preesistenti nei file interessati; nessuna modifica applicata."
    )

data = {name: Path(name).read_text(encoding="utf-8") for name in files}


def change(name, old, new):
    if data[name].count(old) != 1:
        raise SystemExit(
            f"Testo non trovato o ambiguo in {name}; nessuna modifica applicata."
        )
    data[name] = data[name].replace(old, new, 1)


def localize(name):
    pattern = r'(data-i18n="([^"]+)"[^>]*>)([^<{}]*)'
    data[name] = re.sub(
        pattern,
        lambda m: m.group(1) + "{t[" + repr(m.group(2)) + "]}",
        data[name],
    )


i18n, home, layout, header, footer = files

change(i18n, "const translations: Record<", "export const translations: Record<")
change(i18n, "const tripTranslations: Record<", "export const tripTranslations: Record<")

change(
    home,
    "import path from 'node:path';",
    "import path from 'node:path';\n"
    "import { translations, tripTranslations } from '../utils/i18n';",
)

change(home, "const imageExtensions =", """const lang = Astro.url.pathname === '/en' || Astro.url.pathname === '/en/' ? 'en' : 'it';
const t = translations[lang];

const imageExtensions =""")

change(
    home,
    "const tripsWithSchemes = trips.map((trip, i) => ({ ...trip, s: cardSchemes[i % cardSchemes.length] }));",
    """const tripsWithSchemes = trips.map((trip, i) => ({
  ...trip,
  ...tripTranslations[trip.id][lang],
  features: trip.features.map((_, index) => t[`trips.features.${index}`]),
  pricing: lang === 'it' ? trip.pricing.replaceAll('/group', '/gruppo') : trip.pricing,
  s: cardSchemes[i % cardSchemes.length]
}));""",
)

change(
    home,
    '<Layout title="Charter Pesca Roma e Fiumicino | Big Catch Fishing Charters | Pesca Tonno, Traina, Drifting">',
    "<Layout title={t['page.title.home']} description={lang === 'en' ? t['hero.description'].split('. ')[0] + '.' : undefined}>",
)

change(
    home,
    'aria-label={`Open details for ${trip.title}`}',
    "aria-label={`${lang === 'it' ? 'Apri i dettagli di' : 'Open details for'} ${trip.title}`}",
)
change(home, 'src={trip.image} alt={trip.title}', 'src={`/${trip.image}`} alt={trip.title}')
change(home, '{item.question}</h3>', "{t[`faq.${index}.question`] ?? item.question}</h3>")
change(home, '{item.answer}</p>', "{t[`faq.${index}.answer`] ?? item.answer}</p>")
localize(home)

change(
    layout,
    "import Footer from '../components/Footer.astro'",
    "import Footer from '../components/Footer.astro'\n"
    "import { translations } from '../utils/i18n'",
)

change(layout, "interface Props {", """const isEnglishHome = Astro.url.pathname === '/en' || Astro.url.pathname === '/en/';
const isHome = Astro.url.pathname === '/' || isEnglishHome;
const lang = isEnglishHome ? 'en' : 'it';
const t = translations[lang];

interface Props {""")

change(layout, '<html lang="it">', '<html lang={lang}>')
change(layout, '<link rel="canonical" href={canonicalURL} />', """<link rel="canonical" href={canonicalURL} />
		{isHome && <>
			<link rel="alternate" hreflang="it" href={new URL('/', siteUrl).href} />
			<link rel="alternate" hreflang="en" href={new URL('/en/', siteUrl).href} />
		</>}""")

change(
    layout,
    '<meta property="og:locale" content="it_IT" />',
    '<meta property="og:locale" content={isEnglishHome ? \'en_GB\' : \'it_IT\'} />',
)
change(
    layout,
    '<meta property="og:locale:alternate" content="en_GB" />',
    '<meta property="og:locale:alternate" content={isEnglishHome ? \'it_IT\' : \'en_GB\'} />',
)
localize(layout)

change(header, "const menuItems = [", """import { translations } from '../utils/i18n';
const isEnglishHome = Astro.url.pathname === '/en' || Astro.url.pathname === '/en/';
const isHome = Astro.url.pathname === '/' || isEnglishHome;
const lang = isEnglishHome ? 'en' : 'it';
const t = translations[lang];
const homePath = isEnglishHome ? '/en/' : '/';
const menuItems = [""")

for key, label, fragment in [
    ("home", "Home", ""),
    ("trips", "Trips", "trips"),
    ("vessel", "Vessel", "vessel"),
    ("faq", "FAQ", "faq"),
    ("gallery", "Gallery", "gallery"),
    ("contact", "Contact", "contact"),
]:
    change(
        header,
        f"{{ key: '{key}', label: '{label}', href: '/#{fragment}' }}",
        f"{{ key: '{key}', label: t.{key}, href: `${{homePath}}#{fragment}` }}",
    )

change(
    header,
    'aria-label="Apri menu" data-i18n-aria="menu.open"',
    'aria-label={t[\'menu.open\']} data-i18n-aria="menu.open"',
)
change(
    header,
    '<a href="/" class="flex items-center gap-3">',
    '<a href={homePath} class="flex items-center gap-3">',
)

switch_start = (
    '\t\t\t<div class="inline-flex items-center rounded-full border-2 '
    'border-cyan-200 bg-cyan-50 p-1" id="lang-switcher"'
)

if data[header].count(switch_start) != 1:
    raise SystemExit("Selettore lingua non trovato; nessuna modifica applicata.")

start = data[header].index(switch_start)
end = data[header].index('\n\t\t\t</div>', start) + len('\n\t\t\t</div>')
old_switch = data[header][start:end]

new_switch = """			{isHome ? (
			<div class="inline-flex items-center rounded-full border-2 border-cyan-200 bg-cyan-50 p-1" id="lang-switcher" role="group" aria-label={t['language.select']} data-i18n-aria="language.select">
				<a href="/en/" data-home-lang="en" aria-label="English" aria-current={isEnglishHome ? 'page' : undefined} class:list={['rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ease-out', isEnglishHome ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-400/30 hover:text-white' : 'text-cyan-700 hover:text-cyan-900']}>EN</a>
				<a href="/" data-home-lang="it" aria-label="Italiano" aria-current={!isEnglishHome ? 'page' : undefined} class:list={['rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ease-out', !isEnglishHome ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-400/30 hover:text-white' : 'text-cyan-700 hover:text-cyan-900']}>IT</a>
			</div>
			) : (
""" + old_switch + "\n\t\t\t)}"

change(header, old_switch, new_switch)

change(
    header,
    "const initialLang = applyLanguage(savedLang === 'it' ? 'it' : 'en');",
    """const isItalianHome = location.pathname === '/';
	const isEnglishHome = location.pathname === '/en' || location.pathname === '/en/';
	const initialLang = applyLanguage(isItalianHome ? 'it' : isEnglishHome ? 'en' : savedLang === 'it' ? 'it' : 'en');""",
)

change(header, "setLangButtonState(initialLang);", """setLangButtonState(initialLang);
	document.querySelectorAll<HTMLAnchorElement>('[data-home-lang]').forEach((link) => {
		link.addEventListener('click', () => {
			if (link.dataset.homeLang) localStorage.setItem('lang', link.dataset.homeLang);
		});
	});""")

change(footer, "const year = new Date().getFullYear();", """import { translations } from '../utils/i18n';
const year = new Date().getFullYear();
const isEnglishHome = Astro.url.pathname === '/en' || Astro.url.pathname === '/en/';
const t = translations[isEnglishHome ? 'en' : 'it'];
const homePath = isEnglishHome ? '/en/' : '/';""")

for fragment in ["", "trips", "vessel", "faq", "gallery", "contact"]:
    change(footer, f'href="/#{fragment}"', f'href={{`${{homePath}}#{fragment}`}}')

localize(footer)

for name, text in data.items():
    Path(name).write_text(text, encoding="utf-8")

english_page = Path("src/pages/en/index.astro")
english_page.parent.mkdir(parents=True, exist_ok=True)
english_page.write_text(
    "---\nimport Home from '../index.astro';\n---\n\n<Home />\n",
    encoding="utf-8",
)

print("Modifiche applicate. Avvia npm run build.")
