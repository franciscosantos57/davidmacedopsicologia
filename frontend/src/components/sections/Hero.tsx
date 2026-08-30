import { ArrowDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import davidPhoto from "@/assets/profilepicture.png";
import davidPhotoHorizontal from "@/assets/profilepicture-horizontal.png";
import davidPhotoMobile from "@/assets/profilepicture-mobile.png";
import content from "@/data/content.json";

const { hero } = content;

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="palette-hero relative overflow-hidden"
    >
      <div className="hero-shell section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="hero-copy reveal flex max-w-3xl flex-col justify-between gap-8">
          <div className="hero-intro flex flex-col gap-5">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-title text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="hero-text max-w-2xl text-lg leading-8 text-muted-foreground">
              {hero.text}
            </p>
          </div>
          <div className="hero-actions flex flex-col gap-3 sm:flex-row">
            <Button size="lg" type="button">
              <CalendarDays className="size-4" />
              {hero.primaryAction}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("primeira-consulta")}>
              <ArrowDown className="size-4" />
              {hero.secondaryAction}
            </Button>
          </div>
        </div>

        <div className="hero-media reveal reveal-delay-1 flex lg:justify-end">
          <figure className="hero-figure flex h-full w-full max-w-[420px] flex-col justify-between gap-4">
            <div className="hero-photo aspect-[4/5] overflow-hidden rounded-lg border border-accent/35 bg-card shadow-xl shadow-black/25">
              <picture className="block h-full w-full">
                <source media="(max-width: 430px)" srcSet={davidPhotoMobile} />
                <source media="(max-width: 1024px)" srcSet={davidPhotoHorizontal} />
                <img
                  src={davidPhoto}
                  alt={hero.imageAlt}
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{hero.captionName}</span>
              <span>{hero.captionCredential}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
