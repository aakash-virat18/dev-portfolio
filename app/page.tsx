"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

export default function HomePage() {
  return (
    <motion.main 
      className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5]"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <TechStackSection />
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </motion.main>
  )
}
