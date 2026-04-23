import PageIntro from "@/components/PageIntro";
import { getCuriosita } from "@/lib/data";

export default function CuriositaPage() {
  const curiosita = getCuriosita();

  return (
    <>
      <PageIntro
        title="Curiosita locali"
        text="Una raccolta leggera e scorrevole di dettagli, piccoli racconti e note legate a Piossasco."
      />

      <section className="space-y-3">
        {curiosita.map((item) => (
          <article key={item.id} className="card">
            <p className="text-xs uppercase tracking-wide text-terracotta">Tema: {item.tema}</p>
            <h2 className="mt-1 text-xl font-semibold text-borgo">{item.titolo}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.testo}</p>
          </article>
        ))}
      </section>
    </>
  );
}
