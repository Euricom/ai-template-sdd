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
  title: "Claude Code Agent Files - Browse and Share Agent Configurations",
  description: "Discover, browse, and share Claude Code agent configuration files. Copy agent files to your clipboard and contribute your own configurations to the community.",
  keywords: ["claude code", "agent files", "ai agents", "code automation", "developer tools"],
  authors: [{ name: "Claude Code Community" }],
  openGraph: {
    title: "Claude Code Agent Files",
    description: "Browse and share Claude Code agent configuration files",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
