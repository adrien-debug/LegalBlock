import { ArrowPathIcon } from "@/components/icons/SectionIcons";
import { WarningIcon, CheckIcon as CheckIconGeneral } from "@/components/icons/GeneralIcons";

export default function LegalFlowSection() {
  const steps = [
    {
      name: "Intake",
      description: "Réception de l'opportunité",
      details: ["Formulaire", "Documents", "Validation"],
    },
    {
      name: "Analyse",
      description: "Analyse par ADVISORBLOCK",
      details: ["Moteur de règles", "LLM", "Scoring"],
    },
    {
      name: "Stratégie",
      description: "Définition de la stratégie",
      details: ["Juridiction", "Structure", "Optimisation"],
    },
    {
      name: "Génération",
      description: "Création des documents",
      details: ["Templates", "Personnalisation", "Validation"],
    },
    {
      name: "Validation",
      description: "Approbation humaine",
      details: ["Review", "Modifications", "Approbation"],
    },
    {
      name: "Dispatch",
      description: "Envoi aux autorités",
      details: ["Filing", "Notifications", "Suivi"],
    },
    {
      name: "Tokenisation",
      description: "Création des smart contracts",
      details: ["NFT Master", "ERC-20", "Metadata"],
    },
  ];

  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <ArrowPathIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 7 : Flux LEGAL FLOW
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Pipeline complet de traitement</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Pipeline complet de traitement d'une opportunité
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            {/* Flow Diagram */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex min-w-max items-center space-x-4">
                {steps.map((step, index) => (
                  <div key={step.name} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{step.name}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mx-4 h-1 w-16 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Steps */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.name}
                  className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/80"
                >
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-xs text-white shadow-lg">
                      {index + 1}
                    </span>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{step.name}</h4>
                  </div>
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-xs text-slate-600 dark:text-slate-400">
                        <span className="mr-2 text-violet-600 dark:text-violet-400">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Points de contrôle et approbations
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <div className="mb-2 flex items-center space-x-2">
                <WarningIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                <h4 className="font-semibold text-violet-600 dark:text-violet-400">
                  Contrôle Automatique
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Validation des données et conformité de base</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <div className="mb-2 flex items-center space-x-2">
                <CheckIconGeneral className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                <h4 className="font-semibold text-violet-600 dark:text-violet-400">
                  Review Humaine
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Validation par expert juridique si nécessaire</p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <div className="mb-2 flex items-center space-x-2">
                <CheckIconGeneral className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Approbation Finale
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Signature et validation finale avant dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

