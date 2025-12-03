import { PaperAirplaneIcon } from "@/components/icons/SectionIcons";

export default function DispatchLogicSection() {
  const recipients = [
    { name: "RAK ICC Registry", jurisdiction: "RAK ICC", type: "Authority" },
    { name: "Delaware Division of Corporations", jurisdiction: "Delaware", type: "Authority" },
    { name: "DLD (Dubai Land Department)", jurisdiction: "UAE", type: "Authority" },
    { name: "DIFC Courts", jurisdiction: "DIFC", type: "Authority" },
    { name: "BlockBank Internal Compliance", jurisdiction: "All", type: "Internal" },
    { name: "External Legal Firms", jurisdiction: "All", type: "External" },
  ];

  const decisionMatrix = [
    { asset: "UAE Real Estate", jurisdiction: "RAK ICC", recipients: ["RAK ICC Registry", "DLD", "BlockBank Compliance"] },
    { asset: "USA Real Estate", jurisdiction: "Delaware", recipients: ["Delaware Division", "BlockBank Compliance"] },
    { asset: "Luxury Goods", jurisdiction: "DIFC", recipients: ["DIFC Courts", "BlockBank Compliance", "Legal Firm"] },
    { asset: "Mining", jurisdiction: "RAK ICC", recipients: ["RAK ICC Registry", "BlockBank Compliance"] },
  ];

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <PaperAirplaneIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 8: Dispatch Logic
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Automatic dispatch to authorities</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Automatic recipient decision
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recipients.map((recipient) => (
              <div
                key={recipient.name}
                className="rounded-lg border-2 border-rose-200 bg-white p-4 dark:border-rose-800 dark:bg-slate-800"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold">{recipient.name}</h4>
                  <span className="rounded bg-rose-100 px-2 py-1 text-xs text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                    {recipient.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Juridiction: {recipient.jurisdiction}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Decision matrix by jurisdiction and asset type
          </h3>
          <div className="overflow-x-auto rounded-lg bg-white dark:bg-slate-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Asset Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Jurisdiction</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Recipients</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 dark:border-slate-700"
                  >
                    <td className="px-4 py-3 text-sm font-medium">{row.asset}</td>
                    <td className="px-4 py-3 text-sm">{row.jurisdiction}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-wrap gap-1">
                        {row.recipients.map((rec) => (
                          <span
                            key={rec}
                            className="rounded bg-rose-100 px-2 py-1 text-xs text-rose-700 dark:bg-rose-900/50 dark:text-rose-300"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Dispatch and tracking workflow
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h4 className="font-semibold">Automatic detection</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Identification of recipients according to selected strategy
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h4 className="font-semibold">Document preparation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Formatting and adaptation according to each recipient's requirements
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <div>
                  <h4 className="font-semibold">Secure dispatch</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Transmission via secure channels (API, encrypted email, portal)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h4 className="font-semibold">Tracking and notifications</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Status tracking, receipt and processing notifications
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

