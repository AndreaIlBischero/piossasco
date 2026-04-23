# C'era una volta a Piossasco

## Obiettivo
Creare un sito web semplice, amatoriale e mobile-first dedicato a Piossasco.
Il progetto è fine a se stesso: deve essere bello, leggero, chiaro e facile da usare.
Deve sembrare un progetto locale indipendente e curato, rivolto ai piossaschesi e a chi vive nei dintorni.

## Target
- Residenti di Piossasco
- Persone dei dintorni
- Utenti da mobile

## Lingua
- Solo italiano

## Tono del progetto
- Moderno
- Amichevole
- Locale
- Community
- Mai istituzionale
- Mai startup/tech aggressivo

## Struttura del sito
Il sito deve avere sezioni separate collegate da una home page.

Pagine richieste:
- Home
- Storia
- Curiosità
- Eventi
- Pizzerie
- Planner
- Admin

## Funzionalità incluse nell'MVP
- Home page semplice e mobile-first
- Sezione Storia con timeline e sezione per temi
- Sezione Curiosità separata
- Sezione Eventi con card in ordine cronologico
- Sezione Pizzerie compilata manualmente
- Planner AI che propone 2 idee di giornata
- Admin panel minimale protetto da password

## Funzionalità escluse
Escludere completamente, sia ora sia come proposta futura dentro il codice:
- Account utenti
- Registrazione / login utenti
- Commenti
- Recensioni
- Community avanzata
- Chat tra utenti
- Ricerca globale nel sito
- Filtri complessi
- Mappa Google integrata
- Google Maps API
- Monte San Giorgio
- SEO avanzata
- Analytics avanzate
- Monetizzazione
- Dashboard complesse
- Architetture enterprise
- Sistemi di ruoli e permessi
- Integrazioni inutili
- Funzionalità “nice to have” non richieste

## Eventi
Gli eventi arrivano da una ricerca AI esterna al sito.
Il sito deve solo leggere e mostrare i dati già pronti.
La qualità della ricerca eventi non deve essere perfetta: va bene una soluzione semplice purché funzioni.

Requisiti eventi:
- lista cronologica
- card semplici
- archivio eventi passati visibile
- nessun filtro complesso
- nessuna ricerca
- nessuna mappa

## Pizzerie
La sezione Pizzerie parte con dati inseriti a mano.
Per ora la categoria è solo:
- Pizzerie

Ogni pizzeria mostra:
- nome
- categoria
- foto
- indirizzo testuale
- link esterno a Google Maps

## Planner AI
Il planner è una semplice esperienza in stile assistente/chat.
L’utente sceglie un tipo di giornata.
Il sistema restituisce 2 proposte di giornata.

Formato risposta planner:
- timeline
- elenco tappe
- tono naturale, semplice e locale

Il planner può usare OpenAI tramite API key lato server.

## Admin
L’admin deve essere minimale.
Accesso con password unica tramite variabile ambiente.
Niente sistemi utenti complessi.

Funzioni admin richieste:
- vedere la lista eventi
- eliminare eventi
- vedere la lista pizzerie
- aggiungere/modificare pizzerie
- vedere contenuti storia/curiosità

## Design
Direzione visiva:
- semplice
- bella
- mobile-first
- moderna ma non tech
- pulita
- locale
- calda

La sezione Storia può avere un mood leggermente più editoriale/storico del resto del sito.

## Regole per l'implementazione
- Preferire sempre la soluzione più semplice che funziona
- Non progettare per scalabilità futura
- Non aggiungere feature non richieste
- Non inventare requisiti extra
- Non trasformare il progetto in un prodotto SaaS
- Mantenere il codice leggibile e lineare