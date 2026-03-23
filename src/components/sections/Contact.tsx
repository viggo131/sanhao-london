"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeInLeft, fadeInRight, fadeUp, staggerContainer } from "@/lib/animations";
import { SITE, VISIT_US } from "@/lib/constants";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <GoldDivider />
      <section id="contact" className="relative overflow-hidden bg-dark px-6 py-20 md:py-28 lg:py-32">
        {/* Subtle background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/contact.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-dark/80" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Visit us image / map area */}
          <motion.div
            className="flex-shrink-0 overflow-hidden rounded-sm lg:w-[45%]"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm lg:aspect-auto lg:h-full lg:min-h-[500px]">
              <Image
                src="/images/visit-us.jpg"
                alt="Visit Sanhao London"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={80}
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="flex flex-col justify-center lg:w-[55%]"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display text-2xl italic text-gold md:text-3xl">
              Visit Us
            </h2>
            <p className="mt-4 font-body text-base leading-[1.7] text-offwhite">
              {VISIT_US.body}
            </p>

            <h3 className="mt-10 font-display text-xl italic text-gold md:text-2xl">
              Get in Touch
            </h3>
            <p className="mt-3 font-body text-sm text-stone">
              We would love to hear from you. Send us an inquiry below.
            </p>

            <motion.form
              className="mt-8 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border-0 border-b border-stone/40 bg-transparent pb-3 font-body text-sm text-cream placeholder:text-stone/60 focus:border-gold focus:outline-none"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border-0 border-b border-stone/40 bg-transparent pb-3 font-body text-sm text-cream placeholder:text-stone/60 focus:border-gold focus:outline-none"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full resize-none border-0 border-b border-stone/40 bg-transparent pb-3 font-body text-sm text-cream placeholder:text-stone/60 focus:border-gold focus:outline-none"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  className="w-full bg-gold py-3 font-body text-sm font-medium uppercase tracking-widest text-dark transition-colors duration-300 hover:bg-gold/90"
                >
                  {submitted ? "Sent!" : "Send"}
                </button>
              </motion.div>
            </motion.form>

            {/* Contact details */}
            <div className="mt-10 space-y-3 border-t border-stone/10 pt-8">
              <p className="font-body text-sm text-stone">
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-gold"
                >
                  Phone: {SITE.phone}
                </a>
              </p>
              <p className="font-body text-sm text-stone">
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold"
                >
                  Email: {SITE.email}
                </a>
              </p>
              <p className="font-body text-sm text-stone">
                Address: {SITE.address}
              </p>
              <div className="mt-4 space-y-1">
                <p className="font-body text-sm font-medium text-offwhite">
                  Opening Hours
                </p>
                <p className="font-body text-sm text-stone">
                  {SITE.hours.weekday}
                </p>
                <p className="font-body text-sm text-stone">
                  {SITE.hours.weekend}
                </p>
              </div>
              <div className="mt-6 border-t border-stone/10 pt-6">
                <p className="font-body text-sm font-medium text-offwhite">
                  Follow Us
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-stone">
                  {SITE.followUs}
                </p>
                <p className="mt-4 font-display text-sm italic leading-relaxed text-stone">
                  {SITE.closingLine}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
