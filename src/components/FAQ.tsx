import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
  label?: string;
}

const FAQ = ({ items, heading = "Frequently Asked Questions", label = "FAQ" }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">{label}</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground">{heading}</h2>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h3 className="font-serif text-base lg:text-lg text-foreground pr-8 group-hover:text-primary transition-colors">
                  {item.question}
                </h3>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};

export default FAQ;
