"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchIcon, DocumentIcon, CheckIcon, ArrowLeftIcon, ArrowRightIcon, XIcon } from "@/components/icons/GeneralIcons";

interface AnalysisItem {
  id: string;
  title: string;
  jurisdiction: string;
  structure: string;
  status: "completed" | "in-progress" | "pending";
  date: string;
  recommendations?: string[];
  assetType?: string;
  assetValue?: number;
  owner?: string;
  riskLevel?: "low" | "medium" | "high";
  taxOptimization?: string[];
}

const mockAnalyses: AnalysisItem[] = [
  {
    id: "ANAL-001",
    title: "Luxury Villa - Dubai Marina",
    jurisdiction: "RAK ICC",
    structure: "SPV",
    status: "completed",
    date: "2 hours ago",
    assetType: "Real Estate",
    assetValue: 5000000,
    owner: "John Doe",
    riskLevel: "low",
    recommendations: [
      "RAK ICC structure recommended for UAE real estate",
      "SPV provides optimal asset isolation",
      "Tax optimization through UAE jurisdiction",
      "DLD compliance required for property registration",
    ],
    taxOptimization: [
      "0% corporate tax in RAK ICC",
      "No capital gains tax",
      "No withholding tax on distributions",
    ],
  },
  {
    id: "ANAL-002",
    title: "Mining Equipment Batch #12",
    jurisdiction: "Delaware",
    structure: "LLC",
    status: "in-progress",
    date: "5 hours ago",
    assetType: "Mining",
    assetValue: 1200000,
    owner: "Jane Smith",
    riskLevel: "medium",
    recommendations: [
      "Delaware LLC structure for US-based operations",
      "Flexible operating agreement structure",
      "State tax benefits for LLC formation",
    ],
  },
  {
    id: "ANAL-003",
    title: "Commercial Property - DIFC",
    jurisdiction: "DIFC",
    structure: "SPV",
    status: "completed",
    date: "1 day ago",
    assetType: "Real Estate",
    assetValue: 3500000,
    owner: "Sarah Williams",
    riskLevel: "low",
    recommendations: [
      "DIFC structure for Dubai commercial property",
      "Enhanced regulatory framework",
      "Optimal for international investors",
      "Common law jurisdiction benefits",
    ],
    taxOptimization: [
      "0% corporate tax",
      "No personal income tax",
      "Double taxation treaties",
    ],
  },
  {
    id: "ANAL-004",
    title: "Gold Mining Concession",
    jurisdiction: "RAK ICC",
    structure: "SPV",
    status: "completed",
    date: "3 days ago",
    assetType: "Mining",
    assetValue: 8000000,
    owner: "Michael Brown",
    riskLevel: "medium",
    recommendations: [
      "RAK ICC for international mining operations",
      "Asset protection structure",
      "Compliance with mining regulations",
    ],
    taxOptimization: [
      "Tax-efficient structure",
      "No withholding tax",
    ],
  },
  {
    id: "ANAL-005",
    title: "Luxury Watch Collection",
    jurisdiction: "DIFC",
    structure: "SPV",
    status: "pending",
    date: "5 days ago",
    assetType: "Luxury Goods",
    assetValue: 850000,
    owner: "Robert Johnson",
    riskLevel: "low",
    recommendations: [
      "DIFC structure for luxury goods",
      "Enhanced security and insurance requirements",
      "Authentication and provenance documentation",
    ],
  },
  {
    id: "ANAL-006",
    title: "Tech Startup Equity",
    jurisdiction: "Delaware",
    structure: "LLC",
    status: "completed",
    date: "1 week ago",
    assetType: "Business",
    assetValue: 3000000,
    owner: "Lisa Anderson",
    riskLevel: "high",
    recommendations: [
      "Delaware LLC for tech equity",
      "Flexible ownership structure",
      "Investor-friendly jurisdiction",
    ],
    taxOptimization: [
      "Pass-through taxation option",
      "State tax benefits",
    ],
  },
];

const statusColors = {
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  "in-progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  pending: "Pending",
};

const riskColors = {
  low: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  high: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
};

export default function LegalAnalysisPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [jurisdictionFilter, setJurisdictionFilter] = useState<string>("all");
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalysisItem | null>(null);

  const filteredAnalyses = mockAnalyses.filter((analysis) => {
    const matchesSearch =
      analysis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.owner?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || analysis.status === statusFilter;
    const matchesJurisdiction = jurisdictionFilter === "all" || analysis.jurisdiction === jurisdictionFilter;

    return matchesSearch && matchesStatus && matchesJurisdiction;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <SearchIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Legal Analysis & Recommendations
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Jurisdictional analysis and legal strategy recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Search */}
          <div className="relative">
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Search
            </label>
            <SearchIcon className="absolute left-4 top-[calc(50%+0.75rem)] h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by ID, title, or owner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border-2 border-violet-200 bg-white/80 pl-12 pr-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Jurisdiction Filter */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Jurisdiction
            </label>
            <select
              value={jurisdictionFilter}
              onChange={(e) => setJurisdictionFilter(e.target.value)}
              className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            >
              <option value="all">All Jurisdictions</option>
              <option value="RAK ICC">RAK ICC</option>
              <option value="Delaware">Delaware</option>
              <option value="DIFC">DIFC</option>
              <option value="ADGM">ADGM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredAnalyses.length}</span> of{" "}
          <span className="font-semibold text-slate-900 dark:text-white">{mockAnalyses.length}</span> analyses
        </p>
        <Link
          href="/legalblock/advisor"
          className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <span>New Analysis</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      {/* Analyses Grid */}
      {filteredAnalyses.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-white/80 p-12 text-center dark:border-violet-800 dark:bg-slate-800/80">
          <SearchIcon className="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600" />
          <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
            No analyses found
          </h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            Try adjusting your filters or create a new analysis
          </p>
          <Link
            href="/legalblock/advisor"
            className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
          >
            <span>Create New Analysis</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredAnalyses.map((analysis) => (
            <div
              key={analysis.id}
              className="group rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-lg dark:border-violet-800 dark:bg-slate-800/80"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {analysis.title}
                    </h3>
                    <span className="rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300">
                      {analysis.id}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <DocumentIcon className="h-4 w-4" />
                      <span className="font-medium">{analysis.jurisdiction}</span>
                    </div>
                    <span>•</span>
                    <span>{analysis.structure}</span>
                    <span>•</span>
                    <span>{analysis.date}</span>
                  </div>
                </div>
                <span
                  className={`ml-4 rounded-lg px-3 py-1 text-xs font-semibold ${statusColors[analysis.status]}`}
                >
                  {statusLabels[analysis.status]}
                </span>
              </div>

              {/* Additional Info */}
              {(analysis.assetType || analysis.assetValue || analysis.owner || analysis.riskLevel) && (
                <div className="mb-4 grid gap-2 text-sm">
                  {analysis.assetType && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Asset Type:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{analysis.assetType}</span>
                    </div>
                  )}
                  {analysis.assetValue && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Value:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        ${analysis.assetValue.toLocaleString('en-US')}
                      </span>
                    </div>
                  )}
                  {analysis.owner && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Owner:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{analysis.owner}</span>
                    </div>
                  )}
                  {analysis.riskLevel && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Risk Level:</span>
                      <span
                        className={`rounded-lg px-2 py-1 text-xs font-semibold ${riskColors[analysis.riskLevel]}`}
                      >
                        {analysis.riskLevel.charAt(0).toUpperCase() + analysis.riskLevel.slice(1)}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Recommendations Preview */}
              {analysis.recommendations && analysis.recommendations.length > 0 && (
                <div className="mb-4 rounded-lg bg-violet-50/50 dark:bg-violet-900/20 p-4">
                  <h4 className="mb-2 flex items-center space-x-2 text-sm font-semibold text-violet-700 dark:text-violet-300">
                    <CheckIcon className="h-4 w-4" />
                    <span>Recommendations ({analysis.recommendations.length})</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {analysis.recommendations.slice(0, 2).map((rec, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
                        <span className="line-clamp-1">{rec}</span>
                      </li>
                    ))}
                    {analysis.recommendations.length > 2 && (
                      <li className="text-xs text-slate-600 dark:text-slate-400">
                        +{analysis.recommendations.length - 2} more recommendations
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Tax Optimization Preview */}
              {analysis.taxOptimization && analysis.taxOptimization.length > 0 && (
                <div className="mb-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    Tax Benefits
                  </h4>
                  <ul className="space-y-1">
                    {analysis.taxOptimization.slice(0, 2).map((tax, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                        <span>{tax}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                <Link
                  href={`/legalblock/advisor?analysis=${analysis.id}`}
                  className="flex-1 rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  View Details
                </Link>
                <button
                  onClick={() => setSelectedAnalysis(analysis)}
                  className="flex-1 rounded-lg border-2 border-violet-300 bg-white/80 px-4 py-2 text-center text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-slate-800/80 dark:text-violet-400 dark:hover:bg-violet-900/20"
                >
                  Full Report
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed View Modal */}
      {selectedAnalysis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedAnalysis(null)}>
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedAnalysis(null)}
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
            >
              <XIcon className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
                {selectedAnalysis.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                <span>{selectedAnalysis.id}</span>
                <span>•</span>
                <span>{selectedAnalysis.jurisdiction}</span>
                <span>•</span>
                <span>{selectedAnalysis.structure}</span>
                <span>•</span>
                <span>{selectedAnalysis.date}</span>
              </div>
            </div>

            {selectedAnalysis.recommendations && selectedAnalysis.recommendations.length > 0 && (
              <div className="mb-6 rounded-xl bg-violet-50/50 dark:bg-violet-900/20 p-6">
                <h3 className="mb-4 flex items-center space-x-2 text-xl font-semibold text-violet-700 dark:text-violet-300">
                  <CheckIcon className="h-5 w-5" />
                  <span>Recommendations</span>
                </h3>
                <ul className="space-y-3">
                  {selectedAnalysis.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400"></span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedAnalysis.taxOptimization && selectedAnalysis.taxOptimization.length > 0 && (
              <div className="mb-6 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 p-6">
                <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-300">
                  Tax Optimization
                </h3>
                <ul className="space-y-2">
                  {selectedAnalysis.taxOptimization.map((tax, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                      <span>{tax}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedAnalysis(null)}
                className="rounded-lg border-2 border-slate-300 bg-white px-6 py-2 font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Close
              </button>
              <Link
                href={`/legalblock/advisor?analysis=${selectedAnalysis.id}`}
                className="rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-2 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                View Full Analysis
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

