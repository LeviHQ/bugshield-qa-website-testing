import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, FileText, RefreshCw } from "lucide-react";

const steps = [
  { icon: Globe, title: "Submit Website URL", desc: "Share your website link and testing requirements." },
  { icon: Search, title: "I Test & Document Bugs", desc: "Thorough manual testing across all pages and features." },
  { icon: FileText, title: "Receive Detailed Report", desc: "Get a professional bug report with screenshots & severity." },
  { icon: RefreshCw, title: "Fix & Optional Retest", desc: "Fix the bugs and get a free retest (Premium plan)." },
];

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
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple <span className="gradient-text">4-Step Process</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              <div
                className={`absolute ${
                  i % 2 === 0 ? "left-0 md:right-0 md:left-auto md:-mr-5" : "left-0 md:-ml-5"
                } w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10`}
              >
                <step.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-16 md:ml-0 glass-card-hover p-5 flex-1">
                <span className="text-xs text-primary font-semibold mb-1 block">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
