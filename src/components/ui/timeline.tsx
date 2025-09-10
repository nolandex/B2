"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// ✅ Komponen Timeline
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans md:px-10 
                 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div ref={ref} className="relative max-w-7xl mx-auto py-16">
        {data.map((item, index) => (
          <div
            key={`timeline-item-${index}`}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Titik dan Judul */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[hsl(var(--background))] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {item.title}
              </h3>
            </div>

            {/* Konten */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Garis Timeline */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]     
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-700 to-transparent    
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// ✅ Komponen Utama
export default function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: "2024",
      content: (
        <div className="mt-0 mb-2">
          <p className="text-xs font-normal text-[hsl(var(--foreground))] md:text-sm">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover md:h-64 lg:h-80 mt-2"
          />
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="mt-0 mb-2">
          <p className="text-xs font-normal text-[hsl(var(--foreground))] md:text-sm mb-1">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-xs font-normal text-[hsl(var(--foreground))] md:text-sm mb-1">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover md:h-64 lg:h-80 mt-1"
          />
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="mt-0 mb-2">
          <div className="mb-2">
            <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover md:h-64 lg:h-80 mt-1"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full m-0 p-0 flex flex-col items-center 
                       bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Header */}
      <div className="max-w-7xl mx-auto pt-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-3 font-bold">
          Changelog from my journey
        </h2>
        <p className="text-sm md:text-base max-w-sm text-[hsl(var(--muted-foreground))]">
          I've been working on Aceternity for the past 2 years. Here's a
          timeline of my journey.
        </p>
      </div>

      {/* Timeline */}
      <Timeline data={data} />

      {/* CTA */}
      <div className="mt-6 mb-4 w-full flex justify-center">
        <button
          className="px-14 py-2 rounded-md font-medium text-base 
                     bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] 
                     shadow-[0_4px_14px_0_hsl(var(--primary)/0.4)] 
                     hover:shadow-[0_6px_20px_hsl(var(--primary)/0.3)] 
                     hover:bg-[hsl(var(--primary)/0.9)] 
                     transition duration-200 ease-linear"
        >
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
}