'use client'
import { motion } from 'framer-motion'

interface Props {
  chapters: string[]
}

export default function StoryResult({ chapters }: Props) {
  return (
    <div className="space-y-6 mt-6">
      {chapters.map((chapter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          className="bg-white/90 p-4 rounded-xl shadow leading-relaxed"
          dangerouslySetInnerHTML={{ __html: chapter }}
        />
      ))}
    </div>
  )
}
