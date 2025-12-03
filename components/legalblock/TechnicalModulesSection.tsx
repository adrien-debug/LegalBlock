import { CogIcon } from "@/components/icons/SectionIcons";

export default function TechnicalModulesSection() {
  const modules = [
    {
      name: "Opportunity Intake",
      description: "Opportunity reception and validation",
      details: [
        "Multi-step interactive form",
        "Automatic data validation",
        "Document upload and processing",
        "Integration with external systems",
      ],
    },
    {
      name: "Legal Strategy Engine",
      description: "Legal strategy engine",
      details: [
        "Multi-criteria analysis",
        "Option scoring",
        "Justified recommendations",
        "Automatic optimization",
      ],
    },
    {
      name: "SPV Builder",
      description: "Automatic SPV structure construction",
      details: [
        "Complete structure generation",
        "Articles configuration",
        "Roles and responsibilities definition",
        "Specific clauses integration",
      ],
    },
    {
      name: "Contract Generator",
      description: "Contract generation",
      details: [
        "Modular templates",
        "Automatic filling",
        "Personalized clause generation",
        "Multi-format export",
      ],
    },
    {
      name: "Risk & Compliance Engine",
      description: "Risk analysis and compliance",
      details: [
        "Automatic KYC/AML",
        "Sanctions verification",
        "Risk scoring",
        "Compliance reports",
      ],
    },
    {
      name: "Filing & Dispatch Engine",
      description: "Dispatch to authorities and service providers",
      details: [
        "Automatic recipient detection",
        "Filing preparation",
        "Secure dispatch",
        "Tracking and notifications",
      ],
    },
    {
      name: "Tokenization Engine",
      description: "Smart contract generation",
      details: [
        "NFT Master ERC-721",
        "Vault Contract",
        "ERC-20 Shares",
        "Embedded legal metadata",
      ],
    },
    {
      name: "Document Vault",
      description: "Storage and versioning",
      details: [
        "Secure storage",
        "Automatic versioning",
        "Modification history",
        "Controlled access",
      ],
    },
    {
      name: "AdvisorBlock AI Interface",
      description: "AI interface",
      details: [
        "API for rules engine",
        "LLM integration",
        "Context management",
        "Prompt optimization",
      ],
    },
    {
      name: "Audit & Versioning",
      description: "Traceability and history",
      details: [
        "Log of all actions",
        "Decision history",
        "Complete traceability",
        "Audit reports",
      ],
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <CogIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 6: Technical Modules
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Complete technical architecture</p>
        </div>
      </div>

      <div className="space-y-6">
        {modules.map((module, index) => (
          <div
            key={module.name}
            className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50">
                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {module.name}
                  </h3>
                </div>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{module.description}</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {module.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start rounded-lg bg-violet-50/50 p-3 dark:bg-violet-900/20"
                >
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

