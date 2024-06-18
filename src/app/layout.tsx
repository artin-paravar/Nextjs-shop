import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShopContextProvider } from "./context/shop-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopContextProvider>{children}</ShopContextProvider>
      </body>
    </html>
  );
}
