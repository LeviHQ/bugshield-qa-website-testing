import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IndianRupee, Zap, FileCheck, UserCheck, ShieldCheck, ClipboardCheck } from "lucide-react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality QA testing starting at just ₹499." },
  { icon: Zap, title: "Fast 48-Hour Delivery", desc: "Get your detailed bug report in 2 days or less." },
  { icon: FileCheck, title: "Clear Bug Reports", desc: "Professional reports with screenshots and severity levels." },
  { icon: UserCheck, title: "Real Human Testing", desc: "Not automated scans — real, manual, thorough testing." },
  { icon: ShieldCheck, title: "No Bugs = No Charge", desc: "If I find zero bugs, you don't pay a single rupee." },
  { icon: ClipboardCheck, title: "Structured Testing Approach", desc: "Well-defined test cases, edge-case coverage, and systematic execution." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why Choose Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built on <span className="gradient-text">Trust & Quality</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
