import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iwon Audiovisual | Videoclips para artistas independientes",
  description: "Videoclips con identidad cinematografica para artistas independientes de Buenos Aires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
