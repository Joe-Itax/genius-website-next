import type { Metadata } from "next";
import "@/app/ui/styles/services.css";
import { servicesObject } from "@/app/ui/services/service";
import { RiAtLine } from "@remixicon/react";
import ButtonStartProject from "@/app/ui/home/start-project-section/button-start-project";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Service innovants et expertise pour vous aider à réussir vos projets. Solutions personnalisées pour vos besoins en développement, marketing et communication.",
};

export default function Services() {
  return (
    <>
      <main className="services-page">
        <div className="sub-main">
          <section className="first">
            <div className="hero bg-[url('/assets/images/our-service-page/bg-heading-our-service.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
              <h1>Nos Services</h1>
              <p className="text-xl">
                Transformez votre marque avec nos solutions numériques
                innovantes qui captivent et engagent votre public.
              </p>
            </div>

            {servicesObject.map((service, i) => (
              <div className="main-container" key={`${service.mainTitle}-${i}`}>
                <div className="head pt-10 px-10 max-[450px]:px-4">
                  <h2>{service.mainTitle}</h2>
                  <div>
                    <p className="description-of-service">
                      {service.description}
                    </p>
                  </div>
                  <div className="my-10 min-[500px]:w-max btn bg-[#262626]">
                    <span>{service.intro}</span>
                  </div>
                </div>
                <div className="">
                  <div className="content flex">
                    {service.subCategories?.map((subCategory, j) => (
                      <div className="block-" key={j}>
                        <h3 className="title-service">{subCategory.title}</h3>
                        <div className="content-expanded border-y">
                          <div className="flex flex-col w-full md:flex-row px-10 max-[450px]:px-4">
                            {subCategory.items.map((item, k) => (
                              <div className="content-expanded-content" key={k}>
                                <div className="icon-box">{item.icon}</div>
                                <div>
                                  <p>
                                    {item.title} {item?.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="second">
            <div className="heading bg-[url('/assets/images/home-page/bg-contact.webp')] bg-no-repeat bg-center bg-cover">
              <div className="flex flex-col items-center gap-8 text-center px-6 py-16">
                <div className="logo-box">
                  <span className="logo flex items-center justify-center gap-[5px]">
                    <RiAtLine size={80} />
                  </span>
                </div>
                <div>
                  <h3 className="font-bold pb-4">
                    Donnons vie à vos idées dans le monde numérique.
                  </h3>
                  <div className="flex justify-center">
                    <p className="w-full md:w-2/3">
                      Quels que soient les services que vous choisissez, nous
                      nous engageons à fournir des résultats exceptionnels qui
                      dépassent vos attentes. Notre équipe multidisciplinaire
                      travaille en étroite collaboration pour assurer une
                      collaboration transparente et une vision unifiée de votre
                      produit numérique.
                    </p>
                  </div>
                </div>
                <Link href={"/contact"} className="cta-start-project mt-8">
                  <ButtonStartProject className="btn btn-start-project bg-primary hover:border-primary hover:bg-transparent" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
