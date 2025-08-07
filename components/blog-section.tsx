"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const blogPosts = [
  {
    id: "react-best-practices-2025",
    title: "10 React Best Practices in 2025",
    excerpt: "Essential patterns and techniques every React developer should know for building scalable applications.",
    image: "/react-code-on-screen.png",
    category: "Web Development",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    tags: ["React", "JavaScript", "Best Practices"]
  },
  {
    id: "mern-stack-typescript",
    title: "MERN Stack with TypeScript: Why It Matters",
    excerpt: "Benefits of using TypeScript in your MERN stack applications for better development experience.",
    image: "/typescript-code-editor.png",
    category: "Web Development",
    readTime: "11 min read",
    date: "Jan 10, 2025",
    tags: ["MERN", "TypeScript", "Full Stack"]
  },
  {
    id: "framer-motion-animations",
    title: "Animating React with Framer Motion",
    excerpt: "Master the art of smooth animations in React applications using Framer Motion's powerful API.",
    image: "/animation-timeline-interface.png",
    category: "2D/3D Animation & Illustration",
    readTime: "10 min read",
    date: "Jan 5, 2025",
    tags: ["Framer Motion", "React", "Animation"]
  },
  {
    id: "3d-web-animations",
    title: "Creating Stunning 3D Web Animations",
    excerpt: "Learn how to implement Three.js animations that captivate users and enhance user experience.",
    image: "/3d-portfolio-website.png",
    category: "2D/3D Animation & Illustration",
    readTime: "15 min read",
    date: "Dec 30, 2024",
    tags: ["Three.js", "3D", "WebGL"]
  },
  {
    id: "excel-data-entry-tips",
    title: "Excel Data Entry Best Practices",
    excerpt: "Professional tips for efficient data entry, validation, and formatting in Excel spreadsheets.",
    image: "/excel-spreadsheet-macros.png",
    category: "Microsoft Office",
    readTime: "6 min read",
    date: "Dec 28, 2024",
    tags: ["Excel", "Data Entry", "Productivity"]
  },
  {
    id: "content-writing-guide",
    title: "Professional Content Writing Guide",
    excerpt: "Essential techniques for creating engaging, SEO-friendly content that converts readers into customers.",
    image: "/wordpress-dashboard.png",
    category: "Microsoft Office",
    readTime: "12 min read",
    date: "Dec 25, 2024",
    tags: ["Content Writing", "SEO", "Marketing"]
  },
  {
    id: "shopify-theme-development",
    title: "Creating Shopify Themes with Polaris",
    excerpt: "Build consistent and accessible Shopify themes using Shopify's design system and best practices.",
    image: "/shopify-theme-development.png",
    category: "Shopify",
    readTime: "15 min read",
    date: "Dec 20, 2024",
    tags: ["Shopify", "Liquid", "Polaris"]
  },
  {
    id: "shopify-performance-optimization",
    title: "Optimizing Shopify Store Performance",
    excerpt: "Advanced techniques to improve your Shopify store's loading speed and user experience.",
    image: "/shopify-fashion-website.png",
    category: "Shopify",
    readTime: "9 min read",
    date: "Dec 18, 2024",
    tags: ["Shopify", "Performance", "Optimization"]
  },
  {
    id: "wordpress-custom-themes",
    title: "Building Custom WordPress Themes",
    excerpt: "Complete guide to creating responsive, SEO-friendly WordPress themes from scratch.",
    image: "/wordpress-lms.png",
    category: "WordPress",
    readTime: "18 min read",
    date: "Dec 15, 2024",
    tags: ["WordPress", "PHP", "Theme Development"]
  },
  {
    id: "wordpress-performance-tips",
    title: "WordPress Performance Optimization",
    excerpt: "Proven strategies to speed up your WordPress website and improve search engine rankings.",
    image: "/wordpress-dashboard.png",
    category: "WordPress",
    readTime: "13 min read",
    date: "Dec 12, 2024",
    tags: ["WordPress", "Performance", "SEO"]
  }
]

const categories = ["All", "Web Development", "2D/3D Animation & Illustration", "Microsoft Office", "Shopify", "WordPress"]

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Latest Blog Posts</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 6).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 h-full cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#3051ff] text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#3051ff] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-gray-600 text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
          <Link href="/blog">
            <Button size="lg" className="bg-[#3051ff] hover:bg-[#2041df] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
