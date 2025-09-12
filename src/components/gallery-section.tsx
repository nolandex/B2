"use client";

import { motion } from "motion/react";

const GallerySection = () => {
  const images = [
    {
      href: "https://ibb.co/rKrNQqDS",
      src: "https://i.ibb.co/Q7wtJhyR/download-42.png",
      alt: "download-42",
      caption: "Orang Yang Mau Melompat Untuk Merubah Hidupnya",
    },
    {
      href: "https://ibb.co/C3xy9W4b",
      src: "https://i.ibb.co/cSz98xR6/download-43.png",
      alt: "download-43",
      caption: "Dan Yang Mau Berdiam Diri.",
    },
  ];

  return (
    <section className="mt-6 mb-10">
      {/* Title with gradient lines */}
      <div className="flex items-center w-full gap-4 mb-6">
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug whitespace-nowrap px-6">
          Our Gallery
        </h2>
        <div className="flex-1 h-[3px] bg-gradient-to-r from-primary to-primary/30 via-transparent"></div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/5] rounded-xl bg-gradient-to-r from-[#2563EB] via-[#2563EB]/70 to-[#2563EB]/40 p-[2px] shadow-lg overflow-hidden"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-0 right-0 px-4 md:px-6">
                  <p className="text-white font-bold text-lg md:text-2xl lg:text-3xl leading-snug drop-shadow-lg">
                    {item.caption}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
