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
      title: "Modul Inti Web App Kelas Bisnis",
      content: (
        <div className="mt-0 mb-2">
          <ul className="list-disc pl-4 text-xs md:text-sm text-foreground">
            <li>Dasar-dasar bisnis & mindset pengusaha</li>
            <li>Riset pasar & strategi</li>
            <li>Perencanaan bisnis & keuangan</li>
            <li>Marketing & branding</li>
            <li>Operasional & manajemen</li>
            <li>Growth & scaling up</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Course Niche Bisnis",
      content: (
        <div className="mt-0 mb-2">
          <p className="text-xs md:text-sm text-foreground mb-2">
            Berbagai kategori course bisnis niche yang dapat difilter sesuai kebutuhan:
          </p>
          <ul className="list-disc pl-4 text-xs md:text-sm text-foreground mb-2">
            <li>Tidak memerlukan expert untuk menjalankan (online course terbatas)</li>
            <li>Bukan produk/jasa komoditas</li>
            <li>Semua berasal dari pebisnis nyata</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Klik ‘Daftar Sekarang’ dan Selesaikan Pembayaran",
      content: (
        <div className="mt-0 mb-2">
          <p className="text-xs font-normal text-foreground md:text-sm">
            Setelah melakukan pembayaran, Anda akan diarahkan ke Whatsapp atau Email Admin untuk mendapatkan akses ke Grup Privat Web App Kelas Bisnis.
          </p>
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
