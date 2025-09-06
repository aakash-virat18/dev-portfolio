"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    id: "resume-analyzer",
    title: "AI Powered Resume Analyzer",
    description:
      "AI Powered Resume Analyzer that analyzes your resume and gives you a score based on your skills, experience, and education.",
    image: "/project-images/resume.png",
    tags: ["React", "React Router", "Tailwind CSS", "Redux", "Putter.js"],
    // category: "MERN Stack Development",
    github: "https://github.com/aakash-virat18/resume-analyzer",
    demo: "https://resume-analyzer-flame.vercel.app/",
  },
  {
    id: "multi-user-sketch-app",
    title: "Multi user Sketch App",
    description:
      "A sketch app that allows you to create and share your sketches with other users. Multiple users can sketch on the same board using web sockets.",
    image: "/project-images/drawpad.png",
    tags: ["React", "Next.js", "Socket.io", "Redux", "FontAwesome"],
    // category: "Shopify Development",
    github: "https://github.com/aakash-virat18/sketch-app",
    demo: "https://sketch-app-lac.vercel.app/",
  },
  {
    id: "fintech-landing-page",
    title: "Fintech Landing Page",
    description:
      "A mobile responsive fintech landing page built with React and Tailwind CSS.",
    image: "/project-images/fintech.png",
    tags: ["React", "Tailwind CSS", "FontAwesome"],
    github: "https://github.com/aakash-virat18/fintech-landing-page",
    demo: "https://fintech-landing-page-seven.vercel.app/",
  },
  {
    id: "note-taking-app",
    title: "Note Taking App",
    description:
      "A note taking app built with React and Tailwind CSS.",
    image: "/project-images/notes.png",
    tags: ["React", "Tailwind CSS", "FontAwesome"],
    github: "https://github.com/aakash-virat18/Pocket-Notes",
    demo: "https://pocket-notes-fawn.vercel.app/",
  }
];

// const categories = [
//   "All",
//   "MERN Stack Development",
//   "Shopify Development",
//   "WordPress Development",
//   "2D/3D Animations & Illustrations",
//   "Microsoft Office Services",
// ];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "All";
    const tagMatch = !selectedTag || project.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my personal projects that I have worked on
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
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
        </motion.div> */}
        {/* 
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
        )} */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  {/* <div className="absolute top-4 left-4">
                    <Badge 
                      className="bg-[#14B8A6]/90 text-white cursor-pointer hover:bg-[#14B8A6]"
                      onClick={() => setSelectedCategory(project.category)}
                    >
                      {project.category}
                    </Badge>
                  </div> */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.a>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`border-gray-600 text-xs cursor-pointer transition-all duration-300 ${
                          selectedTag === tag
                            ? "border-[#14B8A6] text-[#14B8A6]"
                            : "hover:border-[#14B8A6] hover:text-[#14B8A6]"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* <Link href={`/projects/${project.id}`}>
                    <Button className="w-full bg-[#14B8A6] hover:bg-[#2041df] transition-all duration-300 hover:scale-105">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
}
