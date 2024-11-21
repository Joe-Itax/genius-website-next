"use client";

import { RiAtLine } from "@remixicon/react";
import Link from "next/link";
import ButtonStartProject from "@/app/ui/home/start-project-section/button-start-project";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SecondSection() {
  return (
    <motion.section
      className="second"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        delay: 0.7,
        easeInOut: "linear",
        duration: 7,
      }}
    >
      <div className="heading bg-[url('/assets/images/home-page/bg-contact.webp')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col items-center gap-8 text-center px-6 py-16">
          <div className="logo-box">
            <Image
              src={"/assets/images/logo1.png"}
              width={180}
              height={180}
              alt="Logo"
            />
          </div>
          <div>
            <h3 className="font-bold pb-4">
              Donnons vie à vos idées dans le monde numérique.
            </h3>
            <div className="flex justify-center">
              <p className="w-full md:w-2/3">
                Quels que soient les services que vous choisissez, nous nous
                engageons à fournir des résultats exceptionnels qui dépassent
                vos attentes. Notre équipe multidisciplinaire travaille en
                étroite collaboration pour assurer une collaboration
                transparente et une vision unifiée de votre produit numérique.
              </p>
            </div>
          </div>
          <Link href={"/contact"} className="cta-start-project mt-8">
            <ButtonStartProject className="btn btn-start-project bg-primary hover:border-primary hover:bg-transparent" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
