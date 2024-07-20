import "@/app/ui/styles/home.css";
import FaqSection from "@/app/ui/home/faq-section/faq-section";
import HeroSection from "@/app/ui/home/hero-section/hero-section";
import OurServicesSection from "@/app/ui/home/our-services-section/our-services-section";
import WhyUsSection from "@/app/ui/home/why-us-section/why-us-section";
import TestimoniesSection from "../ui/home/testimonies-section/testimonies-section";
import StartAProjectSection from "../ui/home/start-a-project-section/start-a-project-section";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="text-textColor">
        <div className="sub-main">
          {/* Hero Section */}
          <HeroSection />

          {/* Trust on Us Section */}
          {/* <section className={`section trust-on-us`}>
  Ils nous font confiance
</section> */}

          {/* Our Service Section */}
          <OurServicesSection />

          {/* Why Choose Us Section */}
          <WhyUsSection />

          {/* Testimonies Section */}
          <TestimoniesSection />

          {/* FAQs Section */}
          <FaqSection />

          {/* Start A Project Section */}
          <StartAProjectSection />
        </div>
      </main>
    </>
  );
}
