// components/WhyUs.tsx
import {
  ShieldCheck,
  Zap,
  BadgeDollarSign,
  Wrench,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantia em todos os serviços",
    description:
      "Todos os reparos saem com garantia. Se o problema voltar, a gente resolve sem custo adicional.",
    color: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Conserto rápido",
    description:
      "Diversas trocas são feitas no mesmo dia. Consulte o prazo para o seu modelo.",
    color: "text-amber-400",
    border: "hover:border-amber-500/40",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço justo e transparente",
    description:
      "Orçamento gratuito, sem surpresas. Você aprova o valor antes de qualquer reparo.",
    color: "text-sky-400",
    border: "hover:border-sky-500/40",
    glow: "group-hover:shadow-sky-500/10",
  },
  {
    icon: Wrench,
    title: "Técnicos especializados",
    description:
      "Equipe com anos de experiência em celulares, tablets e iPads das principais marcas.",
    color: "text-red-400",
    border: "hover:border-red-500/40",
    glow: "group-hover:shadow-red-500/10",
  },
  {
    icon: PackageCheck,
    title: "Peças de qualidade",
    description:
      "Utilizamos apenas peças de procedência confiável para garantir durabilidade no reparo.",
    color: "text-violet-400",
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description:
      "Explicamos tudo com clareza para você entender exatamente o que aconteceu com o aparelho.",
    color: "text-pink-400",
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-pink-500/10",
  },
];

export function WhyUs() {
  return (
    <section
      id="whyus"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Nossos diferenciais
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl text-white">
            Por que escolher a Líder Celulares?
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Mais do que consertar celulares — entregamos confiança, rapidez e
            qualidade em cada atendimento.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-3 transition-all duration-300 ${r.border} hover:bg-slate-900 hover:shadow-xl ${r.glow}`}
              >
                {/* Glow de fundo sutil */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />

                {/* Ícone */}
                <div
                  className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center ${r.color}`}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Texto */}
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA abaixo dos cards */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
          <p className="text-sm text-slate-300">
            Seu celular está com problema? Fale agora com a gente!
          </p>
          <a
            href="https://wa.me/5513974208788?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20conserto%20de%20celular."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition"
          >
            Pedir orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
