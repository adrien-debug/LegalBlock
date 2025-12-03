"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BankIcon, SparklesIcon2 } from "@/components/icons/GeneralIcons";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-violet-200/50 bg-gradient-to-r from-white/90 via-violet-50/30 to-purple-50/30 backdrop-blur-xl shadow-sm dark:border-violet-800/50 dark:from-slate-900/90 dark:via-violet-900/20 dark:to-purple-900/20">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <BankIcon className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-xl font-bold text-transparent">
              BlockBank
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">LegalBlock Platform</span>
          </div>
        </Link>

        {/* Premium Badge */}
        <div className="hidden items-center space-x-4 md:flex">
          <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 dark:from-violet-900/30 dark:to-purple-900/30">
            <SparklesIcon2 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              Premium
            </span>
          </div>
        </div>

        {/* Mobile Premium Badge */}
        <div className="flex items-center md:hidden">
          <div className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-3 py-1.5 dark:from-violet-900/30 dark:to-purple-900/30">
            <SparklesIcon2 className="h-3 w-3 text-violet-600 dark:text-violet-400" />
            <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">
              Premium
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

