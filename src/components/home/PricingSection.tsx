'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'GitHub Edition',
    badge: 'Open Source',
    badgeVariant: 'default' as const,
    price: '₹0',
    period: 'forever',
    description: 'Access the repository to clone, build, and set up the assistant yourself.',
    features: [
      { text: 'Full source code access', included: true },
      { text: 'Manual setup required', included: true },
      { text: 'Community-driven updates', included: true },
      { text: 'Premium direct installer', included: false },
      { text: 'Automatic seamless updates', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'View on GitHub',
    ctaHref: 'https://github.com/your-org/your-repo',
    variant: 'default' as const,
    external: true,
    highlighted: false,
  },
  {
    name: 'Premium Direct App',
    badge: 'Highly Recommended',
    badgeVariant: 'primary' as const,
    price: '₹59',
    period: 'one-time',
    description: 'Instantly download the fully-packaged, optimized desktop experience.',
    features: [
      { text: 'Ready-to-use premium installer', included: true },
      { text: 'Instant access post-payment', included: true },
      { text: 'Google, Email & Mobile login', included: true },
      { text: 'Real-time AI workflow tools', included: true },
      { text: 'Secure Razorpay checkout', included: true },
      { text: 'Lifetime automatic updates', included: true },
    ],
    cta: 'Download Direct App — ₹59',
    ctaHref: '/signup',
    variant: 'glow' as const,
    external: false,
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-electric-400 text-sm font-semibold uppercase tracking-wider">
            Choose Your Path
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Premium Desktop or <span className="gradient-text-accent">Open Source</span>
          </h2>
          <p className="text-lg text-slate-400">
            Grab the ready-to-use premium installer via secure Razorpay checkout, or compile it yourself from GitHub.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-1000">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 200, damping: 20 }}
              className="h-full"
            >
              <Card
                variant={plan.variant}
                padding="lg"
                className={`h-full relative flex flex-col ${plan.highlighted ? 'border-electric-500/50 shadow-glow-primary md:scale-105 z-10' : ''}`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant={plan.badgeVariant}>{plan.badge}</Badge>
                  {plan.highlighted && (
                    <span className="text-xs text-blue-400 font-medium flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Best Value
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold font-heading text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-extrabold font-heading text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm">/ {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-electric-500/20 flex items-center justify-center flex-shrink-0 shadow-sm border border-electric-500/30">
                          <svg className="w-3.5 h-3.5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                      <span className={feature.included ? 'text-slate-300' : 'text-slate-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.external ? (
                  <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <Link href={plan.ctaHref} className="block mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full relative overflow-hidden"
                    >
                      <span className="relative z-10">{plan.cta}</span>
                    </Button>
                  </Link>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          🔒 Secure payment powered by Razorpay. 100% refund within 7 days if not satisfied.
        </motion.p>
      </div>
    </section>
  );
}
