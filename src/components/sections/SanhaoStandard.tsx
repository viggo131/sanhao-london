"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ChefHat, Flame, Leaf, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SANHAO_STANDARD } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const ICON_MAP = {
  ChefHat,
  Flame,
  Leaf,
  Heart,
} as const;

export default function SanhaoStandard() {
  return (
    <section id="standard" className="relative overflow-hidden bg-brown px-6 py-20 md:py-28 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/choose-us.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          quality={80}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/60 to-brown/80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading title="The Sanhao Standard" />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SANHAO_STANDARD.map((card) => {
            const Icon = ICON_MAP[card.icon];
            return (
              <motion.div
                key={card.title}
                className="group flex flex-col items-center text-center"
                variants={fadeUp}
              >
                <motion.div className="transition-transform duration-300 group-hover:rotate-[5deg]">
                  <Icon className="h-12 w-12 text-gold" strokeWidth={1.5} />
                </motion.div>

                <h3 className="mt-5 font-body text-lg font-medium text-cream">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-[280px] font-body text-sm leading-relaxed text-stone">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
