"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { ATMOSPHERE_IMAGES, OUR_NOODLES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Atmosphere() {
  return (
    <>
      <GoldDivider />
      <section id="noodles" className="bg-dark px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="The Atmosphere" />

          {/* Masonry image grid */}
          <motion.div
            className="mt-12 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-3 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {ATMOSPHERE_IMAGES.map((img) => (
              <motion.div
                key={img.id}
                className={`relative overflow-hidden rounded-sm ${img.span} ${img.aspect}`}
                variants={scaleIn}
              >
                <Image
                  src={`/images/atmosphere-${img.id}.jpg`}
                  alt={`Sanhao London atmosphere ${img.id}`}
                  fill
                  className="object-cover"
                  sizes={
                    img.span.includes("col-span-3")
                      ? "100vw"
                      : img.span.includes("col-span-2")
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                  }
                  quality={80}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Overlay statement */}
          <motion.div
            className="mt-16 text-center md:mt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-display text-2xl font-normal tracking-wide text-cream md:text-4xl lg:text-5xl">
              A Sanctuary of Culinary Art
            </p>
            <p className="mt-4 font-display text-lg font-normal text-gold md:text-2xl">
              Where Tradition Meets Modern Sophistication
            </p>
          </motion.div>

          {/* Noodle narrative */}
          <motion.div
            className="mx-auto mt-16 max-w-3xl text-center md:mt-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="font-display text-3xl font-normal text-gold md:text-4xl"
              variants={fadeUp}
            >
              {OUR_NOODLES.heading}
            </motion.h3>
            <motion.p
              className="mt-6 font-body text-base leading-[1.7] text-offwhite"
              variants={fadeUp}
            >
              {OUR_NOODLES.body}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
