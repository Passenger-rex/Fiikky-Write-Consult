import React, { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

export default function CountUp({ end, prefix = "", suffix = "", title, description }: { end: number, prefix?: string, suffix?: string, title: string, description: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.max(1, Math.floor(easeOut * end)));

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animation);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center p-8 bg-neutral-50/50 border border-neutral-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
      <div className="text-4xl md:text-5xl font-serif font-extrabold text-primary mb-3">
        {prefix}{count}{suffix}
      </div>
      <h4 className="font-sans font-bold text-text-dark text-xs uppercase tracking-widest mb-3 text-center">{title}</h4>
      <p className="font-sans text-xs text-text-muted leading-relaxed text-center">{description}</p>
    </div>
  );
}
