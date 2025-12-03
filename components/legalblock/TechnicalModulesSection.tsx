import { CogIcon } from "@/components/icons/SectionIcons";

export default function TechnicalModulesSection() {
  const modules = [
    {
      name: "Opportunity Intake",
      description: "Réception et validation des opportunités",
      details: [
        "Formulaire interactif multi-étapes",
        "Validation automatique des données",
        "Upload et traitement de documents",
        "Intégration avec systèmes externes",
      ],
    },
    {
      name: "Legal Strategy Engine",
      description: "Moteur de stratégie juridique",
      details: [
        "Analyse multi-critères",
        "Scoring des options",
        "Recommandations justifiées",
        "Optimisation automatique",
      ],
    },
    {
      name: "SPV Builder",
      description: "Construction automatique de structures SPV",
      details: [
        "Génération de structures complètes",
        "Configuration des statuts",
        "Définition des rôles et responsabilités",
        "Intégration des clauses spécifiques",
      ],
    },
    {
      name: "Contract Generator",
      description: "Génération de contrats",
      details: [
        "Templates modulaires",
        "Remplissage automatique",
        "Génération de clauses personnalisées",
        "Export multi-formats",
      ],
    },
    {
      name: "Risk & Compliance Engine",
      description: "Analyse de risques et conformité",
      details: [
        "KYC/AML automatique",
        "Vérification des sanctions",
        "Scoring des risques",
        "Rapports de conformité",
      ],
    },
    {
      name: "Filing & Dispatch Engine",
      description: "Envoi aux autorités et prestataires",
      details: [
        "Détection automatique des destinataires",
        "Préparation des filings",
        "Envoi sécurisé",
        "Suivi et notifications",
      ],
    },
    {
      name: "Tokenization Engine",
      description: "Génération des smart contracts",
      details: [
        "NFT Master ERC-721",
        "Vault Contract",
        "ERC-20 Shares",
        "Metadata juridique embarquée",
      ],
    },
    {
      name: "Document Vault",
      description: "Stockage et versioning",
      details: [
        "Stockage sécurisé",
        "Versioning automatique",
        "Historique des modifications",
        "Accès contrôlé",
      ],
    },
    {
      name: "AdvisorBlock AI Interface",
      description: "Interface avec l'IA",
      details: [
        "API pour moteur de règles",
        "Intégration LLM",
        "Gestion du contexte",
        "Optimisation des prompts",
      ],
    },
    {
      name: "Audit & Versioning",
      description: "Traçabilité et historique",
      details: [
        "Log de toutes les actions",
        "Historique des décisions",
        "Traçabilité complète",
        "Rapports d'audit",
      ],
    },
  ];

  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <CogIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 6 : Modules techniques
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Architecture technique complète</p>
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

