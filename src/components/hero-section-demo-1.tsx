"use client";

import { motion } from "motion/react";
import AnimatedTooltipPreview from "@/components/animated-tooltip-demo";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        {/* Headline */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-foreground md:text-4xl lg:text-7xl">
          {"Bangun Bisnis Anda dengan Komunitas & Kelas Eksklusif"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-muted-foreground"
        >
          Gabung dengan komunitas bisnis privat berbayar dan akses puluhan kelas 
          dari para pebisnis berpengalaman. Belajar, networking, dan tumbuh bersama.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
          className="relative z-10 flex justify-center mb-8"
        >
          <button
            className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] 
              hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] 
              hover:bg-[rgba(0,118,255,0.9)] 
              px-14 py-2 bg-[#0070f3] 
              rounded-md text-white font-medium 
              transition duration-200 ease-linear text-base"
          >
            Daftar Sekarang
          </button>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="relative z-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tim Kami
            </h2>
          </div>

          {/* Responsive wrapper fix */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
            <AnimatedTooltipPreview />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
