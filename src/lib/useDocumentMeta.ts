import { useEffect } from 'react';

type Meta = {
  title: string;
  description?: string;
  path?: string;
};

const SITE_NAME = '北村健紀 (Tatsuki Kitamura)';
const ORIGIN = 'https://tatsuki.dev';

function setMetaTag(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useDocumentMeta({ title, description, path }: Meta) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', `${title} | ${SITE_NAME}`);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', `${title} | ${SITE_NAME}`);

    if (path) {
      const url = `${ORIGIN}${path}`;
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
      setCanonical(url);
    }
  }, [title, description, path]);
}
