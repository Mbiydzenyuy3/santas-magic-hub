"use client";

import Link from "next/link";
import ElfHover from "@/components/ElfHover";
import Snow from "@/components/Snow";
import Sparkles from "@/components/Sparkles";
import { motion } from "framer-motion";

const features = [
  // Generators
  {
    day: 4,
    name: "Christmas Quotes Generator",
    icon: "",
    href: "/magic/quotes"
  },
  {
    day: 5,
    name: "Christmas Jokes Generator",
    icon: "",
    href: "/magic/jokes"
  },
  { day: 6, name: "Elf Name Generator", icon: "", href: "/magic/elf-name" },
  {
    day: 12,
    name: "Gift Recommendation Engine",
    icon: "",
    href: "/magic/gift-recommender"
  },
  { day: 16, name: "Secret Santa", icon: "", href: "/magic/secret-santa" },
  {
    day: 20,
    name: "Color Palette Generator",
    icon: "",
    href: "/magic/color-palette"
  },

  // Games
  {
    day: 9,
    name: "Santa’s Names Rating Tool",
    icon: "",
    href: "/magic/naughty-or-nice"
  },
  {
    day: 17,
    name: "Christmas Quiz Game",
    icon: "",
    href: "/magic/christmas-quiz"
  },

  // Creative Tools
  { day: 2, name: "Santa Chat", icon: "", href: "/magic/santa-chat" },
  { day: 3, name: "Christmas Countdown", icon: "", href: "/magic/countdown" },
  {
    day: 7,
    name: "Greeting Card Maker",
    icon: "",
    href: "/magic/greeting-cards"
  },
  {
    day: 8,
    name: "Christmas Story Maker",
    icon: "",
    href: "/magic/story-teller"
  },
  {
    day: 10,
    name: "Snowfall Customizer",
    icon: "",
    href: "/magic/snowfall-customizer"
  },
  {
    day: 11,
    name: "Santa Tracker Animation",
    icon: "",
    href: "/magic/santa-tracker"
  },
  {
    day: 13,
    name: "Christmas Music Player",
    icon: "",
    href: "/magic/christmas-music"
  },
  {
    day: 14,
    name: "Tree Decorator",
    icon: "",
    href: "/magic/tree-decorator"
  },
  {
    day: 15,
    name: "Build-Your-Snowman",
    icon: "",
    href: "/magic/snowman-builder"
  },
  { day: 19, name: "Photo Filter", icon: "", href: "/magic/photo-filters" },
  { day: 21, name: "E-Card Sharing", icon: "", href: "/magic/share" }
];

export default function MagicHub() {
  const generators = features.filter((f) =>
    [4, 5, 6, 12, 16, 20].includes(f.day)
  );
  const games = features.filter((f) => [9, 17].includes(f.day));
  const creativeTools = features.filter(
    (f) => ![4, 5, 6, 12, 16, 20, 9, 17].includes(f.day)
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 relative overflow-hidden'>
      <Snow />
      <Sparkles />

      <div className='top-0 left-8 p-4 absolute z-20'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 px-4 py-2 bg-red-800 backdrop-blur-md hover:bg-red-700 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span>←</span>
          Back to Home
        </Link>
      </div>

      <div className='py-20 px-6 relative z-10'>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-5xl font-bold text-green-800 mb-6 text-center'
        >
          🎄 Santa’s Christmas Village
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-gray-900 mb-16 font-medium text-center text-lg'
        >
          Explore the magical Christmas tools unlocked so far, grouped by wonder
        </motion.p>

        {/* Generators Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-red-700 mb-8 text-center'>
            Generators
          </h2>
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {generators.map((feature) => (
              <FeatureCard key={feature.day} feature={feature} />
            ))}
          </motion.div>
        </section>

        {/* Games Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-red-700 mb-8 text-center'>
            Games
          </h2>
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {games.map((feature) => (
              <FeatureCard key={feature.day} feature={feature} />
            ))}
          </motion.div>
        </section>

        {/* Creative Tools Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-red-700 mb-8 text-center'>
            Creative Tools
          </h2>
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {creativeTools.map((feature) => (
              <FeatureCard key={feature.day} feature={feature} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <ElfHover>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ scale: 1.05 }}
        className='relative'
      >
        <Link
          href={feature.href}
          className='block p-6 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-300 hover:border-green-300 group relative overflow-hidden'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl'></div>

          <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            ✨
          </div>

          <div className='absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs'>
            🐾🐾
          </div>

          <div className='relative z-10'>
            <div className='text-2xl mb-2'>{feature.icon}</div>
            <div className='text-gray-900 font-semibold text-lg mb-1'>
              {feature.name}
            </div>
            <p className='text-xs text-gray-700 font-medium'>
              Day {feature.day} unlocked
            </p>
          </div>
        </Link>
      </motion.div>
    </ElfHover>
  );
}
