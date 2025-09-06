"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const blogPosts = [
  {
    id: "css-preprocessor-less",
    title: "CSS Preprocessor LESS",
    excerpt:
      "Transform your CSS workflow with LESS (Leaner Style Sheets) - the powerful preprocessor that brings dynamic functionality to your stylesheets.",
    image: "/react-code-on-screen.png",
    url: "https://www.geeksforgeeks.org/css/css-preprocessor-less/",
  },
  {
    id: "how-to-import-less-through-npm",
    title: "How to import LESS through npm ?",
    excerpt: "Learn how to import LESS through npm in your project.",
    image: "/animation-timeline-interface.png",
    url: "https://www.geeksforgeeks.org/css/how-to-import-less-through-npm/",
  },
  {
    id: "css-overflow-wrap-property",
    title: "CSS | overflow-wrap Property",
    excerpt:
      "The overflow-wrap property in CSS is used to control how long words should break when they overflow the container.",
    image: "/typescript-code-editor.png",
    url: "https://www.geeksforgeeks.org/css/css-overflow-wrap-property/",
  },
];

const categories = [
  "All",
  "Web Development",
  "2D/3D Animation & Illustration",
  "Microsoft Office",
  "Shopify",
  "WordPress",
];

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Latest Blog Posts
          </h2>
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
              <Link href={post.url} target="_blank">
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 h-full cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#14B8A6] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
