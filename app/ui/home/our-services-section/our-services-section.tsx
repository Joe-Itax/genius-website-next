"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurServicesSection() {
  return (
    <section className={`our-services`}>
      <div
        className={`heading  bg-[url('/assets/images/home-page/bg-our-service.webp')] bg-no-repeat bg-center bg-cover`}
      >
        <h2>Nos Services</h2>
        <div>
          <p>
            Transformez votre marque avec nos solutions numériques innovantes
            qui captivent et engagent votre public.
          </p>
        </div>
      </div>
      <motion.div
        className="content grid items-start grid-cols-[repeat(3,1fr)] max-[800px]:grid-cols-[repeat(1,1fr)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          delay: 0.4,
          easeInOut: "linear",
          duration: 3,
        }}
      >
        <div className="service service1">
          <div className="container-service">
            <div className="icon-and-title">
              <div className="service-icon stay-connected-bg-icon-box">
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
                Nous créons des sites web sur mesure, réactifs et optimisés pour
                le SEO. Notre équipe utilise les technologies les plus récentes
                pour garantir des performances optimales.
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
              <div className="service-icon stay-connected-bg-icon-box">
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
                pour automatiser vos processus métiers et offrir une expérience
                utilisateur exceptionnelle.
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
              <div className="service-icon stay-connected-bg-icon-box">
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
      </motion.div>
    </section>
  );
}
