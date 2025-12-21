export function createCard({ 
  title, 
  description, 
  tags = [], 
  link = null, 
  colSpan = 1, 
  rowSpan = 1,
  icon = null,
  className = ''
}) {
  const card = document.createElement('article');
  
  const colClass = colSpan > 1 ? `md:col-span-${colSpan}` : '';
  const rowClass = rowSpan > 1 ? `md:row-span-${rowSpan}` : '';
  
  card.className = `
    bg-white rounded-3xl border border-gray-200 p-6
    hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200
    ${colClass} ${rowClass} ${className}
  `.trim().replace(/\s+/g, ' ');
  
  const tagsHtml = tags.length > 0 
    ? `<div class="flex flex-wrap gap-2 mt-4">
        ${tags.map(tag => `<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">${tag}</span>`).join('')}
       </div>`
    : '';
  
  const iconHtml = icon 
    ? `<div class="text-3xl mb-4">${icon}</div>`
    : '';
  
  const content = `
    ${iconHtml}
    <h3 class="font-bold text-lg text-gray-900 tracking-tight">${title}</h3>
    <p class="text-gray-600 mt-2 text-sm leading-relaxed">${description}</p>
    ${tagsHtml}
  `;
  
  if (link) {
    card.innerHTML = `
      <a href="${link}" class="block h-full">
        ${content}
        <div class="mt-4 text-sm text-gray-500 flex items-center gap-1">
          詳しく見る
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </a>
    `;
  } else {
    card.innerHTML = content;
  }
  
  return card;
}

export function createProfileCard({ name, title, description, image = null }) {
  const card = document.createElement('article');
  card.className = 'bg-white rounded-3xl border border-gray-200 p-8 md:col-span-2';
  
  const imageHtml = image 
    ? `<img src="${image}" alt="${name}" class="w-24 h-24 rounded-full object-cover border-2 border-gray-100">`
    : `<div class="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-3xl font-bold text-gray-500">${name.charAt(0)}</div>`;
  
  card.innerHTML = `
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
      ${imageHtml}
      <div class="text-center md:text-left">
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">${name}</h1>
        <p class="text-gray-500 mt-1">${title}</p>
        <p class="text-gray-600 mt-4 leading-relaxed">${description}</p>
      </div>
    </div>
  `;
  
  return card;
}

export function createLinkCard({ title, url, icon = '🔗' }) {
  const card = document.createElement('a');
  card.href = url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = `
    bg-white rounded-3xl border border-gray-200 p-6
    hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200
    flex items-center gap-4
  `.trim().replace(/\s+/g, ' ');
  
  card.innerHTML = `
    <span class="text-2xl">${icon}</span>
    <span class="font-medium text-gray-900">${title}</span>
    <svg class="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  `;
  
  return card;
}

