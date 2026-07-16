import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import SectionHeading from '../components/SectionHeading';
import { courses } from '../data/courses';
import BackToHome from '../components/BackToHome';

export default function Courses() {
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
              <GraduationCap className="h-3.5 w-3.5" /> Course Catalog
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Launch your tech career or level up your skills with our industry-aligned IT courses. Learn from experts, build real-world projects, and master the tools needed to excel in today’s digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="container-narrow section py-16">
        <SectionHeading
          eyebrow="All Courses"
          title={<>Explore our <span className="text-gradient">courses</span></>}
          description="Find the perfect track for your goals below—select any course to view details and contact us to get started."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow section pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-200/60 blur-3xl" />
          <h2 className="relative font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Ready to enroll?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-ink-600">
            Get in touch with us to start your learning journey.
          </p>
          <div className="relative mt-6">
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
