"use client";

import Link from "next/link";
import { ClockIcon, ArrowRightIcon } from "@/components/icons/GeneralIcons";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon } from "@/components/icons/AssetIcons";

interface RecentRequest {
  id: string;
  title: string;
  assetType: "real-estate" | "mining" | "luxury" | "business";
  value: number;
  status: "pending" | "analyzing" | "completed" | "approved";
  date: string;
  jurisdiction?: string;
}

const mockRequests: RecentRequest[] = [
  {
    id: "OPP-001",
    title: "Luxury Villa - Dubai Marina",
    assetType: "real-estate",
    value: 5000000,
    status: "completed",
    date: "2 hours ago",
    jurisdiction: "RAK ICC",
  },
  {
    id: "OPP-002",
    title: "Mining Equipment Batch #12",
    assetType: "mining",
    value: 1200000,
    status: "analyzing",
    date: "5 hours ago",
    jurisdiction: "Delaware",
  },
  {
    id: "OPP-003",
    title: "Luxury Watch Collection",
    assetType: "luxury",
    value: 850000,
    status: "pending",
    date: "1 day ago",
  },
  {
    id: "OPP-004",
    title: "Commercial Property - DIFC",
    assetType: "real-estate",
    value: 3500000,
    status: "approved",
    date: "2 days ago",
    jurisdiction: "DIFC",
  },
];

const assetIcons = {
  "real-estate": RealEstateIcon,
  mining: MiningIcon,
  luxury: LuxuryIcon,
  business: BusinessIcon,
};

const statusColors = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  analyzing: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  approved: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
};

export default function RecentRequests() {
  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <ClockIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Recent Requests
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Latest tokenization opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-3">
        {mockRequests.map((request) => {
          const AssetIcon = assetIcons[request.assetType];
          return (
            <div
              key={request.id}
              className="group rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50">
                    <AssetIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center space-x-2">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        {request.title}
                      </h3>
                      <span className="rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300">
                        {request.id}
                      </span>
                    </div>
                    <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">${request.value.toLocaleString('en-US')}</span>
                      {request.jurisdiction && (
                        <>
                          <span>•</span>
                          <span>{request.jurisdiction}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{request.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`rounded-lg px-2 py-1 text-xs font-semibold ${statusColors[request.status]}`}
                      >
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* See More Button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/recent-requests"
          className="group inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <span>See More</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

