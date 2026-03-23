"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/constants";
import { fadeUp, navStagger } from "@/lib/animations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const lenis = useLenis((l) => {
    setIsScrolled(l.scroll > 100);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isMobileMenuOpen, lenis]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      lenis?.scrollTo(href, { duration: 1.2 });
    },
    [lenis]
  );

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
          {/* Desktop links */}
          <motion.ul
            className="hidden items-center gap-8 md:flex"
            variants={navStagger}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.label} variants={fadeUp}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-[14px] uppercase tracking-widest text-offwhite transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile hamburger */}
          <motion.button
            ref={menuButtonRef}
            className="relative z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-offwhite" />
            ) : (
              <Menu className="h-6 w-6 text-offwhite" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex items-center justify-center bg-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col items-center gap-8"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.label} variants={fadeUp}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-display text-3xl tracking-wide text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
