export function createHeader() {
  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 z-50 opacity-0 animate-fade-in';
  
  nav.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <a href="/" class="font-bold text-xl tracking-tight text-white hover:text-indigo-300 transition-colors">
        <span class="gradient-text">Tatsuki</span><span class="text-zinc-400">.</span><span class="gradient-text">dev</span>
      </a>
      
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-8">
        <li><a href="/pages/about.html" class="text-zinc-400 hover:text-white transition-colors text-sm tracking-wide">About</a></li>
        <li><a href="/pages/projects/" class="text-zinc-400 hover:text-white transition-colors text-sm tracking-wide">Projects</a></li>
        <li><a href="/pages/experience.html" class="text-zinc-400 hover:text-white transition-colors text-sm tracking-wide">Experience</a></li>
        <li><a href="/pages/contact.html" class="btn-primary px-5 py-2 rounded-full text-sm font-medium text-white">Contact</a></li>
      </ul>
      
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden p-2 text-zinc-400 hover:text-white" aria-label="メニューを開く">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden glass border-t border-white/10">
      <ul class="px-6 py-6 space-y-4">
        <li><a href="/pages/about.html" class="block text-zinc-400 hover:text-white transition-colors">About</a></li>
        <li><a href="/pages/projects/" class="block text-zinc-400 hover:text-white transition-colors">Projects</a></li>
        <li><a href="/pages/experience.html" class="block text-zinc-400 hover:text-white transition-colors">Experience</a></li>
        <li><a href="/pages/contact.html" class="block text-zinc-400 hover:text-white transition-colors">Contact</a></li>
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
