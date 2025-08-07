"use client";

import Link from "next/link";
import { Code2, Heart, Github, Linkedin, Mail, Twitter } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "MERN Stack Development", href: "#" },
  { name: "Shopify Development", href: "#" },
  { name: "WordPress Development", href: "#" },
  { name: "2D/3D Animations", href: "#" },
  { name: "Microsoft Office Solutions", href: "#" },
];

const techStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Next.js",
  "Shopify",
  "WordPress",
  "Framer Motion",
  "Tailwind CSS",
  "TypeScript",
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-[#3051ff]" />
              <span className="text-xl font-bold">Software Engineer</span>
            </Link>
            <p className="text-gray-400 mb-6">
              MERN Stack Developer crafting high-performance websites that
              inspire.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300 cursor-pointer">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#3051ff] transition-colors duration-300 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Off-Road</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Off Road. All rights reserved.
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Built with React, Next.js, Tailwind CSS, Framer Motion & ShadCN UI
          </div>
        </div>
      </div>
    </footer>
  );
}
