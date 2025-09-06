"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="bg-gray-700/50 border-gray-600 focus:border-[#14B8A6] transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="bg-gray-700/50 border-gray-600 focus:border-[#14B8A6] transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-[#14B8A6] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Discussion"
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-[#14B8A6] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-[#14B8A6] resize-none transition-all duration-300"
                    />
                  </motion.div>

                  {/* Success/Error Message */}
                  {message.text && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        message.type === 'success' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {message.type === 'success' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span className="text-sm">{message.text}</span>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#14B8A6] hover:bg-[#14B8A6] text-white py-3 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                I commit to life-long learning and transform ideas into robust,
                intuitive, and scalable products and am always excited to work
                on new projects and collaborate with amazing people. If you have
                any questions or want to work together, feel free to reach out
                to me.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-[#14B8A6]/20 rounded-2xl">
                  <Mail className="h-6 w-6 text-[#14B8A6]" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">aakash.yadv18@gmail.com</div>
                </div>
              </motion.div>
              {/*               
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-[#14B8A6]/20 rounded-2xl">
                  <Phone className="h-6 w-6 text-[#14B8A6]" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </motion.div> */}
              {/*               
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-[#14B8A6]/20 rounded-2xl">
                  <MapPin className="h-6 w-6 text-[#14B8A6]" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-400">Available Worldwide</div>
                </div>
              </motion.div> */}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-2xl hover:bg-[#14B8A6]/20 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin
                    className="h-6 w-6 text-gray-400 group-hover:text-[#14B8A6]"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/aakash-yadav-698b52199",
                        "_blank"
                      )
                    }
                  />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-2xl hover:bg-[#14B8A6]/20 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github
                    className="h-6 w-6 text-gray-400 group-hover:text-[#14B8A6]"
                    onClick={() =>
                      window.open("https://github.com/aakash-virat18", "_blank")
                    }
                  />
                </motion.a>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="bg-gradient-to-r from-[#14B8A6]/10 to-purple-500/10 border-[#14B8A6]/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Quick Response</h4>
                  <p className="text-gray-400 text-sm">
                    I typically respond to all inquiries within 24 hours. For
                    urgent projects, feel free to mention it in your message.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
