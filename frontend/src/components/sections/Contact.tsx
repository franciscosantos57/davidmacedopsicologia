import { Instagram, Mail, Phone } from "lucide-react";
import brandVisualImage from "@/assets/david-macedo-brand-emblem-transparent.png";
import content from "@/data/content.json";

const { contact } = content;
const contactIcons = {
  email: Mail,
  phone: Phone,
  instagram: Instagram,
};

export default function Contact() {
  return (
    <section id="contactos" className="contact-section palette-hero relative overflow-hidden text-primary">
      <div className="contact-shell section-shell relative z-10 flex flex-col gap-10">
        <div className="reveal flex max-w-3xl flex-col gap-5 self-center text-center">
          <div className="contact-brand-visual" aria-hidden="true">
            <img
              src={brandVisualImage}
              alt=""
              className="contact-brand-image"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {contact.title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            {contact.text}
          </p>
        </div>

        <div className="contact-grid grid gap-4 md:grid-cols-3">
          {contact.items.map(({ type, title, value, href }, index) => {
            const Icon = contactIcons[type as keyof typeof contactIcons];

            return (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={`contact-card reveal reveal-delay-${(index % 3) + 1} group flex min-h-48 flex-col justify-between gap-8 rounded-lg p-6`}
              >
                <span className="contact-card-icon flex size-10 items-center justify-center rounded-lg text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col gap-2">
                  <span className="text-xl font-semibold">{title}</span>
                  <span className="contact-card-value break-words underline-offset-4">
                    {value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
