import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useT();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md gradient-hero font-display text-primary-foreground font-black">
            NI
          </div>
          <div className="min-w-0">
            <div className="font-display text-base font-bold leading-tight tracking-tight">NI GROUP</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Mali</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label={t("lang.switch.aria")}
            className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:border-primary"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("lang.switch")}
          </button>
          <a
            href="tel:+22394600000"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            +223 94 60 00 00
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep"
          >
            {t("cta.quote")}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={t("lang.switch.aria")}
            className="flex items-center gap-1 rounded-md border border-border px-2 py-1.5 text-xs font-semibold uppercase"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("lang.switch")}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium rounded-md hover:bg-secondary"
                activeProps={{ className: "px-3 py-3 text-base font-semibold rounded-md bg-secondary text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              {t("cta.quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
