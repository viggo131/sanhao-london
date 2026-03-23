"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handler = () => ScrollTrigger.update();
    lenis.on("scroll", handler);
    return () => {
      lenis.off("scroll", handler);
    };
  }, [lenis]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current || !bgRef.current) return;

      gsap.to(bgRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-dark"
    >
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero.jpg"
          alt="Sanhao London restaurant interior"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="font-display text-[40px] font-normal tracking-wide text-cream md:text-6xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2.4,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          className="mt-4 font-body text-sm uppercase tracking-[0.15em] text-offwhite/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {SITE.subtitle}
        </motion.p>

        <motion.a
          href="#about"
          className="mt-10 border border-gold px-8 py-3 font-body text-sm uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2.8,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo("#about", { duration: 1.2 });
          }}
        >
          Explore the Journey
        </motion.a>
      </div>

      {/* Scroll-down chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
