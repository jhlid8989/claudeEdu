"use client";
import { motion } from "framer-motion";

const teamAgents = [
  { name: "Researcher Agent", role: "요구사항 분석", color: "border-yellow-600/50 bg-yellow-950/30 text-yellow-300" },
  { name: "Coder Agent", role: "코드 구현", color: "border-blue-600/50 bg-blue-950/30 text-blue-300" },
  { name: "Reviewer Agent", role: "코드 리뷰", color: "border-purple-600/50 bg-purple-950/30 text-purple-300" },
  { name: "Tester Agent", role: "테스트 실행", color: "border-emerald-600/50 bg-emerald-950/30 text-emerald-300" },
];

const taskManagerFeatures = [
  "큰 작업을 작은 태스크로 분해",
  "각 태스크를 어느 Agent에게 줄지 결정",
  "완료/실패/대기 상태 추적",
  "의존성 관리 (A 끝나야 B 시작)",
];

export default function AgentSection() {
  return (
    <section id="agent" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-4">
            Chapter 04
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Sub-agent / Agent Team
          </h2>
          <p className="text-slate-500 text-base">Task Manager</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <h3 className="text-violet-400 font-bold text-lg mb-2">Sub-agent</h3>
            <p className="text-slate-500 text-sm mb-5">
              메인 AI가 특정 작업을 위임하는 전문화된 하위 AI
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-violet-900/30 border border-violet-700/30 text-center text-sm text-violet-300 font-medium">
                메인 Claude
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                <span className="flex-1 h-px bg-slate-800" />
                위임
                <span className="flex-1 h-px bg-slate-800" />
              </div>
              {["코드 작성 전담", "테스트 전담", "문서화 전담"].map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 text-center"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <h3 className="text-blue-400 font-bold text-lg mb-2">Agent Team</h3>
            <p className="text-slate-500 text-sm mb-5">
              여러 Sub-agent가 협력해서 하나의 큰 목표를 달성하는 구조
            </p>
            <div className="text-center text-xs text-slate-600 mb-3">목표: "새 기능 개발"</div>
            <div className="space-y-2">
              {teamAgents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  className={`flex justify-between items-center p-2.5 rounded-lg border ${agent.color} text-xs`}
                >
                  <span className="font-medium">{agent.name}</span>
                  <span className="text-slate-500">{agent.role}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center text-slate-600 text-xs mt-3">↓ 최종 결과물 통합</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <h3 className="text-emerald-400 font-bold text-lg mb-2">Task Manager</h3>
            <p className="text-slate-500 text-sm mb-5">
              Agent Team이 해야 할 일의 목록과 순서, 상태를 관리하는 시스템
            </p>
            <div className="space-y-3">
              {taskManagerFeatures.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-emerald-400 text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-400 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800"
        >
          <h3 className="text-lg font-bold text-white mb-8 text-center">세 개념의 관계도 — 오케스트라 비유</h3>
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
            <div className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-white font-bold text-center mb-1">Task Manager</div>
              <div className="text-slate-500 text-xs text-center mb-3">전체 오케스트라 지휘자</div>
              <div className="flex justify-center gap-2">
                {["Task1", "Task2", "Task3", "Task4"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-slate-700 text-slate-400 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-slate-600 text-sm">↓ 태스크 배분</div>
            <div className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700/50">
              <div className="text-white font-semibold text-center mb-3">Agent Team — 연주자들의 집합</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {teamAgents.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className={`p-2 rounded-lg border ${a.color} text-xs text-center`}
                  >
                    <div className="font-medium mb-0.5">{a.name.replace(" Agent", "")}</div>
                    <div className="text-slate-500 text-[10px]">{a.role}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
