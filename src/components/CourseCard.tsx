import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Course } from '../data/courses';

export default function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="block"
    >
      <article className="card card-hover group flex flex-col cursor-pointer">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6" />
        </span>

        <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
          {course.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
          {course.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
          View Course <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </article>
    </Link>
  );
}