import Link from "next/link";
import { SparklesIcon2 } from "@/components/icons/GeneralIcons";
import { BuildingIcon, RocketIcon, RobotIcon } from "@/components/icons/SectionIcons";

const RocketIconSection = RocketIcon;
import OverviewSection from "@/components/legalblock/OverviewSection";
import AdvisorBlockSection from "@/components/legalblock/AdvisorBlockSection";
import OpportunityFormSection from "@/components/legalblock/OpportunityFormSection";
import AnalysisProcessSection from "@/components/legalblock/AnalysisProcessSection";
import DocumentGenerationSection from "@/components/legalblock/DocumentGenerationSection";
import TechnicalModulesSection from "@/components/legalblock/TechnicalModulesSection";
import LegalFlowSection from "@/components/legalblock/LegalFlowSection";
import DispatchLogicSection from "@/components/legalblock/DispatchLogicSection";
import TokenizationLogicSection from "@/components/legalblock/TokenizationLogicSection";
import GovernanceSection from "@/components/legalblock/GovernanceSection";

export default function LegalBlockPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Premium Hero */}
      <div className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-12 shadow-2xl shadow-violet-500/50">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        
        <div className="relative text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-2">
            <SparklesIcon2 className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">
              Plateforme Premium
            </span>
          </div>
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl">
              <BuildingIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white">
              LEGALBLOCK
            </h1>
          </div>
          <p className="mx-auto mb-8 flex items-center justify-center gap-3 max-w-3xl text-xl text-white/90">
            <RocketIcon className="h-6 w-6 text-white" />
            <span>Plateforme d'automatisation juridique complète pour la tokenisation d'actifs réels</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/legalblock/new-opportunity"
              className="group inline-flex items-center space-x-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-violet-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <RocketIconSection className="h-6 w-6 text-violet-600" />
              <span>Créer une nouvelle opportunité</span>
            </Link>
            <Link
              href="/legalblock/advisor"
              className="group inline-flex items-center space-x-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-white/20"
            >
              <RobotIcon className="h-6 w-6 text-white" />
              <span>AdvisorBlock</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-20">
        <OverviewSection />
        <AdvisorBlockSection />
        <OpportunityFormSection />
        <AnalysisProcessSection />
        <DocumentGenerationSection />
        <TechnicalModulesSection />
        <LegalFlowSection />
        <DispatchLogicSection />
        <TokenizationLogicSection />
        <GovernanceSection />
      </div>
    </div>
  );
}

