import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import destPortugal from "@/assets/dest-portugal.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";

const allDestinations = [
  { name: "Grenada", region: "Caribbean", investment: "From $150,000", type: "Citizenship", advantage: "E-2 Treaty access to the U.S.", image: destCaribbean },
  { name: "Saint Kitts & Nevis", region: "Caribbean", investment: "From $250,000", type: "Citizenship", advantage: "Oldest CBI program worldwide", image: destCaribbean },
  { name: "Antigua & Barbuda", region: "Caribbean", investment: "From $230,000", type: "Citizenship", advantage: "Family-friendly pricing structure", image: destCaribbean },
  { name: "Dominica", region: "Caribbean", investment: "From $100,000", type: "Citizenship", advantage: "Most cost-effective CBI globally", image: destCaribbean },
  { name: "Portugal", region: "Europe", investment: "From €500,000", type: "Residency", advantage: "EU residency with citizenship pathway", image: destPortugal },
  { name: "Greece", region: "Europe", investment: "From €250,000", type: "Residency", advantage: "Affordable EU Golden Visa", image: destGreece },
  { name: "Malta", region: "Europe", investment: "From €690,000", type: "Citizenship", advantage: "Full EU citizenship by naturalization", image: destMalta },
  { name: "Turkey", region: "Global", investment: "From $400,000", type: "Citizenship", advantage: "Fast-track citizenship in 3-6 months", image: destTurkey },
  { name: "UAE", region: "Global", investment: "From $550,000", type: "Residency", advantage: "Tax-free Golden Visa residency", image: destUae },
  { name: "Panama", region: "Global", investment: "From $300,000", type: "Residency", advantage: "Friendly Nations Visa program", image: destPanama },
];

const regions = ["All", "Caribbean", "Europe", "Global"];

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState("All");

  const filtered = activeRegion === "All" ? allDestinations : allDestinations.filter((d) => d.region === activeRegion);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Destinations</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Explore <span className="italic text-primary">Your World</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
              From the Caribbean to Europe and beyond, discover curated investment migration 
              programs in the world's most strategic jurisdictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-4 flex-wrap">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  activeRegion === r
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to="/contact" className="group block relative overflow-hidden aspect-[3/4]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={1000} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                      {dest.type}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">{dest.region}</span>
                    <h3 className="font-serif text-2xl text-foreground mb-1">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{dest.investment}</p>
                    <p className="text-xs text-primary/80">{dest.advantage}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Not Sure Which Jurisdiction?</h2>
          <p className="text-muted-foreground mb-10">Our advisors will help you identify the perfect match for your goals.</p>
          <CTAButton to="/contact" variant="primary">Book a Strategy Call</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
