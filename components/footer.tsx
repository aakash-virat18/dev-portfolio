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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Aakash</span>
          </div>
          <div className="text-center text-xs text-gray-500">
            Built with Next.js and Framer Motion
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Off Road. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
