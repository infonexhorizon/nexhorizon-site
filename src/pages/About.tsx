import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BackToHome from '../components/BackToHome';

const features = [
  'Real-time Trainers',
  'Low Student-Teacher Ratio',
  'Online Live Training',
  'Comprehensive Curriculum',
  'LMS Portal',
  'Personalized Attention',
  'Internship & Live Projects',
  'Recognized Certifications',
  'Placement Support',
];

const team = [
  { name: 'Priya', role: 'Founder & Managing Director', initials: 'PR', gradient: 'from-brand-500 to-brand-700' },
  { name: 'Bharath', role: 'Career Services & Placement Lead', initials: 'BH', gradient: 'from-fuchsia-500 to-purple-600' },
  { name: 'Eshwar', role: 'Director of Academics & Curriculum', initials: 'ES', gradient: 'from-emerald-500 to-teal-600' },
  { name: 'Rushitha', role: 'Admissions & Student Operations Manager', initials: 'RU', gradient: 'from-sky-500 to-brand-600' },
];

const services = [
  'Live Online Training',
  'Project Support Training',
  'Flexible Timings',
  'High Qualified Trainers',
  'Corporate Training',
];

export default function About() {
  return (
    <>
      <BackToHome />

      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/60">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern mask-fade-b opacity-60" />
        <div className="container-narrow section relative py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Users className="h-3.5 w-3.5" /> About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              <span className="text-gradient">NEXHORIZON TECH</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Land your Dream Job in 100 Days. Transform your career with 100% job-focused training and placement support.
            </p>
            <p className="mt-3 text-lg font-semibold text-brand-700">
              Build your future with us.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow section py-16">
        <SectionHeading
          eyebrow="About NexHorizon Tech"
          title={<>Committed to deliver <span className="text-gradient">quality IT education</span></>}
        />
        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          <div className="card">
            <p className="text-base leading-relaxed text-ink-600">
              NEXHORIZON TECH has started with an initiative to provide high-quality IT education and corporate placement training to help you achieve your career goals. Our courses are designed by industry experts to ensure you gain the skills needed to excel in the tech industry.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              Learn from real-time experts who bring valuable insights and practical knowledge from their extensive industry experience. Our comprehensive curriculum, hands-on learning approach, and experienced corporate instructors ensure that you receive real-time practical training.
            </p>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-ink-900">Learn. Grow. Succeed.</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Learn from industry-leading experts with immersive, hands-on training that prepares you for real-world challenges. Grow your expertise through live projects and a structured internship program, gaining practical experience and real-world exposure that sets you apart.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Succeed with top placements, networking opportunities, and career guidance, unlocking your dream job and a future full of possibilities.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink-900">Key Features</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-600">
                {features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink-900">Our Services</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-600">
                {services.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 className="font-display text-xl font-bold text-ink-900">Job Guarantee – Placement Program</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Full Stack Web Development<br />
              Duration: 3 months | Practical training with hands-on projects
            </p>
            <Link to="/contact" className="btn-primary mt-5">
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-ink-900">Why choose NexHorizon Tech?</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-ink-50 p-4">
                <p className="font-semibold text-ink-900">Job Assistance</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">Our dedicated placement team provides job assistance, interview preparation, and resume-building support.</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-4">
                <p className="font-semibold text-ink-900">Certified Programs</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">Get globally recognized certifications that boost your resume and increase your prospects in top companies.</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-4">
                <p className="font-semibold text-ink-900">24/7 Support</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">Our support team is available round the clock to assist with doubts, queries, and technical challenges.</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-4">
                <p className="font-semibold text-ink-900">Affordable Pricing</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">We believe in quality education at competitive prices without compromising on value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50/60">
        <div className="container-narrow section py-16">
          <SectionHeading
            eyebrow="Our Team"
            title={<>Meet the <span className="text-gradient">team</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="card card-hover text-center">
                <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-display text-xl font-extrabold text-white shadow-soft`}>
                  {member.initials}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{member.name}</h3>
                <p className="mt-1 text-sm text-ink-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow section py-16">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-200/60 blur-3xl" />
          <h2 className="relative font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Want to learn more?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-ink-600">
            Explore our courses or get in touch with us.
          </p>
          <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
