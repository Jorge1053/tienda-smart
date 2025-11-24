// components/CustomRequest.jsx
export function CustomRequest() {
  return (
    <section id="busqueda" className="section-padding">
      <div className="container grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="mb-2 text-xl font-semibold md:text-2xl">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mb-4 text-sm text-text-muted">
            Cuéntanos qué producto necesitas y tu presupuesto aproximado. Te
            enviaremos opciones con el mejor precio que encontremos.
          </p>
          <ul className="space-y-2 text-xs text-text-muted">
            <li>🔹 Sofás, sillas, mesas y muebles en general.</li>
            <li>🔹 Decoración, lámparas, alfombras y textiles.</li>
            <li>🔹 Herramientas y materiales de construcción ligera.</li>
          </ul>
        </div>
        <form className="card-base space-y-3 p-4 text-xs">
          <div>
            <label className="mb-1 block font-medium">
              Qué estás buscando
            </label>
            <textarea
              className="h-20 w-full rounded-lg border border-border-soft bg-black/30 px-3 py-2 text-xs outline-none ring-accent/40 focus:ring"
              placeholder="Ej: Sofá seccional gris para sala pequeña, tela lavable..."
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium">
                Presupuesto aproximado
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-border-soft bg-black/30 px-3 py-2 text-xs outline-none ring-accent/40 focus:ring"
                placeholder="Ej: $1.500.000"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Urgencia</label>
              <select className="w-full rounded-lg border border-border-soft bg-black/30 px-3 py-2 text-xs outline-none ring-accent/40 focus:ring">
                <option>No tengo afán</option>
                <option>Lo necesito pronto</option>
                <option>Es urgente</option>
              </select>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium">Nombre</label>
              <input
                type="text"
                className="w-full rounded-lg border border-border-soft bg-black/30 px-3 py-2 text-xs outline-none ring-accent/40 focus:ring"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">
                WhatsApp o correo electrónico
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-border-soft bg-black/30 px-3 py-2 text-xs outline-none ring-accent/40 focus:ring"
                placeholder="Ej: +57 300 000 0000"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black shadow-soft-xl transition hover:bg-yellow-400 active:scale-[0.98]"
          >
            Enviar solicitud
          </button>
          <p className="text-[10px] text-text-muted">
            Más adelante conectamos este formulario a Supabase para guardar las
            solicitudes y enviar notificaciones automáticas.
          </p>
        </form>
      </div>
    </section>
  );
}
