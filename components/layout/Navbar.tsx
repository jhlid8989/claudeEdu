"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "홈" },
  { id: "prd", label: "PRD" },
  { id: "mcp", label: "MCP" },
  { id: "mvp", label: "MVP" },
  { id: "agent", label: "에이전트" },
  { id: "shrimp", label: "Task Manager" },
  { id: "supabase", label: "DB/협업" },
  { id: "concept", label: "개념 지도" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-0.5 px-3 py-2 rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 cursor-pointer ${
            activeSection === section.id ? "text-white" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {activeSection === section.id && (
            <motion.span
              layoutId="activeSection"
              className="absolute inset-0 rounded-full bg-indigo-600"
              style={{ zIndex: -1 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
            />
          )}
          {section.label}
        </button>
      ))}
    </motion.nav>
  );
}
