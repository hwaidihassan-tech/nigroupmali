import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { CheckCircle2 } from "lucide-react";
import adhesiveBlueAsset from "@/assets/ni-group-ciment-colle-blue.jpg.asset.json";
import adhesiveOrangeAsset from "@/assets/ni-group-ciment-colle-orange.png.asset.json";
import adhesiveRedAsset from "@/assets/ni-group-ciment-colle-red.png.asset.json";
import groutAsset from "@/assets/ni-grout.png.asset.json";
import shieldAsset from "@/assets/ni-shield.png.asset.json";
import wallAsset from "@/assets/ni-wall.png.asset.json";
import materials from "@/assets/product-materials.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Tile Adhesive & Construction Materials | NI Group Mali" },
      { name: "description", content: "Browse ceramic tile adhesive, cement, grouts and construction materials available across Mali from NI Group." },
      { name: "keywords", content: "tile adhesive Mali, ceramic adhesive, construction materials Mali, building products, mortar, grout" },
      { property: "og:title", content: "Products | NI Group Mali" },
      { property: "og:description", content: "Premium tile adhesive and construction materials supplied across Mali." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const products = [
  {
    image: adhesiveBlueAsset.url,
    cat: "Tile Adhesive",
    name: "NI-Group Ciment-Colle — Blue",
    desc: "High-performance cement-based tile adhesive for interior & exterior floors and walls. Spanish-quality formula adapted to Malian climate.",
    specs: ["25 kg bag", "Sols & Murs · Intérieurs & Extérieurs", "Temps ouvert: 20 min", "CE / C2 TE · A+ rated"],
  },
  {
    image: adhesiveOrangeAsset.url,
    cat: "Tile Adhesive",
    name: "NI-Group Ciment-Colle — Orange",
    desc: "Premium tile adhesive with strong adhesion and high elasticity. Perfect for all types of tiles, marble and granite.",
    specs: ["25 kg bag", "Forte adhérence & élasticité", "Étanche contre l'humidité", "CE / A+ certified"],
  },
  {
    image: adhesiveRedAsset.url,
    cat: "Tile Adhesive",
    name: "NI-Group Ciment-Colle — Red",
    desc: "Heavy-duty cement-based adhesive engineered for demanding applications, interior and exterior, walls and floors.",
    specs: ["25 kg bag", "Très longue durée de vie", "Formule améliorée", "Spanish quality formula"],
  },
  {
    image: groutAsset.url,
    cat: "Grout & Joints",
    name: "NI Grout — Waterproof Tile Grout",
    desc: "Waterproof, anti-mold tile grout for joints 1–8 mm. Strong adhesion, smooth finish, for interior & exterior walls and floors.",
    specs: ["5 kg bag (±2%)", "Joints 1–8 mm", "Water repellent · Anti-mold", "Colors: White, Gray, Beige, Black, Silver"],
  },
  {
    image: shieldAsset.url,
    cat: "Exterior Coating",
    name: "NI Shield — Enduit Extérieur",
    desc: "Weather-resistant exterior coating for facades, exterior walls and fences. Hydrofuge, UV resistant, durable and anti-cracking.",
    specs: ["25 kg bag (±2%)", "Hydrofuge · Résiste aux UV", "Durable · Anti-fissuration", "Excellente adhérence · Application facile"],
  },
  {
    image: wallAsset.url,
    cat: "Interior Finish",
    name: "NI Wall — Enduit de Finition",
    desc: "Smooth finishing coat for interior walls. Ultra-smooth surface, crack resistant, high whiteness and easy to sand.",
    specs: ["20 kg bag (±2%)", "Surface ultra lisse · Haute blancheur", "Résistant aux fissures · Ponçage facile", "Idéal: maisons, bureaux, hôtels"],
  },
];

function Products() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Catalog"
        title="Tile adhesive & construction materials"
        subtitle="A complete range of bonded, certified products for professional contractors and resellers across Mali."
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center">
                <img src={p.image} alt={p.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-contain transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="eyebrow">{p.cat}</div>
                <h2 className="mt-1.5 text-xl font-bold">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1.5 text-xs">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                  Request Pricing
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
