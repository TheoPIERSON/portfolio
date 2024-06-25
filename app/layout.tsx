import type { Metadata } from "next";
import { Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";

const NotoJapanese = Noto_Sans_Javanese({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Theo Pierson",
  description: "Junior Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          NotoJapanese.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
