type Language = 'en' | 'it';

const translations: Record<Language, Record<string, string>> = {
	en: {
		'home': 'Home',
		'trips': 'Trips',
		'vessel': 'Vessel',
		'faq': 'FAQ',
		'gallery': 'Gallery',
		'contact': 'Contact',
		'menu.open': 'Open menu',
		'language.select': 'Choose language',
		'page.title.home': 'Big Catch Fishing Charter in Rome | Fishing Trips',
		'page.title.gallery': 'Gallery | Big Catch Fishing Charters',
		'page.title.privacy': 'Privacy Policy & Cookie Policy | Big Catch Fishing Charters',
		'hero.title': 'BIG CATCH FISHING CHARTER IN ROME',
		'hero.tagline': "More than 10 years fishing along Rome's coast",
		'hero.description': "Set off on an unforgettable fishing adventure in Rome. Our charter offers more than a simple boat trip: it is an expedition into the heart of the Tyrrhenian Sea in search of the Mediterranean's most powerful predators, including bluefin tuna, Mediterranean spearfish and swordfish. Every trip is designed to maximize your chances of success and give you an unforgettable fight.\nWe use cutting-edge technology to deliver an outstanding fishing experience.\nEvery trip includes premium equipment from leading Japanese, American, Australian and Italian brands; snacks, lunch and drinks; fuel; and carefully selected bait.\nEverything you need to fish is on board.",
		'hero.book': 'Book Now',
		'trips.badge': 'BOOK YOUR TRIP',
		'trips.heading': 'Choose Your',
		'trips.adventure': 'Adventure',
		'trips.start': 'Start',
		'trips.features.0': 'Food & Drinks',
		'trips.features.1': 'Rod, Reel and Tackle',
		'trips.features.2': 'Max 4 people',
		'trips.features.3': 'Child friendly',
		'trips.features.4': 'Tuition for beginners',
		'vessel.title': 'Vessel',
		'vessel.paragraph.0': 'The heart of our sea trips is a 30-foot boat combining excellent stability, plenty of room to move around and safety. Built to handle a range of sea conditions, it is ideal for anyone looking for a sturdy, high-performance fishing boat. A 200 HP Suzuki engine (2020) provides speed and reliability to reach fishing grounds quickly. For added safety, we also carry a Mercury auxiliary engine. Garmin systems help us navigate precisely and locate fish marks and underwater structures. Autopilot lets us manage routes and trolling while focusing on the fishing.',
		'vessel.paragraph.1': 'The boat is purpose-built for sport fishing: large live bait tanks, a 300-litre fuel tank, rod holders and outriggers to cover a wide area while offshore trolling.',
		'vessel.paragraph.2': 'We leave nothing to chance. Our philosophy is simple: catching big predators takes the best equipment in the world.',
		'brands.badge': 'Our Brands',
		'brands.heading': 'Trusted',
		'brands.marks': 'partners and brands',
		'brands.empty': 'No logos found in',
		'brands.add': 'Add brand files here to display them automatically.',
		'gallery.badge': 'Gallery',
		'gallery.heading': 'Fishing Moments',
		'gallery.empty': 'No files found in public/gallery.',
		'gallery.page.heading': 'Gallery',
		'gallery.page.description': 'Photos and videos from our fishing trips.',
		'gallery.close': 'Close',
		'gallery.previous': 'Previous',
		'gallery.next': 'Next',
		'faq.heading': 'Frequently Asked Questions',
		'faq.0.question': 'Is Rome a good place for fishing?',
		'faq.0.answer': "The Roman coastline, especially the stretch of sea near the Tiber's mouth, is one of Italy's top sport-fishing areas.",
		'faq.1.question': 'What fish can I catch in Rome?',
		'faq.1.answer': 'Bluefin tuna, little tunny, Mediterranean spearfish, albacore, swordfish, dolphinfish, greater amberjack, barracuda, octopus, cuttlefish, gilt-head bream and other bottom fish.',
		'faq.2.question': 'Can I bring my own equipment?',
		'faq.2.answer': "We provide premium equipment from the world's leading Japanese, American and Italian brands. If you have a lucky rod of your own, you are welcome to bring it.",
		'faq.3.question': "What if I've never fished before?",
		'faq.3.answer': "Our trips are open to everyone. We'll guide you step by step and teach you the basics of fighting and handling a fish.",
		'faq.4.question': 'What happens if the weather is bad?',
		'faq.4.answer': 'Safety comes first. If sea and weather conditions do not allow us to go out, your booking will be moved to the next available date.',
		'faq.5.question': 'Can I bring a companion who does not fish?',
		'faq.5.answer': 'Of course! The boat is spacious and perfect for anyone who simply wants to enjoy a day in the sun and at sea.',
		'faq.6.question': 'What happens if we catch a fish? Can I take it home?',
		'faq.6.answer': 'We strictly follow current regulations. We often practise catch and release for bluefin tuna, while other species may be kept where permitted.',
		'faq.7.question': 'Is a catch guaranteed?',
		'faq.7.answer': "The sea is not an aquarium, but our experience and onboard equipment maximize your chances. The thrill of the hunt is part of the adventure.",
		'faq.8.question': 'Are children welcome?',
		'faq.8.answer': 'Absolutely! They are the future of fishing.',
		'faq.9.question': 'Are departure times flexible?',
		'faq.9.answer': 'Yes, we do our best to accommodate your schedule. The standard departure time is agreed during booking based on your trip or tour, and can be adjusted subject to availability and sea conditions. Let us know about any special departure or return-time requests when you book.',
		'faq.10.question': 'Are the charters private?',
		'faq.10.answer': 'Yes, 100%. Every trip is exclusively for you and your group. Only you and the skipper will be on board, giving you privacy, a personalized experience and our full attention throughout the trip.',
		'modal.close': 'Close',
		'footer.links': 'Useful Links',
		'footer.trips': 'Trips',
		'footer.vessel': 'Vessel',
		'footer.contact': 'Contact',
		'footer.phone': 'Phone',
		'footer.address': 'Address',
		'footer.copyright': 'All rights reserved.',
		'footer.privacy': 'Privacy Policy & Cookie Policy',
		'cookie.text': 'This site uses technical cookies to improve your browsing experience.',
		'cookie.more': 'Learn more',
		'cookie.accept': 'Accept',
		'cookie.reject': 'Reject',
		'privacy.back': 'Back to Home',
		'privacy.updated': 'Last updated: April 18, 2026',
		'privacy.controller': '1. Data Controller',
		'privacy.location': 'Viale Traiano 88, 00054 Fiumicino (RM), Italy',
		'privacy.phone': 'Phone',
		'privacy.data': '2. Types of Data Collected',
		'privacy.data.intro': 'The website collects the following data:',
		'privacy.data.navigation': 'Browsing data: IP address, browser type, operating system, pages visited, and date and time of access. This data is collected automatically by the website’s IT systems.',
		'privacy.data.provided': 'Data provided voluntarily: name, email address, telephone number and other information sent through the contact form, WhatsApp or email.',
		'privacy.purpose': '3. Purposes of Processing',
		'privacy.purpose.intro': 'Personal data is processed for the following purposes:',
		'privacy.purpose.0': 'Responding to requests for information and bookings',
		'privacy.purpose.1': 'Managing the contractual relationship for fishing trips',
		'privacy.purpose.2': 'Complying with legal and regulatory obligations',
		'privacy.purpose.3': 'Anonymous statistical analysis of website usage',
		'privacy.legal': '4. Legal Basis for Processing',
		'privacy.legal.intro': 'Data processing is based on:',
		'privacy.legal.0': 'The user’s consent (Art. 6(1)(a) GDPR)',
		'privacy.legal.1': 'Performance of a contract or pre-contractual measures (Art. 6(1)(b))',
		'privacy.legal.2': 'Compliance with legal obligations (Art. 6(1)(c))',
		'privacy.legal.3': 'The controller’s legitimate interests (Art. 6(1)(f))',
		'privacy.retention': '5. Data Retention',
		'privacy.retention.text': 'Personal data is retained for as long as necessary to fulfil the purposes for which it was collected and in any case no longer than the periods established by applicable law. Browsing data is deleted immediately after anonymous statistical processing.',
		'privacy.rights': '6. Data Subject Rights',
		'privacy.rights.intro': 'Under Articles 15–22 of the GDPR, users have the right to:',
		'privacy.rights.0': 'Access their personal data',
		'privacy.rights.1': 'Request its correction or deletion',
		'privacy.rights.2': 'Restrict processing',
		'privacy.rights.3': 'Object to processing',
		'privacy.rights.4': 'Request data portability',
		'privacy.rights.5': 'Withdraw consent at any time',
		'privacy.rights.6': 'Lodge a complaint with the Italian Data Protection Authority (',
		'privacy.exercise': 'To exercise these rights, write to:',
		'privacy.transfer': '7. Data Transfers',
		'privacy.transfer.text': 'Personal data is not transferred to countries outside the European Union.',
		'privacy.cookies.title': 'Cookie Policy',
		'privacy.cookies.what': '1. What Cookies Are',
		'privacy.cookies.what.text': 'Cookies are small text files that websites send to a user’s browser. The browser stores them and sends them back to the same websites on subsequent visits.',
		'privacy.cookies.used': '2. Cookies Used',
		'privacy.cookies.used.intro': 'This site uses the following categories of cookies:',
		'privacy.table.type': 'Type',
		'privacy.table.purpose': 'Purpose',
		'privacy.table.duration': 'Duration',
		'privacy.months': 'months',
		'privacy.table.technical': 'Technical cookies',
		'privacy.table.technical.purpose': 'Required for the website to work (language preference and cookie consent)',
		'privacy.table.analytics': 'Analytics cookies',
		'privacy.table.analytics.purpose': 'Anonymous website usage statistics (if enabled)',
		'privacy.cookies.manage': '3. Managing Cookies',
		'privacy.cookies.manage.text': 'Users can manage cookie preferences through the banner shown on their first visit or through their browser settings:',
		'privacy.cookies.references': '4. Legal References',
		'privacy.cookies.references.text': 'EU Regulation 2016/679 (GDPR)\nLegislative Decree 196/2003 (Privacy Code), as amended by Legislative Decree 101/2018\nItalian Data Protection Authority decision no. 229/2014 (Cookie Law)\nItalian Data Protection Authority cookie guidelines of June 10, 2021',
	},
	it: {
		'home': 'Home',
		'trips': 'Uscite',
		'vessel': 'Imbarcazione',
		'faq': 'FAQ',
		'gallery': 'Gallery',
		'contact': 'Contatti',
		'menu.open': 'Apri menu',
		'language.select': 'Scegli la lingua',
		'page.title.home': 'Charter Pesca Roma e Fiumicino | Big Catch Fishing Charters',
		'page.title.gallery': 'Gallery | Big Catch Fishing Charters',
		'page.title.privacy': 'Privacy Policy e Cookie Policy | Big Catch Fishing Charters',
		'hero.title': 'BIG CATCH FISHING CHARTER A ROMA',
		'hero.tagline': 'Da oltre 10 anni peschiamo lungo la costa di Roma',
		'hero.description': "Parti per un'indimenticabile avventura di pesca a Roma. Il nostro charter nasce per offrirti non una semplice uscita in barca, ma una vera e propria spedizione nel cuore del Tirreno, alla ricerca dei predatori più combattivi del Mediterraneo: Tonno Rosso, Aguglia Imperiale, Pesce Spada tra gli altri. Ogni nostra escursione è progettata per massimizzare le tue probabilità di successo e regalarti un combattimento memorabile.\nUtilizziamo tecnologie all'avanguardia per garantire un'esperienza di pesca senza pari.\nIn tutte le nostre escursioni sono inclusi: attrezzatura premium selezionata tra le migliori marche giapponesi, americane, australiane ed italiane; snack, pranzo e bevande; carburante; esche accuratamente selezionate.\nA bordo troverai tutto il necessario per pescare.",
		'hero.book': 'Prenota ora',
		'trips.badge': 'PRENOTA LA TUA USCITA',
		'trips.heading': 'Scegli la tua',
		'trips.adventure': 'Avventura',
		'trips.start': 'Partenza',
		'trips.features.0': 'Cibo e bevande',
		'trips.features.1': 'Canna, mulinello e attrezzatura',
		'trips.features.2': 'Massimo 4 persone',
		'trips.features.3': 'Adatto ai bambini',
		'trips.features.4': 'Lezioni per principianti',
		'vessel.title': 'Imbarcazione',
		'vessel.paragraph.0': 'Il cuore delle nostre uscite in mare è un 30 piedi, un’imbarcazione che coniuga perfettamente stabilità, ampi spazi di movimento e sicurezza. Progettata per affrontare diverse condizioni marine, è il mezzo ideale per chi cerca una barca da pesca solida e performante. Spinta da un Suzuki 200 CV (anno 2020), garanzia di velocità e affidabilità per raggiungere rapidamente le zone di pesca. Per la massima sicurezza disponiamo di un motore ausiliario Mercury. Navighiamo con precisione millimetrica grazie al sistema Garmin, fondamentale per individuare marcature e strutture sul fondo. Il sistema di autopilota ci permette di gestire le rotte e le fasi di traina con la massima concentrazione sull’azione di pesca.',
		'vessel.paragraph.1': "La barca è allestita specificamente per l'attività sportiva: ampie vasche del vivo per mantenere le esche in perfette condizioni, serbatoio con 300 litri di carburante, portacanne e divergenti per coprire ampi raggi d'azione durante la traina d'altura.",
		'vessel.paragraph.2': 'Non lasciamo nulla al caso. La nostra filosofia è semplice: per insidiare i grandi predatori servono i componenti migliori al mondo.',
		'brands.badge': 'I nostri Brand',
		'brands.heading': 'Partner e',
		'brands.marks': 'marchi di fiducia',
		'brands.empty': 'Nessun logo trovato in',
		'brands.add': 'Aggiungi qui i file dei brand per farli scorrere automaticamente.',
		'gallery.badge': 'Gallery',
		'gallery.heading': 'Momenti di pesca',
		'gallery.empty': 'Nessun file trovato in public/gallery.',
		'gallery.page.heading': 'Gallery',
		'gallery.page.description': 'Foto e video delle nostre uscite.',
		'gallery.close': 'Chiudi',
		'gallery.previous': 'Precedente',
		'gallery.next': 'Successiva',
		'faq.heading': 'Domande frequenti',
		'faq.0.question': 'Roma è un posto adatto alla pesca?',
		'faq.0.answer': 'Il litorale romano, e in particolare il tratto di mare antistante la foce del Tevere, è uno dei "punti caldi" della pesca sportiva in Italia.',
		'faq.1.question': 'Quali pesci posso pescare a Roma?',
		'faq.1.answer': 'Tonno Rosso, Tonno Alletterato, Aguglia Imperiale, Tonno Alalunga, Pesce Spada, Lampuga, Leccia Amia, Pesce Serra, Polpi, Seppie, Orata e pesce di fondo.',
		'faq.2.question': 'Posso portare la mia attrezzatura?',
		'faq.2.answer': 'Mettiamo a disposizione attrezzatura premium dei migliori brand mondiali (Giapponesi, Americani, Italiani). Se però hai una tua canna "fortunata", sei libero di portarla.',
		'faq.3.question': 'Cosa succede se non ho mai pescato prima?',
		'faq.3.answer': 'Le nostre uscite sono aperte a tutti. Ti assisteremo passo dopo passo, insegnandoti le basi del combattimento e della gestione della preda.',
		'faq.4.question': 'Cosa succede in caso di maltempo?',
		'faq.4.answer': "La sicurezza è la nostra priorità. Se le condizioni meteo-marine non consentono l'uscita, la prenotazione verrà spostata alla prima data utile.",
		'faq.5.question': 'Posso portare un accompagnatore che non pesca?',
		'faq.5.answer': 'Certamente! La barca è spaziosa e perfetta anche per chi vuole solo godersi una giornata di sole e mare.',
		'faq.6.question': 'Cosa succede se prendiamo un pesce? Posso portarlo a casa?',
		'faq.6.answer': 'Seguiamo rigorosamente le normative vigenti. Per il Tonno Rosso pratichiamo spesso il Catch & Release, mentre per altre specie è possibile tenere il pescato.',
		'faq.7.question': 'La cattura è garantita?',
		'faq.7.answer': "Il mare non è un acquario, ma la nostra esperienza e la strumentazione di bordo massimizzano le probabilità di successo. L'emozione della caccia è parte integrante dell'avventura.",
		'faq.8.question': 'I bambini sono accettati?',
		'faq.8.answer': 'Certo che sì, sono il futuro della pesca!',
		'faq.9.question': "L'orario di partenza è flessibile?",
		'faq.9.answer': 'Sì, cerchiamo sempre di andare incontro alle tue esigenze. L’orario di uscita standard viene concordato in fase di prenotazione in base alla tipologia di battuta di pesca o tour scelto, ma possiamo adattarlo alle tue preferenze (salvo disponibilità e condizioni meteo/marine). Se hai richieste particolari su orari di partenza o rientro, faccelo sapere al momento della prenotazione e faremo il possibile per accontentarti!',
		'faq.10.question': 'I charter sono privati?',
		'faq.10.answer': "Sì, al 100%. Tutte le nostre uscite sono ad uso esclusivo per te e il tuo gruppo (famiglia, amici o colleghi). A bordo ci sarete solo voi e lo skipper: questo ti garantisce massima privacy, totale personalizzazione dell'esperienza e la nostra completa attenzione per tutta la durata dell'uscita.",
		'modal.close': 'Chiudi',
		'footer.links': 'Link utili',
		'footer.trips': 'Uscite',
		'footer.vessel': 'Imbarcazione',
		'footer.contact': 'Contatti',
		'footer.phone': 'Telefono',
		'footer.address': 'Indirizzo',
		'footer.copyright': 'Tutti i diritti riservati.',
		'footer.privacy': 'Privacy Policy & Cookie Policy',
		'cookie.text': 'Questo sito utilizza cookie tecnici per migliorare la tua esperienza di navigazione.',
		'cookie.more': 'Scopri di più',
		'cookie.accept': 'Accetta',
		'cookie.reject': 'Rifiuta',
		'privacy.back': 'Torna alla Home',
		'privacy.updated': 'Ultimo aggiornamento: 18 aprile 2026',
		'privacy.controller': '1. Titolare del Trattamento',
		'privacy.location': 'Viale Traiano 88, 00054 Fiumicino (RM), Italia',
		'privacy.phone': 'Telefono',
		'privacy.data': '2. Tipologie di Dati Raccolti',
		'privacy.data.intro': 'Il sito web raccoglie i seguenti dati:',
		'privacy.data.navigation': 'Dati di navigazione: indirizzo IP, tipo di browser, sistema operativo, pagine visitate, data e ora di accesso. Questi dati sono raccolti automaticamente tramite i sistemi informatici del sito.',
		'privacy.data.provided': 'Dati forniti volontariamente: nome, email, numero di telefono e altre informazioni inviate tramite il modulo di contatto, WhatsApp o email.',
		'privacy.purpose': '3. Finalità del Trattamento',
		'privacy.purpose.intro': 'I dati personali sono trattati per le seguenti finalità:',
		'privacy.purpose.0': 'Rispondere alle richieste di informazioni e prenotazioni',
		'privacy.purpose.1': 'Gestire il rapporto contrattuale per le uscite di pesca',
		'privacy.purpose.2': 'Adempiere ad obblighi di legge e regolamentari',
		'privacy.purpose.3': 'Analisi statistiche anonime sull’utilizzo del sito',
		'privacy.legal': '4. Base Giuridica del Trattamento',
		'privacy.legal.intro': 'Il trattamento dei dati è fondato su:',
		'privacy.legal.0': 'Il consenso dell’utente (Art. 6, par. 1, lett. a del GDPR)',
		'privacy.legal.1': 'L’esecuzione di un contratto o misure precontrattuali (Art. 6, par. 1, lett. b)',
		'privacy.legal.2': 'L’adempimento di obblighi legali (Art. 6, par. 1, lett. c)',
		'privacy.legal.3': 'Il legittimo interesse del Titolare (Art. 6, par. 1, lett. f)',
		'privacy.retention': '5. Conservazione dei Dati',
		'privacy.retention.text': 'I dati personali saranno conservati per il tempo necessario al raggiungimento delle finalità per cui sono raccolti e comunque non oltre i termini previsti dalla normativa vigente. I dati di navigazione vengono cancellati immediatamente dopo l’elaborazione statistica anonima.',
		'privacy.rights': '6. Diritti dell’Interessato',
		'privacy.rights.intro': 'Ai sensi degli articoli 15-22 del GDPR, l’utente ha diritto di:',
		'privacy.rights.0': 'Accedere ai propri dati personali',
		'privacy.rights.1': 'Richiederne la rettifica o la cancellazione',
		'privacy.rights.2': 'Limitare il trattamento',
		'privacy.rights.3': 'Opporsi al trattamento',
		'privacy.rights.4': 'Richiedere la portabilità dei dati',
		'privacy.rights.5': 'Revocare il consenso in qualsiasi momento',
		'privacy.rights.6': 'Proporre reclamo al Garante per la Protezione dei Dati Personali (',
		'privacy.exercise': 'Per esercitare i propri diritti, scrivere a:',
		'privacy.transfer': '7. Trasferimento dei Dati',
		'privacy.transfer.text': 'I dati personali non vengono trasferiti a paesi terzi al di fuori dell’Unione Europea.',
		'privacy.cookies.title': 'Cookie Policy',
		'privacy.cookies.what': '1. Cosa sono i Cookie',
		'privacy.cookies.what.text': 'I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione di visite successive.',
		'privacy.cookies.used': '2. Cookie Utilizzati',
		'privacy.cookies.used.intro': 'Questo sito utilizza le seguenti categorie di cookie:',
		'privacy.table.type': 'Tipo',
		'privacy.table.purpose': 'Finalità',
		'privacy.table.duration': 'Durata',
		'privacy.months': 'mesi',
		'privacy.table.technical': 'Cookie tecnici',
		'privacy.table.technical.purpose': 'Necessari per il funzionamento del sito (preferenza lingua, consenso cookie)',
		'privacy.table.analytics': 'Cookie analitici',
		'privacy.table.analytics.purpose': 'Statistiche anonime sull’utilizzo del sito (se attivati)',
		'privacy.cookies.manage': '3. Gestione dei Cookie',
		'privacy.cookies.manage.text': 'L’utente può gestire le preferenze sui cookie tramite il banner mostrato al primo accesso al sito, oppure attraverso le impostazioni del proprio browser:',
		'privacy.cookies.references': '4. Riferimenti Normativi',
		'privacy.cookies.references.text': 'Regolamento UE 2016/679 (GDPR)\nD.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018\nProvvedimento del Garante Privacy n. 229/2014 (Cookie Law)\nLinee Guida del Garante Privacy del 10 giugno 2021 sui cookie',
	},
};

const tripTranslations: Record<number, Record<Language, { title: string; description: string }>> = {
	1: {
		en: { title: 'BIG GAME DRIFTING BLUEFIN TUNA', description: 'Our big-game tuna charter is a test of strength, endurance and pure adrenaline. We offer an elite experience for seasoned anglers and newcomers alike, with professional equipment and a strategy tailored to the conditions on the day.' },
		it: { title: 'BIG GAME DRIFTING TONNO ROSSO', description: "Il nostro Charter per la pesca al big game del tonno è una battaglia di forza, resistenza e pura adrenalina. Offriamo un'esperienza d'élite sia per pescatori esperti che per chi desidera approcciarsi al grande predatore del Mediterraneo, con equipaggiamento professionale e strategia costruita sulle condizioni reali del giorno." },
	},
	2: {
		en: { title: 'TROLLING OFFSHORE', description: 'Leave the coast behind and head into the deep blue in search of the sea’s fastest and most prized predators. Target species include bluefin tuna, albacore, dolphinfish, amberjack, barracuda, little tunny and mackerel.' },
		it: { title: "TRAINA D'ALTURA", description: 'Lasciati alle spalle la costa e avventurati nel blu profondo. Ci allontaniamo dalla riva per cacciare i predatori più veloci e prestigiosi del mare. Le specie target: tonno rosso, alalunga, lampuga, ricciola, barracuda, tonnetto e sgombro.' },
	},
	3: {
		en: { title: 'TROLLING INSHORE', description: 'A dynamic, exciting trip just off the coast, ideal for beginners looking to try sport fishing as well as experienced anglers.' },
		it: { title: 'TRAINA COSTIERA', description: "Un'uscita dinamica e ricca di emozioni appena al largo della costa, perfetta sia per i principianti che vogliono avvicinarsi alla pesca sportiva, sia per i pescatori esperti." },
	},
	4: {
		en: { title: 'BOTTOM FISHING', description: 'Enjoy a relaxing day aboard our charter. Bottom fishing is perfect for anyone who wants to feel a bite on the rod and take in the beauty of the sea.' },
		it: { title: 'BOLENTINO', description: "Goditi una giornata di autentico relax a bordo del nostro charter. La pesca a fondo è la tecnica perfetta per chi vuole sentire la 'tirata' sulla canna e godersi la bellezza del mare." },
	},
	5: {
		en: { title: 'SWORDFISH NIGHT FISHING', description: 'Live the dream of catching swordfish offshore at night. We will begin by searching for bait: giant squid!' },
		it: { title: 'PESCA NOTTURNA AL PESCE SPADA', description: "Vivi il sogno di catturare pesce spada in mezzo al mare di notte. Cominceremo cercando l'esca: calamari giganti!" },
	},
	6: {
		en: { title: 'OCTOPUS AND SQUID FISHING', description: 'Experience the excitement of octopus fishing. This trip is highly recommended for families with children and for beginners who have never fished before.' },
		it: { title: 'PESCA AL POLPO E SEPPIA', description: "Vivi l'emozione della pesca al polpo. Questa uscita di pesca è altamente consigliata per famiglie con bambini o principianti che non hanno mai pescato prima." },
	},
	7: {
		en: { title: 'SEABASS TROLLING', description: 'Ready to target the king of coastal waters? Join us for an exclusive trolling trip dedicated to seabass, one of the most sought-after fighting fish.' },
		it: { title: 'TRAINA ALLA SPIGOLA', description: 'Pronti a puntare al re delle acque costiere? Unitevi a noi per un charter esclusivo in traina dedicato alla Spigola, uno dei pesci da combattimento più ambiti.' },
	},
	8: {
		en: { title: 'LIVE BAIT TROLLING', description: 'Live-bait trolling is one of the most exciting and effective techniques for targeting the large predators in our waters.' },
		it: { title: 'TRAINA CON IL VIVO', description: 'La traina con il vivo è una delle tecniche più avvincenti e redditizie per insidiare i grandi predatori del nostro mare.' },
	},
	9: {
		en: { title: 'FISHING AND SUNSET DINNER', description: 'A coastal seabass session built around lures, bait, seabed readings and precise presentation.' },
		it: { title: 'PESCA E CENA AL TRAMONTO', description: 'Una sessione costiera dedicata alla spigola, tra artificiali, esche, lettura dei fondali e presentazioni precise.' },
	},
};

export function applyLanguage(language: string): Language {
	const lang: Language = language === 'it' ? 'it' : 'en';
	const dictionary = translations[lang];
	document.documentElement.lang = lang;
	const pageTitleKey = location.pathname.startsWith('/privacy')
		? 'page.title.privacy'
		: location.pathname.startsWith('/gallery')
			? 'page.title.gallery'
			: 'page.title.home';
	document.title = dictionary[pageTitleKey];

	document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
		const key = element.dataset.i18n;
		if (key && dictionary[key] !== undefined) element.textContent = dictionary[key];
	});

	document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((element) => {
		const key = element.dataset.i18nAria;
		if (key && dictionary[key] !== undefined) element.setAttribute('aria-label', dictionary[key]);
	});

	const bookingLink = document.querySelector<HTMLAnchorElement>('[data-i18n="hero.book"]');
	if (bookingLink) {
		const message = lang === 'it'
			? 'Ciao! Vorrei ricevere maggiori informazioni sulle vostre uscite di pesca. Grazie!'
			: "Hi! I'm interested in booking a fishing trip with your charter. Could you please send me more info about your services?";
		const bookingUrl = new URL('https://wa.me/393793554548');
		bookingUrl.searchParams.set('text', message);
		bookingLink.href = bookingUrl.toString();
	}

	document.querySelectorAll<HTMLButtonElement>('.trip-card-trigger').forEach((button) => {
		const id = Number(button.dataset.tripId);
		const trip = tripTranslations[id]?.[lang];
		if (!trip) return;

		button.dataset.title = trip.title;
		button.dataset.description = trip.description;
		button.dataset.features = Array.from({ length: 5 }, (_, index) => dictionary[`trips.features.${index}`]).join('|');
		if (lang === 'it') button.dataset.pricing = (button.dataset.pricing ?? '').replaceAll('/group', '/gruppo');
		else button.dataset.pricing = (button.dataset.pricing ?? '').replaceAll('/gruppo', '/group');
		button.setAttribute('aria-label', `${lang === 'it' ? 'Apri i dettagli di' : 'Open details for'} ${trip.title}`);
		const title = button.querySelector<HTMLElement>('.trip-card-title');
		if (title) title.textContent = trip.title;

		const pricing = button.querySelector<HTMLElement>('.trip-card-pricing');
		if (pricing) {
			pricing.replaceChildren(...(button.dataset.pricing ?? '').split('|').map((price) => {
				const badge = document.createElement('span');
				badge.className = 'inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200';
				badge.textContent = price;
				return badge;
			}));
		}
	});

	return lang;
}
