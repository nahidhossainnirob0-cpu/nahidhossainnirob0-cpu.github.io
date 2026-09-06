import WorkflowVisual from './WorkflowVisual';

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4C7CF0 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        <div>
          <span className="inline-block text-xs font-medium tracking-wide text-accent border border-accent-soft rounded-full px-3 py-1 mb-6">
            AI Automation Developer
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-ink mb-6">
            I Build AI-Powered Business Systems &amp; Real-World Workflows.
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-9">
            I design and build practical AI automation systems that help businesses capture leads,
            automate operations, manage customers, and turn repetitive processes into scalable workflows.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-full border border-line hover:border-accent-soft transition-colors text-ink text-sm font-medium"
            >
              Let's Work Together
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="px-6 py-3 text-muted hover:text-ink transition-colors text-sm font-medium"
            >
              View Services →
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-line bg-panel/60 backdrop-blur-sm p-8 shadow-2xl shadow-black/40">
            <p className="text-xs text-muted mb-4 font-medium">Live automation pipeline</p>
            <WorkflowVisual nodes={['Lead', 'AI Analysis', 'CRM', 'Follow-up', 'Sales']} accent="#4C7CF0" />
          </div>
        </div>
      </div>
    </section>
  );
}
