import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, TechStartup.in",
    text: "Adarsh found 14 critical bugs in our SaaS app that we completely missed. His reports were so detailed that our dev team fixed everything in a day. Absolutely worth it!",
  },
  {
    name: "Priya Mehta",
    role: "Freelance Developer",
    text: "I hired Adarsh to test my client's e-commerce site before launch. He found payment flow issues that could have cost thousands. Super professional and fast delivery.",
  },
  {
    name: "Arjun Patel",
    role: "Co-founder, HealthApp",
    text: "The best QA investment we've made. Adarsh's testing process is thorough, his communication is clear, and the reports are incredibly well-structured. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
