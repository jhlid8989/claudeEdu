"use client";
import { motion } from "framer-motion";

const deliveryFeatures = [
  { feature: "음식 주문", included: true, reason: "핵심 기능" },
  { feature: "결제", included: true, reason: "없으면 서비스 불가" },
  { feature: "실시간 배달 추적", included: false, reason: "전화로 대체 가능" },
  { feature: "리뷰/평점", included: false, reason: "검증 후 추가" },
  { feature: "쿠폰/이벤트", included: false, reason: "나중에" },
];

export default function MvpSection() {
  return (
    <section
      id="mvp"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-4">
            Chapter 03
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">MVP</h2>
          <p className="text-slate-500 text-base mb-3">Minimum Viable Product</p>
          <p className="text-slate-300 text-lg max-w-2xl">
            "가장 적은 기능으로 가장 빠르게 시장 반응을 검증하는 첫 번째 제품"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-red-950/30 border border-red-700/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">❌</span>
              <h3 className="text-red-300 font-semibold text-lg">잘못된 이해</h3>
            </div>
            <p className="text-white font-medium mb-2">완벽한 제품의 축소판</p>
            <p className="text-slate-500 text-sm leading-relaxed">기능을 다 만들되 퀄리티를 낮춤</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-700/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-emerald-300 font-semibold text-lg">올바른 이해</h3>
            </div>
            <p className="text-white font-medium mb-2">핵심 가설을 검증할 수 있는 최소 단위</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              "사람들이 이 문제를 해결하려고 돈을 낼까?"에 답하는 것
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 rounded-2xl bg-slate-900/60 border border-slate-700/50"
        >
          <h3 className="text-xl font-bold text-white mb-6">MVP 결정 기준</h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 p-5 rounded-xl bg-slate-800 border border-slate-700 text-center">
              <p className="text-slate-300">이 기능이 없으면</p>
              <p className="text-violet-400 font-bold text-lg mt-1">핵심 가치를 전달할 수 없는가?</p>
            </div>
            <div className="flex flex-row md:flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-900 border border-emerald-700 text-emerald-300 text-sm font-medium">
                  YES
                </span>
                <span className="text-slate-400 text-sm">→ MVP에 포함</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-red-900 border border-red-700 text-red-300 text-sm font-medium">
                  NO
                </span>
                <span className="text-slate-400 text-sm">→ MVP에서 제외</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-4">실제 예시 — 배달 앱 MVP</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-700/50">
            <div className="grid grid-cols-3 bg-slate-800/80 px-6 py-3">
              <span className="text-slate-400 text-sm font-medium">기능</span>
              <span className="text-slate-400 text-sm font-medium text-center">포함 여부</span>
              <span className="text-slate-400 text-sm font-medium">이유</span>
            </div>
            {deliveryFeatures.map((feature, i) => (
              <motion.div
                key={feature.feature}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`grid grid-cols-3 px-6 py-4 border-t border-slate-800/50 hover:bg-slate-800/30 transition-colors ${
                  feature.included ? "bg-emerald-950/10" : ""
                }`}
              >
                <span className="text-slate-300 font-medium">{feature.feature}</span>
                <div className="flex justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                      feature.included
                        ? "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50"
                        : "bg-slate-800 text-slate-500 border border-slate-700/50"
                    }`}
                  >
                    {feature.included ? "✓ Must" : "✗ 제외"}
                  </motion.span>
                </div>
                <span className="text-slate-500 text-sm">{feature.reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-blue-950/30 border border-blue-700/30"
          >
            <div className="text-3xl mb-3">📋</div>
            <h4 className="text-blue-300 font-bold text-lg mb-2">PRD</h4>
            <p className="text-slate-400 text-sm">전체 제품의 설계도 (큰 그림)</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-2xl bg-violet-950/30 border border-violet-700/30"
          >
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="text-violet-300 font-bold text-lg mb-2">MVP</h4>
            <p className="text-slate-400 text-sm">PRD 중에서 지금 당장 만들 핵심만 추린 것</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
