"use client";

import { useState } from "react";
import { 
  CheckIcon,
  DocumentIcon
} from "@/components/icons/GeneralIcons";

interface Opportunity {
  id: string;
  assetName: string;
  assetType: string;
  assetValue: number;
  currency: string;
  location: string;
  ownerName: string;
  status: "pending" | "analyzing" | "completed" | "error";
}

interface AnalysisResult {
  recommendedJurisdiction: {
    name: string;
    code: string;
    score: number;
    reasoning: string;
    advantages: string[];
    disadvantages: string[];
  };
  riskAnalysis: {
    overall: "low" | "medium" | "high";
    kyc: "passed" | "pending" | "failed";
    aml: "passed" | "pending" | "failed";
    sanctions: "passed" | "pending" | "failed";
    regulatory: "compliant" | "warning" | "non-compliant";
    risks: Array<{
      type: string;
      level: "low" | "medium" | "high";
      description: string;
      mitigation: string;
    }>;
  };
  taxAnalysis: {
    jurisdiction: string;
    corporateTax: string;
    capitalGains: string;
    withholdingTax: string;
    recommendations: string[];
  };
  structureRecommendation: {
    type: string;
    description: string;
    documents: string[];
  };
  documents: Array<{
    name: string;
    status: "generated" | "pending" | "required";
    type: string;
  }>;
}

const mockOpportunities: Opportunity[] = [
  {
    id: "OPP-001",
    assetName: "Luxury Villa in Dubai Marina",
    assetType: "real-estate",
    assetValue: 5000000,
    currency: "USD",
    location: "Dubai, UAE",
    ownerName: "John Doe",
    status: "completed",
  },
  {
    id: "OPP-002",
    assetName: "Gold Mining Concession",
    assetType: "mining",
    assetValue: 10000000,
    currency: "USD",
    location: "West Africa",
    ownerName: "Jane Smith",
    status: "analyzing",
  },
];

const mockAnalysis: AnalysisResult = {
  recommendedJurisdiction: {
    name: "RAK ICC",
    code: "RAK_ICC",
    score: 92,
    reasoning: "Ideal for real estate assets in Dubai. Favorable tax regime, DLD compliance, and international recognition.",
    advantages: [
      "0% tax regime on income",
      "DLD compliance for real estate",
      "Reduced incorporation costs",
      "International recognition",
    ],
    disadvantages: [
      "Less recognized than Delaware for US investors",
      "English documentation required",
    ],
  },
  riskAnalysis: {
    overall: "low",
    kyc: "passed",
    aml: "passed",
    sanctions: "passed",
    regulatory: "compliant",
    risks: [
      {
        type: "Regulatory",
        level: "low",
        description: "DLD compliance required for real estate in Dubai",
        mitigation: "Use of a registered DLD agent",
      },
      {
        type: "Tax",
        level: "low",
        description: "Tax declaration in the owner's country of origin",
        mitigation: "Consultation with local tax expert",
      },
    ],
  },
  taxAnalysis: {
    jurisdiction: "RAK ICC",
    corporateTax: "0%",
    capitalGains: "0%",
    withholdingTax: "0%",
    recommendations: [
      "SPV structure for tax isolation",
      "Distribution via tax-exempt dividends",
      "No withholding tax on distributions",
    ],
  },
  structureRecommendation: {
    type: "SPV (Special Purpose Vehicle)",
    description: "Optimal structure to isolate the asset and facilitate tokenization",
    documents: [
      "Articles of Association",
      "Memorandum of Association",
      "Operating Agreement",
      "Share Purchase Agreement",
      "Tokenization Agreement",
    ],
  },
  documents: [
    { name: "Articles of Association", status: "generated", type: "corporate" },
    { name: "Operating Agreement", status: "generated", type: "corporate" },
    { name: "Tokenization Agreement", status: "pending", type: "tokenization" },
    { name: "KYC Report", status: "generated", type: "compliance" },
    { name: "Risk Assessment", status: "generated", type: "compliance" },
  ],
};

type AnalysisTabId = "jurisdiction" | "risk" | "tax" | "structure";

export default function AdvisorCockpit() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<"opportunities" | "analysis" | "documents">("opportunities");
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTabId>("jurisdiction");

  const handleAnalyze = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    // Simuler l'analyse
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setActiveTab("analysis");
    }, 1500);
  };

  const getStatusColor = (status: Opportunity["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "analyzing":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "error":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const getRiskColor = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Premium Header */}
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 backdrop-blur-sm dark:from-violet-900/30 dark:to-purple-900/30">
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            ADVISORBLOCK - Legal AI Copilot
          </span>
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
          Legal Analysis & Recommendations
        </h1>
      </div>

      {/* Main Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 overflow-x-auto rounded-2xl bg-white/80 p-2 shadow-lg backdrop-blur-sm dark:bg-slate-800/80">
          <button
            onClick={() => setActiveTab("opportunities")}
            className={`group relative whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "opportunities"
                ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
            }`}
          >
            Opportunities
          </button>
          <button
            onClick={() => setActiveTab("analysis")}
            disabled={!analysis}
            className={`group relative whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "analysis"
                ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                : analysis
                ? "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                : "cursor-not-allowed text-slate-400 dark:text-slate-600"
            }`}
          >
            Analysis
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`group relative whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "documents"
                ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
            }`}
          >
            <span className="flex items-center space-x-2">
              <DocumentIcon className="h-4 w-4" />
              <span>Documents</span>
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === "opportunities" && (
          <div className="space-y-4">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Opportunities Pending Analysis
            </h2>
            {mockOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="rounded-2xl border-2 border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {opp.assetName}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                          opp.status
                        )}`}
                      >
                        {opp.status === "completed"
                          ? "Analyzed"
                          : opp.status === "analyzing"
                          ? "Analyzing"
                          : "Pending"}
                      </span>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-400 md:grid-cols-4">
                      <div>
                        <span className="font-semibold">Type:</span> {opp.assetType}
                      </div>
                      <div>
                        <span className="font-semibold">Value:</span> {opp.assetValue.toLocaleString()} {opp.currency}
                      </div>
                      <div>
                        <span className="font-semibold">Location:</span> {opp.location}
                      </div>
                      <div>
                        <span className="font-semibold">Owner:</span> {opp.ownerName}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAnalyze(opp)}
                    disabled={opp.status === "analyzing"}
                    className={`ml-4 flex items-center space-x-2 rounded-xl px-6 py-3 font-semibold text-white transition-all ${
                      opp.status === "analyzing"
                        ? "cursor-not-allowed bg-slate-400"
                        : "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-500/50 hover:scale-105 hover:shadow-xl"
                    }`}
                  >
                    <span>{opp.status === "analyzing" ? "Analyzing..." : "Analyze"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "analysis" && analysis && selectedOpportunity && (
          <div className="space-y-8">
            {/* Analysis Sub-Tabs */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 overflow-x-auto rounded-xl bg-white/50 p-2 backdrop-blur-sm dark:bg-slate-800/50">
                <button
                  onClick={() => setActiveAnalysisTab("jurisdiction")}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeAnalysisTab === "jurisdiction"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                  }`}
                >
                  Jurisdiction
                </button>
                <button
                  onClick={() => setActiveAnalysisTab("risk")}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeAnalysisTab === "risk"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                  }`}
                >
                  Risk Analysis
                </button>
                <button
                  onClick={() => setActiveAnalysisTab("tax")}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeAnalysisTab === "tax"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                  }`}
                >
                  Tax Analysis
                </button>
                <button
                  onClick={() => setActiveAnalysisTab("structure")}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeAnalysisTab === "structure"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                  }`}
                >
                  Structure
                </button>
              </div>
            </div>

            {/* Jurisdiction Recommendation */}
            {activeAnalysisTab === "jurisdiction" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Jurisdiction Recommendation
                </h2>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-4 text-white shadow-lg shadow-violet-500/50">
                  <div className="text-3xl font-bold">{analysis.recommendedJurisdiction.score}</div>
                  <div className="text-sm opacity-90">Score</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {analysis.recommendedJurisdiction.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {analysis.recommendedJurisdiction.reasoning}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <h4 className="mb-2 font-semibold text-emerald-600 dark:text-emerald-400">
                    Advantages
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {analysis.recommendedJurisdiction.advantages.map((adv, idx) => (
                      <li key={idx}>• {adv}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <h4 className="mb-2 font-semibold text-amber-600 dark:text-amber-400">
                    Disadvantages
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {analysis.recommendedJurisdiction.disadvantages.map((dis, idx) => (
                      <li key={idx}>• {dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            )}

            {/* Risk Analysis */}
            {activeAnalysisTab === "risk" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Risk Analysis
                </h2>
              </div>
              <div className="mb-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Overall Risk
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getRiskColor(
                      analysis.riskAnalysis.overall
                    )}`}
                  >
                    {analysis.riskAnalysis.overall === "low"
                      ? "Low"
                      : analysis.riskAnalysis.overall === "medium"
                      ? "Medium"
                      : "High"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    KYC
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.kyc === "passed"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.kyc === "passed" ? "Passed" : "Pending"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    AML
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.aml === "passed"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.aml === "passed" ? "Passed" : "Pending"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Compliance
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.regulatory === "compliant"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.regulatory === "compliant" ? "Compliant" : "Warning"}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {analysis.riskAnalysis.risks.map((risk, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{risk.type}</h4>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getRiskColor(
                          risk.level
                        )}`}
                      >
                        {risk.level === "low" ? "Low" : risk.level === "medium" ? "Medium" : "High"}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                      {risk.description}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Mitigation: {risk.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Tax Analysis */}
            {activeAnalysisTab === "tax" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Tax Analysis
                </h2>
              </div>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Corporate Tax
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.corporateTax}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Capital Gains
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.capitalGains}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Withholding Tax
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.withholdingTax}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Tax Recommendations
                </h4>
                <ul className="space-y-1 text-sm">
                  {analysis.taxAnalysis.recommendations.map((rec, idx) => (
                    <li key={idx}>• {rec}</li>
                  ))}
                </ul>
              </div>
            </div>
            )}

            {/* Structure Recommendation */}
            {activeAnalysisTab === "structure" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Structure Recommendation
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {analysis.structureRecommendation.type}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {analysis.structureRecommendation.description}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Required Documents
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {analysis.structureRecommendation.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 rounded-lg bg-white p-3 dark:bg-slate-800"
                    >
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>
        )}

        {activeTab === "documents" && (
          <div className="space-y-4">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Generated Documents
            </h2>
            {analysis ? (
              <>
                <div className="mb-6 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 p-4 dark:from-violet-900/20 dark:to-purple-900/20">
                  <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">
                    Documents for analyzed opportunity
                  </p>
                </div>
                {analysis.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                        <DocumentIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{doc.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Type: {doc.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          doc.status === "generated"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                            : doc.status === "pending"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                        }`}
                      >
                        {doc.status === "generated"
                          ? "Generated"
                          : doc.status === "pending"
                          ? "Pending"
                          : "Required"}
                      </span>
                      {doc.status === "generated" && (
                        <button className="rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800/50">
                  <DocumentIcon className="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600" />
                  <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
                    No documents generated
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Analyze an opportunity to generate legal documents
                  </p>
                  <button
                    onClick={() => setActiveTab("opportunities")}
                    className="mt-6 rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                  >
                    View Opportunities
                  </button>
                </div>

                {/* Liste des documents disponibles */}
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    Available Document Types
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { name: "Operating Agreement", category: "SPV" },
                      { name: "Articles of Association", category: "SPV" },
                      { name: "Shareholders Agreement", category: "SPV" },
                      { name: "Security Interest Agreement", category: "Garantie" },
                      { name: "Pledge Agreement", category: "Garantie" },
                      { name: "Fiducie-sûreté / Collateral Agreement", category: "Garantie" },
                      { name: "Contrat de Prêt", category: "Financement" },
                      { name: "Term Sheet", category: "Financement" },
                      { name: "Résolutions SPV", category: "SPV" },
                      { name: "NFT Master Token + metadata", category: "Tokenisation" },
                      { name: "Fractionalisation ERC-20", category: "Tokenisation" },
                      { name: "Fiches de dépôt et filings", category: "Administratif" },
                    ].map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 rounded-lg border-2 border-violet-200 bg-white p-3 dark:border-violet-800 dark:bg-slate-800"
                      >
                        <DocumentIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{doc.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{doc.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

