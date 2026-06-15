import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { useT } from "@/lib/i18n";

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
  const { t } = useT();
  const values = [
    { icon: Target, title: t("about.mission"), body: t("about.missionBody") },
    { icon: Eye, title: t("about.vision"), body: t("about.visionBody") },
    { icon: HeartHandshake, title: t("about.values"), body: t("about.valuesBody") },
  ];
  const stats: [string, string][] = [
    ["10+", t("about.stat1")],
    ["500+", t("about.stat2")],
    ["30+", t("about.stat3")],
    ["6", t("about.stat4")],
  ];
  return (
    <PageLayout>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <section className="container-page py-16 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="eyebrow">{t("about.story")}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">{t("about.storyTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("about.story1")}</p>
          <p className="mt-4 text-muted-foreground">{t("about.story2")}</p>
        </div>
        <div className="grid gap-4">
          {values.map((v) => (
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
          {stats.map(([n, l]) => (
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
