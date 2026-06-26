'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-electric-400 text-sm font-semibold uppercase tracking-wider">
            Product Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-5">
            See the Assistant in <span className="gradient-text-accent">Action</span>
          </h2>
          <p className="text-lg text-slate-400">
            Watch a quick walkthrough showing how the app provides real-time help during technical tasks, meetings, and study sessions.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="max-w-4xl mx-auto perspective-1000"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-3d-elevated glass">
            {/* Aspect Ratio Container */}
            <div className="relative aspect-video">
              {!isPlaying ? (
                // Thumbnail / Play Button Overlay
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-obsidian-900 to-obsidian-950">
                  {/* Decorative grid */}
                  <div className="absolute inset-0 hero-grid opacity-30" />

                  {/* Mock app screenshot placeholder */}
                  <div className="absolute inset-8 rounded-xl bg-obsidian-800/50 border border-white/5 flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-glow-primary">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-slate-500 text-sm">AI Assistant Desktop Preview</p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 group"
                    aria-label="Play demo video"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-electric-600 flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-shadow duration-300"
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-electric-500/30 animate-ping" />
                  </button>
                </div>
              ) : (
                // Video Embed (replace with your actual video URL)
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="AppName Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-slate-500 mt-6">
            ▶ 2 min walkthrough &bull; No sign-up required to watch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
