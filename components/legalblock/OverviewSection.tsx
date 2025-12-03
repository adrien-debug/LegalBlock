import { ClipboardIcon } from "@/components/icons/SectionIcons";

export default function OverviewSection() {
  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <ClipboardIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 1 : Vue d'ensemble LEGALBLOCK
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Architecture et objectifs</p>
        </div>
      </div>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Description de la plateforme d'automatisation juridique
          </h3>
          <p className="leading-relaxed">
            LEGALBLOCK est une plateforme complète d'automatisation juridique conçue pour
            transformer le processus de tokenisation d'actifs réels (RWA). Elle combine
            intelligence artificielle, moteurs de règles juridiques et génération automatique
            de documents pour créer des structures légales optimisées en quelques minutes
            au lieu de plusieurs semaines.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Objectifs et valeur ajoutée
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Rapidité :</strong> Réduction du temps de création de structures juridiques
              de 3-6 semaines à quelques heures
            </li>
            <li>
              <strong>Précision :</strong> Élimination des erreurs humaines grâce à l'automatisation
            </li>
            <li>
              <strong>Conformité :</strong> Garantie de conformité avec les réglementations
              internationales (KYC, AML, sanctions)
            </li>
            <li>
              <strong>Optimisation :</strong> Sélection automatique de la juridiction et structure
              optimales selon le type d'actif
            </li>
            <li>
              <strong>Traçabilité :</strong> Audit trail complet de toutes les décisions et
              modifications
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Architecture générale
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <pre className="overflow-x-auto text-sm font-mono text-slate-700 dark:text-slate-300">
{`LEGALBLOCK Architecture
├── Opportunity Intake
│   └── Formulaire d'opportunité
├── ADVISORBLOCK (IA Juridique)
│   ├── Moteur de règles
│   └── Moteur LLM
├── Legal Strategy Engine
│   ├── Sélection juridiction
│   └── Sélection structure
├── Contract Generator
│   └── Génération documents
├── Risk & Compliance Engine
│   ├── KYC/AML
│   └── Sanctions screening
├── Filing & Dispatch Engine
│   └── Envoi automatique
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

