"use client";

import ConclusionSection from "@/app/ui/contact/conclusion-section";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Realisations() {
  return (
    <main>
      <div className="sub-main border-border border-x">
        <section className="hero bg-[url('/assets/images/our-service-page/bg-heading-our-service.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
          <h1>À Propos de Nous</h1>
          <p className="text-xl">
            Bienvenue chez Genius, où la collaboration, l&apos;expertise et
            l&apos;orientation client se croisent pour façonner l&apos;avenir de
            l&apos;innovation numérique.
          </p>
        </section>
        <motion.section
          className="flex flex-col min-[960px]:flex-row gap-8 min-[960px]:gap-0 justify-center items-center px-4 min-[400px]:px-8 min-[530px]:px-16 py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.3,
            easeInOut: "linear",
            duration: 2,
          }}
        >
          <div className="w-full min-[530px]:w-5/6 min-[960px]:w-1/2 flex flex-col gap-8">
            <h3 className="text-3xl font-bold">À Propos de Genius</h3>
            <div>
              <p>
                Genius est une agence de produits numériques passionnée par la
                création d&apos;expériences numériques exceptionnelles. Nous
                sommes spécialisés dans la conception, l’ingénierie et la
                gestion de projets, aidant les entreprises à prospérer dans le
                paysage numérique. Chez Genius, nous suivons un processus
                structuré et collaboratif pour garantir la livraison réussie de
                produits numériques exceptionnels. Notre processus combine les
                meilleures pratiques de l’industrie, une pensée créative et une
                approche centrée sur le client.
              </p>
            </div>
          </div>
          <div className="w-full min-[530px]:w-5/6 min-[960px]:w-1/2 flex justify-end">
            <div className="relative bg-background w-full min-[960px]:w-11/12">
              <Image
                src={"/assets/images/about-page/bg-logo.webp"}
                alt=""
                width={598}
                height={571}
                className="w-full bg-background rounded-xl"
              />
              <div className="bg-primary flex justify-center items-center rounded-full w-16 h-16 pb-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-4xl text-white block font-extrabold">
                  @
                </span>
              </div>
            </div>
          </div>
        </motion.section>
        <ConclusionSection />
      </div>
    </main>
  );
}
