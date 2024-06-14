import { CardStackTestimonies } from "@/app/ui/home/testimonies-section/card-testimonies";

export default function TestimoniesSection() {
  return (
    <section className={`section testimonies`}>
      <div className="heading bg-[url('/assets/images/home-page/bg-testimonies.webp')] bg-no-repeat bg-center bg-cover">
        <h2>Ce Que Disent Nos Clients</h2>
        <div>
          <p>
            Chez Genius, nous sommes fiers de fournir des produits et services
            numériques exceptionnels qui contribuent au succès de nos clients.
            Voici ce que certains de nos clients satisfaits disent de leur
            expérience de travail avec nous
          </p>
        </div>
      </div>
      <CardStackTestimonies />
    </section>
  );
}
