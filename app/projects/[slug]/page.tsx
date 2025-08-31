"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

const projectDetails = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack MERN application featuring advanced e-commerce functionality, real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    category: "MERN Stack Development",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe", "JWT", "Socket.io"],
    duration: "3 months",
    completed: "December 2024",
    challenge: "Building a scalable e-commerce platform that could handle high traffic, real-time inventory updates, and secure payment processing while maintaining excellent user experience.",
    solution: "Implemented a microservices architecture with Redis caching, optimized database queries, and used Socket.io for real-time features. Integrated Stripe for secure payments and implemented comprehensive error handling.",
    results: [
      "40% increase in conversion rate",
      "99.9% uptime achieved",
      "Sub-2 second page load times",
      "Handles 10,000+ concurrent users"
    ],
    features: [
      "User Authentication & Authorization",
      "Product Catalog Management",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing",
      "Order Management System",
      "Real-time Inventory Updates",
      "Admin Dashboard",
      "Analytics & Reporting"
    ],
    gallery: [
      "/modern-ecommerce-dashboard.png",
      "/shopify-fashion-website.png",
      "/mobile-app-interface.png"
    ]
  },
  "shopify-theme": {
    title: "Shopify Custom Theme",
    description: "A responsive, high-converting Shopify theme built with Liquid templating, featuring advanced product filtering, wishlist functionality, and optimized checkout flow.",
    category: "Shopify Development",
    image: "/shopify-fashion-website.png",
    technologies: ["Liquid", "JavaScript", "SCSS", "Shopify API", "Polaris", "Webpack"],
    duration: "6 weeks",
    completed: "November 2024",
    challenge: "Creating a unique, high-performance Shopify theme that stands out in the competitive fashion e-commerce market while maintaining fast loading speeds.",
    solution: "Developed a custom theme from scratch using Shopify's Liquid templating engine, implemented advanced filtering with AJAX, and optimized all assets for maximum performance.",
    results: [
      "35% increase in mobile conversions",
      "50% reduction in bounce rate",
      "90+ PageSpeed Insights score",
      "Featured in Shopify's theme showcase"
    ],
    features: [
      "Responsive Design",
      "Advanced Product Filtering",
      "Wishlist Functionality",
      "Quick View Modal",
      "Optimized Checkout Flow",
      "SEO Optimized",
      "Multi-currency Support",
      "Social Media Integration"
    ],
    gallery: [
      "/shopify-fashion-website.png",
      "/shopify-theme-development.png",
      "/modern-ecommerce-dashboard.png"
    ]
  },
  "wordpress-lms": {
    title: "WordPress LMS Platform",
    description: "A comprehensive Learning Management System built on WordPress with custom post types, user roles, progress tracking, and integrated payment system.",
    category: "WordPress Development",
    image: "/wordpress-lms.png",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "LearnDash", "WooCommerce"],
    duration: "2 months",
    completed: "October 2024",
    challenge: "Building a scalable LMS that could handle multiple course formats, track student progress, and integrate seamlessly with payment systems.",
    solution: "Leveraged WordPress's flexibility with custom post types, developed custom plugins for specific functionality, and integrated with LearnDash for advanced learning features.",
    results: [
      "500+ students enrolled",
      "95% course completion rate",
      "Seamless payment integration",
      "Mobile-responsive design"
    ],
    features: [
      "Course Management",
      "Student Progress Tracking",
      "Quiz & Assessment System",
      "Certificate Generation",
      "Payment Integration",
      "Discussion Forums",
      "Mobile Learning App",
      "Analytics Dashboard"
    ],
    gallery: [
      "/wordpress-lms.png",
      "/wordpress-dashboard.png",
      "/excel-dashboard.png"
    ]
  },
  "3d-portfolio": {
    title: "3D Portfolio Website",
    description: "An immersive 3D portfolio website featuring Three.js animations, particle systems, and interactive elements that showcase creative work in an engaging way.",
    category: "2D/3D Animations & Illustrations",
    image: "/3d-portfolio-website.png",
    technologies: ["Three.js", "React", "Framer Motion", "GLSL", "WebGL", "Blender"],
    duration: "5 weeks",
    completed: "September 2024",
    challenge: "Creating an immersive 3D experience that works smoothly across all devices while maintaining fast loading times and accessibility.",
    solution: "Optimized 3D models, implemented progressive loading, used efficient shaders, and provided fallback options for lower-end devices.",
    results: [
      "300% increase in user engagement",
      "Average session time: 4+ minutes",
      "Featured in design showcases",
      "Cross-device compatibility"
    ],
    features: [
      "Interactive 3D Scenes",
      "Particle Systems",
      "Smooth Animations",
      "Mobile Optimization",
      "Progressive Loading",
      "Accessibility Features",
      "Performance Monitoring",
      "Cross-browser Support"
    ],
    gallery: [
      "/3d-portfolio-website.png",
      "/animation-timeline-interface.png",
      "/mobile-app-interface.png"
    ]
  },
  "data-entry-project": {
    title: "Business Data Entry Project",
    description: "Comprehensive data entry project for a retail company involving 1000+ product entries with detailed categorization, validation, and formatting.",
    category: "Microsoft Office Services",
    image: "/excel-dashboard.png",
    technologies: ["Excel", "Data Validation", "VBA", "Power Query", "Pivot Tables"],
    duration: "3 weeks",
    completed: "August 2024",
    challenge: "Processing large volumes of product data while maintaining 100% accuracy and implementing robust validation systems.",
    solution: "Developed automated validation systems using Excel formulas and VBA, created standardized templates, and implemented quality control processes.",
    results: [
      "1000+ products processed",
      "99.9% data accuracy achieved",
      "50% time reduction vs manual entry",
      "Automated validation system"
    ],
    features: [
      "Data Entry & Validation",
      "Automated Formatting",
      "Quality Control Systems",
      "Error Detection",
      "Progress Tracking",
      "Backup Systems",
      "Documentation",
      "Training Materials"
    ],
    gallery: [
      "/excel-dashboard.png",
      "/excel-spreadsheet-macros.png",
      "/wordpress-dashboard.png"
    ]
  },
  "content-writing-portfolio": {
    title: "Content Writing Portfolio",
    description: "Professional content writing services including blog posts, product descriptions, and marketing copy for various industries with SEO optimization.",
    category: "Microsoft Office Services",
    image: "/mobile-app-interface.png",
    technologies: ["Content Writing", "SEO Research", "Keyword Analysis", "Copywriting", "Proofreading"],
    duration: "Ongoing",
    completed: "Multiple Projects",
    challenge: "Creating engaging, SEO-optimized content that converts readers into customers while maintaining brand voice consistency.",
    solution: "Developed comprehensive content strategies, conducted thorough keyword research, and implemented data-driven writing approaches.",
    results: [
      "200+ articles written",
      "Average 40% increase in organic traffic",
      "95% client satisfaction rate",
      "Multiple industry expertise"
    ],
    features: [
      "SEO-Optimized Content",
      "Industry Research",
      "Brand Voice Development",
      "Content Strategy",
      "Performance Analytics",
      "Revision Process",
      "Quality Assurance",
      "Deadline Management"
    ],
    gallery: [
      "/mobile-app-interface.png",
      "/react-code-on-screen.png",
      "/typescript-code-editor.png"
    ]
  }
}

const relatedProjects = [
  {
    id: "shopify-theme",
    title: "Shopify Custom Theme",
    category: "Shopify Development",
    image: "/shopify-fashion-website.png"
  },
  {
    id: "wordpress-lms",
    title: "WordPress LMS Platform",
    category: "WordPress Development",
    image: "/wordpress-lms.png"
  },
  {
    id: "3d-portfolio",
    title: "3D Portfolio Website",
    category: "2D/3D Animations & Illustrations",
    image: "/3d-portfolio-website.png"
  }
]

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectDetails[slug as keyof typeof projectDetails]

  if (!project) {
    return <div>Project not found</div>
  }

  const filteredRelatedProjects = relatedProjects.filter(p => p.id !== slug).slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5] pt-20"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#projects">
              <Button variant="ghost" className="mb-8 hover:text-[#14B8A6]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Badge className="bg-[#14B8A6]/20 text-[#14B8A6] mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-gray-400 mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.completed}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-[#14B8A6] hover:bg-[#2041df]">
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="border-[#14B8A6] text-[#14B8A6] px-4 py-2">
                    <Tag className="h-3 w-3 mr-2" />
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenge & Solution */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Results */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Results Achieved</h3>
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-6 h-6 bg-[#14B8A6]/20 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                          </div>
                          <span className="text-gray-300 text-sm">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Similar Projects</h3>
            <p className="text-gray-400">Check out other projects in this category</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredRelatedProjects.map((relatedProject, index) => (
              <motion.div
                key={relatedProject.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/projects/${relatedProject.id}`}>
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#14B8A6]/90 text-white">
                          {relatedProject.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold group-hover:text-[#14B8A6] transition-colors duration-300">
                        {relatedProject.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
