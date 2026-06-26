import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import imgLesisuStudio from "figma:asset/3ecb6bee002a445a06f7b073134159c613f21f7e.png";
import imgLogo from "figma:asset/d6a2072488dae5137762c9dbf8a71c3f144263b9.png";
import imgPortfolio from "figma:asset/89e932ef73814d628bef260faf2bbf0177efee97.png";
import svgPaths from "../imports/UserDashboard/svg-qbu93pp18k";

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

// ── LinkedIn SVG (replaces Instagram) ──────────────────────────────────────
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Meta logo (certifications) ─────────────────────────────────────────────
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

// ── Google logo (certifications) ───────────────────────────────────────────
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
  const [active, setActive] = useState("hero");
  const [lang, setLang] = useState<"EN" | "ET">("EN");

  const navItems = [
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNav = (id: string) => {
    setActive(id);
    scrollTo(id);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#dbd6c3] border-b border-[rgba(26,26,24,0.08)]"
      style={{ boxShadow: "0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-[1280px] mx-auto h-[72px] flex items-center justify-between px-8 pr-12">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => handleNav("hero")}
          className="h-[70px] w-[68px] flex-shrink-0 overflow-hidden rounded-[2px]"
        >
          <img src={imgLogo} alt="LESISU Studio" className="w-full h-full object-cover" />
        </motion.button>

        {/* Nav links */}
        <div className="flex items-center gap-8">
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

          {/* Divider */}
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
      </div>
    </motion.nav>
  );
}

// ── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="hero" className="w-full bg-[#a69c8a] pt-[72px]">
      <div className="bg-[#a69c8a] max-w-[1280px] mx-auto flex items-center gap-12 px-8 py-16 min-h-[630px]">
        {/* Left */}
        <div className="flex-1 max-w-[540px] flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="text-[#a69c8a] text-[13px] tracking-[1.5px] uppercase mb-6"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "rgba(166,156,138,1)" }}
          >
            <span style={{ color: "#f5f0e8" }}>Web development &amp; Marketing</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.65 }}
            className="text-[#1a1a18] leading-none tracking-[-1.5px] mb-8"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 5.5vw, 67.74px)",
            }}
          >
            DIGITAL PRODUCT{" "}
            <em style={{ fontStyle: "italic" }}>studio</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.55 }}
            className="text-[rgba(26,26,24,0.65)] text-[17px] leading-[1.7] mb-10 max-w-[500px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Web Development and Marketing Services
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55 }}
            whileHover={{ scale: 1.03, backgroundColor: "#ccc8b0" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="bg-[#dbd6c3] h-[54px] px-8 rounded-[8px] text-[rgba(26,26,24,0.66)] text-[15px] tracking-[1px] uppercase cursor-pointer transition-colors duration-200 self-start min-w-[272px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
          >
            Let&apos;s work together
          </motion.button>
        </div>

        {/* Right: studio image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: "easeOut" }}
          className="flex-shrink-0 size-[506px] overflow-hidden"
        >
          <img src={imgLesisuStudio} alt="LESISU Studio" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

// ── Certifications ─────────────────────────────────────────────────────────
function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[#fafaf7] border-t-2 border-b-2 border-[rgba(26,26,24,0.08)] py-10"
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center gap-8 flex-wrap">
        <p
          className="text-[#a69c8a] text-[12px] tracking-[0] uppercase min-w-[120px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        >
          Certifications
        </p>

        {/* Meta cert */}
        <motion.a
          href="https://www.coursera.org/account/accomplishments"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 24px rgba(0,0,0,0.1)" }}
          className="bg-[#ede8df] border-[3px] border-[#dbd6c3] rounded-[10px] flex items-start gap-4 py-7 pl-7 pr-3 cursor-pointer transition-shadow no-underline"
        >
          <div className="bg-[#fafaf7] h-[54px] w-[60px] rounded-[4px] flex items-center justify-center flex-shrink-0 overflow-hidden">
            <MetaLogo />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#1a1a18] text-[15px] tracking-[1.4px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Meta</p>
            <p className="text-[#1a1a18] text-[16px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>Principles of UX/UI Design</p>
            <div className="flex items-center gap-3 pt-0.5">
              <p className="text-[#1a1a18] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>Jan 6, 2026</p>
              <span className="text-[#2e1ac6] text-[9px] tracking-[1.26px] uppercase hover:underline" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>LINK</span>
            </div>
          </div>
        </motion.a>

        {/* Google cert */}
        <motion.a
          href="https://www.coursera.org/account/accomplishments"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 24px rgba(0,0,0,0.1)" }}
          className="bg-[#ede8df] border-[3px] border-[#dbd6c3] rounded-[10px] flex items-start gap-4 p-7 cursor-pointer transition-shadow no-underline"
        >
          <div className="bg-[#fafaf7] h-[54px] w-[54px] rounded-[6.75px] flex items-center justify-center flex-shrink-0">
            <GoogleLogo />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#1a1a18] text-[15px] tracking-[1.4px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Google</p>
            <p className="text-[#1a1a18] text-[16px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>Foundations of User Experience (UX) Design</p>
            <div className="flex items-center gap-3 pt-0.5">
              <p className="text-[#1a1a18] text-[9px] tracking-[1.26px] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>Jun 24, 2026</p>
              <span className="text-[#2e1ac6] text-[9px] tracking-[1.26px] uppercase hover:underline" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>LINK</span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

// ── Services Section ───────────────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      num: "01",
      title: "Web Development",
      desc: "From design handoff to deployed product. Building fast, accessible, and maintainable web experiences.",
    },
    {
      num: "02",
      title: "Product & UX Design",
      desc: "Research-driven design from discovery to hi-fi prototypes. Wireframing, user flows, and pixel-perfect Figma deliverables.",
    },
    {
      num: "03",
      title: "Digital Marketing",
      desc: "Strategic campaigns that connect brand to audience. Data-led planning, performance analytics, and creative execution.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#fafaf7] border-t border-[#dbd6c3] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#1a1a18] text-[45px] tracking-[0.5px] uppercase text-center mb-16"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          SERVICES
        </motion.h2>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-0"
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
                className="text-[#dbd6c3] text-[96px] leading-none tracking-[-1.28px] absolute top-14 pointer-events-none select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {s.num}
              </p>
              <div className="mt-[120px] pt-10 flex flex-col items-center gap-4 text-center relative z-10">
                <h3
                  className="text-[#1a1a18] text-[24px] tracking-[0.3px] uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[rgba(26,26,24,0.65)] text-[16px] leading-[1.7] max-w-[313px]"
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
  const links = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="w-full bg-[#dbd6c3] border-t border-[rgba(26,26,24,0.15)] h-[80px]">
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-8 pr-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollTo("hero")}
          className="h-[46px] w-[46px] rounded-[2px] overflow-hidden flex-shrink-0 cursor-pointer"
        >
          <img src={imgLogo} alt="LESISU Studio" className="w-full h-full object-cover" />
        </motion.button>

        <div className="flex items-center gap-8">
          {links.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              whileHover={{ color: "#1a1a18" }}
              className="text-[rgba(26,26,24,0.4)] text-[10px] tracking-[1.4px] uppercase transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

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

// ── About Section ──────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="w-full bg-[#a69c8a] py-16 px-12 min-h-[573px]">
      <div className="max-w-[1280px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#f5f0e8] text-[13px] tracking-[1px] uppercase mb-16"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          Studio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[#ede8df] text-[64px] tracking-[0.79px] uppercase text-center mb-12 leading-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          About LESISU Studio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="max-w-[1015px]"
        >
          <p
            className="text-[#fafaf7] text-[24px] leading-[1.15]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            LESISU Studio is a small creative studio that blends business thinking with intentional design. Building digital products and brand identities that are user-friendly, and visually memorable.
          </p>
          <br />
          <p
            className="text-[#fafaf7] text-[20px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Founded in 2026 by Liisa-Maria Eendla.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Portfolio Section ──────────────────────────────────────────────────────
function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const projects = [
    { category: "App Development & UX Design", title: "RENTIIK" },
    { category: "Social Media", title: "SAMM KORRAGA" },
  ];

  return (
    <section id="portfolio" ref={ref} className="w-full bg-white py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#1a1a18] text-[45px] tracking-[0.5px] uppercase text-center mb-16"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          PORTFOLIO
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-8 flex-wrap justify-center"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-5 cursor-pointer group"
            >
              <div className="size-[334px] rounded-[8px] overflow-hidden">
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
                  className="text-[rgba(26,26,24,0.45)] text-[14px] tracking-[1.5px] uppercase"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  {p.category}
                </p>
                <p
                  className="text-[#1a1a18] text-[22px] tracking-[0.2px] uppercase group-hover:text-[#a69c8a] transition-colors duration-200"
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" ref={ref} className="w-full bg-[#a59c8c] py-20 px-8">
      <div className="max-w-[1280px] mx-auto flex gap-16 items-start flex-wrap">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex-1 min-w-[340px] flex flex-col gap-6 pt-2"
        >
          <h2
            className="text-[#1a1a18] text-[56px] tracking-[-0.5px] uppercase leading-none w-[501px]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            Let&apos;s work together
          </h2>

          <div className="max-w-[360px]">
            <p
              className="text-[#fafaf7] text-[24px] leading-[1.2] mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <p className="text-[#fafaf7] text-[17px] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              Fill in the form or reach me directly at{" "}
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

          {/* LinkedIn link + studio image */}
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
            Tallinn, Estonia · Available for remote projects worldwide
          </p>
        </motion.div>

        {/* Right column: form */}
        <motion.form
          initial={{ opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex-1 min-w-[340px] max-w-[540px] flex flex-col gap-4"
        >
          <motion.input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[64px] w-full px-7 text-[#1a1a18] text-[16px] outline-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[64px] w-full px-7 text-[#1a1a18] text-[16px] outline-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
          <motion.textarea
            placeholder="Type your message here"
            required
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            whileFocus={{ scale: 1.01 }}
            className="bg-[#f3f3f0] h-[208px] w-full px-7 py-5 text-[#1a1a18] text-[16px] outline-none resize-none focus:ring-2 focus:ring-[#1a1a18] transition-all placeholder:text-[#1a1a18]"
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
                  Message sent ✓
                </motion.div>
              ) : (
                <motion.button
                  key="send"
                  type="submit"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#2d2d2a" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#1a1a18] text-[#fafaf7] px-10 py-5 rounded-[4px] text-[15px] tracking-[1px] uppercase cursor-pointer"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                >
                  Send message
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
  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <Nav />
      <HeroSection />
      <CertificationsSection />
      <ServicesSection />
      <Footer />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
