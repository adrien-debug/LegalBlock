"use client";

import { useState } from "react";
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

type TabId = "overview" | "advisor" | "process" | "technical" | "governance";

interface Tab {
  id: TabId;
  label: string;
  icon?: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "advisor", label: "AdvisorBlock" },
  { id: "process", label: "Process & Flow" },
  { id: "technical", label: "Technical Modules" },
  { id: "governance", label: "Governance" },
];

export default function LegalBlockPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Tabs Navigation - Horizontal at top */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 overflow-x-auto rounded-2xl bg-white/80 p-2 shadow-lg backdrop-blur-sm dark:bg-slate-800/80">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                  : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === "overview" && (
          <div className="space-y-20">
            <OverviewSection />
            <OpportunityFormSection />
          </div>
        )}

        {activeTab === "advisor" && (
          <div className="space-y-20">
            <AdvisorBlockSection />
          </div>
        )}

        {activeTab === "process" && (
          <div className="space-y-20">
            <AnalysisProcessSection />
            <DocumentGenerationSection />
            <LegalFlowSection />
            <DispatchLogicSection />
            <TokenizationLogicSection />
          </div>
        )}

        {activeTab === "technical" && (
          <div className="space-y-20">
            <TechnicalModulesSection />
          </div>
        )}

        {activeTab === "governance" && (
          <div className="space-y-20">
            <GovernanceSection />
          </div>
        )}
      </div>
    </div>
  );
}

