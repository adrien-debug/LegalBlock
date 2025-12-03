import { RobotIcon } from "@/components/icons/SectionIcons";
import { CogIcon } from "@/components/icons/SectionIcons";
import { SparklesIcon2 } from "@/components/icons/GeneralIcons";

export default function AdvisorBlockSection() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <RobotIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 2: ADVISORBLOCK - The Legal Copilot
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Premium legal AI</p>
        </div>
      </div>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Premium legal AI description
          </h3>
          <p className="leading-relaxed">
            ADVISORBLOCK is the intelligent core of LEGALBLOCK, a legal copilot that
            combines two powerful engines to analyze, recommend and generate optimal
            legal strategies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <div className="mb-3 flex items-center space-x-3">
              <CogIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h4 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                Rules Engine
              </h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Structured legal knowledge base</li>
              <li>• Business rules by jurisdiction</li>
              <li>• Regulatory constraints</li>
              <li>• Validated best practices</li>
              <li>• Deterministic decisions</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <div className="mb-3 flex items-center space-x-3">
              <SparklesIcon2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h4 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                LLM Engine
              </h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Advanced contextual analysis</li>
              <li>• Natural language understanding</li>
              <li>• Personalized recommendations</li>
              <li>• Legal text generation</li>
              <li>• Complex reasoning</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Analysis and recommendation capabilities
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Jurisdictional Analysis</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Automatic comparison of advantages/disadvantages of each jurisdiction
              </p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Tax Optimization</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Automatic calculation of tax implications and recommendations
              </p>
            </div>
            <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-4 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
              <h5 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">Risk Analysis</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Identification and scoring of legal and regulatory risks
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Role in the decision-making process
          </h3>
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  1
                </span>
                <span className="text-slate-700 dark:text-slate-300">Analysis of submitted opportunity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  2
                </span>
                <span className="text-slate-700 dark:text-slate-300">Application of relevant legal rules</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  3
                </span>
                <span className="text-slate-700 dark:text-slate-300">Generation of recommendations with justifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  4
                </span>
                <span className="text-slate-700 dark:text-slate-300">Human validation and approval (if necessary)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  5
                </span>
                <span className="text-slate-700 dark:text-slate-300">Automatic execution of selected strategy</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

