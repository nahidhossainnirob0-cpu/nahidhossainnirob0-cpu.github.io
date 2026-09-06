import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../types';
import WorkflowVisual from './WorkflowVisual';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-line rounded-2xl max-w-3xl w-full my-8 p-6 md:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-muted hover:text-ink transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-display text-2xl md:text-3xl text-ink mb-6 pr-8">{project.title}</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-medium text-accent mb-2">Problem</h4>
              <p className="text-sm text-muted leading-relaxed">{project.detail.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-accent mb-2">Solution</h4>
              <p className="text-sm text-muted leading-relaxed">{project.detail.solution}</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-accent mb-2">How It Works</h4>
              <p className="text-sm text-muted leading-relaxed">{project.detail.howItWorks}</p>
            </div>
          </div>

          <div className="bg-base/40 border border-line rounded-xl p-5">
            <h4 className="text-xs font-medium text-accent mb-3">Workflow</h4>
            <WorkflowVisual nodes={project.detail.workflow} compact accent="#4C7CF0" />
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-medium text-accent mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.detail.technologies.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-line text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-9">
          <div>
            <h4 className="text-xs font-medium text-accent mb-2">Business Impact</h4>
            <p className="text-sm text-muted leading-relaxed">{project.detail.businessImpact}</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-accent mb-2">Future Improvements</h4>
            <p className="text-sm text-muted leading-relaxed">{project.detail.futureImprovements}</p>
          </div>
        </div>

        <button
          onClick={scrollToContact}
          className="px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
        >
          Build Something Similar
        </button>
      </div>
    </div>
  );
}
