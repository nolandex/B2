"use client";

import { Timeline } from "@/components/ui/timeline";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export default function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: "2024",
      content: (
        <div className="mt-0 mb-2">
          <p className="text-xs font-normal text-foreground md:text-sm">
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
          <p className="text-xs font-normal text-foreground md:text-sm mb-1">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="text-xs font-normal text-foreground md:text-sm mb-1">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
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
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">✅ Card grid component</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">✅ Startup template Aceternity</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">✅ Random file upload lol</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">✅ Himesh Reshammiya Music CD</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">✅ Salman Bhai Fan Club registrations open</div>
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
    <section className="relative w-full overflow-clip m-0 p-0 flex flex-col items-center bg-background text-foreground">
      {/* Timeline */}
      <div className="w-full bg-background">
        <Timeline data={data} className="!mt-0 !mb-0 !pt-0 !pb-0" />
      </div>

      {/* CTA Button */}
      <div className="mt-6 mb-4 bg-background w-full flex justify-center">
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