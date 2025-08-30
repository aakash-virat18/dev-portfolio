import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash Yadav",
  description:
    "This is the portfolio of Aakash Yadav, a Software Engineer",
  keywords:
    "React developer, Frontend Developer, Software Engineer",
  authors: [{ name: "Aakash Yadav" }],
  icons: {
    icon: [
      { url: '/code.png' },
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/code.png',
  },
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
