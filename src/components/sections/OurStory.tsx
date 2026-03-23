"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeInRight, staggerContainer } from "@/lib/animations";
import { OUR_STORY } from "@/lib/constants";
import GoldDivider from "@/components/ui/GoldDivider";

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
      if (!imageRef.current) return;

      gsap.to(imageRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <GoldDivider />
      <section
        ref={sectionRef}
        id="about"
        className="bg-dark px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 overflow-hidden lg:w-[45%]">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src="/images/about.jpg"
                alt="Sanhao London restaurant ambiance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={80}
              />
            </div>
          </div>

          {/* Text content */}
          <motion.div
            className="flex flex-col justify-center lg:w-[55%]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="font-display text-3xl font-normal text-gold md:text-4xl"
              variants={fadeInRight}
            >
              {OUR_STORY.heading}
            </motion.h2>

            <div className="mt-8 space-y-6">
              {OUR_STORY.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-base leading-[1.7] text-offwhite"
                  variants={fadeUp}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#menu"
              className="mt-8 inline-block font-body text-sm text-gold transition-colors hover:underline"
              variants={fadeUp}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo("#menu", { duration: 1.2 });
              }}
            >
              {OUR_STORY.cta}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
