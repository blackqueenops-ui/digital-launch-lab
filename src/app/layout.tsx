import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Launch Lab | Digital Strategy for Industrial and B2B Growth",
    template: "%s | Digital Launch Lab",
  },
  description:
    "We help industrial and technology-focused businesses design digital products, build B2B sales channels, and structure online commercial strategies across Europe.",
  keywords: [
    "B2B consulting",
    "digital strategy",
    "industrial digital transformation",
    "B2B sales channels",
    "digital product strategy",
    "Europe",
  ],
  authors: [{ name: "Digital Launch Lab" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
