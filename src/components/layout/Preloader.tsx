"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [phase, setPhase] = useState<"revealing" | "holding" | "exiting" | "done">("revealing");

  useEffect(() => {
    // Characters reveal over ~900ms (300ms stagger x 2 + 300ms for last char)
    const holdTimer = setTimeout(() => setPhase("holding"), 900);
    const exitTimer = setTimeout(() => setPhase("exiting"), 1500);
    const doneTimer = setTimeout(() => setPhase("done"), 2100);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
    }
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          animate={
            phase === "exiting"
              ? { opacity: 0, scale: 1.05 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex gap-2">
            {["叁", "號"].map((char, i) => (
              <motion.span
                key={char}
                className="font-display text-[clamp(120px,15vw,160px)] text-gold"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="mt-4 font-body text-sm tracking-[0.2em] text-stone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Sanhao London
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
