"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { days } from "../constant/challengeDays";
import ElfHover from "../components/ElfHover";
import SantaLaughButton from "../components/SantaLaugh";
import { motion } from "framer-motion";

export default function LandingPage() {
  const liveDays = days.filter((d) => d.live).map((d) => d.day);

  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />

      <section className='flex flex-col items-center text-center mt-20 px-6'>
        <motion.h1
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-5xl font-bold text-green-800 mb-4'
        >
          🎄 Santa’s Magic Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-lg text-gray-900 max-w-xl font-medium mb-4'
        >
          22 Features in 22 Days. Pure Christmas Magic. A daily build challenge
          from Dec 3 Today → Dec 25.
        </motion.p>

        <div className='flex flex-col items-center gap-4'>
          <ElfHover>
            <Link
              href='/magic'
              className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 mt-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-semibold glow-effect'
            >
              Enter the Magic Hub
            </Link>
          </ElfHover>
          <SantaLaughButton />
        </div>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-20 max-w-5xl mx-auto'>
        {Array.from({ length: 22 }).map((_, i) => {
          const dayNumber = i + 1;
          const isLive = liveDays.includes(dayNumber);
          return (
            <ElfHover key={i}>
              <div
                className={`p-6 rounded-xl border shadow-sm text-center transition cursor-pointer ${
                  isLive
                    ? "bg-green-100 border-green-400 shadow-green-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className='font-semibold text-gray-900'>Day {dayNumber}</p>
                <p className='text-sm text-gray-700 mt-1'>
                  {dayNumber === 1
                    ? "🚀 Launch Day"
                    : isLive
                    ? "🔴 Live Now"
                    : "Coming soon..."}
                </p>
              </div>
            </ElfHover>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
