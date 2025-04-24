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
  title: "Nexeo - Carte NFC Professionnelle & Partage Instantané",
  description: "Nexeo propose des cartes NFC innovantes pour partager vos coordonnées et informations professionnelles instantanément, sans contact et sans application.",
  keywords: [
    "Carte NFC",
    "Carte de visite digitale",
    "Networking",
    "Business card",
    "Partage sans contact",
    "Carte professionnelle",
    "Nexeo",
    "Carte connectée",
    "Networking moderne"
  ],
  openGraph: {
    title: "Nexeo - Carte NFC Professionnelle & Partage Instantané",
    description: "Partagez vos coordonnées et informations professionnelles en un geste grâce à Nexeo, la carte NFC moderne.",
    url: "https://nexeo.com/",
    siteName: "Nexeo",
    images: [
      {
        url: "https://nexeo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexeo Carte NFC"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexeo - Carte NFC Professionnelle & Partage Instantané",
    description: "Nexeo propose des cartes NFC innovantes pour le networking et le partage instantané de contacts.",
    site: "@nexeo",
    creator: "@nexeo"
  },
  metadataBase: new URL("https://nexeo.com/")
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
