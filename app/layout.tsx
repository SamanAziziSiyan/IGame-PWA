// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: "IranCP PWA",
  description: "IranCP is a marketplace for buying CP for games",
};

export const viewport: Viewport = {
  themeColor: "#111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
