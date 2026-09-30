import { ArrowDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import davidPhoto from "@/assets/optimized/profilepicture-840.webp";
import davidPhotoSmall from "@/assets/optimized/profilepicture-420.webp";
import davidPhotoHorizontal from "@/assets/optimized/profilepicture-horizontal-1536.webp";
import davidPhotoHorizontalSmall from "@/assets/optimized/profilepicture-horizontal-768.webp";
import davidPhotoMobile from "@/assets/optimized/profilepicture-mobile-960.webp";
import davidPhotoMobileSmall from "@/assets/optimized/profilepicture-mobile-480.webp";
import content from "@/data/content.json";

const { hero, sessions } = content;
const onlineBookingUrl = sessions.items[0].actionHref;

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
            <Button size="lg" asChild>
              <a href={onlineBookingUrl} target="_blank" rel="noreferrer">
                <CalendarDays className="size-4" />
                {hero.primaryAction}
              </a>
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
                <source media="(max-width: 430px)" srcSet={`${davidPhotoMobileSmall} 480w, ${davidPhotoMobile} 960w`} sizes="100vw" width={960} height={720} />
                <source media="(max-width: 1024px)" srcSet={`${davidPhotoHorizontalSmall} 768w, ${davidPhotoHorizontal} 1536w`} sizes="100vw" width={1536} height={864} />
                <img
                  src={davidPhoto}
                  srcSet={`${davidPhotoSmall} 420w, ${davidPhoto} 840w`}
                  sizes="420px"
                  width={840}
                  height={1042}
                  fetchPriority="high"
                  loading="eager"
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
