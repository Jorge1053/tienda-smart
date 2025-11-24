// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft/70 py-6 text-[11px] text-text-muted">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <span>
            © {year} Tienda Smart. Todos los derechos reservados.
          </span>
          <div className="text-[11px]">
            Desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/jorgeluisra10/"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-text-main"
            >
              Jorge Luis Rodríguez Ávila
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-text-main">
            Políticas de privacidad
          </a>
          <a href="#" className="hover:text-text-main">
            Términos y condiciones
          </a>
          <a href="#" className="hover:text-text-main">
            Ayuda
          </a>
        </div>
      </div>
    </footer>
  );
}
