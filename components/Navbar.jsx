// components/Navbar.jsx
"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#categorias", label: "Categorías" },
  { href: "#destacados", label: "Destacados" },
  { href: "#como-funciona", label: "Cómo funciona" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-soft/70 bg-bg-body/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/40">
            <span className="text-xl font-semibold text-accent">TS</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Tienda Smart
            </span>
            <span className="text-[11px] text-text-muted">
              Compras inteligentes 💡
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-text-muted transition hover:text-text-main"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-full border border-accent/30 px-3 py-1.5 text-xs font-medium text-accent transition hover:bg-accent/10 md:inline-flex">
            Iniciar sesión
          </button>
          <button className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-black shadow-soft-xl transition hover:bg-yellow-400 active:scale-[0.98]">
            Crear cuenta
          </button>
        </div>
      </div>
    </header>
  );
}
