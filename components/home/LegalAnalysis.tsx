"use client";

import Link from "next/link";
import { DocumentIcon, CheckIcon, ArrowRightIcon } from "@/components/icons/GeneralIcons";
import { SearchIcon } from "@/components/icons/SectionIcons";

interface AnalysisItem {
  id: string;
  title: string;
  jurisdiction: string;
  structure: string;
  status: "completed" | "in-progress" | "pending";
  date: string;
  recommendations?: string[];
}

const mockAnalyses: AnalysisItem[] = [
  {
    id: "ANAL-001",
    title: "Luxury Villa - Dubai Marina",
    jurisdiction: "RAK ICC",
    structure: "SPV",
    status: "completed",
    date: "2 hours ago",
    recommendations: [
      "RAK ICC structure recommended for UAE real estate",
      "SPV provides optimal asset isolation",
      "Tax optimization through UAE jurisdiction",
    ],
  },
  {
    id: "ANAL-002",
    title: "Mining Equipment Batch #12",
    jurisdiction: "Delaware",
    structure: "LLC",
    status: "in-progress",
    date: "5 hours ago",
    recommendations: [
      "Delaware LLC structure for US-based operations",
      "Flexible operating agreement structure",
    ],
  },
  {
    id: "ANAL-003",
    title: "Commercial Property - DIFC",
    jurisdiction: "DIFC",
    structure: "SPV",
    status: "completed",
    date: "1 day ago",
    recommendations: [
      "DIFC structure for Dubai commercial property",
      "Enhanced regulatory framework",
      "Optimal for international investors",
    ],
  },
];

const statusColors = {
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  "in-progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
};

export default function LegalAnalysis() {
  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <SearchIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Legal Analysis & Recommendations
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Jurisdictional analysis and legal strategy recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Analysis List */}
      <div className="space-y-4">
        {mockAnalyses.map((analysis) => (
          <div
            key={analysis.id}
            className="group rounded-xl border-2 border-violet-200 bg-white/80 p-5 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/80"
          >
            <div className="mb-3 flex items-start justify-between">
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
                {analysis.status === "in-progress" ? "In Progress" : analysis.status.charAt(0).toUpperCase() + analysis.status.slice(1)}
              </span>
            </div>

            {/* Recommendations */}
            {analysis.recommendations && analysis.recommendations.length > 0 && (
              <div className="mt-4 rounded-lg bg-violet-50/50 dark:bg-violet-900/20 p-4">
                <h4 className="mb-2 flex items-center space-x-2 text-sm font-semibold text-violet-700 dark:text-violet-300">
                  <CheckIcon className="h-4 w-4" />
                  <span>Recommendations</span>
                </h4>
                <ul className="space-y-1.5">
                  {analysis.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/legal-analysis"
          className="group inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <span>See More</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

