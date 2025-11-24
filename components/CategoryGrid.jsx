// components/CategoryGrid.jsx
const categories = [
  {
    id: "sofas",
    title: "Salas & Sofás",
    description: "Muebles cómodos para salas modernas y minimalistas.",
    badge: "Nuevo",
  },
  {
    id: "dormitorio",
    title: "Dormitorio",
    description: "Camas, mesas de noche y organización.",
    badge: "Top búsquedas",
  },
  {
    id: "hogar",
    title: "Decoración & hogar",
    description: "Lámparas, alfombras, arte de pared y más.",
    badge: "Recomendado",
  },
  {
    id: "construccion",
    title: "Construcción ligera",
    description: "Herramientas, pintura y materiales básicos.",
    badge: "Próximamente",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categorias" className="section-padding">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              Explora por categoría
            </h2>
            <p className="text-sm text-text-muted">
              Empezamos por lo esencial para el hogar y la construcción en
              Colombia.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
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
              <p className="mb-4 text-xs text-text-muted">
                {cat.description}
              </p>
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
