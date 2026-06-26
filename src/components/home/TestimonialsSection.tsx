import Card from '@/components/ui/Card';

const testimonials = [
  {
    quote: "The AI assistant has completely transformed how I work. The speed improvement alone was worth 10x the price.",
    name: 'Rajesh Kumar',
    role: 'Full Stack Developer',
    avatar: 'RK',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    quote: "I was skeptical at ₹59, but this is genuinely one of the best tools I've purchased. Incredible value.",
    name: 'Priya Sharma',
    role: 'Software Engineer',
    avatar: 'PS',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    quote: "Clean, fast, and does exactly what it promises. The GitHub option is great for contributors too.",
    name: 'Amit Patel',
    role: 'DevOps Engineer',
    avatar: 'AP',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">
            Trusted by Developers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-5">
            What Our Users <span className="gradient-text-accent">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} variant="elevated" padding="md" className="group">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
