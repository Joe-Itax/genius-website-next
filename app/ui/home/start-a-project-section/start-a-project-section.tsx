import Form from "../start-project-section/form";
import ButtonStartProject from "../start-project-section/button-start-project";
import { RiAtLine } from "@remixicon/react";
import Image from "next/image";

export default function StartAProjectSection() {
  return (
    <section className={`section start_project`}>
      <div className="heading bg-[url('/assets/images/home-page/bg-contact.webp')] bg-no-repeat bg-center bg-cover">
        <div className="logo-box">
          <span className="logo flex items-center justify-center gap-[5px] px-0 py-8">
            <Image
              src={"/assets/images/logo1.png"}
              width={180}
              height={180}
              alt="Logo"
            />
          </span>
        </div>
        <h2>Merci de Votre Intérêt pour CarmelCode</h2>
        <div>
          <p>
            Nous serons ravis d’avoir de vos nouvelles et de discuter de la
            manière dont nous pouvons vous aider à donner vie à vos idées
            numériques.
          </p>
        </div>
        <div className="cta-start-project mt-8">
          <ButtonStartProject className="btn btn-start-project bg-primary hover:border-primary hover:bg-transparent" />
        </div>
      </div>
      <div className="content" id="start-project">
        <Form idForm="start-project" />
      </div>
    </section>
  );
}
