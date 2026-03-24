// components/Reviews.tsx
const reviews = [
  {
    name: "Carlos Eduardo",
    rating: 5,
    text: "Técnicos Maravilhosos e Atendimento Exemplar. Melhor Preço que encontrei em Santos.",
    date: "2 meses atrás",
  },
  {
    name: "Leandro Figueira",
    rating: 5,
    text: "O tablet do meu filho parou de funcionar. Enquanto outras lojas responderam não consertamos, o pessoal da LIDER, avaliou e conseguiu consertar. Comprei uma tela nova e o problema foi corrigido. Atendimento incrível e solução com preço justo! Recomendo muito!!!",
    date: "3 meses atrás",
  },
  {
    name: "Marcos Burad",
    rating: 5,
    text: "Minha experiência foi muito boa, tanto quanto ao atendimento no comércio quanto na prestação de serviços por isto dou a ótima nota de 5 estrelas pelo atendimento e lembrando que ainda é um ponto de envio para o MercadoLivre o que facilita muito a todos do entorno,.os preços ali praticados são compatíveis com o perímetro. Agradeço a todos pela atenção e peço para você me seguir aqui no Google Maps, caso você tenha gostado de minhas avaliações. um abraço a todos e  muito obrigado.🎩",
    date: "2 anos atrás",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Avaliações
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl text-white">
            O que nossos clientes dizem
          </h2>

          {/* Badge de nota geral */}
          <div className="mt-2 inline-flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-3 w-fit">
            <span className="text-4xl font-bold text-amber-400">4.9</span>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-slate-400">
                414 avaliações no Google
              </span>
            </div>
          </div>
        </div>

        {/* Cards de avaliações */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{r.text}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {r.name}
                </span>
                <span className="text-xs text-slate-500">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link para ver todas no Google */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.google.com/?q=Lider+Celulares+Santos"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-xs font-medium text-slate-300 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
