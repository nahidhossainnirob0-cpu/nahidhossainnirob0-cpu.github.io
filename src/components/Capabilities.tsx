const capabilities = [
  'AI Agents',
  'n8n Automation',
  'CRM Systems',
  'Lead Management',
  'Business Process Automation',
  'API Integrations',
];

export default function Capabilities() {
  return (
    <section className="border-y border-line bg-panel/30">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
        {capabilities.map((c) => (
          <span key={c} className="text-sm text-muted">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
