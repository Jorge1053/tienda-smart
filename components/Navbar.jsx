// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  Search,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { CATEGORY_DETAILS } from "./CategoryGrid";

// Items del menú lateral del overlay
const sideMenuItems = [
  { id: "black-days", label: "Black Days" },
  { id: "moda-mujer", label: "Moda mujer" },
  { id: "moda-hombre", label: "Moda hombre" },
  { id: "moda-ninos", label: "Moda niños y bebés" },
  { id: "tecnologia", label: "Tecnología", categoryKey: "tecnologia" },
  { id: "celulares", label: "Celulares y accesorios" },
  { id: "suscripciones", label: "Suscripciones" },
  { id: "electrohogar", label: "Electrohogar", categoryKey: "electrohogar" },
  { id: "tenis-zapatos", label: "Tenis y zapatos" },
  { id: "belleza-salud", label: "Belleza y salud", categoryKey: "belleza" },
  { id: "accesorios-moda", label: "Accesorios de moda" },
  { id: "ninos-juguetes", label: "Niños y juguetes" },
  {
    id: "muebles-org",
    label: "Muebles y organización",
    categoryKey: "hogar",
  },
  { id: "dormitorio", label: "Dormitorio", categoryKey: "hogar" },
  { id: "bebe", label: "Bebé" },
  {
    id: "construccion",
    label: "Construcción ligera",
    categoryKey: "construccion",
  },
  { id: "deportes", label: "Deportes", categoryKey: "deportes" },
];

// Panel por defecto para items sin CATEGORY_DETAILS
function buildFallbackMega(item) {
  return {
    title: item.label,
    icon: "📦",
    columns: [
      {
        heading: "Explorar",
        links: ["Ver todo"],
      },
    ],
  };
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const megaConfig =
    hoveredItem &&
    (hoveredItem.categoryKey && CATEGORY_DETAILS[hoveredItem.categoryKey]
      ? CATEGORY_DETAILS[hoveredItem.categoryKey]
      : buildFallbackMega(hoveredItem));

  return (
    <>
      {/* Barra superior: ya NO es sticky ni fixed, mantiene su espacio normal */}
      <header className="z-30 w-full border-b border-border-soft/70 bg-bg-card/95 backdrop-blur-xl">
        <div className="container flex h-20 items-center gap-4">
          {/* Logo + botón de menú */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-tienda-smart-mark.svg"
                alt="Tienda Smart"
                className="h-18 w-18"
              />
              <div className="hidden mr-8 flex-col leading-tight sm:flex">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                  Tienda
                </span>
                <span className="text-[20px] font-extrabold leading-tight logo-smart-text">
                  Smart
                </span>
              </div>
            </Link>

            {/* Botón Menú (abre mega-menú lateral) */}
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="inline-flex items-center mr-4 gap-2 rounded-full border border-border-soft bg-bg-card px-5 py-1.5 text-sm font-medium text-text-main shadow-sm transition hover:border-accent/70 hover:text-text-main"
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Menú</span>
            </button>
          </div>

          {/* Buscador grande (desktop) */}
          <div className="hidden flex-1 md:flex">
            <form className="relative flex w-full items-center">
              <input
                type="search"
                placeholder="Buscar productos, categorías o marcas"
                className="w-full rounded-full border border-border-soft bg-bg-body px-4 py-2.5 pr-11 text-sm text-text-main outline-none placeholder:text-text-muted focus:border-accent/70"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-white shadow-soft-xl transition hover:brightness-110"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Zona derecha: sesión, compras, favoritos, carrito */}
          <div className="ml-auto flex items-center gap-3">
            {/* Texto de sesión / mis compras (solo desktop) */}
            <div className="hidden items-center gap-6 text-[13px] md:flex">
              <button
                type="button"
                className="text-left font-medium text-text-main hover:underline"
              >
                Hola,{" "}
                <span className="font-semibold text-text-main">
                  Inicia sesión
                </span>
              </button>
              <button
                type="button"
                className="font-medium text-text-main hover:underline"
              >
                Mis compras
              </button>
            </div>

            {/* Separador vertical */}
            <span className="hidden h-6 w-px bg-border-soft md:block" />

            {/* Favoritos */}
            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-transparent text-text-muted transition hover:border-border-soft hover:text-text-main md:inline-flex"
            >
              <Heart className="h-4 w-4" />
            </button>

            {/* Carrito */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-text-muted transition hover:border-border-soft hover:text-text-main"
            >
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-2 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-accent px-[3px] text-[10px] font-semibold text-white">
                  0
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Buscador compacto en mobile */}
        <div className="border-t border-border-soft/60 bg-bg-body px-4 py-2 md:hidden">
          <form className="relative flex items-center">
            <input
              type="search"
              placeholder="Buscar en Tienda Smart"
              className="w-full rounded-full border border-border-soft bg-bg-card px-4 py-2 pr-10 text-xs text-text-main outline-none placeholder:text-text-muted focus:border-accent/70"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-white shadow-soft-xl transition hover:brightness-110"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
      </header>

      {/* Overlay + menú lateral con mega–menú */}
      {openMenu && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpenMenu(false)}
          />

          <aside
            className="fixed inset-y-0 left-0 z-50 flex max-w-[min(980px,100vw)] bg-bg-card shadow-2xl"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Columna izquierda: categorías */}
            <div className="flex w-72 flex-col border-r border-border-soft">
              {/* Header menú */}
              <div className="flex h-14 items-center justify-between border-b border-border-soft px-4">
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-text-main">
                    ¡Hola!
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Explora nuestras categorías
                  </span>
                </div>
                <button
                  onClick={() => setOpenMenu(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg-body text-text-muted hover:text-text-main"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Lista de categorías */}
              <nav className="flex-1 overflow-y-auto py-2">
                <ul className="space-y-1">
                  {sideMenuItems.map((item) => {
                    const isActive = hoveredItem?.id === item.id;

                    return (
                      <li key={item.id}>
                        <button
                          className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left transition ${
                            isActive
                              ? "bg-white text-text-main"
                              : "text-text-main hover:bg-bg-body"
                          }`}
                          onMouseEnter={() => setHoveredItem(item)}
                        >
                          <span className="flex items-center gap-2">
                            {isActive && (
                              <span className="h-3 w-1 rounded-full bg-accent" />
                            )}
                            <span>{item.label}</span>
                          </span>
                          <ChevronRight className="h-4 w-4 text-border-soft" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Panel derecho: mega–menú */}
            {megaConfig && (
              <div className="hidden h-full flex-1 bg-white md:flex md:flex-col">
                {/* Header azul tipo Falabella */}
                <div className="flex items-center justify_between bg-accent px-5 py-3 text-sm text-black shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-lg">
                      {megaConfig.icon}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-medium uppercase tracking-wide">
                        Categoría
                      </span>
                      <span className="text-base font-semibold">
                        {megaConfig.title}
                      </span>
                    </div>
                  </div>
                  <button className="text-xs font-semibold underline underline-offset-2">
                    Ver todo
                  </button>
                </div>

                {/* Columnas de subcategorías */}
                <div className="flex-1 overflow-y-auto p-5">
                  <div className="grid gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {megaConfig.columns.map((col) => (
                      <div key={col.heading} className="space-y-2">
                        <h3 className="text-sm font-semibold text-text-main">
                          {col.heading}
                        </h3>
                        <ul className="space-y-1 text-xs text-text-muted">
                          {col.links.map((link, index) => (
                            <li key={link}>
                              {index === 0 ? (
                                <button className="font-semibold text-accent hover:underline">
                                  {link}
                                </button>
                              ) : (
                                <button className="hover:text-text-main hover:underline">
                                  {link}
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </aside>
        </>
      )}
    </>
  );
}