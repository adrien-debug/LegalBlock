import { LockClosedIcon } from "@/components/icons/SectionIcons";

export default function GovernanceSection() {
  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <LockClosedIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 10 : Gouvernance et sécurité
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Contrôles d'accès et audit</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Contrôles d'accès
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Rôles et Permissions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Administrateur système</li>
                <li>• Expert juridique</li>
                <li>• Opérateur</li>
                <li>• Lecteur seule</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Authentification
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Authentification multi-facteurs</li>
                <li>• SSO intégration</li>
                <li>• Gestion des sessions</li>
                <li>• Audit des connexions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Autorisations
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Contrôle granulaire</li>
                <li>• Approbations multi-niveaux</li>
                <li>• Restrictions par projet</li>
                <li>• Expiration automatique</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Traçabilité des décisions
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Événements tracés</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Création d'opportunité</li>
                  <li>• Décisions d'ADVISORBLOCK</li>
                  <li>• Modifications de documents</li>
                  <li>• Approbations et rejets</li>
                  <li>• Envois et dispatches</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Informations enregistrées</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Utilisateur et timestamp</li>
                  <li>• Justification de la décision</li>
                  <li>• Données avant/après modification</li>
                  <li>• Contexte et métadonnées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Audit trail
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border-2 border-indigo-200 p-4 dark:border-indigo-800">
                <div>
                  <h4 className="font-semibold">Log complet</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tous les événements sont enregistrés de manière immuable
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Immutable
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border-2 border-indigo-200 p-4 dark:border-indigo-800">
                <div>
                  <h4 className="font-semibold">Rapports d'audit</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Génération automatique de rapports pour compliance
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Automatique
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border-2 border-indigo-200 p-4 dark:border-indigo-800">
                <div>
                  <h4 className="font-semibold">Export et archivage</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Export des logs pour archivage long terme
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Disponible
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Versioning des documents
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <span>Chaque modification crée une nouvelle version</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <span>Historique complet accessible à tout moment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <span>Comparaison entre versions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <span>Restauration à une version antérieure</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Signatures électroniques
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Types de signatures
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Signature électronique simple</li>
                <li>• Signature électronique avancée</li>
                <li>• Signature électronique qualifiée (eIDAS)</li>
                <li>• Signature blockchain (hash on-chain)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Processus
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Workflow de signature multi-parties</li>
                <li>• Notifications automatiques</li>
                <li>• Traçabilité complète</li>
                <li>• Intégration avec prestataires tiers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

