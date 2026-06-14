import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Target, Eye, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NI Group Mali | Construction Materials Supplier" },
      { name: "description", content: "NI Group Mali is a leading supplier of tile adhesive and construction materials in Bamako and across Mali." },
      { property: "og:title", content: "About NI Group Mali" },
      { property: "og:description", content: "Our story, mission, and the team behind Mali's trusted construction materials supplier." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="Building Mali, one bond at a time."
        subtitle="Founded in Bamako, NI Group Mali supplies the materials and the expertise behind some of the country's most ambitious construction projects."
      />

      <section className="container-page py-16 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="eyebrow">Our story</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">From a single warehouse to a national supplier.</h2>
          <p className="mt-4 text-muted-foreground">
            NI Group Mali was founded with a clear mission: bring world-class construction materials within reach of every Malian contractor. What started as a small distribution warehouse in Bamako has grown into a trusted name carrying tile adhesives, mortars, grouts and waterproofing solutions across the country.
          </p>
          <p className="mt-4 text-muted-foreground">
            We work directly with manufacturers to keep prices fair and quality consistent — and we stand behind every bag we sell with technical support from real specialists.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Target, title: "Our Mission", body: "Deliver reliable, certified building materials that help Malian builders work faster and with confidence." },
            { icon: Eye, title: "Our Vision", body: "To be West Africa's most trusted partner for tile adhesives and finishing materials." },
            { icon: HeartHandshake, title: "Our Values", body: "Quality, transparency, and long-term relationships with every customer we serve." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary shrink-0">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-page grid gap-6 md:grid-cols-4 text-center">
          {[
            ["10+", "Years in business"],
            ["500+", "Projects supplied"],
            ["30+", "Distribution partners"],
            ["6", "Regions covered"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl bg-card border border-border p-8 shadow-card">
              <div className="font-display text-5xl font-black text-primary">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
