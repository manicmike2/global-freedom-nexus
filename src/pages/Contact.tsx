import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individual",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry",
      description: "A member of our advisory team will be in touch within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", type: "individual", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Contact</span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                Begin Your <span className="italic text-primary">Private Consultation</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-12">
                Every engagement begins with a confidential, obligation-free conversation. 
                Share your objectives and we'll outline how Global Freedom Capital can help.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@globalfreedomcapital.com" },
                  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199" },
                  { icon: MapPin, label: "Location", value: "New York, United States" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div>
                      <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-1">{item.label}</span>
                      <span className="text-sm text-foreground">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/18005550199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-xs tracking-[0.15em] uppercase border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 lg:p-10 bg-card border border-border">
                <h2 className="font-serif text-2xl text-foreground mb-2">Request a Consultation</h2>
                <p className="text-xs text-muted-foreground mb-6">All inquiries are confidential.</p>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">I am a... *</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="individual">Individual / Family</option>
                    <option value="attorney">Immigration Attorney</option>
                    <option value="advisor">Wealth Advisor / Family Office</option>
                    <option value="developer">Developer / Program Stakeholder</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">How can we help? *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your objectives, timeline, and any specific jurisdictions of interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
