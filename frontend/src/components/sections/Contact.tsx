import { Instagram, Mail, Phone } from "lucide-react";

const email = "dsm.psic@gmail.com";
const phone = "+351 968 622 163";
const phoneHref = "+351968622163";
const instagramLabel = "@davidmacedopsicologia";
const instagramUrl = "https://www.instagram.com/davidmacedopsicologia";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: Phone,
    title: "Telefone",
    value: phone,
    href: `tel:${phoneHref}`,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: instagramLabel,
    href: instagramUrl,
  },
];

export default function Contact() {
  return (
    <section id="contactos" className="bg-primary text-primary-foreground">
      <div className="section-shell flex flex-col gap-12">
        <div className="reveal flex max-w-3xl flex-col gap-5 self-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
            Contactos
          </p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            Fale diretamente comigo.
          </h2>
          <p className="text-base leading-8 text-primary-foreground/78">
            Para esclarecer dúvidas ou pedir mais informação, utilize um dos contactos abaixo.
          </p>
        </div>

        <div className="contact-grid grid gap-4 md:grid-cols-3">
          {contacts.map(({ icon: Icon, title, value, href }, index) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={`contact-card reveal reveal-delay-${(index % 3) + 1} group flex min-h-48 flex-col justify-between gap-8 rounded-lg p-6`}
            >
              <span className="contact-card-icon flex size-10 items-center justify-center rounded-lg text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col gap-2">
                <span className="text-xl font-semibold">{title}</span>
                <span className="contact-card-value break-words underline-offset-4">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
