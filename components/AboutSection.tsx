'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, Code2, Palette } from 'lucide-react';

const AboutSection = () => {
  type Skill = { icon: React.ElementType; title: string; description: string };
  const skills: Skill[] = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems and exploring the frontiers of artificial intelligence.',
    },
    {
      icon: Camera,
      title: 'Videography',
      description: 'Capturing stories through the lens with cinematic vision and technical precision.',
    },
    {
      icon: Code2,
      title: 'Data Science',
      description: 'Transforming raw data into meaningful insights and actionable intelligence.',
    },
    {
      icon: Palette,
      title: 'Creative Editing',
      description: 'Crafting visual narratives that blend artistic vision with technical expertise.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            I'm passionate about the intersection of technology and creativity, where algorithms 
            meet artistry and data tells compelling stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7f066aea76924dccbd4f8993575c88e3%2F6ec2f26fb02b406fa3b1669d199f8891?format=webp&width=800"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">My Journey</h3>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg">
              As an AI & Data Science student, I'm driven by the endless possibilities 
              that emerge when cutting-edge technology meets creative expression. My journey 
              began with curiosity about how machines can learn and evolved into a passion 
              for using that knowledge to create meaningful visual stories.
            </p>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg">
              Through videography and photography, I capture moments that data alone 
              cannot express. This unique perspective allows me to approach problems 
              with both analytical precision and creative intuition.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flip-card glass-card glass-reflect p-0 group cursor-pointer touch-manipulation rounded-2xl min-h-[220px] sm:min-h-[240px]`}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
    >
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''} rounded-2xl`}>
        <div className="flip-face flip-front px-4 pt-4 pb-0 sm:px-6 sm:pt-6 sm:pb-0 text-center h-[80%]">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 glass-morphism glass-reflect rounded-2xl mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300"
          >
            <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{skill.title}</h4>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">Tap to flip</p>
        </div>
        <div className="flip-face flip-back p-4 sm:p-6 text-center">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{skill.title}</h4>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
