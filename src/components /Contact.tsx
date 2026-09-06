import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const CONTACT_EMAIL = 'nahidhossainnirob0@gmail.com';
// NOTE: the phone number below is taken exactly as provided in the project brief (+880192153969).
// Bangladeshi mobile numbers are usually 13 digits after the +880 country code (e.g. +8801XXXXXXXXX) —
// double-check this number is complete/correct before deploying, then update it here in one place.
const PHONE_NUMBER = '+880192153969';
const WHATSAPP_NUMBER = PHONE_NUMBER.replace('+', '');

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrorMsg(
        'Form is not fully configured yet — add a free Web3Forms access key as VITE_WEB3FORMS_KEY (see SETUP.md).'
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `New Portfolio Project Inquiry — ${data.get('name')}`);
    data.append('from_name', 'Portfolio Contact Form');

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not send your request. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-panel/20 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <span className="text-xs font-medium text-accent">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3 mb-5 leading-tight">
            Have a Process That Should Be Automated?
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-sm">
            Tell me what you're trying to automate. I'll take a look at your workflow and see how AI
            and automation can help.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-lg border border-line flex items-center justify-center">
                <Mail size={16} />
              </span>
              {CONTACT_EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-lg border border-line flex items-center justify-center">
                <MessageCircle size={16} />
              </span>
              WhatsApp: {PHONE_NUMBER}
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-lg border border-line flex items-center justify-center">
                <Phone size={16} />
              </span>
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-5 py-2.5 rounded-full border border-line hover:border-accent-soft transition-colors text-sm text-ink"
            >
              Email Me
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-line hover:border-accent-soft transition-colors text-sm text-ink"
            >
              WhatsApp Me
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-soft transition-colors text-sm text-white"
            >
              Let's Talk
            </a>
          </div>
        </div>

        <div className="border border-line rounded-2xl bg-panel/60 p-6 md:p-8">
          {status === 'success' ? (
            <div className="py-10 text-center">
              <p className="text-ink font-medium mb-2">Thanks for reaching out.</p>
              <p className="text-sm text-muted">
                Your request has been received. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-base/60 border border-line rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-accent-soft transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-base/60 border border-line rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-accent-soft transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-muted mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full bg-base/60 border border-line rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-accent-soft transition-colors"
                />
              </div>

              <div>
                <label htmlFor="automate" className="block text-sm text-muted mb-2">
                  What would you like to automate? <span className="text-accent">*</span>
                </label>
                <input
                  id="automate"
                  name="automation_requirement"
                  required
                  className="w-full bg-base/60 border border-line rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-accent-soft transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">
                  Message / Project Details <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-base/60 border border-line rounded-lg px-4 py-3 text-sm text-ink outline-none focus:border-accent-soft transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 rounded-lg bg-accent hover:bg-accent-soft transition-colors text-white text-sm font-medium disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Project Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
