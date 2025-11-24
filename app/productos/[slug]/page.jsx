// ... dentro del componente, ya con productId
const { data, isLoading } = useSWR(
  `/api/compare-prices?productId=${product.id}`,
  (url) => fetch(url).then((r) => r.json())
);

{/* Bloque de comparación */}
<section className="mt-6 rounded-2xl bg-bg-card p-4 shadow-soft-xl">
  <h3 className="mb-3 text-sm font-semibold text-text-main">
    Comparación de precios en otras tiendas
  </h3>

  {isLoading && <p className="text-xs text-text-muted">Buscando precios...</p>}

  {data?.offers?.length > 0 && (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-[11px] text-text-muted">
            <th className="pb-2">Tienda</th>
            <th className="pb-2">Producto</th>
            <th className="pb-2">Precio</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.offers.map((o) => (
            <tr key={o.url} className="border-t border-border-soft/60">
              <td className="py-2">{o.sourceCode}</td>
              <td className="py-2 pr-4">{o.title}</td>
              <td className="py-2 font-semibold">
                ${o.price.toLocaleString("es-CO")}
              </td>
              <td className="py-2 text-right">
                <a
                  href={o.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border-soft px-3 py-1 text-[11px] font-medium text-accent hover:border-accent hover:bg-accent/5"
                >
                  Ver en tienda
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>
