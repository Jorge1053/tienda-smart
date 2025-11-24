// components/Hero.jsx
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding hero-banner">
      <div className="container grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Texto */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-bg-card/80 px-3 py-1 text-[11px] font-medium text-accent-soft ring-1 ring-accent/30">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(250,204,21,0.75)]" />
            Compramos por ti al mejor precio
          </span>

          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Todo para tu hogar,{" "}
            <span className="bg-black bg-clip-text text-transparent">
              sin pagar de más.
            </span>
          </h1>

          <p className="max-w-xl text-sm text-text-muted md:text-base">
            Buscamos en tiendas y marketplaces, encontramos la mejor oferta para
            sofás, muebles, decoración y construcción ligera, y te enviamos el
            producto a cualquier ciudad de Colombia sin que tengas que comparar
            precios durante horas.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#destacados"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black shadow-soft-xl transition hover:bg-yellow-400 active:scale-[0.98]"
            >
              Ver productos destacados
            </Link>
            <a
              href="#busqueda"
              className="inline-flex items-center justify-center rounded-full border border-border-soft px-5 py-2.5 text-sm font-medium text-text-muted transition hover:border-accent/60 hover:text-text-main"
            >
              Pedir un producto específico
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-text-muted">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-bg-card text-[11px] text-accent">
                ✓
              </span>
              Pago seguro
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-bg-card text-[11px] text-accent">
                ✓
              </span>
              Soporte por WhatsApp
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-bg-card text-[11px] text-accent">
                ✓
              </span>
              Devolución si no conseguimos el producto
            </div>
          </div>
        </div>

        {/* Imagen / mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card-base relative overflow-hidden">
            <div className="absolute -left-14 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -right-10 -top-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />

            <div className="relative space-y-4 p-5">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-main">
                  Sofá modular Oslo
                </span>
                <span className="rounded-full bg-black/40 px-2 py-0.5">
                  -28% vs. precio promedio
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-border-soft/70">
                <img
                  src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sala moderna con sofá"
                  className="h-52 w-full object-cover"
                />
              </div>

              <div className="rounded-xl bg-black/40 p-3 text-xs text-text-muted">
                <div className="mb-2 flex items-center justify-between">
                  <span>Precio en tiendas</span>
                  <span className="text-text-muted line-through">
                    $2.500.000
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-accent-soft">
                    Nuestro precio estimado
                  </span>
                  <span className="text-base font-semibold text-accent">
                    $1.799.000
                  </span>
                </div>
                <p className="mt-2 text-[11px]">
                  Nosotros buscamos el mejor precio al momento de tu compra y
                  gestionamos el pedido por ti.
                </p>
              </div>
            </div>
          </div>

          {/* Sello flotante */}
          <div className="absolute -bottom-3 -left-2 flex items-center gap-2 rounded-full bg-bg-card px-3 py-1.5 text-[11px] shadow-soft-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span className="font-medium">
              2.300+ comparaciones de precio realizadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
