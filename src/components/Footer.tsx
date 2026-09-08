const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-line py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-ink text-lg mb-1">Nahid Hossain Nirob</p>
          <p className="text-sm text-muted mb-3">AI Automation Developer</p>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Building intelligent systems for real-world business workflows.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="text-sm text-muted hover:text-ink transition-colors w-fit"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <a href="mailto:nahidhossainnirob0@gmail.com" className="text-sm text-muted hover:text-ink transition-colors w-fit">
            nahidhossainnirob0@gmail.com
          </a>
          <a href="https://wa.me/880192153969" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-ink transition-colors w-fit">
            WhatsApp: +880192153969
          </a>
          <a href="tel:+880192153969" className="text-sm text-muted hover:text-ink transition-colors w-fit">
            +880192153969
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-line">
        <p className="text-xs text-muted">© 2026 Nahid Hossain Nirob. All rights reserved.</p>
      </div>
    </footer>
  );
}
