import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Home from "@/components/Home/components/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });
8
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
    <html lang="fa">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
