import { LockClosedIcon } from "@/components/icons/SectionIcons";

export default function GovernanceSection() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <LockClosedIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 10: Governance and Security
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Access controls and audit</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Access controls
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Roles and Permissions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• System administrator</li>
                <li>• Legal expert</li>
                <li>• Operator</li>
                <li>• Read-only</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Authentication
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Multi-factor authentication</li>
                <li>• SSO integration</li>
                <li>• Session management</li>
                <li>• Login audit</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Authorizations
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Granular control</li>
                <li>• Multi-level approvals</li>
                <li>• Project-based restrictions</li>
                <li>• Automatic expiration</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Decision traceability
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Tracked Events</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Opportunity creation</li>
                  <li>• ADVISORBLOCK decisions</li>
                  <li>• Document modifications</li>
                  <li>• Approvals and rejections</li>
                  <li>• Dispatches and sends</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Recorded Information</h4>
                <ul className="space-y-2 text-sm">
                  <li>• User and timestamp</li>
                  <li>• Decision justification</li>
                  <li>• Data before/after modification</li>
                  <li>• Context and metadata</li>
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
                  <h4 className="font-semibold">Complete Log</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    All events are recorded immutably
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Immutable
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border-2 border-indigo-200 p-4 dark:border-indigo-800">
                <div>
                  <h4 className="font-semibold">Audit Reports</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Automatic report generation for compliance
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Automatic
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border-2 border-indigo-200 p-4 dark:border-indigo-800">
                <div>
                  <h4 className="font-semibold">Export and Archiving</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Log export for long-term archiving
                  </p>
                </div>
                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Document versioning
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <span>Each modification creates a new version</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <span>Complete history accessible at any time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <span>Comparison between versions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <span>Restoration to a previous version</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Electronic signatures
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Signature Types
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Simple electronic signature</li>
                <li>• Advanced electronic signature</li>
                <li>• Qualified electronic signature (eIDAS)</li>
                <li>• Blockchain signature (on-chain hash)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Process
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Multi-party signature workflow</li>
                <li>• Automatic notifications</li>
                <li>• Complete traceability</li>
                <li>• Integration with third-party providers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

