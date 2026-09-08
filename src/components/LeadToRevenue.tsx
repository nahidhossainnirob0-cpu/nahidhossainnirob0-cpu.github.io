import WorkflowVisual from './WorkflowVisual';

const stages = [
  'Lead Capture',
  'AI Qualification',
  'Lead Scoring',
  'CRM',
  'AI Follow-Up',
  'Appointment',
  'Sales',
  'Revenue',
];

export default function LeadToRevenue() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-medium text-accent">Signature System</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3 mb-6 leading-tight">
            From Lead to Revenue
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-md">
            Instead of automating one isolated task, I can connect the entire customer journey
            into one intelligent system — from the first lead to closed revenue.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium"
          >
            Build Your System
          </button>
        </div>

        <div className="rounded-2xl border border-line bg-panel/60 p-8">
          <WorkflowVisual nodes={stages} accent="#4C7CF0" />
        </div>
      </div>
    </section>
  );
}
