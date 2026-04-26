import { useEffect, useState } from 'react';

type PageHeaderProps = {
  command: string;
  title: string;
  subtitle?: string;
  delay?: number;
};

export default function PageHeader({ command, title, subtitle, delay = 0 }: PageHeaderProps) {
  const [partial, setPartial] = useState('');

  useEffect(() => {
    let i = 0;
    let alive = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const tick = () => {
      if (!alive) return;
      i++;
      setPartial(command.slice(0, i));
      if (i < command.length) timeouts.push(setTimeout(tick, 24));
    };

    timeouts.push(setTimeout(tick, delay));

    return () => {
      alive = false;
      timeouts.forEach(clearTimeout);
    };
  }, [command, delay]);

  return (
    <div className="mb-10 animate-fade-in">
      <div className="font-mono text-[11px] text-gray-500 mb-4 tracking-wide">
        <span className="text-[#0a66c2]">$</span> {partial}
        <span className="inline-block w-1.5 h-3 bg-[#0a66c2] ml-1 align-middle cursor-blink" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>}
    </div>
  );
}
