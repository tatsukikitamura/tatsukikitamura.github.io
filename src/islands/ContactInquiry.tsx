import { useState, type FormEvent } from 'react';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

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
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputBase}
          placeholder="山田 太郎"
        />
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

export default function ContactInquiry() {
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
