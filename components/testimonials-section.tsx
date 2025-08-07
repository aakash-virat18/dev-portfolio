"use client"

import { motion } from "framer-motion"
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Business Owner",
    role: "E-commerce Company",
    location: "United States",
    avatar: "/professional-woman-avatar.png",
    rating: 5,
    quote: "Exceptional MERN stack development that exceeded our expectations. The platform handles our growing user base perfectly."
  },
  {
    name: "Marketing Manager",
    role: "Digital Agency",
    location: "Canada",
    avatar: "/professional-man-avatar.png",
    rating: 5,
    quote: "The Shopify store increased our conversion rate by 40%. Outstanding understanding of e-commerce best practices."
  },
  {
    name: "Startup Founder",
    role: "Tech Startup",
    location: "United Kingdom",
    avatar: "/professional-asian-woman-avatar.png",
    rating: 5,
    quote: "Transformed our complex requirements into a beautiful, functional website. Highly professional and reliable."
  },
  {
    name: "Project Manager",
    role: "Corporate Client",
    location: "Australia",
    avatar: "/professional-bearded-man-avatar.png",
    rating: 5,
    quote: "The data entry and report writing services were completed with exceptional accuracy and attention to detail."
  },
  {
    name: "Creative Director",
    role: "Design Studio",
    location: "Germany",
    avatar: "/latina-professional-avatar.png",
    rating: 5,
    quote: "Amazing animation skills brought our website to life. User engagement increased significantly after the redesign."
  },
  {
    name: "Shopify Client",
    role: "Fashion Brand",
    location: "France",
    avatar: "/professional-korean-man-avatar.png",
    rating: 5,
    quote: "Custom Shopify theme development was flawless. The store looks professional and performs excellently."
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Quote className="absolute top-20 left-10 h-32 w-32 text-[#3051ff]" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Quote className="absolute bottom-20 right-10 h-24 w-24 text-[#3051ff]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3051ff] to-purple-500"></div>
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center space-x-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <blockquote className="text-gray-300 mb-6 italic relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#3051ff] opacity-50" />
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-[#3051ff]">{testimonial.location}</div>
                    </div>
                  </div>
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
          <p className="text-xl text-gray-300 mb-4">Want to be my next happy client?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="inline-block bg-[#3051ff] hover:bg-[#2041df] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
