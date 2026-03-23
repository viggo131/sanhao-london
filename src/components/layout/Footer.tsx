"use client";

import { useLenis } from "lenis/react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, { duration: 1.2 });
  };

  return (
    <footer className="bg-dark px-6">
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gold/20" />
      </div>

      <div className="mx-auto max-w-5xl py-12 text-center md:py-16">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-body text-sm text-stone transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-6 font-body text-xs text-stone/60">
          {SITE.copyright}
        </p>
      </div>
    </footer>
  );
}
