"use client";
import { motion } from "framer-motion";

const pageSections = [
  { num: "0", name: "Hero", effect: "tsParticles AI 네트워크 배경, 글자별 stagger 애니메이션" },
  { num: "1", name: "PRD", effect: "8개 카드 그리드 슬라이드인, 좋은/나쁜 PRD 비교" },
  { num: "2", name: "MCP 서버", effect: "3단계 플로우 카드, JSON 코드블록 구문 강조" },
  { num: "3", name: "MVP", effect: "배달 앱 예시 테이블, 결정 기준 다이어그램" },
  { num: "4", name: "Sub-agent / Agent Team", effect: "3개 개념 카드, 관계도 시각화" },
  { num: "5", name: "Task Manager 비교", effect: "Shrimp vs Claude 11개 항목 테이블" },
  { num: "6", name: "Supabase vs Notion", effect: "용도 비교 테이블, 체크/X 스케일인 애니메이션" },
  { num: "7", name: "개념 연결 지도", effect: "인터랙티브 플로우 다이어그램, 클릭 시 섹션 이동" },
];

const commonUI = [
  { label: "상단 고정 네비게이션", desc: "현재 섹션 인디케이터 (spring 슬라이딩)" },
  { label: "스크롤 프로그레스 바", desc: "화면 상단 3px, 인디고→에메랄드 그라디언트" },
  { label: "부드러운 스크롤", desc: "Lenis 관성 스크롤" },
  { label: "다크 테마", desc: "섹션별 다른 배경색 (8가지)" },
];

const implementOrder = [
  { step: "01", title: "프로젝트 초기화", desc: "create-next-app (TypeScript + Tailwind + App Router)" },
  { step: "02", title: "패키지 설치", desc: "framer-motion, lenis, tsparticles, react-syntax-highlighter" },
  { step: "03", title: "공통 레이아웃", desc: "LenisProvider, Navbar, ProgressBar, globals.css" },
  { step: "04", title: "Hero 섹션", desc: "파티클 배경 + 타이틀 stagger 애니메이션" },
  { step: "05", title: "컨텐츠 섹션 1~6", desc: "섹션별 순서대로 구현" },
  { step: "06", title: "개념 연결 지도", desc: "인터랙티브 플로우 + 앵커 링크" },
  { step: "07", title: "빌드 검증", desc: "npm run build (TypeScript 오류 없음 확인)" },
];

const dirTree = `claude_education/
├── app/
│   ├── layout.tsx        # Lenis 스크롤 초기화, 메타데이터
│   ├── page.tsx          # 전체 섹션 조합
│   └── globals.css       # Tailwind + 커스텀 스크롤바
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # 고정 네비게이션
│   │   └── ProgressBar.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── PrdSection.tsx
│   │   └── ...
│   └── ui/
│       ├── ParticleBackground.tsx
│       └── CodeBlock.tsx
└── lib/
    └── lenis-provider.tsx`;

export default function PlanSection() {
  return (
    <section
      id="plan"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #0f0a1e 0%, #0c0f1a 100%)" }}
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
            Chapter 07
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">구현 계획</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            교육요약.md 6개 챕터를 시각적으로 풍부한 단일 랜딩 페이지로 변환
          </p>
        </motion.div>

        {/* 페이지 구조 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-5">페이지 구조 (8개 섹션)</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <div className="grid grid-cols-[40px_140px_1fr] bg-slate-800/80 px-5 py-3">
              <span className="text-slate-400 text-xs font-medium">#</span>
              <span className="text-slate-400 text-xs font-medium">섹션</span>
              <span className="text-slate-400 text-xs font-medium">주요 효과</span>
            </div>
            {pageSections.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="grid grid-cols-[40px_140px_1fr] px-5 py-3.5 border-t border-slate-800/50 hover:bg-slate-800/20 transition-colors"
              >
                <span className="text-violet-500 font-mono text-xs font-bold">{s.num}</span>
                <span className="text-white text-xs md:text-sm font-medium">{s.name}</span>
                <span className="text-slate-400 text-xs md:text-sm">{s.effect}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 공통 UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-5">공통 UI 요소</h3>
            <div className="space-y-3">
              {commonUI.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-violet-950/20 border border-violet-700/20"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">{item.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 구현 순서 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-xl font-semibold text-white mb-5">구현 순서</h3>
            <div className="space-y-3">
              {implementOrder.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-slate-800/30 transition-colors"
                >
                  <span className="text-violet-500 font-mono text-xs font-bold w-6 flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <div className="text-white text-sm font-medium">{item.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 디렉토리 구조 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">디렉토리 구조</h3>
          <div className="rounded-2xl border border-slate-800 bg-[#0a0f1e] p-6 overflow-x-auto">
            <pre className="text-slate-300 text-xs md:text-sm font-mono leading-relaxed whitespace-pre">
              {dirTree}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
