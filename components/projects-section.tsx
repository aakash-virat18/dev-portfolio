"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration, admin dashboard, and real-time inventory management.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "MERN Stack Development",
    github: "#",
    demo: "#"
  },
  {
    id: "shopify-theme",
    title: "Shopify Custom Theme",
    description: "Responsive Shopify theme with advanced product filtering, wishlist functionality, and optimized checkout flow.",
    image: "/shopify-fashion-website.png",
    tags: ["Liquid", "JavaScript", "SCSS", "Shopify API"],
    category: "Shopify Development",
    github: "#",
    demo: "#"
  },
  {
    id: "wordpress-lms",
    title: "WordPress LMS Platform",
    description: "Learning Management System with course creation, student progress tracking, and payment integration.",
    image: "/wordpress-lms.png",
    tags: ["WordPress", "PHP", "MySQL", "Elementor"],
    category: "WordPress Development",
    github: "#",
    demo: "#"
  },
  {
    id: "3d-portfolio",
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio with Three.js animations, particle systems, and immersive user experience.",
    image: "/3d-portfolio-website.png",
    tags: ["Three.js", "React", "Framer Motion", "GLSL"],
    category: "2D/3D Animations & Illustrations",
    github: "#",
    demo: "#"
  },
  {
    id: "data-entry-project",
    title: "Business Data Entry",
    description: "Comprehensive data entry project for inventory management with 1000+ product entries and categorization.",
    image: "/excel-dashboard.png",
    tags: ["Excel", "Data Entry", "Validation", "Formatting"],
    category: "Microsoft Office Services",
    github: "#",
    demo: "#"
  },
  {
    id: "content-writing-portfolio",
    title: "Content Writing Portfolio",
    description: "Professional content writing services including blog posts, product descriptions, and marketing copy.",
    image: "/mobile-app-interface.png",
    tags: ["Content Writing", "SEO", "Research", "Copywriting"],
    category: "Microsoft Office Services",
    github: "#",
    demo: "#"
  }
]

const categories = ["All", "MERN Stack Development", "Shopify Development", "WordPress Development", "2D/3D Animations & Illustrations", "Microsoft Office Services"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const tagMatch = !selectedTag || project.tags.includes(selectedTag)
    return categoryMatch && tagMatch
  })

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work across different technologies and platforms
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-2xl transition-all duration-300 ${
                category === selectedCategory 
                  ? "bg-[#14B8A6] hover:bg-[#2041df] scale-105" 
                  : "border-gray-600 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {selectedTag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Badge variant="outline" className="border-[#14B8A6] text-[#14B8A6] text-sm px-4 py-2">
              Filtered by: {selectedTag}
              <button 
                onClick={() => setSelectedTag(null)}
                className="ml-2 hover:text-white"
              >
                ×
              </button>
            </Badge>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className="bg-[#14B8A6]/90 text-white cursor-pointer hover:bg-[#14B8A6]"
                      onClick={() => setSelectedCategory(project.category)}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.a>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className={`border-gray-600 text-xs cursor-pointer transition-all duration-300 ${
                          selectedTag === tag ? 'border-[#14B8A6] text-[#14B8A6]' : 'hover:border-[#14B8A6] hover:text-[#14B8A6]'
                        }`}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button className="w-full bg-[#14B8A6] hover:bg-[#2041df] transition-all duration-300 hover:scale-105">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-[#14B8A6] hover:bg-[#2041df] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
