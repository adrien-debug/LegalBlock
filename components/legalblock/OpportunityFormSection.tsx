"use client";

import { useState } from "react";
import { DocumentTextIcon, RobotIcon } from "@/components/icons/SectionIcons";
import { HomeIcon, UploadIcon, CheckIcon as CheckIconGeneral } from "@/components/icons/GeneralIcons";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon, CreditIcon, RwaIcon } from "@/components/icons/AssetIcons";

export default function OpportunityFormSection() {
  const [activeTab, setActiveTab] = useState("fields");

  const assetTypes = [
    { value: "real-estate", label: "Real Estate", description: "Residential, commercial properties, land", icon: RealEstateIcon },
    { value: "mining", label: "Mining", description: "Mining concessions, extraction rights", icon: MiningIcon },
    { value: "luxury", label: "Luxury Goods", description: "Jewelry, watches, art, collector cars", icon: LuxuryIcon },
    { value: "business", label: "Business", description: "Companies, shares, royalties", icon: BusinessIcon },
    { value: "credit", label: "Credit", description: "Loans, receivables, bonds", icon: CreditIcon },
    { value: "rwa", label: "RWA", description: "Other tokenizable real assets", icon: RwaIcon },
  ];

  const formFields = [
    { name: "valeur", label: "Asset Value", type: "number", required: true, description: "Estimated value in USD" },
    { name: "juridiction", label: "Preferred Jurisdiction", type: "select", required: false, description: "RAK ICC, Delaware, DIFC, ADGM, France, EU" },
    { name: "identite", label: "Owner Identity", type: "text", required: true, description: "Name, nationality, KYC" },
    { name: "finalite", label: "Tokenization Purpose", type: "textarea", required: true, description: "Reasons and objectives" },
    { name: "ltv", label: "Loan-to-Value (LTV)", type: "number", required: false, description: "Loan/value ratio in %" },
    { name: "duree", label: "Duration", type: "number", required: true, description: "Duration in years" },
    { name: "garanties", label: "Guarantees", type: "textarea", required: false, description: "Additional guarantees" },
    { name: "flux_revenus", label: "Revenue Streams", type: "textarea", required: false, description: "Expected revenues, periodicity" },
    { name: "documents", label: "Documents", type: "file", required: true, description: "Title deeds, certificates, etc." },
  ];

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <DocumentTextIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 3: "New Opportunity" Form
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Opportunity entry and validation</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex space-x-2 border-b-2 border-violet-200 dark:border-violet-800">
          <button
            onClick={() => setActiveTab("fields")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "fields"
                ? "border-b-2 border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                : "text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            }`}
          >
            Form Fields
          </button>
          <button
            onClick={() => setActiveTab("types")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "types"
                ? "border-b-2 border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                : "text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            }`}
          >
            Asset Types
          </button>
          <button
            onClick={() => setActiveTab("process")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "process"
                ? "border-b-2 border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                : "text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            }`}
          >
            Submission Process
          </button>
        </div>

        {/* Content */}
        {activeTab === "fields" && (
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Detailed description of required fields
            </h3>
            <div className="space-y-4">
              {formFields.map((field) => (
                <div
                  key={field.name}
                  className="rounded-xl border-2 border-violet-200 bg-white/50 p-4 transition-all hover:border-violet-400 hover:shadow-md dark:border-violet-800 dark:bg-slate-800/50"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <label className="font-semibold text-slate-900 dark:text-white">
                      {field.label}
                      {field.required && <span className="ml-1 text-red-500">*</span>}
                    </label>
                    <span className="rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300">
                      {field.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{field.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "types" && (
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Asset type examples
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {assetTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.value}
                    className="group rounded-xl border-2 border-violet-200 bg-white/50 p-5 transition-all hover:border-violet-400 hover:bg-white hover:shadow-lg dark:border-violet-800 dark:bg-slate-800/50 dark:hover:border-violet-600"
                  >
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50">
                        <IconComponent className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{type.label}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Submission process
            </h3>
            <ol className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <HomeIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Form completion</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    User completes all required fields with opportunity information
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <UploadIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Document upload</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Upload of supporting documents (title deeds, certificates, etc.)
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <CheckIconGeneral className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Automatic validation</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Verification of data completeness and consistency
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  <span className="text-lg font-bold">4</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <RobotIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Submission to ADVISORBLOCK</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Opportunity is transmitted to the analysis engine for processing
                  </p>
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}

