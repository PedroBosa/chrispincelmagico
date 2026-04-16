"use client";

import { motion } from "framer-motion";

const hiddenStates = {
  up: { opacity: 0, y: 36 },
  down: { opacity: 0, y: -36 },
  left: { opacity: 0, x: 36 },
  right: { opacity: 0, x: -36 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  return (
    <motion.div
      className={className}
      initial={hiddenStates[direction] || hiddenStates.up}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
