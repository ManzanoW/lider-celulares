// components/Services.tsx
import {
  Smartphone,
  Plug,
  Battery,
  Settings,
  Mic,
  Camera,
  Layers,
  Droplets,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Troca de tela e display",
    description:
      "Tela trincada ou display apagado? Fazemos a troca com peças de qualidade e garantia.",
    msg: "Olá! Gostaria de um orçamento para troca de tela e display.",
  },
  {
    icon: Plug,
    title: "Troca de conector de carga",
    description: "Celular não carrega ou carrega lento? Resolvemos rápido!",
    msg: "Olá! Gostaria de um orçamento para troca de conector de carga.",
  },
  {
    icon: Battery,
    title: "Troca de bateria",
    description:
      "Bateria viciada ou que descarrega rápido? Troca feita no mesmo dia.",
    msg: "Olá! Gostaria de um orçamento para troca de bateria.",
  },
  {
    icon: Settings,
    title: "Reparo de sistema (software)",
    description:
      "Celular travando, reiniciando ou com vírus? Fazemos atualização e reparo completo.",
    msg: "Olá! Gostaria de um orçamento para reparo de sistema (software).",
  },
  {
    icon: Mic,
    title: "Microfone e alto-falantes",
    description:
      "Ninguém te ouve ou o som está baixo? Trocamos microfone e alto-falantes.",
    msg: "Olá! Gostaria de um orçamento para reparo de microfone ou alto-falante.",
  },
  {
    icon: Camera,
    title: "Câmeras frontal e traseira",
    description:
      "Câmera embaçada, preta ou sem foco? Fazemos a troca com precisão.",
    msg: "Olá! Gostaria de um orçamento para troca de câmera.",
  },
  {
    icon: Layers,
    title: "Botões, carcaça e acabamento",
    description:
      "Botão de volume, power ou carcaça danificada? Deixamos como novo.",
    msg: "Olá! Gostaria de um orçamento para troca de botões ou carcaça.",
  },
  {
    icon: Droplets,
    title: "Limpeza interna e oxidação",
    description:
      "Celular caiu na água ou com problemas de oxidação? Fazemos limpeza completa.",
    msg: "Olá! Gostaria de um orçamento para limpeza interna e oxidação.",
  },
];

const WHATSAPP = "5513974208788";

export function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            O que consertamos
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl text-white">
            Serviços de assistência técnica
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Manutenção completa em celulares, tablets e iPads, com peças de
            qualidade e garantia. Toque em um serviço para pedir orçamento!
          </p>
        </div>

        {/* Grid de cards */}
        <div className="mt-8 grid gap-4 grid-cols-2 items-stretch">
          {services.map((s) => {
            const Icon = s.icon;
            const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(s.msg)}`;

            return (
              <a
                key={s.title}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-6 md:gap-4 md:rounded-3xl hover:border-red-600/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer"
              >
                {/* Linha glow no topo ao hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Topo: ícone + seta */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-red-400 group-hover:bg-red-600/20 transition-all duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Rodapé */}
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-xs font-medium text-amber-400 group-hover:underline">
                    Pedir orçamento →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
