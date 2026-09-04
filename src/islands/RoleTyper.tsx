import { useEffect, useState } from 'react';

const DEFAULT_ROLES = ['Software Engineer', 'Web Developer', 'Competitive Programmer'];

type Phase = 'typing' | 'hold' | 'erasing';

type Props = {
  /** Phrases to cycle through. Defaults to the English role names. */
  roles?: string[];
};

export default function RoleTyper({ roles = DEFAULT_ROLES }: Props) {
  const [idx, setIdx] = useState(0);
  const [partial, setPartial] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  useEffect(() => {
    const target = roles[idx] ?? '';
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (phase === 'typing') {
      if (partial.length < target.length) {
        timer = setTimeout(() => setPartial(target.slice(0, partial.length + 1)), 65);
      } else {
        timer = setTimeout(() => setPhase('hold'), 1400);
      }
    } else if (phase === 'hold') {
      timer = setTimeout(() => setPhase('erasing'), 800);
    } else {
      if (partial.length > 0) {
        timer = setTimeout(() => setPartial(target.slice(0, partial.length - 1)), 28);
      } else {
        setIdx((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [partial, phase, idx, roles]);

  return (
    <span className="font-semibold text-[#0a66c2] border-b border-[#0a66c2]/30 pb-0.5 min-w-[200px] sm:min-w-[260px] inline-flex items-center">
      {'​'}
      {partial}
      <span className="inline-block w-2 h-[18px] bg-[#0a66c2] ml-0.5 cursor-blink" />
    </span>
  );
}
