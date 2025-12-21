export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'relative z-10 border-t border-white/10 py-12 px-6';
  
  footer.innerHTML = `
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p class="text-zinc-800 text-sm">© ${new Date().getFullYear()} Tatsuki Kitamura. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-white transition-colors text-sm">
          GitHub
        </a>
        <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-white transition-colors text-sm">
          AtCoder
        </a>
        <a href="/pages/contact.html" class="text-zinc-800 hover:text-white transition-colors text-sm">
          Hire Me!!
        </a>
      </div>
    </div>
  `;
  
  return footer;
}

// HTMLテンプレート用（innerHTML用）
export function getFooterHTML() {
  return `
    <footer class="relative z-10 border-t border-white/10 py-12 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-zinc-800 text-sm">© ${new Date().getFullYear()} Tatsuki Kitamura. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-white transition-colors text-sm">
            GitHub
          </a>
          <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-white transition-colors text-sm">
            AtCoder
          </a>
          <a href="/pages/contact.html" class="text-zinc-800 hover:text-white transition-colors text-sm">
            Hire Me!!
          </a>
        </div>
      </div>
    </footer>
  `;
}
