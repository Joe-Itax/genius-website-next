import Image from "next/image";
import Link from "next/link";
import "@/app/ui/styles/home.css";
import Button from "@/app/ui/button";

import {
  RiAtLine,
  RiEmotionHappyFill,
  RiEmotionUnhappyFill,
  RiMedalFill,
  RiShieldFlashFill,
  RiUserVoiceFill,
  RiVipCrownFill,
} from "@remixicon/react";
import { CardStackTestimonies } from "@/app/ui/home/card-testimonies";
import FaqSection from "@/app/ui/home/faq-section";
import Form from "@/app/ui/home/start-project-section/form";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="text-white">
        {/* Hero Section */}
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
                className="btn border-neutral-800 font-medium text-[1.2rem] bg-[#a21ade] hover:bg-[rgba(36,36,36,1)]"
              >
                Nos Réalisations
              </Link>
            </div>
            <div className="contact">
              <Link
                href="/contact"
                className="btn border-neutral-800 font-medium text-[1.2rem] bg-[rgba(36,36,36,1)] hover:bg-[#a21ade]"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </section>
        {/* Trust on Us Section */}
        {/* <section className={`section trust-on-us`}>
  Ils nous font confiance
</section> */}
        {/* Our Service Section */}
        <section className={`our-services`}>
          <div
            className={`heading  bg-[url('/assets/images/home-page/bg-our-service.webp')] bg-no-repeat bg-center bg-cover`}
          >
            <h2>Nos Services</h2>
            <div>
              <p>
                Transformez votre marque avec nos solutions numériques
                innovantes qui captivent et engagent votre public.
              </p>
            </div>
          </div>
          <div className="content grid items-start grid-cols-[repeat(3,1fr)]">
            <div className="service service1">
              <div className="container-service">
                <div className="icon-and-title">
                  <div className="service-icon">
                    <Image
                      src="assets/icons/Union.svg"
                      alt="Icon"
                      loading="lazy"
                      width={10}
                      height={10}
                    />
                  </div>
                  <h3>Sites Web</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Nous créons des sites web sur mesure, réactifs et optimisés
                    pour le SEO. Notre équipe utilise les technologies les plus
                    récentes pour garantir des performances optimales.
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Design personnalisé</li>
                    <li>Facile à gérer</li>
                    <li>Optimisation SEO</li>
                  </ul>
                </div>
              </div>
              <div className="button">
                <Link href="/services" className="btn see-more">
                  En Savoir Plus
                </Link>
              </div>
            </div>
            <div className="service service2">
              <div className="container-service">
                <div className="icon-and-title">
                  <div className="service-icon">
                    <Image
                      src="/assets/icons/Subtract.svg"
                      alt="Icon"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3>Applications web</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Nous développons des applications web robustes et évolutives
                    pour automatiser vos processus métiers et offrir une
                    expérience utilisateur exceptionnelle.
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Sécurité et scalabilité</li>
                    <li>Intégration API</li>
                    <li>Support multi-plateformes</li>
                  </ul>
                </div>
              </div>
              <div className="button">
                <Link href="/services" className="btn see-more">
                  En Savoir Plus
                </Link>
              </div>
            </div>
            <div className="service service3">
              <div className="container-service">
                <div className="icon-and-title">
                  <div className="service-icon">
                    <Image
                      src="/assets/icons/Vector.svg"
                      alt="Icon"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3>e-Commerce</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Boostez vos ventes en ligne avec nos solutions e-commerce
                    performantes, faciles à gérer et adaptées à vos besoins
                    spécifiques.
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Design intuitif</li>
                    <li>Gestion simplifiée</li>
                    <li>Transactions sécurisées</li>
                  </ul>
                </div>
              </div>
              <div className="button">
                <Link href="/services" className="btn see-more">
                  En Savoir Plus
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className={`section why-us`}>
          <div className="heading bg-[url('/assets/images/home-page/bg-why-us.webp')] bg-no-repeat bg-center bg-cover">
            <h2>Pourquoi Choisir Genius?</h2>
            <div>
              <p>
                Faites l’expérience de l’excellence dans l’artisanat numérique
                avec notre équipe de professionnels qualifiés qui se consacrent
                à fournir des résultats exceptionnels.
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
                    Nous sommes experts en développement web et application,
                    avec des années d&apos;expérience et une équipe de
                    professionnels qualifiés. Nous utilisons les dernières
                    technologies pour garantir des solutions modernes et
                    efficaces.
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
                    Chaque projet est unique. Nous offrons des solutions sur
                    mesure adaptées à vos besoins spécifiques, en tenant compte
                    de vos objectifs et de votre vision.
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
                    répondre à vos questions et résoudre vos problèmes
                    rapidement. Votre satisfaction est notre priorité.
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
                    Nous proposons des services de qualité à des tarifs
                    compétitifs. Nos solutions sont conçues pour offrir un
                    excellent retour sur investissement, en maximisant votre
                    budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonies Section */}
        <section className={`section testimonies`}>
          <div className="heading bg-[url('/assets/images/home-page/bg-testimonies.webp')] bg-no-repeat bg-center bg-cover">
            <h2>Ce Que Disent Nos Clients</h2>
            <div>
              <p>
                Chez Genius, nous sommes fiers de fournir des produits et
                services numériques exceptionnels qui contribuent au succès de
                nos clients. Voici ce que certains de nos clients satisfaits
                disent de leur expérience de travail avec nous
              </p>
            </div>
          </div>
          <CardStackTestimonies />
        </section>

        {/* FAQs Section */}
        <FaqSection />
        {/* Start A Project Section */}
        <section className={`section start_project`}>
          <div className="heading bg-[url('/assets/images/home-page/bg-contact.webp')] bg-no-repeat bg-center bg-cover">
            <div className="logo-box">
              <span className="logo">
                <RiAtLine />
                <span>Genius</span>
              </span>
            </div>
            <h2>Merci de Votre Intérêt pour Genius</h2>
            <div>
              <p>
                Nous serons ravis d’avoir de vos nouvelles et de discuter de la
                manière dont nous pouvons vous aider à donner vie à vos idées
                numériques.
              </p>
            </div>
            <div className="cta-start-project">
              <Link href="#start-project" className="btn">
                Start Project
              </Link>
            </div>
          </div>
          <div className="content" id="start-project">
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
