"use client";

import { useState } from "react";
import { DocumentTextIcon, RobotIcon } from "@/components/icons/SectionIcons";
import { HomeIcon, UploadIcon, CheckIcon as CheckIconGeneral } from "@/components/icons/GeneralIcons";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon, CreditIcon, RwaIcon } from "@/components/icons/AssetIcons";

export default function OpportunityFormSection() {
  const [activeTab, setActiveTab] = useState("fields");

  const assetTypes = [
    { value: "real-estate", label: "Immobilier", description: "Propriétés résidentielles, commerciales, terrains", icon: RealEstateIcon },
    { value: "mining", label: "Mining", description: "Concessions minières, droits d'extraction", icon: MiningIcon },
    { value: "luxury", label: "Luxury Goods", description: "Bijoux, montres, art, voitures de collection", icon: LuxuryIcon },
    { value: "business", label: "Business", description: "Entreprises, parts sociales, royalties", icon: BusinessIcon },
    { value: "credit", label: "Crédit", description: "Prêts, créances, obligations", icon: CreditIcon },
    { value: "rwa", label: "RWA", description: "Autres actifs réels tokenisables", icon: RwaIcon },
  ];

  const formFields = [
    { name: "valeur", label: "Valeur de l'actif", type: "number", required: true, description: "Valeur estimée en USD" },
    { name: "juridiction", label: "Juridiction préférée", type: "select", required: false, description: "RAK ICC, Delaware, DIFC, ADGM, France, EU" },
    { name: "identite", label: "Identité du propriétaire", type: "text", required: true, description: "Nom, nationalité, KYC" },
    { name: "finalite", label: "Finalité de la tokenisation", type: "textarea", required: true, description: "Raisons et objectifs" },
    { name: "ltv", label: "Loan-to-Value (LTV)", type: "number", required: false, description: "Ratio prêt/valeur en %" },
    { name: "duree", label: "Durée", type: "number", required: true, description: "Durée en années" },
    { name: "garanties", label: "Garanties", type: "textarea", required: false, description: "Garanties additionnelles" },
    { name: "flux_revenus", label: "Flux de revenus", type: "textarea", required: false, description: "Revenus attendus, périodicité" },
    { name: "documents", label: "Documents", type: "file", required: true, description: "Titre de propriété, certificats, etc." },
  ];

  return (
    <section className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 shadow-2xl dark:border-violet-800/50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
          <DocumentTextIcon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Section 3 : Formulaire "Nouvelle Opportunité"
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Saisie et validation des opportunités</p>
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
            Champs du Formulaire
          </button>
          <button
            onClick={() => setActiveTab("types")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "types"
                ? "border-b-2 border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                : "text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            }`}
          >
            Types d'Actifs
          </button>
          <button
            onClick={() => setActiveTab("process")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "process"
                ? "border-b-2 border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                : "text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            }`}
          >
            Processus de Soumission
          </button>
        </div>

        {/* Content */}
        {activeTab === "fields" && (
          <div className="rounded-xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Description détaillée des champs requis
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
              Exemples de types d'actifs
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
              Processus de soumission
            </h3>
            <ol className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <HomeIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Remplissage du formulaire</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    L'utilisateur complète tous les champs requis avec les informations de l'opportunité
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
                    <h4 className="font-semibold text-slate-900 dark:text-white">Upload des documents</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Téléchargement des documents justificatifs (titres de propriété, certificats, etc.)
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
                    <h4 className="font-semibold text-slate-900 dark:text-white">Validation automatique</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Vérification de la complétude et cohérence des données
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
                    <h4 className="font-semibold text-slate-900 dark:text-white">Soumission à ADVISORBLOCK</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    L'opportunité est transmise au moteur d'analyse pour traitement
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

