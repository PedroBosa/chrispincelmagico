"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappDirectLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappDirectLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-4 right-3 z-50 inline-flex items-center justify-center gap-3 rounded-full bg-[#0c6e70] px-0 py-0 text-white shadow-[0_18px_35px_rgba(12,110,112,0.28)] sm:bottom-6 sm:right-6 sm:px-4 sm:py-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#0c6e70]/35"
        animate={{ scale: [1, 1.12, 1], opacity: [0.42, 0.18, 0.42] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/18 sm:h-10 sm:w-10">
        <MessageCircle size={20} />
      </span>
      <span className="relative hidden text-sm font-semibold sm:inline">
        Agende pelo WhatsApp
      </span>
    </motion.a>
  );
}
