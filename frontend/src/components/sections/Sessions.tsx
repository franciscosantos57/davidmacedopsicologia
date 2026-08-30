import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import onlineConsultationMobileImage from "@/assets/onlineconsultation-mobile.png";
import onlineConsultationImage from "@/assets/onlineconsultation-palette.png";
import hmFisioImage from "@/assets/hmfisio.png";

const sessionTypes = [
  {
    title: "Consultas online",
    text: "Realizadas através do Google Meet, com calendarização gerida por Google Calendar.",
    image: onlineConsultationImage,
    mobileImage: onlineConsultationMobileImage,
    imageAlt: "Ambiente calmo para consulta online por videochamada",
    actionLabel: "Marcação",
    imageClassName: "session-card-online-image",
    imageFrameClassName: "session-card-image-mobile-portrait",
  },
  {
    title: "Consultas presenciais",
    text: "Disponíveis em Montemor-o-Novo, na HM Fisio, com estacionamento mesmo à porta.",
    image: hmFisioImage,
    imageAlt: "Espaço da HM Fisio em Montemor-o-Novo",
    actionLabel: "Localização",
    actionHref: "https://maps.app.goo.gl/vLp9y8zY5fjHbGdR7",
    imageClassName: "brightness-[0.96] contrast-[0.92] saturate-[0.78] sepia-[0.14] hue-rotate-[345deg]",
    mobileImage: undefined,
    imageFrameClassName: "",
  },
];

export default function Sessions() {
  return (
    <section id="modalidades" className="palette-band">
      <div className="section-shell">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <div className="reveal flex flex-col gap-4">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="eyebrow">Marcações</p>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Escolha a modalidade que melhor se adapta a si.
              </h2>
            </div>
          </div>

          <div className="sessions-grid grid w-full gap-5 md:grid-cols-2">
            {sessionTypes.map(
              (
                {
                  title,
                  text,
                  image,
                  mobileImage,
                  imageAlt,
                  actionLabel,
                  actionHref,
                  imageClassName,
                  imageFrameClassName,
                },
                index
              ) => (
                <article
                  key={title}
                  className={`session-card reveal reveal-delay-${index + 1} overflow-hidden rounded-lg border border-primary/20 bg-card`}
                >
                  <div className={`session-card-image aspect-[16/8.6] overflow-hidden bg-muted ${imageFrameClassName}`}>
                    <picture className="block h-full w-full">
                      {mobileImage ? <source srcSet={mobileImage} media="(max-width: 767px)" /> : null}
                      <img
                        src={image}
                        alt={imageAlt}
                        className={`h-full w-full object-cover ${imageClassName}`}
                      />
                    </picture>
                  </div>
                  <div className="session-card-body flex flex-col gap-5 p-5">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-base leading-7 text-muted-foreground">{text}</p>
                    </div>
                    {actionHref ? (
                      <Button asChild className="w-full sm:w-36">
                        <a href={actionHref} target="_blank" rel="noreferrer">
                          <MapPin className="size-4" />
                          {actionLabel}
                        </a>
                      </Button>
                    ) : (
                      <Button type="button" className="w-full sm:w-36">
                        {actionLabel === "Localização" ? (
                          <MapPin className="size-4" />
                        ) : (
                          <CalendarDays className="size-4" />
                        )}
                        {actionLabel}
                      </Button>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
