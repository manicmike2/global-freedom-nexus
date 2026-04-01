import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";
import { MessageCircle, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const expectations = [
  "A confidential, obligation-free conversation with a senior advisor",
  "Assessment of your family's unique objectives and circumstances",
  "Overview of relevant programs and jurisdictions",
  "Transparent discussion of timelines, costs, and next steps",
  "No pressure, no hard sell — just informed, strategic guidance",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", type: "individual", interest: "", budget: "", message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase.from("contact_us_submissions").insert({
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      i_am: formData.type,
      primary_interest: formData.interest || null,
      help_message: formData.message,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } else {
      console.log("Submission saved successfully");
      toast({
        title: "Thank you for your inquiry",
        description: "A member of our advisory team will be in touch within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", type: "individual", interest: "", budget: "", message: "" });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Contact Global Freedom Capital – Book a Private Consultation"
        description="Schedule a confidential consultation with our investment migration advisors. Expert guidance on citizenship by investment, Golden Visas & residency programs for HNWIs."
        canonical="https://globalfreedomcapital.com/contact"
      />
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Contact</span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                Begin Your <span className="italic text-primary rounded-none">Private Consultation</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Every engagement begins with a confidential, obligation-free conversation. 
                Share your objectives and we'll outline how Global Freedom Capital can help 
                you and your family achieve your global mobility goals.
              </p>

              {/* What to Expect */}
              <h2 className="font-serif text-xl text-foreground mb-4">What to Expect</h2>
              <ul className="space-y-3 mb-10">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "contact@globalfreedomcapital.com" },
                  { icon: Phone, label: "Phone", value: "+1 (445) 600 3206" },
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
                href="https://wa.me/14456003206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-xs tracking-[0.15em] uppercase border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>

              {/* Additional Context */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-serif text-lg text-foreground mb-3">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Explore our advisory services to learn more about your options:
                </p>
                <div className="flex flex-wrap gap-4">
                  <InternalLink to="/citizenship-by-investment">Citizenship by Investment</InternalLink>
                  <InternalLink to="/golden-visas">Golden Visas</InternalLink>
                  <InternalLink to="/destinations">All Destinations</InternalLink>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="space-y-6 p-8 lg:p-10 bg-card border border-border">
                <h2 className="font-serif text-2xl text-foreground mb-2">Request a Consultation</h2>
                <p className="text-xs text-muted-foreground mb-6">All inquiries are confidential.</p>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">I am a... *</label>
                  <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="individual">Individual / Family</option>
                    <option value="attorney">Immigration Attorney</option>
                    <option value="advisor">Wealth Advisor / Family Office</option>
                    <option value="developer">Developer / Program Stakeholder</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">Primary Interest</label>
                  <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select an option</option>
                    <option value="cbi">Citizenship by Investment</option>
                    <option value="golden-visa">Golden Visa / Residency</option>
                    <option value="both">Both / Not Sure</option>
                    <option value="attorney-partnership">Attorney Partnership</option>
                    <option value="market-entry">U.S. Market Entry (for CBI firms)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground block mb-2">How can we help? *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your objectives, timeline, and any specific jurisdictions of interest..." />
                </div>

                <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors">
                  Submit Inquiry
                </button>

                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                  Your information is kept strictly confidential and will never be shared with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Trusted Advisory Since Inception</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/70">
            <span>Caribbean CBI Programs</span>
            <span>•</span>
            <span>European Golden Visas</span>
            <span>•</span>
            <span>Attorney Partnerships</span>
            <span>•</span>
            <span>Family Office Collaboration</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
