"use client";
import { motion } from "framer-motion";

export default function ElfHover({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ rotate: -2, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className='cursor-pointer'
    >
      {children}
    </motion.div>
  );
}
