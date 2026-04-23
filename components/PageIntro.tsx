type PageIntroProps = {
  title: string;
  text: string;
};

export default function PageIntro({ title, text }: PageIntroProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-terracotta to-[#d7825f] px-5 py-6 text-white shadow-soft">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm leading-relaxed text-orange-50">{text}</p>
    </section>
  );
}
