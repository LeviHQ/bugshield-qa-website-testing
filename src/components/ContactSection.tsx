import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Ship Bug-Free?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Send me your website details and I'll get back to you within a few hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-1 rounded-xl overflow-hidden"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform?embedded=true"
              className="w-full h-[500px] rounded-xl bg-card"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="glass-card-hover p-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:adarshmishra70931@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  adarshmishra70931@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsh-jayprakash-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  linkedin.com/in/adarsh-jayprakash-mishra
                </a>
                <a
                  href="https://wa.me/919235943357?text=Hi%2C%20I%20want%20to%20test%20my%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  +91 9235943357
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/919235943357?text=Hi%2C%20I%20want%20to%20test%20my%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
