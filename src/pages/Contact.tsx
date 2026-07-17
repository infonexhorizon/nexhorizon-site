import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import BackToHome from '../components/BackToHome';

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'info@nexhorizon.in', href: '#' },
  { icon: Phone, label: 'Call us', value: '9491561039', href: '#' },
  { icon: MapPin, label: 'Visit us', value: '129, Dasarimatam Area, RC road, Tirupati, Andhra Pradesh', href: '#' },
  { icon: Clock, label: 'Office hours', value: '10:00 AM - 05:00 PM', href: '#' },
];

export default function Contact() {
  return (
    <>
      <BackToHome />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/60">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern mask-fade-b opacity-60" />
        <div className="container-narrow section relative py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <MessageSquare className="h-3.5 w-3.5" /> Get In Touch
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              <span className="text-gradient">Contact</span> Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              For any queries or registration support, please call us directly on 9491561039.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="container-narrow section py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-4">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-ink-200/70 bg-ink-50/70 p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink-900">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}