import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

interface Feature {
  label: string;
  basic: CellValue;
  standard: CellValue;
  premium: CellValue;
}

const features: Feature[] = [
  { label: "Pages Covered", basic: "1–3", standard: "Full Website", premium: "Full Website" },
  { label: "Functional Testing", basic: true, standard: true, premium: true },
  { label: "UI Testing", basic: false, standard: true, premium: true },
  { label: "Cross-Browser Testing", basic: false, standard: false, premium: true },
  { label: "Performance Observation", basic: false, standard: false, premium: true },
  { label: "Bug Report with Screenshots", basic: "Basic", standard: "Detailed", premium: "Professional" },
  { label: "Severity Classification", basic: false, standard: true, premium: true },
  { label: "Basic Suggestions", basic: false, standard: true, premium: true },
  { label: "Delivery Time", basic: "48 Hours", standard: "48 Hours", premium: "24 Hours" },
  { label: "Free Retest", basic: false, standard: "Basic (Launch Offer)", premium: true },
];

const columns = [
  { key: "basic" as const, name: "Basic", price: "₹999" },
  { key: "standard" as const, name: "Standard", price: "₹2,499" },
  { key: "premium" as const, name: "Premium", price: "₹4,999" },
];

const RenderCell = ({ value }: { value: CellValue }) => {
  if (value === true) return <Check className="h-4 w-4 text-primary mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

const PricingComparisonTable = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto mt-16"
    >
      <h3 className="text-xl font-bold text-center mb-8">
        Compare <span className="gradient-text">All Plans</span>
      </h3>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-5 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                  Feature
                </th>
                {columns.map((col) => (
                  <th key={col.key} className="px-5 py-4 text-center min-w-[120px]">
                    <div className="font-semibold text-foreground">{col.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{col.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr
                  key={feat.label}
                  className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <td className="px-5 py-3.5 text-foreground font-medium">{feat.label}</td>
                  {columns.map((col) => (
                    <td key={col.key} className="px-5 py-3.5 text-center">
                      <RenderCell value={feat[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingComparisonTable;
