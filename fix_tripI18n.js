const fs = require('fs');
const path = require('path');

const filePath = './src/pages/index.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace all single-line strings with template literals in tripI18n
// Fix: triple-quoted strings should use backticks instead

content = content.replace(
  /description: "La traina d'altura rappresenta[\s\S]*?Un'esperienza dedicata a chi cerca nel charter non solo il divertimento, ma l'eccellenza tecnica e la profonda conoscenza del mare aperto\."/,
  `description: \`La traina d'altura rappresenta la massima espressione della ricerca dinamica nel Big Game. Non è una pesca d'attesa, ma una strategia attiva basata sullo studio delle correnti, delle batimetriche e delle rotte migratorie dei grandi pelagici. I pescatori amano la traina perchè combina strategia, pazienza e l'emozione di attacchi improvvisi. Consiste nel trascinare kona, teaser, minnow innescate dietro un'imbarcazione in movimento. Ci spingiamo al largo, dove l'incontro con Tonni rossi, Pesci Spada, Alalunghe, Aguglie Imperiali e Lampughe richiede precisione e attrezzature di altissimo livello.
La nostra attività si concentra sulla cura maniacale dei dettagli: dalla disposizione del pattern di esche in scia alla taratura millimetrica delle frizioni. A bordo, utilizzerete sistemi di pesca d'avanguardia e strumentazione elettronica di ultima generazione per l'individuazione delle zone di alimentazione dei predatori.
Un'esperienza dedicata a chi cerca nel charter non solo il divertimento, ma l'eccellenza tecnica e la profonda conoscenza del mare aperto.\``
);

content = content.replace(
  /description: 'La traina costiera è una disciplina[\s\S]*?A bordo, l'equipaggio mette a disposizione la propria esperienza per ottimizzare l'azione di pesca, monitorando costantemente l'ecoscandaglio e la conformazione del fondo per intercettare le marcature più interessanti\.'/,
  `description: \`La traina costiera è una disciplina che richiede estrema precisione, una profonda conoscenza dei fondali e una lettura impeccabile delle marcature sull'eco. Questa tecnica si gioca sulla sottile linea tra la costa e il mare aperto, dove i predatori si concentrano per cacciare. La nostra attività si rivolge a chi desidera insidiare specie come Tonno Alletterato, Dorado, Pesci Serra, Spigole e Leccia.
Il nostro approccio è rigorosamente tecnico: utilizziamo sia esche artificiali che esca viva (reperiti durante l'uscita), gestita con sistemi di affondamento controllato tramite piombo guardiano per posizionare l'insidia esattamente nella strike-zone. Ogni dettaglio, dalla scelta del terminale in fluorocarbon alla velocità di traina nodi-precisa, è finalizzato a ingannare i predatori più diffidenti.
A bordo, l'equipaggio mette a disposizione la propria esperienza per ottimizzare l'azione di pesca, monitorando costantemente l'ecoscandaglio e la conformazione del fondo per intercettare le marcature più interessanti.\``
);

content = content.replace(
  /description: 'Il Bolentino rappresenta la disciplina[\s\S]*?Che si tratti di bolentino costiero o di profondità, l'equipaggio ti guiderà nella lettura dei segnali della canna e nella gestione del recupero, assicurando un'esperienza tecnica di alto livello\.'/,
  `description: \`Il Bolentino rappresenta la disciplina dove la tecnologia nautica incontra la sensibilità del pescatore. La nostra attività si sviluppa sulla ricerca meticolosa di secche, relitti e cadute di fondale, individuando gli habitat ideali dove stazionano i predatori e i grufolatori più pregiati. Ci rivolgiamo a chi cerca una pesca mirata a specie come Pagelli, Orate, Tanute, Scorfani e Paraghi.
Utilizziamo ecoscandagli ad alta definizione per interpretare con precisione la conformazione del fondo e individuare le marcature più promettenti.
Ogni calata è studiata nei minimi dettagli, con l'impiego di terminali in fluorocarbon tecnico e l'uso di esche naturali fresche. Utilizzeremo lenze formate da 4 ami.
Gestiamo lo scarroccio dell'imbarcazione o l'ancoraggio con estrema precisione, per mantenere le nostre insidie esattamente sopra lo spot.
Che si tratti di bolentino costiero o di profondità, l'equipaggio ti guiderà nella lettura dei segnali della canna e nella gestione del recupero, assicurando un'esperienza tecnica di alto livello.\``
);

content = content.replace(
  /description: 'La pesca notturna al Pesce Spada è[\s\S]*?per offrirti l'opportunità di confrontarti con il vero "Gladiatore del Mare"\.'/,
  `description: \`La pesca notturna al Pesce Spada è l'esperienza più estrema ed esclusiva che il nostro charter possa offrire. Una spedizione di 10 ore nel cuore del Tirreno, dedicata a chi vuole vivere il mare nella sua veste più selvaggia e misteriosa. Il viaggio inizia al tramonto.
La nostra strategia è divisa in due fasi cruciali che richiedono massima competenza:
La sessione inizia con il light drifting o il jigging mirato alla cattura dei totani.
Una volta innescati i cefalopodi, caliamo le nostre lenze nell'oscurità. Utilizziamo sistemi di segnalazione luminosa per creare una scia visiva che guidi il Pesce Spada verso lo strike.
Combattere un Pesce Spada sotto le stelle, circondati dal buio totale, è un'esperienza indimenticabile. Ogni vibrazione della canna nel silenzio notturno è un brivido unico. A bordo, l'equipaggio gestirà ogni fase — dalla navigazione strumentale al posizionamento delle esche sulle diverse batimetriche — per offrirti l'opportunità di confrontarti con il vero "Gladiatore del Mare".\``
);

content = content.replace(
  /description: 'La pesca al polpo è una disciplina[\s\S]*?Un'esperienza perfetta per chi cerca una giornata di puro divertimento\.'/,
  `description: \`La pesca al polpo è una disciplina che premia la pazienza, la sensibilità tattile e una conoscenza del territorio sommerso. il nostro approccio si focalizza su una ricerca metodica lungo le praterie di posidonia, le zone rocciose e i fondali misti, dove questo cefalopode stabilisce la sua tana.
Impieghiamo polpare ed ad alta visibilità, combinate con inneschi tradizionali ottimizzati per stimolare l'istinto predatorio e territoriale del mollusco.
Ogni movimento della lenza è studiato per simulare una preda naturale, richiedendo al pescatore una reattività specifica per avvertire la "trattenuta" e gestire il momento del distacco dal fondo.
Questa attività è ideale per chi desidera apprendere i segreti di una tecnica antica supportata dalle moderne tecnologie nautiche. Un'esperienza perfetta per chi cerca una giornata di puro divertimento.\``
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✓ Fixed tripI18n descriptions - converted all strings to template literals');
