"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ClockIcon, 
  ArrowRightIcon, 
  ArrowLeftIcon,
  SearchIcon
} from "@/components/icons/GeneralIcons";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon, CreditIcon, RwaIcon } from "@/components/icons/AssetIcons";

interface RecentRequest {
  id: string;
  title: string;
  assetType: "real-estate" | "mining" | "luxury" | "business" | "credit" | "rwa";
  value: number;
  currency: string;
  status: "pending" | "analyzing" | "completed" | "approved" | "rejected";
  date: string;
  jurisdiction?: string;
  owner?: string;
  location?: string;
  description?: string;
}

const mockRequests: RecentRequest[] = [
  {
    id: "OPP-001",
    title: "Luxury Villa - Dubai Marina",
    assetType: "real-estate",
    value: 5000000,
    currency: "USD",
    status: "completed",
    date: "2 hours ago",
    jurisdiction: "RAK ICC",
    owner: "John Doe",
    location: "Dubai, UAE",
    description: "Luxury 5-bedroom villa with private beach access in Dubai Marina",
  },
  {
    id: "OPP-002",
    title: "Mining Equipment Batch #12",
    assetType: "mining",
    value: 1200000,
    currency: "USD",
    status: "analyzing",
    date: "5 hours ago",
    jurisdiction: "Delaware",
    owner: "Jane Smith",
    location: "Nevada, USA",
    description: "Bitcoin mining equipment including 500 ASIC miners",
  },
  {
    id: "OPP-003",
    title: "Luxury Watch Collection",
    assetType: "luxury",
    value: 850000,
    currency: "USD",
    status: "pending",
    date: "1 day ago",
    owner: "Robert Johnson",
    location: "Geneva, Switzerland",
    description: "Collection of 25 luxury watches including Rolex, Patek Philippe, and Audemars Piguet",
  },
  {
    id: "OPP-004",
    title: "Commercial Property - DIFC",
    assetType: "real-estate",
    value: 3500000,
    currency: "USD",
    status: "approved",
    date: "2 days ago",
    jurisdiction: "DIFC",
    owner: "Sarah Williams",
    location: "Dubai, UAE",
    description: "Commercial office space in Dubai International Financial Centre",
  },
  {
    id: "OPP-005",
    title: "Gold Mining Concession",
    assetType: "mining",
    value: 8000000,
    currency: "USD",
    status: "completed",
    date: "3 days ago",
    jurisdiction: "RAK ICC",
    owner: "Michael Brown",
    location: "West Africa",
    description: "Gold mining concession with proven reserves",
  },
  {
    id: "OPP-006",
    title: "Private Credit Portfolio",
    assetType: "credit",
    value: 2500000,
    currency: "USD",
    status: "analyzing",
    date: "4 days ago",
    owner: "Emily Davis",
    location: "New York, USA",
    description: "Portfolio of secured private credit loans",
  },
  {
    id: "OPP-007",
    title: "Vintage Car Collection",
    assetType: "luxury",
    value: 1500000,
    currency: "USD",
    status: "pending",
    date: "5 days ago",
    owner: "David Miller",
    location: "Monaco",
    description: "Collection of 10 vintage and classic cars",
  },
  {
    id: "OPP-008",
    title: "Tech Startup Equity",
    assetType: "business",
    value: 3000000,
    currency: "USD",
    status: "approved",
    date: "1 week ago",
    jurisdiction: "Delaware",
    owner: "Lisa Anderson",
    location: "San Francisco, USA",
    description: "Equity stake in a Series B tech startup",
  },
];

const assetIcons = {
  "real-estate": RealEstateIcon,
  mining: MiningIcon,
  luxury: LuxuryIcon,
  business: BusinessIcon,
  credit: CreditIcon,
  rwa: RwaIcon,
};

const assetLabels = {
  "real-estate": "Real Estate",
  mining: "Mining",
  luxury: "Luxury Goods",
  business: "Business",
  credit: "Credit",
  rwa: "RWA",
};

const statusColors = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  analyzing: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  approved: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
};

const statusLabels = {
  pending: "Pending",
  analyzing: "Analyzing",
  completed: "Completed",
  approved: "Approved",
  rejected: "Rejected",
};

export default function RecentRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [assetTypeFilter, setAssetTypeFilter] = useState<string>("all");
  const [selectedRequest, setSelectedRequest] = useState<RecentRequest | null>(null);

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.owner?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    const matchesAssetType = assetTypeFilter === "all" || request.assetType === assetTypeFilter;

    return matchesSearch && matchesStatus && matchesAssetType;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <ClockIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Recent Requests
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              View and manage all tokenization opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Search */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
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
              <option value="pending">Pending</option>
              <option value="analyzing">Analyzing</option>
              <option value="completed">Completed</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Asset Type Filter */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Asset Type
            </label>
            <select
              value={assetTypeFilter}
              onChange={(e) => setAssetTypeFilter(e.target.value)}
              className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            >
              <option value="all">All Types</option>
              <option value="real-estate">Real Estate</option>
              <option value="mining">Mining</option>
              <option value="luxury">Luxury Goods</option>
              <option value="business">Business</option>
              <option value="credit">Credit</option>
              <option value="rwa">RWA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredRequests.length}</span> of{" "}
          <span className="font-semibold text-slate-900 dark:text-white">{mockRequests.length}</span> requests
        </p>
        <Link
          href="/legalblock/new-opportunity"
          className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <span>Create New Request</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      {/* Requests Grid */}
      {filteredRequests.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-white/80 p-12 text-center dark:border-violet-800 dark:bg-slate-800/80">
          <ClockIcon className="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600" />
          <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
            No requests found
          </h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            Try adjusting your filters or create a new request
          </p>
          <Link
            href="/legalblock/new-opportunity"
            className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
          >
            <span>Create New Request</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRequests.map((request) => {
            const AssetIcon = assetIcons[request.assetType];
            return (
              <div
                key={request.id}
                className="group rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-lg dark:border-violet-800 dark:bg-slate-800/80"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50">
                    <AssetIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span
                    className={`rounded-lg px-3 py-1 text-xs font-semibold ${statusColors[request.status]}`}
                  >
                    {statusLabels[request.status]}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="mb-2 flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {request.title}
                    </h3>
                  </div>
                  <span className="rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300">
                    {request.id}
                  </span>
                </div>

                {request.description && (
                  <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {request.description}
                  </p>
                )}

                <div className="mb-4 space-y-2 text-sm">
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-slate-600 dark:text-slate-400">Value:</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">
                      {request.currency} {request.value.toLocaleString('en-US')}
                    </span>
                  </div>
                  {request.jurisdiction && (
                    <div className="grid grid-cols-[100px_1fr] gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Jurisdiction:</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-right">
                        {request.jurisdiction}
                      </span>
                    </div>
                  )}
                  {request.location && (
                    <div className="grid grid-cols-[100px_1fr] gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Location:</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-right">
                        {request.location}
                      </span>
                    </div>
                  )}
                  {request.owner && (
                    <div className="grid grid-cols-[100px_1fr] gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Owner:</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-right">
                        {request.owner}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-slate-600 dark:text-slate-400">Type:</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">
                      {assetLabels[request.assetType]}
                    </span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-slate-600 dark:text-slate-400">Date:</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">
                      {request.date}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`/legalblock/advisor?opportunity=${request.id}`}
                    className="flex-1 rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                  >
                    View Analysis
                  </Link>
                  <Link
                    href={`/legalblock/new-opportunity?edit=${request.id}`}
                    className="flex-1 rounded-lg border-2 border-violet-300 bg-white/80 px-4 py-2 text-center text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-slate-800/80 dark:text-violet-400 dark:hover:bg-violet-900/20"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

