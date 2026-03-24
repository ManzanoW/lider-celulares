// components/Services.tsx
export function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Serviços de assistência técnica
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Manutenção completa em celulares, tablets e iPads, com peças de
          qualidade e garantia em todos os serviços.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Troca de tela e display",
            "Troca de conectores de carga",
            "Troca de bateria",
            "Reparo de sistema (software)",
            "Microfone e alto-falantes",
            "Câmeras frontal e traseira",
            "Botões, carcaça e acabamento",
            "Limpeza interna e oxidação",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
