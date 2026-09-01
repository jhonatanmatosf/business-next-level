import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Header } from "@/components/site/Header";
import { FloatingCta } from "@/components/site/FloatingCta";
import { WhatsappCta } from "@/components/site/WhatsappCta";
import { Photo } from "@/components/site/Photo";
import { LogoGrid } from "@/components/site/Logos";
import { initScrollTracking } from "@/lib/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroPhoto from "@/assets/MG_8922.jpg.asset.json";
import aboutPhoto from "@/assets/MG_8958.jpg.asset.json";
import diffPhoto from "@/assets/MG_8931.jpg.asset.json";

const TITLE = "Jhonatan Matos | Business Advisor";
const DESCRIPTION =
  "Acompanhamento estratégico para empresários que querem crescer com mais clareza, controle, margem e direção.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "business advisor, consultoria empresarial, consultoria estratégica, gestão empresarial, estratégia de negócios, consultor empresarial, advisory para empresários",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jhonatan Matos — Business Advisor",
          description: DESCRIPTION,
          areaServed: "BR",
          serviceType: "Acompanhamento estratégico para empresários",
        }),
      },
    ],
  }),
});

const PAINS = [
  "Você não consegue enxergar claramente onde está perdendo dinheiro.",
  "Toma decisões no improviso.",
  "Tem muitas ideias e dificuldade para priorizar.",
  "Sente que tudo depende de você.",
  "Sabe que precisa crescer, mas não sabe exatamente qual deveria ser o próximo movimento.",
  "Tem a sensação de estar ocupado o tempo inteiro, mas nem sempre avançando na direção certa.",
];

const STEPS = [
  ["01", "Diagnóstico", "Entender profundamente o momento atual da empresa."],
  ["02", "Estratégia", "Definir onde concentrar energia, dinheiro e atenção."],
  ["03", "Execução", "Transformar decisões em ações práticas."],
  ["04", "Acompanhamento", "Monitorar indicadores, prioridades e evolução."],
  ["05", "Ajustes", "Corrigir a rota conforme o negócio evolui."],
];

const PILLARS = [
  ["Estratégia", "Posicionamento, crescimento, oportunidades e decisões de longo prazo."],
  ["Gestão", "Processos, prioridades, organização, equipe e rotina de gestão."],
  ["Financeiro", "Margem, resultado, indicadores, custos e oportunidades de melhoria."],
  ["Comercial", "Vendas, ticket médio, aquisição, retenção e novas oportunidades."],
];

const FOR_YOU = [
  "Já possui uma empresa funcionando.",
  "Já existe faturamento e uma operação real.",
  "Quer crescer com mais estrutura.",
  "Está cansado de tomar todas as decisões sozinho.",
  "Quer alguém para questionar, organizar e direcionar.",
  "Está disposto a executar.",
];

const NOT_FOR = [
  "Dinheiro rápido.",
  "Fórmula pronta.",
  "Alguém para fazer tudo no lugar do empresário.",
  "Uma consultoria cheia de PDFs.",
];

const SEGMENTS = [
  "Varejo",
  "Alimentação",
  "Fitness",
  "Saúde e Estética",
  "Serviços",
  "Tecnologia",
  "Startups",
  "Hospitalidade",
];

const FAQ = [
  [
    "Preciso estar faturando muito para contratar?",
    "O acompanhamento é voltado para empresas que já possuem uma operação real e querem estruturar seu próximo estágio. O momento ideal depende mais dos desafios do negócio do que de um número específico de faturamento.",
  ],
  [
    "Você faz o trabalho pela empresa?",
    "Não. Meu papel é ajudar o empresário a enxergar, decidir, priorizar e acompanhar. A execução continua sendo construída junto com a equipe da empresa.",
  ],
  [
    "Como funciona o acompanhamento?",
    "Os encontros acontecem quinzenalmente durante 12 meses, com foco nas prioridades estratégicas e nos desafios reais do negócio.",
  ],
  [
    "Existe uma fórmula pronta?",
    "Não. Cada empresa possui um contexto diferente. O método serve como estrutura, mas as decisões são construídas a partir da realidade de cada negócio.",
  ],
  [
    "Como sei se é para minha empresa?",
    "O primeiro passo é uma conversa. Entendo seu momento, seus desafios e seus objetivos para avaliar se existe aderência ao acompanhamento.",
  ],
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  useEffect(() => initScrollTracking(), []);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />

      {/* HERO */}
      <section className="px-5 pt-14 pb-16 md:px-8 md:pt-24 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Business Advisory · 12 meses</p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.03] sm:text-6xl lg:text-7xl">
              Seu negócio não precisa
              <br className="hidden sm:block" /> de mais uma opinião.
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-primary sm:text-3xl">
              Precisa de clareza para tomar decisões melhores.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Acompanhamento estratégico para empresários que querem crescer com mais
              controle, margem e direção.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsappCta location="hero" size="lg" />
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center border border-border px-8 py-4.5 text-base font-medium transition-colors hover:bg-secondary"
              >
                Entender como funciona
              </a>
            </div>
          </div>

          <Photo
            src={heroPhoto.url}
            alt="Jhonatan Matos, Business Advisor"
            priority
            ratio="4 / 5"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
        </div>
      </section>

      {/* MICROPROVA */}
      <div className="rule-top border-b border-hairline px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <p className="eyebrow">Atuação em negócios de diferentes segmentos</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["AYUS", "DelBeef", "CrossFit Serra", "The Gusto", "La Villette", "Indica AI"].map(
              (n) => (
                <li
                  key={n}
                  className="text-sm tracking-[0.16em] text-muted-foreground uppercase"
                >
                  {n}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* IDENTIFICAÇÃO */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl leading-tight sm:text-5xl">
              Você sente que sua empresa poderia estar em outro nível?
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Você trabalha muito, o negócio fatura, mas sente que existe alguma coisa
              travando o próximo passo?
            </p>
          </div>
          <ul className="grid gap-px bg-hairline">
            {PAINS.map((p) => (
              <li key={p} className="bg-background py-5 text-base leading-relaxed">
                <span className="mr-4 font-display text-primary">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-3xl sm:text-4xl">É aqui que eu entro.</p>
          <WhatsappCta location="identificacao" />
        </div>
      </Section>

      {/* MUDANÇA DE PERCEPÇÃO */}
      <Section className="rule-top">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-6xl">
            Mais informação não resolve um negócio.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Empresários normalmente não sofrem por falta de ideias. Sofrem por excesso
            delas, falta de prioridade e dificuldade para enxergar o negócio de fora.
          </p>
          <p className="mt-14 font-display text-2xl text-primary sm:text-3xl">
            Meu trabalho é transformar complexidade em clareza.
          </p>
        </div>
        <ol className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-3">
          {["Clareza", "Prioridade", "Ação", "Acompanhamento", "Resultado"].map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              <span className="text-sm tracking-[0.18em] uppercase">{s}</span>
              {i < 4 && <span className="text-primary">→</span>}
            </li>
          ))}
        </ol>
      </Section>

      {/* PRODUTO */}
      <Section className="rule-top">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">O acompanhamento</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Acompanhamento Estratégico
            </h2>
            <p className="mt-4 font-display text-2xl text-primary">
              12 meses de proximidade com um Business Advisor.
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Um acompanhamento próximo para analisar o negócio, definir prioridades,
              acompanhar indicadores e tomar decisões importantes com alguém que consiga
              enxergar a empresa de fora.
            </p>
          </div>
          <div className="flex flex-col justify-center border border-border bg-surface p-8 sm:p-12">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              Você não compra duas horas de reunião.
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-primary sm:text-3xl">
              Você compra 12 meses de acompanhamento, clareza e direção.
            </p>
            <WhatsappCta location="produto" className="mt-10 self-start" />
          </div>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section id="como-funciona" className="rule-top">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Uma estrutura de trabalho, não uma fórmula.
        </h2>
        <ol className="mt-14 grid gap-px bg-hairline lg:grid-cols-5">
          {STEPS.map(([n, title, desc]) => (
            <li key={n} className="bg-background p-6 lg:p-7">
              <span className="font-display text-3xl text-primary">{n}</span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* O QUE TRABALHAMOS */}
      <Section className="rule-top">
        <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
          Entramos onde o negócio precisa de clareza.
        </h2>
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2">
          {PILLARS.map(([title, desc]) => (
            <div key={title} className="bg-background p-8 sm:p-10">
              <h3 className="text-sm tracking-[0.2em] text-primary uppercase">{title}</h3>
              <p className="mt-4 text-lg leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted-foreground">
          Não existe uma fórmula pronta. O acompanhamento é construído de acordo com o
          momento e os desafios de cada empresa.
        </p>
      </Section>

      {/* DIFERENCIAL */}
      <Section className="rule-top">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Photo
            src={diffPhoto.url}
            alt="Jhonatan Matos em contexto profissional"
            ratio="4 / 5"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
          <div>
            <p className="eyebrow">Não sou mais uma pessoa para você administrar.</p>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
              Quero ser a pessoa que ajuda você a administrar melhor o negócio.
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Meu trabalho não é entregar um PDF e desaparecer.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              É entender o contexto, analisar os números, questionar decisões, encontrar
              oportunidades e ajudar o empresário a transformar estratégia em ação.
            </p>
            <WhatsappCta location="diferencial" className="mt-10">
              Quero entender se faz sentido para minha empresa
            </WhatsappCta>
          </div>
        </div>
      </Section>

      {/* EMPRESAS */}
      <Section className="rule-top">
        <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
          Empresas reais. Problemas reais. Decisões reais.
        </h2>
        <div className="mt-12">
          <LogoGrid />
        </div>
        {/* Espaço reservado para cases individuais (Empresa · Segmento · Desafio · Atuação · Resultado) */}
      </Section>

      {/* PARA QUEM É / NÃO É */}
      <Section className="rule-top">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Esse acompanhamento é para você se...
            </h2>
            <ul className="mt-8 space-y-4">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex gap-4 leading-relaxed">
                  <span className="text-primary">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-hairline pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            <h2 className="text-3xl leading-tight sm:text-4xl">Não é para todo mundo.</h2>
            <p className="mt-6 text-muted-foreground">
              Esse acompanhamento não é para quem procura uma fórmula mágica.
            </p>
            <ul className="mt-8 space-y-4">
              {NOT_FOR.map((t) => (
                <li key={t} className="flex gap-4 leading-relaxed text-muted-foreground">
                  <span>✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed">
              É para quem está disposto a olhar para o próprio negócio com honestidade e
              fazer o que precisa ser feito.
            </p>
          </div>
        </div>
      </Section>

      {/* SOBRE */}
      <Section className="rule-top">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">Sobre Jhonatan Matos</p>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
              Meu trabalho acontece dentro do negócio.
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Minha atuação foi construída dentro de empresas reais, em diferentes
              segmentos, acompanhando desafios de gestão, estratégia, vendas, financeiro e
              crescimento.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hoje, atuo como Business Advisor ajudando empresários a transformar problemas
              complexos em decisões claras e ações práticas.
            </p>

            <div className="mt-10">
              <p className="eyebrow">Segmentos</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {SEGMENTS.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Experiência em diferentes modelos de negócio me permite enxergar padrões,
                oportunidades e gargalos que muitas vezes passam despercebidos dentro da
                própria empresa.
              </p>
            </div>
          </div>
          <Photo
            src={aboutPhoto.url}
            alt="Retrato de Jhonatan Matos"
            ratio="4 / 5"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="rule-top">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <h2 className="text-3xl leading-tight sm:text-4xl">Antes da conversa</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`} className="border-hairline">
                <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="rule-top">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-6xl">
            Seu próximo nível começa com uma decisão.
          </h2>
          <p className="mt-8 font-display text-2xl text-primary sm:text-3xl">
            Vamos conversar sobre o seu negócio?
          </p>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            O primeiro passo é uma conversa para entender seu momento, seus desafios e
            descobrir se existe aderência ao acompanhamento.
          </p>
          <WhatsappCta location="cta_final" size="lg" className="mt-10 w-full sm:w-auto" />
        </div>
      </Section>

      <footer className="rule-top px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base text-foreground">Jhonatan Matos</p>
          <p>Business Advisor · Acompanhamento estratégico</p>
        </div>
      </footer>

      <FloatingCta />
    </div>
  );
}
