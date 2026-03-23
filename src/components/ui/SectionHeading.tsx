"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.h2
        className="font-display text-3xl font-normal text-gold md:text-4xl lg:text-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 font-body text-sm tracking-[0.15em] text-stone uppercase"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
