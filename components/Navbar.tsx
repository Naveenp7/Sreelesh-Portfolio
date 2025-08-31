'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, User, Mail, Menu, X, Code2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const pathname = usePathname();


  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Tech', href: '#tech', icon: Code2 },
    { name: 'Work', href: '#work', icon: Search },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}
    >
      {/* Desktop Navigation - Pill Style */}
      <div className="hidden md:flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          const IconComponent = item.icon;
          
          return (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`relative flex items-center justify-center transition-all duration-300 ease-out min-h-[48px] ${
                isActive
                  ? 'bg-black text-white rounded-full px-6 py-3 min-w-[140px]'
                  : 'bg-white/20 text-white/70 rounded-full w-12 h-12 hover:bg-white/30 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex items-center gap-2">
                <IconComponent size={20} className="flex-shrink-0" />
                {isActive && (
                  <motion.span
                    className="text-sm font-medium whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-3 py-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            const IconComponent = item.icon;
            
            return (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative flex items-center justify-center transition-all duration-300 ease-out min-h-[44px] touch-manipulation ${
                  isActive
                    ? 'bg-black text-white rounded-full px-4 py-2 min-w-[110px]'
                    : 'bg-white/20 text-white/70 rounded-full w-11 h-11 hover:bg-white/30 hover:text-white active:bg-white/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent size={18} className="flex-shrink-0" />
                  {isActive && (
                    <motion.span
                      className="text-xs font-medium whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;
