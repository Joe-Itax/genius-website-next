import FirstSection from "@/app/ui/realisations/first-section/first-section";
import SecondSection from "@/app/ui/services/second-section/second-section";

export default function Realisations() {
  return (
    <main className="works-page">
      <div className="sub-main border-border border-x">
        <FirstSection />

        <SecondSection />
      </div>
    </main>
  );
}
