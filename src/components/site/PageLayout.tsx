import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-hero text-primary-foreground">
      <div className="container-page py-16 md:py-24">
        <div className="eyebrow text-primary-foreground/80">{eyebrow}</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base md:text-lg text-primary-foreground/85">{subtitle}</p>}
      </div>
    </section>
  );
}
