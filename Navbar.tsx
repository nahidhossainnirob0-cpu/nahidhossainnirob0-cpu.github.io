import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
          className="font-display text-ink text-lg tracking-tight"
        >
          Nahid Hossain Nirob
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
            className="text-sm px-4 py-2 rounded-full bg-accent hover:bg-accent-soft transition-colors text-white font-medium"
          >
            Let's Work Together
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-t border-line px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="text-ink text-base py-3 border-b border-line last:border-none"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
            className="mt-3 text-center text-sm px-4 py-3 rounded-full bg-accent text-white font-medium"
          >
            Let's Work Together
          </a>
        </div>
      )}
    </nav>
  );
}
