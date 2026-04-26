import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Tatsuki Kitamura. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://atcoder.jp/users/oreccchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm"
          >
            AtCoder
          </a>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm"
          >
            Hire Me!!
          </Link>
        </div>
      </div>
    </footer>
  );
}
