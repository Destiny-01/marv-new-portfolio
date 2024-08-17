import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vello's Portfolio | Web3 Product Designer",
  description:
    "Product Designer with 5 years of experience, currently specializing in chain abstraction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
