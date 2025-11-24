// scripts/falabella-tecnologia.mjs
import "dotenv/config";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { createClient } from "@supabase/supabase-js";

/* ============================================================
   1. Supabase client
   ============================================================ */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

/* ============================================================
   2. Categorías de tecnología a scrapear
   - PON AQUÍ LAS URL REALES DE FALABELLA
   - Usa las páginas de categoría (listado) de Tecnología
   ============================================================ */
const TECH_CATEGORIES = [
  {
    code: "notebooks",
    url: "https://www.falabella.com.co/falabella-co/category/catXXXXX/notebooks", // 👈 AJUSTA
  },
  {
    code: "computadores-gamer",
    url: "https://www.falabella.com.co/falabella-co/category/catYYYYY/computadores-gamer", // 👈 AJUSTA
  },
  // agrega más categorías de tecnología...
];

// Para ir suave
const REQUEST_DELAY_MS = 1200;
const MAX_PAGES_PER_CATEGORY = 5; // súbelo según lo que quieras scrapear

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

/* ============================================================
   3. Fetch HTML
   ============================================================ */
async function fetchHtml(url) {
  console.log("GET", url);
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) {
    console.warn("❌ Error HTTP", res.status, "en", url);
    return null;
  }
  return res.text();
}

/* ============================================================
   4. Parsear listado de categoría
   - Solo saca URLs de productos desde la grilla
   - Así luego vamos a la página de detalle (donde ya viste
     el H1, precio e imagen en tus capturas)
   ============================================================ */
function parseCategoryListForUrls(html) {
  const $ = cheerio.load(html);
  const urls = new Set();

  // 👇 Ajusta estos selectores según la grilla de Falabella
  // Busca links que apuntan al PDP (detalle)
  $("a[href*='/product/'], a[href*='falabella-co/product']")
    .each((_, el) => {
      let href = $(el).attr("href");
      if (!href) return;
      if (href.startsWith("/")) {
        href = "https://www.falabella.com.co" + href;
      }
      // filtrito tonto para evitar links raros
      if (href.includes("/product/")) {
        urls.add(href.split("?")[0]); // sin querystring
      }
    });

  return Array.from(urls);
}

/* ============================================================
   5. Parsear página de producto (detalle)
   - Usamos las clases que viste en tus capturas:
     - h1.product-name
     - li[data-variant='PDP_MAIN'] span.copy12 (precio internet)
     - .image-headline-wrapper-zoom img (primera imagen grande)
   ============================================================ */
function parseProductDetail(html, url) {
  const $ = cheerio.load(html);

  // 🔹 Título
  const titulo =
    $("h1.product-name")
      .first()
      .text()
      .trim() || null;

  // 🔹 Precio (internet)
  let precioText =
    $("li[data-variant='PDP_MAIN'] span.copy12")
      .first()
      .text()
      .trim() || "";

  // Limpieza para dejar solo números
  precioText = precioText.replace(/[^\d]/g, "");
  const precio = precioText ? Number(precioText) : null;

  // 🔹 Imagen principal
  let imagenUrl =
    $(".image-headline-wrapper-zoom img")
      .first()
      .attr("src") || null;

  if (imagenUrl && imagenUrl.startsWith("//")) {
    imagenUrl = "https:" + imagenUrl;
  }

  if (!imagenUrl) {
    // Fallback: cualquier img grande de la sección de imagen
    imagenUrl =
      $(".pdp-image-section img")
        .first()
        .attr("src") || null;
  }

  if (!titulo || !precio || !imagenUrl) {
    console.warn("⚠️ Datos incompletos en PDP:", { titulo, precio, imagenUrl });
  }

  return { url, titulo, precio, imagenUrl };
}

/* ============================================================
   6. Guardar / actualizar en Supabase
   ============================================================ */
async function upsertProducto(producto, categoriaCode) {
  const row = {
    fuente: "falabella",
    url: producto.url,
    titulo: producto.titulo,
    precio: producto.precio,
    moneda: "COP",
    imagen_url: producto.imagenUrl,
    categoria: categoriaCode,
    actualizado_en: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("productos")
    .upsert(row, { onConflict: "url" });

  if (error) {
    console.error("❌ Error guardando producto:", producto.url, error);
  } else {
    console.log(`✔ Guardado/actualizado: ${producto.titulo}`);
  }
}

/* ============================================================
   7. Scrape de una categoría completa
   ============================================================ */
async function scrapeCategory(category) {
  console.log(`\n===== CATEGORY: ${category.code} =====\n`);

  let page = 1;
  let seenUrls = new Set();

  while (page <= MAX_PAGES_PER_CATEGORY) {
    const url = `${category.url}?page=${page}`;
    const html = await fetchHtml(url);
    if (!html) break;

    const productUrls = parseCategoryListForUrls(html);
    console.log(
      `Página ${page}: encontradas ${productUrls.length} URLs de productos`
    );

    if (!productUrls.length) {
      // no hay más resultados
      break;
    }

    // Evitar duplicados entre páginas
    const newUrls = productUrls.filter((u) => !seenUrls.has(u));
    newUrls.forEach((u) => seenUrls.add(u));

    console.log(`Scrapeando ${newUrls.length} PDP nuevos...`);

    for (const pdpUrl of newUrls) {
      const pdpHtml = await fetchHtml(pdpUrl);
      if (!pdpHtml) {
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      const producto = parseProductDetail(pdpHtml, pdpUrl);
      if (producto.titulo && producto.precio && producto.imagenUrl) {
        await upsertProducto(producto, category.code);
      }
      await sleep(REQUEST_DELAY_MS);
    }

    page++;
    await sleep(REQUEST_DELAY_MS);
  }
}

/* ============================================================
   8. MAIN
   ============================================================ */
async function main() {
  for (const category of TECH_CATEGORIES) {
    await scrapeCategory(category);
  }
  console.log("\n✅ Scraping Tecnología Falabella → tabla productos COMPLETADO");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
