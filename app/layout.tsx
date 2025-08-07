import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERN Stack Developer | Frontend Specialist",
  description:
    "Professional MERN Stack Developer specializing in Frontend Development, Shopify, WordPress, and 2D/3D Animations. Building high-performance websites that inspire.",
  keywords:
    "MERN Stack Developer, React Developer, Node.js, MongoDB, Shopify Developer, WordPress Developer, Frontend Developer, Full Stack Developer",
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "MERN Stack Developer",
    description:
      "Professional MERN Stack Developer specializing in Frontend Development, Shopify, WordPress, and 2D/3D Animations.",
    url: "https://usmansajid.dev",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Developer",
    description:
      "Professional MERN Stack Developer specializing in Frontend Development, Shopify, WordPress, and 2D/3D Animations.",
    images: ["/og-image.jpg"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#1e1e1e] text-[#e5e5e5] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
