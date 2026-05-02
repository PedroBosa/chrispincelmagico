"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { publicAsset } from "@/data/site";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal shortly after site loads for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1c1716]/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[400px] overflow-hidden rounded-[2rem] bg-[#fffaf5] shadow-[0_32px_80px_rgba(41,26,26,0.2)] luxury-outline"
          >
            <div className="absolute right-3 top-3 z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#0c6e70]"
                aria-label="Fechar promo"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="relative w-full bg-black flex justify-center">
              <video
                src={publicAsset("/src/videos/hero-video.mp4")}
                autoPlay
                controls
                playsInline
                className="w-full max-h-[60vh] object-contain"
              />
            </div>
            
            <div className="p-5 text-center bg-white/50 backdrop-blur-md">
              <h3 className="font-display text-2xl font-semibold text-[#2d2625] mb-2">
                Especial de Maio!
              </h3>
              <p className="text-[#6d615d] text-[0.95rem] leading-snug mb-4">
                Sobrancelha de <span className="line-through opacity-75">R$300</span> por <strong className="text-[#0c6e70] font-bold text-lg">R$200</strong>. Agenda liberada com vagas limitadas!
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary py-3"
              >
                Quero Aproveitar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
