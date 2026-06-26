'use client';

import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-Time AI Assistance',
    description: 'Get instant, context-aware help during meetings, coding, and study sessions. Never get stuck again.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Transcript & Screen Support',
    description: 'Advanced transcript-based and screen-based assistance that understands your workflow context intuitively.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'text-electric-400',
    bg: 'bg-electric-500/10 border-electric-500/20',
  },
  {
    title: 'Clean Dashboard Workflow',
    description: 'Manage your interactions, history, and settings from a beautifully designed, fast, and simple dashboard.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    title: 'Fast Premium Experience',
    description: 'A native-feeling desktop app optimized for speed and productivity, skipping the bloat to keep you focused.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-blue-300',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-electric-400 text-sm font-semibold uppercase tracking-wider">
            Supercharge Your Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Powerful Features for{' '}
            <span className="gradient-text-accent">Real-Time Assistance</span>
          </h2>
          <p className="text-lg text-slate-400">
            Designed for students, developers, and professionals. Get smart guidance during technical tasks without interrupting your flow.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card
                variant="elevated"
                padding="lg"
                className="group h-full"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} border flex items-center justify-center flex-shrink-0 ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-electric-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
