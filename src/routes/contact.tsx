import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

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
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Request a quote."
        subtitle="Tell us about your project — we respond within 24 hours with pricing, samples and technical advice."
      />
      <section className="container-page py-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card"
        >
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name *"><input required className="input" placeholder="Your name" /></Field>
            <Field label="Company"><input className="input" placeholder="Company / Site" /></Field>
            <Field label="Phone *"><input required type="tel" className="input" placeholder="+223 ..." /></Field>
            <Field label="Email"><input type="email" className="input" placeholder="you@example.com" /></Field>
          </div>
          <Field label="Product of interest" className="mt-4">
            <select className="input">
              <option>Tile adhesive</option>
              <option>Ceramic / porcelain adhesive</option>
              <option>Grout & joints</option>
              <option>Mortar</option>
              <option>Waterproofing</option>
              <option>Other / Multiple</option>
            </select>
          </Field>
          <Field label="Message *" className="mt-4">
            <textarea required rows={5} className="input resize-none" placeholder="Project location, quantities, timeline..." />
          </Field>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
          >
            <Send className="h-4 w-4" /> Send request
          </button>
          {sent && (
            <p className="mt-4 text-sm text-primary font-medium">Thanks — we'll be in touch within 24 hours.</p>
          )}
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} title="Visit us">
            Zone Industrielle<br />Bamako, Mali
          </InfoCard>
          <InfoCard icon={Phone} title="Call">
            <a href="tel:+22394600000" className="hover:text-primary">+223 94 60 00 00</a>
          </InfoCard>
          <InfoCard icon={Mail} title="Email">
            <a href="mailto:admin@nigroupmali.com" className="hover:text-primary">admin@nigroupmali.com</a>
          </InfoCard>
          <InfoCard icon={Clock} title="Hours">
            Mon–Fri 8:00–18:00<br />Sat 9:00–14:00
          </InfoCard>
          <a
            href="https://wa.me/22394600000"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-card transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
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
