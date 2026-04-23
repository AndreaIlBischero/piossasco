# Data Shapes

## Evento
Campi richiesti:
- id: string
- titolo: string
- descrizione: string
- data: string
- luogo: string
- immagine: string
- fonte_url: string
- created_at: string

Esempio:
{
  "id": "evt_001",
  "titolo": "Festa di Primavera",
  "descrizione": "Evento nel centro di Piossasco",
  "data": "2026-05-10",
  "luogo": "Piazza Tenente Nicola",
  "immagine": "/images/evento.jpg",
  "fonte_url": "https://example.com/evento",
  "created_at": "2026-04-23T10:00:00Z"
}

## Pizzeria
Campi richiesti:
- id: string
- nome: string
- categoria: string
- foto: string
- indirizzo_testuale: string
- maps_url: string

Esempio:
{
  "id": "pz_001",
  "nome": "Pizzeria Demo",
  "categoria": "Pizzeria",
  "foto": "/images/pizzeria-demo.jpg",
  "indirizzo_testuale": "Via Roma 10, Piossasco",
  "maps_url": "https://maps.google.com/"
}

## Curiosita
Campi richiesti:
- id: string
- titolo: string
- testo: string
- tema: string

Esempio:
{
  "id": "cur_001",
  "titolo": "Un dettaglio poco noto",
  "testo": "Testo della curiosità.",
  "tema": "luoghi"
}

## TimelineStoricaItem
Campi richiesti:
- id: string
- anno_o_periodo: string
- titolo: string
- testo: string
- tema: string
- immagine: string

Esempio:
{
  "id": "sto_001",
  "anno_o_periodo": "Medioevo",
  "titolo": "Origini del borgo",
  "testo": "Testo storico.",
  "tema": "origini",
  "immagine": "/images/storia/origini.jpg"
}

## TemaStoricoItem
Campi richiesti:
- id: string
- titolo: string
- testo: string
- tema: string
- immagine: string

Esempio:
{
  "id": "tema_001",
  "titolo": "I castelli",
  "testo": "Testo dedicato al tema.",
  "tema": "castelli",
  "immagine": "/images/storia/castelli.jpg"
}

## PlannerRequest
Campi richiesti:
- tipo_giornata: string

Esempio:
{
  "tipo_giornata": "giornata tranquilla"
}

## PlannerResponse
Campi richiesti:
- titolo: string
- descrizione_breve: string
- timeline: array di PlannerStep

## PlannerStep
Campi richiesti:
- orario: string
- tappa: string
- descrizione: string