"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SantaLaughButton from "@/components/SantaLaugh";

export default function MagicReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className='min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-green-100 to-red-100'
    >
      <h1 className='text-5xl font-bold mb-6 sparkle'>🎄 Santa’s Magic Hub</h1>

      <p className='max-w-xl text-lg mb-8'>
        22 days. 22 magical builds. Stories, snow, music, joy — all in one
        place.
      </p>

      <SantaLaughButton />

      <Link
        href='/magic'
        className='mt-8 px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:scale-105 transition'
      >
        Enter the Magic ✨
      </Link>
    </motion.div>
  );
}
