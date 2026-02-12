import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TestTubeDiagonal, Bug, FileSearch } from "lucide-react";

const skills = [
  { icon: TestTubeDiagonal, label: "Manual Testing" },
  { icon: Code2, label: "Selenium" },
  { icon: Bug, label: "Bug Reporting" },
  { icon: FileSearch, label: "Functional Testing" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Adarsh Jayprakash Mishra</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a Freelance QA Tester based in India, passionate about helping
            startups, freelancers, and small businesses deliver{" "}
            <span className="text-foreground font-medium">bug-free websites</span>{" "}
            to their users. With expertise in manual and automation testing, I
            ensure every page, form, and feature works exactly as intended —
            so you can launch with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((s) => (
              <div
                key={s.label}
                className="glass-card-hover flex items-center gap-2.5 px-5 py-3"
              >
                <s.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
