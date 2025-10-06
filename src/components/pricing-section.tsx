"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  const plan = {
    title: "Akses Selamanya",
    price: "Rp300.000",
    desc: "Bonus Website Landing Page / Company Profile Dengan Domain & Hosting",
    buttonText: "Daftar Sekarang",
    features: ["WEB-APP", "Grup Eksklusif ", "Support Selamanya", "-"],
  };

  // 🔹 Load Midtrans Snap script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
      import.meta.env.VITE_MIDTRANS_CLIENT_KEY
    );
    document.body.appendChild(script);
  }, []);

  // 🔹 Fungsi untuk bayar
  const handlePay = async () => {
    try {
      const response = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: "ORDER-" + Date.now(),
          productName: "Akses Selamanya",
          price: 300000,
          quantity: 1,
          customerDetails: {
            firstName: "Budi",
            email: "budi@example.com",
            phone: "081234567890",
          },
        }),
      });

      const data = await response.json();

      if (data?.token) {
        window.snap.pay(data.token, {
          onSuccess: (result) => console.log("Success:", result),
          onPending: (result) => console.log("Pending:", result),
          onError: (result) => console.log("Error:", result),
          onClose: () => console.log("Popup closed without payment"),
        });
      } else {
        alert("Gagal membuat transaksi.");
        console.error("No token:", data);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Terjadi kesalahan saat memproses pembayaran.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-4xl py-10 px-4 mx-auto">
      {/* Gradient Divider */}
      <div className="mx-auto mb-4 h-[2px] w-full max-w-xs bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-6">
        Our Pricing
      </h2>

      {/* Pricing Card */}
      <div className="w-full max-w-md">
        <div className="flex flex-col relative rounded-2xl transition-all bg-gradient-to-b from-slate-950 to-slate-900 border border-blue-600 shadow-lg overflow-hidden mx-auto">
          {/* Glow Effect */}
          <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-blue-600/30 rounded-2xl blur-[8rem] -z-10"></div>

          {/* Header */}
          <div className="p-6 flex flex-col items-start w-full relative">
            <h2 className="font-semibold text-xl text-white">{plan.title}</h2>
            <h3 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              {plan.price}
            </h3>
            <p className="text-sm md:text-base text-slate-300 mt-2">
              {plan.desc}
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col items-start w-full px-6 pb-6">
            <button
              onClick={handlePay}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear w-full text-center"
            >
              {plan.buttonText}
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-col items-start w-full px-6 pb-6 gap-y-3">
            <span className="text-base font-medium text-white mb-2">
              Includes:
            </span>
            {plan.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-start gap-2 text-slate-200"
              >
                <CheckIcon className="w-5 h-5 text-blue-400" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
