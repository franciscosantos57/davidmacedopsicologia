import { ArrowDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import davidPhoto from "@/assets/profilepicture.png";
import davidPhotoHorizontal from "@/assets/profilepicture-horizontal.png";
import davidPhotoMobile from "@/assets/profilepicture-mobile.png";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--background),oklch(0.955_0.026_136))]"
    >
      <div className="hero-shell section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="hero-copy reveal flex max-w-3xl flex-col justify-between gap-8">
          <div className="hero-intro flex flex-col gap-5">
            <p className="eyebrow">Psicologia clínica para adultos</p>
            <h1 className="hero-title text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Um espaço seguro para cuidar da sua saúde mental e reencontrar o equilíbrio.
            </h1>
            <p className="hero-text max-w-2xl text-lg leading-8 text-muted-foreground">
              Acompanhamento psicológico online e presencial em Montemor-o-Novo, com uma abordagem
              psicodinâmica centrada na escuta, no autoconhecimento e no ritmo de cada pessoa.
            </p>
          </div>
          <div className="hero-actions flex flex-col gap-3 sm:flex-row">
            <Button size="lg" type="button">
              <CalendarDays className="size-4" />
              Pedir marcação
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("primeira-consulta")}>
              <ArrowDown className="size-4" />
              Primeira consulta
            </Button>
          </div>
        </div>

        <div className="hero-media reveal reveal-delay-1 flex lg:justify-end">
          <figure className="hero-figure flex h-full w-full max-w-[420px] flex-col justify-between gap-4">
            <div className="hero-photo aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card shadow-xl shadow-primary/10">
              <picture className="block h-full w-full">
                <source media="(max-width: 430px)" srcSet={davidPhotoMobile} />
                <source media="(max-width: 1024px)" srcSet={davidPhotoHorizontal} />
                <img
                  src={davidPhoto}
                  alt="Fotografia temporária de David Santos Macedo"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">David Santos Macedo</span>
              <span>N.º de cédula profissional 028880</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
