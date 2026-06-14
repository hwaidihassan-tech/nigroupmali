import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Truck, Award, Hammer, CheckCircle2, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import hero from "@/assets/hero-construction.jpg";
import adhesiveAsset from "@/assets/ni-group-ciment-colle.png.asset.json";
import materials from "@/assets/product-materials.jpg";
import project1 from "@/assets/project-1.jpg";
const adhesive = adhesiveAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NI Group Mali — Tile Adhesive & Construction Materials in Bamako" },
      { name: "description", content: "NI Group Mali supplies premium tile adhesive, ceramic adhesive and construction materials across Mali. Request a quote today." },
      { name: "keywords", content: "tile adhesive Mali, construction materials Mali, ceramic adhesive, building products, NI Group Mali, Bamako" },
      { property: "og:title", content: "NI Group Mali — Tile Adhesive & Construction Materials" },
      { property: "og:description", content: "Premium tile adhesive and building products for professional contractors across Mali." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-steel text-steel-foreground">
        <img
          src={hero}
          alt="Construction workers installing ceramic tiles with NI Group adhesive in Mali"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/85 via-steel/70 to-steel/95" />
        <div className="relative container-page py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/90">Bamako · Mali · Since 2015</div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
              Built to bond.
              <br />
              <span className="text-primary-foreground/80">Made for Mali.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-steel-foreground/85">
              Premium <strong className="text-primary-foreground">tile adhesive</strong>, ceramic adhesive and construction materials engineered for African climates. Trusted by contractors from Bamako to Sikasso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/22300000000"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["10+", "Years experience"],
                ["500+", "Projects delivered"],
                ["24h", "Quote response"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl md:text-4xl font-black text-primary-foreground">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-steel-foreground/70">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Shield, title: "Certified Quality", desc: "Tested formulas that perform under heat, humidity and heavy use." },
            { icon: Truck, title: "Nationwide Delivery", desc: "Direct shipping to job sites across Mali and West Africa." },
            { icon: Award, title: "Trusted by Pros", desc: "Specified by leading contractors and architects in Bamako." },
            { icon: Hammer, title: "Technical Support", desc: "On-site guidance from our application specialists." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mb-10 sm:flex sm:justify-between">
            <div className="min-w-0">
              <div className="eyebrow">Our Catalog</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">Engineered building products</h2>
            </div>
            <Link to="/products" className="shrink-0 text-sm font-semibold text-primary hover:underline whitespace-nowrap">
              View all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group overflow-hidden rounded-xl bg-card border border-border shadow-card">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img src={adhesive} alt="NI Group Ciment-Colle tile adhesive 25kg bag" width={1024} height={1024} loading="lazy" className="h-full w-full object-contain transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="eyebrow">Adhesives</div>
                <h3 className="mt-2 text-2xl font-bold">Ceramic & Tile Adhesives</h3>
                <p className="mt-2 text-muted-foreground">High-strength powder adhesives for ceramic, porcelain and natural stone — formulated for tropical climates.</p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-xl bg-card border border-border shadow-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={materials} alt="Construction materials sacks ready for delivery" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="eyebrow">Materials</div>
                <h3 className="mt-2 text-2xl font-bold">Construction Materials</h3>
                <p className="mt-2 text-muted-foreground">Cement, mortars, grouts and waterproofing solutions — sourced and packaged for Malian construction sites.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-page py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="eyebrow">Why NI Group</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">The local partner contractors rely on.</h2>
            <p className="mt-4 text-muted-foreground">
              From the smallest renovation to the largest commercial build, NI Group Mali delivers consistent quality, on-time logistics and expert technical support.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Formulas adapted to Malian climate conditions",
                "Direct importer — competitive bulk pricing",
                "Technical training for contractors and tilers",
                "Free quote and site assessment in 24 hours",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary">
              About Our Company <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <img src={project1} alt="Finished interior with tiles installed using NI Group adhesive" width={1200} height={900} loading="lazy" className="rounded-xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -left-4 md:-left-8 hidden sm:block rounded-xl bg-card border border-border p-5 shadow-card max-w-[220px]">
              <div className="font-display text-4xl font-black text-primary">99%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-2xl gradient-hero p-10 md:p-14 text-primary-foreground">
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Need product for your next project?</h2>
              <p className="mt-3 text-primary-foreground/85 max-w-xl">Tell us about your project — we'll send a tailored quote within 24 hours.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-background/90">Request a Quote</Link>
              <a href="https://wa.me/22300000000" target="_blank" rel="noopener noreferrer" className="rounded-md bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
