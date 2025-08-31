"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Users, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const timeline = [
  {
    year: "2022",
    title: "B.Tech in Computer Science and Engineering",
    description: "Started my journey in web development with a strong foundation in programming fundamentals and data structures and algorithms.",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "Full Stack Developer Internship, Deloitte USI",
    description: "Worked as a Full Stack Developer Intern at Deloitte USI, developing APIs for a cloud-based application and building the user interface.",
    icon: Briefcase,
  },
  {
    year: "2022-2024",
    title: "Frontend Engineer, Deloitte USI",
    description: "Worked on various projects for different clients in cloud and DNS domain, mainly using Next.js, React.js, Node.js, and UI libraries.",
    icon: Users,
  },
  {
    year: "2024-Present",
    title: "Frontend Engineer, PriceLabs",
    description: "Lead migration of various legacy apps from Ruby on Rails to Next.js, incorporated new features and improved the user experience.",
    icon: Award,
  },
]

const stats = [
  { number: "+20", label: "Projects Delivered" },
  { number: "3+", label: "Years Experience" },
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
          className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#14B8A6] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#14B8A6] opacity-30"></div>
          
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
                    <div className="text-[#14B8A6] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center">
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
