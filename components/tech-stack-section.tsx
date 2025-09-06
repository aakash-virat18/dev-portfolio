"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type Tech = {
  name: string
  icon: string
  color: string
}

type TechCategory = {
  color: string
  technologies: Tech[]
}

const techStacks: TechCategory[] = [
  {
    color: "#3051ff",
    technologies: [
      { name: "React.js", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs2.svg", color: "#000000" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "HTML5", icon: "/icons/html5.svg", color: "#E34F26" },
      { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
      { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
      { name: "Express.js", icon: "/icons/express.svg", color: "#000000" },
      { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
      { name: "MySQL", icon: "/icons/mysql.svg", color: "#4479A1" },
      { name: "REST APIs", icon: "/icons/restapi.svg", color: "#FF6B35" },
      { name: "Redux Toolkit", icon: "/icons/redux.svg", color: "#764ABC" },
      { name: "JWT", icon: "/icons/jwt.svg", color: "#000000" },
      { name: "ESLint", icon: "/icons/eslint.svg", color: "#4B32C3" },
      { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
    ]
  }
]

export function TechStackSection() {
  return (
    <section id="stacks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="col-span-1"
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-all duration-300 group">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-3">
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group/tech"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={28}
                            height={28}
                            className="object-contain"
                            style={{
                              filter:
                                ["#000000", "#010101", "#181717"].includes(tech.color)
                                  ? "brightness(0) invert(1)"
                                  : "none"
                            }}
                          />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight group-hover/tech:text-[#14B8A6] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#3051ff]/10 to-purple-500/10 rounded-2xl p-8 border border-[#3051ff]/20">
            <p className="text-gray-400 max-w-3xl mx-auto">
              With 3+ years of frontend development expertise, I specialize in building 
              modern, responsive web applications using React.js and Next.js. I excel at 
              creating intuitive user interfaces, optimizing performance, and implementing 
              best practices for maintainable, scalable code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
