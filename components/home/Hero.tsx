import Link from "next/link";
import { BuildingIcon, RocketIcon, RobotIcon } from "@/components/icons/SectionIcons";

const RocketIconSection = RocketIcon;

export default function Hero() {
  return (
    <div className="mb-16 mt-8 text-center">
      <h1 className="mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-6xl font-bold text-transparent">
        BlockBank Platform
      </h1>
      <p className="mx-auto mb-8 flex items-center justify-center gap-2 text-xl text-slate-700 dark:text-slate-300">
        <RocketIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
        <span>Legal automation platform for real-world asset tokenization</span>
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/legalblock"
          className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <BuildingIcon className="h-6 w-6 text-white" />
          <span>LegalBlock</span>
        </Link>
        <Link
          href="/legalblock/new-opportunity"
          className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
        >
          <RocketIconSection className="h-6 w-6 text-white" />
          <span>Create Opportunity</span>
        </Link>
      </div>
    </div>
  );
}

