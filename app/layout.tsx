import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const barlow = Barlow({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const barlowCondensed = Barlow_Condensed({ variable: "--font-condensed", subsets: ["latin"], weight: ["400", "700", "800", "900"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Iwon Audiovisual | Impulso para artistas urbanos",
  description: "Landing standalone de Iwon Audiovisual.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
