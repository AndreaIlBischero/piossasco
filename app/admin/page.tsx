import PageIntro from "@/components/PageIntro";
import { getCuriosita, getEventi, getPizzerie, getStoriaTemi, getStoriaTimeline } from "@/lib/data";

type AdminPageProps = {
  searchParams?: Promise<{
    pwd?: string;
  }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const requiredPassword = process.env.ADMIN_PASSWORD;
  const resolvedSearchParams = await searchParams;
  const providedPassword = resolvedSearchParams?.pwd;
  const isAuthorized = !requiredPassword || providedPassword === requiredPassword;

  if (!isAuthorized) {
    return (
      <>
        <PageIntro
          title="Admin"
          text="Area admin minimale protetta da password unica tramite variabile ambiente."
        />
        <section className="card">
          <h2 className="section-title">Accesso protetto</h2>
          <p className="mt-3 text-sm text-gray-700">Inserisci la password admin per continuare.</p>
          <form method="get" className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              type="password"
              name="pwd"
              placeholder="Password admin"
              className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-borgo px-4 py-2 text-sm font-medium text-white"
            >
              Entra
            </button>
          </form>
        </section>
      </>
    );
  }

  const eventi = getEventi();
  const pizzerie = getPizzerie();
  const curiosita = getCuriosita();
  const timeline = getStoriaTimeline();
  const temi = getStoriaTemi();

  return (
    <>
      <PageIntro
        title="Admin"
        text="Area admin minimale protetta da password unica via variabile ambiente."
      />

      <section className="card">
        <h2 className="section-title">Accesso</h2>
        <p className="mt-3 text-sm text-gray-700">Accesso effettuato con password unica.</p>
      </section>

      <section className="card">
        <h2 className="section-title">Panoramica contenuti</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>Eventi: {eventi.length} elementi</li>
          <li>Pizzerie: {pizzerie.length} elementi</li>
          <li>Curiosita: {curiosita.length} elementi</li>
          <li>Timeline storia: {timeline.length} elementi</li>
          <li>Temi storia: {temi.length} elementi</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="section-title">Azioni richieste (placeholder)</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>Elimina evento</li>
          <li>Aggiungi/modifica pizzeria</li>
          <li>Visualizza contenuti storia/curiosita</li>
        </ul>
      </section>
    </>
  );
}
