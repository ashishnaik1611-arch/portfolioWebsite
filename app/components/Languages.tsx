"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Reveal from "./Reveal";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiFlask,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const tools = [
  { name: "Python", Icon: SiPython, color: "#3572a5" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f1e05a" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#3c873a" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Flask", Icon: SiFlask, color: "#ffffff" },
  { name: "LangChain", Icon: SiLangchain, color: "#1c3c3c" },
  { name: "Java", Icon: FaJava, color: "#e76f00" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Redis", Icon: SiRedis, color: "#dc382d" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285f4" },
];

// Deterministic resting layout (percent of container) for when the cursor is idle/absent.
// Icons are placed on a grid with a little jitter so they stay evenly spaced and
// never overlap, however many tools there are.
function seededJitter(seed: number) {
  const rand = (n: number) => {
    const x = Math.sin(n) * 10000;
    return x - Math.floor(x);
  };
  return {
    dx: (rand(seed) - 0.5) * 6,
    dy: (rand(seed + 1) - 0.5) * 6,
    rotate: (rand(seed + 2) - 0.5) * 16,
  };
}

function buildRestPositions(count: number) {
  const cols = Math.ceil(Math.sqrt(count * 1.6));
  const rows = Math.ceil(count / cols);
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitter = seededJitter(i * 7.31);
    return {
      left: cellW * col + cellW / 2 + jitter.dx,
      top: cellH * row + cellH / 2 + jitter.dy,
      rotate: jitter.rotate,
    };
  });
}

const restPositions = buildRestPositions(tools.length);

// How many trail-history steps separate each following segment of the snake.
const SEGMENT_GAP = 4;
const TRAIL_LENGTH = tools.length * SEGMENT_GAP + 1;

function ToolBadge({
  tool,
  index,
  active,
  trailRank,
  registerPoint,
}: {
  tool: (typeof tools)[number];
  index: number;
  active: boolean;
  trailRank: number;
  registerPoint: (index: number, x: ReturnType<typeof useMotionValue<number>>, y: ReturnType<typeof useMotionValue<number>>) => void;
}) {
  const rest = restPositions[index];
  const { Icon } = tool;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  registerPoint(index, x, y);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      animate={
        active
          ? { left: "0%", top: "0%", rotate: 0 }
          : { left: `${rest.left}%`, top: `${rest.top}%`, rotate: rest.rotate }
      }
      transition={
        active
          ? { duration: 0 }
          : { type: "spring", stiffness: 120, damping: 16, delay: index * 0.015 }
      }
      style={{
        position: "absolute",
        x: active ? x : undefined,
        y: active ? y : undefined,
        zIndex: active ? tools.length - trailRank : 1,
      }}
      whileHover={{ scale: 1.15 }}
      className="group flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-default flex-col items-center justify-center rounded-2xl border border-border bg-surface-high/90 shadow-lg sm:h-20 sm:w-20"
    >
      <Icon size={28} color={tool.color} className="pointer-events-none drop-shadow-sm sm:size-8" />
      <span
        className={`pointer-events-none absolute -bottom-6 whitespace-nowrap rounded-full bg-surface px-2 py-0.5 font-mono text-[10px] text-muted shadow-md transition-opacity ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        {tool.name}
      </span>
    </motion.div>
  );
}

export default function Languages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const trail = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 50, y: 50 }))
  );
  const target = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const suppressUntil = useRef(0);
  // Maps each tool's index to its position in the snake chain (0 = leads,
  // closest to the cursor at the moment it was gathered).
  const [trailRanks, setTrailRanks] = useState<number[]>(tools.map((_, i) => i));
  const trailRanksRef = useRef(trailRanks);
  trailRanksRef.current = trailRanks;

  // Each ToolBadge owns its own motion values and registers them here so the
  // RAF loop below can drive them imperatively without re-rendering React.
  const points = useRef<
    { x: ReturnType<typeof useMotionValue<number>>; y: ReturnType<typeof useMotionValue<number>> }[]
  >([]);
  function registerPoint(
    index: number,
    x: ReturnType<typeof useMotionValue<number>>,
    y: ReturnType<typeof useMotionValue<number>>
  ) {
    points.current[index] = { x, y };
  }

  useEffect(() => {
    function tick() {
      if (activeRef.current) {
        const rect = containerRef.current?.getBoundingClientRect();
        const head = trail.current[0];
        const dest = target.current ?? head;
        const nextHead = {
          x: head.x + (dest.x - head.x) * 0.25,
          y: head.y + (dest.y - head.y) * 0.25,
        };
        const next = [nextHead];
        for (let i = 1; i < trail.current.length; i++) {
          const prev = next[i - 1];
          const cur = trail.current[i];
          next.push({
            x: cur.x + (prev.x - cur.x) * 0.35,
            y: cur.y + (prev.y - cur.y) * 0.35,
          });
        }
        trail.current = next;

        if (rect) {
          tools.forEach((_, i) => {
            const rank = trailRanksRef.current[i];
            const p = trail.current[rank * SEGMENT_GAP];
            const pt = points.current[i];
            if (!pt) return;
            pt.x.set((p.x / 100) * rect.width);
            pt.y.set((p.y / 100) * rect.height);
          });
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (!activeRef.current) {
      if (Date.now() < suppressUntil.current) return;
      handleMouseEnter(e);
      return;
    }
    target.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const entryPoint = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };

      // Order the chain by distance from the cursor to each tool's resting
      // spot — nearest leads the snake, farthest brings up the rear.
      const order = tools
        .map((_, i) => {
          const rest = restPositions[i];
          const dx = rest.left - entryPoint.x;
          const dy = rest.top - entryPoint.y;
          return { index: i, dist: dx * dx + dy * dy };
        })
        .sort((a, b) => a.dist - b.dist)
        .map((entry) => entry.index);
      const ranks = new Array(tools.length);
      order.forEach((toolIndex, rank) => {
        ranks[toolIndex] = rank;
      });
      trailRanksRef.current = ranks;
      setTrailRanks(ranks);

      trail.current = Array.from({ length: TRAIL_LENGTH }, () => ({ ...entryPoint }));
      target.current = entryPoint;
      tools.forEach((_, i) => {
        const pt = points.current[i];
        if (!pt) return;
        pt.x.set((entryPoint.x / 100) * rect.width);
        pt.y.set((entryPoint.y / 100) * rect.height);
      });
    }
    activeRef.current = true;
    setActive(true);
  }

  function disperse() {
    activeRef.current = false;
    target.current = null;
    suppressUntil.current = 0;
    setActive(false);
  }

  function disperseOnClick() {
    disperse();
    // Briefly ignore mouse-move so the scatter is visible before it can re-gather.
    suppressUntil.current = Date.now() + 700;
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!activeRef.current) {
      // Not yet gathered (e.g. touch device tap) — gather on first click.
      handleMouseEnter(e);
      return;
    }
    disperseOnClick();
  }

  return (
    <section id="languages" className="w-full max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Languages &amp; tools
        </h2>
        <p className="mb-12 max-w-xl text-lg text-muted">
          Move your cursor through the box to gather them into a line — click
          to scatter again.
        </p>
      </Reveal>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={disperse}
        onClick={handleClick}
        className="relative h-[420px] w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface-low/60 sm:h-[480px]"
      >
        {tools.map((tool, i) => (
          <ToolBadge
            key={tool.name}
            tool={tool}
            index={i}
            active={active}
            trailRank={trailRanks[i]}
            registerPoint={registerPoint}
          />
        ))}
      </div>
    </section>
  );
}
