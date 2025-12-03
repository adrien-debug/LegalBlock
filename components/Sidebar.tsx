"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BankIcon, MenuIcon, XIcon, ArrowRightIcon, SparklesIcon2, BellIcon } from "@/components/icons/GeneralIcons";
import { BuildingIcon as BuildingIconSection, RocketIcon as RocketIconSection, RobotIcon as RobotIconSection } from "@/components/icons/SectionIcons";

const navItems = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/legalblock/new-opportunity", label: "Nouvelle Opportunité", icon: RocketIconSection },
  { href: "/notifications", label: "Notifications", icon: BellIcon },
];

const toolsItems = [
  { href: "/legalblock", label: "LegalBlock", icon: BuildingIconSection },
  { href: "/legalblock/advisor", label: "AdvisorBlock", icon: RobotIconSection },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

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
        className={`fixed left-0 top-0 z-50 h-screen w-80 transform bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 shadow-2xl shadow-violet-900/50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 pointer-events-none"></div>
        
        {/* Sidebar Header */}
        <div className="relative flex h-24 items-center justify-between border-b-2 border-violet-700/50 bg-gradient-to-r from-violet-800/30 to-purple-800/30 px-6 backdrop-blur-sm">
          <Link
            href="/"
            className="flex items-center space-x-4 text-2xl font-bold text-white transition-transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/50">
              <BankIcon className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-violet-100 via-purple-100 to-fuchsia-100 bg-clip-text text-2xl font-bold text-transparent">
                BlockBank
              </span>
              <span className="text-xs font-medium text-violet-300">LegalBlock</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden rounded-lg p-2 text-white/80 hover:bg-violet-800/50 hover:text-white transition-all"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="relative mt-6 space-y-3 px-4">
          <div className="mb-4 px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Navigation</p>
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group relative flex items-center space-x-4 rounded-xl px-5 py-4 text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-xl shadow-violet-500/50 scale-105"
                    : "text-violet-100 hover:bg-violet-800/60 hover:text-white hover:scale-[1.02] hover:shadow-lg"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-white/50"></div>
                )}
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                  isActive 
                    ? "bg-white/20 shadow-lg" 
                    : "bg-violet-800/30 group-hover:bg-violet-700/40"
                }`}>
                  <IconComponent className={`h-5 w-5 ${isActive ? "text-white" : "text-violet-200"}`} />
                </div>
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <ArrowRightIcon className="h-5 w-5 text-white animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tools Section - Positioned above footer */}
        <div className="absolute bottom-[250px] left-0 right-0 px-4">
          <div className="mb-2 px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Outils</p>
          </div>
          <div className="space-y-3">
            {toolsItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center space-x-4 rounded-xl px-5 py-4 text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-xl shadow-violet-500/50 scale-105"
                      : "text-violet-100 hover:bg-violet-800/60 hover:text-white hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-white/50"></div>
                  )}
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                    isActive 
                      ? "bg-white/20 shadow-lg" 
                      : "bg-violet-800/30 group-hover:bg-violet-700/40"
                  }`}>
                    <IconComponent className={`h-5 w-5 ${isActive ? "text-white" : "text-violet-200"}`} />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                    <ArrowRightIcon className="h-5 w-5 text-white animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-violet-700/50 bg-gradient-to-r from-violet-800/40 to-purple-800/40 p-6 backdrop-blur-sm">
          <div className="rounded-2xl bg-gradient-to-br from-violet-700/60 via-purple-700/60 to-fuchsia-700/60 p-5 shadow-xl border border-violet-600/30">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <SparklesIcon2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Plateforme Premium</p>
                <p className="text-xs font-medium text-violet-200">Tokenisation RWA</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-violet-900/40 px-3 py-2">
              <span className="text-xs font-medium text-violet-200">Version Pro</span>
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
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

