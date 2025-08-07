"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Users, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const timeline = [
  {
    year: "2020",
    title: "Computer Science Graduate",
    description: "Started my journey in web development with a strong foundation in programming fundamentals.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Frontend Developer Internship",
    description: "Gained hands-on experience with React.js and modern web development practices.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Freelance Full-Stack Developer",
    description: "Started building custom solutions for clients across various industries.",
    icon: Users,
  },
  {
    year: "2023-Present",
    title: "Senior MERN Stack Developer",
    description: "Leading complex projects and mentoring junior developers while expanding into animations and design.",
    icon: Award,
  },
]

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "3+", label: "Years Experience" },
  { number: "18+", label: "Happy Clients" },
  { number: "5", label: "Countries Served" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            "I believe in code that performs and scales."
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#3051ff] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#3051ff] opacity-30"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-[#3051ff] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#3051ff] rounded-full flex items-center justify-center">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
