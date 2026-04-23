import curiosita from "@/data/curiosita.json";
import events from "@/data/events.json";
import pizzerie from "@/data/pizzerie.json";
import sotiaTemi from "@/data/sotia_temi.json";
import storiaTimeline from "@/data/storia_timeline.json";
import type {
  Curiosita,
  Evento,
  Pizzeria,
  TemaStoricoItem,
  TimelineStoricaItem
} from "@/lib/types";

export const getEventi = (): Evento[] =>
  [...(events as Evento[])].sort((a, b) =>
    a.data.localeCompare(b.data, "it-IT", { numeric: true })
  );

export const getPizzerie = (): Pizzeria[] => pizzerie as Pizzeria[];

export const getCuriosita = (): Curiosita[] => curiosita as Curiosita[];

export const getStoriaTimeline = (): TimelineStoricaItem[] =>
  storiaTimeline as TimelineStoricaItem[];

export const getStoriaTemi = (): TemaStoricoItem[] => sotiaTemi as TemaStoricoItem[];
