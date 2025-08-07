"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechCarousel } from "@/components/tech-carousel";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3051ff] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}>
            Hi, I'm <span className="text-[#3051ff]">Software Engineer</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            MERN Stack Software Engineer
          </motion.h2>

          <motion.div
            className="flex items-center justify-center space-x-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}>
            <Calendar className="h-5 w-5 text-[#3051ff]" />
            <span className="text-lg font-semibold text-[#3051ff]">
              2.5 Years of Experience
            </span>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            I craft high-performance websites that inspire. Specialized in
            Full-Stack Development, Shopify, WordPress, and stunning 2D/3D
            animations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#3051ff] hover:bg-[#2041df] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-[#3051ff] text-[#3051ff] hover:bg-[#3051ff] hover:text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}>
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}>
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}>
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <TechCarousel />
      </div>
    </section>
  );
}
