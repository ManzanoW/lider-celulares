// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Marcas", href: "#brands" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;

    const navbarHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  ease-in-out  ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2"
        >
          <Image
            src="/lidercelulares-nobg.png"
            alt="Líder Celulares"
            width={100}
            height={40}
            className={`h-10 sm:h-12 w-auto object-contain opacity-0 ${scrolled ? "opacity-100" : ""} transition-opacity duration-300 ease-in-out`}
          />
        </button>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition shadow-md shadow-amber-500/30"
          >
            Pedir orçamento
          </button>
        </nav>

        {/* Botão hamburguer mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
          >
            Pedir orçamento
          </button>
        </div>
      )}
    </header>
  );
}
