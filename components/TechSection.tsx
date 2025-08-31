'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TechSection = () => {
  const languages = [
    { name: 'C', level: 'Basic' },
    { name: 'Python', level: 'Basic' },
    { name: 'Java', level: 'Basic' },
  ];

  const editingTools = [
    { name: 'Adobe Premiere Pro', level: 'Advanced' },
    { name: 'Adobe After Effects', level: 'Advanced' },
    { name: 'CapCut', level: 'Advanced' },
  ];

  return (
    <section id="tech" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Technologies <span className="text-gradient">Known</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            A snapshot of my programming skills and editing tools I use daily.
          </p>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 sm:p-8 rounded-3xl mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Programming Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((l) => (
              <span key={l.name} className="glass-morphism px-3 py-1.5 rounded-full text-sm text-white/90">
                {l.name}
                <span className="ml-2 text-white/60">{l.level}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Editing Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card p-6 sm:p-8 rounded-3xl"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Editing Tools</h3>
          <div className="flex flex-wrap gap-3">
            {editingTools.map((t) => (
              <span key={t.name} className="glass-morphism px-3 py-1.5 rounded-full text-sm text-white/90">
                {t.name}
                <span className="ml-2 text-white/60">{t.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
