"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    restDelta: 0.001,
  });
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setPercent(Math.round(value * 100));
  });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 z-50 h-1 w-full origin-left bg-accent"
      />
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/80 px-3 py-1.5 font-mono text-[11px] text-muted shadow-lg backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="tracking-wide">SCROLL</span>
        <span className="font-semibold text-foreground">{percent}%</span>
      </div>
    </>
  );
}
