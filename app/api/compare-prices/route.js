import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

/* ========== SCRAPER FALABELLA (ejemplo básico) ========== */

async function scrapeFalabella(query) {
  const searchUrl =
    "https://www.falabella.com.co/falabella-co/search?Ntt=" +
    encodeURIComponent(query);

  const res = await fetch(searchUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) return [];

  const html = await res.text();
  const $ = cheerio.load(html);

  const offers = [];

  // 👇 OJO: los selectores pueden cambiar, esto es orientativo
  $(".jsx-xxxxxx.card-grid .pod").each((_, el) => {
    const title = $(el).find(".pod-subTitle, .pod-title").text().trim();
    const priceText = $(el).find(".price-0").first().text().replace(/[^\d]/g, "");
    const price = priceText ? Number(priceText) : null;
    const url =
      "https://www.falabella.com.co" +
      ($(el).find("a").attr("href") || "").split("?")[0];

    if (!title || !price) return;

    offers.push({
      title,
      price,
      url,
      inStock: true,
      sourceCode: "falabella",
    });
  });

  return offers;
}

/* ========== ROUTE: /api/compare-prices?productId=... ========== */

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json(
      { error: "Falta productId" },
      { status: 400 }
    );
  }

  // 1) Traer producto canónico
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error || !product) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }

  const query = `${product.brand || ""} ${product.model || product.title}`;

  // 2) Lanzar scrapers en paralelo
  const [falabellaOffers] = await Promise.all([
    scrapeFalabella(query),
    // aquí podrías agregar scrapeMercadoLibre(query), etc.
  ]);

  const allOffers = [...falabellaOffers];

  // 3) Guardar en Supabase (simplificado)
  for (const offer of allOffers) {
    const { data: source } = await supabase
      .from("price_sources")
      .select("id")
      .eq("code", offer.sourceCode)
      .single();

    if (!source) continue;

    await supabase.from("product_offers").insert({
      product_id: product.id,
      source_id: source.id,
      title: offer.title,
      price: offer.price,
      url: offer.url,
      in_stock: offer.inStock,
    });
  }

  // 4) Devolver ofertas ordenadas por precio
  allOffers.sort((a, b) => a.price - b.price);

  return NextResponse.json({
    product: {
      id: product.id,
      title: product.title,
      brand: product.brand,
      model: product.model,
      targetPrice: product.target_price,
    },
    offers: allOffers,
  });
}