"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Expertise.", href: "#expertise" },
  { label: "Languages.", href: "#languages" },
  { label: "Work.", href: "#projects" },
  { label: "Experience.", href: "#experience" },
  { label: "Contact.", href: "#contact" },
];

function handleClick(href: string) {
  if (href.startsWith("#")) {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.open(href, "_blank");
  }
}

function Hamburger({ expanded }: { expanded: boolean }) {
  return (
    <span className="flex h-8 w-8 shrink-0 flex-col items-center justify-center gap-1 rounded-full transition-colors hover:bg-surface-high">
      <motion.span
        animate={{ rotate: expanded ? 45 : 0, y: expanded ? 5 : 0 }}
        className="h-[1.5px] w-4 bg-foreground"
      />
      <motion.span
        animate={{ opacity: expanded ? 0 : 1 }}
        className="h-[1.5px] w-4 bg-foreground"
      />
      <motion.span
        animate={{ rotate: expanded ? -45 : 0, y: expanded ? -5 : 0 }}
        className="h-[1.5px] w-4 bg-foreground"
      />
    </span>
  );
}

export default function Nav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Desktop: pill that expands horizontally on hover */}
      <motion.header
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 overflow-hidden rounded-full border border-border/60 bg-surface/80 shadow-lg backdrop-blur-xl sm:block"
      >
        <motion.div
          animate={{ width: expanded ? "auto" : 190 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center px-2 py-2"
        >
          <button
            aria-label="Toggle menu"
            onClick={() => setExpanded((e) => !e)}
          >
            <Hamburger expanded={expanded} />
          </button>
          <a
            href="#"
            className="shrink-0 whitespace-nowrap px-3 py-1.5 text-sm font-semibold tracking-tight text-foreground"
          >
            Ashish K P.
          </a>
          <motion.nav
            animate={{ opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, delay: expanded ? 0.25 : 0 }}
            style={{ pointerEvents: expanded ? "auto" : "none" }}
            className="flex items-center gap-1 whitespace-nowrap pl-1"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-high hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <div className="ml-1 border-l border-border pl-1">
              <ThemeToggle />
            </div>
          </motion.nav>
        </motion.div>
      </motion.header>

      {/* Mobile: fixed bar with tap-to-open dropdown */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 sm:hidden"
      >
        <div className="mx-4 mt-4 flex items-center justify-between rounded-full border border-border/60 bg-surface/90 px-3 py-2 shadow-lg backdrop-blur-xl">
          <button
            aria-label="Toggle menu"
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-2"
          >
            <Hamburger expanded={expanded} />
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Ashish K P.
            </span>
          </button>
          <ThemeToggle />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-4 mt-2 flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/95 p-2 shadow-lg backdrop-blur-xl"
            >
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    handleClick(link.href);
                    setExpanded(false);
                  }}
                  className="rounded-xl px-4 py-3 text-left text-sm text-muted transition-colors hover:bg-surface-high hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
