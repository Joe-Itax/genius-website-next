import type { Metadata } from "next";
import { barlow } from "@/app/ui/fonts";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import "@/app/ui/styles/global.css";
import "remixicon/fonts/remixicon.css";
import { cn } from "@/app/lib/utils";
import MyThemeProvider from "@/app/ui/components/ThemeProvider";

export const metadata: Metadata = {
  authors: [
    {
      name: "Joseph Itakala",
      url: "https://linkedin.com/in/joseph-itakala-2a6465250 | https://github.com/Joe-Itax",
    },
    {
      name: "Carmel Code",
      url: "https://carmelcode.dev | https://carmelcode.vercel.app | https://genius-services.vercel.app",
    },
  ],
  title: {
    default: "Carmel Code",
    template: "%s | Carmel Code",
  },
  description:
    "Agence web à Kinshasa, spécialisée en création de sites internet, applis web et solutions e-commerce. Transformez vos idées en réalité avec un devis gratuit!",
  keywords:
    "CarmelCode, carmelcode, carmel code RDC, Joseph Itakala, Itakala, Itax, Joe Itax, Carmel Itax, Carmel development, Carmel dev, Joseph Itax, Itax Dev, Itax Code, Carmel Code, Genius, Genius Development, Genius services, Genius service, Genius DRC, Genius RDC, Geniusdrc, Geniusrdc, developeur, developeur web ,développement web, agence web, création de sites internet, applications web, solutions e-commerce, Kinshasa, RDC, agence de développement, services web, conception web, développement de logiciels, devis gratuit, web agency",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(barlow.className, barlow.variable, "bg-background")}>
        <MyThemeProvider>
          <Header className="max-w-[1500px]" />
          {children}
          <Footer className="max-w-[1500px]" />
        </MyThemeProvider>
      </body>
    </html>
  );
}
