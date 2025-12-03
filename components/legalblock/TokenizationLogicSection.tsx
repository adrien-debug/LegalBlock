import { CoinIcon } from "@/components/icons/SectionIcons";

export default function TokenizationLogicSection() {
  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <CoinIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 9 : Logique de tokenisation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Intégration NFT Master et ERC-20</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Intégration avec le système NFT Master existant
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
              LEGALBLOCK s'intègre parfaitement avec le système NFT Master existant de BlockBank.
              Une fois la structure juridique créée et validée, le processus de tokenisation
              est déclenché automatiquement.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-2 border-violet-200 p-4 dark:border-violet-800">
                <h4 className="mb-2 font-semibold">Création SPV</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  La structure SPV est créée avec tous les documents légaux
                </p>
              </div>
              <div className="rounded-lg border-2 border-violet-200 p-4 dark:border-violet-800">
                <h4 className="mb-2 font-semibold">Mint NFT Master</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Le NFT ERC-721 est créé et représente 100% des parts SPV
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Génération automatique des smart contracts
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                1. NFT Master (ERC-721)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Génération du contrat ERC-721</li>
                <li>• Mint automatique avec metadata juridique</li>
                <li>• Lien vers les documents légaux (IPFS)</li>
                <li>• Propriétaire = adresse du SPV ou du propriétaire initial</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                2. Vault Contract
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Contrat de verrouillage du NFT Master</li>
                <li>• Gestion de la fractionalisation</li>
                <li>• Distribution automatique des revenus</li>
                <li>• Mécanismes de buyback/burn</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                3. ERC-20 Shares
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Génération du contrat ERC-20</li>
                <li>• Émission des parts fractionnées</li>
                <li>• Distribution aux investisseurs</li>
                <li>• Intégration avec le système de distribution</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Metadata juridique embarquée
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <pre className="overflow-x-auto text-sm">
{`{
  "legal": {
    "jurisdiction": "RAK ICC",
    "structure": "SPV",
    "spvId": "SPV-2024-001",
    "documents": {
      "operatingAgreement": "ipfs://...",
      "articlesOfAssociation": "ipfs://...",
      "shareholdersAgreement": "ipfs://..."
    },
    "compliance": {
      "kyc": true,
      "aml": true,
      "sanctions": false
    },
    "registry": {
      "rakIccNumber": "RAK-ICC-12345",
      "filingDate": "2024-01-15"
    }
  },
  "asset": {
    "type": "real-estate",
    "value": 5000000,
    "location": "Dubai, UAE"
  }
}`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Synchronisation avec les documents légaux
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Les documents légaux sont stockés sur IPFS avec hash sécurisé</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Les hashs sont intégrés dans la metadata du NFT</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Toute modification des documents crée une nouvelle version</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>L'historique complet est traçable on-chain</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

