import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { CheckCircle2 } from "lucide-react";
import adhesive from "@/assets/product-adhesive.jpg";
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
    image: adhesive,
    cat: "Tile Adhesive",
    name: "NI Bond Standard",
    desc: "Cement-based powder adhesive for ceramic tiles on walls and floors. Strong grip and easy mixing.",
    specs: ["25 kg bag", "Interior use", "Open time: 20 min"],
  },
  {
    image: adhesive,
    cat: "Tile Adhesive",
    name: "NI Bond Pro Flex",
    desc: "Flexible high-performance adhesive for porcelain and large-format tiles, indoor and outdoor.",
    specs: ["25 kg bag", "Interior & exterior", "C2TE classification"],
  },
  {
    image: adhesive,
    cat: "Tile Adhesive",
    name: "NI Stone Marble",
    desc: "White adhesive engineered for natural stone, marble and translucent tiles.",
    specs: ["25 kg bag", "White cement base", "Non-staining"],
  },
  {
    image: materials,
    cat: "Grout & Joints",
    name: "NI Joint Color",
    desc: "Decorative tile grout in multiple shades, mildew-resistant and water-repellent.",
    specs: ["5 kg bag", "12 colors", "Joint width 1–10 mm"],
  },
  {
    image: materials,
    cat: "Mortar",
    name: "NI Mortar Plus",
    desc: "All-purpose masonry mortar for blockwork, plastering and general site work.",
    specs: ["40 kg bag", "Quick setting", "High workability"],
  },
  {
    image: materials,
    cat: "Waterproofing",
    name: "NI Seal Coat",
    desc: "Flexible cementitious waterproofing for terraces, bathrooms and water tanks.",
    specs: ["20 kg kit", "2-component", "UV resistant"],
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
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.image} alt={p.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
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
