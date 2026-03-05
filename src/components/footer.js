export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'relative z-10 border-t border-gray-200 py-12 px-6';
  
  footer.innerHTML = `
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p class="text-gray-500 text-sm">© ${new Date().getFullYear()} Tatsuki Kitamura. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
          GitHub
        </a>
        <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
          AtCoder
        </a>
        <a href="/pages/contact.html" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
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
    <footer class="relative z-10 border-t border-gray-200 py-12 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-gray-500 text-sm">© ${new Date().getFullYear()} Tatsuki Kitamura. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
            GitHub
          </a>
          <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
            AtCoder
          </a>
          <a href="/pages/contact.html" class="text-gray-500 hover:text-[#0a66c2] transition-colors text-sm">
            Hire Me!!
          </a>
        </div>
      </div>
    </footer>
  `;
}
