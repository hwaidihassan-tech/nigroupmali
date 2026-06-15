import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NI Group Mali — Request a Quote for Tile Adhesive" },
      { name: "description", content: "Contact NI Group Mali for quotes on tile adhesive and construction materials. Phone, WhatsApp and email available." },
      { property: "og:title", content: "Contact NI Group Mali" },
      { property: "og:description", content: "Request a quote — quick response by phone, email or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useT();
  return (
    <PageLayout>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />
      <section className="container-page py-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card"
        >
          <h2 className="text-2xl font-bold">{t("contact.send")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("contact.required")}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label={t("contact.fullname")}><input required className="input" placeholder={t("contact.fullname.ph")} /></Field>
            <Field label={t("contact.company")}><input className="input" placeholder={t("contact.company.ph")} /></Field>
            <Field label={t("contact.phone")}><input required type="tel" className="input" placeholder="+223 ..." /></Field>
            <Field label={t("contact.email")}><input type="email" className="input" placeholder={t("contact.email.ph")} /></Field>
          </div>
          <Field label={t("contact.product")} className="mt-4">
            <select className="input">
              <option>{t("contact.opt1")}</option>
              <option>{t("contact.opt2")}</option>
              <option>{t("contact.opt3")}</option>
              <option>{t("contact.opt4")}</option>
              <option>{t("contact.opt5")}</option>
              <option>{t("contact.opt6")}</option>
            </select>
          </Field>
          <Field label={t("contact.message")} className="mt-4">
            <textarea required rows={5} className="input resize-none" placeholder={t("contact.message.ph")} />
          </Field>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
          >
            <Send className="h-4 w-4" /> {t("contact.submit")}
          </button>
          {sent && (
            <p className="mt-4 text-sm text-primary font-medium">{t("contact.thanks")}</p>
          )}
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} title={t("contact.visit")}>
            {t("contact.address").split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </InfoCard>
          <InfoCard icon={Phone} title={t("contact.call")}>
            <a href="tel:+22394600000" className="hover:text-primary">+223 94 60 00 00</a>
          </InfoCard>
          <InfoCard icon={Mail} title={t("contact.emailTitle")}>
            <a href="mailto:admin@nigroupmali.com" className="hover:text-primary">admin@nigroupmali.com</a>
          </InfoCard>
          <InfoCard icon={Clock} title={t("contact.hours")}>
            {t("contact.hoursBody").split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </InfoCard>
          <a
            href="https://wa.me/22394600000"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-card transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> {t("contact.whatsapp")}
          </a>
        </aside>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent); }
      `}</style>
    </PageLayout>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card flex gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}
