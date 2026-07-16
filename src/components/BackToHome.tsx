import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome() {
  return (
    <div className="container-narrow section pt-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-2.5"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  );
}
