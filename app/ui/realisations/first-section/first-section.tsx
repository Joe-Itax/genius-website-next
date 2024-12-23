"use client";

import { ourWorks } from "@/app/ui/realisations/realisations";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import IconCloudUsed from "@/app/ui/components/magicui/icon-cloud-used";
import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <section className="first">
      <div className="hero bg-[url('/assets/images/work-page/bg-hero-workspage.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
        <h1>Nos Réalisations</h1>
        <p className="text-xl">
          Découvrez un portfolio de projets numériques visuellement
          époustouflants et stratégiquement conçus qui mettent en valeur notre
          créativité et notre expertise.
        </p>
      </div>

      <div className="main-container">
        <div className="head pt-10 px-10 max-[450px]:px-4">
          <h2>Chez CarmelCode</h2>
          <div>
            <p className="description-of-service">
              Nous avons eu le privilège de travailler avec un large éventail de
              clients et de proposer des produits numériques exceptionnels qui
              conduisent au succès.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <IconCloudUsed />
          </div>

          <div className="my-10 min-[500px]:w-max btn dark:bg-[#262626] bg-[#dfdfdf]">
            <span>Les projets dont nous sommes fiers</span>
          </div>
        </div>

        <div className="flex lg:flex-wrap flex-col lg:flex-row w-full">
          {ourWorks.map((work, i) => (
            <motion.div
              key={`${i}-${work.nameOfSite}`}
              className="lg:w-1/2 w-full border-t border-r flex flex-col"
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
              <div className="border-b w-full h-36 px-10 max-[450px]:px-4 flex items-center">
                <span className="font-bold dark:text-[#98989A] text-[#525250] text-2xl">
                  {work.titleProject}
                </span>
              </div>

              <div className="px-10 max-[450px]:px-4 my-8 w-full">
                <Image
                  alt={`Image-${work.nameOfSite}`}
                  src={work.urlImgProject}
                  width={700}
                  height={425}
                  className="rounded-3xl w-full h-full"
                />
              </div>

              <div className="px-10 max-[450px]:px-4">
                <div>
                  <span>{work.nameOfSite}</span>
                </div>

                <div className="flex justify-between items-center py-4 gap-8">
                  <div className="dark:bg-[#262626] bg-[#dfdfdf] rounded-md">
                    <Link
                      href={work.urlOfSite}
                      target="_blank"
                      className="dark:text-[#98989A] text-[#525250] w-full block px-2 py-4"
                    >
                      {work.urlOfSite}
                    </Link>
                  </div>

                  <div className="dark:bg-[#262626] bg-[#dfdfdf] rounded-md w-14 h-14 flex justify-center items-center">
                    <Link
                      href={work.urlOfSite}
                      target="_blank"
                      className="flex justify-center items-center h-full w-full p-3"
                      aria-label={`Visiter le site ${work.nameOfSite}`}
                      title={`Visiter le site ${work.nameOfSite}`}
                    >
                      <RiArrowRightUpLine className="fill-primary" size={35} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-10 max-[450px]:px-4 py-8">
                <p className="dark:text-[#98989A] text-[#525250]">
                  {work.descriptionOfProject}
                </p>
              </div>

              <div className="px-10 max-[450px]:px-4 pb-8 dark:text-[#d8d8d8] text-[#494949]">
                <p>
                  <span className="font-bold">Technologies:</span>
                  <span className=""> {work.technologies}</span>
                </p>

                <p>
                  <span className="font-bold">Date de réalisation:</span>
                  <span className=""> {work.dateRealisation}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
