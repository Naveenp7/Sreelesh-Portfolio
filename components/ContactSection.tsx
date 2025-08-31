'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/its.sreelesh?igsh=OWF4cnNtNGo2N3Zm',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sreelesh-c-233a88344',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'sreelesherm@gmail.com',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to bring your vision to life? Whether it's an AI project, 
            creative content, or something entirely new, let's make it happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl text-center mb-8 sm:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 glass-morphism rounded-2xl mb-4 sm:mb-6"
          >
            <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to collaborate?</h3>
          <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            I'm always excited to work on innovative projects that challenge the boundaries 
            between technology and creativity. Drop me a line!
          </p>
          
          <motion.a
            href="sreelesherm@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/90 inline-flex items-center gap-2 min-h-[48px] touch-manipulation"
          >
            <Mail className="w-5 h-5" />
            sreelesherm@gmail.com
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-4 sm:p-6 rounded-2xl text-center group transition-all duration-300 hover:bg-white/10 touch-manipulation"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${social.color} mb-3 sm:mb-4`}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <p className="text-white font-medium group-hover:text-gradient transition-all duration-300 text-sm sm:text-base">
                {social.label}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-white/10"
        >
          <p className="text-white/50 text-xs sm:text-sm">
            © 2025 Sreelesh C. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;