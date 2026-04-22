import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Scrollytelling creative developer portfolio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-ink`}>
      <body className="min-h-screen bg-ink font-sans text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}

