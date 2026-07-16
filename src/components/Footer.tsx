import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  ArrowRight,
} from 'lucide-react';

const footerLinks = {
  Courses: [
    { to: '/courses', label: 'Python Programming' },
    { to: '/courses', label: 'Full Stack Web Dev' },
    { to: '/courses', label: 'AI & Machine Learning' },
    { to: '/courses', label: 'Data Analytics' },
  ],
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'Careers' },
  ],
  Resources: [
    { to: '/courses', label: 'Course Catalog' },
    { to: '/contact', label: 'Talk to an Advisor' },
    { to: '/about', label: 'Student Stories' },
  ],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern opacity-[0.04]" />

      <div className="container-narrow section relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/nexhorizonlogo.jpeg"
                alt="NexHorizon logo"
                className="h-9 w-9 rounded-lg object-cover lg:h-10 lg:w-10"
              />
              <span className="font-display text-lg font-extrabold text-white">
                Nex<span className="text-brand-400">Horizon</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Beginner-friendly IT training that takes you from your first line
              of code to a career-ready skillset. Learn. Build. Get hired.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:infonexhorizon@gmail.com" className="flex items-center gap-2.5 text-ink-400 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" /> infonexhorizon@gmail.com
              </a>
              <a href="tel:+919491561039" className="flex items-center gap-2.5 text-ink-400 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" /> 9491561039
              </a>
              <p className="flex items-center gap-2.5 text-ink-400">
                <MapPin className="h-4 w-4 text-brand-400" /> 129, Dasarimatam Area, RC road, Tirupati, Andhra Pradesh
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} NexHorizon IT Training. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-400 transition-all duration-300 hover:border-brand-500/50 hover:bg-brand-600 hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pb-12 text-center">
          <p className="text-sm text-ink-400">Ready to start your tech journey?</p>
          <Link to="/contact" className="btn-primary">
            Talk to an Advisor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
