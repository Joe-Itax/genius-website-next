import React from "react";
import AccordionsFaq from "@/app/ui/accordion";
import Link from "next/link";

type Faq = {
  id: string;
  question: string;
  response: React.ReactNode;
};

const faqs1: Faq[] = [
  {
    id: "01",
    question: "Quels sont les avantages de Genius ?",
    response: (
      <>
        <p>Les avantages de Genius incluent:</p>
        <ul className="list-disc list-inside">
          <li>Expertise professionnelle</li>
          <li>Solutions personnalisées</li>
          <li>Support client réactif</li>
          <li>Technologies modernes</li>
          <li>Tarifs compétitifs</li>
          <li>Design innovant</li>
          <li>Optimisation SEO</li>
          <li>Livraison rapide</li>
        </ul>
      </>
    ),
  },
  {
    id: "02",
    question: "Quels types de projets pouvez-vous gérer ?",
    response: (
      <p>
        Nous gérons divers types de projets, y compris la création de sites web,
        le développement d&apos;applications web et web mobiles, les solutions
        e-commerce, et l&apos;intégration de systèmes.
      </p>
    ),
  },
  {
    id: "03",
    question: "Quelle est votre approche de la gestion de projet ?",
    response: (
      <p>
        Nous adoptons une approche agile pour la gestion de projet, en
        garantissant une communication continue avec le client et une
        flexibilité pour répondre aux changements de besoins.
      </p>
    ),
  },
  {
    id: "04",
    question: "Offrez-vous des services de maintenance ?",
    response: (
      <p>
        Nous proposons des options de maintenance en fonction des besoins
        spécifiques de chaque client. La maintenance sera discutée et
        personnalisée lors de nos échanges pour s&apos;assurer qu&apos;elle
        correspond parfaitement à vos attentes.
      </p>
    ),
  },
];

const faqs2: Faq[] = [
  {
    id: "05",
    question: "Combien de temps prend généralement un projet ?",
    response: (
      <p>
        La durée d&apos;un projet dépend de sa complexité et de ses
        spécificités. En général, un projet peut prendre de quelques semaines à
        plusieurs mois.
      </p>
    ),
  },
  {
    id: "06",
    question: "Quels sont vos tarifs ?",
    response: (
      <p>
        Nos tarifs sont compétitifs et varient en fonction des besoins
        spécifiques du projet. Nous offrons des devis gratuits pour que vous
        puissiez comprendre les coûts impliqués.
      </p>
    ),
  },
  {
    id: "07",
    question: "Comment puis-je commencer un projet avec Genius ?",
    response: (
      <p>
        Pour commencer un projet, vous pouvez nous contacter via notre
        formulaire en ligne, par email, ou par téléphone. Nous organiserons
        ensuite une consultation pour discuter de vos besoins et des prochaines
        étapes.
      </p>
    ),
  },
  {
    id: "08",
    question: "Quelle est votre politique de révisions ?",
    response: (
      <p>
        Nous offrons plusieurs tours de révisions pour nous assurer que le
        produit final répond parfaitement à vos attentes. Chaque projet inclut
        des révisions planifiées pour intégrer vos retours et ajustements
        nécessaires.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className={`section faqs`}>
      <div className="heading bg-[url('/assets/images/home-page/bg-faq.webp')] bg-center bg-no-repeat bg-cover">
        <h2>Foires Aux Questions</h2>
        <div>
          <p>Vous avez quelques questions supplémentaires ?</p>
        </div>
      </div>
      <div className="content">
        <div className="faq-container">
          {faqs1.map((faq) => (
            <>
              <div className={`faq faq-${faq.id}`} key={faq.id}>
                <div className="num-faq">
                  <span>{faq.id}</span>
                </div>
                <AccordionsFaq
                  question={faq.question}
                  response={faq.response}
                />
              </div>
            </>
          ))}
        </div>

        <div className="faq-container">
          {faqs2.map((faq) => (
            <>
              <div className={`faq faq-${faq.id}`} key={faq.id}>
                <div className="num-faq">
                  <span>{faq.id}</span>
                </div>
                <AccordionsFaq
                  question={faq.question}
                  response={faq.response}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="contact-faq">
        <Link
          href="mailto:interne.genius@gmail.com?subject=Question%20supplémentaire%20|%20FAQs%20Genius"
          className="btn"
          target="_blank"
        >
          Encore des Questions ?
        </Link>
      </div>
    </section>
  );
}