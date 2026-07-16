import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, Users, Mail } from 'lucide-react';

const overview = [
  {
    to: '/courses',
    title: 'Courses',
    desc: 'Explore our industry-aligned tracks designed to take you from foundational basics to career-ready mastery.',
    icon: GraduationCap,
  },
  {
    to: '/about',
    title: 'About Us',
    desc: 'About our mission and team.',
    icon: Users,
  },
  {
    to: '/contact',
    title: 'Contact',
    desc: 'Reach out and get in touch with us.',
    icon: Mail,
  },
];

const placementStages = [
  {
    title: 'Screening',
    desc: 'We review your education, communication skills, and experience to ensure the program is the right fit for you.',
  },
  {
    title: 'Registration',
    desc: 'Once selected, you can complete your registration and enrol in the training program.',
  },
  {
    title: 'Training',
    desc: 'Attend technical and soft-skill sessions on weekends or weekdays and build career-ready skills.',
  },
  {
    title: 'Resume Writing',
    desc: 'Our placement experts help you create a professional CV that highlights your strengths.',
  },
  {
    title: 'Mock Interview',
    desc: 'We conduct mock interviews and track your readiness before sharing your profile with companies.',
  },
  {
    title: 'Job Placement',
    desc: 'We support you through the final placement stage and help you secure the right opportunity.',
  },
];

const whoShouldJoin = [
  'Fresh graduates looking for a job-ready start.',
  'Working professionals switching to high-paying tech roles.',
  'B.Tech or diploma holders who want to upskill quickly.',
  'Non-IT students ready to begin with practical training.',
  'IT support professionals moving into automation or networking roles.',
];

const counsellingPoints = [
  'Get personalized course suggestions based on your profile.',
  'Understand placement trends, salary expectations, and learning styles.',
  'Clear your doubts about fees, training structure, and support.',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern mask-fade-b opacity-70" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />

        <div className="container-narrow section relative py-24 text-center lg:py-32">
          <span className="eyebrow animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" /> IT Training & Courses
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl animate-fade-up animate-delay-100 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Get Trained..Get Hired
          </h1>
          <p className="mx-auto mt-4 max-w-3xl animate-fade-up animate-delay-200 text-lg font-semibold leading-relaxed text-brand-700">
            Land your Dream Job in 100 Days.
          </p>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up animate-delay-200 text-lg leading-relaxed text-ink-600">
            Transform your Career with Job Focused Corporate Training & Placement Support in IT Industry.
          </p>
          <div className="mt-8 flex animate-fade-up animate-delay-300 flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brief overview */}
      <section className="container-narrow section py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} className="card card-hover group flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition-all group-hover:gap-2">
                  Visit page <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Placement training section */}
      <section className="container-narrow section pb-20">
        <div className="rounded-3xl border border-ink-200/70 bg-white p-8 shadow-soft lg:p-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Placement Training</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Learn industry-ready skills and step confidently into your next career move.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Learn industry-ready skills, build real-time projects, prepare for interviews, and get complete placement assistance from NexHorizon.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="font-display text-xl font-bold text-ink-900">
                Our job-focused placement training follows a structured, result-driven process:
              </h3>
              <ol className="mt-5 space-y-3">
                {placementStages.map((stage, index) => (
                  <li key={stage.title} className="rounded-2xl border border-ink-200/70 bg-ink-50/70 p-4">
                    <div className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink-900">{stage.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">{stage.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-ink-900 p-6 text-white shadow-soft">
              <h3 className="font-display text-xl font-bold">Who should join NexHorizon?</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
                {whoShouldJoin.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-ink-200">
                <p className="font-semibold text-white">Why learners choose us</p>
                <ul className="mt-2 space-y-2">
                  <li>• Practical training with real-world projects</li>
                  <li>• Career guidance and mock interviews</li>
                  <li>• Placement support tailored to your goals</li>
                  <li>• Flexible learning options for working professionals</li>
                  <li>• Industry-relevant courses that build job-ready skills</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-brand-200 bg-brand-50/70 p-6 lg:p-8">
            <h3 className="font-display text-2xl font-bold text-ink-900">
              Still confused? Speak to our career counsellor.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Choosing the right course can be confusing. That is why we offer free career counselling before you begin your transformation.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-700">
              {counsellingPoints.map((item) => (
                <li key={item} className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
              Learn. Grow. Succeed.
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-600">
              Learn from industry-leading experts, grow through practical projects, and succeed with top placements and career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow section pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-12 text-center shadow-glow sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Ready to start your tech journey?
            </h2>
            <p className="mt-3 text-brand-50">
              Explore our courses or get in touch to learn more.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
