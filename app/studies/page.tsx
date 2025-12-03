"use client";

import { useState } from "react";
import { DocumentIcon, CodeIcon, SearchIcon, ChartIcon } from "@/components/icons/GeneralIcons";
import Link from "next/link";

type StudyCategory = "legal" | "technical" | "analysis" | "implementation";

interface Study {
  id: string;
  title: string;
  description: string;
  category: StudyCategory;
  icon: string;
  href?: string;
}

export default function StudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<StudyCategory>("legal");

  const studies: Study[] = [
    {
      id: "uae-legal",
      title: "UAE Legal Framework - RAK ICC",
      description: "Complete legal framework for asset tokenization in UAE via RAK ICC",
      category: "legal",
      icon: "",
      href: "/legal-notes",
    },
    {
      id: "usa-legal",
      title: "USA Legal Framework - Delaware LLC",
      description: "Delaware LLC legal structure for global tokenization",
      category: "legal",
      icon: "",
      href: "/legal-notes",
    },
    {
      id: "spv-structure",
      title: "SPV Structure & Operations",
      description: "Creation and operation of Special Purpose Vehicles",
      category: "legal",
      icon: "",
      href: "/spv-structure",
    },
    {
      id: "luxury-goods",
      title: "Luxury Goods Tokenization",
      description: "Legal framework for luxury goods with Security Interest and Pledge Agreement",
      category: "legal",
      icon: "",
      href: "/luxury-goods",
    },
    {
      id: "nft-master",
      title: "NFT Master Ownership",
      description: "How an ERC-721 NFT represents 100% of SPV shares",
      category: "technical",
      icon: "",
      href: "/nft-master",
    },
    {
      id: "fractionalization",
      title: "ERC-20 Fractionalization",
      description: "NFT locking mechanism and ERC-20 shares creation",
      category: "technical",
      icon: "",
      href: "/fractionalization",
    },
    {
      id: "smart-contracts",
      title: "Smart Contracts Architecture",
      description: "Technical structure of contracts, vault and automatic distribution",
      category: "technical",
      icon: "",
      href: "/fractionalization",
    },
    {
      id: "comparison",
      title: "Executive Summary & Comparison",
      description: "Detailed comparison of structures, advantages and disadvantages",
      category: "analysis",
      icon: "",
      href: "/comparison",
    },
    {
      id: "templates",
      title: "Templates & Code Examples",
      description: "Code examples, smart contracts, EJS and React templates",
      category: "implementation",
      icon: "",
      href: "/templates",
    },
    {
      id: "deployment",
      title: "Deployment Guide",
      description: "Deployment guide and complete checklist",
      category: "implementation",
      icon: "",
      href: "/deployment-assistant",
    },
  ];

  const filteredStudies = studies.filter((s) => s.category === selectedCategory);

  const categories = [
    { id: "legal" as StudyCategory, label: "Legal Studies", icon: DocumentIcon, count: 4 },
    { id: "technical" as StudyCategory, label: "Technical Studies", icon: CodeIcon, count: 3 },
    { id: "analysis" as StudyCategory, label: "Analysis", icon: ChartIcon, count: 1 },
    { id: "implementation" as StudyCategory, label: "Implementation", icon: SearchIcon, count: 2 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Category Tabs - Horizontal at top */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 overflow-x-auto rounded-2xl bg-white/80 p-2 shadow-lg backdrop-blur-sm dark:bg-slate-800/80">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                }}
                className={`group relative flex items-center space-x-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                    : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{category.label}</span>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  isActive ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300"
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Studies & Documentation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          All studies, analyses and complete documentation of the platform
        </p>
      </div>

      {/* Main Content */}
      <div>

        {/* Studies Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredStudies.map((study) => (
            <Link
              key={study.id}
              href={study.href || "#"}
              className="group block rounded-2xl border-2 border-violet-200 bg-white p-6 shadow-lg transition-all hover:border-violet-400 hover:shadow-xl dark:border-violet-800 dark:bg-slate-800"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {study.title}
                </h3>
              </div>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                {study.description}
              </p>
              <div className="flex items-center text-violet-600 dark:text-violet-400">
                <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-lg dark:bg-slate-800">
            <p className="text-slate-600 dark:text-slate-400">
              No studies in this category at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

