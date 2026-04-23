"use client";
import { motion } from "framer-motion";

const useCaseComparisons = [
  { situation: "앱의 사용자 데이터 저장", supabase: true, notion: false },
  { situation: "팀 PRD 문서 작성", supabase: false, notion: true },
  { situation: "로그인 기능 구현", supabase: true, notion: false },
  { situation: "스프린트 계획 관리", supabase: false, notion: true },
  { situation: "실시간 채팅 기능", supabase: true, notion: false },
  { situation: "회의록 정리", supabase: false, notion: true },
  { situation: "파일 업로드 기능", supabase: true, notion: false },
  { situation: "위키/지식베이스", supabase: false, notion: true },
];

const notionUses = ["PRD 작성", "스프린트 관리", "팀 위키", "회의록"];
const supabaseUses = ["PRD에 정의된 기능 구현", "실제 데이터 저장/조회", "앱 백엔드 인프라", "유저 인증, API"];

export default function SupabaseSection() {
  return (
    <section
      id="supabase"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #052e16 0%, #042f2e 50%, #0f172a 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
            Chapter 06
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Supabase vs Notion</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            개발자를 위한 백엔드 인프라 vs 팀을 위한 지식/업무 관리 도구
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-700/30 hover:border-emerald-500/50 transition-colors"
          >
            <div className="text-4xl mb-4">🟢</div>
            <h3 className="text-emerald-400 font-bold text-2xl mb-3">Supabase</h3>
            <p className="text-white text-lg mb-1">
              개발자를 위한 <strong className="text-emerald-300">백엔드 인프라</strong>
            </p>
            <p className="text-slate-500 text-sm">DB + Auth + API + Storage</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-700/30 hover:border-slate-500/50 transition-colors"
          >
            <div className="text-4xl mb-4">📓</div>
            <h3 className="text-slate-200 font-bold text-2xl mb-3">Notion</h3>
            <p className="text-white text-lg mb-1">
              팀을 위한 <strong className="text-slate-100">지식/업무 관리 도구</strong>
            </p>
            <p className="text-slate-500 text-sm">문서 + DB + 협업</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-5">용도 비교</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800/60">
            <div className="grid grid-cols-3 bg-slate-800/70 px-6 py-3">
              <span className="text-slate-400 text-sm font-medium">상황</span>
              <span className="text-emerald-400 font-medium text-center text-sm">🟢 Supabase</span>
              <span className="text-slate-300 font-medium text-center text-sm">📓 Notion</span>
            </div>
            {useCaseComparisons.map((row, i) => (
              <motion.div
                key={row.situation}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="grid grid-cols-3 px-6 py-3.5 border-t border-slate-800/50 hover:bg-slate-800/20 transition-colors"
              >
                <span className="text-slate-300 text-sm">{row.situation}</span>
                <div className="flex justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05, type: "spring" }}
                    className="text-lg"
                  >
                    {row.supabase ? "✅" : "❌"}
                  </motion.span>
                </div>
                <div className="flex justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.05, type: "spring" }}
                    className="text-lg"
                  >
                    {row.notion ? "✅" : "❌"}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-slate-900/60 border border-slate-700/40"
        >
          <h3 className="text-xl font-bold text-white mb-6">함께 쓰는 게 일반적 — 스타트업의 전형적인 조합</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                <span>📓</span> Notion에서...
              </div>
              <ul className="space-y-2.5">
                {notionUses.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-emerald-400 font-medium mb-4 flex items-center gap-2">
                <span>🟢</span> Supabase에서...
              </div>
              <ul className="space-y-2.5">
                {supabaseUses.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
