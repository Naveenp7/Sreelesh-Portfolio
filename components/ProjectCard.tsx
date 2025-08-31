'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: 'Video' | 'Photography' | 'AI Project' | 'Design';
  link?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  link,
  isVideo = false,
  videoUrl,
}) => {
  const categoryColors = {
    Video: 'from-red-400 to-pink-400',
    Photography: 'from-blue-400 to-cyan-400',
    'AI Project': 'from-purple-400 to-indigo-400',
    Design: 'from-green-400 to-emerald-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group cursor-pointer touch-manipulation"
    >
      <div className="glass-card p-4 sm:p-6 h-full flex flex-col overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4 aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          {isVideo && videoUrl ? (
            <motion.video
              src={videoUrl}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play Button for Videos */}
          {isVideo && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-white/30">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Category Badge */}
        <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[category]} mb-2 sm:mb-3 w-fit`}>
          {category}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed flex-1">
            {description}
          </p>

          {/* Link */}
          {link && (
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-3 sm:mt-4 flex items-center text-white/60 hover:text-white transition-colors duration-200"
            >
              <span className="text-xs sm:text-sm font-medium mr-2">View Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
