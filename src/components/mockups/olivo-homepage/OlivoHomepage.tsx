import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleX,
  Flower2,
  Leaf,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  category: "Ramos" | "Decoración" | "Detalles";
  alt: string;
  aspect: string;
  isReal?: boolean;
};

const referenceImages = {
  editorial: {
    video: "/__mockup/images/olivo/editorial/hero.mp4",
    poster: "/__mockup/images/olivo/editorial/hero-poster.png",
  },
  real: {
    storefront: "/__mockup/images/olivo/real/storefront.png",
    work01: "/__mockup/images/olivo/real/work-01.jpg",
    work02: "/__mockup/images/olivo/real/work-02.jpg",
    work03: "/__mockup/images/olivo/real/work-03.jpg",
  },
  generated: {
    about: "/__mockup/images/olivo/generated/about-workbench.jpg",
    serviceBouquets: "/__mockup/images/olivo/generated/service-bouquets.jpg",
    serviceDecoration: "/__mockup/images/olivo/generated/service-decoration.jpg",
    serviceEvents: "/__mockup/images/olivo/generated/service-events.jpg",
    servicePlants: "/__mockup/images/olivo/generated/service-plants.jpg",
    serviceSpecial: "/__mockup/images/olivo/generated/service-special.jpg",
    momentGift: "/__mockup/images/olivo/generated/moment-gift.jpg",
    momentCelebrate: "/__mockup/images/olivo/generated/moment-celebrate.jpg",
    momentDecorate: "/__mockup/images/olivo/generated/moment-decorate.jpg",
    momentSurprise: "/__mockup/images/olivo/generated/moment-surprise.jpg",
    decorationSpace: "/__mockup/images/olivo/generated/decoration-space.jpg",
  },
};

const galleryItems: GalleryItem[] = [
  { src: referenceImages.real.work02, title: "Ramo de temporada", category: "Ramos", alt: "Ramo de flores envuelto sobre una mesa de madera", aspect: "aspect-[4/5]", isReal: true },
  { src: referenceImages.real.work01, title: "Composición botánica", category: "Decoración", alt: "Composición de ramas y flores secas en una entrada", aspect: "aspect-[4/3]", isReal: true },
  { src: referenceImages.real.work03, title: "Color y textura", category: "Ramos", alt: "Composición floral colorida con flores frescas", aspect: "aspect-[3/4]", isReal: true },
  { src: referenceImages.real.storefront, title: "La tienda de Olivo", category: "Detalles", alt: "Exterior de Floristería Olivo en Sevilla", aspect: "aspect-[4/5]", isReal: true },
];

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-olivo", label: "Sobre Olivo" },
  { href: "#flores", label: "Flores" },
  { href: "#decoracion", label: "Decoración" },
  { href: "#mundo-olivo", label: "Trabajo real" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  { number: "01", title: "Ramos personalizados", text: "Composiciones pensadas para una persona, una ocasión y una manera de decir algo.", icon: Flower2, image: referenceImages.generated.serviceBouquets, alt: "Manos seleccionando flores frescas sobre piedra clara" },
  { number: "02", title: "Decoración floral", text: "Flores que acompañan un espacio sin ocuparlo. Para casa, tienda o celebración.", icon: Leaf, image: referenceImages.generated.serviceDecoration, alt: "Interior mediterráneo con una composición floral arquitectónica" },
  { number: "03", title: "Eventos", text: "Una mirada floral completa para vestir momentos especiales con naturalidad.", icon: Sparkles, image: referenceImages.generated.serviceEvents, alt: "Mesa de celebración con velas y flores al atardecer" },
  { number: "04", title: "Plantas y detalles", text: "Pequeños gestos verdes, seleccionados para durar y encontrar su sitio.", icon: Leaf, image: referenceImages.generated.servicePlants, alt: "Interior luminoso con plantas y recipientes botánicos" },
  { number: "05", title: "Encargos especiales", text: "Cuéntanos lo que imaginas. José te ayudará a encontrar la forma adecuada.", icon: ArrowUpRight, image: referenceImages.generated.serviceSpecial, alt: "Manos envolviendo una composición floral en papel artesanal" },
];

const reasons = [
  { title: "Buen gusto", text: "Composiciones equilibradas, materiales honestos y una paleta que respira." },
  { title: "Asesoramiento", text: "Te escuchamos antes de elegir. Cada encargo empieza con una conversación." },
  { title: "Personalización", text: "No hay dos personas ni dos espacios iguales. Tampoco dos ramos." },
  { title: "Cercanía", text: "Una floristería local, con trato directo y atención de José." },
];

const moments = [
  { title: "Regalar", eyebrow: "Para decirlo sin explicarlo", image: referenceImages.generated.momentGift, alt: "Flores delicadas sobre una mesa de piedra con una tarjeta en blanco" },
  { title: "Celebrar", eyebrow: "Para que el día tenga otra luz", image: referenceImages.generated.momentCelebrate, alt: "Mesa de celebración con velas y flores al atardecer" },
  { title: "Decorar", eyebrow: "Para hacer tuyo un espacio", image: referenceImages.generated.momentDecorate, alt: "Patio mediterráneo con una rama floral y sombras sobre la cal" },
  { title: "Sorprender", eyebrow: "Para salir de lo de siempre", image: referenceImages.generated.momentSurprise, alt: "Detalle de flores envueltas en papel artesanal y cinta de seda" },
];

function ReferenceImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#ded8ca] ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]" />
    </div>
  );
}

function SectionIntro({ kicker, title, text, light = false }: { kicker: string; title: ReactNode; text?: string; light?: boolean }) {
  return (
    <div className={`max-w-xl ${light ? "text-[#f7f3ea]" : "text-[#292721]"}`}>
      <p className={`mb-5 text-[10px] font-medium uppercase tracking-[0.24em] ${light ? "text-[#cfd7c1]" : "text-[#7d8970]"}`}>{kicker}</p>
      <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">{title}</h2>
      {text && <p className={`mt-6 max-w-md text-base leading-7 ${light ? "text-[#d8dccf]" : "text-[#686358]"}`}>{text}</p>}
    </div>
  );
}

export function OlivoHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxZoomed, setLightboxZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.title = "Floristería Olivo Decoración Floral · Sevilla";
    const description = "Diseño floral, decoración y encargos personalizados en Sevilla. Floristería Olivo Decoración Floral.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxIndex]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const selectedImage = lightboxIndex === null ? null : galleryItems[lightboxIndex];

  return (
    <main className="min-h-[100dvh] bg-[#fffdf8] font-sans text-[#292721] selection:bg-[#7d8970] selection:text-[#fffdf8]">
       <style>{`
        :root { --olivo-cream: #f7f3ea; --olivo-white: #fffdf8; --olivo-green: #3f4935; --olivo-sage: #7d8970; --olivo-sand: #d8cdbb; --olivo-brown: #292721; }
        html { scroll-behavior: smooth; }
        .olivo-serif { font-family: Georgia, 'Times New Roman', serif; }
        .olivo-sans { font-family: 'Trebuchet MS', 'Avenir Next', sans-serif; }
        .olivo-grain::after { content: ""; position: fixed; inset: 0; z-index: 50; pointer-events: none; opacity: .035; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E"); }
        @keyframes olivoRise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .olivo-rise { animation: olivoRise .8s ease-out both; }
         .olivo-delay-1 { animation-delay: .12s; } .olivo-delay-2 { animation-delay: .22s; } .olivo-delay-3 { animation-delay: .32s; } .olivo-nav-in { animation: olivoRise .8s .42s ease-out both; }
        .olivo-link { position: relative; } .olivo-link::after { content: ""; position: absolute; left: 0; right: 0; bottom: -5px; height: 1px; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform .3s ease; } .olivo-link:hover::after { transform: scaleX(1); transform-origin: left; }
         .olivo-hero-video { filter: saturate(.72) contrast(.97); }
         @media (prefers-reduced-motion: reduce) { .olivo-hero-video { display: none; } }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
      `}</style>
      <div className="olivo-grain">
        <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#fffdf8]/95 shadow-[0_8px_30px_rgba(63,73,53,.08)] backdrop-blur-md" : "bg-transparent"}`}>
          <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
             <button onClick={() => goTo("inicio")} className={`group flex items-center gap-3 text-left transition-colors duration-300 ${scrolled ? "text-[#3f4935]" : "text-[#fffdf8]"}`} aria-label="Ir al inicio">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full border ${scrolled ? "border-[#3f4935]" : "border-[#fffdf8]/70"}`}><Leaf size={17} strokeWidth={1.4} /></span>
              <span className="leading-none"><strong className="block text-[15px] font-medium tracking-[0.2em]">OLIVO</strong><small className="mt-1 block text-[8px] tracking-[0.18em] opacity-70">DECORACIÓN FLORAL</small></span>
            </button>
            <nav className={`olivo-nav-in hidden items-center gap-7 text-[11px] uppercase tracking-[0.15em] lg:flex ${scrolled ? "text-[#3f4935]" : "text-[#fffdf8]"}`} aria-label="Navegación principal">
              {navItems.map((item) => <a key={item.href} href={item.href} className="olivo-link" onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            </nav>
            <div className="hidden lg:block">
               <button onClick={() => goTo("contacto")} className={`rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.15em] transition ${scrolled ? "border-[#3f4935] bg-[#3f4935] text-[#fffdf8] hover:bg-[#292721]" : "border-[#fffdf8]/70 text-[#fffdf8] hover:bg-[#fffdf8] hover:text-[#3f4935]"}`}>Hacer un encargo</button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`flex h-11 w-11 items-center justify-center lg:hidden ${scrolled ? "text-[#3f4935]" : "text-[#fffdf8]"}`} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={25} strokeWidth={1.3} /> : <Menu size={25} strokeWidth={1.3} />}
            </button>
          </div>
           {menuOpen && <div className="absolute inset-x-0 top-full border-t border-[#3f4935]/10 bg-[#fffdf8] px-5 pb-8 pt-5 shadow-lg lg:hidden"><nav className="flex flex-col" aria-label="Menú móvil">{navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between border-b border-[#3f4935]/10 py-4 text-2xl ${index === 0 ? "text-[#3f4935]" : "text-[#292721]"}`}>{item.label}<ArrowUpRight size={18} strokeWidth={1.2} /></a>)}<button onClick={() => goTo("contacto")} className="mt-6 w-full rounded-full bg-[#3f4935] px-5 py-4 text-[11px] uppercase tracking-[0.16em] text-[#fffdf8]">Hacer un encargo</button></nav></div>}
        </header>

        <section id="inicio" className="relative min-h-[720px] overflow-hidden bg-[#3f4935] pt-[76px] text-[#fffdf8]">
          <div className="absolute inset-0 bg-[#3f4935] bg-cover bg-center" style={{ backgroundImage: `url(${referenceImages.editorial.poster})` }} />
          <video className="olivo-hero-video absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center" autoPlay muted loop playsInline preload="metadata" poster={referenceImages.editorial.poster} aria-hidden="true">
            <source src={referenceImages.editorial.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,43,29,.88)_0%,rgba(63,73,53,.62)_44%,rgba(63,73,53,.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,43,29,.72)_0%,transparent_42%,rgba(35,43,29,.18)_100%)]" />
          <div className="relative mx-auto grid min-h-[644px] max-w-[1440px] items-end px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_1fr] lg:px-12 lg:pb-24">
            <div className="max-w-2xl">
              <p className="olivo-rise mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#d8ddcf]"><span className="h-px w-10 bg-[#d8ddcf]" />Floristería en Sevilla</p>
              <h1 className="olivo-serif olivo-rise olivo-delay-1 max-w-[680px] text-[clamp(3.4rem,9vw,7.9rem)] leading-[.86] tracking-[-.07em]">Flores que<br /><em className="font-normal text-[#d8cdbb]">cuentan algo.</em></h1>
              <p className="olivo-rise olivo-delay-2 mt-8 max-w-md text-lg leading-7 text-[#eef0e8]">Diseño floral, decoración y detalles hechos con gusto en Sevilla.</p>
              <div className="olivo-rise olivo-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goTo("contacto")} className="group flex items-center justify-between gap-8 rounded-full bg-[#f7f3ea] px-5 py-3.5 text-[11px] uppercase tracking-[0.15em] text-[#3f4935] transition hover:bg-[#d8cdbb]"><span>Encargar un arreglo</span><ArrowUpRight size={16} strokeWidth={1.4} /></button>
                <button onClick={() => goTo("sobre-olivo")} className="flex items-center justify-between gap-8 rounded-full border border-[#fffdf8]/50 px-5 py-3.5 text-[11px] uppercase tracking-[0.15em] transition hover:border-[#fffdf8] hover:bg-[#fffdf8]/10"><span>Descubrir Olivo</span><ArrowDown size={15} strokeWidth={1.4} /></button>
              </div>
            </div>
            <div className="hidden justify-end self-end lg:flex"><div className="w-48 border-l border-[#fffdf8]/30 pl-5 text-[10px] uppercase leading-6 tracking-[0.2em] text-[#d8ddcf]">Sevilla<br />Ramos<br />Decoración floral<br />Encargos</div></div>
          </div>
          <div className="absolute bottom-5 right-6 hidden text-[10px] uppercase tracking-[.2em] text-[#fffdf8]/60 sm:block">Bajar para descubrir <ArrowDown className="ml-2 inline" size={14} /></div>
        </section>

        <section id="sobre-olivo" className="scroll-mt-20 bg-[#f7f3ea] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
            <SectionIntro kicker="Una forma de hacer" title={<>Más que<br /><em>flores.</em></>} text="En Olivo creemos en la belleza de lo que está bien elegido. En el ramo que llega justo a tiempo, en una mesa que invita a quedarse y en los detalles que se recuerdan." />
            <div className="grid gap-8 sm:grid-cols-[.85fr_1.15fr] sm:items-end">
              <ReferenceImage src={referenceImages.generated.about} alt="Manos preparando flores sobre una mesa de trabajo" className="aspect-[.82] max-w-[360px]" />
              <div className="relative pl-5 sm:pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-[#7d8970]/40" />
                <p className="max-w-xl font-serif text-2xl leading-[1.3] tracking-[-.02em] text-[#3f4935] sm:text-3xl">“Cada encargo empieza por escuchar. Después llegan las flores, el color, la textura y esa pequeña intuición que lo hace tuyo.”</p>
                <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[.18em] text-[#686358]"><span className="h-8 w-8 rounded-full bg-[#7d8970] text-center leading-8 text-[#f7f3ea]">J</span>José · Floristería Olivo</div>
              </div>
            </div>
          </div>
        </section>

        <section id="flores" className="scroll-mt-20 bg-[#fffdf8] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro kicker="Lo que hacemos" title={<>Un lenguaje floral<br /><em>para cada idea.</em></>} /><p className="max-w-xs text-sm leading-6 text-[#686358]">Desde un ramo que dice “estoy aquí” hasta la decoración completa de un evento. Siempre a tu medida.</p></div>
            <div className="space-y-16 sm:space-y-24">
              {services.map((service, index) => { const Icon = service.icon; return <button key={service.number} onClick={() => goTo("contacto")} className={`group grid w-full gap-7 text-left md:grid-cols-2 md:items-center md:gap-16 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}><div className="relative aspect-[1.2] overflow-hidden bg-[#d8cdbb]"><img src={service.image} alt={service.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /></div><div className="max-w-md"><span className="mb-5 block text-[10px] tracking-[.18em] text-[#7d8970]">{service.number}</span><span className="flex items-center gap-3 font-serif text-3xl tracking-[-.03em] text-[#3f4935] sm:text-4xl">{service.title}<Icon size={19} strokeWidth={1.2} className="text-[#7d8970]" /></span><span className="mt-4 block text-sm leading-7 text-[#686358]">{service.text}</span><span className="mt-7 inline-flex items-center gap-3 border-b border-[#3f4935] pb-2 text-[10px] uppercase tracking-[.17em] text-[#3f4935]">Consultar <ArrowUpRight size={15} strokeWidth={1.2} /></span></div></button>; })}
            </div>
          </div>
        </section>

        <section id="mundo-olivo" className="scroll-mt-20 bg-[#292721] px-5 py-24 text-[#fffdf8] sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionIntro light kicker="Nuestro trabajo" title={<>El mundo de<br /><em>Olivo.</em></>} text="La prueba real de lo que hacemos: ramos, composiciones y escenas compartidas por Floristería Olivo." />
              <span className="max-w-[190px] text-[10px] uppercase leading-5 tracking-[.16em] text-[#d8cdbb]">Solo fotografías reales del negocio</span>
            </div>
            <div className="grid grid-cols-12 gap-3 sm:gap-5">
              <button onClick={() => setLightboxIndex(0)} className="group relative col-span-7 row-span-2 aspect-[.73] overflow-hidden text-left sm:col-span-5">
                <img src={referenceImages.real.work02} alt="Ramo de flores envuelto sobre una mesa de madera" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute inset-x-4 bottom-4 font-serif text-2xl text-[#fffdf8] sm:inset-x-7 sm:bottom-7 sm:text-3xl">Ramos que<br /><em>dicen algo.</em></span>
              </button>
              <button onClick={() => setLightboxIndex(1)} className="group relative col-span-5 aspect-[1.24] overflow-hidden text-left sm:col-span-4">
                <img src={referenceImages.real.work01} alt="Composición de ramas y flores secas en una entrada" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.15em] text-[#fffdf8]">Composición botánica</span>
              </button>
              <button onClick={() => setLightboxIndex(3)} className="group relative col-span-5 aspect-[1.24] overflow-hidden text-left sm:col-span-3">
                <img src={referenceImages.real.storefront} alt="Exterior de Floristería Olivo en Sevilla" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute inset-x-3 bottom-3 text-[9px] uppercase tracking-[.13em] text-[#fffdf8] sm:inset-x-4">La tienda</span>
              </button>
              <button onClick={() => setLightboxIndex(2)} className="group relative col-span-5 aspect-[1.3] overflow-hidden text-left sm:col-span-4">
                <img src={referenceImages.real.work03} alt="Composición floral colorida con flores frescas" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.15em] text-[#fffdf8]">Color y textura</span>
              </button>
            </div>
            <p className="mt-8 text-[9px] uppercase tracking-[.16em] text-[#a9a699]">Fotografías reales compartidas por Floristería Olivo · portfolio auténtico</p>
          </div>
        </section>

        <section className="bg-[#3f4935] px-5 py-20 text-[#fffdf8] sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_auto] md:items-center"><div><p className="mb-4 text-[10px] uppercase tracking-[.22em] text-[#cbd5bf]">¿Tienes una idea?</p><h2 className="font-serif text-4xl leading-[.95] tracking-[-.04em] sm:text-6xl">Hablemos de<br /><em className="font-normal text-[#d8cdbb]">tu encargo.</em></h2></div><div className="flex flex-col items-start gap-4 text-sm"><a href="tel:+34955346703" className="flex items-center gap-3 border-b border-[#fffdf8]/35 pb-2 transition hover:border-[#fffdf8]"><Phone size={19} strokeWidth={1.2} />Llamar a la floristería <span className="text-[#cbd5bf]">· 955 34 67 03</span><ArrowUpRight size={14} /></a><button type="button" onClick={() => goTo("contacto")} className="flex items-center gap-3 border-b border-[#fffdf8]/35 pb-2 transition hover:border-[#fffdf8]"><Send size={17} strokeWidth={1.2} />Hacer un encargo<ArrowUpRight size={14} /></button></div></div>
        </section>

        <section id="decoracion" className="scroll-mt-20 bg-[#f7f3ea] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionIntro kicker="Tu ocasión, tu manera" title={<>Para cada<br /><em>momento.</em></>} text="Hay flores para lo que se celebra, lo que empieza y lo que simplemente merece un poco más de cuidado." /><a href="#contacto" className="olivo-link flex items-center gap-2 pb-1 text-[10px] uppercase tracking-[.16em] text-[#3f4935]">Cuéntanos tu momento <ArrowUpRight size={15} /></a></div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">{moments.map((moment) => <button key={moment.title} onClick={() => goTo("contacto")} className="group relative flex aspect-[.82] flex-col justify-end overflow-hidden p-5 text-left sm:p-7"><img src={moment.image} alt={moment.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale-[.08] transition duration-700 group-hover:scale-[1.045]" /><div className="absolute inset-0 bg-gradient-to-t from-[#292721]/80 via-[#292721]/10 to-[#292721]/20" /><span className="relative mb-2 text-[9px] uppercase leading-4 tracking-[.17em] text-[#f7f3ea]">{moment.eyebrow}</span><span className="relative font-serif text-2xl tracking-[-.03em] text-[#fffdf8] sm:text-3xl">{moment.title}</span><ArrowUpRight className="absolute right-5 top-5 text-[#fffdf8]" size={18} strokeWidth={1.2} /></button>)}</div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#fffdf8] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
            <div className="relative"><ReferenceImage src={referenceImages.generated.decorationSpace} alt="Interior mediterráneo con una instalación floral integrada en la arquitectura" className="aspect-[.88] max-w-[480px]" /><span className="absolute -bottom-8 -right-2 hidden border border-[#3f4935]/25 bg-[#fffdf8] px-5 py-4 font-serif text-xl text-[#3f4935] sm:block">Flores que<br /><em>acompañan.</em></span></div>
            <div><SectionIntro kicker="Espacios con intención" title={<>Decoración que<br /><em>deja respirar.</em></>} text="Diseñamos atmósferas florales para casas, celebraciones y proyectos que piden algo especial. Trabajamos con el espacio, la luz y el ritmo de cada ocasión." /><button onClick={() => goTo("contacto")} className="mt-9 flex items-center gap-4 border-b border-[#3f4935] pb-3 text-[11px] uppercase tracking-[.18em] text-[#3f4935]">Consultar un proyecto <ArrowUpRight size={16} /></button></div>
          </div>
        </section>

        <section className="bg-[#f7f3ea] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><SectionIntro kicker="Lo que importa" title={<>Hecho con<br /><em>criterio.</em></>} text="No se trata de llenar un espacio. Se trata de encontrar lo que encaja en él." /><div className="grid gap-0 border-t border-[#292721]/20 sm:grid-cols-2">{reasons.map((reason, index) => <div key={reason.title} className={`border-b border-[#292721]/20 py-7 ${index % 2 === 0 ? "sm:pr-10 sm:border-r" : "sm:pl-10"}`}><span className="mb-6 block text-[10px] tracking-[.18em] text-[#7d8970]">0{index + 1}</span><h3 className="font-serif text-2xl text-[#3f4935]">{reason.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#686358]">{reason.text}</p></div>)}</div></div>
        </section>

        <section className="bg-[#fffdf8] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[800px] text-center"><p className="mb-6 text-[10px] uppercase tracking-[.23em] text-[#7d8970]">Lo que dicen de Olivo</p><h2 className="font-serif text-4xl leading-[.98] tracking-[-.04em] text-[#3f4935] sm:text-6xl">Las buenas historias<br /><em>se cuentan después.</em></h2><div className="mx-auto mt-10 max-w-md border border-dashed border-[#7d8970]/60 px-7 py-8"><MessageCircle className="mx-auto mb-4 text-[#7d8970]" size={22} strokeWidth={1.2} /><p className="text-[10px] uppercase leading-5 tracking-[.15em] text-[#686358]">Reseñas verificadas pendientes de añadir</p><p className="mt-3 text-sm leading-6 text-[#8b877c]">Estamos preparando este espacio con opiniones reales y verificadas.</p></div></div>
        </section>

        <section id="contacto" className="scroll-mt-20 bg-[#3f4935] px-5 py-24 text-[#fffdf8] sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 max-w-xl"><p className="mb-5 text-[10px] uppercase tracking-[.23em] text-[#cbd5bf]">Vamos a darle forma</p><h2 className="font-serif text-5xl leading-[.93] tracking-[-.05em] sm:text-7xl">Tu encargo<br /><em className="font-normal text-[#d8cdbb]">empieza aquí.</em></h2><p className="mt-6 max-w-sm text-sm leading-6 text-[#d8ddcf]">Cuéntanos qué tienes en mente.</p></div>
             <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
               <div className="order-1 grid gap-10 lg:col-span-2 lg:grid-cols-2 lg:items-stretch lg:gap-16">
                 <div className="flex flex-col justify-between border-t border-[#cbd5bf]/30 pt-5">
                   <div>
                     <p className="mb-5 text-[10px] uppercase tracking-[.18em] text-[#cbd5bf]">Visítanos</p>
                     <h3 className="font-serif text-4xl leading-[.95] tracking-[-.04em] sm:text-5xl">Estamos en<br /><em className="font-normal text-[#d8cdbb]">Sevilla.</em></h3>
                     <p className="mt-8 font-serif text-2xl">Floristería Olivo<br />Decoración Floral</p>
                     <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#d8ddcf]"><MapPin className="mt-0.5 shrink-0" size={17} strokeWidth={1.2} /><span>C. Vicente Alanís<br />41008 Sevilla</span></p>
                     <a href="tel:+34955346703" className="mt-6 block font-serif text-2xl text-[#fffdf8] hover:text-[#d8cdbb]">955 34 67 03</a>
                   </div>
                   <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                     <a href="tel:+34955346703" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f7f3ea] px-5 py-3 text-[10px] uppercase tracking-[.17em] text-[#3f4935] transition hover:bg-[#d8cdbb]"><Phone size={16} strokeWidth={1.2} />Llamar</a>
                     <a href="https://www.google.com/maps/search/?api=1&query=Florister%C3%ADa%20Olivo%20Decoraci%C3%B3n%20Floral%2C%20C.%20Vicente%20Alan%C3%ADs%2C%2041008%20Sevilla%2C%20Espa%C3%B1a" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#cbd5bf]/50 px-5 py-3 text-[10px] uppercase tracking-[.17em] text-[#fffdf8] transition hover:border-[#fffdf8]"><MapPin size={16} strokeWidth={1.2} />Cómo llegar</a>
                   </div>
                 </div>
                 <a href="https://www.google.com/maps/search/?api=1&query=Florister%C3%ADa%20Olivo%20Decoraci%C3%B3n%20Floral%2C%20C.%20Vicente%20Alan%C3%ADs%2C%2041008%20Sevilla%2C%20Espa%C3%B1a" target="_blank" rel="noreferrer" aria-label="Abrir ubicación de Floristería Olivo en Google Maps" className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[2px] border border-[#cbd5bf]/30 bg-[#56634b] p-7 shadow-[0_18px_45px_rgba(20,30,20,.16)] transition hover:bg-[#627258] sm:min-h-[330px]">
                   <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#d8cdbb]/25" />
                   <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#d8cdbb]/20" />
                   <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-[#d8cdbb]"><span>Ubicación exacta</span><MapPin size={18} strokeWidth={1.2} /></div>
                   <div className="relative"><p className="text-[10px] uppercase tracking-[.2em] text-[#cbd5bf]">Olivo</p><p className="mt-2 font-serif text-4xl leading-[.9] text-[#fffdf8] sm:text-5xl">En Sevilla.</p><p className="mt-5 max-w-[190px] text-sm leading-6 text-[#e0e5d8]">C. Vicente Alanís<br />41008 Sevilla, España</p></div>
                   <span className="relative inline-flex items-center gap-3 text-[10px] uppercase tracking-[.17em] text-[#fffdf8]">Abrir en Google Maps <ArrowUpRight size={15} strokeWidth={1.2} /></span>
                 </a>
               </div>
            </div>
          </div>
        </section>

         <section className="bg-[#d8cdbb] px-5 py-24 text-[#3f4935] sm:px-8 sm:py-32 lg:px-12"><div className="mx-auto max-w-[1000px] text-center"><p className="mb-5 text-[10px] uppercase tracking-[.22em]">Una flor, una intención</p><h2 className="font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-8xl">Hazlo especial<br /><em className="font-normal">desde el principio.</em></h2><button onClick={() => goTo("contacto")} className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#3f4935] px-7 py-4 text-[10px] uppercase tracking-[.17em] text-[#fffdf8] transition hover:bg-[#292721]">Hacer un encargo <ArrowUpRight size={16} strokeWidth={1.2} /></button></div></section>

        <footer className="bg-[#292721] px-5 py-12 text-[#fffdf8] sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1200px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-5 flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fffdf8]/50"><Leaf size={15} strokeWidth={1.2} /></span><span className="text-[13px] tracking-[.2em]">OLIVO</span></div><p className="text-sm leading-6 text-[#d8ddcf]">Floristería Olivo Decoración Floral<br />C. Vicente Alanís, 41008 Sevilla<br /><a href="tel:+34955346703" className="hover:text-[#d8cdbb]">955 34 67 03</a></p></div><div className="text-left text-[10px] leading-6 tracking-[.08em] text-[#a8aa9e] sm:text-right">© 2026 Floristería Olivo Decoración Floral<br />Diseño web por Karim Moreno</div></div></footer>

         <a href="tel:+34955346703" aria-label="Llamar a Floristería Olivo" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#7d8970] text-[#fffdf8] shadow-[0_8px_25px_rgba(63,73,53,.22)] transition hover:scale-105 hover:bg-[#3f4935] sm:w-auto sm:px-5"><Phone size={21} strokeWidth={1.3} /><span className="hidden text-sm font-medium tracking-wide sm:inline">955 34 67 03</span></a>

        {selectedImage && <div role="dialog" aria-modal="true" aria-label="Vista ampliada de galería" className="fixed inset-0 z-50 flex items-center justify-center bg-[#292721]/95 p-5 sm:p-10" onClick={() => { setLightboxIndex(null); setLightboxZoomed(false); }} onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)} onTouchEnd={(event) => { if (touchStartX === null) return; const endX = event.changedTouches[0]?.clientX; if (endX === undefined) return; const delta = endX - touchStartX; if (Math.abs(delta) > 45) setLightboxIndex((current) => current === null ? null : (delta < 0 ? current + 1 : current - 1 + galleryItems.length) % galleryItems.length); setTouchStartX(null); }}><button onClick={() => { setLightboxIndex(null); setLightboxZoomed(false); }} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-[#fffdf8]" aria-label="Cerrar"><CircleX size={27} strokeWidth={1.1} /></button><button onClick={(e) => { e.stopPropagation(); setLightboxIndex((current) => current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length); }} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[#fffdf8] sm:left-8" aria-label="Imagen anterior"><ArrowLeft size={22} strokeWidth={1.1} /></button><div onClick={(e) => e.stopPropagation()} className="relative max-h-[85vh] max-w-4xl"><button type="button" onClick={() => setLightboxZoomed((current) => !current)} className="block max-h-[78vh] max-w-full cursor-zoom-in overflow-auto" aria-label={lightboxZoomed ? "Reducir imagen" : "Ampliar imagen"}><img src={selectedImage.src} alt={selectedImage.alt} className={`max-h-[78vh] max-w-full object-contain transition-transform duration-500 ${lightboxZoomed ? "scale-110" : "scale-100"}`} /></button><div className="mt-4 flex items-center justify-between gap-6 text-[#fffdf8]"><span><span className="block text-[9px] uppercase tracking-[.18em] text-[#d8cdbb]">{selectedImage.category}</span><span className="font-serif text-xl">{selectedImage.title}</span></span><span className="text-right text-[9px] uppercase tracking-[.14em] text-[#b6b7ab]">Pulsa para ampliar</span></div></div><button onClick={(e) => { e.stopPropagation(); setLightboxIndex((current) => current === null ? null : (current + 1) % galleryItems.length); }} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[#fffdf8] sm:right-8" aria-label="Imagen siguiente"><ArrowRight size={22} strokeWidth={1.1} /></button></div>}
      </div>
    </main>
  );
}

export default OlivoHomepage;