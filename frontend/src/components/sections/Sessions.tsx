import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import onlineConsultationMobileImage from "@/assets/onlineconsultation-mobile.png";
import onlineConsultationImage from "@/assets/onlineconsultation-palette.png";
import hmFisioImage from "@/assets/hmfisio.png";
import content from "@/data/content.json";

const { sessions } = content;
const sessionAssets = [
  {
    image: onlineConsultationImage,
    mobileImage: onlineConsultationMobileImage,
    imageClassName: "session-card-online-image",
    imageFrameClassName: "session-card-image-mobile-portrait",
  },
  {
    image: hmFisioImage,
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
              <p className="eyebrow">{sessions.eyebrow}</p>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                {sessions.title}
              </h2>
            </div>
          </div>

          <div className="sessions-grid grid w-full gap-5 md:grid-cols-2">
            {sessions.items.map(
              (
                {
                  title,
                  text,
                  imageAlt,
                  actionLabel,
                  actionHref,
                },
                index
              ) => {
                const asset = sessionAssets[index];

                return (
                  <article
                    key={title}
                    className={`session-card reveal reveal-delay-${index + 1} overflow-hidden rounded-lg border border-primary/20 bg-card`}
                  >
                    <div className={`session-card-image aspect-[16/8.6] overflow-hidden bg-muted ${asset.imageFrameClassName}`}>
                      <picture className="block h-full w-full">
                        {asset.mobileImage ? <source srcSet={asset.mobileImage} media="(max-width: 767px)" /> : null}
                        <img
                          src={asset.image}
                          alt={imageAlt}
                          className={`h-full w-full object-cover ${asset.imageClassName}`}
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
                          <CalendarDays className="size-4" />
                          {actionLabel}
                        </Button>
                      )}
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
