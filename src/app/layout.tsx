import type { Metadata, Viewport } from "next";
import { Fraunces, Literata, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const literata = Literata({
  subsets: ["latin", "latin-ext"],
  variable: "--font-literata",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://twoja-domena-tutaj.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spokojna gra przeglądarkowa o warzeniu mikstur i prowadzeniu warsztatu",
    template: "%s",
  },
  description:
    "Jednoosobowa, spokojna gra przeglądarkowa: zbierasz składniki, warzysz mikstury według własnych receptur i wypełniasz zlecenia mieszkańców miasteczka. Bez rywalizacji i bez presji czasu.",
  keywords: [
    "gra przeglądarkowa",
    "gra logiczna",
    "gra o warzeniu mikstur",
    "spokojna gra strategiczna",
    "gra po polsku",
  ],
  authors: [{ name: "niezależny twórca" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    title: "Spokojna gra przeglądarkowa o warzeniu mikstur i prowadzeniu warsztatu",
    description:
      "Zbieraj składniki, komponuj receptury i buduj reputację warsztatu w małym miasteczku.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gra o warzeniu mikstur i prowadzeniu warsztatu",
    description:
      "Spokojna gra przeglądarkowa o warzeniu mikstur i prowadzeniu warsztatu. Bez rywalizacji, bez presji.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4ecd8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${literata.variable} ${spaceMono.variable}`}>
      <body className="texture-paper">{children}</body>
    </html>
  );
}
