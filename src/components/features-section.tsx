"use client";

import { motion } from "motion/react";
import { Zap, Target, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

export default function FeaturesSection() {
  const FEATURES = [
    {
      title: "Bingung Mulai Bisnis?",
      description:
        "Dapatkan panduan praktis dari pebisnis berpengalaman agar langkah pertamamu lebih terarah.",
      icon: Zap,
      image:
        "https://ik.imagekit.io/nf7nyedso/0602016e-78bd-46be-8fcc-422d31b4d9c5_20250911_182228_0000.png?updatedAt=1757590667229",
    },
    {
      title: "Networking Sulit?",
      description:
        "Susah cari teman bisnis serius? Komunitas ini mempertemukan kamu dengan yang mau berkembang.",
      icon: Target,
      image:
        "https://ik.imagekit.io/nf7nyedso/095e1a53-87f2-4c34-9869-4ac69a000ca9_20250911_182357_0000-min.png?updatedAt=1757590665391",
    },
    {
      title: "Investasi Leher ke Atas",
      description:
        "Ilmu adalah aset paling berharga. Upgrade skill dan wawasan bisnis untuk hasil jangka panjang.",
      icon: BarChart3,
      image:
        "https://ik.imagekit.io/nf7nyedso/e24b91bf-c966-4332-b404-4ef5807e1529_20250911_182024_0000-min.png?updatedAt=1757590665249",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-12 px-4 bg-background">
      {/* Judul Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-foreground mb-4">
          Bangun Bisnis Lebih Mudah
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Temukan fitur-fitur yang membantumu memulai dan mengembangkan bisnis dengan lebih efektif.
        </p>
      </motion.div>

      {/* Grid Fitur */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            className="relative flex flex-col rounded-2xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          >
            <MagicCard
              gradientFrom="#3b82f6"
              gradientTo="#1d4ed8"
              className="p-4 lg:p-6 lg:rounded-3xl"
              gradientColor="rgba(59,130,246,0.2)"
            >
              <div className="flex items-center space-x-3 mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>

              <div className="mt-4 w-full overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <button
          className="bg-[#0070f3] text-white font-medium text-base px-12 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-200"
        >
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
}
