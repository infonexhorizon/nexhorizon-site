import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Video } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BackToHome from '../components/BackToHome';

const workshops = [
  {
    title: 'AI & Machine Learning Essentials',
    description: 'Explore the foundations of AI, neural networks, and how to build your first predictive model.',
    month: 'JUL',
    day: '18',
    time: '6:00 PM IST',
    duration: '2 hours',
  },
  {
    title: 'Python Programming Bootcamp',
    description: 'Master core Python concepts, data structures, and automation basics in an interactive session.',
    month: 'AUG',
    day: '02',
    time: '7:00 PM IST',
    duration: '2 hours',
  },
  {
    title: 'Java Programming Foundations',
    description: 'Understand object-oriented programming principles, syntax, and building clean Java applications.',
    month: 'AUG',
    day: '16',
    time: '6:30 PM IST',
    duration: '2 hours',
  },
  {
    title: 'Full Stack Web Development',
    description: 'Learn how to connect a modern frontend layout with a functional backend API seamlessly.',
    month: 'SEP',
    day: '06',
    time: '7:30 PM IST',
    duration: '2 hours',
  },
];

export default function Workshops() {
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
              <CalendarDays className="h-3.5 w-3.5" /> Live Workshops
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Upcoming <span className="text-gradient">Workshops</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Hands-on interactive masterclasses to learn trending technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow section py-16">
        <SectionHeading
          eyebrow="Schedule"
          title={<>Upcoming <span className="text-gradient">workshop slots</span></>}
          description="Reserve your seat for any of the sessions below."
        />

        <div className="mt-12 space-y-5">
          {workshops.map((w, i) => (
  <article key={i} className="group flex flex-col gap-5 rounded-2xl border border-ink-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:border-brand-200 hover:shadow-card sm:flex-row sm:items-center sm:p-6">
    
    
    <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:justify-center">
      <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700 sm:h-20 sm:w-20">
        <span className="text-[10px] font-bold uppercase tracking-wider">{w.month}</span>
        <span className="font-display text-2xl font-extrabold leading-none">{w.day}</span>
      </div>
    </div>

    <div className="flex-1">
      <h3 className="font-display text-lg font-bold text-ink-900">{w.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{w.description}</p>
      
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-500">
        <span className="flex items-center gap-1.5">
          <Video className="h-3.5 w-3.5 text-brand-500" /> 
          Live online ({w.time} • {w.duration})
        </span>
      </div>
    </div>

    <div className="sm:ml-auto sm:shrink-0">
      <Link to="/contact" className="btn-primary w-full sm:w-auto">
        Reserve Seat <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

  </article>
))}
          
        </div>
      </section>
    </>
  );
}
