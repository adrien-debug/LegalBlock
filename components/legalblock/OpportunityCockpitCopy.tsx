"use client";

import { useState } from "react";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon, CreditIcon, RwaIcon } from "@/components/icons/AssetIcons";
import { CheckIcon, InfoIcon, WarningIcon, DocumentIcon, UploadIcon, CloseIcon, ArrowLeftIcon, ArrowRightIcon, SparklesIcon } from "@/components/icons/GeneralIcons";

interface FormData {
  // Step 1: Asset Information
  assetType: string;
  assetName: string;
  assetDescription: string;
  assetValue: string;
  currency: string;
  location: string;

  // Step 2: Contact Information
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerAddress: string;
  ownerNationality: string;

  // Step 3: Purpose
  purpose: string;
}

const steps = [
  { id: 1, name: "Asset Information", description: "Basic asset details" },
  { id: 2, name: "Contact Information", description: "Your contact details" },
  { id: 3, name: "Purpose", description: "Why tokenize this asset" },
];

export default function OpportunityCockpitCopy() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.assetType) newErrors.assetType = "Asset type is required";
        if (!formData.assetName) newErrors.assetName = "Asset name is required";
        if (!formData.assetValue) newErrors.assetValue = "Asset value is required";
        break;
      case 2:
        if (!formData.ownerName) newErrors.ownerName = "Name is required";
        if (!formData.ownerEmail) newErrors.ownerEmail = "Email is required";
        break;
      case 3:
        if (!formData.purpose) newErrors.purpose = "Purpose is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Here we would send data to the API
      console.log("Submitting data:", formData);
      alert("Opportunity submitted successfully! It will be analyzed by ADVISORBLOCK.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Asset formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <Step2Contact formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <Step3Purpose formData={formData} updateFormData={updateFormData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Premium Header */}
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 backdrop-blur-sm dark:from-violet-900/30 dark:to-purple-900/30">
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            BlockBank Premium Platform
          </span>
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
          New Opportunity
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Create your tokenization opportunity in a few steps
        </p>
      </div>

      {/* Premium Progress Bar */}
      <div className="mb-10">
        <div className="relative">
          {/* Connection Lines Background */}
          <div className="absolute left-0 right-0 top-8 z-0 flex">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="relative h-1 flex-1">
                <div className="absolute left-8 right-8 h-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 ${
                      currentStep > index + 1 ? "w-full" : currentStep === index + 1 ? "w-1/2" : "w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="relative z-10 flex items-start">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 flex-col items-center">
                {/* Step Circle */}
                <div className="relative mb-3">
                  {/* Glow effect for active step */}
                  {currentStep === step.id && (
                    <div className="absolute inset-0 animate-pulse rounded-full bg-violet-500/30 blur-xl"></div>
                  )}
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                      currentStep >= step.id
                        ? "border-violet-600 bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50"
                        : "border-slate-300 bg-white/80 backdrop-blur-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800/80"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckIcon className="h-7 w-7" />
                    ) : (
                      <span className="text-lg font-bold">{step.id}</span>
                    )}
                  </div>
                </div>
                
                {/* Step Text */}
                <div className="w-full max-w-[140px] text-center">
                  <p
                    className={`text-sm font-semibold transition-colors ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                        : "text-slate-500"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Step Content with Glassmorphism */}
      <div className="relative overflow-hidden rounded-3xl border border-violet-200/50 bg-gradient-to-br from-white/90 via-violet-50/30 to-purple-50/30 p-10 shadow-2xl backdrop-blur-xl dark:border-violet-800/50 dark:from-slate-900/90 dark:via-violet-900/20 dark:to-purple-900/20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>

        <div className="relative mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600"></div>
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {steps[currentStep - 1].name}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{steps[currentStep - 1].description}</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 p-4 shadow-lg shadow-violet-500/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{currentStep}</div>
              <div className="text-xs text-violet-100">/{steps.length}</div>
            </div>
          </div>
        </div>

        <div className="min-h-[450px]">{renderStepContent()}</div>

        {/* Premium Navigation Buttons */}
        <div className="mt-10 flex items-center justify-between border-t border-violet-200/50 pt-8 dark:border-violet-800/50">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`group flex items-center space-x-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
              currentStep === 1
                ? "cursor-not-allowed bg-slate-100/50 text-slate-400 dark:bg-slate-800/50 dark:text-slate-600"
                : "bg-white/80 text-slate-700 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Previous</span>
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/50 transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:shadow-xl hover:shadow-violet-500/60"
            >
              <span>Next</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:shadow-emerald-500/60"
            >
              <CheckIcon className="h-5 w-5" />
              <span>Submit Opportunity</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Step Components
function Step1Asset({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  const assetTypes = [
    { value: "real-estate", label: "Real Estate", description: "Residential, commercial properties", icon: RealEstateIcon },
    { value: "mining", label: "Mining", description: "Mining concessions", icon: MiningIcon },
    { value: "luxury", label: "Luxury Goods", description: "Jewelry, art, cars", icon: LuxuryIcon },
    { value: "business", label: "Business", description: "Companies, shares", icon: BusinessIcon },
    { value: "credit", label: "Credit", description: "Loans, receivables", icon: CreditIcon },
    { value: "rwa", label: "Other RWA", description: "Other real assets", icon: RwaIcon },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Asset Type <span className="text-red-500">*</span>
        </label>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {assetTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => updateFormData("assetType", type.value)}
              className={`group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                formData.assetType === type.value
                  ? "border-violet-600 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg shadow-violet-500/30 dark:border-violet-400 dark:from-violet-900/30 dark:to-purple-900/30"
                  : "border-slate-200 bg-white/80 backdrop-blur-sm hover:border-violet-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80"
              }`}
            >
              {formData.assetType === type.value && (
                <div className="absolute right-2 top-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div className="mb-2 flex items-center space-x-2">
                <type.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                <div className="text-xl font-semibold transition-transform group-hover:scale-105">{type.label}</div>
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{type.description}</div>
            </button>
          ))}
        </div>
        {errors.assetType && <p className="mt-2 text-sm text-red-500">{errors.assetType}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Asset Name <span className="text-red-500">*</span>
        </label>
          <input
            type="text"
            value={formData.assetName || ""}
            onChange={(e) => updateFormData("assetName", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="e.g., Luxury Villa in Dubai Marina"
          />
        {errors.assetName && <p className="mt-2 text-sm text-red-500">{errors.assetName}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Asset Description
        </label>
          <textarea
            value={formData.assetDescription || ""}
            onChange={(e) => updateFormData("assetDescription", e.target.value)}
            rows={4}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="Describe the asset..."
          />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Asset Value <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <select
              value={formData.currency || "USD"}
              onChange={(e) => updateFormData("currency", e.target.value)}
              className="rounded-l-xl border-2 border-r-0 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-50 px-5 py-4 font-semibold focus:outline-none dark:border-slate-700 dark:from-slate-800 dark:to-slate-700 dark:text-white"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="AED">AED</option>
            </select>
            <input
              type="number"
              value={formData.assetValue || ""}
              onChange={(e) => updateFormData("assetValue", e.target.value)}
              className="w-full rounded-r-xl border-2 border-l-0 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
              placeholder="5000000"
            />
          </div>
          {errors.assetValue && <p className="mt-2 text-sm text-red-500">{errors.assetValue}</p>}
        </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Location
        </label>
        <input
          type="text"
          value={formData.location || ""}
          onChange={(e) => updateFormData("location", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="e.g., Dubai, UAE"
          />
      </div>
      </div>
    </div>
  );
}

function Step2Contact({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 p-5 dark:from-violet-900/20 dark:to-purple-900/20 dark:border-violet-800/50">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600">
              <InfoIcon className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-medium text-violet-800 dark:text-violet-200">
            This information will be used for the automatic KYC/AML process and to contact you regarding your tokenization request.
            </p>
          </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.ownerName || ""}
            onChange={(e) => updateFormData("ownerName", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="John Doe"
          />
          {errors.ownerName && <p className="mt-2 text-sm text-red-500">{errors.ownerName}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Nationality
          </label>
          <input
            type="text"
            value={formData.ownerNationality || ""}
            onChange={(e) => updateFormData("ownerNationality", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="e.g., French, American, Emirati"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.ownerEmail || ""}
            onChange={(e) => updateFormData("ownerEmail", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="john.doe@example.com"
          />
          {errors.ownerEmail && <p className="mt-2 text-sm text-red-500">{errors.ownerEmail}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.ownerPhone || ""}
            onChange={(e) => updateFormData("ownerPhone", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Address
        </label>
        <textarea
          value={formData.ownerAddress || ""}
          onChange={(e) => updateFormData("ownerAddress", e.target.value)}
          rows={3}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="123 Main Street, City, Country"
        />
      </div>
    </div>
  );
}

function Step3Purpose({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 p-5 dark:from-violet-900/20 dark:to-purple-900/20 dark:border-violet-800/50">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600">
            <InfoIcon className="h-5 w-5 text-white" />
      </div>
          <p className="text-sm font-medium text-violet-800 dark:text-violet-200">
            ADVISORBLOCK will analyze your request and provide detailed recommendations after submission.
          </p>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Why do you want to tokenize this asset? <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.purpose || ""}
          onChange={(e) => updateFormData("purpose", e.target.value)}
          rows={6}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Describe your goals and reasons for tokenizing this asset. What are you trying to achieve?"
        />
        {errors.purpose && <p className="mt-2 text-sm text-red-500">{errors.purpose}</p>}
      </div>
    </div>
  );
}



