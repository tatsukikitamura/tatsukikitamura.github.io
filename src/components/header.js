export function createHeader() {
  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200';

  nav.innerHTML = `
    <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" class="font-bold text-lg tracking-tight text-gray-900 hover:text-[#0a66c2] transition-colors">
        tatsuki.dev
      </a>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-8">
        <li><a href="/pages/about.html" class="text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">About</a></li>
        <li><a href="/pages/projects/" class="text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Projects</a></li>
        <li><a href="/pages/experience.html" class="text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Experience</a></li>
        <li><a href="/pages/blog.html" class="text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Blog</a></li>
        <li>
          <a href="/pages/contact.html" class="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors" style="background: #0a66c2;">
            Hire Me
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-600 hover:text-gray-900" aria-label="メニューを開く">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100">
      <ul class="px-6 py-4 space-y-4">
        <li><a href="/pages/about.html" class="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">About</a></li>
        <li><a href="/pages/projects/" class="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Projects</a></li>
        <li><a href="/pages/experience.html" class="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Experience</a></li>
        <li><a href="/pages/blog.html" class="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Blog</a></li>
        <li><a href="/pages/contact.html" class="block text-gray-600 hover:text-[#0a66c2] transition-colors text-sm">Hire Me</a></li>
      </ul>
    </div>
  `;

  return nav;
}

export function initHeaderEvents() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
