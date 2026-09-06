const steps = [
  { n: '01', title: 'Understand', text: 'Understand the business and its workflow.' },
  { n: '02', title: 'Design', text: 'Design the automation architecture and user journey.' },
  { n: '03', title: 'Build', text: 'Build and integrate the required AI, APIs, databases, and automation tools.' },
  { n: '04', title: 'Optimize', text: 'Test, improve, and make the system reliable.' },
];

export default function About() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-14 items-start">
        <div className="md:sticky md:top-28">
          <div className="aspect-square w-full max-w-[280px] rounded-2xl border border-line bg-panel flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 120 120" className="w-24 h-24 text-muted" fill="none">
              <circle cx="60" cy="45" r="22" stroke="currentColor" strokeWidth="2" />
              <path d="M20 105c6-24 24-36 40-36s34 12 40 36" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-xs text-muted mt-3">Profile photo placeholder</p>
        </div>

        <div>
          <span className="text-xs font-medium text-accent">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3 mb-6 leading-tight">
            I Turn Repetitive Business Processes Into Intelligent Systems.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Hi, I'm Nahid Hossain Nirob, an AI Automation Developer focused on building practical
            AI-powered workflows and business systems. I combine automation, AI agents, APIs, databases,
            and business logic to create systems that reduce repetitive work and help businesses operate
            more efficiently.
          </p>
          <p className="text-muted leading-relaxed mb-10">
            My approach is simple: understand the business process first, identify where automation can
            create real value, then build a reliable workflow around it.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {steps.map((s) => (
              <div key={s.n} className="border border-line rounded-xl p-5 bg-panel/40">
                <span className="font-display text-accent text-sm">{s.n}</span>
                <h3 className="text-ink font-medium mt-2 mb-1">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
          >
            Let's Talk About Your Workflow
          </button>
        </div>
      </div>
    </section>
  );
}
