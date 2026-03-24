// components/Brands.tsx
import Image from "next/image";

const brands = [
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
  },
  {
    name: "Motorola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Motorola_%282017%29.svg",
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Xiaomi_logo_horizontal_%282021-%29.svg",
  },
  {
    name: "Asus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
  },
  {
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

export function Brands() {
  return (
    <section
      id="brands"
      className="bg-slate-950 px-4 py-16 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Marcas autorizadas
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl text-white">
            Marcas que atendemos
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Assistência técnica autorizada e especializada nas principais marcas
            do mercado.
          </p>
        </div>

        {/* Grid de logos */}
        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-red-600/40 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="relative h-8 w-full">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  className={`object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${b.name === "Apple" || b.name === "Asus" || b.name === "Motorola" ? "invert" : ""} ${b.name === "Samsung" ? "invert brightness-0" : ""}`}
                />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                {b.name}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-slate-600 text-center">
          Atendemos também outras marcas Android e iPhones — consulte
          disponibilidade.
        </p>
      </div>
    </section>
  );
}
