import { DocumentIcon } from "@/components/icons/GeneralIcons";

export default function DocumentGenerationSection() {
  const documents = [
    { name: "Operating Agreement", category: "SPV", description: "Accord d'exploitation de la structure SPV" },
    { name: "Articles of Association", category: "SPV", description: "Statuts de la société" },
    { name: "Shareholders Agreement", category: "SPV", description: "Accord entre actionnaires" },
    { name: "Security Interest Agreement", category: "Garantie", description: "Accord d'intérêt de sécurité" },
    { name: "Pledge Agreement", category: "Garantie", description: "Accord de gage" },
    { name: "Fiducie-sûreté / Collateral Agreement", category: "Garantie", description: "Accord de fiducie-sûreté" },
    { name: "Contrat de Prêt", category: "Financement", description: "Contrat de prêt sécurisé" },
    { name: "Term Sheet", category: "Financement", description: "Fiche de conditions" },
    { name: "Résolutions SPV", category: "SPV", description: "Résolutions de l'assemblée" },
    { name: "NFT Master Token + metadata juridique", category: "Tokenisation", description: "NFT avec métadonnées juridiques embarquées" },
    { name: "Fractionalisation ERC-20", category: "Tokenisation", description: "Smart contract ERC-20 pour parts" },
    { name: "Fiches de dépôt et filings", category: "Administratif", description: "Documents pour dépôt aux autorités" },
  ];

  const categories = Array.from(new Set(documents.map((d) => d.category)));

  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <DocumentIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 5 : Génération automatique de documents
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Templates et personnalisation IA</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Liste complète des documents générés
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
            Processus de génération
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  1
                </span>
                <span className="text-slate-700 dark:text-slate-300">Récupération des données de l'opportunité et de la stratégie sélectionnée</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  2
                </span>
                <span className="text-slate-700 dark:text-slate-300">Sélection des templates appropriés selon la juridiction et structure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  3
                </span>
                <span className="text-slate-700 dark:text-slate-300">Remplissage automatique des champs avec les données</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  4
                </span>
                <span className="text-slate-700 dark:text-slate-300">Génération des clauses personnalisées par ADVISORBLOCK</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  5
                </span>
                <span className="text-slate-700 dark:text-slate-300">Validation et vérification de cohérence</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  6
                </span>
                <span className="text-slate-700 dark:text-slate-300">Export en formats multiples (PDF, DOCX, JSON pour smart contracts)</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Templates et personnalisation
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-700 dark:text-violet-300">Templates de Base</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates par juridiction (RAK ICC, Delaware, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates par type de structure (SPV, LLC, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Templates par type d'actif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Clauses standards validées juridiquement</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-700 dark:text-violet-300">Personnalisation IA</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Génération de clauses adaptées au contexte</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Optimisation selon les objectifs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Adaptation aux contraintes réglementaires</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Intégration des spécificités de l'actif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

