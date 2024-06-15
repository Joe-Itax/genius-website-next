import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className={`hero-section bg-[url('/assets/images/home-page/bg-hero-section.svg')] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center gap-8 mb-8 border-b border-solid border-border max-[800px]:px-4 max-[600px]:h-auto max-[600px]:px-4 max-[600px]:py-36`}
    >
      <h1 className="hero-title text-white text-center">
        Ici, le Génie est au Service de vos Ambitions Numériques
      </h1>
      <div className="for-startup_and_more border backdrop-blur-md px-8 py-4 rounded-xl border-solid border-border bg-[rgba(36,36,36,0.2)]">
        <p
          className={`text-[#c8c8cc] text-[1.375rem] text-center max-[950px]:text-base`}
        >
          Pour <span className="detail btn">Startups</span>,&nbsp;
          <span className="detail btn">Dirigeants d&apos;entreprise</span>
          ,&nbsp;
          <span className="detail btn">Medias &amp; Editeurs</span> et&nbsp;
          <span className="detail btn">Bien Social</span>
        </p>
      </div>
      <div className="cta_hero-section flex flex-wrap justify-center gap-6 pt-4 text-white max-[600px]:gap-10">
        <div className="realisation">
          <Link
            href="/realisations"
            className="btn border-border font-medium text-[1.2rem] bg-primary hover:bg-[rgba(36,36,36,1)]"
          >
            Nos Réalisations
          </Link>
        </div>
        <div className="contact">
          <Link
            href="/contact"
            className="btn border-border font-medium text-[1.2rem] bg-[rgba(36,36,36,1)] hover:bg-primary"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
