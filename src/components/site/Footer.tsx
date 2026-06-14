import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-steel text-steel-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary font-display font-black">NI</div>
            <div>
              <div className="font-display text-lg font-bold">NI GROUP MALI</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-steel-foreground/60">Build with confidence</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-steel-foreground/70 max-w-xs">
            Leading supplier of tile adhesive and construction materials in Mali.
          </p>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary-foreground text-steel-foreground/80">Products</Link></li>
            <li><Link to="/projects" className="hover:text-primary-foreground text-steel-foreground/80">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground text-steel-foreground/80">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground text-steel-foreground/80">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-steel-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Zone Industrielle, Bamako, Mali</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> +223 00 00 00 00</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> contact@nigroupmali.com</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/80">Hours</div>
          <ul className="mt-4 space-y-2 text-sm text-steel-foreground/80">
            <li>Mon – Fri: 8:00 – 18:00</li>
            <li>Saturday: 9:00 – 14:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-steel-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} NI Group Mali. All rights reserved.</span>
          <span>Tile adhesive · Construction materials · Bamako</span>
        </div>
      </div>
    </footer>
  );
}
