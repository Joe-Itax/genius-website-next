import Image from "next/image";
import Link from "next/link";
import "@/app/ui/styles/home.css";
import Button from "@/app/ui/button";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main>
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
        <section className={`section our-services`}>
          <div className="heading">
            <h2>Nos Services</h2>
            <div>
              <p>
                Transformez votre marque avec nos solutions numériques
                innovantes qui captivent et engagent votre public.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="service service1">
              <div className="container-service">
                <div className="icon-and-title">
                  <div className="service-icon">
                    <Image
                      src="assets/icons/Union.svg"
                      alt="Icon"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3>Design</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
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
                  <h3>Ingénierie</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Notre équipe d’ingénieurs allie expertise technique et
                    passion pour l’innovation pour créer des solutions
                    numériques robustes et évolutives. Nous exploitons les
                    dernières technologies et les meilleures pratiques pour
                    fournir des applications hautes performances adaptées à vos
                    besoins spécifiques.
                  </p>
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
                  <h3>Gestion de Projets</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Notre équipe de gestion de projet expérimentée veille à ce
                    que vos projets soient livrés à temps, dans les limites du
                    budget et selon vos spécifications. Nous suivons les
                    méthodologies standard de l’industrie et utilisons des
                    outils de communication et de collaboration efficaces pour
                    vous tenir informé tout au long du processus de
                    développement.
                  </p>
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
          <div className="heading">
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
                    {/* <Image src="/assets/icons/Medaille.svg" /> */}
                    <i className="ri-medal-fill" />
                  </div>
                  <h3>Expertise</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
                </div>
              </div>
              <div className="container-why">
                <div className="icon-and-title">
                  <div className="service-icon">
                    {/* <Image src="/assets/icons/People-call.svg" /> */}
                    <i className="ri-user-voice-fill" />
                  </div>
                  <h3>Approche Centrée Sur le Client</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Nous accordons la priorité à nos clients et à leurs besoins
                    uniques. Nous écoutons vos idées, vos défis et vos objectifs
                    et adaptons nos services pour répondre à vos besoins
                    spécifiques. Votre succès est notre succès.
                  </p>
                </div>
              </div>
            </div>
            <div className="container second">
              <div className="container-why">
                <div className="icon-and-title">
                  <div className="service-icon">
                    {/* <Image src="/assets/icons/Bouclier.svg" /> */}
                    <i className="ri-shield-flash-fill" />
                  </div>
                  <h3>Solutions Orientées Résultats</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Notre objectif principal est de produire des résultats. Nous
                    combinons créativité et expertise technique pour créer des
                    produits numériques qui stimulent la croissance de
                    l&apos;entreprise, améliorent l&apos;expérience utilisateur
                    et offrent un avantage concurrentiel.
                  </p>
                </div>
              </div>
              <div className="container-why">
                <div className="icon-and-title">
                  <div className="service-icon">
                    {/* <Image src="/assets/icons/Couronne.svg" /> */}
                    <i className="ri-vip-crown-fill" />
                  </div>
                  <h3>Partenariat Collaboratif</h3>
                </div>
                <div className="paragraph">
                  <p>
                    Nous valorisons les relations à long terme avec nos clients.
                    Nous nous considérons comme votre partenaire numérique,
                    fournissant une assistance, une maintenance et des mises à
                    jour continues pour garantir que vos produits numériques
                    continuent de prospérer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonies Section */}
        <section className={`section testimonies`}>
          <div className="heading">
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
          <div className="content">
            <div className="container first">
              <div className="container-testimonies">
                <h3>
                  Genius a joué un rôle déterminant dans la transformation de
                  notre présence en ligne.
                </h3>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
                </div>
                <div className="container-info-client">
                  <div className="image-client">
                    <Image
                      src="/assets/images/home-page/testifier-2.jpeg"
                      alt="image du client qui témoigne"
                      loading="lazy"
                      width={80}
                      height={80}
                      className="w-[80%] h-[80%] object-cover"
                    />
                  </div>
                  <div className="identite-client">
                    <div className="name">
                      <span>Joe Itax</span>
                    </div>
                    <div className="post">
                      <span>CEO of Itax Corporation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-testimonies">
                <h3>Travailler avec Genius a été un jeu d&apos;enfant.</h3>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
                </div>
                <div className="container-info-client">
                  <div className="image-client">
                    <Image
                      src="/assets/images/home-page/testifier-1.png"
                      alt="image du client qui témoigne"
                      loading="lazy"
                      width={80}
                      height={80}
                      className="w-[80%] h-[80%] object-cover"
                    />
                  </div>
                  <div className="identite-client">
                    <div className="name">
                      <span>John Smith</span>
                    </div>
                    <div className="post">
                      <span>CEO of Chic Boutique</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container second">
              <div className="container-testimonies">
                <h3>
                  Genius a joué un rôle déterminant dans la transformation de
                  notre présence en ligne.
                </h3>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
                </div>
                <div className="container-info-client">
                  <div className="image-client">
                    <Image
                      src="/assets/images/home-page/testifier-1.png"
                      alt="image du client qui témoigne"
                      loading="lazy"
                      width={80}
                      height={80}
                      className="w-[80%] h-[80%] object-cover"
                    />
                  </div>
                  <div className="identite-client">
                    <div className="name">
                      <span>John Smith</span>
                    </div>
                    <div className="post">
                      <span>CEO of Chic Boutique</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-testimonies">
                <h3>Travailler avec Genius a été un jeu d&apos;enfant.</h3>
                <div className="paragraph">
                  <p>
                    Chez Genius, notre équipe de conception est passionnée par
                    la création de designs époustouflants et centrés sur
                    l&apos;utilisateur qui captivent votre public et rehaussent
                    votre marque. Nous pensons qu&apos;un bon design n&apos;est
                    pas seulement une question d&apos;esthétique ; il
                    s&apos;agit de créer des expériences utilisateur
                    transparentes et intuitives.
                  </p>
                </div>
                <div className="container-info-client">
                  <div className="image-client">
                    <Image
                      src="/assets/images/home-page/testifier-1.png"
                      alt="image du client qui témoigne"
                      loading="lazy"
                      width={80}
                      height={80}
                      className="w-[80%] h-[80%] object-cover"
                    />
                  </div>
                  <div className="identite-client">
                    <div className="name">
                      <span>John Smith</span>
                    </div>
                    <div className="post">
                      <span>CEO of Chic Boutique</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className={`section faq`}>
          <div className="heading">
            <h2>Foires Aux Questions</h2>
            <div>
              <p>Vous avez quelques questions supplémentaires ?</p>
            </div>
          </div>
          <div className="content">
            <div className="faq-container">
              <div className="faq faq-one">
                <div className="num-faq">
                  <span>01</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-two">
                <div className="num-faq">
                  <span>02</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-three">
                <div className="num-faq">
                  <span>03</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-for">
                <div className="num-faq">
                  <span>04</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq faq-five">
                <div className="num-faq">
                  <span>05</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-six">
                <div className="num-faq">
                  <span>06</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-seven">
                <div className="num-faq">
                  <span>07</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq faq-height">
                <div className="num-faq">
                  <span>08</span>
                </div>
                <div className="question-content">
                  <div className="question-box">
                    <div className="faq-title">
                      <span>Quels sont les avantages de Genius ?</span>
                    </div>
                    <div className="icon-open-answer">
                      <i className="ri-add-fill" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed libero eget turpis accumsan facilisis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere ; Vesti
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-faq">
            <Link
              href="mailto:interne.genius@gmail.com"
              className="btn"
              target="_blank"
            >
              Encore des Questions ?
            </Link>
          </div>
        </section>
        {/* Start A Project Section */}
        <section className={`section start_project`}>
          <div className="heading">
            <div className="logo-box">
              <span className="logo">
                <i className="ri-at-line" />
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
            <form className="form" id="contact_form" method="post">
              <div className="name_email-box">
                <div className="name-input">
                  <label htmlFor="fullName" className="title">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="fullName"
                    placeholder="Saisissez ici"
                  />
                </div>
                <div className="email-input">
                  <label htmlFor="email" className="title">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Saisissez ici"
                  />
                </div>
              </div>
              <div className="why_contacting_us">
                <span className="title">Pourquoi vous nous contacter ?</span>
                <div className="why">
                  <div className="devs">
                    <div className="dev_web-input">
                      <input
                        type="checkbox"
                        name="dev_web"
                        id="dev_web"
                        defaultValue="dev_web"
                      />
                      <label htmlFor="dev_web">Développement Web</label>
                    </div>
                    <div className="dev_mob_and_desk">
                      <input
                        type="checkbox"
                        name="dev_mob_and_desk"
                        id="dev_mob_and_desk"
                        defaultValue="dev_mob_and_desk"
                      />
                      <label htmlFor="dev_mob_and_desk">
                        Développement App Mobile ou Desktop
                      </label>
                    </div>
                  </div>
                  <div className="colab_or_other">
                    <div className="colab">
                      <input
                        type="checkbox"
                        name="colab"
                        id="colab"
                        defaultValue="colab"
                      />
                      <label htmlFor="colab">Collaboration</label>
                    </div>
                    <div className="other">
                      <input
                        type="checkbox"
                        name="other"
                        id="other"
                        defaultValue="other"
                      />
                      <label htmlFor="other">Autres</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ur_budget">
                <div className="head">
                  <span className="title">Votre fourchette budgétaire</span>
                </div>
                <div className="min_max">
                  <div className="min-value">
                    <label htmlFor="minValue" className="title">
                      Min
                    </label>
                    <input
                      type="text"
                      name="minValue"
                      id="minValue"
                      placeholder="Saisissez ici"
                    />
                  </div>
                  <div className="max-value">
                    <label htmlFor="maxValue" className="title">
                      Max
                    </label>
                    <input
                      type="text"
                      name="maxValue"
                      id="maxValue"
                      placeholder="Saisissez ici"
                    />
                  </div>
                </div>
              </div>
              <div className="message">
                <span className="title">Votre Message *</span>
                <textarea
                  name="message"
                  placeholder="Saisissez ici"
                  defaultValue={""}
                />
              </div>
              <div className="submit">
                <input
                  type="submit"
                  defaultValue="Envoyer"
                  className="btn"
                  id="btnSubmit"
                />
              </div>
            </form>
            <div className="form-send">
              <div className="true">
                <p>
                  Merci de nous avoir contacté ! <br />
                  Nous vous répondrons dans les plus brefs délais.
                </p>
                <i className="ri-emotion-happy-fill" />
              </div>
              <div className="false">
                <p>
                  Une erreur s&apos;est produite lors de l&apos;envoi de votre
                  formulaire, veuillez ressayer s&apos;il vous plaît.
                </p>
                <i className="ri-emotion-unhappy-fill" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
