"use client";
import { motion } from "framer-motion";
import ShareButton from "./ShareButton";

interface Props {
  chapters: string[];
}

export default function StoryResult({ chapters }: Props) {
  const storyText = chapters.join("\n\n");

  return (
    <div className='space-y-6 mt-6 max-w-3xl mx-auto'>
      {chapters.map((chapter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          className='bg-white/90 p-4 text-gray-800 rounded-xl shadow leading-relaxed whitespace-pre-wrap'
        >
          {chapter}
        </motion.div>
      ))}

      <ShareButton type='story' content={storyText} className='mx-auto block' />
    </div>
  );
}
