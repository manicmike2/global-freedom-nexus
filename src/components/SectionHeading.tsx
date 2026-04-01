import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SectionHeading = ({ label, title, subtitle, align = "center" }: SectionHeadingProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-14 lg:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      {/* Elegant divider line */}
      <motion.div
        variants={lineExpand}
        className={`h-px w-16 bg-primary/30 mt-6 mb-4 origin-left ${align === "center" ? "mx-auto origin-center" : ""}`}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-2 text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
