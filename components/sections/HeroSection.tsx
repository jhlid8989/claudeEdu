"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

const title = "클로드 교육 핵심 개념";
const tags = ["PRD", "MCP 서버", "MVP", "Sub-agent", "Task Manager", "Supabase", "Notion"];

export default function HeroSection() {
  const scrollToContent = () => {
    document.getElementById("prd")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #1e1b4b 0%, #020617 60%)" }}
    >
      <ParticleBackground />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 60%, #020617 100%)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Claude 교육 세션 정리본
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.04 }}
              className={char === " " ? "inline-block w-3 md:w-5" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          AI 개발의 핵심 — PRD, MCP, MVP, 에이전트, 인프라를 한눈에
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + i * 0.07 }}
              className="px-3 py-1 rounded-full text-sm bg-slate-800/80 text-slate-300 border border-slate-700/60 backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer mx-auto"
        >
          <span className="text-xs uppercase tracking-widest">스크롤</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
