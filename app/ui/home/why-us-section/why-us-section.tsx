"use client";
import {
  RiMedalFill,
  RiShieldFlashFill,
  RiUserVoiceFill,
  RiVipCrownFill,
} from "@remixicon/react";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  return (
    <section className={`section why-us`}>
      <div className="heading bg-[url('/assets/images/home-page/bg-why-us.webp')] bg-no-repeat bg-center bg-cover">
        <h2>Pourquoi Choisir CarmelCode?</h2>
        <div>
          <p>
            Faites l’expérience de l’excellence dans l’artisanat numérique avec
            notre équipe de professionnels qualifiés qui se consacrent à fournir
            des résultats exceptionnels.
          </p>
        </div>
      </div>
      <div className="content">
        <motion.div
          className="container first"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.4,
            easeInOut: "linear",
            duration: 3,
          }}
        >
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon stay-connected-bg-icon-box">
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
              <div className="service-icon stay-connected-bg-icon-box">
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
        </motion.div>
        <motion.div
          className="container second"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.4,
            easeInOut: "linear",
            duration: 3,
          }}
        >
          <div className="container-why">
            <div className="icon-and-title">
              <div className="service-icon stay-connected-bg-icon-box">
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
              <div className="service-icon stay-connected-bg-icon-box">
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
        </motion.div>
      </div>
    </section>
  );
}
