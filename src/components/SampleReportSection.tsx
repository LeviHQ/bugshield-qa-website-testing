import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Image } from "lucide-react";

const SampleReportSection = () => {
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
            Sample Report
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Your <span className="gradient-text">Bug Report</span> Looks Like
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-card p-6 md:p-8 glow-blue"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <span className="font-semibold">Bug #0042</span>
            <span className="ml-auto px-3 py-0.5 rounded-full bg-destructive/20 text-destructive text-xs font-semibold">
              Critical
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Bug Title</span>
              <p className="font-medium">Login form does not validate empty email field</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Steps to Reproduce</span>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Navigate to /login</li>
                <li>Leave email field empty</li>
                <li>Enter any password</li>
                <li>Click "Sign In"</li>
              </ol>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Expected Result</span>
                <p className="text-muted-foreground">Validation error: "Email is required"</p>
              </div>
              <div>
                <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Actual Result</span>
                <p className="text-destructive">Form submits successfully, returns 500 error</p>
              </div>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Screenshot</span>
              <div className="w-full h-32 rounded-lg bg-muted/50 border border-white/5 flex items-center justify-center text-muted-foreground">
                <Image className="h-5 w-5 mr-2" /> Screenshot attached in report
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleReportSection;
