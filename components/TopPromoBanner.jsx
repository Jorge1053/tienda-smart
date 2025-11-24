// components/TopPromoBanner.jsx
"use client";

import {
  ArrowRight,
  CreditCard,
  MapPin,
  User,
  BadgeDollarSign,
  Clock,
} from "lucide-react";

const quickCards = [
  {
    id: "recientes",
    title: "Visto recientemente",
    description: "Vuelve rápido a los productos que estuviste mirando.",
    cta: "Ver historial",
    icon: Clock,
  },
  {
    id: "ubicacion",
    title: "Ingresa tu ubicación",
    description: "Calculamos tiempos de entrega y costos según tu ciudad.",
    cta: "Configurar ubicación",
    icon: MapPin,
  },
  {
    id: "cuenta",
    title: "Ingresa a tu cuenta",
    description: "Guarda tus favoritos y sigue tus pedidos en un solo lugar.",
    cta: "Ir a mi cuenta",
    icon: User,
  },
  {
    id: "pagos",
    title: "Medios de pago",
    description: "Conoce tarjetas, bancos aliados y cuotas sin interés.",
    cta: "Ver medios de pago",
    icon: CreditCard,
  },
  {
    id: "ofertas",
    title: "Ofertas destacadas",
    description: "Explora las mejores promociones que estamos rastreando.",
    cta: "Ver ofertas",
    icon: BadgeDollarSign,
  },
];

export default function TopPromoBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner azul tipo slider */}
      <div className="relative w-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">
        <div className="container flex flex-col items-start gap-8 py-8 text-white md:flex-row md:items-center md:justify-between md:py-10 lg:py-12">
          {/* Texto principal */}
          <div className="max-w-xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100/90">
              ADELÁNTATE A LAS OFERTAS
            </p>
            <h1 className="text-3xl font-extrabold leading-tight drop-shadow-sm md:text-4xl lg:text-5xl">
              Encuentra tus productos
              <br />
              <span className="text-sky-50">al mejor precio del día.</span>
            </h1>
            <p className="text-sm text-sky-100/90 md:text-base">
              Comparamos precios en distintas tiendas y marketplaces para que
              compres sofás, muebles, tecnología y más sin pagar de más.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-black/90 px-5 py-2.5 text-sm font-semibold text-white shadow-soft-xl transition hover:bg-black">
                Ver promociones de hoy
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                Configurar alertas de precio
              </button>
            </div>
          </div>

          {/* Lado derecho: mockup de productos */}
          <div className="relative mt-4 w-full max-w-md md:mt-0">
            <div className="absolute -left-10 -top-6 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-indigo-500/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl bg-white/10 p-3 shadow-soft-xl ring-1 ring-white/30 backdrop-blur">
              <div className="overflow-hidden rounded-2xl bg-sky-200/10">
                <img
                  src="https://images.pexels.com/photos/3965554/pexels-photo-3965554.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Ejemplo de productos destacados"
                  className="h-48 w-full object-cover md:h-56"
                />
              </div>

              <div className="mt-3 grid gap-2 rounded-2xl bg-white/90 p-3 text-[11px] text-slate-700 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:text-xs">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sky-700">
                    Climatización & hogar
                  </p>
                  <p className="text-xs font-semibold text-slate-900">
                    Combos seleccionados hasta{" "}
                    <span className="text-emerald-600">40% OFF</span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Válido por tiempo limitado. Verificamos el mejor precio
                    disponible al momento de tu compra.
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between text-right">
                  <p className="text-[10px] text-slate-400 line-through">
                    Antes: $1.299.000
                  </p>
                  <p className="text-base font-bold text-emerald-600">
                    $779.000
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Envío estimado: 3–5 días hábiles
                  </p>
                </div>
              </div>
            </div>

            {/* Indicadores tipo slider */}
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-white/90" />
              <span className="h-1.5 w-2 rounded-full bg-white/40" />
              <span className="h-1.5 w-2 rounded-full bg-white/40" />
              <span className="h-1.5 w-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* Desvanecido inferior hacia el fondo de la página */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(56,189,248,0), var(--bg-body))",
          }}
        />
      </div>

      {/* Tarjetas inferiores tipo accesos rápidos */}
      <div className="relative z-10 -mt-10 pb-4">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible">
            {quickCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.id}
                  className="min-w-[220px] max-w-xs flex-1 rounded-2xl bg-bg-card p-4 text-left text-sm shadow-soft-xl ring-1 ring-border-soft/80 md:min-w-0"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-[13px] font-semibold text-text-main">
                      {card.title}
                    </h3>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mb-4 text-[11px] leading-relaxed text-text-muted">
                    {card.description}
                  </p>
                  <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:underline">
                    {card.cta}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
