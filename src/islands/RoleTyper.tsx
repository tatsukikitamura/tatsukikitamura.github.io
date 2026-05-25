import { useEffect, useState } from 'react';

const ROLES = ['Software Engineer', 'Web Developer', 'Competitive Programmer'];

type Phase = 'typing' | 'hold' | 'erasing';

export default function RoleTyper() {
  const [idx, setIdx] = useState(0);
  const [partial, setPartial] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  useEffect(() => {
    const target = ROLES[idx]!;
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
        setIdx((i) => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [partial, phase, idx]);

  return (
    <span className="font-semibold text-[#0a66c2] border-b border-[#0a66c2]/30 pb-0.5 min-w-[260px] inline-flex items-center">
      {'​'}
      {partial}
      <span className="inline-block w-2 h-[18px] bg-[#0a66c2] ml-0.5 cursor-blink" />
    </span>
  );
}
