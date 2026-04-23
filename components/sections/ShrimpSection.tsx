"use client";
import { motion } from "framer-motion";

const comparisons = [
  { label: "정체", shrimp: "MCP 서버 기반 외부 태스크 관리 도구", claude: "Claude 자체 내장 태스크 관리 기능" },
  { label: "설치", shrimp: "MCP 서버로 별도 설치 필요", claude: "별도 설치 없음, Claude에 내장" },
  { label: "저장 방식", shrimp: "파일/DB에 영구 저장", claude: "대화 컨텍스트 내에서만 유지" },
  { label: "세션 간 유지", shrimp: "✅ 세션이 끊겨도 태스크 유지", claude: "❌ 대화 종료 시 초기화" },
  { label: "태스크 분해", shrimp: "자동으로 세밀하게 분해", claude: "Claude가 판단해서 분해" },
  { label: "의존성 관리", shrimp: "명시적 의존성 그래프 관리", claude: "암묵적으로 순서 파악" },
  { label: "진행 상태 추적", shrimp: "실시간 상태 대시보드", claude: "대화로 상태 확인" },
  { label: "협업", shrimp: "여러 Agent가 동시 접근 가능", claude: "단일 Claude 인스턴스" },
  { label: "복잡한 프로젝트", shrimp: "✅ 장기/대형 프로젝트에 적합", claude: "⚠️ 단기/단순 작업에 적합" },
  { label: "사용 난이도", shrimp: "설정 필요, 학습 곡선 있음", claude: "바로 사용 가능" },
  { label: "주요 사용 사례", shrimp: "장기 개발 프로젝트, 팀 협업", claude: "즉석 작업 분해, 빠른 실행" },
];

const useCases = {
  shrimp: [
    "며칠~몇 주짜리 장기 프로젝트",
    "여러 Claude 인스턴스가 협업",
    "태스크 완료 여부를 지속 추적해야 할 때",
    "팀 전체가 진행 상황을 공유해야 할 때",
  ],
  claude: [
    "지금 당장 빠르게 처리할 작업",
    "단일 대화 세션 내 완료되는 작업",
    "간단한 작업 분해가 필요할 때",
  ],
};

export default function ShrimpSection() {
  return (
    <section
      id="shrimp"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #0c0a09 0%, #0f172a 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-4">
            Chapter 05
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Task Manager 비교</h2>
          <div className="flex items-center gap-5">
            <span className="text-2xl">🦐 Shrimp</span>
            <span className="text-slate-600">vs</span>
            <span className="text-2xl">🤖 Claude</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-800 mb-16"
        >
          <div className="grid grid-cols-3 bg-slate-800/80 px-4 md:px-6 py-4">
            <span className="text-slate-400 font-medium text-sm">항목</span>
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-amber-400 font-semibold text-center text-sm"
            >
              🦐 Shrimp
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-indigo-400 font-semibold text-center text-sm"
            >
              🤖 Claude
            </motion.span>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="grid grid-cols-3 px-4 md:px-6 py-3.5 border-t border-slate-800/50 hover:bg-slate-800/20 transition-colors group"
            >
              <span className="text-slate-400 font-medium text-xs md:text-sm group-hover:text-slate-300 transition-colors">
                {row.label}
              </span>
              <span className="text-slate-300 text-xs md:text-sm text-center px-1">{row.shrimp}</span>
              <span className="text-slate-300 text-xs md:text-sm text-center px-1">{row.claude}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-amber-950/20 border border-amber-700/30"
          >
            <h3 className="text-amber-400 font-bold text-lg mb-4">🦐 Shrimp 선택 시</h3>
            <ul className="space-y-2.5">
              {useCases.shrimp.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-700/30"
          >
            <h3 className="text-indigo-400 font-bold text-lg mb-4">🤖 Claude 선택 시</h3>
            <ul className="space-y-2.5">
              {useCases.claude.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
