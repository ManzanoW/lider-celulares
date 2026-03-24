// components/Hero.tsx
"use client";

import Image from "next/image";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const navbarHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({ top, behavior: "smooth" });
};

const isOpen = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo, 6 = sábado
  const hour = now.getHours();
  return day >= 1 && day <= 5 && hour >= 9 && hour < 19;
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-red-700 via-red-800 to-slate-950 pt-20 pb-12 md:pt-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          <Image
            src="/lidercelulares-nobg.png"
            alt="Líder Celulares"
            width={300}
            height={300}
          />
          <p className="text-lg font-semibold text-red-100 md:text-xl">
            Assistência técnica autorizada de celulares e tablets em São Paulo.
          </p>
          <p className="max-w-xl text-sm md:text-base text-red-100/80">
            Consertamos celulares Samsung, Motorola, Xiaomi, Asus, LG e outras
            marcas, além de tablets e iPads. Troca de telas, conectores,
            sistema, microfone, alto-falantes e muito mais, com rapidez e
            segurança.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition"
            >
              Pedir orçamento agora
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="rounded-full border border-red-200/60 px-6 py-2 text-sm font-semibold text-red-100 hover:bg-red-900/40 transition"
            >
              Ver serviços
            </button>
          </div>
          <p className="text-xs text-red-100/70">
            Consertos no mesmo dia em diversos casos. Consulte modelos e prazos.
          </p>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              isOpen()
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${isOpen() ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`}
            />
            {isOpen() ? "Aberto agora" : "Fechado no momento"}
          </span>
        </div>

        <div className="flex-1">
          {/* Aqui depois você pode colocar uma foto da loja ou um mockup */}
          <div className="mx-auto max-w-sm rounded-3xl border border-red-300/20 bg-linear-to-br from-slate-950 to-slate-900 p-2 shadow-xl shadow-red-900/60">
            <Image
              src="/lider-fachada.webp"
              alt="Líder Celulares"
              width={400}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
