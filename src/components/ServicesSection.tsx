import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Rocket, Shield, Clock, FileText, Smartphone } from "lucide-react";

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
    bonus: null,
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
    bonus: "Free Basic Retest for first-time clients",
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
    bonus: "Priority Delivery at no extra cost",
  },
];

const trustPoints = [
  { icon: Shield, text: "No Hidden Fees" },
  { icon: Clock, text: "Clear Delivery Timeline" },
  { icon: FileText, text: "Professional Bug Report with Screenshots" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className={`relative p-8 flex flex-col rounded-xl border backdrop-blur-xl transition-shadow duration-300 ${
                plan.popular
                  ? "bg-card/80 border-primary/50 shadow-[0_0_60px_hsl(var(--glow-primary)),0_0_120px_hsl(var(--glow-primary))]"
                  : "bg-card/60 border-border/60 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--glow-primary))]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-lg">
                  <Star className="h-3.5 w-3.5" /> Most Popular
                </div>
              )}

              {/* Launch Offer Badge */}
              {plan.bonus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="mb-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-xs"
                >
                  <Rocket className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span className="text-accent font-semibold">🚀 Limited Launch Offer:</span>
                  <span className="text-muted-foreground">{plan.bonus}</span>
                </motion.div>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                >
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

              <motion.a
                href="https://wa.me/919235943357?text=Hi%2C%20I%27m%20interested%20in%20your%20pricing%20plans%20for%20website%20testing."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-lg text-center text-sm font-semibold transition-all duration-300 block ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_4px_20px_hsl(var(--glow-primary))] hover:shadow-[0_6px_30px_hsl(var(--glow-primary))]"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Micro Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12 max-w-3xl mx-auto"
        >
          {trustPoints.map((tp) => (
            <div key={tp.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <tp.icon className="h-4 w-4 text-primary shrink-0" />
              <span>{tp.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Payment Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-card/40 border border-border/50 backdrop-blur-sm">
            <Smartphone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Note:</span> Secure payments accepted via UPI.
              50% advance required to start testing. Invoice provided for every transaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
