import { SearchIcon } from "@/components/icons/SectionIcons";

export default function AnalysisProcessSection() {
  const jurisdictions = [
    { code: "RAK_ICC", name: "RAK ICC", description: "Ras Al Khaimah International Corporate Centre (UAE)" },
    { code: "DELAWARE", name: "Delaware LLC", description: "Delaware Limited Liability Company (USA)" },
    { code: "DIFC", name: "DIFC", description: "Dubai International Financial Centre (UAE)" },
    { code: "ADGM", name: "ADGM", description: "Abu Dhabi Global Market (UAE)" },
    { code: "FRANCE", name: "France", description: "French regime (SCI, FCPR, etc.)" },
    { code: "EU", name: "EU", description: "European structures (Luxembourg, Malta, etc.)" },
  ];

  const structures = [
    { name: "SPV", description: "Special Purpose Vehicle for asset isolation" },
    { name: "LLC", description: "Limited Liability Company for operational flexibility" },
    { name: "Trust", description: "Trust structure for wealth management" },
    { name: "Pledge", description: "Pledge for movable asset guarantee" },
    { name: "Security Interest", description: "Security interest for real estate assets" },
    { name: "Mortgage", description: "Mortgage for real estate guarantee" },
    { name: "Pledge Agreement", description: "Pledge Agreement for financial assets" },
  ];

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <SearchIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 4: Automated Analysis Process
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Analysis and recommendations</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            How ADVISORBLOCK reads and analyzes an opportunity
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Extraction and structuring of form data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Analysis of uploaded documents (OCR + NLP)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Application of legal rules engine</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Contextual analysis by LLM engine</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Generation of recommendations with scoring</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Automatic decision of optimal legal strategy
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-600 dark:text-violet-400">
                Evaluation Criteria
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Asset type and value</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Owner jurisdiction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Tax objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Regulatory constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Incorporation costs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Operational flexibility</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-600 dark:text-violet-400">
                Decision Algorithm
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Multi-criteria scoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Option comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Cost optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Risk minimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Guaranteed compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Jurisdiction selection
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jurisdictions.map((jur) => (
              <div
                key={jur.code}
                className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/80"
              >
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">{jur.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{jur.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Structure selection
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {structures.map((struct) => (
              <div
                key={struct.name}
                className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/80"
              >
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">{struct.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{struct.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Risk analysis and compliance
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">KYC</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Identity and owner profile verification</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">AML</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Money laundering and terrorism financing detection</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">Sanctions</h4>
              <p className="text-sm">International sanctions list verification</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Optimal legal pipeline
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="flex items-center justify-between overflow-x-auto">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </div>
                <span className="text-sm">Analysis</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </div>
                <span className="text-sm">Strategy</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </div>
                <span className="text-sm">Generation</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </div>
                <span className="text-sm">Validation</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  5
                </div>
                <span className="text-sm">Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

