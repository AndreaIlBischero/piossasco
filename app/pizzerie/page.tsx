import PageIntro from "@/components/PageIntro";
import { getPizzerie } from "@/lib/data";

export default function PizzeriePage() {
  const pizzerie = getPizzerie();

  return (
    <>
      <PageIntro
        title="Pizzerie"
        text="Elenco semplice delle pizzerie locali, con indirizzo testuale e link esterno a Google Maps."
      />

      <section className="grid gap-3">
        {pizzerie.map((pizzeria) => (
          <article key={pizzeria.id} className="card">
            <p className="text-xs uppercase tracking-wide text-terracotta">{pizzeria.categoria}</p>
            <h2 className="mt-1 text-xl font-semibold text-borgo">{pizzeria.nome}</h2>
            <div className="mt-3 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100 p-3">
              <p className="text-xs text-gray-600">Foto pizzeria</p>
              <p className="mt-1 truncate text-xs text-gray-500">{pizzeria.foto}</p>
            </div>
            <p className="mt-2 text-sm text-gray-700">{pizzeria.indirizzo_testuale}</p>
            <a
              href={pizzeria.maps_url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-full border border-orange-200 bg-crema px-3 py-1.5 text-sm font-medium text-borgo"
            >
              Apri su Google Maps
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
