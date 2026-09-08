const points = [
  {
    title: 'Business First',
    text: 'I focus on solving the actual business problem, not simply adding AI for the sake of AI.',
  },
  {
    title: 'Custom Systems',
    text: "Every workflow can be designed around the client's existing process.",
  },
  {
    title: 'Connected Automation',
    text: 'AI, APIs, databases, CRM, communication tools, and business logic can work together as one system.',
  },
  {
    title: 'Scalable Thinking',
    text: 'Build systems that can evolve as the business grows.',
  },
];

export default function WhyWorkWithMe() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 md:py-32 bg-panel/20 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium text-accent">Why Automation? Why Me?</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            A system built around your business, not a template.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {points.map((p) => (
            <div key={p.title} className="border border-line rounded-xl p-6 bg-panel/50">
              <h3 className="text-ink font-medium mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToContact}
          className="px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
}
