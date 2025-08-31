'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const WorkSection = () => {
  // Sample projects - in a real implementation, this would come from an API or CMS
  const projects = [
    {
      title: 'Automated Attendance System',
      description: 'IAI-powered facial recognition system that automates attendance tracking while preventing proxy attendance with advanced verification.',
      image: 'https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp',
      category: 'AI Project' as const,
      link: '#',
    },
    {
      title: 'Udaipur City in Rajastan',
      description: 'A visually stunning video showcasing the beauty of Udaipur, created using advanced AI tools to enhance visual effects and storytelling.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Design' as const,
      isVideo: true,
      videoUrl: 'https://cdn.builder.io/o/assets%2F7f066aea76924dccbd4f8993575c88e3%2F2cf1bdc45cd14a6587ca1133436107f5?alt=media&token=3c8aec97-bd98-42d4-ba11-f775714bb12e&apiKey=7f066aea76924dccbd4f8993575c88e3',
      link: 'https://www.instagram.com/reel/DMPo1RzSRYp/?igsh=emM1NDRlc3ViZXV0',
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            A curated collection of projects that showcase the fusion of artificial intelligence, 
            creative vision, and technical craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-morphism text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/15 min-h-[48px] touch-manipulation"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
