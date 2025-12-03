import { SearchIcon } from "@/components/icons/SectionIcons";

export default function AnalysisProcessSection() {
  const jurisdictions = [
    { code: "RAK_ICC", name: "RAK ICC", description: "Ras Al Khaimah International Corporate Centre (UAE)" },
    { code: "DELAWARE", name: "Delaware LLC", description: "Delaware Limited Liability Company (USA)" },
    { code: "DIFC", name: "DIFC", description: "Dubai International Financial Centre (UAE)" },
    { code: "ADGM", name: "ADGM", description: "Abu Dhabi Global Market (UAE)" },
    { code: "FRANCE", name: "France", description: "Régime français (SCI, FCPR, etc.)" },
    { code: "EU", name: "EU", description: "Structures européennes (Luxembourg, Malte, etc.)" },
  ];

  const structures = [
    { name: "SPV", description: "Special Purpose Vehicle pour isolation des actifs" },
    { name: "LLC", description: "Limited Liability Company pour flexibilité opérationnelle" },
    { name: "Fiducie", description: "Trust structure pour gestion patrimoniale" },
    { name: "Gage", description: "Pledge pour garantie d'actifs mobiliers" },
    { name: "Security Interest", description: "Intérêt de sécurité pour actifs immobiliers" },
    { name: "Hypothèque", description: "Mortgage pour garantie immobilière" },
    { name: "Pledge", description: "Pledge Agreement pour actifs financiers" },
  ];

  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <SearchIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 4 : Processus d'analyse automatisée
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Analyse et recommandations</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Comment ADVISORBLOCK lit et analyse une opportunité
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Extraction et structuration des données du formulaire</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Analyse des documents uploadés (OCR + NLP)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Application du moteur de règles juridiques</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Analyse contextuelle par le moteur LLM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-violet-600 dark:text-violet-400">→</span>
                <span className="text-slate-700 dark:text-slate-300">Génération de recommandations avec scoring</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Décision automatique de la stratégie juridique optimale
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-600 dark:text-violet-400">
                Critères d'évaluation
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Type d'actif et valeur</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Juridiction du propriétaire</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Objectifs fiscaux</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Contraintes réglementaires</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Coûts d'incorporation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Flexibilité opérationnelle</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-3 font-semibold text-violet-600 dark:text-violet-400">
                Algorithme de décision
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Scoring multi-critères</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Comparaison des options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Optimisation des coûts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Minimisation des risques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-violet-600 dark:text-violet-400">•</span>
                  <span>Conformité garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Sélection de la juridiction
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
            Choix de la structure
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
            Analyse des risques et conformité
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">KYC</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Vérification de l'identité et du profil du propriétaire</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">AML</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Détection du blanchiment d'argent et financement du terrorisme</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h4 className="mb-2 font-semibold text-violet-600 dark:text-violet-400">Sanctions</h4>
              <p className="text-sm">Vérification des listes de sanctions internationales</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Pipeline juridique optimal
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="flex items-center justify-between overflow-x-auto">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </div>
                <span className="text-sm">Analyse</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </div>
                <span className="text-sm">Stratégie</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </div>
                <span className="text-sm">Génération</span>
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

