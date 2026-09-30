import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import onlineConsultationMobileImage from "@/assets/optimized/onlineconsultation-mobile-940.webp";
import onlineConsultationMobileSmall from "@/assets/optimized/onlineconsultation-mobile-480.webp";
import onlineConsultationImage from "@/assets/optimized/onlineconsultation-palette-1200.webp";
import onlineConsultationSmall from "@/assets/optimized/onlineconsultation-palette-640.webp";
import hmFisioImage from "@/assets/optimized/hmfisio-1200.webp";
import hmFisioSmall from "@/assets/optimized/hmfisio-640.webp";
import content from "@/data/content.json";

const { sessions } = content;
const sessionAssets = [
  {
    image: onlineConsultationImage,
    imageSmall: onlineConsultationSmall,
    mobileImage: onlineConsultationMobileImage,
    mobileImageSmall: onlineConsultationMobileSmall,
    width: 1200,
    height: 675,
    imageClassName: "session-card-online-image",
    imageFrameClassName: "session-card-image-mobile-portrait",
  },
  {
    image: hmFisioImage,
    imageSmall: hmFisioSmall,
    width: 1200,
    height: 900,
    imageClassName: "brightness-[0.96] contrast-[0.92] saturate-[0.78] sepia-[0.14] hue-rotate-[345deg]",
    mobileImage: undefined,
    mobileImageSmall: undefined,
    imageFrameClassName: "",
  },
];

export default function Sessions() {
  return (
    <section id="modalidades" className="viewport-page palette-band">
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
                const ActionIcon = index === 0 ? CalendarDays : MapPin;

                return (
                  <article
                    key={title}
                    className={`session-card reveal reveal-delay-${index + 1} overflow-hidden rounded-lg border border-primary/20 bg-card`}
                  >
                    <div className={`session-card-image aspect-[16/8.6] overflow-hidden bg-muted ${asset.imageFrameClassName}`}>
                      <picture className="block h-full w-full">
                        {asset.mobileImage ? <source srcSet={`${asset.mobileImageSmall} 480w, ${asset.mobileImage} 940w`} sizes="100vw" media="(max-width: 767px)" /> : null}
                        <img
                          src={asset.image}
                          srcSet={`${asset.imageSmall} 640w, ${asset.image} 1200w`}
                          sizes="(max-width: 767px) 100vw, 512px"
                          width={asset.width}
                          height={asset.height}
                          loading="eager"
                          fetchPriority="low"
                          decoding="async"
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
                            <ActionIcon className="size-4" />
                            {actionLabel}
                          </a>
                        </Button>
                      ) : (
                        <Button type="button" className="w-full sm:w-36">
                          <ActionIcon className="size-4" />
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
