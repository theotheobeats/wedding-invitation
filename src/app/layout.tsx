import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MusicProvider } from "@/contexts/MusicContext";
import { translations } from "@/lib/translations";
import LanguageToggle from "@/components/common/LanguageToggle";

export const metadata: Metadata = {
  title: "Eci & Sho Wedding Invitation",
  description: "Wedding invitation for Eci & Sho - 16 Juni 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <LanguageProvider translations={translations}>
          <MusicProvider>
            <ClientBody>{children}</ClientBody>
            <LanguageToggle />
          </MusicProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
