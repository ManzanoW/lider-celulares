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
      className="select-none relative overflow-hidden bg-linear-to-b from-red-700 via-red-800 to-slate-950 md:pt-32 md:pb-26"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6 ">
          <Image
            src="/lidercelulares-nobg.png"
            alt="Líder Celulares"
            width={300}
            height={300}
            className="mx-auto w-70 md:w-80 md:animate-pulse md:hover:animate-none md:hover:duration-500 md:hover:ease-in-out md:hover:scale-105 select-none"
          />
          <p className="text-lg text-center font-semibold text-red-100 md:text-xl">
            Assistência técnica autorizada de celulares e tablets em Santos/SP.
          </p>
          <p className="max-w-xl text-sm text-center md:text-base text-red-100/80">
            Consertamos celulares Samsung, Motorola, Xiaomi, Asus, LG e outras
            marcas, além de tablets e iPads. Troca de telas, conectores,
            sistema, microfone, alto-falantes e muito mais, com rapidez e
            segurança.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition cursor-pointer"
            >
              Pedir orçamento agora
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="rounded-full border border-red-200/60 px-6 py-2 text-sm font-semibold text-red-100 hover:bg-red-900/40 transition cursor-pointer"
            >
              Ver serviços
            </button>
          </div>
          <p className="text-xs text-red-100/70 text-center">
            Consertos no mesmo dia em diversos casos. Consulte modelos e prazos.
          </p>
          <span
            className={`flex flex-row items-center justify-center gap-1.5  rounded-full px-3 py-1 text-xs font-semibold md:text-sm  ${
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

        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-red-600/20 blur-3xl scale-90" />

          {/* Container da imagem */}
          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl">
            <Image
              src="/lider-fachada.jpg"
              alt="Fachada Líder Celulares"
              width={500}
              height={400}
              className="w-full h-80 md:h-auto object-cover md:hover:ease-in-out md:hover:scale-105 md:hover:duration-500 select-none"
              priority
            />

            {/* Badge de avaliações — canto inferior ESQUERDO */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 border border-white/10">
              <svg
                className="w-3.5 h-3.5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold text-white">4.9</span>
              <span className="text-xs text-slate-300">· 414 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
