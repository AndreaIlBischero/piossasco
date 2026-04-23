import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { getCuriosita, getEventi, getPizzerie } from "@/lib/data";

const sections = [
  { href: "/eventi", label: "Eventi" },
  { href: "/pizzerie", label: "Pizzerie" },
  { href: "/planner", label: "Planner" },
  { href: "/storia", label: "Storia" },
  { href: "/curiosita", label: "Curiosita" }
];

export default function HomePage() {
  const eventi = getEventi().slice(0, 2);
  const pizzerie = getPizzerie().slice(0, 2);
  const curiosita = getCuriosita().slice(0, 1);

  return (
    <>
      <PageIntro
        title="Un angolo locale, fatto con calma"
        text="Questo sito raccoglie storie, curiosita, eventi e idee di giornata a Piossasco, con uno stile semplice e vicino al territorio."
      />

      <section className="card">
        <h2 className="section-title">Sezioni principali</h2>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-xl border border-orange-200 bg-crema px-3 py-2 text-sm font-medium text-borgo"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Anteprima eventi</h2>
        <div className="mt-4 space-y-3">
          {eventi.map((evento) => (
            <article key={evento.id} className="rounded-xl border border-orange-100 p-3">
              <p className="text-xs text-gray-500">{evento.data}</p>
              <h3 className="mt-1 text-lg font-semibold text-borgo">{evento.titolo}</h3>
              <p className="mt-1 text-sm text-gray-700">{evento.descrizione}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Anteprima pizzerie</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {pizzerie.map((item) => (
            <article key={item.id} className="rounded-xl border border-orange-100 p-3">
              <h3 className="text-base font-semibold text-borgo">{item.nome}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.indirizzo_testuale}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Curiosita in evidenza</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{curiosita[0]?.testo}</p>
      </section>
    </>
  );
}
