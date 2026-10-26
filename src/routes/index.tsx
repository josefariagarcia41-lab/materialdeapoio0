import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Brain, MessageCircle, Hash, Eye, Type, Lightbulb, GraduationCap,
  CheckCircle2, ShieldCheck, Smartphone, ArrowRight, Copy,
} from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA_MSG =
  "Olá! Quero adquirir o material de preparação psicotécnica do MININT. Já efetuei o pagamento de 1.000 Kz. Vou enviar o comprovativo para confirmação e posterior receção do material.";
const WA_PAY = `https://wa.me/244974249435?text=${encodeURIComponent(WA_MSG)}`;
const WA_SUPPORT = "https://wa.me/244974249435";
const EXPRESS = "972029484";
const IBAN = "004000005037942810104";
const TITULAR = "José Garcia Faria";
const BANCO = "";

const TITLE = "Preparação Psicotécnica MININT — Rumo à Aprovação";
const DESC = "Material de preparação para testes psicotécnicos: raciocínio lógico, sequências, atenção e mais. Apenas 1.000 Kz, entrega pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

const contents = [
  { icon: BookOpen, t: "Introdução aos testes psicotécnicos", d: "Entende como funcionam e o que é avaliado." },
  { icon: Brain, t: "Exercícios de raciocínio lógico", d: "Pratica padrões, deduções e lógica." },
  { icon: Hash, t: "Sequências numéricas", d: "Treina a identificação de padrões em números." },
  { icon: Eye, t: "Atenção e concentração", d: "Exercícios para ganhar foco e rapidez." },
  { icon: Type, t: "Raciocínio verbal", d: "Questões de interpretação e relação de palavras." },
  { icon: Lightbulb, t: "Resoluções e dicas", d: "Explicações e dicas de preparação incluídas no material." },
];

const steps = [
  "Envia o valor de 1.000 Kz através do serviço Express ou por transferência bancária para o IBAN indicado.",
  "Confirma que a operação foi concluída com sucesso.",
  "Guarda o comprovativo do pagamento.",
  "Clica no botão abaixo para contactar o apoio pelo WhatsApp.",
  "Envia o comprovativo e solicita a entrega do material.",
];

const faqs = [
  ["Quanto custa o material?", "O material custa 1.000 Kz."],
  ["Como posso pagar?", "Podes pagar através do serviço Express, utilizando o número indicado na página, ou por transferência bancária para o IBAN indicado."],
  ["Como recebo o material?", "Após a confirmação do pagamento, o material será enviado pelo WhatsApp."],
  ["A compra garante aprovação no concurso?", "Não. O material destina-se à preparação e ao treino. A aprovação depende do desempenho do candidato e dos critérios oficiais do concurso."],
  ["O material é oficial do Ministério do Interior?", "Não. Trata-se de um material educativo independente de preparação."],
];

function Index() {
  const [copied, setCopied] = useState("");
  const copy = (value: string, key: string) => {
    navigator.clipboard?.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2 text-primary-foreground">
            <GraduationCap className="h-6 w-6 text-gold" />
            <span className="font-display text-sm font-bold tracking-wide sm:text-base">Preparação Psicotécnica MININT</span>
          </div>
          <a href="#preco" className="btn-gold hidden px-4 py-2 text-xs sm:inline-flex">1.000 Kz</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg relative overflow-hidden text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-14 text-center sm:pt-20">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Rumo à Aprovação
          </span>
          <h1 className="animate-rise mt-6 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            PREPARA-TE MELHOR PARA O TEU <span className="text-gold">TESTE PSICOTÉCNICO!</span>
          </h1>
          <p className="animate-rise mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            Treina o teu raciocínio, pratica com exercícios e prepara-te com mais confiança para a tua avaliação.
          </p>
          <ul className="animate-rise mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              [BookOpen, "Material organizado em formato de aula"],
              [Brain, "Exercícios para praticar o raciocínio"],
              [MessageCircle, "Apoio através do WhatsApp"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof BookOpen;
              return (
                <li key={t as string} className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-sm">
                  <I className="h-5 w-5 shrink-0 text-gold" />
                  {t as string}
                </li>
              );
            })}
          </ul>
          <a href="#preco" className="btn-gold animate-rise mt-10 w-full px-6 py-4 text-base sm:w-auto sm:text-lg">
            QUERO O MEU MATERIAL — 1.000 KZ <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Contents */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="section-title">O QUE VAIS RECEBER?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gold">
                  <I className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Material de treino. Não contém perguntas oficiais nem questões garantidas de exames futuros.
          </p>
        </div>
      </section>

      {/* Price */}
      <section id="preco" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-5">
          <div className="price-card rounded-3xl p-8 text-center text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Acesso ao material completo</p>
            <p className="mt-4 font-display text-6xl font-extrabold text-gold">1.000 <span className="text-3xl">Kz</span></p>
            <p className="mt-3 text-primary-foreground/80">Um investimento acessível para reforçares a tua preparação.</p>
            <ul className="mt-6 space-y-2 text-left text-sm">
              {["Conteúdo em formato de aula", "Exercícios práticos", "Entrega pelo WhatsApp", "Apoio direto"].map((x) => (
                <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />{x}</li>
              ))}
            </ul>
            <a href="#pagar" className="btn-gold mt-8 w-full px-6 py-4">PAGAR E RECEBER MATERIAL</a>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section id="pagar" className="scroll-mt-16 bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="section-title">COMO PAGAR?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-gold bg-card p-6 text-center shadow-card">
              <p className="text-sm text-muted-foreground">Pagamento via Express</p>
              <p className="mt-1 font-display text-3xl font-extrabold tracking-wider text-primary sm:text-4xl">{EXPRESS}</p>
              <button onClick={() => copy(EXPRESS, "express")} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                <Copy className="h-4 w-4" /> {copied === "express" ? "Copiado!" : "Copiar número"}
              </button>
            </div>
            <div className="rounded-2xl border-2 border-gold bg-card p-6 text-center shadow-card">
              <p className="text-sm text-muted-foreground">Ou transferência bancária — IBAN</p>
              <p className="mt-1 font-display text-lg font-extrabold tracking-wide text-primary break-all sm:text-xl">{IBAN}</p>
              <button onClick={() => copy(IBAN, "iban")} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                <Copy className="h-4 w-4" /> {copied === "iban" ? "Copiado!" : "Copiar IBAN"}
              </button>
              <div className="mt-4 border-t pt-3 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Titular da conta</p>
                <p className="font-display text-sm font-bold text-primary">{TITULAR}</p>
                {BANCO ? (
                  <>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Banco</p>
                    <p className="font-display text-sm font-bold text-primary">{BANCO}</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Caso o Express tenha atingido o limite, paga por IBAN.
          </p>
          <ol className="mt-8 space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-4 rounded-xl bg-card p-4 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-gold">{i + 1}</span>
                <span className="pt-1 text-sm sm:text-base">{s}</span>
              </li>
            ))}
          </ol>
          <a href={WA_PAY} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full px-6 py-4 text-base">
            <MessageCircle className="h-5 w-5" /> JÁ PAGUEI — ENVIAR COMPROVATIVO
          </a>
          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            O pagamento não é confirmado automaticamente. A confirmação é feita pelo vendedor após verificação do comprovativo.
          </p>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-gold">
            <Smartphone className="h-8 w-8" />
          </div>
          <h2 className="section-title mt-6">RECEBE O TEU MATERIAL PELO WHATSAPP</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Depois da confirmação do pagamento, receberás o material completo diretamente pelo WhatsApp.
          </p>
          <a href={WA_SUPPORT} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 px-8 py-4">
            <MessageCircle className="h-5 w-5" /> CONTACTAR O APOIO
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Apoio: 974249435</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="section-title">PERGUNTAS FREQUENTES</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-2xl bg-card px-5 shadow-card">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`f${i}`}>
                <AccordionTrigger className="text-left font-semibold">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 text-primary-foreground/80">
        <div className="mx-auto max-w-6xl space-y-2 px-5 text-center text-sm">
          <p className="font-display text-base font-bold text-primary-foreground">Preparação Psicotécnica MININT</p>
          <p>Contacto de apoio: 974249435 · Preço do material: <span className="text-gold">1.000 Kz</span></p>
          <p className="mx-auto max-w-2xl pt-2 text-xs text-primary-foreground/60">
            Serviço educativo independente. Não representa nem está associado ao Ministério do Interior de Angola.
          </p>
        </div>
      </footer>
    </div>
  );
}
