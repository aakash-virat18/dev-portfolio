"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  ArrowRight,
  Code,
  Database,
  Smartphone,
  Zap,
  Award,
  Github,
  Linkedin,
  Mail,
  Star,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Calendar,
  Clock,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "../components/tech-icons";

const codeSnippets = [
  "const developer = 'MERN Stack Expert';",
  "function buildAmazingApps() {",
  "  return 'Scalable Solutions';",
  "}",
  "// 2+ years of experience",
  "const skills = ['React', 'Node.js'];",
  "export default Portfolio;",
];

const projects = [
  {
    id: "ecommerce-dashboard",
    title: "Multi-Store E-Commerce Dashboard",
    shortDescription: "Multiple stores, no unified management system",
    description:
      "A comprehensive MERN-based centralized platform that revolutionized how clients manage multiple online stores. The system provides unified product management, order tracking, customer analytics, and inventory control across different platforms.",
    problem:
      "Client was managing 5 different online stores across various platforms (Shopify, WooCommerce, custom solutions) with no centralized system. This led to inventory discrepancies, delayed order processing, and poor customer experience.",
    solution:
      "Built a comprehensive dashboard that integrates with multiple e-commerce platforms via APIs. Features include real-time inventory sync, automated order processing, customer behavior analytics, and unified reporting.",
    impact:
      "50% reduction in management time, 30% increase in order processing speed, 99.9% inventory accuracy",
    tech: ["react", "nextjs", "nodejs", "mongodb", "tailwind", "aws", "stripe"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    duration: "3 months",
    client: "E-commerce Startup",
    features: [
      "Multi-platform integration",
      "Real-time inventory sync",
      "Advanced analytics dashboard",
      "Automated order processing",
      "Customer behavior tracking",
      "Mobile-responsive design",
    ],
  },
  {
    id: "excel-automation",
    title: "Excel Automation Suite",
    shortDescription: "Manual data entry causing delays and errors",
    description:
      "An intelligent automation system that transforms manual Excel workflows into streamlined, error-free processes. The suite handles data import, processing, validation, and report generation automatically.",
    problem:
      "Company was spending 40+ hours weekly on manual data entry, report generation, and data validation. High error rates and delayed reporting were affecting business decisions.",
    solution:
      "Developed a Node.js-based automation suite that connects to multiple data sources, processes information using custom algorithms, and generates formatted Excel reports automatically. Includes error detection and data validation.",
    impact:
      "30+ hours saved monthly, 95% reduction in data errors, real-time reporting capabilities",
    tech: ["nodejs", "excel", "python", "postgresql", "docker", "aws"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=500",
    ],
    liveUrl: "https://automation.example.com",
    githubUrl: "https://github.com/example/excel-automation",
    duration: "2 months",
    client: "Manufacturing Company",
    features: [
      "Multi-source data integration",
      "Automated report generation",
      "Data validation & error detection",
      "Scheduled processing",
      "Custom Excel templates",
      "Email notifications",
    ],
  },
];

const blogPosts = [
  {
    id: "mern-rapid-prototyping",
    title: "Why MERN for Rapid Prototyping",
    excerpt: "Benefits of MERN stack for building MVPs",
    content: `
# Why I Choose MERN for Rapid Prototyping

When it comes to building MVPs and prototypes quickly, the MERN stack has become my go-to choice. Here's why this combination of MongoDB, Express.js, React, and Node.js creates the perfect environment for rapid development.

## Speed of Development

The MERN stack allows for incredibly fast development cycles. With JavaScript across the entire stack, context switching is minimal, and developers can move seamlessly between frontend and backend development.

### Key Advantages:

- **Single Language**: JavaScript everywhere means less cognitive load
- **Rich Ecosystem**: NPM packages for almost everything
- **Component Reusability**: React components can be shared and reused
- **Real-time Capabilities**: Easy WebSocket integration with Socket.io

## Flexibility and Scalability

MongoDB's document-based structure is perfect for prototyping because:

- Schema flexibility allows for rapid iterations
- Easy to modify data structures as requirements evolve
- Horizontal scaling capabilities for future growth

## Developer Experience

The tooling around MERN is exceptional:

- Hot reloading for instant feedback
- Excellent debugging tools
- Strong community support
- Comprehensive documentation

## Real-World Example

In my recent e-commerce dashboard project, I was able to go from concept to working prototype in just 2 weeks using the MERN stack. The flexibility allowed for quick pivots based on client feedback.

## Conclusion

For rapid prototyping, MERN offers the perfect balance of speed, flexibility, and scalability. It's not just about building fast—it's about building smart.
    `,
    date: "Dec 15, 2024",
    readTime: "5 min",
    author: "MERN Developer",
    tags: ["MERN", "Prototyping", "JavaScript", "Development"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "nextjs-seo-tips",
    title: "Next.js SEO Best Practices",
    excerpt: "Essential SEO strategies for better search visibility",
    content: `
# Next.js SEO Best Practices for Better Rankings

Search Engine Optimization is crucial for any web application's success. Next.js provides powerful built-in features that make implementing SEO best practices straightforward and effective.

## Meta Tags and Head Management

Next.js's Head component allows for dynamic meta tag management:

\`\`\`jsx
import Head from 'next/head'

function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Your Site</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <article>{post.content}</article>
    </>
  )
}
\`\`\`

## Server-Side Rendering Benefits

SSR provides immediate SEO benefits:

- **Faster Initial Load**: Content is rendered on the server
- **Better Crawling**: Search engines can easily index content
- **Improved Core Web Vitals**: Better performance metrics

## Image Optimization

Next.js Image component automatically optimizes images:

\`\`\`jsx
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={400}
  priority
/>
\`\`\`

## Structured Data

Implement JSON-LD structured data for rich snippets:

\`\`\`jsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "author": {
    "@type": "Person",
    "name": "Your Name"
  }
}
\`\`\`

## Performance Optimization

- Use dynamic imports for code splitting
- Implement proper caching strategies
- Optimize bundle size with tree shaking
- Leverage Next.js built-in performance features

## Conclusion

Next.js provides all the tools needed for excellent SEO. The key is implementing these practices consistently across your application.
    `,
    date: "Dec 10, 2024",
    readTime: "7 min",
    author: "MERN Developer",
    tags: ["Next.js", "SEO", "Performance", "Web Development"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "excel-automation-nodejs",
    title: "Excel Automation with Node.js",
    excerpt: "Building automated reporting systems step-by-step",
    content: `
# Automating Excel Reports with Node.js

Manual Excel reporting is time-consuming and error-prone. Let's build an automated system that generates professional reports from multiple data sources.

## Why Automate Excel Reports?

- **Time Savings**: Reduce hours of manual work to minutes
- **Accuracy**: Eliminate human errors in data entry
- **Consistency**: Standardized formatting and calculations
- **Scalability**: Handle large datasets efficiently

## Setting Up the Project

First, let's install the necessary packages:

\`\`\`bash
npm init -y
npm install exceljs node-cron nodemailer
\`\`\`

## Core Implementation

\`\`\`javascript
const ExcelJS = require('exceljs');
const cron = require('node-cron');

class ExcelAutomation {
  constructor() {
    this.workbook = new ExcelJS.Workbook();
  }

  async generateReport(data) {
    const worksheet = this.workbook.addWorksheet('Monthly Report');
    
    // Add headers
    worksheet.addRow(['Date', 'Revenue', 'Orders', 'Customers']);
    
    // Add data
    data.forEach(row => {
      worksheet.addRow([row.date, row.revenue, row.orders, row.customers]);
    });
    
    // Apply formatting
    this.applyFormatting(worksheet);
    
    return this.workbook;
  }

  applyFormatting(worksheet) {
    // Header styling
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE0E0E0' }
    };
  }
}
\`\`\`

## Data Integration

Connect to multiple data sources:

\`\`\`javascript
async function fetchDataFromSources() {
  const [salesData, customerData, inventoryData] = await Promise.all([
    fetchSalesData(),
    fetchCustomerData(),
    fetchInventoryData()
  ]);

  return {
    sales: salesData,
    customers: customerData,
    inventory: inventoryData
  };
}
\`\`\`

## Scheduling Automation

Set up automated report generation:

\`\`\`javascript
// Run every Monday at 9 AM
cron.schedule('0 9 * * 1', async () => {
  console.log('Generating weekly report...');
  
  const data = await fetchDataFromSources();
  const report = await generateReport(data);
  
  await sendReportByEmail(report);
});
\`\`\`

## Advanced Features

- **Dynamic Charts**: Add charts and graphs programmatically
- **Conditional Formatting**: Highlight important data points
- **Data Validation**: Ensure data integrity
- **Template System**: Use predefined templates for consistency

## Real-World Impact

In my recent project, this automation system:
- Saved 30+ hours per month
- Reduced errors by 95%
- Improved report delivery time from days to minutes

## Conclusion

Excel automation with Node.js transforms tedious manual processes into efficient, reliable systems. Start small and gradually add more sophisticated features as needed.
    `,
    date: "Dec 5, 2024",
    readTime: "10 min",
    author: "MERN Developer",
    tags: ["Node.js", "Excel", "Automation", "Reporting"],
    image: "/placeholder.svg?height=300&width=600",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
    { id: "testimonials", label: "Testimonials" },
    { id: "certifications", label: "Certifications" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer">
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}>
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden py-4 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-2">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-left py-2 px-3 text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md transition-colors">
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Building Modern,{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Scalable
                  </span>{" "}
                  Web & Mobile Products
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-300 leading-relaxed">
                  Full Stack Engineer specializing in the MERN stack —
                  delivering high-performance applications, automation tools,
                  and mobile solutions.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("contact")}>
                  Work Together <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200 bg-transparent"
                  onClick={() => scrollToSection("projects")}>
                  View Case Studies
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for freelance & contract projects
              </motion.div>
            </motion.div>

            {/* Animated Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative">
              <div className="relative z-10 bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">
                      portfolio.js
                    </span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <AnimatePresence mode="wait">
                      {codeSnippets.map((line, index) => (
                        <motion.div
                          key={`${currentCodeIndex}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                          className={`${
                            index <= currentCodeIndex
                              ? "text-purple-300"
                              : "text-gray-500"
                          } transition-colors duration-300`}>
                          {line}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Software engineer with 2+ years building scalable web and mobile
                applications. Started in corporate development at two companies,
                now helping businesses as a full-time freelancer.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Performance-first development",
                    "User-centric design",
                    "Maintainable architecture",
                    "Data-driven decisions",
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Projects Delivered" },
                { number: "2+", label: "Years Experience" },
                { number: "12+", label: "Technologies" },
                { number: "1000+", label: "Hours Saved" },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Code className="h-8 w-8" />,
                skills: [
                  { name: "React", icon: "react" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "TypeScript", icon: "typescript" },
                  { name: "Tailwind CSS", icon: "tailwind" },
                  { name: "Vue.js", icon: "vue" },
                ],
              },
              {
                title: "Backend",
                icon: <Database className="h-8 w-8" />,
                skills: [
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Express.js", icon: "express" },
                  { name: "Python", icon: "python" },
                  { name: "GraphQL", icon: "graphql" },
                  { name: "REST APIs", icon: "api" },
                ],
              },
              {
                title: "Databases",
                icon: <Database className="h-8 w-8" />,
                skills: [
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "PostgreSQL", icon: "postgresql" },
                  { name: "MySQL", icon: "mysql" },
                  { name: "Redis", icon: "redis" },
                  { name: "Firebase", icon: "firebase" },
                ],
              },
              {
                title: "Mobile Application",
                icon: <Smartphone className="h-8 w-8" />,
                skills: [
                  { name: "React Native", icon: "reactnative" },
                  { name: "Expo", icon: "expo" },
                  { name: "Flutter", icon: "flutter" },
                  { name: "iOS", icon: "ios" },
                  { name: "Android", icon: "android" },
                ],
              },
              {
                title: "Cloud & DevOps",
                icon: <Zap className="h-8 w-8" />,
                skills: [
                  { name: "AWS", icon: "aws" },
                  { name: "Docker", icon: "docker" },
                  { name: "Vercel", icon: "vercel" },
                  { name: "Netlify", icon: "netlify" },
                  { name: "GitHub Actions", icon: "github" },
                ],
              },
              {
                title: "Testing",
                icon: <Award className="h-8 w-8" />,
                skills: [
                  { name: "Jest", icon: "jest" },
                  { name: "Cypress", icon: "cypress" },
                  { name: "Testing Library", icon: "testing" },
                  { name: "Playwright", icon: "playwright" },
                  { name: "Postman", icon: "postman" },
                ],
              },
            ].map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-400 border border-purple-500/30">
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-white">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                          <TechIcon name={skill.icon} className="w-5 h-5" />
                          <span className="text-sm text-gray-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                period: "2023 – Present",
                title: "Full-Time Freelancer",
                description:
                  "Delivered 15+ custom solutions for startups and SMEs. Automated workflows saving 1000+ hours.",
                highlight: "15+ Projects • 1000+ Hours Saved",
              },
              {
                period: "2022 – 2023",
                title: "Software Engineer – KeepCoders.com",
                description:
                  "Built multi-tenant MERN dashboards for 5,000+ users. Optimized APIs reducing latency by 40%.",
                highlight: "5K+ Users • 40% Performance Boost",
              },
              {
                period: "2021 – 2022",
                title: "Software Engineer – StackIntel.com",
                description:
                  "Developed reusable React components improving development speed by 20%. Built data pipelines.",
                highlight: "20% Speed Improvement • Data Pipelines",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-purple-500 rounded-full mt-2 shadow-lg shadow-purple-500/50"></motion.div>
                  {index < 2 && (
                    <div className="w-0.5 h-20 bg-gray-600 ml-1.5 mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                  <CardHeader>
                    <div className="text-sm text-purple-400 font-medium">
                      {item.period}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {item.title}
                    </CardTitle>
                    <div className="text-sm text-blue-400 font-medium">
                      {item.highlight}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      <strong>Challenge:</strong> {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <strong className="text-sm text-green-400">
                        Impact:
                      </strong>
                      <p className="text-sm text-green-400 mt-1 font-medium">
                        {project.impact}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded-md">
                          <TechIcon name={tech} className="w-4 h-4" />
                          <span className="text-xs text-gray-300 capitalize">
                            {tech}
                          </span>
                        </div>
                      ))}
                      {project.tech.length > 4 && (
                        <div className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300">
                          +{project.tech.length - 4} more
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full Stack Development",
                description:
                  "End-to-end MERN applications with modern architecture",
                icon: <Code className="h-8 w-8" />,
              },
              {
                title: "Mobile Development",
                description:
                  "Cross-platform React Native apps for iOS and Android",
                icon: <Smartphone className="h-8 w-8" />,
              },
              {
                title: "API Development",
                description: "RESTful APIs with third-party integrations",
                icon: <Database className="h-8 w-8" />,
              },
              {
                title: "Automation",
                description:
                  "Workflow automation to save time and reduce errors",
                icon: <Zap className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-400 border border-purple-500/30 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer group">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} read</span>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-gray-700 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        size="sm"
                        className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                        <Eye className="w-4 h-4 mr-2" />
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Delivered ahead of schedule with clean, well-documented code. Communication was excellent.",
                author: "E-Commerce Startup CEO",
                rating: 5,
              },
              {
                quote:
                  "Automated our reporting workflow, saving hours each week. Highly recommend for technical projects.",
                author: "SaaS Founder",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-4 italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm font-medium text-purple-400">
                      — {testimonial.author}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Certified MERN Stack Developer",
                organization: "Tech Academy",
                date: "2023",
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: "React Performance Optimization",
                organization: "React Institute",
                date: "2023",
                icon: <Award className="h-8 w-8" />,
              },
            ].map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-400 border border-purple-500/30">
                      {cert.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg text-white">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {cert.organization} • {cert.date}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">FAQ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6">
            {[
              {
                question: "What's your development process?",
                answer:
                  "Discovery → Proposal → Development → Testing → Deployment → Maintenance with regular updates.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes, I provide maintenance contracts for bug fixes, updates, and performance optimization.",
              },
              {
                question: "What's your typical timeline?",
                answer:
                  "Simple projects: 2-4 weeks. Complex applications: 8-12 weeks. Detailed timeline in proposal.",
              },
              {
                question: "Do you work internationally?",
                answer:
                  "Yes, I work globally with flexible communication across time zones.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3 text-white">
                      <MessageSquare className="h-5 w-5 text-purple-400" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Have a project in mind? Let's bring it to life.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <Card className="p-8 bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Select budget range</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail className="h-5 w-5" />,
                      label: "Email",
                      value: "example@email.com",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/example",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      label: "GitHub",
                      value: "github.com/example",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer">
                      <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400 border border-purple-500/30">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {contact.label}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-500 ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 border-none">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Quick Response
                </h3>
                <p className="text-purple-100 text-sm">
                  I respond to all inquiries within 24 hours. For urgent
                  projects, mention it in your message.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 cursor-pointer">
                Portfolio
              </motion.div>
              <p className="text-gray-400 mb-4">
                Full Stack MERN Developer building modern, scalable applications
                for businesses worldwide.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="h-5 w-5" />, href: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                  { icon: <Mail className="h-5 w-5" />, href: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      href={social.href}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200 border border-gray-700 hover:border-purple-500">
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Projects", "Services", "Blog", "Contact"].map(
                  (link) => (
                    <motion.button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      whileHover={{ x: 5 }}
                      className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                      {link}
                    </motion.button>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>API Development</div>
                <div>Automation</div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Portfolio – All rights reserved.
            </div>
            <div className="text-gray-500 text-xs">
              Built with Next.js, Tailwind CSS & Framer Motion
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
