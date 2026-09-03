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
        // Advance on the next tick rather than synchronously inside the effect
        // (react-hooks/set-state-in-effect); keeps the typing loop timer-driven.
        timer = setTimeout(() => {
          setIdx((i) => (i + 1) % ROLES.length);
          setPhase('typing');
        }, 0);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [partial, phase, idx]);

  return (
    <span className="inline-flex min-w-[200px] items-center border-b border-[#0a66c2]/30 pb-0.5 font-semibold text-[#0a66c2] sm:min-w-[260px]">
      {'​'}
      {partial}
      <span className="cursor-blink ml-0.5 inline-block h-[18px] w-2 bg-[#0a66c2]" />
    </span>
  );
}
