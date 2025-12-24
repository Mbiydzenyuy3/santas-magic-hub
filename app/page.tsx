"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { days } from "../constant/challengeDays";
import ElfHover from "../components/ElfHover";
import SantaLaughButton from "../components/SantaLaugh";
import Snow from "../components/Snow";
import Sparkles from "../components/Sparkles";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const recapData = [
  {
    period: "Day 1–5: Foundations",
    description: "Building the core structure and basic interactions",
    features: [
      {
        name: "Snowfall Landing",
        learn: "Set up Next.js with festive UI basics",
        emoji: ""
      },
      {
        name: "Santa Chat",
        learn: "Created interactive AI-powered conversations",
        emoji: ""
      },
      {
        name: "Christmas Countdown",
        learn: "Real-time animations and date calculations",
        emoji: ""
      },
      {
        name: "Quotes Generator",
        learn: "Dynamic content generation with themes",
        emoji: ""
      },
      {
        name: "Jokes Generator",
        learn: "Added humor with random selection logic",
        emoji: ""
      }
    ]
  },
  {
    period: "Day 6–10: Fun Tools",
    description: "Expanding with creative generators and utilities",
    features: [
      {
        name: "Elf Name Generator",
        learn: "Random name creation with festive flair",
        emoji: ""
      },
      {
        name: "Greeting Cards",
        learn: "Custom card creation with mood selection",
        emoji: ""
      },
      {
        name: "Story Teller",
        learn: "Interactive narrative building",
        emoji: ""
      },
      {
        name: "Naughty or Nice",
        learn: "Fun rating system with personality",
        emoji: ""
      },
      {
        name: "Snowfall Customizer",
        learn: "Canvas-based particle control",
        emoji: ""
      }
    ]
  },
  {
    period: "Day 11–15: Interactive Magic",
    description: "Deepening engagement with advanced interactions",
    features: [
      {
        name: "Santa Tracker",
        learn: "Animated map routing and progress",
        emoji: ""
      },
      {
        name: "Gift Recommender",
        learn: "Logic-based personalized suggestions",
        emoji: ""
      },
      {
        name: "Music Player",
        learn: "Audio controls with playlist management",
        emoji: ""
      },
      {
        name: "Tree Decorator",
        learn: "Drag-and-drop ornament placement",
        emoji: ""
      },
      {
        name: "Snowman Builder",
        learn: "Custom character creation system",
        emoji: ""
      }
    ]
  },
  {
    period: "Day 16–22: Polish & Delight",
    description: "Refining experiences and adding social features",
    features: [
      {
        name: "Secret Santa",
        learn: "Group assignment algorithms",
        emoji: ""
      },
      {
        name: "Christmas Quiz",
        learn: "Interactive game mechanics",
        emoji: ""
      },
      {
        name: "Holiday To-Do",
        learn: "Task management with persistence",
        emoji: ""
      },
      {
        name: "Photo Filters",
        learn: "Image processing and effects",
        emoji: ""
      },
      {
        name: "Color Palette",
        learn: "color generation",
        emoji: ""
      },
      {
        name: "E-Card Sharing",
        learn: "Social sharing capabilities",
        emoji: ""
      },
      {
        name: "Final Polish",
        learn: "Comprehensive UX enhancements",
        emoji: ""
      }
    ]
  }
];

export default function LandingPage() {
  const liveDays = days.filter((d) => d.live).map((d) => d.day);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className='min-h-screen flex flex-col relative overflow-hidden pt-20'
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/christmas.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Snow />
      <Sparkles />

      {/* Floating decorations */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Hanging bells */}
        <motion.div
          className='absolute top-10 left-10 text-4xl text-yellow-400'
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔔
        </motion.div>
        <motion.div
          className='absolute top-20 right-20 text-4xl text-yellow-400'
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          🔔
        </motion.div>

        {/* Floating stars */}
        <motion.div
          className='absolute top-32 left-1/4 text-3xl text-yellow-300'
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className='absolute top-40 right-1/3 text-3xl text-yellow-300'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          ⭐
        </motion.div>

        {/* Ornaments */}
        <motion.div
          className='absolute bottom-20 left-16 text-2xl text-yellow-500'
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          🎄
        </motion.div>
        <motion.div
          className='absolute bottom-32 right-16 text-2xl text-yellow-500'
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          🎅
        </motion.div>
      </div>

      <Navbar />

      <section className='min-h-screen flex flex-col items-center text-center mt-20 px-6 relative z-10'>
        <motion.h1
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-4xl font-bold text-gray-300 mb-4 drop-shadow-lg'
        >
          Built To Share The Joy OF Christmas.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-lg text-yellow-100 max-w-xl font-medium mb-4 drop-shadow'
        >
          Games, generators, stories, and magic. All handcrafted one day at a
          time.
        </motion.p>

        <div className='flex flex-col items-center gap-4'>
          <ElfHover>
            <Link
              href='/magic'
              className='bg-yellow-500 hover:bg-yellow-400 text-red-800 px-8 py-3 mt-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-all duration-200 font-semibold glow-effect text-xl'
            >
              Enter Santa’s Magic Hub
            </Link>
          </ElfHover>
          <SantaLaughButton />
        </div>
      </section>

      {/* 22 Days of Magic Recap Section */}
      <section className='py-16 px-6 relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold text-white text-center mb-8 drop-shadow-lg'
        >
          22 Days of Magic Recap
        </motion.h2>

        <div className='max-w-4xl mx-auto'>
          {/* Carousel Controls */}
          <div className='flex justify-center gap-2 mb-8'>
            {recapData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Carousel Content */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className='bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20'
            >
              <h3 className='text-2xl font-bold text-yellow-300 mb-2 text-center'>
                {recapData[currentSlide].period}
              </h3>
              <p className='text-white/90 text-center mb-6 font-medium'>
                {recapData[currentSlide].description}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {recapData[currentSlide].features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300'
                  >
                    <div className='flex items-center gap-3 mb-2'>
                      <span className='text-2xl'>{feature.emoji}</span>
                      <h4 className='text-white font-semibold'>
                        {feature.name}
                      </h4>
                    </div>
                    <p className='text-white/80 text-sm'>{feature.learn}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className='flex justify-between mt-6'>
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev > 0 ? prev - 1 : recapData.length - 1
                )
              }
              className='px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors'
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev < recapData.length - 1 ? prev + 1 : 0
                )
              }
              className='px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors'
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
