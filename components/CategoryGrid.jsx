// components/CategoryGrid.jsx
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

// 🔹 Categorías principales del menú lateral
export const MAIN_CATEGORIES = [
  { id: "tecnologia", label: "Tecnología" },
  { id: "electrohogar", label: "Electrohogar" },
  { id: "hogar", label: "Muebles y hogar" },
  { id: "construccion", label: "Construcción ligera" },
  { id: "deportes", label: "Deportes" },
  { id: "belleza", label: "Belleza y salud" },
];

// 🔹 Contenido detallado por categoría (panel derecho)
export const CATEGORY_DETAILS = {
  tecnologia: {
    title: "Tecnología",
    icon: "💻",
    columns: [
      {
        heading: "Computación",
        links: [
          "Ver todo",
          "Portátiles",
          "Portátiles gamer",
          "PC de escritorio",
          "Monitores",
          "Accesorios computación",
          "Impresoras",
          "Tablets",
          "Conectividad",
        ],
      },
      {
        heading: "TV y video",
        links: [
          "Ver todo",
          "Televisores",
          'TVs 42" o menos',
          'TVs entre 43" - 49"',
          'TVs entre 50" - 58"',
          "Proyectores",
          "Accesorios TV",
          "Streaming",
        ],
      },
      {
        heading: "Zona gamer",
        links: [
          "Ver todo",
          "Computadores gamer",
          "Monitores gamer",
          "Sillas gamer",
          "Audífonos gamer",
          "Lentes VR",
        ],
      },
      {
        heading: "Smartwatch y anillos",
        links: [
          "Ver todo",
          "Reloj inteligente",
          "Reloj para niños",
          "Anillos inteligentes",
          "Accesorios",
        ],
      },
      {
        heading: "Cámaras y drones",
        links: [
          "Ver todo",
          "Cámaras deportivas",
          "Cámaras profesionales",
          "Accesorios fotografía",
          "Drones",
        ],
      },
      {
        heading: "Marcas destacadas",
        links: [
          "Apple",
          "Samsung",
          "Xiaomi",
          "LG",
          "Sony",
          "HP",
          "Lenovo",
          "Asus",
          "Huawei",
        ],
      },
    ],
  },

  electrohogar: {
    title: "Electrohogar",
    icon: "🏠",
    columns: [
      {
        heading: "Grandes electrodomésticos",
        links: [
          "Ver todo",
          "Neveras",
          "Lavadoras",
          "Secadoras",
          "Estufas",
          "Hornos",
        ],
      },
      {
        heading: "Pequeños electrodomésticos",
        links: [
          "Ver todo",
          "Microondas",
          "Freidoras de aire",
          "Licuadoras",
          "Cafeteras",
          "Aspiradoras",
        ],
      },
      {
        heading: "Climatización",
        links: [
          "Ver todo",
          "Aires acondicionados",
          "Ventiladores",
          "Calefactores",
          "Purificadores de aire",
        ],
      },
    ],
  },

  hogar: {
    title: "Muebles y hogar",
    icon: "🛋️",
    columns: [
      {
        heading: "Salas & sofás",
        links: [
          "Ver todo",
          "Salas en L",
          "Sofás cama",
          "Poltronas",
          "Mesas de centro",
        ],
      },
      {
        heading: "Dormitorio",
        links: [
          "Ver todo",
          "Camas",
          "Colchones",
          "Mesas de noche",
          "Ropero y clósets",
        ],
      },
      {
        heading: "Decoración",
        links: [
          "Ver todo",
          "Lámparas",
          "Alfombras",
          "Cuadros y arte",
          "Espejos",
        ],
      },
    ],
  },

  construccion: {
    title: "Construcción ligera",
    icon: "🛠️",
    columns: [
      {
        heading: "Herramientas",
        links: [
          "Ver todo",
          "Herramientas manuales",
          "Herramientas eléctricas",
          "Kits básicos",
        ],
      },
      {
        heading: "Materiales",
        links: [
          "Ver todo",
          "Pinturas",
          "Pegantes",
          "Yeso y masillas",
          "Aislantes",
        ],
      },
      {
        heading: "Ferretería",
        links: [
          "Ver todo",
          "Tornillería",
          "Cierres y candados",
          "Cintas y sellos",
        ],
      },
    ],
  },

  deportes: {
    title: "Deportes",
    icon: "⚽",
    columns: [
      {
        heading: "Fitness",
        links: [
          "Ver todo",
          "Pesas y mancuernas",
          "Máquinas de ejercicio",
          "Accesorios fitness",
        ],
      },
      {
        heading: "Outdoor",
        links: ["Ver todo", "Camping", "Ciclismo", "Deportes de montaña"],
      },
    ],
  },

  belleza: {
    title: "Belleza y salud",
    icon: "💄",
    columns: [
      {
        heading: "Cuidado personal",
        links: ["Ver todo", "Cabello", "Piel", "Cuidado oral"],
      },
      {
        heading: "Aparatos eléctricos",
        links: ["Ver todo", "Secadores", "Planchas", "Afeitadoras"],
      },
    ],
  },
};

// 🔹 Versión compacta para mobile (cards)
const MOBILE_CATEGORIES = [
  {
    id: "tecnologia",
    title: "Tecnología",
    description: "Computadores, TV, audio, gamers y más.",
    badge: "Top búsquedas",
  },
  {
    id: "hogar",
    title: "Muebles & hogar",
    description: "Salas, dormitorios y decoración.",
    badge: "Hogar",
  },
  {
    id: "electrohogar",
    title: "Electrohogar",
    description: "Neveras, lavadoras y pequeños electrodomésticos.",
    badge: "Imprescindible",
  },
  {
    id: "construccion",
    title: "Construcción ligera",
    description: "Herramientas y materiales básicos.",
    badge: "Nuevo",
  },
];

export default function CategoryGrid() {
  const [activeId, setActiveId] = useState("tecnologia");
  const activeCategory = CATEGORY_DETAILS[activeId];

  return (
    <section id="categorias" className="section-padding">
      <div className="container space-y-6">
        {/* Título sección */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              Explora por categoría
            </h2>
            <p className="text-sm text-text-muted">
              Elige una categoría y descubre los tipos de productos que podemos
              conseguir por ti.
            </p>
          </div>
        </div>

        {/* 🔹 Vista tipo mega-menú (desktop) */}
        <div className="hidden overflow-hidden rounded-2xl border border-border-soft bg-bg-card shadow-soft-xl md:grid md:grid-cols-[230px,minmax(0,1fr)]">
          {/* Menú lateral */}
          <aside className="border-r border-border-soft bg-bg-body/80">
            <ul className="max-h-[420px] overflow-y-auto py-2">
              {MAIN_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveId(cat.id)}
                      className={`flex w-full items-center justify-between px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-white text-text-main"
                          : "text-text-muted hover:bg-bg-card"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-3 w-1 rounded-full bg-accent" />
                        )}
                        <span>{cat.label}</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          isActive ? "text-accent" : "text-border-soft"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Panel derecho */}
          <div className="relative bg-white p-5">
            {/* Header verde tipo Falabella */}
            <div className="mb-6 flex items-center justify-between rounded-2xl bg-accent px-5 py-3 text-sm text-black shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-lg">
                  {activeCategory.icon}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-medium uppercase tracking-wide">
                    Categoría
                  </span>
                  <span className="text-base font-semibold">
                    {activeCategory.title}
                  </span>
                </div>
              </div>
              <button className="text-xs font-semibold underline underline-offset-2">
                Ver todo
              </button>
            </div>

            {/* Columnas de subcategorías */}
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {activeCategory.columns.map((col) => (
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

        {/* 🔹 Vista mobile: grid de cards simple */}
        <div className="grid gap-4 md:hidden">
          {MOBILE_CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="card-base group flex flex-col justify-between p-4 transition hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold">{cat.title}</h3>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {cat.badge}
                </span>
              </div>
              <p className="mb-4 text-xs text-text-muted">{cat.description}</p>
              <button className="mt-auto inline-flex text-[11px] font-medium text-accent transition group-hover:underline">
                Ver productos →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
