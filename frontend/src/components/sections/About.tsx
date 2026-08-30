import content from "@/data/content.json";

const { about } = content;

export default function About() {
  return (
    <section id="sobre" className="palette-section">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="reveal flex flex-col gap-4">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {about.title}
          </h2>
        </div>

        <div className="reveal flex flex-col gap-5 text-base leading-8 text-muted-foreground">
          {about.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              {paragraph.map(({ text, emphasis }, segmentIndex) =>
                emphasis ? (
                  <strong
                    key={segmentIndex}
                    className={`font-semibold ${emphasis === "primary" ? "text-primary" : "text-accent-foreground"}`}
                  >
                    {text}
                  </strong>
                ) : (
                  text
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
