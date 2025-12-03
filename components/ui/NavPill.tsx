import Link from "next/link";
import { SparklesIcon2 } from "@/components/icons/GeneralIcons";

interface NavPillProps {
  href: string;
  label: string;
}

export default function NavPill({ href, label }: NavPillProps) {
  const isPremium = label.includes("Premium");
  
  return (
    <Link
      href={href}
      className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:shadow-md hover:scale-105 ${
        isPremium
          ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50 hover:from-violet-700 hover:to-purple-700"
          : "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 hover:from-violet-200 hover:to-purple-200 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300 dark:hover:from-violet-900/70 dark:hover:to-purple-900/70"
      }`}
    >
      {isPremium && <SparklesIcon2 className="h-4 w-4" />}
      <span>{label.replace("💎 ", "")}</span>
    </Link>
  );
}

