export default function About() {
  return (
    <section id="sobre" className="palette-section">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="reveal flex flex-col gap-4">
          <p className="eyebrow">Apresentação</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            Um percurso dedicado a compreender o comportamento humano.
          </h2>
        </div>

        <div className="reveal flex flex-col gap-5 text-base leading-8 text-muted-foreground">
          <p>
            O meu percurso na compreensão do comportamento humano começou na{" "}
            <strong className="font-semibold text-primary">Universidade de Évora</strong>, onde me
            licenciei em Sociologia. Movido pelo desejo de intervir de forma mais próxima e individual,
            licenciei-me também em Psicologia e especializei-me em{" "}
            <strong className="font-semibold text-primary">Psicologia Clínica no ISPA</strong>, em Lisboa.
          </p>
          <p>
            Ao longo do meu percurso, desenvolvi competências com diferentes faixas etárias: estagiei em
            Lisboa no apoio a{" "}
            <strong className="font-semibold text-accent-foreground">
              crianças institucionalizadas
            </strong>{" "}
            e, mais tarde, já no âmbito da Ordem dos Psicólogos Portugueses, dediquei-me à intervenção com
            a <strong className="font-semibold text-accent-foreground">população idosa</strong>. Esta
            amplitude de experiências deu-me uma visão profunda do ciclo de vida e do sofrimento humano em várias fases.
          </p>
          <p>
            Atualmente, foco a minha prática clínica no acompanhamento de adultos, trabalhando sob a
            <strong className="font-semibold text-primary"> abordagem psicodinâmica</strong>, uma vertente
            que permite explorar as causas profundas do mal-estar, promovendo um{" "}
            <strong className="font-semibold text-accent-foreground">
              autoconhecimento real e duradouro
            </strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
