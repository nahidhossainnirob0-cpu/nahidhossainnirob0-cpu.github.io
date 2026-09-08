import * as Icons from 'lucide-react';
import { services } from '../data/content';
import type { LucideIcon } from 'lucide-react';

export default function Services() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-24 md:py-32 bg-panel/20 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium text-accent">What I Build</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Custom AI automation systems designed around real business problems.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[s.icon] ?? Icons.Workflow;
            return (
              <article
                key={s.id}
                className="group border border-line rounded-xl p-6 bg-panel/50 hover:border-accent-soft transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/60 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-accent" />
                </div>
                <h3 className="text-ink font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">{s.description}</p>
                <button
                  onClick={scrollToContact}
                  className="text-sm text-accent group-hover:underline underline-offset-4"
                >
                  Discuss This
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
