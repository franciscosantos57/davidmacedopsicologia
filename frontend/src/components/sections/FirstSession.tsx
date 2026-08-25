import { MessageSquareText } from "lucide-react";

export default function FirstSession() {
  return (
    <section id="primeira-consulta" className="bg-background">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="reveal flex flex-col gap-5">
          <p className="eyebrow">Primeira consulta</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            Tem receio da primeira consulta?
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Saiba como funciona a primeira conversa e o que pode esperar deste primeiro encontro.
          </p>
        </div>

        <article className="reveal reveal-delay-1 flex flex-col gap-5 border-l-2 border-primary/35 pl-6 sm:pl-8">
          <MessageSquareText className="size-7 text-primary" aria-hidden="true" />
          <h3 className="text-xl font-semibold">Como funciona a primeira consulta?</h3>
          <div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground">
            <p>
              Dar o primeiro passo pode parecer difícil, mas a primeira consulta{" "}
              <span className="marker-highlight">
                não é um questionário rígido nem um momento de avaliação
              </span>
              . É, acima de tudo, um{" "}
              <span className="marker-highlight">espaço seguro de encontro</span>.
            </p>
            <p>
              O foco inicial será{" "}
              <span className="marker-highlight">
                ouvir a sua história com atenção, empatia e sem julgamento
              </span>
              . Este tempo serve para conhecer quem é, explorar o que o traz até aqui e perceber, de forma
              tranquila, como o posso ajudar.
            </p>
            <p>
              <span className="marker-highlight">
                Não precisa de saber exatamente o que dizer ou por onde começar
              </span>
              . Vamos conversar sobre o momento atual da sua vida, as suas preocupações e as suas
              expectativas em relação à terapia.
            </p>
            <p>
              O objetivo não é encontrar soluções mágicas logo no primeiro dia, mas criar uma base de
              <span className="marker-highlight"> confiança e segurança</span> para que, juntos, possamos
              começar a desenhar o seu caminho de bem-estar, ao seu ritmo.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
