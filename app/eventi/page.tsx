import PageIntro from "@/components/PageIntro";
import { getEventi } from "@/lib/data";

export default function EventiPage() {
  const now = new Date();
  const eventi = getEventi();
  const futuri = eventi.filter((e) => new Date(e.data) >= now);
  const passati = eventi.filter((e) => new Date(e.data) < now);

  return (
    <>
      <PageIntro
        title="Eventi"
        text="Eventi ordinati cronologicamente: prima quelli in arrivo, poi l'archivio di quelli passati."
      />

      <section className="card">
        <h2 className="section-title">In arrivo</h2>
        <div className="mt-4 space-y-3">
          {futuri.map((evento) => (
            <article key={evento.id} className="rounded-xl border border-orange-100 p-3">
              <p className="text-xs text-gray-500">{evento.data} · {evento.luogo}</p>
              <h3 className="mt-1 text-lg font-semibold text-borgo">{evento.titolo}</h3>
              <p className="mt-1 text-sm text-gray-700">{evento.descrizione}</p>
              <div className="mt-3 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100 p-3">
                <p className="text-xs text-gray-600">Immagine evento</p>
                <p className="mt-1 truncate text-xs text-gray-500">{evento.immagine}</p>
              </div>
              <a
                href={evento.fonte_url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-terracotta"
              >
                Vai alla fonte
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Archivio eventi passati</h2>
        {passati.length === 0 ? (
          <p className="mt-3 text-sm text-gray-700">Nessun evento passato nei mock locali.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {passati.map((evento) => (
              <article key={evento.id} className="rounded-xl border border-orange-100 p-3">
                <p className="text-xs text-gray-500">{evento.data}</p>
                <h3 className="text-base font-semibold text-borgo">{evento.titolo}</h3>
                <div className="mt-3 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100 p-3">
                  <p className="text-xs text-gray-600">Immagine evento</p>
                  <p className="mt-1 truncate text-xs text-gray-500">{evento.immagine}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
