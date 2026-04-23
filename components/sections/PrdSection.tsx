"use client";
import { motion } from "framer-motion";

const prdComponents = [
  { num: "01", label: "배경/목적", question: "왜 만드는가?", example: "회원가입 이탈률 43% → 소셜 로그인으로 해결", icon: "🎯" },
  { num: "02", label: "대상 사용자", question: "누가 쓰는가?", example: "30대 직장인, 모바일 신규 유저", icon: "👥" },
  { num: "03", label: "성공 지표", question: "성공을 어떻게 측정?", example: "가입 완료율 57%→70%, 소요시간 3분→1분", icon: "📊" },
  { num: "04", label: "기능 요구사항", question: "무엇을 만드는가?", example: "Must/Should/Nice로 우선순위 구분", icon: "⚙️" },
  { num: "05", label: "범위 제외", question: "무엇을 안 하는가?", example: "페이스북 로그인은 다음 분기", icon: "🚫" },
  { num: "06", label: "기능 명세", question: "구체적으로 어떻게?", example: "플로우, 예외처리 케이스 상세 기술", icon: "📝" },
  { num: "07", label: "UX/UI 요구사항", question: "화면은 어떻게?", example: "Figma 링크, 반응형 여부, 접근성", icon: "🎨" },
  { num: "08", label: "일정/의존성", question: "언제까지? 뭐가 필요?", example: "디자인 1주, 개발 2~3주, QA 4주차", icon: "📅" },
];

const comparisons = [
  { bad: '"빠르게 로딩되어야 한다"', good: '"첫 화면 LCP 2초 이내"' },
  { bad: '"사용하기 쉬워야 한다"', good: '"튜토리얼 없이 3분 내 첫 작업 완료"' },
  { bad: '"에러 처리 잘 하기"', good: '"네트워크 오류 시 재시도 버튼 + 메시지 표시"' },
  { bad: "해결책부터 기술", good: "문제 정의 → 해결책 순서로 작성" },
];

const problemRoles = [
  { role: "기획자", msg: '"버튼 누르면 팝업 띄워주세요"', color: "text-purple-400" },
  { role: "개발자", msg: "어떤 버튼? 조건은? 데이터는?", color: "text-blue-400" },
  { role: "디자이너", msg: "크기는? 모바일은? 닫기 버튼은?", color: "text-emerald-400" },
  { role: "QA", msg: "실패하면? 예외 케이스는?", color: "text-amber-400" },
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrdSection() {
  return (
    <section id="prd" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            Chapter 01
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            PRD
          </h2>
          <p className="text-slate-500 text-base mb-3">Product Requirements Document</p>
          <p className="text-slate-300 text-lg max-w-2xl">
            "우리가 무엇을 왜 만드는가"를 팀 전체가 공유하기 위한 문서
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40"
        >
          <h3 className="text-white font-semibold mb-4">PRD가 없으면 발생하는 일</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {problemRoles.map(({ role, msg, color }) => (
              <div key={role} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className={`text-sm font-semibold mb-2 ${color}`}>{role}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{msg}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {prdComponents.map((comp) => (
            <motion.div
              key={comp.num}
              variants={cardItem}
              className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{comp.icon}</span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-900/30 px-2 py-0.5 rounded-full">
                  {comp.num}
                </span>
              </div>
              <h4 className="text-white font-semibold mb-1.5 group-hover:text-indigo-300 transition-colors">
                {comp.label}
              </h4>
              <p className="text-xs text-slate-500 mb-2">{comp.question}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{comp.example}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">좋은 PRD vs 나쁜 PRD</h3>
          <div className="space-y-3">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/30 flex items-start gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span className="text-sm text-red-300">{row.bad}</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/30 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-sm text-emerald-300">{row.good}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
