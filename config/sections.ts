type SectionColor = "purple" | "blue" | "green" | "orange";
type Category = "legal" | "mechanism" | "code" | "analysis";

interface SectionCard {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: Category;
}

interface Section {
  title: string;
  subtitle: string;
  color: SectionColor;
  gridCols: string;
  cards: SectionCard[];
}

export const sectionsData: Section[] = [
  {
    title: "⚖️ Legal Section",
    subtitle: "All legal aspects, compliance and regulatory frameworks",
    color: "purple",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    cards: [
      {
        title: "LEGALBLOCK - Legal Automation",
        description:
          "Complete legal automation platform with ADVISORBLOCK, automatic document generation and tokenization",
        href: "/legalblock",
        icon: "🏛️",
        category: "legal",
      },
      {
        title: "Legal Notes UAE/USA",
        description:
          "Complete legal framework for RAK ICC (UAE) and Delaware LLC (USA), compliance, regulations and best practices",
        href: "/legal-notes",
        icon: "📜",
        category: "legal",
      },
      {
        title: "SPV Structure",
        description:
          "Creation and operation of Special Purpose Vehicles, incorporation, asset transfer and Operating Agreement modifications",
        href: "/spv-structure",
        icon: "🏢",
        category: "legal",
      },
      {
        title: "Luxury Goods - Legal Framework",
        description:
          "Financing and tokenization of luxury goods with Security Interest, Pledge Agreement and MENA/USA legal framework",
        href: "/luxury-goods",
        icon: "💎",
        category: "legal",
      },
    ],
  },
  {
    title: "⚙️ Mechanisms Section",
    subtitle: "How tokenization works: technical and operational processes",
    color: "blue",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    cards: [
      {
        title: "NFT Master Ownership",
        description:
          "How an ERC-721 NFT represents 100% of SPV shares, transfer mechanism and on-chain registry",
        href: "/nft-master",
        icon: "🎫",
        category: "mechanism",
      },
      {
        title: "ERC-20 Fractionalization",
        description:
          "NFT Master locking mechanism, ERC-20 shares creation, automatic revenue distribution",
        href: "/fractionalization",
        icon: "💰",
        category: "mechanism",
      },
      {
        title: "Complete Flow",
        description:
          "Visualization of the complete tokenization process, from SPV to ERC-20 shares",
        href: "/templates",
        icon: "🔄",
        category: "mechanism",
      },
    ],
  },
  {
    title: "💻 Smart Contracts Section",
    subtitle: "Contract code, technical architecture and implementation",
    color: "green",
    gridCols: "md:grid-cols-2",
    cards: [
      {
        title: "Templates & Code",
        description:
          "Code examples, smart contracts, EJS and React templates for implementation",
        href: "/templates",
        icon: "⚡",
        category: "code",
      },
      {
        title: "Technical Architecture",
        description:
          "Smart contracts structure, vault, automatic distribution and security mechanisms",
        href: "/fractionalization",
        icon: "🏗️",
        category: "code",
      },
    ],
  },
  {
    title: "📊 Analysis Section",
    subtitle: "Comparisons, advantages, disadvantages and recommendations",
    color: "orange",
    gridCols: "md:grid-cols-1",
    cards: [
      {
        title: "Comparison & Executive Summary",
        description:
          "Detailed comparison of structures, advantages/disadvantages, implementation roadmap and final recommendations",
        href: "/comparison",
        icon: "📊",
        category: "analysis",
      },
    ],
  },
];

