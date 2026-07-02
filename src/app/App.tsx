import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, createContext, useContext } from "react";
import { ProjectDetail, PROJECTS } from "./ProjectDetail";
import imgLesisuStudio from "figma:asset/3ecb6bee002a445a06f7b073134159c613f21f7e.png";
import imgLogo from "figma:asset/d6a2072488dae5137762c9dbf8a71c3f144263b9.png";
import imgPortfolio from "figma:asset/89e932ef73814d628bef260faf2bbf0177efee97.png";
import imgCertGoogle from "../assets/cert-google.png";
import imgCertMeta from "../assets/cert-meta.png";
import imgLogoWhite from "../assets/logo_white.png";
import svgPaths from "../imports/UserDashboard/svg-qbu93pp18k";

const translations = {
  EN: {
    tagline: "Web development & Marketing",
    hero_title: "DIGITAL PRODUCT",
    hero_italic: "studio",
    hero_sub: "Web Development and Marketing Services",
    hero_cta: "Let's work together",
    certifications: "Certifications",
    services: "SERVICES",
    svc1_title: "Web Development",
    svc1_desc: "From design handoff to deployed product. Building fast, accessible, and maintainable web experiences.",
    svc2_title: "Product & UX Design",
    svc2_desc: "Research-driven design from discovery to hi-fi prototypes. Wireframing, user flows, and pixel-perfect Figma deliverables.",
    svc3_title: "Digital Marketing",
    svc3_desc: "Strategic campaigns that connect brand to audience. Data-led planning, performance analytics, and creative execution.",
    studio_label: "Studio",
    about_title: "About LESISU Studio",
    about_title_a: "About ",
    about_title_b: "LESISU Studio",
    about_title_c: "",
    about_body: "LESISU Studio is a small creative studio that blends business thinking with intentional design. Building digital products and brand identities that are user-friendly, and visually memorable.",
    about_founded: "Founded in 2026 by Liisa-Maria Eendla.",
    portfolio: "PORTFOLIO",
    work1_cat: "App Development & UX Design",
    work2_cat: "Social Media",
    contact_title: "Let's work together",
    contact_text1: "Have a project in mind? I'd love to hear about it.",
    contact_text2: "Fill in the form or reach me directly at",
    contact_location: "Tallinn, Estonia · Available for remote projects worldwide",
    form_name: "Name",
    form_email: "Email",
    form_message: "Type your message here",
    form_send: "Send message",
    form_sent: "Message sent ✓",
    nav_services: "SERVICES",
    nav_about: "ABOUT",
    nav_portfolio: "PORTFOLIO",
    nav_contact: "CONTACT",
    footer_home: "Home",
    footer_services: "Services",
    footer_about: "About",
    footer_contact: "Contact",
  },
  ET: {
    tagline: "Veebiarendus & turundus",
    hero_title: "DIGITOOTE",
    hero_italic: "stuudio",
    hero_sub: "Veebiarenduse ja turunduse teenused",
    hero_cta: "Teeme koostööd",
    certifications: "Sertifikaadid",
    services: "TEENUSED",
    svc1_title: "Veebiarendus",
    svc1_desc: "Disainist kuni valmis tooteni. Loome kiireid, ligipääsetavaid ja hooldatavaid veebikeskkondi.",
    svc2_title: "Toote- ja UX-disain",
    svc2_desc: "Uuringupõhine disain avastamisest kuni hi-fi prototüüpideni. Raamistikud, kasutajavood ja pikslitäpsed Figma materjalid.",
    svc3_title: "Digitaalturundus",
    svc3_desc: "Strateegilised kampaaniad, mis ühendavad brändi sihtgrupiga. Andmepõhine planeerimine, tulemusanalüütika ja loominguline teostus.",
    studio_label: "Stuudio",
    about_title: "LESISU Stuudio kohta",
    about_title_a: "",
    about_title_b: "LESISU Stuudio",
    about_title_c: " kohta",
    about_body: "LESISU Stuudio on väike loomestuudio, mis ühendab ärimõtlemist teadliku disainiga. Loome digitaalseid tooteid ja brändide identiteete, mis on kasutajasõbralikud ja visuaalselt meeldejäävad.",
    about_founded: "Asutatud 2026. aastal Liisa-Maria Eendla poolt.",
    portfolio: "PORTFOOLIO",
    work1_cat: "Rakenduse arendus & UX disain",
    work2_cat: "Sotsiaalmeedia",
    contact_title: "Teeme koostööd",
    contact_text1: "Kas sul on projekt plaanis? Räägi mulle sellest.",
    contact_text2: "Täida vorm või võta minuga otse ühendust:",
    contact_location: "Tallinn, Eesti · Saadaval kaugprojektideks üle maailma",
    form_name: "Nimi",
    form_email: "E-post",
    form_message: "Kirjuta oma sõnum siia",
    form_send: "Saada sõnum",
    form_sent: "Sõnum saadetud ✓",
    nav_services: "TEENUSED",
    nav_about: "MEIST",
    nav_portfolio: "PORTFOOLIO",
    nav_contact: "KONTAKT",
    footer_home: "Avaleht",
    footer_services: "Teenused",
    footer_about: "Taust",
    footer_contact: "Kontakt",
  },
};

type Lang = "EN" | "ET";
type T = typeof translations["EN"];

const LangContext = createContext<{ lang: Lang; t: T; setLang: (l: Lang) => void }>({
  lang: "EN",
  t: translations.EN,
  setLang: () => {},
});

const useT = () => useContext(LangContext);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── LinkedIn SVG ───────────────────────────────────────────────────────────
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Meta logo ──────────────────────────────────────────────────────────────
function MetaLogo() {
  return (
    <div className="relative size-[57px]">
      <div className="absolute inset-[42.25%_44.26%_42%_39.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3971 8.97705">
          <path d={svgPaths.p37f04100} fill="#111928" />
        </svg>
      </div>
      <div className="absolute inset-[45.98%_31.06%_41.72%_57.97%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.91524 7.0086">
          <path d={svgPaths.p101a4b80} fill="#111928" />
        </svg>
      </div>
      <div className="absolute inset-[42.82%_22.1%_41.74%_69.68%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.17771 8.79743">
          <path d={svgPaths.p182ea800} fill="#111928" />
        </svg>
      </div>
      <div className="absolute inset-[45.98%_9.52%_41.72%_79.05%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20139 7.00851">
          <path d={svgPaths.p21ce1500} fill="#111928" />
        </svg>
      </div>
      <div className="absolute inset-[41.72%_65.93%_41.72%_9.52%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4658 9.44392">
          <path d={svgPaths.p2bcc7df0} fill="#111928" />
        </svg>
      </div>
    </div>
  );
}

// ── Google logo ────────────────────────────────────────────────────────────
function GoogleLogo() {
  return (
    <div className="relative size-[42px]">
      <div className="absolute inset-[42.03%_6.25%_16.85%_50.9%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 17.2726">
          <path d={svgPaths.p2589f4f0} fill="#4285F4" />
        </svg>
      </div>
      <div className="absolute inset-[58.65%_19.54%_6.25%_11.01%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1668 14.7411">
          <path d={svgPaths.p255d000} fill="#34A853" />
        </svg>
      </div>
      <div className="absolute inset-[30.15%_74.5%_30.36%_6.25%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08329 16.5862">
          <path d={svgPaths.p25017b00} fill="#FBBC05" />
        </svg>
      </div>
      <div className="absolute inset-[6.25%_19.24%_58.65%_11.01%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2919 14.7409">
          <path d={svgPaths.p11c0fd00} fill="#EB4335" />
        </svg>
      </div>
    </div>
  );
}

// ── Navigation ─────────────────────────────────────────────────────────────
function Nav() {
  const { lang, t, setLang } = useT();
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav_services, id: "services" },
    { label: t.nav_about, id: "about" },
    { label: t.nav_portfolio, id: "portfolio" },
    { label: t.nav_contact, id: "contact" },
  ];

  const handleNav = (id: string) => {
    setActive(id);
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#dbd6c3] border-b border-[rgba(26,26,24,0.08)]"
      style={{ boxShadow: "0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.1)" }}
    >
      <div className="nav-container max-w-[1280px] mx-auto h-[72px] flex items-center justify-between px-8 pr-12">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => handleNav("hero")}
          className="h-[70px] w-[68px] flex-shrink-0 overflow-hidden rounded-[2px]"
        >
          <img src={imgLogo} alt="LESISU Studio" className="w-full h-full object-cover" />
        </motion.button>

        {/* Desktop nav links */}
        <div className="nav-links flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNav(item.id)}
              whileHover={{ opacity: 1 }}
              className="relative pb-[4px] flex flex-col items-center cursor-pointer"
            >
              <span
                className="text-[11px] tracking-[1.43px] uppercase transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: active === item.id ? "#1a1a18" : "rgba(26,26,24,0.4)",
                }}
              >
                {item.label}
              </span>
              {active === item.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a18]"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </motion.button>
          ))}

          <div className="w-px h-[14px] bg-[rgba(26,26,24,0.18)]" />

          {/* Language switcher */}
          <div className="flex items-center gap-1.5">
            {(["ET", "EN"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-[10px] text-[rgba(26,26,24,0.25)]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    |
                  </span>
                )}
                <motion.button
                  whileHover={{ opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLang(l)}
                  className="relative pb-[2px] text-[11px] tracking-[1.43px] uppercase cursor-pointer transition-colors duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: lang === l ? "#1a1a18" : "rgba(26,26,24,0.35)",
                  }}
                >
                  {l}
                  {lang === l && (
                    <motion.div
                      layoutId={`lang-${l}`}
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a18]"
                    />
                  )}
                </motion.button>
              </span>
            ))}
          </div>
        </div>

        {/* Hamburger button — hidden on desktop via mobile.css */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-nav-open">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`mobile-nav-item${active === item.id ? " active" : ""}`}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-lang-row">
            {(["ET", "EN"] as const).map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {i > 0 && <span className="mobile-lang-sep">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`mobile-lang-btn${lang === l ? " active" : ""}`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}

// ── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  const { t } = useT();
  return (
    <section id="hero" className="w-full bg-[#fafaf7] pt-[72px] min-h-[1000px] relative overflow-hidden" style={{ scrollMarginTop: "72px" }}>
      {/* Centered text content */}
      <div className="hero-inner max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-8 px-10 min-h-[952px] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65 }}
          className="text-[#1a1a18] leading-[1.05] tracking-[-1.9px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(44px, 5.5vw, 67px)",
          }}
        >
          {t.hero_title} {t.hero_italic}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="text-[#1a1a18] text-[20px] tracking-[1.9px] uppercase"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          {t.tagline}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          whileHover={{ opacity: 0.88 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo("contact")}
          className="hero-cta bg-[#a69c8a] border border-[#dbd6c3] h-[69px] px-8 rounded-[10px] text-[#99004f] text-[19px] tracking-[1.3px] uppercase cursor-pointer min-w-[352px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, boxShadow: "0px 5px 2.5px rgba(0,0,0,0.25)" }}
        >
          {t.hero_cta}
        </motion.button>
      </div>

      {/* LESISU STUDIO logo — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.75, ease: "easeOut" }}
        className="hero-image absolute bottom-[220px] right-[60px] w-[320px] pointer-events-none select-none"
      >
        <img src={imgLogoWhite} alt="LESISU Studio" className="w-full h-auto object-contain" />
      </motion.div>
    </section>
  );
}

// ── Certificate lightbox ───────────────────────────────────────────────────
function CertModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.78)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
    >
      <motion.img
        src={src}
        alt="Certificate"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        style={{
          maxWidth: "90vw", maxHeight: "90vh",
          objectFit: "contain", borderRadius: 6,
          boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: "fixed", top: 20, right: 20,
          width: 44, height: 44, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#fff", fontSize: 18, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        ✕
      </button>
    </motion.div>
  );
}


// ── Services Section ───────────────────────────────────────────────────────
function ServicesSection() {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    { num: "01", title: t.svc1_title, desc: t.svc1_desc },
    { num: "02", title: t.svc2_title, desc: t.svc2_desc },
    { num: "03", title: t.svc3_title, desc: t.svc3_desc },
  ];

  return (
    <section id="services" className="w-full bg-[#fafaf7] border-t border-[#dbd6c3] min-h-[1024px] pt-[122px] pb-16" style={{ scrollMarginTop: "72px" }}>
      <div className="max-w-[1280px] mx-auto px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#1a1a18] text-[57px] tracking-[0.6px] uppercase text-center mb-12"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          {t.services}
        </motion.h2>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="services-grid grid grid-cols-3 gap-0 pt-12"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col items-center relative pb-8"
            >
              <p
                className="text-[#99004f] text-[122px] leading-none tracking-[-1.63px] absolute top-10 pointer-events-none select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {s.num}
              </p>
              <div className="mt-[153px] pt-12 flex flex-col items-center gap-5 text-center relative z-10">
                <h3
                  className="text-[#1a1a18] text-[30px] tracking-[0.38px] uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[rgba(26,26,24,0.65)] text-[20px] leading-[1.7] max-w-[399px]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full bg-[#dbd6c3] border-t border-[rgba(26,26,24,0.15)] h-[92px]">
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-10 pr-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollTo("hero")}
          className="h-[92px] w-[90px] rounded-[2px] overflow-hidden flex-shrink-0 cursor-pointer"
        >
          <img src={imgLogo} alt="LESISU Studio" className="w-full h-full object-cover" />
        </motion.button>

        <p
          className="text-[rgba(26,26,24,0.35)] text-[10px] tracking-[1.2px]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          © 2026 LESISU OÜ
        </p>
      </div>
    </footer>
  );
}

// ── About Section (includes certifications) ────────────────────────────────
function AboutSection() {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: "-60px" });
  const [certImg, setCertImg] = useState<string | null>(null);

  return (
    <>
      <AnimatePresence>
        {certImg && <CertModal src={certImg} onClose={() => setCertImg(null)} />}
      </AnimatePresence>

      <section id="about" ref={ref} className="w-full bg-[#a69c8a] min-h-[1024px] px-12 pt-[133px] pb-16" style={{ scrollMarginTop: "72px" }}>
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[#ede8df] text-[77px] tracking-[0.95px] uppercase text-center mb-14 leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            {t.about_title_a}<span style={{ color: "#99004f" }}>{t.about_title_b}</span>{t.about_title_c}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="about-body-text max-w-[1222px]"
          >
            <p
              className="text-[#fafaf7] text-[29px] leading-[1.16]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              {t.about_body}
            </p>
            <br />
            <p
              className="text-[#fafaf7] text-[24px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontStyle: "italic" }}
            >
              {t.about_founded}
            </p>
          </motion.div>

          {/* Certifications — embedded in About on the same tan background */}
          <div ref={certRef} className="mt-14 pt-10 border-t border-[rgba(26,26,24,0.12)]">
            <div className="certs-container flex items-stretch gap-8 flex-wrap">
              <p
                className="text-[rgba(250,250,247,0.45)] text-[12px] tracking-[0] uppercase min-w-[120px] self-center"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                {t.certifications}
              </p>

              <motion.div
                onClick={() => setCertImg(imgCertMeta)}
                initial={{ opacity: 0, x: -18 }}
                animate={certInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.025, boxShadow: "0 6px 24px rgba(0,0,0,0.18)" }}
                className="bg-[#ede8df] border-[3px] border-[#dbd6c3] rounded-[10px] flex items-start gap-4 py-7 pl-7 pr-3 cursor-pointer transition-shadow"
              >
                <div className="bg-[#fafaf7] h-[54px] w-[60px] rounded-[4px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <MetaLogo />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#1a1a18] text-[15px] tracking-[1.4px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Meta</p>
                  <p className="text-[#1a1a18] text-[16px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>Principles of UX/UI Design</p>
                  <div className="flex items-center gap-3 pt-0.5">
                    <p className="text-[#1a1a18] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>Jan 6, 2026</p>
                    <p className="text-[#2e1ac6] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>LINK</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={() => setCertImg(imgCertGoogle)}
                initial={{ opacity: 0, x: -18 }}
                animate={certInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.22 }}
                whileHover={{ scale: 1.025, boxShadow: "0 6px 24px rgba(0,0,0,0.18)" }}
                className="bg-[#ede8df] border-[3px] border-[#dbd6c3] rounded-[10px] flex items-start gap-4 p-7 cursor-pointer transition-shadow"
              >
                <div className="bg-[#fafaf7] h-[54px] w-[54px] rounded-[6.75px] flex items-center justify-center flex-shrink-0">
                  <GoogleLogo />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#1a1a18] text-[15px] tracking-[1.4px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Google</p>
                  <p className="text-[#1a1a18] text-[16px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>Foundations of User Experience (UX) Design</p>
                  <div className="flex items-center gap-3 pt-0.5">
                    <p className="text-[#1a1a18] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>Jun 24, 2026</p>
                    <p className="text-[#2e1ac6] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>LINK</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Portfolio Section ──────────────────────────────────────────────────────
function PortfolioSection({ onProjectClick }: { onProjectClick: (id: string) => void }) {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const projects = [
    { id: "rentiik", category: t.work1_cat, title: "RENTIIK" },
    { id: "samm-korraga", category: t.work2_cat, title: "SAMM KORRAGA" },
  ];

  return (
    <section id="portfolio" ref={ref} className="w-full bg-[#fafaf7] min-h-[1024px] pt-[123px] pb-16 px-10" style={{ scrollMarginTop: "72px" }}>
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#1a1a18] text-[58px] tracking-[0.64px] uppercase text-center mb-20"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          {t.portfolio}
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="portfolio-cards flex gap-16 flex-wrap justify-center"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              onClick={() => onProjectClick(p.id)}
              className="flex flex-col gap-6 cursor-pointer group"
            >
              <div className="portfolio-img size-[429px] rounded-[10px] overflow-hidden">
                <motion.img
                  src={imgPortfolio}
                  alt={p.title}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className="text-[rgba(26,26,24,0.45)] text-[18px] tracking-[1.93px] uppercase"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  {p.category}
                </p>
                <p
                  className="text-[#1a1a18] text-[28px] tracking-[0.26px] uppercase group-hover:text-[#a69c8a] transition-colors duration-200"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {p.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Contact Section ────────────────────────────────────────────────────────
function ContactSection() {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwq9bPYJTwCMYeCBxohAjSqXXDJwVZY07x-R2f4l6fw5juPDAow-4o1D55lRe_uAj2m/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        }
      );
    } catch {
      // network error — GAS may still have received it
    }
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" ref={ref} className="w-full bg-[#a59c8c] pt-[102px] pb-20 px-10" style={{ scrollMarginTop: "72px" }}>
      <div className="contact-inner max-w-[1280px] mx-auto flex gap-20 items-start flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="contact-col flex-1 min-w-[340px] flex flex-col gap-8 pt-2"
        >
          <h2
            className="contact-heading text-[#fafaf7] text-[72px] tracking-[-0.64px] uppercase leading-none w-[639px]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            {t.contact_title}
          </h2>

          <div className="max-w-[459px]">
            <p
              className="text-[#fafaf7] text-[30px] leading-[1.2] mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.contact_text1}
            </p>
            <p className="text-[#fafaf7] text-[21px] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              {t.contact_text2}{" "}
              <motion.a
                href="mailto:eendlaliisamaria@gmail.com"
                whileHover={{ opacity: 0.75 }}
                className="italic"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, textDecoration: "none", color: "inherit" }}
              >
                eendlaliisamaria@gmail.com
              </motion.a>
            </p>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <motion.a
              href="https://www.linkedin.com/in/liisa-maria-eendla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.18, color: "#0A66C2" }}
              whileTap={{ scale: 0.93 }}
              className="text-[#1a1a18] transition-colors duration-200"
            >
              <LinkedInIcon className="size-[28px]" />
            </motion.a>

            <div className="size-[73px] overflow-hidden">
              <img src={imgLesisuStudio} alt="LESISU Studio" className="w-full h-full object-cover" />
            </div>
          </div>

          <p
            className="text-[#fafaf7] text-[13px] leading-[1.5]"
            style={{ fontFamily: "Barlow, sans-serif", fontWeight: 400 }}
          >
            {t.contact_location}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="contact-col flex-1 min-w-[340px] max-w-[638px] flex flex-col gap-5"
        >
          <motion.input
            type="text"
            placeholder={t.form_name}
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[82px] w-full px-9 text-[#1a1a18] text-[16px] outline-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
          <motion.input
            type="email"
            placeholder={t.form_email}
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[82px] w-full px-9 text-[#1a1a18] text-[16px] outline-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
          <motion.textarea
            placeholder={t.form_message}
            required
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[265px] w-full px-9 py-6 text-[#1a1a18] text-[16px] outline-none resize-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
            style={{ fontFamily: "Inter, sans-serif" }}
          />

          <div className="pt-2">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="bg-[#1a1a18] text-[#fafaf7] h-[62px] rounded-[4px] flex items-center justify-center text-[15px] tracking-[1px] uppercase"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                >
                  {t.form_sent}
                </motion.div>
              ) : (
                <motion.button
                  key="send"
                  type="submit"
                  disabled={sending}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={sending ? {} : { opacity: 0.88 }}
                  whileTap={sending ? {} : { scale: 0.97 }}
                  className="bg-[#e8e3d9] border border-[#dbd6c3] text-[#99004f] h-[69px] w-[352px] rounded-[10px] text-[19px] tracking-[1.3px] uppercase cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, boxShadow: "0px 5px 2.5px rgba(0,0,0,0.25)" }}
                >
                  {sending ? "..." : t.form_send}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("ET");
  const t = translations[lang];
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) ?? null
    : null;
  const selectedIndex = selectedProjectId
    ? PROJECTS.findIndex((p) => p.id === selectedProjectId)
    : -1;

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <div className="min-h-screen bg-[#fafaf7]">
        <Nav />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection onProjectClick={(id) => setSelectedProjectId(id)} />
        <ContactSection />
        <Footer />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProjectId(null)}
            hasNext={selectedIndex < PROJECTS.length - 1}
            hasPrev={selectedIndex > 0}
            onNext={selectedIndex < PROJECTS.length - 1 ? () => setSelectedProjectId(PROJECTS[selectedIndex + 1].id) : undefined}
            onPrev={selectedIndex > 0 ? () => setSelectedProjectId(PROJECTS[selectedIndex - 1].id) : undefined}
          />
        )}
      </AnimatePresence>
    </LangContext.Provider>
  );
}
