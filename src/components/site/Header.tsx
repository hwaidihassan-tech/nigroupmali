import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
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
          <a
            href="tel:+22300000000"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            +223 00 00 00 00
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep"
          >
            Request a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
