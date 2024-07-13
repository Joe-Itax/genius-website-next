import type { Metadata } from "next";
import "@/app/ui/styles/services.css";
import FirstSection from "@/app/ui/services/first-section/first-section";
import SecondSection from "@/app/ui/services/second-section/second-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Service innovants et expertise pour vous aider à réussir vos projets. Solutions personnalisées pour vos besoins en développement, marketing et communication.",
};

export default function Services() {
  return (
    <>
      <main className="services-page">
        <div className="sub-main">
          <FirstSection />

          <SecondSection />
        </div>
      </main>
    </>
  );
}
