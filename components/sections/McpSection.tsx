"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(() => import("@/components/ui/CodeBlock"), { ssr: false });

const mcpConfig = `{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "ghp_xxxx" }
    }
  }
}`;

const steps = [
  {
    num: "01",
    title: "설치 (Install)",
    desc: "MCP 서버를 실행 가능한 상태로 만들기",
    detail: "npx로 서버 실행 또는 로컬 실행",
    gradientFrom: "#2563eb",
    gradientTo: "#60a5fa",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-950/30",
  },
  {
    num: "02",
    title: "연결 (Connect)",
    desc: "Claude가 시작 시 MCP 서버를 자동 인식",
    detail: "config 읽기 → 서버 프로세스 실행 → 도구 목록 수신",
    gradientFrom: "#7c3aed",
    gradientTo: "#a78bfa",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-950/30",
  },
  {
    num: "03",
    title: "사용 (Use)",
    desc: "자연어로 요청하면 자동 도구 호출",
    detail: '"Button 컴포넌트 추가해줘" → shadcn MCP 자동 호출',
    gradientFrom: "#059669",
    gradientTo: "#34d399",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-950/30",
  },
];

const capabilities = [
  { type: "읽기", examples: ["파일 읽기", "문서 조회", "DB 검색"], icon: "📖", color: "text-sky-400", borderColor: "border-sky-500/30", bgColor: "bg-sky-950/20" },
  { type: "실행", examples: ["CLI 명령", "API 호출", "컴포넌트 설치"], icon: "⚡", color: "text-amber-400", borderColor: "border-amber-500/30", bgColor: "bg-amber-950/20" },
  { type: "쓰기", examples: ["파일 생성/수정", "DB INSERT", "PR 생성"], icon: "✏️", color: "text-emerald-400", borderColor: "border-emerald-500/30", bgColor: "bg-emerald-950/20" },
];

export default function McpSection() {
  return (
    <section id="mcp" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-4">
            Chapter 02
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">MCP 서버</h2>
          <p className="text-slate-500 text-base mb-3">Model Context Protocol</p>
          <p className="text-slate-300 text-lg max-w-2xl">
            Claude가 외부 도구·서비스와 연결되는 표준 규격
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-6 rounded-2xl ${step.bgColor} border ${step.borderColor}`}
            >
              {i < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center bg-slate-900 rounded-full text-slate-600 text-xs border border-slate-800">
                  →
                </div>
              )}
              <div
                className="text-4xl font-bold mb-3"
                style={{
                  background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.num}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{step.desc}</p>
              <p className="text-slate-500 text-xs font-mono bg-slate-900/70 rounded-lg p-3 leading-relaxed">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-4">설정 예시</h3>
          <CodeBlock code={mcpConfig} language="json" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.type}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl ${cap.bgColor} border ${cap.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-3xl mb-3">{cap.icon}</div>
              <div className={`text-xl font-bold mb-4 ${cap.color}`}>{cap.type}</div>
              <ul className="space-y-2.5">
                {cap.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
