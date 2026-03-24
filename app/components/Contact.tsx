// components/Contact.tsx
export function Contact() {
  const whatsappLink =
    "https://wa.me/5513974208788?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20conserto%20de%20celular.";

  return (
    <section
      id="contact"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Fale com a Líder Celulares
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-300">
          Envie uma mensagem no WhatsApp ou preencha o formulário com o modelo
          do aparelho e o problema. Respondemos o mais rápido possível.
        </p>

        <div className="mt-6 flex flex-col gap-6 md:flex-row">
          <div className="flex-1 space-y-3 text-sm text-slate-200">
            <p>
              WhatsApp:{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-amber-400 hover:underline"
              >
                (13) 97420-8788
              </a>
            </p>
            <p>
              Endereço: Em frente ao Santos Convention - Pça. ALM. Gago
              Coutinho, 30 - Ponta da Praia, Santos - SP, 11030-200
            </p>
            <p>Horário: Segunda a Sexta, das 9h às 19h.</p>
            <p>
              Clique no botão abaixo para iniciar uma conversa e enviar fotos do
              seu aparelho.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <form className="flex-1 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm">
            <div>
              <label className="block text-xs text-slate-300">Nome</label>
              <input
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none"
                type="text"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300">
                Telefone / WhatsApp
              </label>
              <input
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none"
                type="tel"
                placeholder="(13) 97420-8788"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300">
                Modelo do aparelho
              </label>
              <input
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none"
                type="text"
                placeholder="Ex: Samsung A32, iPhone 11..."
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300">
                Descreva o problema
              </label>
              <textarea
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none"
                rows={4}
                placeholder="Ex: caiu no chão, não liga, não carrega..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
        {/* Google Maps */}
        <div className="mt-10">
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
              Localização
            </span>
            <h3 className="text-lg font-semibold text-white">
              Como chegar até nós
            </h3>
            <p className="text-sm text-slate-400">
              Estamos em frente ao Santos Convention — fácil de encontrar!
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl shadow-black/40">
            <iframe
              title="Localização Líder Celulares"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.2844615603362!2d-46.297956423768966!3d-23.985730077321787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce037dfa671337%3A0xccac461ed6138897!2sLIDER%20CONSERTO%20DE%20CELULAR%20E%20SMARTPHONES!5e0!3m2!1spt-BR!2sbr!4v1774328168496!5m2!1spt-BR!2sbr"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
          </div>

          {/* Botão abrir no Maps */}
          <div className="mt-4 flex justify-end">
            <a
              href="https://maps.google.com/?q=Pça.+ALM.+Gago+Coutinho,+30,+Ponta+da+Praia,+Santos+-+SP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 hover:border-red-600/50 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
