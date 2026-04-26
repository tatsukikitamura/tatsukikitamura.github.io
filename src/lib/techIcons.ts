const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const rails = `${DI}/rails/rails-plain.svg`;
const openai = `${DI}/openai/openai-original.svg`;
const redis = `${DI}/redis/redis-original.svg`;
const heroku = `${DI}/heroku/heroku-original.svg`;
const fastapi = `${DI}/fastapi/fastapi-original.svg`;
const vite = `${DI}/vitejs/vitejs-original.svg`;
const postgresql = `${DI}/postgresql/postgresql-original.svg`;
const python = `${DI}/python/python-original.svg`;
const cplusplus = `${DI}/cplusplus/cplusplus-original.svg`;
const tailwindcss = `${DI}/tailwindcss/tailwindcss-original.svg`;
const github = `${DI}/github/github-original.svg`;
const githubactions = `${DI}/githubactions/githubactions-original.svg`;
const react = `${DI}/react/react-original.svg`;
const typescript = `${DI}/typescript/typescript-original.svg`;
const nextjs = `${DI}/nextjs/nextjs-original.svg`;
const mysql = `${DI}/mysql/mysql-original.svg`;
const docker = `${DI}/docker/docker-original.svg`;
const git = `${DI}/git/git-original.svg`;
const vercel = `${DI}/vercel/vercel-original.svg`;
const aws = `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`;
const javascript = `${DI}/javascript/javascript-original.svg`;
const swift = `${DI}/swift/swift-original.svg`;
const firebase = `${DI}/firebase/firebase-plain.svg`;

const ICONS: Record<string, string> = {
  'ruby on rails': rails,
  rails: rails,
  'openai api': openai,
  openai: openai,
  redis: redis,
  heroku: heroku,
  'python (fastapi)': fastapi,
  fastapi: fastapi,
  'python 3.12': python,
  python: python,
  'vite + vanilla js': vite,
  'vite + js': vite,
  vite: vite,
  postgresql: postgresql,
  'c++': cplusplus,
  'tailwind css': tailwindcss,
  tailwindcss: tailwindcss,
  'github actions': githubactions,
  github: github,
  react: react,
  typescript: typescript,
  'next.js': nextjs,
  nextjs: nextjs,
  mysql: mysql,
  docker: docker,
  git: git,
  vercel: vercel,
  aws: aws,
  'github pages': github,
  javascript: javascript,
  swift: swift,
  swiftui: swift,
  firebase: firebase,
};

export function getTechIcon(name: string): string | null {
  return ICONS[name.toLowerCase()] ?? null;
}
