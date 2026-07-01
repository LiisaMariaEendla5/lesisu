import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import imgLogo from "../assets/d6a2072488dae5137762c9dbf8a71c3f144263b9.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  brief: string;
  challenge: string;
  outcome: string;
}

export const PROJECTS: Project[] = [
  {
    id: "rentiik",
    title: "RENTIIK",
    category: "App Development & UX Design",
    year: "2025",
    role: "UX Designer & Developer",
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    brief:
      "A rental platform designed to simplify how people find and manage short-term rentals. The goal was to create a seamless, intuitive experience for both renters and hosts.",
    challenge:
      "Designing a complex booking flow that felt effortless, while balancing the needs of two very different user groups — guests searching for spaces and hosts managing listings.",
    outcome:
      "Delivered a full-stack MVP with a 4.8/5 usability score in testing. The streamlined onboarding reduced drop-off by 40% compared to the previous prototype.",
  },
  {
    id: "samm-korraga",
    title: "SAMM KORRAGA",
    category: "Social Media",
    year: "2025",
    role: "Social Media Strategist & Designer",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Meta Business Suite"],
    brief:
      "A full social media identity and content strategy for an emerging lifestyle brand. Covering content planning, visual direction, and community growth.",
    challenge:
      "Building brand recognition from scratch in a saturated market, establishing a consistent voice and aesthetic that resonates authentically with the target audience.",
    outcome:
      "Grew the brand's Instagram following by 3x in 6 months with a 7% average engagement rate — significantly above the industry average of 1–3%.",
  },
];

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export function ProjectDetail({
  project,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ProjectDetailProps) {
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
          <button
            onClick={onClose}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <ArrowLeft
              size={18}
              className="text-[#1a1a18] transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span
              className="text-[#1a1a18] tracking-[1.8px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px" }}
            >
              Back to Portfolio
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

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-[16/7] rounded-2xl border-2 border-dashed border-[#a69c8a] bg-[#ede8df] flex flex-col items-center justify-center mb-16 relative overflow-hidden">
          <div className="text-center">
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
              Add Hero Image
            </p>
          </div>
          <div className="absolute top-5 left-5 bg-[#a69c8a] rounded px-3 py-1">
            <span
              className="text-[#fafaf7] tracking-[1.5px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px" }}
            >
              Hero Image
            </span>
          </div>
        </div>

        {/* Two-column: Brief + Stats */}
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div className="col-span-2">
            <p
              className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
            >
              Project Brief
            </p>
            <p
              className="text-[#1a1a18] leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px" }}
            >
              {project.brief}
            </p>

            <p
              className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
            >
              The Challenge
            </p>
            <p
              className="text-[rgba(26,26,24,0.65)] leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px" }}
            >
              {project.challenge}
            </p>

            <p
              className="text-[#a69c8a] tracking-[2px] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
            >
              Outcome
            </p>
            <p
              className="text-[rgba(26,26,24,0.65)] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px" }}
            >
              {project.outcome}
            </p>
          </div>

          {/* Stats sidebar */}
          <div className="col-span-1">
            <div className="sticky top-28 flex flex-col gap-8">
              <div className="border-t border-[#dbd6c3] pt-6">
                <p
                  className="text-[rgba(26,26,24,0.35)] tracking-[1.5px] uppercase mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px" }}
                >
                  Year
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
                  Role
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
                  Tools & Tech
                </p>
                <p
                  className="text-[#1a1a18] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                >
                  {project.tools.join(", ")}
                </p>
              </div>

              <div className="border-t border-[#dbd6c3] pt-6">
                <button className="flex items-center gap-2 group cursor-pointer">
                  <span
                    className="text-[#1a1a18] underline underline-offset-4 decoration-[rgba(26,26,24,0.3)] group-hover:decoration-[#1a1a18] transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
                  >
                    View live project
                  </span>
                  <ExternalLink size={13} className="text-[rgba(26,26,24,0.5)] group-hover:text-[#1a1a18] transition-colors duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Placeholder */}
        <div className="mb-16">
          <p
            className="text-[rgba(26,26,24,0.45)] tracking-[2px] uppercase mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px" }}
          >
            Project Gallery
          </p>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <ImagePlaceholder label="Full Width Screenshot" aspect="aspect-[4/3]" index={1} />
            <ImagePlaceholder label="Detail View" aspect="aspect-[4/3]" index={2} />
          </div>
          <ImagePlaceholder label="Process / Behind the Scenes" aspect="aspect-[16/6]" index={3} fullWidth />
        </div>

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
              Previous Project
            </span>
          </button>

          <button onClick={onClose} className="cursor-pointer">
            <span
              className="text-[rgba(26,26,24,0.4)] tracking-[1.5px] uppercase hover:text-[#1a1a18] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px" }}
            >
              All Projects
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
              Next Project
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

function ImagePlaceholder({
  label,
  aspect,
  index,
  fullWidth = false,
}: {
  label: string;
  aspect: string;
  index: number;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`${aspect} rounded-xl border-2 border-dashed border-[#a69c8a] bg-[#ede8df] flex flex-col items-center justify-center relative overflow-hidden${fullWidth ? " w-full" : ""}`}
    >
      <div
        className="text-[rgba(26,26,24,0.08)] select-none"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "96px",
          lineHeight: 1,
        }}
      >
        {String(index).padStart(2, "0")}
      </div>
      <p
        className="text-[rgba(26,26,24,0.35)] tracking-[1.5px] uppercase mt-2"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px" }}
      >
        {label}
      </p>
      <div className="absolute top-4 left-4 bg-[#a69c8a] rounded px-2 py-0.5">
        <span
          className="text-[#fafaf7] tracking-[1px] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "10px" }}
        >
          Image {index}
        </span>
      </div>
    </div>
  );
}
