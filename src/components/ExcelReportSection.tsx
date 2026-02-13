import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Download, X, ZoomIn, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import excelPreview from "@/assets/excel-report-preview.png";

const deliverySteps = [
  "We thoroughly test your website or web app",
  "Each issue is logged in structured Excel format",
  "You receive a clean, shareable report ready for your developer",
];

const bulletPoints = [
  "Unique Bug ID",
  "Clear Steps to Reproduce",
  "Expected vs Actual Result",
  "Severity & Priority",
  "Environment Details",
  "Status Tracking",
];

const DOWNLOAD_URL =
  "https://1drv.ms/x/c/d09b73bd954f8bef/IQCKDWA1DlffSISopto3MHPYAYLZsHQnD6MLJyhuPhg1pZM?e=7Nfa3o";

const ExcelReportSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Real Client Deliverable
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Exact <span className="gradient-text">Bug Report</span> You Will Receive
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver structured, developer-ready Excel reports. Preview the format below and download the full sample.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* LEFT — Image Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative group cursor-pointer"
            onClick={() => setZoomed(true)}
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 glow-blue transition-all duration-300 group-hover:shadow-[0_8px_40px_hsl(217_91%_60%/0.22)] group-hover:-translate-y-1">
              {/* Badge */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-primary">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Actual Excel Format (.xlsx)
              </div>
              {/* Zoom overlay */}
              <div className="absolute inset-0 z-[5] flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-8 w-8 text-primary" />
              </div>
              <img
                src={excelPreview}
                alt="Sample Excel bug report showing structured columns: Bug ID, Summary, Steps to Reproduce, Expected vs Actual Result, Severity, Priority, and Status"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* RIGHT — Description & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Every issue is documented with:
            </p>
            <ul className="space-y-2.5 mb-8">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              This is the exact structured format clients receive after testing.
            </p>

            <div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 transition-transform duration-200 hover:scale-105"
              >
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download Sample Excel Report
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Compatible with Microsoft Excel and Google Sheets.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Delivery Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16 glass-card p-6 md:p-8"
        >
          <h3 className="font-semibold text-lg mb-5 text-center">How We Deliver Reports</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {deliverySteps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 cursor-zoom-out"
            onClick={() => setZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={excelPreview}
              alt="Full-size Excel bug report preview"
              className="max-w-full max-h-[90vh] rounded-xl border border-white/10 shadow-2xl"
            />
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExcelReportSection;
