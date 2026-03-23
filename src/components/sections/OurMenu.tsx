"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import {
  fadeUp,
  fadeInLeft,
  staggerContainer,
} from "@/lib/animations";
import { MENU_HIGHLIGHTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";

export default function OurMenu() {
  const lenis = useLenis();

  return (
    <>
      <GoldDivider />
      <section id="menu" className="bg-dark px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Menu" />

          <div className="mt-12 flex flex-col gap-12 md:mt-16 lg:flex-row lg:gap-16">
            {/* Food image */}
            <motion.div
              className="flex-shrink-0 lg:w-[45%]"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/menu.jpg"
                  alt="Sanhao London signature ramen bowl"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={80}
                />
              </div>
            </motion.div>

            {/* Menu highlights */}
            <div className="flex flex-col justify-center lg:w-[55%]">
              <motion.h3
                className="font-display text-2xl font-normal text-cream md:text-3xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                Menu Highlights
              </motion.h3>

              <motion.ul
                className="mt-8 space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {MENU_HIGHLIGHTS.map((item) => (
                  <motion.li
                    key={item.name}
                    className="border-b border-stone/10 pb-5 last:border-0"
                    variants={fadeUp}
                  >
                    <h4 className="font-body text-base font-medium text-cream">
                      {item.name}
                    </h4>
                    <p className="mt-1 font-body text-sm text-stone">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="#contact"
                className="mt-8 inline-block self-start border border-gold px-8 py-3 text-center font-body text-sm uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                onClick={(e) => {
                  e.preventDefault();
                  lenis?.scrollTo("#contact", { duration: 1.2 });
                }}
              >
                View the Full Menu
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
