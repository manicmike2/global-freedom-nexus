import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SectionHeading from "@/components/SectionHeading";

const videos = [
  { id: "E7H59xlWZDc" },
  { id: "aIslx3tp6qs" },
  { id: "lAa8CobEztM" },
  { id: "QIxCBBZTw9k" },
  { id: "7O4QCJbhJVs" },
];

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const YouTubeSlideshow = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Watch & Learn"
          title="From Our YouTube Channel"
          subtitle="Insights from Tatiana Muntean on investment migration, global mobility, and strategic residency planning."
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {videos.map((v, i) => (
                <CarouselItem key={v.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.button
                    type="button"
                    onClick={() => setActiveId(v.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative block w-full aspect-video overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
                    aria-label={`Play YouTube video ${i + 1}`}
                  >
                    <img
                      src={thumb(v.id)}
                      alt={`YouTube video ${i + 1} thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-charcoal-deep/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                        <Play className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground fill-current ml-1" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>

      <Dialog open={!!activeId} onOpenChange={(o) => !o && setActiveId(null)}>
        <DialogContent className="max-w-4xl p-0 bg-charcoal-deep border-border overflow-hidden">
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-charcoal-deep/80 text-ivory flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
          {activeId && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default YouTubeSlideshow;
