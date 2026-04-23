"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(() => import("@/components/ui/CodeBlock"), { ssr: false });

const vercelBenefits = [
  { icon: "🔁", text: "GitHub 연동 → push 시 자동 재배포" },
  { icon: "🌐", text: "CDN + HTTPS 자동 적용" },
  { icon: "🆓", text: "무료 플랜으로 개인 프로젝트 충분히 운영" },
  { icon: "⚡", text: "정적 사이트(SSG) → 무료 플랜 제한 거의 없음" },
];

const gitCode = `git init
git add .
git commit -m "feat: 클로드 교육 웹 페이지 초기 구현"
git remote add origin https://github.com/[계정명]/claude-education.git
git branch -M main
git push -u origin main`;

const cliCode = `npm install -g vercel
vercel          # 초기 설정 + 프리뷰 배포
vercel --prod   # 프로덕션 배포`;

const buildCode = `npm run build   # 프로덕션 빌드 생성
npm run start   # http://localhost:3000 에서 확인`;

const freePlan = [
  { item: "프로젝트 수", value: "무제한" },
  { item: "대역폭", value: "월 100GB" },
  { item: "커스텀 도메인", value: "무제한" },
  { item: "HTTPS", value: "자동 적용" },
];

export default function DeploySection() {
  return (
    <section
      id="deploy"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #061018 0%, #030d0a 100%)" }}
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
            Chapter 09
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">배포 방법</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Vercel로 GitHub 연동 배포 — push 한 번으로 자동 재배포
          </p>
        </motion.div>

        {/* Vercel 선택 이유 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-5">Vercel 선택 이유</h3>
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-700/30 mb-4">
            <div className="text-emerald-400 text-sm font-medium mb-4">
              Vercel = Next.js 공식 개발사 운영 플랫폼
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vercelBenefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span className="text-lg">{b.icon}</span>
                  {b.text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 방법 1: GitHub 연동 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                1
              </span>
              <h3 className="text-lg font-semibold text-white">GitHub 연동 배포 (권장)</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-xs mb-2">① GitHub 저장소 생성 및 push</p>
                <CodeBlock code={gitCode} language="bash" />
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-2">② Vercel 프로젝트 연결</p>
                <div className="rounded-2xl border border-slate-800 bg-[#0a0f1e] p-5">
                  <div className="space-y-2">
                    {[
                      "vercel.com 접속 → Add New Project",
                      "GitHub 저장소 선택",
                      "Framework Preset: Next.js (자동 감지)",
                      "Deploy 클릭",
                      "배포 완료 → .vercel.app 도메인 발급",
                    ].map((step, i) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.07 }}
                        className="flex items-center gap-3 text-xs text-slate-300"
                      >
                        <span className="text-emerald-500 font-mono w-4">{i + 1}.</span>
                        {step}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-xs">
                이후 main 브랜치에 push 할 때마다 자동 재배포됩니다.
              </p>
            </div>
          </motion.div>

          {/* 방법 2: CLI + 빌드 검증 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                2
              </span>
              <h3 className="text-lg font-semibold text-white">Vercel CLI 배포 (빠른 방법)</h3>
            </div>
            <CodeBlock code={cliCode} language="bash" />

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-400 text-sm font-medium">⚠️ 로컬 빌드 검증 (배포 전 필수)</span>
              </div>
              <CodeBlock code={buildCode} language="bash" />
            </div>
          </motion.div>
        </div>

        {/* 무료 플랜 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">무료 플랜 제한</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800 max-w-md">
            <div className="grid grid-cols-2 bg-slate-800/80 px-5 py-3">
              <span className="text-slate-400 text-xs font-medium">항목</span>
              <span className="text-slate-400 text-xs font-medium">무료 플랜</span>
            </div>
            {freePlan.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="grid grid-cols-2 px-5 py-3 border-t border-slate-800/50 hover:bg-slate-800/20 transition-colors"
              >
                <span className="text-slate-400 text-sm">{row.item}</span>
                <span className="text-emerald-400 text-sm font-medium">{row.value}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            이 프로젝트는 정적 사이트(SSG)로 빌드되므로 무료 플랜으로 충분히 운영 가능합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
