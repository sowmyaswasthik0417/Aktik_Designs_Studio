import { useEffect, useRef } from "react";

export default function AutoScrollRow({ className, children }) {
  const ref = useRef(null);
  const stopped = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth > 768) return; // mobile only

    let raf;
    let pos = 0;
    let dir = 1;
    const speed = 0.4;

    const step = () => {
      if (!stopped.current) {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 0) {
          pos += speed * dir;
          if (pos >= max) { pos = max; dir = -1; }
          if (pos <= 0) { pos = 0; dir = 1; }
          el.scrollLeft = pos;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const stop = () => { stopped.current = true; };

  return (
    <div
      ref={ref}
      className={className}
      onPointerDown={stop}
      onTouchStart={stop}
      onWheel={stop}
    >
      {children}
    </div>
  );
}
