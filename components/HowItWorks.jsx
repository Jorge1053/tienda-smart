// components/HowItWorks.jsx
export function HowItWorks() {
  const steps = [
    {
      title: "Elige o pide un producto",
      desc: "Puedes comprar de nuestro catálogo o decirnos exactamente qué estás buscando.",
      num: "1",
    },
    {
      title: "Buscamos el mejor precio",
      desc: "Comparamos en tiendas y marketplaces de Colombia para conseguir la mejor oferta disponible.",
      num: "2",
    },
    {
      title: "Compramos y te lo enviamos",
      desc: "Gestionamos la compra por ti y coordinamos el envío hasta tu casa.",
      num: "3",
    },
  ];

  return (
    <section id="como-funciona" className="section-padding">
      <div className="container space-y-6">
        <h2 className="text-xl font-semibold md:text-2xl">
          ¿Cómo funciona Tienda Smart?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="card-base p-4">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                {step.num}
              </div>
              <h3 className="mb-2 text-sm font-semibold">{step.title}</h3>
              <p className="text-xs text-text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
