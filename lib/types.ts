export type Evento = {
  id: string;
  titolo: string;
  descrizione: string;
  data: string;
  luogo: string;
  immagine: string;
  fonte_url: string;
  created_at: string;
};

export type Pizzeria = {
  id: string;
  nome: string;
  categoria: string;
  foto: string;
  indirizzo_testuale: string;
  maps_url: string;
};

export type Curiosita = {
  id: string;
  titolo: string;
  testo: string;
  tema: string;
};

export type TimelineStoricaItem = {
  id: string;
  anno_o_periodo: string;
  titolo: string;
  testo: string;
  tema: string;
  immagine: string;
};

export type TemaStoricoItem = {
  id: string;
  titolo: string;
  testo: string;
  tema: string;
  immagine: string;
};
