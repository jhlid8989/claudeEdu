import Navbar from "@/components/layout/Navbar";
import ProgressBar from "@/components/layout/ProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import PrdSection from "@/components/sections/PrdSection";
import McpSection from "@/components/sections/McpSection";
import MvpSection from "@/components/sections/MvpSection";
import AgentSection from "@/components/sections/AgentSection";
import ShrimpSection from "@/components/sections/ShrimpSection";
import SupabaseSection from "@/components/sections/SupabaseSection";
import PlanSection from "@/components/sections/PlanSection";
import TechSection from "@/components/sections/TechSection";
import DeploySection from "@/components/sections/DeploySection";
import ConceptMapSection from "@/components/sections/ConceptMapSection";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <PrdSection />
        <McpSection />
        <MvpSection />
        <AgentSection />
        <ShrimpSection />
        <SupabaseSection />
        <PlanSection />
        <TechSection />
        <DeploySection />
        <ConceptMapSection />
      </main>
    </>
  );
}
