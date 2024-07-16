import type { Metadata } from "next";
import Link from "next/link";
import { RiMailFill, RiMapPinFill, RiWhatsappFill } from "@remixicon/react";

import Form from "@/app/ui/home/start-project-section/form";
import FaqSection from "@/app/ui/home/faq-section/faq-section";
import StayConnected from "@/app/ui/footer/stay-connected";

import "@/app/ui/styles/contact.css";
import "@/app/ui/styles/home.css";
import ConclusionSection from "@/app/ui/contact/conclusion-section";

export const metadata: Metadata = {
  title: "Contact",
  // description: ""
};

export default function Contact() {
  return (
    <>
      <main className="contact-page">
        <div className="sub-main border-x">
          <div className="hero bg-[url('/assets/images/contact-page/bg-hero-contactpage.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
            <h1>Contactez-Nous</h1>
            <p className="text-xl">
              Contactez-nous dès aujourd&apos;hui et laissez-nous vous aider
              pour toutes vos questions ou demandes de renseignements.
            </p>
          </div>
          {/* <\ /> */}
          <div className="w-full border-b flex justify-center items-center py-10 px-4">
            <div className="w-full md:w-full sm:w-1/2 flex flex-col md:flex-row justify-center items-center gap-4 min-[810px]:gap-8">
              <div className="first-contact-block">
                <Link
                  href="mailto: interne.genius@gmail.com"
                  target="_blank"
                  className={`link`}
                >
                  <RiMailFill color="#B97AE0" />
                  <span className="font-medium">interne.genius@gmail.com</span>
                </Link>
              </div>

              <div className="first-contact-block">
                <Link
                  href="https://wa.me/243977873421"
                  target="_blank"
                  className={`link`}
                >
                  <RiWhatsappFill color="#B97AE0" />
                  <span>+243 977 873 421</span>
                </Link>
              </div>

              <div className="first-contact-block">
                <div className="link">
                  <RiMapPinFill color="#B97AE0" />
                  <span>Kinshasa-RDC</span>
                </div>
              </div>
            </div>
          </div>
          <section className="contact-form">
            <div className="content">
              <Form idForm="contact-page" />
            </div>
          </section>

          <div className="border-t">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex justify-center items-center md:border-r border-b md:border-b-0 py-8 px-4 text-2xl">
                <span className="font-medium ">
                  Jours d&apos;ouverture: &nbsp;
                </span>
                <span className="bg-[#262626] py-5 px-4 rounded-md">
                  <span className=""> Lundi - Samedi</span>
                </span>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center pt-8 md:pb-8 px-4">
                <StayConnected />
              </div>
            </div>
          </div>

          <FaqSection />

          <ConclusionSection />
        </div>
      </main>
    </>
  );
}
