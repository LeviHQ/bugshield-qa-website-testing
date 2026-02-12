import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import bugReportMockup from "@/assets/bug-report-mockup.png";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/919235943357?text=Hi%2C%20I%20want%20to%20test%20my%20website.";

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Professional QA Testing from India
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Is Your Website Losing Users Because of{" "}
              <span className="gradient-text">Hidden Bugs?</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Get your website professionally tested in{" "}
              <span className="text-foreground font-semibold">48 hours</span>. I
              find the bugs your users shouldn't. Detailed reports, real testing,
              affordable pricing.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Get My Website Tested <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" /> Secure
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" /> Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" /> Professional
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-2xl glow-blue" />
              <img
                src={bugReportMockup}
                alt="BugShield QA - Professional Bug Report Preview"
                className="rounded-2xl border border-white/10 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
