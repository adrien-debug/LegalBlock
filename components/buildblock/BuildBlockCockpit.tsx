"use client";

import { useState } from "react";
import { 
  CheckIcon,
  DocumentIcon,
  CodeIcon,
  ChartIcon,
  ArrowRightIcon,
  InfoIcon,
  ArrowLeftIcon
} from "@/components/icons/GeneralIcons";

interface Contract {
  id: string;
  name: string;
  type: "legal" | "smart-contract" | "company-status";
  status: "sent" | "pending" | "not-sent" | "ok" | "not-ok" | "validated";
  createdAt: string;
  sentAt?: string;
  apiResponse?: any;
  requestId: string;
}

interface Request {
  id: string;
  title: string;
  clientId: string;
  status: "analyzed" | "validated" | "pending" | "rejected";
  analyzedAt?: string;
  validatedAt?: string;
  assetType: string;
  assetValue: number;
  currency: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  company?: string;
}

type ViewMode = "overview" | "request-detail";

const mockClients: Client[] = [
  { id: "CLIENT-001", name: "John Doe", email: "john@example.com", company: "Dubai Real Estate LLC" },
  { id: "CLIENT-002", name: "Jane Smith", email: "jane@example.com", company: "Mining Corp" },
  { id: "CLIENT-003", name: "Robert Johnson", email: "robert@example.com", company: "Luxury Holdings" },
];

const mockRequests: Request[] = [
  {
    id: "REQ-001",
    title: "Luxury Villa - Dubai Marina",
    clientId: "CLIENT-001",
    status: "validated",
    analyzedAt: "2024-01-15T10:00:00Z",
    validatedAt: "2024-01-15T10:30:00Z",
    assetType: "real-estate",
    assetValue: 5000000,
    currency: "USD",
  },
  {
    id: "REQ-002",
    title: "Mining Equipment Batch #12",
    clientId: "CLIENT-002",
    status: "analyzed",
    analyzedAt: "2024-01-14T09:00:00Z",
    assetType: "mining",
    assetValue: 1200000,
    currency: "USD",
  },
  {
    id: "REQ-003",
    title: "Luxury Watch Collection",
    clientId: "CLIENT-003",
    status: "validated",
    analyzedAt: "2024-01-13T08:00:00Z",
    validatedAt: "2024-01-13T08:30:00Z",
    assetType: "luxury",
    assetValue: 850000,
    currency: "USD",
  },
];

const mockContracts: Contract[] = [
  // Request 1 - Validated
  { id: "C1-001", name: "Operating Agreement", type: "legal", status: "validated", createdAt: "2024-01-15T10:30:00Z", requestId: "REQ-001", sentAt: "2024-01-15T10:35:00Z", apiResponse: { success: true, validated: true } },
  { id: "C1-002", name: "Security Interest Agreement", type: "legal", status: "validated", createdAt: "2024-01-15T11:00:00Z", requestId: "REQ-001", sentAt: "2024-01-15T11:15:00Z", apiResponse: { success: true, validated: true } },
  { id: "C1-003", name: "NFT Master Contract", type: "smart-contract", status: "validated", createdAt: "2024-01-15T12:00:00Z", requestId: "REQ-001", sentAt: "2024-01-15T12:05:00Z", apiResponse: { txHash: "0x1234...5678", validated: true } },
  { id: "C1-004", name: "ERC-20 Fractionalization Contract", type: "smart-contract", status: "validated", createdAt: "2024-01-15T12:30:00Z", requestId: "REQ-001", sentAt: "2024-01-15T12:35:00Z", apiResponse: { txHash: "0xabcd...efgh", validated: true } },
  { id: "C1-005", name: "RAK ICC Articles of Association", type: "company-status", status: "validated", createdAt: "2024-01-15T13:00:00Z", requestId: "REQ-001", sentAt: "2024-01-15T13:10:00Z", apiResponse: { success: true, validated: true } },
  { id: "C1-006", name: "Memorandum of Association", type: "company-status", status: "validated", createdAt: "2024-01-15T13:30:00Z", requestId: "REQ-001", sentAt: "2024-01-15T13:35:00Z", apiResponse: { success: true, validated: true } },
  
  // Request 2 - Analyzed
  { id: "C2-001", name: "Operating Agreement", type: "legal", status: "ok", createdAt: "2024-01-14T10:00:00Z", requestId: "REQ-002", sentAt: "2024-01-14T10:10:00Z", apiResponse: { success: true } },
  { id: "C2-002", name: "Smart Contract Vault", type: "smart-contract", status: "pending", createdAt: "2024-01-14T11:00:00Z", requestId: "REQ-002" },
  { id: "C2-003", name: "Delaware LLC Articles", type: "company-status", status: "sent", createdAt: "2024-01-14T12:00:00Z", requestId: "REQ-002", sentAt: "2024-01-14T12:10:00Z" },
  
  // Request 3 - Validated
  { id: "C3-001", name: "Pledge Agreement", type: "legal", status: "validated", createdAt: "2024-01-13T09:00:00Z", requestId: "REQ-003", sentAt: "2024-01-13T09:10:00Z", apiResponse: { success: true, validated: true } },
  { id: "C3-002", name: "NFT Master Contract", type: "smart-contract", status: "validated", createdAt: "2024-01-13T10:00:00Z", requestId: "REQ-003", sentAt: "2024-01-13T10:05:00Z", apiResponse: { txHash: "0x9876...5432", validated: true } },
  { id: "C3-003", name: "ERC-20 Contract", type: "smart-contract", status: "validated", createdAt: "2024-01-13T11:00:00Z", requestId: "REQ-003", sentAt: "2024-01-13T11:05:00Z", apiResponse: { txHash: "0x1111...2222", validated: true } },
];

export default function BuildBlockCockpit() {
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const getClientById = (clientId: string) => {
    return mockClients.find(c => c.id === clientId);
  };

  const getRequestContracts = (requestId: string) => {
    return mockContracts.filter(c => c.requestId === requestId);
  };

  const getStatusColor = (status: Request["status"] | Contract["status"]) => {
    switch (status) {
      case "validated":
        return "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300";
      case "analyzed":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300";
      case "pending":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
      case "sent":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300";
      case "ok":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "not-ok":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const getStatusLabel = (status: Request["status"] | Contract["status"]) => {
    switch (status) {
      case "validated": return "Validated";
      case "analyzed": return "Analyzed";
      case "pending": return "Pending";
      case "rejected": return "Rejected";
      case "sent": return "Sent";
      case "ok": return "OK";
      case "not-ok": return "Not OK";
      default: return "Unknown";
    }
  };

  const validatedAndAnalyzedRequests = mockRequests.filter(
    r => r.status === "validated" || r.status === "analyzed"
  );

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
    setViewMode("request-detail");
  };

  const contractsByType = (contracts: Contract[], type: Contract["type"]) => {
    return contracts.filter(c => c.type === type);
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 backdrop-blur-sm dark:from-violet-900/30 dark:to-purple-900/30">
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            BUILD BLOCK - Document & Contract Generator
          </span>
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
          Build Block
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Generate contracts, smart contracts, and company statuses. Send them via API and track responses.
        </p>
      </div>

      {/* Navigation */}
      {viewMode === "request-detail" && selectedRequest && (
        <div className="mb-8">
          <button
            onClick={() => {
              setViewMode("overview");
              setSelectedRequest(null);
            }}
            className="flex items-center space-x-2 rounded-xl px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-violet-50 dark:text-slate-400 dark:hover:bg-violet-900/20"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Back to Overview</span>
          </button>
        </div>
      )}

      {/* Content */}
      {viewMode === "overview" && (
        <div className="space-y-8">
          {/* Statistics */}
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 dark:from-violet-900/20 dark:to-purple-900/20">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {mockClients.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Clients</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 dark:from-blue-900/20 dark:to-cyan-900/20">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {validatedAndAnalyzedRequests.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Validated & Analyzed</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {mockRequests.filter(r => r.status === "validated").length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Validated</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 dark:from-amber-900/20 dark:to-orange-900/20">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {mockContracts.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Documents</div>
              </div>
            </div>
          </div>

          {/* Clients List */}
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Clients & Validated Requests</h2>
            <div className="space-y-6">
              {mockClients.map((client) => {
                const clientRequests = validatedAndAnalyzedRequests.filter(r => r.clientId === client.id);
                if (clientRequests.length === 0) return null;

                return (
                  <div key={client.id} className="rounded-xl border-2 border-violet-200 bg-white p-6 dark:border-violet-800 dark:bg-slate-800">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {client.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {client.company || client.email}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                        {clientRequests.length} request{clientRequests.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {clientRequests.map((request) => {
                        const requestContracts = getRequestContracts(request.id);
                        return (
                          <button
                            key={request.id}
                            onClick={() => handleRequestClick(request)}
                            className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-600"
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="font-semibold text-slate-900 dark:text-white">
                                {request.title}
                              </h4>
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                                  request.status
                                )}`}
                              >
                                {getStatusLabel(request.status)}
                              </span>
                            </div>
                            <div className="mb-2 grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-slate-600 dark:text-slate-400">Asset Type: </span>
                                <span className="font-semibold text-slate-900 dark:text-white">{request.assetType}</span>
                              </div>
                              <div>
                                <span className="text-slate-600 dark:text-slate-400">Value: </span>
                                <span className="font-semibold text-slate-900 dark:text-white">
                                  {request.currency} {request.assetValue.toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div>
                                <span className="text-slate-600 dark:text-slate-400">
                                  {requestContracts.length} documents created
                                </span>
                              </div>
                              <ArrowRightIcon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {viewMode === "request-detail" && selectedRequest && (
        <div className="space-y-8">
          {/* Request Header */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedRequest.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {getClientById(selectedRequest.clientId)?.name} • {selectedRequest.id}
                </p>
              </div>
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(
                  selectedRequest.status
                )}`}
              >
                {getStatusLabel(selectedRequest.status)}
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Asset Type</p>
                <p className="font-semibold text-slate-900 dark:text-white">{selectedRequest.assetType}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Asset Value</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {selectedRequest.currency} {selectedRequest.assetValue.toLocaleString()}
                </p>
              </div>
              {selectedRequest.analyzedAt && (
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Analyzed At</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {new Date(selectedRequest.analyzedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Documents Sections */}
          {(() => {
            const requestContracts = getRequestContracts(selectedRequest.id);
            const legalContracts = contractsByType(requestContracts, "legal");
            const smartContracts = contractsByType(requestContracts, "smart-contract");
            const companyStatuses = contractsByType(requestContracts, "company-status");

            return (
              <>
                {/* Legal Contracts */}
                {legalContracts.length > 0 && (
                  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
                    <div className="mb-6 flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                        <DocumentIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Legal Contracts ({legalContracts.length})
                      </h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {legalContracts.map((contract) => (
                        <div
                          key={contract.id}
                          className="rounded-xl border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              {contract.name}
                            </h4>
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                                contract.status
                              )}`}
                            >
                              {getStatusLabel(contract.status)}
                            </span>
                          </div>
                          <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                            Created: {new Date(contract.createdAt).toLocaleDateString()}
                          </p>
                          {contract.sentAt && (
                            <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                              Sent: {new Date(contract.sentAt).toLocaleDateString()}
                            </p>
                          )}
                          {contract.apiResponse && (
                            <div className="mt-2 rounded-lg bg-slate-50 p-2 dark:bg-slate-900">
                              <pre className="text-xs text-slate-700 dark:text-slate-300">
                                {JSON.stringify(contract.apiResponse, null, 2)}
                              </pre>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Smart Contracts */}
                {smartContracts.length > 0 && (
                  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
                    <div className="mb-6 flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                        <CodeIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Smart Contracts ({smartContracts.length})
                      </h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {smartContracts.map((contract) => (
                        <div
                          key={contract.id}
                          className="rounded-xl border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              {contract.name}
                            </h4>
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                                contract.status
                              )}`}
                            >
                              {getStatusLabel(contract.status)}
                            </span>
                          </div>
                          <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                            Created: {new Date(contract.createdAt).toLocaleDateString()}
                          </p>
                          {contract.sentAt && (
                            <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                              Sent: {new Date(contract.sentAt).toLocaleDateString()}
                            </p>
                          )}
                          {contract.apiResponse && (
                            <div className="mt-2 rounded-lg bg-slate-50 p-2 dark:bg-slate-900">
                              <pre className="text-xs text-slate-700 dark:text-slate-300">
                                {JSON.stringify(contract.apiResponse, null, 2)}
                              </pre>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Company Statuses */}
                {companyStatuses.length > 0 && (
                  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
                    <div className="mb-6 flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                        <ChartIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Company Statuses ({companyStatuses.length})
                      </h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {companyStatuses.map((contract) => (
                        <div
                          key={contract.id}
                          className="rounded-xl border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              {contract.name}
                            </h4>
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                                contract.status
                              )}`}
                            >
                              {getStatusLabel(contract.status)}
                            </span>
                          </div>
                          <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                            Created: {new Date(contract.createdAt).toLocaleDateString()}
                          </p>
                          {contract.sentAt && (
                            <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                              Sent: {new Date(contract.sentAt).toLocaleDateString()}
                            </p>
                          )}
                          {contract.apiResponse && (
                            <div className="mt-2 rounded-lg bg-slate-50 p-2 dark:bg-slate-900">
                              <pre className="text-xs text-slate-700 dark:text-slate-300">
                                {JSON.stringify(contract.apiResponse, null, 2)}
                              </pre>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
