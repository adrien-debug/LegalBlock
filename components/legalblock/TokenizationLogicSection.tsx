import { CoinIcon } from "@/components/icons/SectionIcons";

export default function TokenizationLogicSection() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <CoinIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 9: Tokenization Logic
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">NFT Master and ERC-20 integration</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Integration with existing NFT Master system
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
              LEGALBLOCK integrates seamlessly with BlockBank's existing NFT Master system.
              Once the legal structure is created and validated, the tokenization process
              is automatically triggered.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-2 border-violet-200 p-4 dark:border-violet-800">
                <h4 className="mb-2 font-semibold">SPV Creation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  SPV structure is created with all legal documents
                </p>
              </div>
              <div className="rounded-lg border-2 border-violet-200 p-4 dark:border-violet-800">
                <h4 className="mb-2 font-semibold">Mint NFT Master</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  ERC-721 NFT is created and represents 100% of SPV shares
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Automatic smart contract generation
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                1. NFT Master (ERC-721)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• ERC-721 contract generation</li>
                <li>• Automatic mint with legal metadata</li>
                <li>• Link to legal documents (IPFS)</li>
                <li>• Owner = SPV address or initial owner</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                2. Vault Contract
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• NFT Master locking contract</li>
                <li>• Fractionalization management</li>
                <li>• Automatic revenue distribution</li>
                <li>• Buyback/burn mechanisms</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                3. ERC-20 Shares
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• ERC-20 contract generation</li>
                <li>• Fractional shares issuance</li>
                <li>• Distribution to investors</li>
                <li>• Integration with distribution system</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Embedded legal metadata
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
            Synchronization with legal documents
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Legal documents are stored on IPFS with secure hash</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Hashes are integrated into NFT metadata</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Any document modification creates a new version</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Complete history is traceable on-chain</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

