        "use client";

import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa yang saya dapatkan di Kelas Bisnis?",
      answer:
        "Di Kelas Bisnis, Anda akan mendapatkan panduan langkah demi langkah untuk membangun dan mengembangkan bisnis online. Mulai dari strategi pemasaran, branding, hingga praktek langsung membuat sistem bisnis digital."
    },
    {
      question: "Apa itu Komunitas Bisnis Privat?",
      answer:
        "Komunitas Bisnis Privat adalah ruang eksklusif untuk para anggota yang serius membangun bisnis. Anda bisa berdiskusi, bertanya, dan networking langsung dengan mentor maupun sesama pebisnis."
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer:
        "Ya, semua kelas dan komunitas bersifat berbayar. Kami tidak menyediakan kelas gratis. Anda bisa memilih paket sesuai kebutuhan untuk mendapatkan akses penuh ke materi dan pendampingan."
    },
    {
      question: "Bagaimana cara saya bergabung?",
      answer:
        "Anda cukup mendaftar melalui halaman pendaftaran kami. Setelah itu, Anda akan langsung mendapat akses ke materi kelas dan undangan bergabung ke komunitas bisnis privat."
    }
  ];

  return (
    <section className="mb-20">
      {/* Judul */}
      <div className="flex items-center w-full gap-4 mb-8">
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug whitespace-nowrap px-6">
          FAQ
        </h2>
        <div className="flex-1 h-[3px] bg-gradient-to-r from-primary to-primary/30 via-transparent"></div>
      </div>

      {/* List FAQ */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="font-medium text-foreground">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
