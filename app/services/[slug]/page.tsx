"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check, Star, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

const serviceDetails = {
  "mern-stack": {
    title: "MERN Stack Development",
    description: "Full-stack web applications with React, Node.js, Express, and MongoDB. Scalable, secure, and performant solutions.",
    hero: "/modern-ecommerce-dashboard.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "REST APIs"],
    features: [
      "Custom Web Applications",
      "API Development & Integration",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Real-time Features",
      "Payment Gateway Integration",
      "Admin Dashboards",
      "Performance Optimization"
    ],
    packages: [
      {
        name: "Basic",
        price: "$999",
        features: ["Simple CRUD Application", "Basic Authentication", "Responsive Design", "1 Month Support"]
      },
      {
        name: "Professional",
        price: "$2499",
        features: ["Complex Web Application", "Advanced Features", "Payment Integration", "Admin Panel", "3 Months Support"]
      },
      {
        name: "Enterprise",
        price: "$4999",
        features: ["Large Scale Application", "Custom Features", "Multiple Integrations", "Advanced Security", "6 Months Support"]
      }
    ]
  },
  "shopify": {
    title: "Shopify Development",
    description: "Custom Shopify stores with Liquid templating, Polaris design system, and advanced e-commerce functionality.",
    hero: "/shopify-fashion-website.png",
    technologies: ["Liquid", "JavaScript", "SCSS", "Shopify API", "Polaris", "GraphQL"],
    features: [
      "Custom Theme Development",
      "Shopify App Development",
      "Store Migration",
      "Performance Optimization",
      "Payment Gateway Setup",
      "Inventory Management",
      "SEO Optimization",
      "Mobile Responsiveness"
    ],
    packages: [
      {
        name: "Basic",
        price: "$799",
        features: ["Theme Customization", "Basic Setup", "Mobile Responsive", "1 Month Support"]
      },
      {
        name: "Professional",
        price: "$1999",
        features: ["Custom Theme", "Advanced Features", "App Integration", "SEO Setup", "3 Months Support"]
      },
      {
        name: "Enterprise",
        price: "$3999",
        features: ["Custom App Development", "Complex Integrations", "Advanced Customization", "6 Months Support"]
      }
    ]
  },
  "wordpress": {
    title: "WordPress Development",
    description: "Custom WordPress solutions with Elementor, WooCommerce, and advanced CMS functionality.",
    hero: "/wordpress-lms.png",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "ACF"],
    features: [
      "Custom Theme Development",
      "Plugin Development",
      "WooCommerce Integration",
      "Custom Post Types",
      "Advanced Custom Fields",
      "SEO Optimization",
      "Performance Optimization",
      "Security Hardening"
    ],
    packages: [
      {
        name: "Basic",
        price: "$699",
        features: ["Theme Customization", "Basic Setup", "Content Migration", "1 Month Support"]
      },
      {
        name: "Professional",
        price: "$1799",
        features: ["Custom Theme", "Plugin Development", "WooCommerce Setup", "SEO Optimization", "3 Months Support"]
      },
      {
        name: "Enterprise",
        price: "$3499",
        features: ["Complex Custom Development", "Multiple Integrations", "Advanced Features", "6 Months Support"]
      }
    ]
  },
  "animations": {
    title: "2D/3D Animations & Illustrations",
    description: "Stunning web animations using Framer Motion, Three.js, Lottie, and Rive for engaging user experiences.",
    hero: "/3d-portfolio-website.png",
    technologies: ["Framer Motion", "Three.js", "Lottie", "Rive", "GSAP", "WebGL"],
    features: [
      "Interactive 3D Scenes",
      "Smooth Page Transitions",
      "Custom Lottie Animations",
      "Particle Systems",
      "Interactive UI Elements",
      "Loading Animations",
      "Scroll-based Animations",
      "Mobile Optimized"
    ],
    packages: [
      {
        name: "Basic",
        price: "$599",
        features: ["Simple Animations", "Page Transitions", "Basic Interactions", "1 Month Support"]
      },
      {
        name: "Professional",
        price: "$1499",
        features: ["Complex Animations", "3D Elements", "Custom Interactions", "Performance Optimization", "3 Months Support"]
      },
      {
        name: "Enterprise",
        price: "$2999",
        features: ["Advanced 3D Scenes", "Custom Shaders", "Complex Interactions", "Full Animation Suite", "6 Months Support"]
      }
    ]
  },
  "office-services": {
    title: "Microsoft Office Services",
    description: "Professional data entry, report writing, content creation, and assignment completion services.",
    hero: "/excel-dashboard.png",
    technologies: ["Excel", "Word", "PowerPoint", "Data Analysis", "VBA", "Automation"],
    features: [
      "Professional Data Entry",
      "Report Writing & Formatting",
      "Content Writing & Research",
      "Assignment Completion",
      "Data Analysis & Visualization",
      "Document Templates",
      "Presentation Design",
      "Quality Assurance"
    ],
    packages: [
      {
        name: "Basic",
        price: "$199",
        features: ["Simple Data Entry", "Basic Formatting", "Up to 100 entries", "48hr Delivery"]
      },
      {
        name: "Professional",
        price: "$499",
        features: ["Complex Data Entry", "Report Writing", "Up to 500 entries", "24hr Delivery", "Quality Check"]
      },
      {
        name: "Enterprise",
        price: "$999",
        features: ["Large Scale Projects", "Custom Solutions", "Unlimited Entries", "Same Day Delivery", "Dedicated Support"]
      }
    ]
  },
  "seo-optimization": {
    title: "SEO & Optimization",
    description: "Website performance optimization, SEO implementation, and technical audits for better search rankings.",
    hero: "/modern-ecommerce-dashboard.png",
    technologies: ["Google Analytics", "Search Console", "PageSpeed Insights", "SEMrush", "Lighthouse"],
    features: [
      "Technical SEO Audit",
      "Performance Optimization",
      "Core Web Vitals Improvement",
      "Keyword Research & Strategy",
      "On-page Optimization",
      "Schema Markup",
      "Site Speed Optimization",
      "Mobile Optimization"
    ],
    packages: [
      {
        name: "Basic",
        price: "$399",
        features: ["Basic SEO Audit", "On-page Optimization", "Performance Report", "1 Month Support"]
      },
      {
        name: "Professional",
        price: "$899",
        features: ["Comprehensive Audit", "Technical Optimization", "Content Strategy", "3 Months Support"]
      },
      {
        name: "Enterprise",
        price: "$1799",
        features: ["Full SEO Strategy", "Advanced Optimization", "Ongoing Monitoring", "6 Months Support"]
      }
    ]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5] pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3051ff] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#services">
              <Button variant="ghost" className="mb-8 hover:text-[#3051ff]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">{service.title}</h1>
                <p className="text-xl text-gray-400 mb-8">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-[#3051ff] text-[#3051ff]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button size="lg" className="bg-[#3051ff] hover:bg-[#2041df]">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src={service.hero || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What's Included</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 h-full">
                  <CardContent className="p-6">
                    <Check className="h-6 w-6 text-[#3051ff] mb-3" />
                    <p className="font-medium">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pricing Packages</h2>
            <p className="text-xl text-gray-400">Choose the package that fits your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`bg-gray-800/50 border-gray-700 h-full ${index === 1 ? 'border-[#3051ff] scale-105' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-[#3051ff]">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-4 w-4 text-[#3051ff] mr-3" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${index === 1 ? 'bg-[#3051ff] hover:bg-[#2041df]' : 'variant-outline border-[#3051ff] text-[#3051ff] hover:bg-[#3051ff] hover:text-white'}`}>
                      Choose {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
