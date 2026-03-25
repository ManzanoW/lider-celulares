// components/About.tsx
export function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl md:flex md:items-start md:gap-10 ">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Sobre a Líder Celulares
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            A Líder Celulares é uma loja de celulares e eletrônicos
            especializada em assistência técnica autorizada de celulares,
            tablets e iPads. Atendemos a região com consertos rápidos, preço
            justo e atendimento de confiança.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Nosso time é formado por técnicos experientes, preparados para
            cuidar do seu aparelho com o máximo de cuidado, sempre utilizando
            peças de qualidade e oferecendo garantia em todos os serviços.
          </p>
        </div>
      </div>
    </section>
  );
}
