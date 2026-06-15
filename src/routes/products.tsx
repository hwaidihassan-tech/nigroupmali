import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { CheckCircle2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import adhesiveBlueAsset from "@/assets/ni-group-ciment-colle-blue.jpg.asset.json";
import adhesiveOrangeAsset from "@/assets/ni-group-ciment-colle-orange.png.asset.json";
import adhesiveRedAsset from "@/assets/ni-group-ciment-colle-red.png.asset.json";
import groutAsset from "@/assets/ni-grout.png.asset.json";
import shieldAsset from "@/assets/ni-shield.png.asset.json";
import wallAsset from "@/assets/ni-wall.png.asset.json";

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

function Products() {
  const { t, lang } = useT();

  const specsEn = {
    blue: ["25 kg bag", "Sols & Murs · Intérieurs & Extérieurs", "Temps ouvert: 20 min", "CE / C2 TE · A+ rated"],
    orange: ["25 kg bag", "Forte adhérence & élasticité", "Étanche contre l'humidité", "CE / A+ certified"],
    red: ["25 kg bag", "Très longue durée de vie", "Formule améliorée", "Spanish quality formula"],
    grout: ["5 kg bag (±2%)", "Joints 1–8 mm", "Water repellent · Anti-mold", "Colors: White, Gray, Beige, Black, Silver"],
    shield: ["25 kg bag (±2%)", "Hydrofuge · UV resistant", "Durable · Anti-cracking", "Excellent adhesion · Easy application"],
    wall: ["20 kg bag (±2%)", "Ultra-smooth surface · High whiteness", "Crack resistant · Easy to sand", "Ideal: homes, offices, hotels"],
  };
  const specsFr = {
    blue: ["Sac de 25 kg", "Sols & murs · Intérieurs & extérieurs", "Temps ouvert : 20 min", "CE / C2 TE · A+"],
    orange: ["Sac de 25 kg", "Forte adhérence & élasticité", "Étanche contre l'humidité", "Certifié CE / A+"],
    red: ["Sac de 25 kg", "Très longue durée de vie", "Formule améliorée", "Formule de qualité espagnole"],
    grout: ["Sac de 5 kg (±2 %)", "Joints 1–8 mm", "Hydrofuge · Anti-moisissures", "Couleurs : Blanc, Gris, Beige, Noir, Argent"],
    shield: ["Sac de 25 kg (±2 %)", "Hydrofuge · Résiste aux UV", "Durable · Anti-fissuration", "Excellente adhérence · Application facile"],
    wall: ["Sac de 20 kg (±2 %)", "Surface ultra lisse · Haute blancheur", "Résistant aux fissures · Ponçage facile", "Idéal : maisons, bureaux, hôtels"],
  };
  const S = lang === "fr" ? specsFr : specsEn;

  const products = [
    { image: adhesiveBlueAsset.url, cat: t("products.cat.adhesive"), name: t("products.blue.name"), desc: t("products.blue.desc"), specs: S.blue },
    { image: adhesiveOrangeAsset.url, cat: t("products.cat.adhesive"), name: t("products.orange.name"), desc: t("products.orange.desc"), specs: S.orange },
    { image: adhesiveRedAsset.url, cat: t("products.cat.adhesive"), name: t("products.red.name"), desc: t("products.red.desc"), specs: S.red },
    { image: groutAsset.url, cat: t("products.cat.grout"), name: t("products.grout.name"), desc: t("products.grout.desc"), specs: S.grout },
    { image: shieldAsset.url, cat: t("products.cat.exterior"), name: t("products.shield.name"), desc: t("products.shield.desc"), specs: S.shield },
    { image: wallAsset.url, cat: t("products.cat.interior"), name: t("products.wall.name"), desc: t("products.wall.desc"), specs: S.wall },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("products.eyebrow")}
        title={t("products.title")}
        subtitle={t("products.subtitle")}
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
                  {t("products.pricing")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
