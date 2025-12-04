"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BankIcon, MenuIcon, XIcon, ArrowRightIcon, SparklesIcon2, ClockIcon, BellIcon, DocumentIcon, SocialMediaIcon } from "@/components/icons/GeneralIcons";
import { BuildingIcon as BuildingIconSection, RocketIcon as RocketIconSection, RobotIcon as RobotIconSection, SearchIcon } from "@/components/icons/SectionIcons";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/recent-requests", label: "Recent Requests", icon: ClockIcon },
  { href: "/notifications", label: "Notifications", icon: BellIcon },
  { href: "/legal-analysis", label: "Legal Analysis", icon: SearchIcon },
];

const toolsItems = [
  { href: "/legalblock", label: "LegalBlock", icon: BuildingIconSection },
  { href: "/legalblock/advisor", label: "AdvisorBlock", icon: RobotIconSection },
  { href: "/build-block", label: "Build Block", icon: RocketIconSection },
  { href: "/studies", label: "Studies & Docs", icon: DocumentIcon },
  { href: "/social-media-admin", label: "Social Media Admin", icon: SocialMediaIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const isNewOpportunityActive = pathname === "/legalblock/new-opportunity";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 transform bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-fuchsia-900/10 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="relative flex h-24 items-center justify-between border-b-2 border-violet-200/50 dark:border-violet-800/50 px-6">
          <Link
            href="/"
            className="flex items-center space-x-4 text-2xl font-bold transition-transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-500/50">
              <BankIcon className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent">
                BlockBank
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">LegalBlock</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden rounded-lg p-2 text-slate-600 hover:bg-violet-100 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-violet-900/20 dark:hover:text-violet-400 transition-all"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Call-to-Action: New Opportunity - Positionné juste après le header */}
        <div className="px-4 pt-6 pb-4">
          <Link
            href="/legalblock/new-opportunity"
            onClick={() => setIsOpen(false)}
            className={`group relative block overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
              isNewOpportunityActive
                ? "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-2xl shadow-violet-500/50 scale-[1.02]"
                : "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.02]"
            }`}
          >
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative flex items-center space-x-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                isNewOpportunityActive 
                  ? "bg-white/20 backdrop-blur-sm" 
                  : "bg-white/30 backdrop-blur-sm group-hover:bg-white/40"
              } transition-all`}>
                <RocketIconSection className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold ${
                  isNewOpportunityActive ? "text-white" : "text-white"
                }`}>
                  New Opportunity
                </p>
                <p className={`text-xs mt-0.5 ${
                  isNewOpportunityActive ? "text-violet-100" : "text-violet-100/90"
                }`}>
                  Créer une demande
                </p>
              </div>
              <ArrowRightIcon className={`h-5 w-5 text-white transition-transform ${
                isNewOpportunityActive ? "animate-pulse" : "group-hover:translate-x-1"
              }`} />
            </div>
            
            {/* Badge "Premium" */}
            {!isNewOpportunityActive && (
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center rounded-full bg-white/30 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                  ✨ Premium
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="relative mt-2 space-y-1.5 px-4">
          <div className="mb-2 px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Navigation</p>
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group relative flex items-center space-x-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                    : "text-slate-700 dark:text-slate-300 hover:bg-violet-100/50 dark:hover:bg-violet-900/20"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-white/50"></div>
                )}
                <IconComponent className={`h-4 w-4 ${isActive ? "text-white" : "text-violet-600 dark:text-violet-400"}`} />
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <ArrowRightIcon className="h-4 w-4 text-white animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tools Section - Positioned above footer */}
        <div className="absolute bottom-[250px] left-0 right-0 px-4">
          <div className="mb-2 px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Tools</p>
          </div>
          <div className="space-y-1.5">
            {toolsItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center space-x-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                      : "text-slate-700 dark:text-slate-300 hover:bg-violet-100/50 dark:hover:bg-violet-900/20"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-white/50"></div>
                  )}
                  <IconComponent className={`h-4 w-4 ${isActive ? "text-white" : "text-violet-600 dark:text-violet-400"}`} />
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                    <ArrowRightIcon className="h-4 w-4 text-white animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-violet-200/50 dark:border-violet-800/50 p-3">
          <div className="rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-2.5 shadow-xl">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <SparklesIcon2 className="h-3 w-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white">Premium Platform</p>
                <p className="text-[10px] font-medium text-violet-200">RWA Tokenization</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-violet-900/40 px-2 py-1">
              <span className="text-[10px] font-medium text-violet-200">Version Pro</span>
              <div className="flex space-x-0.5">
                <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 p-3 text-white shadow-lg transition-all hover:scale-105 lg:hidden"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </>
  );
}

