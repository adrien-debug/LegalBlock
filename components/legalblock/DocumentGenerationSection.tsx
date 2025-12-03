import { DocumentIcon } from "@/components/icons/GeneralIcons";

export default function DocumentGenerationSection() {
  const documents = [
    { name: "Operating Agreement", category: "SPV", description: "SPV structure operating agreement" },
    { name: "Articles of Association", category: "SPV", description: "Company articles of association" },
    { name: "Shareholders Agreement", category: "SPV", description: "Shareholders agreement" },
    { name: "Security Interest Agreement", category: "Guarantee", description: "Security interest agreement" },
    { name: "Pledge Agreement", category: "Guarantee", description: "Pledge agreement" },
    { name: "Collateral Agreement", category: "Guarantee", description: "Collateral trust agreement" },
    { name: "Loan Agreement", category: "Financing", description: "Secured loan contract" },
    { name: "Term Sheet", category: "Financing", description: "Term sheet" },
    { name: "SPV Resolutions", category: "SPV", description: "Assembly resolutions" },
    { name: "NFT Master Token + legal metadata", category: "Tokenization", description: "NFT with embedded legal metadata" },
    { name: "ERC-20 Fractionalization", category: "Tokenization", description: "ERC-20 smart contract for shares" },
    { name: "Filing documents and filings", category: "Administrative", description: "Documents for filing with authorities" },
  ];

  const categories = Array.from(new Set(documents.map((d) => d.category)));

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <DocumentIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 5: Automatic Document Generation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Templates and AI customization</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Complete list of generated documents
          </h3>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category} className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
                <h4 className="mb-4 flex items-center space-x-2 text-lg font-semibold text-violet-600 dark:text-violet-400">
                  <DocumentIcon className="h-5 w-5" />
                  <span>{category}</span>
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {documents
                    .filter((d) => d.category === category)
                    .map((doc) => (
                      <div
                        key={doc.name}
                        className="group rounded-xl border-2 border-violet-200 bg-white/50 p-4 transition-all hover:border-violet-400 hover:bg-white hover:shadow-md dark:border-violet-800 dark:bg-slate-800/50 dark:hover:border-violet-600"
                      >
                        <div className="mb-2 flex items-center space-x-2">
                          <DocumentIcon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                          <h5 className="font-semibold text-slate-900 dark:text-white">{doc.name}</h5>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{doc.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Generation process
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  1
                </span>
                <span className="text-slate-700 dark:text-slate-300">Retrieval of opportunity data and selected strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  2
                </span>
                <span className="text-slate-700 dark:text-slate-300">Selection of appropriate templates according to jurisdiction and structure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  3
                </span>
                <span className="text-slate-700 dark:text-slate-300">Automatic filling of fields with data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  4
                </span>
                <span className="text-slate-700 dark:text-slate-300">Generation of personalized clauses by ADVISORBLOCK</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  5
                </span>
                <span className="text-slate-700 dark:text-slate-300">Validation and consistency verification</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  6
                </span>
                <span className="text-slate-700 dark:text-slate-300">Export in multiple formats (PDF, DOCX, JSON for smart contracts)</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Templates and customization
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-700 dark:text-violet-300">Base Templates</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates by jurisdiction (RAK ICC, Delaware, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates by structure type (SPV, LLC, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates by asset type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Legally validated standard clauses</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-700 dark:text-violet-300">AI Customization</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Generation of context-adapted clauses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Optimization according to objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Adaptation to regulatory constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Integration of asset specificities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

