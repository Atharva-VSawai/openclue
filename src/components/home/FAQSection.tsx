'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What do I get with the ₹59 paid direct app?',
    answer:
      'You get instant access to the fully compiled, optimized desktop application. It includes a ready-to-use installer, automatic updates, priority support, and seamless login via Google, Email, or Mobile. No compiling, no dependencies — just install and start boosting your productivity.',
  },
  {
    question: 'What does the free GitHub repository include?',
    answer:
      'The GitHub repository gives you full access to the source code. You can clone, build, and use the core assistant for free. However, you will need to set up your own development environment, manage dependencies, and manually compile updates yourself.',
  },
  {
    question: 'Is the Razorpay payment secure?',
    answer:
      'Absolutely. We use Razorpay to process all transactions, ensuring a 100% secure, encrypted payment flow. We never store your card or payment details. You will get instant access to the download right after a successful payment.',
  },
  {
    question: 'How does the login system work?',
    answer:
      'The app features a flexible and secure authentication system. You can effortlessly log in using your Google account, standard Email/Password, or Mobile login, letting you access your clean dashboard and history instantly.',
  },
  {
    question: 'Does the app work natively on desktop?',
    answer:
      'Yes! It is built as a fast, premium desktop experience. It runs natively on your machine, ensuring minimal lag and a smooth UI while you get real-time help with transcripts or screen-based tasks.',
  },
  {
    question: 'Do I get access immediately after payment?',
    answer:
      'Yes. As soon as your ₹59 payment is successfully processed through Razorpay, you will be redirected to the secure download link to get the premium desktop installer immediately.',
  },
  {
    question: 'Does the demo video reflect the real product?',
    answer:
      '100%. The demo video showcases the actual desktop assistant in action. It accurately demonstrates the dashboard, real-time transcript help, and screen-based support exactly as you will experience them.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Frequently Asked <span className="gradient-text-accent">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about the AI assistant, the free GitHub version, and the secure checkout process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'rounded-2xl border transition-all duration-300 overflow-hidden',
                openIndex === index
                  ? 'bg-white/5 border-indigo-500/30 shadow-lg shadow-indigo-500/5'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              )}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <svg
                  className={cn(
                    'w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'rotate-180 text-indigo-400'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={cn(
                  'transition-all duration-300',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
