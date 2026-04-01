import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface StrategicInsightProps {
  children: React.ReactNode;
  title?: string;
}

const StrategicInsight = ({ children, title = "Strategic Insight" }: StrategicInsightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 p-8 bg-card border-l-2 border-primary/40 border-t border-r border-b border-border"
    >
      <div className="flex items-center gap-3 mb-3">
        <Lightbulb size={16} className="text-primary" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">{title}</span>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </motion.div>
  );
};

export default StrategicInsight;
