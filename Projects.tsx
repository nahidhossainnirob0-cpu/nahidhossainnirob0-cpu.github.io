import { useState } from 'react';
import { projects, categoryLabels } from '../data/content';
import type { Project, ProjectCategory } from '../types';
import WorkflowVisual from './WorkflowVisual';
import ProjectModal from './ProjectModal';

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: categoryLabels['ai-agents'] },
  { id: 'lead-management', label: categoryLabels['lead-management'] },
  { id: 'crm', label: categoryLabels['crm'] },
  { id: 'business-automation', label: categoryLabels['business-automation'] },
  { id: 'hr-automation', label: categoryLabels['hr-automation'] },
  { id: 'document-automation', label: categoryLabels['document-automation'] },
];

export default function Projects() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-medium text-accent">Selected Projects</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Real-world automation systems I've designed and built.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                active === f.id
                  ? 'bg-accent border-accent text-white'
                  : 'border-line text-muted hover:text-ink hover:border-accent-soft'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 transition-all duration-300">
          {visible.map((p) => (
            <article
              key={p.id}
              className="border border-line rounded-xl bg-panel/40 hover:border-accent-soft transition-colors overflow-hidden flex flex-col"
            >
              <div className="p-6 bg-base/30 border-b border-line">
                <WorkflowVisual nodes={p.detail.workflow.slice(0, 4)} compact accent="#4C7CF0" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-accent mb-2">{categoryLabels[p.category]}</span>
                <h3 className="text-ink font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-line text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelected(p)}
                  className="text-sm text-accent hover:underline underline-offset-4 text-left"
                >
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
