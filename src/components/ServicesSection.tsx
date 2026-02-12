import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    color: "from-emerald-500 to-emerald-600",
    features: [
      "1–3 Pages Testing",
      "Functional Testing",
      "Basic Bug Report",
      "Delivery in 48 Hours",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,499",
    color: "from-primary to-blue-500",
    features: [
      "Full Website Testing",
      "UI + Functional Testing",
      "Detailed Bug Report (with screenshots)",
      "Severity Classification",
      "Basic Suggestions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    color: "from-accent to-purple-600",
    features: [
      "Full Website Testing",
      "Cross-Browser Testing",
      "Performance Observation",
      "Detailed Professional Report",
      "Priority Delivery (24 hours)",
      "Free Retest After Fix",
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Services & Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Testing Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with no hidden fees. Pick the plan that fits your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`glass-card-hover relative p-8 flex flex-col ${
                plan.popular ? "border-primary/40 scale-[1.03] glow-blue" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  <Star className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/ project</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919235943357?text=Hi%2C%20I%27m%20interested%20in%20your%20pricing%20plans%20for%20website%20testing."
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "border border-primary/30 text-primary hover:bg-primary/5"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
