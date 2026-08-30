import { MessageSquareText } from "lucide-react";
import content from "@/data/content.json";

const { firstSession } = content;

export default function FirstSession() {
  return (
    <section id="primeira-consulta" className="palette-section">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="reveal flex flex-col gap-5">
          <p className="eyebrow">{firstSession.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {firstSession.title}
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            {firstSession.intro}
          </p>
        </div>

        <article className="reveal reveal-delay-1 flex flex-col gap-5 border-l-2 border-accent/60 pl-6 sm:pl-8">
          <MessageSquareText className="size-7 text-accent-foreground" aria-hidden="true" />
          <h3 className="text-xl font-semibold">{firstSession.cardTitle}</h3>
          <div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground">
            {firstSession.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map(({ text, highlight }, segmentIndex) =>
                  highlight ? (
                    <span key={segmentIndex} className="marker-highlight">
                      {text}
                    </span>
                  ) : (
                    text
                  )
                )}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
