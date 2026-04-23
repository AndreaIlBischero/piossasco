import PageIntro from "@/components/PageIntro";
import { getStoriaTemi, getStoriaTimeline } from "@/lib/data";

export default function StoriaPage() {
  const timeline = getStoriaTimeline();
  const temi = getStoriaTemi();

  return (
    <>
      <PageIntro
        title="Storia di Piossasco"
        text="Una pagina dal mood leggermente editoriale: timeline e temi per raccontare il paese in modo semplice e leggibile."
      />

      <section className="card">
        <h2 className="section-title">Timeline</h2>
        <ol className="mt-4 space-y-3 border-l-2 border-orange-200 pl-4">
          {timeline.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[1.15rem] top-1 h-2.5 w-2.5 rounded-full bg-terracotta" />
              <p className="text-xs uppercase tracking-wide text-gray-500">{item.anno_o_periodo}</p>
              <h3 className="text-base font-semibold text-borgo">{item.titolo}</h3>
              <p className="text-sm text-gray-700">{item.testo}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="card">
        <h2 className="section-title">Temi storici</h2>
        <div className="mt-4 space-y-3">
          {temi.map((tema) => (
            <article key={tema.id} className="rounded-xl border border-orange-100 p-3">
              <h3 className="text-base font-semibold text-borgo">{tema.titolo}</h3>
              <p className="mt-1 text-sm text-gray-700">{tema.testo}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
