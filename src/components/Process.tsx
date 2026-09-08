const steps = [
  { n: '01', title: 'Discovery', text: 'Understand your business and identify repetitive processes.' },
  { n: '02', title: 'Strategy', text: 'Design the automation architecture.' },
  { n: '03', title: 'Development', text: 'Build the workflow, AI logic, integrations, and database structure.' },
  { n: '04', title: 'Testing', text: 'Test edge cases and improve reliability.' },
  { n: '05', title: 'Launch', text: 'Deploy the system and make it ready for real-world use.' },
];

export default function Process() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium text-accent">How We Build</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">A clear path from idea to deployed system.</h2>
        </div>

        <div className="relative border-l border-line pl-8 space-y-10 md:space-y-12 ml-2">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="absolute -left-[38px] top-0 w-3 h-3 rounded-full bg-accent border-4 border-base" />
              <span className="font-display text-accent text-sm">{s.n}</span>
              <h3 className="text-ink font-medium mt-1 mb-1">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md">{s.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToContact}
          className="mt-12 px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
}
