import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sahishnu — Portfolio",
  description: "Projects, writing, and systems work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-black text-white antialiased`}>
        {/* Background layers */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 noise opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_20%,rgba(236,72,153,0.18),transparent_55%)]" />
        </div>

        {/* Page */}
        <div className="relative mx-auto w-full max-w-6xl px-5">
          {children}
        </div>
      </body>
    </html>
  );
}
