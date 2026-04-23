import PageIntro from "@/components/PageIntro";

const proposte = [
  {
    titolo: "Giornata tranquilla",
    descrizione: "Ritmo lento tra centro, pausa e passeggiata.",
    timeline: [
      "09:30 - Colazione in piazza",
      "11:00 - Passeggiata nel centro storico",
      "13:00 - Pranzo in pizzeria",
      "16:30 - Giro rilassato nel verde"
    ]
  },
  {
    titolo: "Giornata in compagnia",
    descrizione: "Una proposta piu vivace tra eventi e tappe locali.",
    timeline: [
      "10:00 - Incontro al mercato locale",
      "12:30 - Pranzo con amici",
      "15:30 - Visita a un luogo storico",
      "19:00 - Serata in piazza"
    ]
  }
];

export default function PlannerPage() {
  return (
    <>
      <PageIntro
        title="Planner"
        text="Assistente base in stile chat: scegli il tipo di giornata e ricevi 2 proposte semplici con timeline e tappe."
      />

      <section className="card">
        <h2 className="section-title">Scegli un tipo di giornata</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full border border-orange-200 bg-crema px-3 py-1.5 text-sm text-borgo">
            Tranquilla
          </button>
          <button className="rounded-full border border-orange-200 bg-crema px-3 py-1.5 text-sm text-borgo">
            In compagnia
          </button>
          <button className="rounded-full border border-orange-200 bg-crema px-3 py-1.5 text-sm text-borgo">
            Famiglia
          </button>
        </div>
      </section>

      <section className="space-y-3">
        {proposte.map((proposta) => (
          <article key={proposta.titolo} className="card">
            <h2 className="text-xl font-semibold text-borgo">{proposta.titolo}</h2>
            <p className="mt-1 text-sm text-gray-700">{proposta.descrizione}</p>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              {proposta.timeline.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
