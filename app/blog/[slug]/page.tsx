"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogPosts = {
  "react-best-practices-2025": {
    title: "10 React Best Practices in 2025",
    excerpt:
      "Essential patterns and techniques every React developer should know for building scalable applications.",
    content: `
      <h2>Introduction</h2>
      <p>React continues to evolve, and with it, the best practices for building scalable, maintainable applications. In 2025, these practices have become even more refined based on years of community experience and framework improvements.</p>
      
      <h2>1. Use TypeScript for Better Developer Experience</h2>
      <p>TypeScript has become essential for React development, providing type safety and better IDE support. It helps catch errors early and makes refactoring much safer.</p>
      
      <h2>2. Embrace Server Components</h2>
      <p>With Next.js 13+ and React Server Components, we can now render components on the server, reducing bundle size and improving performance.</p>
      
      <h2>3. Optimize Bundle Size</h2>
      <p>Use dynamic imports, code splitting, and tree shaking to keep your bundle size minimal. Every kilobyte matters for user experience.</p>
      
      <h2>4. Implement Proper Error Boundaries</h2>
      <p>Error boundaries help prevent your entire app from crashing when a component fails. Always implement them at strategic points in your component tree.</p>
      
      <h2>5. Use Custom Hooks for Logic Reuse</h2>
      <p>Custom hooks are perfect for extracting and reusing stateful logic across components. They make your code more modular and testable.</p>
    `,
    image: "/react-code-on-screen.png",
    category: "Web Development",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    tags: ["React", "JavaScript", "Best Practices", "TypeScript"],
    author: "Software Engineer",
  },
  "framer-motion-animations": {
    title: "Animating React with Framer Motion",
    excerpt:
      "Master the art of smooth animations in React applications using Framer Motion's powerful API.",
    content: `
      <h2>Getting Started with Framer Motion</h2>
      <p>Framer Motion is the most popular animation library for React, providing a simple yet powerful API for creating smooth, performant animations.</p>
      
      <h2>Basic Animations</h2>
      <p>Start with simple animations like fade-ins, slides, and scales. These form the foundation of more complex animation sequences.</p>
      
      <h2>Layout Animations</h2>
      <p>One of Framer Motion's most powerful features is automatic layout animations. When elements change position or size, Framer Motion can smoothly animate between states.</p>
      
      <h2>Gesture Animations</h2>
      <p>Add interactivity with drag, hover, and tap animations. These micro-interactions greatly enhance user experience.</p>
      
      <h2>Performance Considerations</h2>
      <p>Always consider performance when adding animations. Use transform properties, avoid animating layout properties, and use will-change sparingly.</p>
    `,
    image: "/animation-timeline-interface.png",
    category: "2D/3D Animation & Illustration",
    readTime: "10 min read",
    date: "Jan 5, 2025",
    tags: ["Framer Motion", "React", "Animation", "UI/UX"],
    author: "Software Engineer",
  },
};

const relatedPosts = [
  {
    id: "mern-stack-typescript",
    title: "MERN Stack with TypeScript: Why It Matters",
    category: "Web Development",
    image: "/typescript-code-editor.png",
    readTime: "11 min read",
  },
  {
    id: "3d-web-animations",
    title: "Creating Stunning 3D Web Animations",
    category: "2D/3D Animation & Illustration",
    image: "/3d-portfolio-website.png",
    readTime: "15 min read",
  },
  {
    id: "shopify-theme-development",
    title: "Creating Shopify Themes with Polaris",
    category: "Shopify",
    image: "/shopify-theme-development.png",
    readTime: "15 min read",
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5] pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 hover:text-[#14B8A6]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="bg-[#14B8A6]/20 text-[#14B8A6] mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-gray-600">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-3">
              <div
                className="prose prose-invert prose-lg max-w-none prose-headings:text-[#e5e5e5] prose-p:text-gray-300 prose-strong:text-[#e5e5e5] prose-code:text-[#14B8A6] prose-pre:bg-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Share this article</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Table of Contents</h4>
                    <nav className="space-y-2">
                      <a
                        href="#introduction"
                        className="block text-sm text-gray-400 hover:text-[#14B8A6] transition-colors">
                        Introduction
                      </a>
                      <a
                        href="#best-practices"
                        className="block text-sm text-gray-400 hover:text-[#14B8A6] transition-colors">
                        Best Practices
                      </a>
                      <a
                        href="#performance"
                        className="block text-sm text-gray-400 hover:text-[#14B8A6] transition-colors">
                        Performance Tips
                      </a>
                      <a
                        href="#conclusion"
                        className="block text-sm text-gray-400 hover:text-[#14B8A6] transition-colors">
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Author Info */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">About the Author</h4>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">US</span>
                      </div>
                      <div>
                        <p className="font-medium"></p>
                        <p className="text-sm text-gray-400">
                          MERN Stack Developer
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                     MERN Stack developer with 2.5 years of experience in
                      building scalable web applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Related Articles</h3>
            <p className="text-gray-400">
              Continue reading with these related posts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}>
                <Link href={`/blog/${relatedPost.id}`}>
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#14B8A6]/90 text-white">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-[#14B8A6] transition-colors duration-300">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
