import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does testing take?",
    a: "Most projects are completed within 48 hours. Premium plan clients receive priority 24-hour delivery.",
  },
  {
    q: "What if no bugs are found?",
    a: "If I don't find any bugs, you don't pay. That's my No Bugs = No Charge guarantee.",
  },
  {
    q: "Do you provide automation testing?",
    a: "Yes, I have experience with Selenium and TestNG. Automation testing is available as an add-on for larger projects.",
  },
  {
    q: "Do you test mobile websites?",
    a: "Absolutely! I test across different screen sizes and browsers to ensure your website works perfectly on mobile devices.",
  },
  {
    q: "How do I pay?",
    a: "I accept UPI, bank transfer, and PayPal. Payment is due only after you receive and approve the bug report.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card border border-white/10 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-medium hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
