"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(() => import("@/components/ui/CodeBlock"), { ssr: false });

const frameworks = [
  { name: "Next.js", version: "16", role: "App Router 기반 리액트 프레임워크, SSG로 빠른 로딩", color: "text-white", bg: "bg-slate-800/60" },
  { name: "React", version: "19", role: "UI 컴포넌트 라이브러리", color: "text-sky-300", bg: "bg-sky-950/30" },
  { name: "TypeScript", version: "5", role: "정적 타입 검사, Props 타입 보장", color: "text-blue-300", bg: "bg-blue-950/30" },
];

const framerFeatures = [
  { feature: "whileInView + viewport.once", usage: "스크롤 진입 시 트리거" },
  { feature: "variants + staggerChildren", usage: "카드 그리드 순차 등장" },
  { feature: "layoutId", usage: "네비게이션 활성 인디케이터 슬라이딩" },
  { feature: "useScroll", usage: "스크롤 진행률 → 프로그레스 바" },
  { feature: "whileHover / whileTap", usage: "hover·클릭 인터랙션" },
];

const otherTools = [
  {
    name: "Lenis v1.3",
    icon: "🌊",
    desc: "부드러운 관성 스크롤",
    detail: "duration: 1.2 · 자연스러운 감속 곡선",
    color: "border-cyan-600/30 bg-cyan-950/20 text-cyan-300",
  },
  {
    name: "tsParticles v3",
    icon: "✨",
    desc: "Hero 섹션 AI 네트워크 파티클",
    detail: "마우스 호버 grab 모드 · SSR 비호환 → dynamic import",
    color: "border-indigo-600/30 bg-indigo-950/20 text-indigo-300",
  },
  {
    name: "react-syntax-highlighter",
    icon: "🖍️",
    desc: "JSON 설정 예시 구문 강조",
    detail: "테마: vscDarkPlus (VS Code 다크)",
    color: "border-orange-600/30 bg-orange-950/20 text-orange-300",
  },
];

const installCode = `npm install framer-motion gsap lenis
npm install @tsparticles/react @tsparticles/slim
npm install react-syntax-highlighter @types/react-syntax-highlighter`;

export default function TechSection() {
  return (
    <section
      id="tech"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #0c0f1a 0%, #061018 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
            Chapter 08
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">사용 기술</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            이 웹 페이지를 구성하는 프레임워크·라이브러리·도구 전체 목록
          </p>
        </motion.div>

        {/* 프레임워크 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-5">프레임워크 / 런타임</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl border border-slate-700/40 ${fw.bg}`}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-xl font-bold ${fw.color}`}>{fw.name}</span>
                  <span className="text-xs text-slate-500 font-mono">v{fw.version}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{fw.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tailwind + Framer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Tailwind CSS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-sky-950/20 border border-sky-700/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎨</span>
              <div>
                <div className="text-white font-bold">Tailwind CSS</div>
                <div className="text-sky-400 text-xs">v4</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">유틸리티 기반 CSS 프레임워크</p>
            <ul className="space-y-2">
              {[
                "@import \"tailwindcss\" 방식 (v4)",
                "@theme 디렉티브로 커스텀 변수 정의",
                "slate, indigo, emerald, violet 색상 팔레트",
                "반응형: sm: / md: / lg: 브레이크포인트",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1 flex-shrink-0" />
                  <span className="font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎬</span>
              <div>
                <div className="text-white font-bold">Framer Motion</div>
                <div className="text-pink-400 text-xs">v12</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <div className="grid grid-cols-2 bg-slate-800/80 px-4 py-2.5">
                <span className="text-slate-400 text-xs font-medium">기능</span>
                <span className="text-slate-400 text-xs font-medium">사용처</span>
              </div>
              {framerFeatures.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="grid grid-cols-2 px-4 py-2.5 border-t border-slate-800/50 hover:bg-slate-800/20 transition-colors"
                >
                  <span className="text-pink-300/80 text-xs font-mono">{row.feature}</span>
                  <span className="text-slate-400 text-xs">{row.usage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 기타 도구 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-5">스크롤 · 파티클 · 코드 표시</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-2xl border ${tool.color}`}
              >
                <div className="text-2xl mb-3">{tool.icon}</div>
                <div className="font-bold text-sm mb-1">{tool.name}</div>
                <div className="text-slate-300 text-xs mb-2">{tool.desc}</div>
                <div className="text-slate-500 text-xs font-mono bg-black/20 rounded-lg p-2 leading-relaxed">
                  {tool.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 전체 패키지 설치 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">전체 패키지 설치</h3>
          <CodeBlock code={installCode} language="bash" />
        </motion.div>
      </div>
    </section>
  );
}
