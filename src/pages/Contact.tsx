import { useState, type FormEvent } from 'react';
import { GitHubIcon, InstagramIcon, MailIcon } from '../components/Icons';
import { getTechIcon } from '../lib/techIcons';
import PageHeader from '../components/PageHeader';
import { useDocumentMeta } from '../lib/useDocumentMeta';

const TECH_STACK: Record<'frontend' | 'backend' | 'infra', string[]> = {
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js', 'Astro'],
  backend: ['Ruby on Rails', 'Python', 'PostgreSQL', 'MySQL'],
  infra: ['GitHub Pages', 'Vercel', 'AWS', 'Docker', 'Git'],
};

const FLOW_STEPS = [
  {
    title: 'お問い合わせ',
    desc: 'フォーム or DM で気軽にご相談ください。',
    note: '24時間以内に返信します。',
  },
  {
    title: 'ヒアリング（無料）',
    desc: 'オンライン or 対面で30〜60分ほど、ご要望と現状をお伺いします。',
    note: '無理な営業はしません。',
  },
  {
    title: 'お見積もり・ご契約',
    desc: '見積書・契約書をお送りします。ご納得いただいてから着手します。',
    note: 'この段階での費用はかかりません。',
  },
  {
    title: '制作・公開',
    desc: '進捗を共有しながら制作します。公開後のサポートも対応可能です。',
    note: '保守も都度ご相談ください。',
  },
];

const FAQS = [
  {
    q: 'どんな業種でも対応してもらえますか？',
    a: 'はい、業種を問わず対応可能です。個人事業主の方から店舗運営の方まで、様々な世界観のサイトを制作してきました。',
  },
  {
    q: '契約書は交わせますか？',
    a: 'もちろんです。業務委託契約書をご用意しておりますので、安心してご依頼いただけます。',
  },
  {
    q: '打ち合わせは対面とオンラインどちらに対応していますか？',
    a: '両方対応可能です。Zoom・Google Meet等のオンライン会議、または都内であれば対面打ち合わせも可能です。',
  },
  {
    q: 'サイト公開後の修正やメンテナンスはお願いできますか？',
    a: 'はい、保守についても都度ご相談に応じます。詳細はお見積もり時にご相談ください。',
  },
  {
    q: '制作期間はどれくらいかかりますか？',
    a: '規模にもよりますが、シンプルなLPであれば1〜2週間、複数ページのサイトで3〜4週間程度が目安です。',
  },
];

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

function TechTag({ name, color }: { name: string; color: string }) {
  const icon = getTechIcon(name);
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${color}`}
    >
      {icon && <img src={icon} className="w-4 h-4 flex-shrink-0" alt="" loading="lazy" />}
      {name}
    </span>
  );
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if ((data.get('_gotcha') as string)?.length) {
      setStatus('success');
      form.reset();
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setErrorMessage(
        '送信先が未設定です。お手数ですが Instagram DM またはメールでご連絡ください。',
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.errors?.[0]?.message ?? '送信に失敗しました');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : '送信に失敗しました。お手数ですが Instagram DM またはメールでご連絡ください。',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-emerald-900">
        <p className="font-semibold mb-1">お問い合わせを送信しました。</p>
        <p className="text-sm leading-relaxed">
          内容を確認のうえ、24時間以内にご返信いたします。少々お待ちください。
        </p>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 transition-colors';
  const labelBase = 'block text-sm font-semibold text-gray-800 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — must remain empty for real users */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />

      <div>
        <label htmlFor="name" className={labelBase}>
          お名前 <span className="text-rose-500">*</span>
        </label>
        <input id="name" name="name" type="text" required className={inputBase} placeholder="山田 太郎" />
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          メールアドレス <span className="text-rose-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputBase}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="affiliation" className={labelBase}>
          ご所属・業種 <span className="text-gray-400 font-normal">（任意）</span>
        </label>
        <input
          id="affiliation"
          name="affiliation"
          type="text"
          className={inputBase}
          placeholder="例: ◯◯カフェ オーナー / 個人事業主 など"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          ご相談内容 <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputBase} resize-y`}
          placeholder="サイトの目的・参考にしたいサイト・希望納期など、わかる範囲で構いません。"
        />
      </div>

      <fieldset>
        <legend className={labelBase}>ご希望の連絡方法</legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { value: 'email', label: 'メール' },
            { value: 'instagram', label: 'Instagram DM' },
            { value: 'call', label: '電話（オンライン会議含む）' },
          ].map((opt, i) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-gray-400 transition-colors flex-1"
            >
              <input
                type="radio"
                name="contact_method"
                value={opt.value}
                defaultChecked={i === 0}
                className="accent-gray-900"
              />
              <span className="text-sm text-gray-800">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status === 'error' && (
        <p className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? '送信中…' : '送信する'}
      </button>
    </form>
  );
}

function ContactAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="contact-form-panel"
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">フォームから問い合わせる</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div id="contact-form-panel" className="px-5 pb-6 pt-5 border-t border-gray-100">
          <ContactForm />
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  useDocumentMeta({
    title: 'Contact - お問い合わせ',
    description:
      '北村健紀（Tatsuki Kitamura）へのお問い合わせ。Webサイト制作のご相談、お見積もり、ご質問など、フォームから24時間以内に返信いたします。',
    path: '/contact',
  });

  return (
    <main className="pt-24 pb-8 px-4 max-w-4xl mx-auto">
      <PageHeader
        command="cat contact.md"
        title={
          <>
            Web制作のご依頼、<br className="sm:hidden" />承ります
          </>
        }
      />

      <section className="px-2 text-zinc-700 mb-12 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-2xl font-bold mb-4">はじめに</h2>
        <p className="leading-relaxed">
          早稲田大学4年の北村健紀です。
          <br />
          独学でプログラミングを始めて約1年半、ReactやRailsを使ったWeb開発を続けてきました。
          <br />
          就活がひと段落したので、これからはWeb制作のご依頼を積極的に受け付けていこうと思っています。
          <br />
          小規模なLPから個人開発レベルのWebアプリまで、お気軽にご相談ください。
        </p>
      </section>

      <section className="px-2 mb-12 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-2">対応できる制作内容</h2>
        <p className="text-sm text-gray-500 mb-6">
          「こんなサイトが欲しい」をそのまま形にします。下記はあくまで一例です。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              tag: '個人向け',
              title: '個人用 Website',
              desc: '自己紹介・SNSリンク・活動記録などをひとつにまとめる、自分専用のホームページ。趣味や発信活動の拠点として。',
              points: ['自己紹介ページ', 'SNS / 各種リンク集約', 'カスタムドメイン対応'],
            },
            {
              tag: '学生向け',
              title: '就活用ポートフォリオサイト',
              desc: 'ガクチカ・作品・スキルをまとめ、エントリーシートや面接で「URLひとつ」で渡せる就活専用ページ。',
              points: ['プロフィール / 経歴', '作品・成果物の掲載', 'スマホ最適化'],
            },
            {
              tag: '店舗・事業向け',
              title: 'お店 / コーポレートサイト',
              desc: 'カフェ・サロン・小規模事業のための数ページ構成サイト。営業時間やメニュー、お問い合わせフォームまで。',
              points: ['トップ / About / メニュー', 'お問い合わせフォーム', 'Google Maps 埋め込み'],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-5 hover:border-gray-400 transition-colors"
            >
              <span className="inline-block text-[10px] font-semibold tracking-wider text-indigo-600 bg-indigo-50 rounded-full px-2 py-0.5 mb-2">
                {item.tag}
              </span>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
              <ul className="space-y-1">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="text-xs text-gray-600 flex items-start gap-1.5"
                  >
                    <span className="text-indigo-500 mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-5">
          ※ 上記以外でも「こういうのできる？」というご相談は大歓迎です。
        </p>
      </section>

      <section className="px-2 mb-12 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-6">対応の流れ</h2>
        <ol className="grid md:grid-cols-2 gap-4">
          {FLOW_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="border border-gray-200 rounded-2xl p-5 flex gap-4"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{step.desc}</p>
                <p className="text-xs text-gray-500">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-2 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-6">使用技術</h2>
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">FRONTEND</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.frontend.map((name) => (
                <TechTag key={name} name={name} color="bg-indigo-50 text-indigo-700" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">BACKEND</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.backend.map((name) => (
                <TechTag key={name} name={name} color="bg-emerald-50 text-emerald-700" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">INFRA / OTHERS</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.infra.map((name) => (
                <TechTag key={name} name={name} color="bg-amber-50 text-amber-700" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 mb-12 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">料金について</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            制作費は<span className="font-semibold text-gray-900">要相談</span>とさせていただいています。
          </p>
          <p className="text-sm text-gray-600">
            サイトの規模・ご要望・納期によって変動するため、まずはお話を伺った上で、お見積もりをお出しします。
            <br />
            <span className="font-medium text-gray-800">ご相談・お見積もりは無料です。</span>
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">
            別途必要となる費用
          </p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span>ドメイン取得費（年間 1,500円〜）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span>有料APIの利用料（必要な場合のみ）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span>その他、運用に必要な実費</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-2 mb-12 opacity-0 animate-fade-in-up animation-delay-600">
        <h2 className="text-xl font-bold tracking-tight mb-2">お問い合わせ</h2>
        <p className="text-sm text-gray-500 mb-6">
          ご相談・お見積もりは無料です。InstagramのDMが一番反応が早く、24時間以内にご返信します。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <a
            href="https://instagram.com/t4t2uk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <InstagramIcon />
            Instagram でDM
          </a>
          <a
            href="mailto:tatukikitamura123456@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            <MailIcon />
            メールで相談する
          </a>
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>

        <ContactAccordion />
      </section>

      <section className="px-2 opacity-0 animate-fade-in-up animation-delay-800">
        <h2 className="text-xl font-bold tracking-tight mb-6">よくあるご質問</h2>
        <dl className="divide-y divide-gray-100">
          {FAQS.map((item) => (
            <div key={item.q} className="py-4 first:pt-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-2 flex gap-2">
                <span className="text-indigo-500 flex-shrink-0">Q.</span>
                <span>{item.q}</span>
              </dt>
              <dd className="text-sm text-gray-600 leading-relaxed flex gap-2">
                <span className="text-gray-400 flex-shrink-0">A.</span>
                <span>{item.a}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
