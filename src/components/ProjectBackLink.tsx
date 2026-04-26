import { Link } from 'react-router-dom';

export default function ProjectBackLink() {
  return (
    <Link
      to="/projects"
      className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 opacity-0 animate-fade-in-up"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span>Projects</span>
    </Link>
  );
}
