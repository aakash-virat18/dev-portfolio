"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type Tech = {
  name: string
  icon: string
  color: string
}

type TechCategory = {
  category: string
  color: string
  technologies: Tech[]
}

const techStacks: TechCategory[] = [
  {
    category: "Frontend",
    color: "#3051ff",
    technologies: [
      { name: "React.js", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "HTML5", icon: "/icons/html5.svg", color: "#E34F26" },
      { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", color: "#06B6D4" },
      { name: "Sass", icon: "/icons/sass.svg", color: "#CC6699" }
    ]
  },
  {
    category: "Backend & Database",
    color: "#339933",
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
      { name: "Express.js", icon: "/icons/express.svg", color: "#000000" },
      { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
      { name: "MySQL", icon: "/icons/mysql.svg", color: "#4479A1" },
      { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
      { name: "REST APIs", icon: "/icons/rest-api.svg", color: "#FF6B35" },
      { name: "GraphQL", icon: "/icons/graphql.svg", color: "#E10098" }
    ]
  },
  {
    category: "State Management & Tools",
    color: "#764ABC",
    technologies: [
      { name: "Redux Toolkit", icon: "/icons/redux.svg", color: "#764ABC" },
      { name: "JWT", icon: "/icons/jwt.svg", color: "#000000" },
      { name: "Socket.io", icon: "/icons/socketio.svg", color: "#010101" },
      { name: "Stripe", icon: "/icons/stripe.svg", color: "#635BFF" },
      { name: "Webpack", icon: "/icons/webpack.svg", color: "#8DD6F9" },
      { name: "ESLint", icon: "/icons/eslint.svg", color: "#4B32C3" },
      { name: "Prettier", icon: "/icons/prettier.png", color: "#F7B93E" } // PNG example
    ]
  },
  {
    category: "Animations & 3D",
    color: "#FF0055",
    technologies: [
      { name: "Framer Motion", icon: "/icons/framer.svg", color: "#FF0055" },
      { name: "Three.js", icon: "/icons/threejs.svg", color: "#000000" },
      { name: "GSAP", icon: "/icons/gsap.svg", color: "#88CE02" },
      { name: "Lottie", icon: "/icons/lottie.svg", color: "#00D4FF" },
      { name: "Blender", icon: "/icons/blender.svg", color: "#F5792A" },
      { name: "Photoshop", icon: "/icons/photoshop.svg", color: "#31A8FF" },
      { name: "Illustrator", icon: "/icons/illustrator.svg", color: "#FF9A00" }
    ]
  },
  {
    category: "CMS & E-commerce",
    color: "#21759B",
    technologies: [
      { name: "WordPress", icon: "/icons/wordpress.svg", color: "#21759B" },
      { name: "Shopify", icon: "/icons/shopify.svg", color: "#7AB55C" },
      { name: "WooCommerce", icon: "/icons/woocommerce.svg", color: "#96588A" },
      { name: "Elementor", icon: "/icons/elementor.svg", color: "#D63638" },
      { name: "Liquid", icon: "/icons/liquid.svg", color: "#7AB55C" },
      { name: "PHP", icon: "/icons/php.svg", color: "#777BB4" }
    ]
  },
  {
    category: "Microsoft Office & Productivity",
    color: "#217346",
    technologies: [
      { name: "Excel Advanced", icon: "/icons/excel.svg", color: "#217346" },
      { name: "VBA Macros", icon: "/icons/vba.svg", color: "#0078D4" },
      { name: "Power Query", icon: "/icons/powerquery.svg", color: "#F2C811" },
      { name: "Pivot Tables", icon: "/icons/pivottables.svg", color: "#217346" },
      { name: "PowerPoint", icon: "/icons/powerpoint.svg", color: "#B7472A" },
      { name: "Word", icon: "/icons/word.svg", color: "#2B579A" }
    ]
  },
  {
    category: "Development Tools",
    color: "#FF6B35",
    technologies: [
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "GitHub", icon: "/icons/github.svg", color: "#181717" },
      { name: "VS Code", icon: "/icons/vscode.svg", color: "#007ACC" },
      { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
      { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
      { name: "Vercel", icon: "/icons/vercel.svg", color: "#000000" },
      { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" }
    ]
  }
]

export function TechStackSection() {
  return (
    <section id="stacks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="col-span-1"
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <motion.div
                      className="p-2 rounded-xl"
                      style={{ backgroundColor: `${stack.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: stack.color }}
                      >
                        {stack.category.charAt(0)}
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-semibold leading-tight">{stack.category}</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group/tech"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={28}
                            height={28}
                            className="object-contain"
                            style={{
                              filter:
                                ["#000000", "#010101", "#181717"].includes(tech.color)
                                  ? "brightness(0) invert(1)"
                                  : "none"
                            }}
                          />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight group-hover/tech:text-[#3051ff] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#3051ff]/10 to-purple-500/10 rounded-2xl p-8 border border-[#3051ff]/20">
            <h3 className="text-2xl font-bold mb-4">Full-Stack Expertise</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              With 2.5 years of experience, I've mastered the complete development lifecycle from
              frontend user interfaces to backend APIs, database design, and deployment. I specialize
              in creating scalable, performant applications with modern technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
