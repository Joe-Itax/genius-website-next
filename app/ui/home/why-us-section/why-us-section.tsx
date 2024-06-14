import {
  RiMedalFill,
  RiShieldFlashFill,
  RiUserVoiceFill,
  RiVipCrownFill,
} from "@remixicon/react";

export default function WhyUsSection() {
  return (
    <section className={`section why-us`}>
      <div className="heading bg-[url('/assets/images/home-page/bg-why-us.webp')] bg-no-repeat bg-center bg-cover">
        <h2>Pourquoi Choisir Genius?</h2>
        <div>
          <p>
            Faites l’expérience de l’excellence dans l’artisanat numérique avec
            notre équipe de professionnels qualifiés qui se consacrent à fournir
            des résultats exceptionnels.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="container first">
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon">
                <RiMedalFill className="icon" />
              </div>
              <h3>Expertise</h3>
            </div>
            <div className="paragraph">
              <p>
                Nous sommes experts en développement web et application, avec
                des années d&apos;expérience et une équipe de professionnels
                qualifiés. Nous utilisons les dernières technologies pour
                garantir des solutions modernes et efficaces.
              </p>
            </div>
          </div>
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon">
                <RiUserVoiceFill className="icon" />
              </div>
              <h3>Personnalisation</h3>
            </div>
            <div className="paragraph">
              <p>
                Chaque projet est unique. Nous offrons des solutions sur mesure
                adaptées à vos besoins spécifiques, en tenant compte de vos
                objectifs et de votre vision.
              </p>
            </div>
          </div>
        </div>
        <div className="container second">
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon">
                <RiShieldFlashFill className="icon" />
              </div>
              <h3>Support</h3>
            </div>
            <div className="paragraph">
              <p>
                Nous offrons un support client réactif et disponible pour
                répondre à vos questions et résoudre vos problèmes rapidement.
                Votre satisfaction est notre priorité.
              </p>
            </div>
          </div>
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon">
                <RiVipCrownFill className="icon" />
              </div>
              <h3>Rentabilité</h3>
            </div>
            <div className="paragraph">
              <p>
                Nous proposons des services de qualité à des tarifs compétitifs.
                Nos solutions sont conçues pour offrir un excellent retour sur
                investissement, en maximisant votre budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
