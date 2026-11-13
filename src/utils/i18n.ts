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
		en: { title: 'BIG GAME DRIFTING BLUEFIN TUNA', description: 'Get ready to experience the most iconic battle of our seas.\nWhether you are a seasoned pro or a first-timer at Big Game fishing, our crew will assist you throughout the stand-up fight, ensuring maximum safety for you and the utmost respect for the catch in full compliance with current regulations.\nWe provide an elite experience for serious anglers and thrill-seekers alike. We supply top-tier heavy-duty rods and reels (Alutecnos, Seeker, Fin Nor, Nomad Tackle, Maruto, Aftco), rigged and ready for the fight of a lifetime. Whether you are an expert or a beginner, we will guide you every step of the way.\nWe will fish either at anchor or drifting, chumming with sardines and oily fish (a tuna’s favorite meal). We’ll draw the tuna right beneath our boat, where both live and dead baits will be rigged amidst a shower of sardines. Let the battle begin!' },
		it: { title: 'BIG GAME DRIFTING TONNO ROSSO', description: "Preparati a vivere il combattimento più iconico dei nostri mari.\nChe tu sia un esperto o alla tua prima esperienza di Big Game, il nostro team ti assisterà durante tutto il combattimento in stand-up, garantendo la massima sicurezza per te e il massimo rispetto per la preda, in conformità con le normative vigenti.\nOffriamo un’esperienza d’élite sia ai pescatori più esperti sia agli amanti del brivido. Forniamo canne e mulinelli heavy-duty di altissima gamma (Alutecnos, Seeker, Fin Nor, Nomad Tackle, Maruto, Aftco), già armati e pronti per il combattimento della vita. Che tu sia un professionista o alla tua prima esperienza, ti guideremo passo dopo passo.\nPescheremo all’ancora o alla deriva, pasturando con sardine e pesce azzurro, il cibo preferito dei tonni. Attireremo i tonni sotto la barca e caleremo esche vive e morte in mezzo a una pioggia di sardine. Che il combattimento abbia inizio!" },
	},
		2: {
		en: { title: 'TROLLING OFFSHORE', description: "Offshore trolling represents the ultimate expression of dynamic hunting in Big Game fishing. It is not a waiting game, but an active strategy based on the study of currents, bathymetry, and the migratory routes of large pelagics. Anglers love trolling because it combines strategy, patience, and the thrill of sudden strikes. It involves pulling Kona lures, teasers, and rigged minnows behind a moving boat. We head far offshore, where encountering Bluefin Tuna, Swordfish, Albacore, Mediterranean Spearfish, and Mahi-Mahi requires precision and top-tier equipment.\nOur operation focuses on meticulous attention to detail: from the arrangement of the lure spread in the wake to the pinpoint calibration of the drags. On board, you will use cutting-edge fishing systems and next-generation marine electronics to locate the predators' feeding zones.\nAn experience dedicated to those who look for more than just fun in a charter, seeking technical excellence and a deep knowledge of the open sea." },
		it: { title: "TRAINA D'ALTURA", description: "La traina d’altura rappresenta la massima espressione della ricerca dinamica nel Big Game. Non è una pesca d’attesa, ma una strategia attiva basata sullo studio delle correnti, delle batimetriche e delle rotte migratorie dei grandi pelagici. I pescatori amano la traina perché combina strategia, pazienza e l’emozione di attacchi improvvisi. Consiste nel trainare kona, teaser e minnow innescati dietro un’imbarcazione in movimento. Ci spingiamo al largo, dove l’incontro con tonni rossi, pesci spada, alalunghe, aguglie imperiali e lampughe richiede precisione e attrezzature di altissimo livello.\nLa nostra attività si concentra sulla cura maniacale dei dettagli: dalla disposizione del pattern di esche in scia alla taratura millimetrica delle frizioni. A bordo utilizzerete sistemi di pesca d’avanguardia e strumentazione elettronica di ultima generazione per individuare le zone di alimentazione dei predatori.\nUn’esperienza dedicata a chi cerca nel charter non solo il divertimento, ma anche l’eccellenza tecnica e una profonda conoscenza del mare aperto." },
	},
		3: {
		en: { title: 'TROLLING INSHORE', description: 'Trolling Inshore is a discipline that requires extreme precision, a deep knowledge of the seabed, and an impeccable reading of fishfinder marks. It is a dynamic and thrilling excursion just off the coast, perfect for both beginners looking to get into sport fishing and experienced anglers alike. We will target the most aggressive inshore predators across various depths, including little tunny, mahi-mahi, bullet tuna, bluefish, and leerfish.\nOur approach is strictly technical: we use both artificial lures and live bait (caught during the trip), managed with controlled sinking systems via a guardian lead to position the presentation right in the strike zone. Every detail, from the choice of fluorocarbon leader to knot-precise trolling speeds, is aimed at outsmarting the most wary predators.\nOn board, the crew puts its experience at your disposal to optimize the fishing action, constantly monitoring the fishfinder and seabed structure to intercept the most promising marks.' },
		it: { title: 'TRAINA COSTIERA', description: "La traina costiera è una disciplina che richiede estrema precisione, una profonda conoscenza dei fondali e una lettura impeccabile delle marcature sull'eco. Un'escursione dinamica ed emozionante a poca distanza dalla costa, perfetta sia per i principianti che vogliono avvicinarsi alla pesca sportiva sia per i pescatori più esperti. Insidieremo i predatori costieri più aggressivi a diverse profondità, tra cui alletterati, lampughe, tombarelli, pesci serra e lecce amia.\nIl nostro approccio è rigorosamente tecnico: utilizziamo sia esche artificiali sia esca viva (reperita durante l'uscita), gestita con sistemi di affondamento controllato tramite piombo guardiano per posizionare l'insidia esattamente nella strike zone. Ogni dettaglio, dalla scelta del terminale in fluorocarbon alla velocità di traina precisa al nodo, è finalizzato a ingannare i predatori più diffidenti.\nA bordo, l'equipaggio mette a disposizione la propria esperienza per ottimizzare l'azione di pesca, monitorando costantemente l'ecoscandaglio e la conformazione del fondo per intercettare le marcature più interessanti." },
	},
	4: {
		en: { title: 'BOTTOM FISHING', description: "Bottom fishing represents the discipline where marine technology meets the angler's sensitivity. Our operation focuses on searching for shoals, wrecks, and drop-offs, pinpointing the ideal habitats where the most prized predators and bottom-feeders hold. We cater to those looking for targeted fishing for species such as Pandora, Gilthead Bream, Black Seabream, Scorpionfish, and Common Seabream.\nWe use high-definition fishfinders to accurately interpret the seabed structure and locate the most promising marks.\nEvery drop is planned down to the smallest detail, utilizing technical fluorocarbon leaders and fresh natural baits. We will fish with 4-hook rigs.\nWe manage the boat's drift or anchoring with extreme precision to keep our presentations right over the spot.\nWhether it is inshore or deep-water bottom fishing, the crew will guide you in reading the rod tip signals and managing the retrieve, ensuring a top-level technical experience. We will help you clean and prepare your catch to take home with you." },
		it: { title: 'BOLENTINO', description: "Il bolentino è una tecnica in cui la tecnologia nautica incontra la sensibilità del pescatore. La nostra attività si concentra sulla ricerca di secche, relitti e scarpate, individuando gli habitat ideali in cui stazionano i predatori e i pesci di fondo più pregiati. È l’esperienza ideale per chi desidera insidiare specie come pagelli, orate, tanute, scorfani e paraghi.\nUtilizziamo ecoscandagli ad alta definizione per interpretare con precisione la conformazione del fondale e individuare le marcature più promettenti.\nOgni calata è studiata nei minimi dettagli, con terminali in fluorocarbon tecnico ed esche naturali fresche. Utilizzeremo lenze con quattro ami.\nGestiamo con estrema precisione lo scarroccio o l’ancoraggio dell’imbarcazione, per mantenere le esche esattamente sopra lo spot.\nChe si tratti di bolentino costiero o di profondità, l’equipaggio ti guiderà nella lettura dei segnali della canna e nella gestione del recupero, per un’esperienza tecnica di alto livello. Ti aiuteremo a pulire e preparare il pescato da portare a casa." },
	},
	5: {
		en: { title: 'SWORDFISH NIGHT FISHING', description: "Night Swordfish fishing is the most extreme and exclusive experience our charter has to offer. A 10-hour expedition into the heart of the Tyrrhenian Sea, dedicated to those who want to experience the ocean at its wildest and most mysterious. The journey begins at sunset.\nOur strategy is divided into two crucial phases that require the utmost expertise:\nThe session starts with deep-water bottom fishing targeted at catching squid.\nOnce the cephalopods are rigged, we deploy our lines into the darkness. We use light-attractor systems to create a visual trail that guides the Swordfish toward the strike.\nFighting a Swordfish under the stars, surrounded by pitch darkness, is an unforgettable experience. Every vibration of the rod in the silence of the night is a unique thrill. On board, the crew will manage every phase—from instrument navigation to positioning the baits across different depths—to give you the chance to battle the true \"Gladiator of the Sea.\" We will return at sunrise, where a delicious breakfast awaits you." },
		it: { title: 'PESCA NOTTURNA AL PESCE SPADA', description: "La pesca notturna al pesce spada è l’esperienza più estrema ed esclusiva che il nostro charter possa offrire. Una spedizione di 10 ore nel cuore del Tirreno, dedicata a chi vuole vivere il mare nella sua veste più selvaggia e misteriosa. Il viaggio inizia al tramonto.\nLa nostra strategia si divide in due fasi cruciali, che richiedono la massima competenza:\nLa sessione inizia con il bolentino di profondità, mirato alla cattura dei totani.\nUna volta innescati i cefalopodi, caliamo le lenze nell’oscurità. Utilizziamo sistemi di segnalazione luminosa per creare una scia visiva che guidi il pesce spada verso l’esca.\nCombattere un pesce spada sotto le stelle, circondati dal buio totale, è un’esperienza indimenticabile. Ogni vibrazione della canna nel silenzio della notte regala un’emozione unica. A bordo, l’equipaggio gestirà ogni fase — dalla navigazione strumentale al posizionamento delle esche alle diverse profondità — per offrirti l’opportunità di confrontarti con il vero “Gladiatore del Mare”. Rientreremo all’alba, quando ti aspetterà una deliziosa colazione." },
	},
	6: {
		en: { title: 'OCTOPUS AND SQUID FISHING', description: "Experience the thrill of octopus fishing. This trip is highly recommended for families with children or beginners who have never fished before. We will use the traditional \"polpara\" jig with white bait to entice octopuses out of their hiding spots among the rocks and seagrass. We will fish in shallow waters, ranging from 3 to 15 meters deep.\nEvery movement of the line is designed to mimic natural prey, requiring specific responsiveness from the angler to feel the subtle \"pull\" and manage the lift off the seabed.\nThis activity is ideal for anyone looking to learn the secrets of an ancient technique supported by modern marine technology. A perfect experience for those seeking a day of pure fun." },
		it: { title: 'PESCA AL POLPO E SEPPIA', description: "Vivi l’emozione della pesca al polpo. Questa uscita è altamente consigliata alle famiglie con bambini o ai principianti che non hanno mai pescato prima. Utilizzeremo la tradizionale \"polpara\" con esca bianca per attirare i polpi fuori dalle loro tane tra gli scogli e la posidonia. Pescheremo in acque basse, dai 3 ai 15 metri di profondità.\nOgni movimento della lenza è studiato per simulare una preda naturale e richiede al pescatore la reattività necessaria per avvertire la trattenuta e gestire il momento del distacco dal fondo.\nQuesta attività è ideale per chi desidera apprendere i segreti di una tecnica antica supportata dalle moderne tecnologie nautiche. Un’esperienza perfetta per chi cerca una giornata di puro divertimento." },
	},
	7: {
		en: { title: 'SEABASS TROLLING', description: 'Ready to target the king of inshore waters? Join us for an exclusive trolling charter dedicated to European Sea Bass, one of the most sought-after, cunning, and hard-fighting game fish. Working currents, river mouths, and coastal shoals, we use artificial lures or live bait to outsmart this prized predator. Whether you\'re an experienced angler hunting a trophy or a beginner eager to learn fine-tuned techniques, our captain and crew will deliver a technical trip and an unforgettable day at sea.' },
		it: { title: 'TRAINA ALLA SPIGOLA', description: 'Pronto a insidiare il re del sottocosta? Unisciti a noi per un charter esclusivo dedicato alla traina alla Spigola, uno dei predatori più ambiti, astuti e combattivi. Tra correnti, foci e secche costiere, useremo esche artificiali o naturali per ingannare questo magnifico pesce. Che tu sia un esperto a caccia di un trofeo o un principiante desideroso di apprendere le tecniche più raffinate, il nostro capitano e l\'equipaggio ti regaleranno un\'uscita tecnica e una giornata indimenticabile in mare.' },
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
