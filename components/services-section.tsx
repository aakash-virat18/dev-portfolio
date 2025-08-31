"use client"

import { motion } from "framer-motion"
import { Code2, ShoppingBag, Globe, Palette, FileText, Search, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "mern-stack",
    icon: Code2,
    title: "MERN Stack Development",
    description: "Full-stack web applications with React, Node.js, Express, and MongoDB. Scalable, secure, and performant solutions.",
    features: ["Custom Web Apps", "API Development", "Database Design", "Authentication Systems"],
    color: "#14B8A6"
  },
  {
    id: "shopify",
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Custom Shopify stores with Liquid templating, Polaris design system, and advanced e-commerce functionality.",
    features: ["Custom Themes", "App Development", "Store Migration", "Performance Optimization"],
    color: "#7AB55C"
  },
  {
    id: "wordpress",
    icon: Globe,
    title: "WordPress Development",
    description: "Custom WordPress solutions with Elementor, WooCommerce, and advanced CMS functionality.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "SEO Optimization"],
    color: "#21759B"
  },
  {
    id: "animations",
    icon: Palette,
    title: "2D/3D Animations & Illustrations",
    description: "Stunning web animations using Framer Motion, Three.js, Lottie, and Rive for engaging user experiences.",
    features: ["Framer Motion", "Three.js 3D", "Lottie Animations", "Interactive UI"],
    color: "#FF0055"
  },
  {
    id: "office-services",
    icon: FileText,
    title: "Microsoft Office Services",
    description: "Professional data entry, report writing, content creation, and assignment completion services.",
    features: ["Data Entry", "Report Writing", "Content Writing", "Assignment Help"],
    color: "#217346"
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO & Optimization",
    description: "Website performance optimization, SEO implementation, and technical audits for better search rankings.",
    features: ["Performance Audit", "SEO Implementation", "Core Web Vitals", "Technical SEO"],
    color: "#FF6B35"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-2xl"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon 
                        className="h-8 w-8" 
                        style={{ color: service.color }}
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: service.color }}
                        ></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-600 hover:bg-gray-700 group-hover:border-[#14B8A6] transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
