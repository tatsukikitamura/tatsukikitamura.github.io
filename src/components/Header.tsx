import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-lg tracking-tight text-gray-900 hover:text-[#0a66c2] transition-colors"
        >
          tatsuki.dev
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="text-gray-600 hover:text-[#0a66c2] transition-colors text-sm"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ background: '#0a66c2' }}
            >
              Request
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="メニューを開く"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm"
              >
                Request
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
