"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ConclusionSection() {
  return (
    <section className="border-t">
      <motion.div
        className="lg:p-4 flex flex-col gap-12 px-4 py-12"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          delay: 0.4,
          easeInOut: "linear",
          duration: 3,
        }}
      >
        <div className="first-part flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="bg-primary rounded-full pb-5 px-5">
            <span className="text-9xl text-white">@</span>
          </div>
          <div className="dark:text-[#98989A] text-[#525250] flex flex-col gap-4">
            <p className="text-3xl dark:text-[#98989A] text-[#525250] text-center md:text-left">
              Aujourd&apos;hui, Genius continue de prospérer en tant
              qu&apos;agence leader de produits numériques...
            </p>

            <p className="text-xl dark:text-[#98989A] text-[#525250] text-center md:text-left">
              Combiner la puissance de la conception, de l’ingénierie et de la
              gestion de projet pour créer des expériences numériques
              transformatrices. Ils vous invitent à les rejoindre dans leur
              parcours et à découvrir comment ils peuvent vous aider à donner
              vie à vos idées numériques.
            </p>
          </div>
        </div>

        <div className="second-part dark:bg-[rgba(36,36,36,0.2)] bg-[rgba(219,219,219,0.2)] rounded-xl px-4 py-6 border backdrop-blur-md flex flex-col md:flex-row items-center justify-center gap-5">
          <div>
            <span className="text-xl dark:text-[#98989A] text-[#3f3f3e]">
              Bienvenue chez Genius
            </span>
          </div>

          <div className="dark:bg-[#262626] bg-[#dfdfdf] px-5 py-4 rounded-md">
            <p className="text-xl text-center md:text-left">
              Où la collaboration, l’expertise et l’orientation client se
              croisent pour façonner l’avenir de l’innovation numérique.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <Link
              href="/contact"
              className="text-xl text-white bg-primary hover:bg-primary-foreground px-5 py-4 block rounded-md text-center w-full md:w-auto transition-all duration-500"
            >
              Start Projet
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
