import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.quote": "Request a Quote",
    "lang.switch": "FR",
    "lang.switch.aria": "Passer en français",

    // Footer
    "footer.tagline": "Build with confidence",
    "footer.about": "Leading supplier of tile adhesive and construction materials in Mali.",
    "footer.explore": "Explore",
    "footer.products": "Products",
    "footer.projects": "Projects",
    "footer.aboutUs": "About Us",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.hours": "Hours",
    "footer.mf": "Mon – Fri: 8:00 – 18:00",
    "footer.sat": "Saturday: 9:00 – 14:00",
    "footer.sun": "Sunday: Closed",
    "footer.rights": "All rights reserved.",
    "footer.tags": "Tile adhesive · Construction materials · Bamako",

    // Home
    "home.eyebrow": "Bamako · Mali · Since 2015",
    "home.title1": "Built to bond.",
    "home.title2": "Made for Mali.",
    "home.lede": "Premium <strong>tile adhesive</strong>, ceramic adhesive and construction materials engineered for African climates. Trusted by contractors from Bamako to Sikasso.",
    "home.wa": "WhatsApp Us",
    "home.stat1": "Years experience",
    "home.stat2": "Projects delivered",
    "home.stat3": "Quote response",
    "home.feat1.t": "Certified Quality",
    "home.feat1.d": "Tested formulas that perform under heat, humidity and heavy use.",
    "home.feat2.t": "Nationwide Delivery",
    "home.feat2.d": "Direct shipping to job sites across Mali and West Africa.",
    "home.feat3.t": "Trusted by Pros",
    "home.feat3.d": "Specified by leading contractors and architects in Bamako.",
    "home.feat4.t": "Technical Support",
    "home.feat4.d": "On-site guidance from our application specialists.",
    "home.catalog": "Our Catalog",
    "home.catalogTitle": "Engineered building products",
    "home.viewAll": "View all →",
    "home.adhesives": "Adhesives",
    "home.adhesivesTitle": "Ceramic & Tile Adhesives",
    "home.adhesivesDesc": "High-strength powder adhesives for ceramic, porcelain and natural stone — formulated for tropical climates.",
    "home.materials": "Materials",
    "home.materialsTitle": "Construction Materials",
    "home.materialsDesc": "Cement, mortars, grouts and waterproofing solutions — sourced and packaged for Malian construction sites.",
    "home.why": "Why NI Group",
    "home.whyTitle": "The local partner contractors rely on.",
    "home.whyDesc": "From the smallest renovation to the largest commercial build, NI Group Mali delivers consistent quality, on-time logistics and expert technical support.",
    "home.why1": "Formulas adapted to Malian climate conditions",
    "home.why2": "Direct importer — competitive bulk pricing",
    "home.why3": "Technical training for contractors and tilers",
    "home.why4": "Free quote and site assessment in 24 hours",
    "home.aboutBtn": "About Our Company",
    "home.sat": "Customer satisfaction",
    "home.ctaTitle": "Need product for your next project?",
    "home.ctaDesc": "Tell us about your project — we'll send a tailored quote within 24 hours.",

    // Products
    "products.eyebrow": "Catalog",
    "products.title": "Tile adhesive & construction materials",
    "products.subtitle": "A complete range of bonded, certified products for professional contractors and resellers across Mali.",
    "products.pricing": "Request Pricing",
    "products.cat.adhesive": "Tile Adhesive",
    "products.cat.grout": "Grout & Joints",
    "products.cat.exterior": "Exterior Coating",
    "products.cat.interior": "Interior Finish",
    "products.blue.name": "NI-Group Ciment-Colle — Blue",
    "products.blue.desc": "High-performance cement-based tile adhesive for interior & exterior floors and walls. Spanish-quality formula adapted to Malian climate.",
    "products.orange.name": "NI-Group Ciment-Colle — Orange",
    "products.orange.desc": "Premium tile adhesive with strong adhesion and high elasticity. Perfect for all types of tiles, marble and granite.",
    "products.red.name": "NI-Group Ciment-Colle — Red",
    "products.red.desc": "Heavy-duty cement-based adhesive engineered for demanding applications, interior and exterior, walls and floors.",
    "products.grout.name": "NI Grout — Waterproof Tile Grout",
    "products.grout.desc": "Waterproof, anti-mold tile grout for joints 1–8 mm. Strong adhesion, smooth finish, for interior & exterior walls and floors.",
    "products.shield.name": "NI Shield — Enduit Extérieur",
    "products.shield.desc": "Weather-resistant exterior coating for facades, exterior walls and fences. Hydrofuge, UV resistant, durable and anti-cracking.",
    "products.wall.name": "NI Wall — Enduit de Finition",
    "products.wall.desc": "Smooth finishing coat for interior walls. Ultra-smooth surface, crack resistant, high whiteness and easy to sand.",

    // Projects
    "projects.eyebrow": "Projects",
    "projects.title": "Built with NI Group.",
    "projects.subtitle": "A selection of buildings across Mali — hotels, offices and residences — bonded together with our materials.",

    // About
    "about.eyebrow": "About",
    "about.title": "Building Mali, one bond at a time.",
    "about.subtitle": "Founded in Bamako, NI Group Mali supplies the materials and the expertise behind some of the country's most ambitious construction projects.",
    "about.story": "Our story",
    "about.storyTitle": "From a single warehouse to a national supplier.",
    "about.story1": "NI Group Mali was founded with a clear mission: bring world-class construction materials within reach of every Malian contractor. What started as a small distribution warehouse in Bamako has grown into a trusted name carrying tile adhesives, mortars, grouts and waterproofing solutions across the country.",
    "about.story2": "We work directly with manufacturers to keep prices fair and quality consistent — and we stand behind every bag we sell with technical support from real specialists.",
    "about.mission": "Our Mission",
    "about.missionBody": "Deliver reliable, certified building materials that help Malian builders work faster and with confidence.",
    "about.vision": "Our Vision",
    "about.visionBody": "To be West Africa's most trusted partner for tile adhesives and finishing materials.",
    "about.values": "Our Values",
    "about.valuesBody": "Quality, transparency, and long-term relationships with every customer we serve.",
    "about.stat1": "Years in business",
    "about.stat2": "Projects supplied",
    "about.stat3": "Distribution partners",
    "about.stat4": "Regions covered",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Request a quote.",
    "contact.subtitle": "Tell us about your project — we respond within 24 hours with pricing, samples and technical advice.",
    "contact.send": "Send us a message",
    "contact.required": "Fields marked * are required.",
    "contact.fullname": "Full name *",
    "contact.fullname.ph": "Your name",
    "contact.company": "Company",
    "contact.company.ph": "Company / Site",
    "contact.phone": "Phone *",
    "contact.email": "Email",
    "contact.email.ph": "you@example.com",
    "contact.product": "Product of interest",
    "contact.opt1": "Tile adhesive",
    "contact.opt2": "Ceramic / porcelain adhesive",
    "contact.opt3": "Grout & joints",
    "contact.opt4": "Mortar",
    "contact.opt5": "Waterproofing",
    "contact.opt6": "Other / Multiple",
    "contact.message": "Message *",
    "contact.message.ph": "Project location, quantities, timeline...",
    "contact.submit": "Send request",
    "contact.thanks": "Thanks — we'll be in touch within 24 hours.",
    "contact.visit": "Visit us",
    "contact.address": "Zone Industrielle\nBamako, Mali",
    "contact.call": "Call",
    "contact.emailTitle": "Email",
    "contact.hours": "Hours",
    "contact.hoursBody": "Mon–Fri 8:00–18:00\nSat 9:00–14:00",
    "contact.whatsapp": "Chat on WhatsApp",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "cta.quote": "Demander un devis",
    "lang.switch": "EN",
    "lang.switch.aria": "Switch to English",

    // Footer
    "footer.tagline": "Construisez en confiance",
    "footer.about": "Fournisseur leader de colle à carrelage et matériaux de construction au Mali.",
    "footer.explore": "Explorer",
    "footer.products": "Produits",
    "footer.projects": "Projets",
    "footer.aboutUs": "À propos",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.hours": "Horaires",
    "footer.mf": "Lun – Ven : 8h00 – 18h00",
    "footer.sat": "Samedi : 9h00 – 14h00",
    "footer.sun": "Dimanche : Fermé",
    "footer.rights": "Tous droits réservés.",
    "footer.tags": "Colle à carrelage · Matériaux de construction · Bamako",

    // Home
    "home.eyebrow": "Bamako · Mali · Depuis 2015",
    "home.title1": "Conçu pour adhérer.",
    "home.title2": "Fait pour le Mali.",
    "home.lede": "<strong>Colle à carrelage</strong>, colle céramique et matériaux de construction premium conçus pour les climats africains. La référence des artisans, de Bamako à Sikasso.",
    "home.wa": "WhatsApp",
    "home.stat1": "Ans d'expérience",
    "home.stat2": "Projets livrés",
    "home.stat3": "Réponse devis",
    "home.feat1.t": "Qualité certifiée",
    "home.feat1.d": "Des formules testées qui résistent à la chaleur, à l'humidité et à un usage intensif.",
    "home.feat2.t": "Livraison nationale",
    "home.feat2.d": "Expédition directe sur les chantiers à travers le Mali et l'Afrique de l'Ouest.",
    "home.feat3.t": "La confiance des pros",
    "home.feat3.d": "Recommandé par les principaux entrepreneurs et architectes de Bamako.",
    "home.feat4.t": "Support technique",
    "home.feat4.d": "Accompagnement sur site par nos spécialistes d'application.",
    "home.catalog": "Notre catalogue",
    "home.catalogTitle": "Produits de construction conçus avec soin",
    "home.viewAll": "Voir tout →",
    "home.adhesives": "Adhésifs",
    "home.adhesivesTitle": "Colles céramique & carrelage",
    "home.adhesivesDesc": "Colles en poudre haute résistance pour céramique, porcelaine et pierre naturelle — formulées pour les climats tropicaux.",
    "home.materials": "Matériaux",
    "home.materialsTitle": "Matériaux de construction",
    "home.materialsDesc": "Ciment, mortiers, joints et solutions d'étanchéité — sélectionnés et conditionnés pour les chantiers maliens.",
    "home.why": "Pourquoi NI Group",
    "home.whyTitle": "Le partenaire local de confiance des entrepreneurs.",
    "home.whyDesc": "De la plus petite rénovation au plus grand chantier commercial, NI Group Mali offre une qualité constante, une logistique fiable et un support technique expert.",
    "home.why1": "Formules adaptées aux conditions climatiques maliennes",
    "home.why2": "Importateur direct — prix de gros compétitifs",
    "home.why3": "Formation technique pour entrepreneurs et carreleurs",
    "home.why4": "Devis gratuit et étude de chantier sous 24h",
    "home.aboutBtn": "À propos de notre entreprise",
    "home.sat": "Satisfaction client",
    "home.ctaTitle": "Besoin de produits pour votre prochain projet ?",
    "home.ctaDesc": "Parlez-nous de votre projet — nous envoyons un devis sur mesure sous 24h.",

    // Products
    "products.eyebrow": "Catalogue",
    "products.title": "Colle à carrelage & matériaux de construction",
    "products.subtitle": "Une gamme complète de produits certifiés pour les entrepreneurs professionnels et revendeurs à travers le Mali.",
    "products.pricing": "Demander un prix",
    "products.cat.adhesive": "Colle à carrelage",
    "products.cat.grout": "Joints",
    "products.cat.exterior": "Enduit extérieur",
    "products.cat.interior": "Enduit intérieur",
    "products.blue.name": "NI-Group Ciment-Colle — Bleu",
    "products.blue.desc": "Colle à carrelage haute performance à base de ciment pour sols et murs intérieurs et extérieurs. Formule de qualité espagnole adaptée au climat malien.",
    "products.orange.name": "NI-Group Ciment-Colle — Orange",
    "products.orange.desc": "Colle à carrelage premium avec forte adhérence et grande élasticité. Idéale pour tous types de carreaux, marbre et granit.",
    "products.red.name": "NI-Group Ciment-Colle — Rouge",
    "products.red.desc": "Colle à base de ciment résistante conçue pour les applications exigeantes, intérieures et extérieures, murs et sols.",
    "products.grout.name": "NI Grout — Joint de carrelage étanche",
    "products.grout.desc": "Joint de carrelage étanche, anti-moisissures, pour joints de 1 à 8 mm. Forte adhérence, finition lisse, pour murs et sols intérieurs et extérieurs.",
    "products.shield.name": "NI Shield — Enduit Extérieur",
    "products.shield.desc": "Enduit extérieur résistant aux intempéries pour façades, murs extérieurs et clôtures. Hydrofuge, résistant aux UV, durable et anti-fissuration.",
    "products.wall.name": "NI Wall — Enduit de Finition",
    "products.wall.desc": "Enduit de finition lisse pour murs intérieurs. Surface ultra-lisse, résistant aux fissures, haute blancheur et facile à poncer.",

    // Projects
    "projects.eyebrow": "Projets",
    "projects.title": "Construit avec NI Group.",
    "projects.subtitle": "Une sélection de bâtiments à travers le Mali — hôtels, bureaux et résidences — liés grâce à nos matériaux.",

    // About
    "about.eyebrow": "À propos",
    "about.title": "Construire le Mali, un lien à la fois.",
    "about.subtitle": "Fondé à Bamako, NI Group Mali fournit les matériaux et l'expertise derrière certains des projets de construction les plus ambitieux du pays.",
    "about.story": "Notre histoire",
    "about.storyTitle": "D'un seul entrepôt à un fournisseur national.",
    "about.story1": "NI Group Mali a été fondé avec une mission claire : mettre des matériaux de construction de classe mondiale à la portée de chaque entrepreneur malien. Ce qui a commencé comme un petit entrepôt de distribution à Bamako est devenu un nom de confiance proposant colles à carrelage, mortiers, joints et solutions d'étanchéité dans tout le pays.",
    "about.story2": "Nous travaillons directement avec les fabricants pour maintenir des prix justes et une qualité constante — et nous garantissons chaque sac vendu avec un support technique assuré par de vrais spécialistes.",
    "about.mission": "Notre mission",
    "about.missionBody": "Fournir des matériaux de construction fiables et certifiés qui aident les bâtisseurs maliens à travailler plus vite et en toute confiance.",
    "about.vision": "Notre vision",
    "about.visionBody": "Devenir le partenaire le plus fiable d'Afrique de l'Ouest pour les colles à carrelage et les enduits de finition.",
    "about.values": "Nos valeurs",
    "about.valuesBody": "Qualité, transparence et relations durables avec chaque client.",
    "about.stat1": "Ans d'activité",
    "about.stat2": "Projets fournis",
    "about.stat3": "Partenaires distributeurs",
    "about.stat4": "Régions couvertes",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Demandez un devis.",
    "contact.subtitle": "Parlez-nous de votre projet — nous répondons sous 24h avec prix, échantillons et conseils techniques.",
    "contact.send": "Envoyez-nous un message",
    "contact.required": "Les champs marqués * sont obligatoires.",
    "contact.fullname": "Nom complet *",
    "contact.fullname.ph": "Votre nom",
    "contact.company": "Société",
    "contact.company.ph": "Société / Chantier",
    "contact.phone": "Téléphone *",
    "contact.email": "Email",
    "contact.email.ph": "vous@exemple.com",
    "contact.product": "Produit d'intérêt",
    "contact.opt1": "Colle à carrelage",
    "contact.opt2": "Colle céramique / porcelaine",
    "contact.opt3": "Joints",
    "contact.opt4": "Mortier",
    "contact.opt5": "Étanchéité",
    "contact.opt6": "Autre / Plusieurs",
    "contact.message": "Message *",
    "contact.message.ph": "Localisation du chantier, quantités, délais...",
    "contact.submit": "Envoyer la demande",
    "contact.thanks": "Merci — nous vous recontactons sous 24h.",
    "contact.visit": "Nous rendre visite",
    "contact.address": "Zone Industrielle\nBamako, Mali",
    "contact.call": "Appeler",
    "contact.emailTitle": "Email",
    "contact.hours": "Horaires",
    "contact.hoursBody": "Lun–Ven 8h00–18h00\nSam 9h00–14h00",
    "contact.whatsapp": "Discuter sur WhatsApp",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "fr") setLangState(saved);
      else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr")) {
        setLangState("fr");
      }
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key: string) => translations[lang][key] ?? translations.en[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
