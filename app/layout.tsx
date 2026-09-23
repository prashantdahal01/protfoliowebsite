import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://prashantdahal.dev"),
  title: "Prashant Dahal | Creative Developer",
  description: "Creative developer building high-performance interfaces, motion systems, and scroll-linked stories.",
  openGraph: {
    title: "Prashant Dahal | Creative Developer",
    description: "Interfaces, motion systems, and scroll-linked stories.",
    images: ["/sequence/frame_08_delay-0.066s.webp"]
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prashant Dahal",
  jobTitle: "Creative Developer",
  url: "https://prashantdahal.dev",
  sameAs: ["https://github.com/prashantdahal01", "https://www.linkedin.com/in/prashant-dahal-ba7564234/"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-ink font-sans text-white antialiased">
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ScrollToTop />
          <Analytics />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        </ThemeProvider>
      </body>
    </html>
  );
}

