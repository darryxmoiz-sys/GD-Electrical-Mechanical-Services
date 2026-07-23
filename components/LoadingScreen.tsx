"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GAUGES = [
  { label: "HULL", delay: 0 },
  { label: "ELEC", delay: 0.12 },
  { label: "AUX", delay: 0.24 },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("gdem-intro-seen");

    if (reduced || seen) {
      setReady(true);
      return;
    }

    setVisible(true);
    setReady(true);
    document.body.style.overflow = "hidden";
    sessionStorage.setItem("gdem-intro-seen", "1");

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1650);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-abyss-600"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="flex items-end gap-8">
            {GAUGES.map((g) => (
              <div key={g.label} className="flex flex-col items-center gap-3">
                <div className="relative h-16 w-16 rounded-full border border-brass-500/50">
                  <div className="absolute inset-1 rounded-full border border-steel-500/40" />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-6 w-[1.5px] origin-bottom bg-safety-400"
                    style={{ translateX: "-50%", translateY: "-100%" }}
                    initial={{ rotate: -110 }}
                    animate={{ rotate: 6 }}
                    transition={{ duration: 0.65, delay: g.delay + 0.15, ease: [0.2, 0.7, 0.3, 1] }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-100" />
                </div>
                <motion.span
                  className="eyebrow text-steel-300"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.7] }}
                  transition={{ duration: 0.5, delay: g.delay + 0.55 }}
                >
                  {g.label}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="eyebrow mt-10 text-brass-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            Systems check complete
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
