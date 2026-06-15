import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { useT } from "@/lib/i18n";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NI Group Mali | Construction Material References" },
      { name: "description", content: "Discover construction projects across Mali built with NI Group tile adhesive and building products." },
      { property: "og:title", content: "Our Projects | NI Group Mali" },
      { property: "og:description", content: "References from hotels, offices and residences built across Mali with NI Group materials." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const { t, lang } = useT();

  const projectsEn = [
    { img: p1, title: "Hôtel Niger Résidence", loc: "Bamako", year: "2024", scope: "Tile adhesive, grout, waterproofing — 4,200 m²" },
    { img: p2, title: "ABC Tower Office Complex", loc: "Bamako, ACI 2000", year: "2024", scope: "Façade tile adhesive — 6,000 m²" },
    { img: p3, title: "Grand Hotel Lobby Renovation", loc: "Bamako", year: "2023", scope: "Stone & marble adhesive — 2,800 m²" },
    { img: p1, title: "Sikasso Residential Towers", loc: "Sikasso", year: "2023", scope: "Mortar & adhesive supply — 12 units" },
    { img: p2, title: "Commercial Center Façade", loc: "Ségou", year: "2022", scope: "Exterior tile adhesive — 3,500 m²" },
    { img: p3, title: "Banking HQ Interior", loc: "Bamako", year: "2022", scope: "Premium adhesive & grout — 1,900 m²" },
  ];
  const projectsFr = [
    { img: p1, title: "Hôtel Niger Résidence", loc: "Bamako", year: "2024", scope: "Colle à carrelage, joints, étanchéité — 4 200 m²" },
    { img: p2, title: "Complexe de bureaux ABC Tower", loc: "Bamako, ACI 2000", year: "2024", scope: "Colle à carrelage de façade — 6 000 m²" },
    { img: p3, title: "Rénovation du lobby du Grand Hôtel", loc: "Bamako", year: "2023", scope: "Colle pierre & marbre — 2 800 m²" },
    { img: p1, title: "Tours résidentielles de Sikasso", loc: "Sikasso", year: "2023", scope: "Fourniture mortier & colle — 12 unités" },
    { img: p2, title: "Façade Centre commercial", loc: "Ségou", year: "2022", scope: "Colle à carrelage extérieure — 3 500 m²" },
    { img: p3, title: "Intérieur siège bancaire", loc: "Bamako", year: "2022", scope: "Colle & joints premium — 1 900 m²" },
  ];
  const projects = lang === "fr" ? projectsFr : projectsEn;

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{p.loc}</span><span>{p.year}</span>
                </div>
                <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
