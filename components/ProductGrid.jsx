// components/ProductGrid.jsx
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Sofá modular gris tres cuerpos",
    description:
      "Tapizado en tela suave, estructura en madera, ideal para salas modernas.",
    price: "$1.799.000",
    originalPrice: "$2.450.000",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "-26%",
  },
  {
    id: 2,
    name: "Silla de comedor en madera clara",
    description:
      "Estilo nórdico, estructura sólida, perfecta para comedores minimalistas.",
    price: "$249.000",
    originalPrice: "$329.000",
    image:
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Lámpara colgante metálica negra",
    description:
      "Ideal para isla de cocina o comedor, diseño industrial moderno.",
    price: "$189.000",
    originalPrice: "$230.000",
    image:
      "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Nuevo",
  },
  {
    id: 4,
    name: "Kit de herramientas básico 32 piezas",
    description:
      "Incluye destornilladores, llaves, martillo y más para reparaciones en casa.",
    price: "$129.000",
    originalPrice: "$170.000",
    image:
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Hogar",
  },
];

export default function ProductGrid() {
  return (
    <section id="destacados" className="section-padding">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              Productos destacados
            </h2>
            <p className="text-sm text-text-muted">
              Ejemplos de cómo se verá tu catálogo con fotos reales.
            </p>
          </div>
          <button className="mt-2 inline-flex rounded-full border border-border-soft px-4 py-1.5 text-xs font-medium text-text-muted transition hover:border-accent/60 hover:text-text-main">
            Ver todo el catálogo
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
