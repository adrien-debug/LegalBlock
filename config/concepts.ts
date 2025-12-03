type ConceptColor = "blue" | "purple" | "green";

export interface ConceptFlow {
  title: string;
  steps: string[];
  color: ConceptColor;
}

export const conceptFlows: ConceptFlow[] = [
  {
    title: "Tokenization Flow",
    steps: [
      "1. SPV Creation",
      "2. Asset Transfer",
      "3. Mint NFT Master",
      "4. Vault Locking",
      "5. ERC-20 Issuance",
      "6. Auto Distribution",
    ],
    color: "blue",
  },
  {
    title: "Legal Structure",
    steps: [
      "SPV = legal entity",
      "NFT = digital certificate",
      "Operating Agreement",
      "On-chain registry",
      "KYC/AML compliance",
      "Tax optimization",
    ],
    color: "purple",
  },
  {
    title: "Smart Contracts",
    steps: [
      "NFT ERC-721",
      "Vault Contract",
      "ERC-20 Shares",
      "Auto Distribution",
      "Buyback/Burn",
      "Multi-sig Security",
    ],
    color: "green",
  },
];

