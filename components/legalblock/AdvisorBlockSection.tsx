import { RobotIcon } from "@/components/icons/SectionIcons";
import { CogIcon } from "@/components/icons/SectionIcons";
import { SparklesIcon2 } from "@/components/icons/GeneralIcons";

export default function AdvisorBlockSection() {
  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <RobotIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 2 : ADVISORBLOCK - Le Copilote Juridique
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">IA juridique premium</p>
        </div>
      </div>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Description de l'IA juridique premium
          </h3>
          <p className="leading-relaxed">
            ADVISORBLOCK est le cœur intelligent de LEGALBLOCK, un copilote juridique qui
            combine deux moteurs puissants pour analyser, recommander et générer des stratégies
            juridiques optimales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <div className="mb-3 flex items-center space-x-3">
              <CogIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h4 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                Moteur de Règles
              </h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Base de connaissances juridique structurée</li>
              <li>• Règles métier par juridiction</li>
              <li>• Contraintes réglementaires</li>
              <li>• Meilleures pratiques validées</li>
              <li>• Décisions déterministes</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <div className="mb-3 flex items-center space-x-3">
              <SparklesIcon2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h4 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                Moteur LLM
              </h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Analyse contextuelle avancée</li>
              <li>• Compréhension du langage naturel</li>
              <li>• Recommandations personnalisées</li>
              <li>• Génération de textes juridiques</li>
              <li>• Raisonnement complexe</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Capacités d'analyse et de recommandation
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Analyse Juridictionnelle</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Comparaison automatique des avantages/inconvénients de chaque juridiction
              </p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Optimisation Fiscale</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Calcul automatique des implications fiscales et recommandations
              </p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Analyse de Risques</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Identification et scoring des risques juridiques et réglementaires
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Rôle dans le processus décisionnel
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  1
                </span>
                <span className="text-slate-700 dark:text-slate-300">Analyse de l'opportunité soumise</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  2
                </span>
                <span className="text-slate-700 dark:text-slate-300">Application des règles juridiques pertinentes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  3
                </span>
                <span className="text-slate-700 dark:text-slate-300">Génération de recommandations avec justifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  4
                </span>
                <span className="text-slate-700 dark:text-slate-300">Validation et approbation humaine (si nécessaire)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  5
                </span>
                <span className="text-slate-700 dark:text-slate-300">Exécution automatique de la stratégie sélectionnée</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

