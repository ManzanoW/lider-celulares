// components/Footer.tsx
const whatsappLink =
  "https://wa.me/5513974208788?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20conserto%20de%20celular.";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-4 py-10">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Coluna 1 — Logo e descrição */}
        <div className="flex flex-col gap-3 max-w-xs">
          <span className="text-xl font-bold text-white">
            Líder <span className="text-red-500">Celulares</span>
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            Assistência técnica autorizada de celulares, tablets e iPads.
            Samsung, Motorola, Xiaomi, Asus, LG e outras marcas.
          </p>
        </div>

        {/* Coluna 2 — Links rápidos */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Navegação
          </p>
          {[
            { label: "Início", href: "#home" },
            { label: "Serviços", href: "#services" },
            { label: "Marcas", href: "#brands" },
            { label: "Sobre", href: "#about" },
            { label: "Contato", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Coluna 3 — Contato */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Contato
          </p>
          <p className="text-sm text-slate-400">
            WhatsApp:{" "}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:underline font-medium"
            >
              (13) 97420-8788
            </a>
          </p>
          <p className="text-sm text-slate-400">
            Endereço: Pça. ALM. Gago Coutinho, 30 - Ponta da Praia, Santos - SP,
            11030-200
          </p>
          <p className="text-sm text-slate-400">Seg a Sexta: 9h às 19h</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-300 transition shadow-md shadow-amber-500/30"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Líder Celulares. Todos os direitos
          reservados.
        </p>
        <p className="text-xs text-slate-600">
          Desenvolvido com ❤️ por{" "}
          <a
            href="https://my-portfolio-beta-flax-uo1wwytg9x.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 font-medium hover:underline"
          >
            João Vytor
          </a>
        </p>
      </div>
    </footer>
  );
}
