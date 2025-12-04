import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import KeyboardHandler from "@/components/KeyboardHandler";
import { inter } from "@/config/fonts";
import { metadataConfig } from "@/config/metadata";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <KeyboardHandler />
        <Sidebar />
        <div className="pl-0 lg:pl-80">
          <main className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-fuchsia-900/10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
