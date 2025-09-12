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
    <section className="relative flex flex-col items-center justify-center w-full pt-6 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug mt-8"
          >
            Bangun Bisnis Lebih Mudah
          </motion.h2>
        </div>
      </div>

      {/* Grid fitur */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 relative overflow-visible max-w-7xl mx-auto px-4">  
        {FEATURES.map((feature, index) => (  
          <motion.div  
            key={feature.title}  
            initial={{ opacity: 0, y: 30 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}  
            className={cn(  
              "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",  
              index === 3 && "lg:col-span-2",  
              index === 2 && "md:col-span-2 lg:col-span-1"  
            )}  
          >  
            <MagicCard  
              gradientFrom="#3b82f6"  
              gradientTo="#1d4ed8"  
              className="p-4 lg:p-6 lg:rounded-3xl"  
              gradientColor="rgba(59,130,246,0.2)"  
            >  
              <div className="flex items-center space-x-4 mb-3">  
                <h3 className="text-xl font-semibold flex items-center gap-2">  
                  <feature.icon className="size-5 text-primary" />  
                  {feature.title}  
                </h3>  
              </div>  
              <p className="text-sm text-muted-foreground">  
                {feature.description}  
              </p>  

              <div className="mt-3 w-full bg-card/50 overflow-hidden rounded-lg">  
                <img  
                  src={feature.image}  
                  alt={feature.title}  
                  className="w-full h-full object-cover"  
                />  
              </div>  
            </MagicCard>  
          </motion.div>  
        ))}  
      </div>  

      {/* 🔹 CTA Button */}  
      <div className="mt-8 mb-0">  
        <button  
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)]   
            hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]   
            hover:bg-[rgba(0,118,255,0.9)]   
            px-12 py-2 bg-[#0070f3]   
            rounded-md text-white font-medium   
            transition duration-200 ease-linear text-base"  
        >  
          Daftar Sekarang  
        </button>  
      </div>  
    </section>
  );
}
