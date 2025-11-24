// components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <article className="card-base flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-accent/50">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-accent">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 text-xs">
        <h3 className="line-clamp-2 text-sm font-semibold">{product.name}</h3>
        <p className="line-clamp-2 text-[11px] text-text-muted">
          {product.description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[11px] text-text-muted line-through">
                {product.originalPrice}
              </span>
            )}
            <span className="text-sm font-semibold text-accent">
              {product.price}
            </span>
          </div>
          <button className="rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-black transition hover:bg-yellow-400 active:scale-[0.97]">
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  );
}
