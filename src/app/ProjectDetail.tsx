import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ExternalLink, ArrowRight, X, ZoomIn, ZoomOut } from "lucide-react";
import imgLogo from "../assets/d6a2072488dae5137762c9dbf8a71c3f144263b9.png";
import imgRentiikHero from "../assets/RENTIIK_hero_pic.png";
import imgRentiikFigma from "../assets/Lõpp versioon-2.png";
import imgRentiikCo2 from "../assets/co_2_landingpage.png";

const detailLabels = {
  EN: {
    back: "Back to Portfolio",
    brief: "Project Brief",
    challenge: "The Challenge",
    outcome: "Outcome",
    year: "Year",
    role: "Role",
    tools: "Tools & Tech",
    viewLive: "View live project",
    allProjects: "All Projects",
    prevProject: "Previous Project",
    nextProject: "Next Project",
    gallery: "Project Gallery",
    addHeroImage: "Add Hero Image",
  },
  ET: {
    back: "Tagasi portfooliosse",
    brief: "Projekti kirjeldus",
    challenge: "Väljakutse",
    outcome: "Tulemus",
    year: "Aasta",
    role: "Roll",
    tools: "Tööriistad",
    viewLive: "Vaata projekti",
    allProjects: "Kõik projektid",
    prevProject: "Eelmine projekt",
    nextProject: "Järgmine projekt",
    gallery: "Projekti galerii",
    addHeroImage: "Lisa hero pilt",
  },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  brief?: string;
  challenge?: string;
  outcome?: string;
  liveUrl?: string;
  heroImage?: string;
  images?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "rentiik",
    title: "RENTIIK",
    category: "Business Development & App Development / UX Design",
    year: "2025",
    role: "Co-Founder, UX Designer & Developer",
    tools: ["Figma", ".NET MAUI", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.rentiik.com",
    heroImage: imgRentiikHero,
    images: [imgRentiikFigma, imgRentiikCo2],
    brief:
      "RENTIIK is a peer-to-peer fashion rental platform based in Estonia, connecting people who want to rent clothing with those who want to earn by listing their own wardrobe items. The goal is to offer a circular-economy alternative to fast fashion and single-use consumption.",
    challenge:
      "Building a two-sided marketplace where both the renter's and the lister's experience feel effortless — establishing trust between strangers, clear pricing, and a simple listing/booking flow. Alongside this, building a mobile app on .NET MAUI that runs smoothly on both Android and iOS from a single codebase.",
    outcome:
      "RENTIIK is currently in pre-launch phase: a bilingual (Estonian/English) landing page with an integrated CO₂ calculator is live at www.rentiik.com, and the waitlist is open. The mobile app design is finished in Figma, with development underway on .NET MAUI.",
  },
  {
    id: "samm-korraga",
    title: "SAMM KORRAGA",
    category: "Social Media",
    year: "2026",
    role: "Social Media Strategist & Designer",
    tools: ["Canva", "Social Media", "Project Management"],
    challenge:
      "Building recognition from scratch in a saturated market, establishing a consistent voice and aesthetic that resonates authentically with the target audience.",
  },
];

function ImageGallery({ images, title, galleryLabel }: { images: string[]; title: string; galleryLabel: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const openLightbox = (src: string) => { setLightbox(src); setZoom(1); };
  const closeLightbox = () => { setLightbox(null); setZoom(1); };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    setZoom((z: number) => Math.min(4, Math.max(0.5, z - e.deltaY * 0.001)));
  };

  return (
    <>
      <div className="mb-16">
        <p
          className="text-[rgba(26,26,24,0.45)] tracking-[2px] uppercase mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
        >
          {galleryLabel}
        </p>
        <div className="grid grid-cols-2 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => openLightbox(src)}
              className="cursor-zoom-in rounded-xl overflow-hidden bg-[#ede8df] flex items-center justify-center group relative"
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-contain max-h-[420px]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-200 drop-shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.88)" }}
          >
            <motion.img
              src={lightbox}
              alt="Full size"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
              onWheel={handleWheel}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center",
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: 8,
                cursor: zoom > 1 ? "zoom-out" : "default",
                transition: "transform 0.1s ease",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
              }}
            />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="fixed top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(4px)" }}
            >
              <X size={18} color="white" />
            </button>

            {/* Zoom controls */}
            <div
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <button
                onClick={(e: { stopPropagation: () => void }) => { e.stopPropagation(); setZoom((z: number) => Math.max(0.5, z - 0.25)); }}
                className="cursor-pointer"
              >
                <ZoomOut size={18} color="white" />
              </button>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)", minWidth: 36, textAlign: "center" }}>
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={(e: { stopPropagation: () => void }) => { e.stopPropagation(); setZoom((z: number) => Math.min(4, z + 0.25)); }}
                className="cursor-pointer"
              >
                <ZoomIn size={18} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface ProjectDetailProps {
  project: Project;
  lang: "EN" | "ET";
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export function ProjectDetail({
  project,
  lang,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ProjectDetailProps) {
  const L = detailLabels[lang];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#fafaf7]"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-[#dbd6c3] border-b border-[rgba(26,26,24,0.08)] drop-shadow-[0px_1.275px_1.913px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1440px] mx-auto px-10 h-[88px] flex items-center justify-between">
          <img src={imgLogo} alt="LESISU Studio" className="h-[70px] w-auto object-contain" />
          <button onClick={onClose} className="flex items-center gap-3 cursor-pointer group">
            <ArrowLeft
              size={18}
              className="text-[#1a1a18] transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span
              className="text-[#1a1a18] tracking-[1.8px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px" }}
            >
              {L.back}
            </span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-10 py-16">

        {/* Project Header */}
        <div className="mb-12">
          <p
            className="text-[rgba(26,26,24,0.45)] tracking-[2px] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "14px" }}
          >
            {project.category}
          </p>
          <h1
            className="text-[#1a1a18] uppercase leading-none tracking-[-1px]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(64px, 8vw, 110px)",
            }}
          >
            {project.title}
          </h1>
        </div>

        {/* Hero Image */}
        {project.heroImage ? (
          <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden mb-16">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-full aspect-[16/7] rounded-2xl border-2 border-dashed border-[#a69c8a] bg-[#ede8df] flex flex-col items-center justify-center mb-16 relative overflow-hidden">
            <div
              className="text-[#99004f] mb-2 tracking-[2px] uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "80px",
                lineHeight: 1,
                opacity: 0.12,
              }}
            >
              {project.title}
            </div>
            <p
              className="text-[rgba(26,26,24,0.4)] tracking-[2px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px" }}
            >
              {L.addHeroImage}
            </p>
          </div>
        )}

        {/* Two-column: Brief + Stats */}
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div className="col-span-2 flex flex-col gap-8">
            {project.brief && (
              <div>
                <p
                  className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
                >
                  {L.brief}
                </p>
                <p
                  className="text-[#1a1a18] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px" }}
                >
                  {project.brief}
                </p>
              </div>
            )}

            {project.challenge && (
              <div>
                <p
                  className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
                >
                  {L.challenge}
                </p>
                <p
                  className="text-[rgba(26,26,24,0.65)] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px" }}
                >
                  {project.challenge}
                </p>
              </div>
            )}

            {project.outcome && (
              <div>
                <p
                  className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
                >
                  {L.outcome}
                </p>
                <p
                  className="text-[rgba(26,26,24,0.65)] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px" }}
                >
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Stats sidebar */}
          <div className="col-span-1">
            <div className="sticky top-28 flex flex-col gap-8">
              <div className="border-t border-[#dbd6c3] pt-6">
                <p
                  className="text-[rgba(26,26,24,0.35)] tracking-[1.5px] uppercase mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px" }}
                >
                  {L.year}
                </p>
                <p
                  className="text-[#1a1a18]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                >
                  {project.year}
                </p>
              </div>

              <div className="border-t border-[#dbd6c3] pt-6">
                <p
                  className="text-[rgba(26,26,24,0.35)] tracking-[1.5px] uppercase mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px" }}
                >
                  {L.role}
                </p>
                <p
                  className="text-[#1a1a18] leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                >
                  {project.role}
                </p>
              </div>

              <div className="border-t border-[#dbd6c3] pt-6">
                <p
                  className="text-[rgba(26,26,24,0.35)] tracking-[1.5px] uppercase mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px" }}
                >
                  {L.tools}
                </p>
                <p
                  className="text-[#1a1a18] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                >
                  {project.tools.join(", ")}
                </p>
              </div>

              {project.liveUrl && (
                <div className="border-t border-[#dbd6c3] pt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <span
                      className="text-[#1a1a18] underline underline-offset-4 decoration-[rgba(26,26,24,0.3)] group-hover:decoration-[#1a1a18] transition-all duration-200"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                    >
                      {L.viewLive}
                    </span>
                    <ExternalLink size={13} className="text-[rgba(26,26,24,0.5)] group-hover:text-[#1a1a18] transition-colors duration-200" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <ImageGallery images={project.images} title={project.title} galleryLabel={L.gallery} />
        )}

        {/* Next / Prev Navigation */}
        <div className="border-t border-[#dbd6c3] pt-10 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="flex items-center gap-3 group disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="text-[#1a1a18] transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span
              className="text-[#1a1a18] tracking-[1.5px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px" }}
            >
              {L.prevProject}
            </span>
          </button>

          <button onClick={onClose} className="cursor-pointer">
            <span
              className="text-[rgba(26,26,24,0.4)] tracking-[1.5px] uppercase hover:text-[#1a1a18] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px" }}
            >
              {L.allProjects}
            </span>
          </button>

          <button
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center gap-3 group disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <span
              className="text-[#1a1a18] tracking-[1.5px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px" }}
            >
              {L.nextProject}
            </span>
            <ArrowRight
              size={18}
              className="text-[#1a1a18] transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
