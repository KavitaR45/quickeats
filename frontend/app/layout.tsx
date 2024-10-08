import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/cartContext';
import Header from "@/components/header";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Eats",
  description: "Quick Eats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
      <body className={inter.className}>
        <Header/>{children} <Toaster position="top-center" richColors  /></body>
      </CartProvider>
    </html>
  );
}
