"use client";

import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in the Professional plan?",
      answer: "The Professional plan includes unlimited projects, 100GB storage, priority support, SSL certificate, custom domain, and advanced analytics."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all new users. No credit card required to get started."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support via email and live chat. Priority support is included with the Professional plan."
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center w-full gap-4 mb-8">
        <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug whitespace-nowrap px-6">FAQ</h2>
        <div className="flex-1 h-[3px] bg-gradient-to-r from-primary to-primary/30 via-transparent"></div>
      </div>

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
                <span className="font-medium text-foreground">{faq.question}</span>
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