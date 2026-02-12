import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, FileText, CreditCard, Search, CheckCircle, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Submit Website Details",
    desc: "Share your website URL and testing requirements via a simple form.",
    tag: "You",
  },
  {
    icon: FileText,
    title: "Receive Custom Quote & Timeline",
    desc: "I review your website and send a tailored quote with a clear delivery timeline.",
    tag: "Me",
  },
  {
    icon: CreditCard,
    title: "50% Advance Payment",
    desc: "Confirm the quote and pay 50% advance to kick off the testing process.",
    tag: "You",
  },
  {
    icon: Search,
    title: "Testing & Report Preparation",
    desc: "I perform detailed manual testing and prepare a professional, structured bug report.",
    tag: "Me",
  },
  {
    icon: CheckCircle,
    title: "Final Payment & Full Report Delivery",
    desc: "After the remaining 50% payment, the complete detailed bug report is delivered to you.",
    tag: "Both",
  },
  {
    icon: RefreshCw,
    title: "Optional Retest",
    desc: "Free retest available for selected plans — ensuring all fixes are verified.",
    tag: "Bonus",
  },
];

const tagColors: Record<string, string> = {
  You: "bg-primary/15 text-primary border-primary/30",
  Me: "bg-accent/15 text-accent border-accent/30",
  Both: "bg-success/15 text-[hsl(var(--success))] border-[hsl(var(--success))]/30",
  Bonus: "bg-primary/10 text-primary border-primary/20",
};

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Clear <span className="gradient-text">6-Step Process</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent, structured, and built on trust — so you know exactly what to expect at every stage.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex items-start mb-10 last:mb-0 ${
                  isLeft
                    ? "md:flex-row md:pr-[calc(50%+2rem)] pl-14 md:pl-0"
                    : "md:flex-row-reverse md:pl-[calc(50%+2rem)] pl-14 md:pr-0"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_hsl(var(--glow-primary))]">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>

                {/* Card */}
                <div className="glass-card-hover p-5 md:p-6 flex-1 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tagColors[step.tag]}`}
                      >
                        {step.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
