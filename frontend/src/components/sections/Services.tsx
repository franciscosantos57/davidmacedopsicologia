import { useState } from "react";
import { Brain, HeartPulse, Leaf, MessageCircleHeart, Route } from "lucide-react";
import content from "@/data/content.json";

const { services } = content;
const serviceIcons = [Brain, HeartPulse, Leaf, MessageCircleHeart, Route];

export default function Services() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (title: string) => {
    setFlippedCards((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <section id="areas" className="palette-band">
      <div className="section-shell flex flex-col gap-12">
        <div className="reveal flex max-w-2xl flex-col gap-4">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {services.title}
          </h2>
        </div>

        <div className="services-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.items.map(({ title, detail }, index) => {
            const Icon = serviceIcons[index];
            const isFlipped = flippedCards.has(title);

            return (
              <button
                key={title}
                type="button"
                aria-pressed={isFlipped}
                onClick={() => toggleCard(title)}
                className={`service-card-button reveal reveal-delay-${(index % 3) + 1} min-h-76 rounded-lg text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/35`}
              >
                <span className="service-card-scale block min-h-76 rounded-lg">
                  <span
                    className="service-card-inner relative flex min-h-76 w-full rounded-lg"
                  >
                    <span className="service-card-face service-card-front absolute inset-0 flex flex-col justify-between gap-8 rounded-lg border border-primary/20 bg-card p-6 [backface-visibility:hidden]">
                      <span className="service-card-main flex flex-col gap-5">
                        <span className="service-card-icon flex size-11 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),var(--accent-foreground))]">
                          {Icon ? <Icon className="size-6 text-background" aria-hidden="true" /> : null}
                        </span>
                        <span className="service-card-title text-base font-semibold leading-6 text-primary">
                          {title}
                        </span>
                      </span>
                      <span className="service-card-hint text-sm font-medium text-accent-foreground">
                        {services.cardHint}
                      </span>
                    </span>

                    <span className="service-card-face service-card-back absolute inset-0 flex items-center justify-center rounded-lg border border-accent/45 bg-[linear-gradient(145deg,var(--brand-brown),var(--brand-blue-soft))] p-6 text-center text-secondary-foreground [backface-visibility:hidden]">
                      <span className="text-sm leading-6">{detail}</span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
