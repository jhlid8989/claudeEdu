"use client";
import { motion } from "framer-motion";

const devItems = [
  {
    label: "Task Manager",
    sub: "Shrimp (장기) / Claude (즉석)",
    sectionId: "shrimp",
    color: "border-amber-600/50 bg-amber-950/30 text-amber-300",
  },
  {
    label: "Agent Team",
    sub: "Sub-agent들이 각자 역할 분담",
    sectionId: "agent",
    color: "border-cyan-600/50 bg-cyan-950/30 text-cyan-300",
  },
  {
    label: "MCP 서버",
    sub: "shadcn / Supabase / Notion MCP",
    sectionId: "mcp",
    color: "border-teal-600/50 bg-teal-950/30 text-teal-300",
  },
  {
    label: "인프라 선택",
    sub: "Supabase (백엔드) / Notion (협업)",
    sectionId: "supabase",
    color: "border-emerald-600/50 bg-emerald-950/30 text-emerald-300",
  },
];

function Arrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center origin-top"
    >
      <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-slate-700" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-slate-600">
        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export default function ConceptMapSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="concept"
      className="py-24 min-h-screen flex items-center"
      style={{ background: "radial-gradient(ellipse at center top, #1e1b4b 0%, #020617 65%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4">
            전체 개념 연결 지도
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">개념 연결 지도</h2>
          <p className="text-slate-400">모든 개념이 어떻게 연결되는지 한눈에 — 클릭하면 해당 섹션으로 이동</p>
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("prd")}
            className="w-full max-w-sm px-8 py-5 rounded-2xl bg-blue-900/40 border border-blue-600/40 text-blue-300 font-bold text-lg cursor-pointer text-center hover:bg-blue-900/60 hover:border-blue-500/60 transition-all"
          >
            PRD
            <div className="text-xs font-normal text-blue-400/70 mt-1">무엇을 만들지 정의</div>
          </motion.button>

          <Arrow delay={0.2} />

          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("mvp")}
            className="w-full max-w-sm px-8 py-5 rounded-2xl bg-violet-900/40 border border-violet-600/40 text-violet-300 font-bold text-lg cursor-pointer text-center hover:bg-violet-900/60 hover:border-violet-500/60 transition-all"
          >
            MVP
            <div className="text-xs font-normal text-violet-400/70 mt-1">그 중 지금 만들 것 선택</div>
          </motion.button>

          <Arrow delay={0.45} />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full"
          >
            <div className="text-center text-slate-500 text-sm font-medium mb-5 tracking-wider uppercase">
              개발 실행
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {devItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo(item.sectionId)}
                  className={`p-4 rounded-xl border ${item.color} text-left cursor-pointer transition-all`}
                >
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs opacity-60 mt-1 leading-relaxed">{item.sub}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-24 pb-8"
        >
          <div className="inline-flex items-center gap-2 text-slate-600 text-sm">
            <span className="w-8 h-px bg-slate-700" />
            본 문서는 Claude 교육 세션 정리본입니다
            <span className="w-8 h-px bg-slate-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
