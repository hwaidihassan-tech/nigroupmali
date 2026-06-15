import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="mt-24 border-t border-border bg-steel text-steel-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary font-display font-black">NI</div>
            <div>
              <div className="font-display text-lg font-bold">NI GROUP MALI</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-steel-foreground/60">{t("footer.tagline")}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-steel-foreground/70 max-w-xs">
            {t("footer.about")}
          </p>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">{t("footer.explore")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary-foreground text-steel-foreground/80">{t("footer.products")}</Link></li>
            <li><Link to="/projects" className="hover:text-primary-foreground text-steel-foreground/80">{t("footer.projects")}</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground text-steel-foreground/80">{t("footer.aboutUs")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground text-steel-foreground/80">{t("footer.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">{t("footer.contactTitle")}</div>
          <ul className="mt-4 space-y-3 text-sm text-steel-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Zone Industrielle, Bamako, Mali</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> +223 94 60 00 00</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> admin@nigroupmali.com</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">{t("footer.hours")}</div>
          <ul className="mt-4 space-y-2 text-sm text-steel-foreground/80">
            <li>{t("footer.mf")}</li>
            <li>{t("footer.sat")}</li>
            <li>{t("footer.sun")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-steel-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} NI Group Mali. {t("footer.rights")}</span>
          <span>{t("footer.tags")}</span>
        </div>
      </div>
    </footer>
  );
}
