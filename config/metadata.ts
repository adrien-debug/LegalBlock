import type { Metadata } from "next";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
};

export const metadataConfig: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "BlockBank Platform - RWA Tokenization Documentation",
  description:
    "Complete documentation of BlockBank's RWA tokenization structure, SPV architecture, NFT Master Ownership, and legal frameworks",
  openGraph: {
    title: "BlockBank - RWA Tokenization Platform",
    description: "Complete documentation of BlockBank's RWA tokenization structure, SPV architecture, NFT Master Ownership, and legal frameworks",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BlockBank - RWA Tokenization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockBank - RWA Tokenization Platform",
    description: "Complete documentation of BlockBank's RWA tokenization structure, SPV architecture, NFT Master Ownership, and legal frameworks",
    images: ["/opengraph-image"],
  },
};

