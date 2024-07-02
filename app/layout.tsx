import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Home from "@/components/Home/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGame PWA",
  description: "This is IGame PWA Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <main>{children}</main> */}
        <Home />
        <Footer />
      </body>
    </html>
  );
}
