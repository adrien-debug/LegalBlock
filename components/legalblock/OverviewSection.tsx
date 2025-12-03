import { ClipboardIcon } from "@/components/icons/SectionIcons";

export default function OverviewSection() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <ClipboardIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 1: LEGALBLOCK Overview
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Architecture and objectives</p>
        </div>
      </div>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Legal automation platform description
          </h3>
          <p className="leading-relaxed">
            LEGALBLOCK is a complete legal automation platform designed to transform the
            real-world asset (RWA) tokenization process. It combines artificial intelligence,
            legal rule engines and automatic document generation to create optimized legal
            structures in minutes instead of several weeks.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Objectives and added value
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Speed:</strong> Reduction of legal structure creation time from 3-6 weeks
              to a few hours
            </li>
            <li>
              <strong>Accuracy:</strong> Elimination of human errors through automation
            </li>
            <li>
              <strong>Compliance:</strong> Guarantee of compliance with international regulations
              (KYC, AML, sanctions)
            </li>
            <li>
              <strong>Optimization:</strong> Automatic selection of optimal jurisdiction and structure
              according to asset type
            </li>
            <li>
              <strong>Traceability:</strong> Complete audit trail of all decisions and
              modifications
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            General architecture
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <pre className="overflow-x-auto text-sm font-mono text-slate-700 dark:text-slate-300">
{`LEGALBLOCK Architecture
├── Opportunity Intake
│   └── Opportunity form
├── ADVISORBLOCK (Legal AI)
│   ├── Rules engine
│   └── LLM engine
├── Legal Strategy Engine
│   ├── Jurisdiction selection
│   └── Structure selection
├── Contract Generator
│   └── Document generation
├── Risk & Compliance Engine
│   ├── KYC/AML
│   └── Sanctions screening
├── Filing & Dispatch Engine
│   └── Automatic dispatch
├── Tokenization Engine
│   ├── NFT Master
│   └── ERC-20 Shares
└── Document Vault
    └── Versioning & Audit`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

