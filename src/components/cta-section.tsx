"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 px-4"> {/* reduced from py-20 */}
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-6 md:p-10 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-40"></div>
          
          <div className="relative z-10 text-center">
            {/* Quote Text */}
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-3xl font-semibold text-foreground mb-3 italic leading-snug"
            >
              "An investment in knowledge pays the best interest."
            </motion.h2>

            {/* Author */}
            <motion.p 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-muted-foreground mb-6"
            >
              — Benjamin Franklin
            </motion.p>

            {/* Button */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-5 py-2.5 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear flex items-center justify-center group text-sm">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}