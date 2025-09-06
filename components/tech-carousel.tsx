"use client"

import { motion } from "framer-motion"
import { Code2, Database, Palette, Smartphone, Globe, Zap, Layers, FileText, ChartScatter, TestTube, Map, Library, Sheet, DatabaseBackup } from 'lucide-react'

const techStack = [
  { name: "React.js", icon: Code2, color: "#61DAFB" },
  { name: "Next.js", icon: Code2, color: "#000000" },
  { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
  { name: "Node.js", icon: Database, color: "#339933" },
  { name: "Express.js", icon: Zap, color: "#000000" },
  { name: "HighCharts", icon: ChartScatter, color: "#7AB55C" },
  { name: "Unit Testing", icon: TestTube, color: "#FF0055" },
  { name: "SQL", icon: Database, color: "#4479A1" },
  { name: "Redux", icon: Globe, color: "#764ABC" },
  { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
  { name: "TypeScript", icon: Code2, color: "#3178C6" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "MapBox", icon: Map, color: "#010101" },
  { name: "UI Libraries", icon: Library, color: "#3178C6" },
  { name: "Spread.js", icon: Sheet, color: "#0F200" },
  { name: "Data Structures & Algorithms", icon: DatabaseBackup, color: "#A20D00" },
]

export function TechCarousel() {
  return (
    <div className="overflow-hidden mb-10 sm:mb-0">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 flex items-center space-x-3 bg-gray-800/50 px-6 py-3 rounded-2xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <tech.icon className="h-6 w-6" style={{ color: tech.color }} />
            <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
