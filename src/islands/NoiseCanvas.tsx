import { useEffect, useRef } from 'react';

export default function NoiseCanvas() {
  const noiseRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = noiseRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let t = 0;
    let alive = true;
    const draw = () => {
      if (!alive) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const cols = Math.floor(w / 20);
      const rows = Math.floor(h / 20);
      const sx = w / cols;
      const sy = h / rows;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const n = (Math.sin(i * 0.4 + t * 0.6) + Math.cos(j * 0.5 - t * 0.5)) * 0.5 + 0.5;
          const a = n * 0.18 + 0.04;
          ctx.fillStyle = `rgba(10,102,194,${a})`;
          ctx.fillRect(i * sx + sx / 2 - 0.6, j * sy + sy / 2 - 0.6, 1.2, 1.2);
        }
      }
      t += 0.012;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={noiseRef} className="absolute inset-0 pointer-events-none" />;
}
