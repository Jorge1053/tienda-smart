// src/app/admin/categorias/page.jsx
"use client";

import Image from "next/image";
import { CATEGORIES } from "@/config/categorias";
import { ChevronRight, Plus } from "lucide-react";

export default function CategoriasAdminPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-default)]">
              Categorías de la tienda
            </h1>
            <p className="text-sm text-[var(--text-muted)]">
              Administra las categorías principales que se muestran en el menú y
              en la home.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--gray-border)] bg-[var(--btn-primary)] px-4 py-2 text-sm font-medium text-[var(--text-on-primary)] shadow-sm hover:brightness-105 transition"
          >
            <Plus className="h-4 w-4" />
            Nueva categoría
          </button>
        </div>

        {/* Grid de categorías */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="group flex items-center gap-4 rounded-2xl border border-[var(--gray-border)] bg-[var(--white)]/90 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition transform"
            >
              {/* Imagen */}
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[var(--background-soft)]">
                <Image
                  src={cat.image}
                  alt={cat.nombre}
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                  sizes="64px"
                />
              </div>

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <h2 className="truncate text-sm font-semibold text-[var(--text-default)]">
                  {cat.nombre}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs text-[var(--text-muted)]">
                  {cat.descripcion}
                </p>

                <div className="mt-2 flex items-center gap-3 text-[10px] text-[var(--text-muted)]">
                  <span className="rounded-full border border-[var(--gray-border)] px-2 py-0.5">
                    ID: {cat.id}
                  </span>
                  <button className="text-[var(--blue-main)] hover:underline">
                    Editar
                  </button>
                </div>
              </div>

              {/* Flecha */}
              <ChevronRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--blue-main)]" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
