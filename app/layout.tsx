import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHYSHA — Empowering Africa. Rewarding Innovation.",
  description:
    "KHYSHA is an Africa-focused AI, Web3 and technology ecosystem supporting education, innovation, creators, developers and digital opportunity.",
  keywords: [
    "KHYSHA",
    "KHY",
    "Africa",
    "AI",
    "Web3",
    "Blockchain",
    "African innovation",
    "Technology",
    "Digital education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
