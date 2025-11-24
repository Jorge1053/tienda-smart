// app/layout.js
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://tienda-smart.vercel.app"), // cámbialo si usas otro dominio
  title: {
    default: "Tienda Smart",
    template: "%s | Tienda Smart",
  },
  description: "Tu marketplace inteligente con los mejores precios.",
  keywords: [
    "tienda online",
    "marketplace",
    "ofertas",
    "descuentos",
    "compras en línea",
    "Tienda Smart",
  ],
  authors: [{ name: "Tienda Smart" }],
  openGraph: {
    title: "Tienda Smart",
    description: "Tu marketplace inteligente con los mejores precios.",
    url: "/",
    siteName: "Tienda Smart",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Smart",
    description: "Tu marketplace inteligente con los mejores precios.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
