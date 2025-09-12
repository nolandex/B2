"use client";

import { motion } from "motion/react";

const GallerySection = () => {
  const images = [
    "https://i.ibb.co.com/NgGjX7W5/download-35.png",
    "https://i.ibb.co.com/fzbg0rsB/download-32.png",
  ];

  return (
    <section className="mt-6 mb-10"> {/* jarak atas kecil */}
      <div className="flex items-center w-full gap-4 mb-6">
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug whitespace-nowrap px-6">
          Our Gallery
        </h2>
        <div className="flex-1 h-[3px] bg-gradient-to-r from-primary to-primary/30 via-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden bg-card border border-border/50 hover:border-border/100 transition-colors"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
