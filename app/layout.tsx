import type { Metadata } from "next";
import { barlow } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    default: "Genius Development",
    template: "%s | Genius Development",
  },
  description:
    "Agence de développement web basée à Kinshasa, RDC. Spécialisée dans la création de sites internet sur mesure, le développement d'applications web et la conception de solutions e-commerce. Nous transformons vos idées en réalité digitale. Contactez-nous pour un devis gratuit !",
  keywords:
    "développement web, agence web, création de sites internet, applications web, solutions e-commerce, Kinshasa, RDC, agence de développement, services web, conception web, développement de logiciels, devis gratuit, web agency",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
