"use server";

import { z } from "zod";
import { transporter, mailOptions } from "@/app/lib/nodemailer";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Veuillez entrer votre nom" }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse email valide" }),
  message: z
    .string({
      required_error: "Veuillez entrer votre message",
      message: "Veuillez entrer votre message",
    })
    .trim()
    .min(10, { message: "Votre message doit contenir au moins 10 caractères" }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};
// prevState: State,

export async function submitForm(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  const validatedFields = FormSchema.safeParse({
    name: data.name,
    email: data.email,
    message: data.message,
    dev_web: data.dev_web,
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez remplir le formulaire correctement",
      formData: data,
      formSend: false,
    };
  }

  // HTML content for the email
  const htmlContent = `
    <div
      style="font-family: 'Barlow', sans-serif; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; padding: 70px 20px;"
    >
      <div
        style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;"
      >
        <h1
          style="text-align: center; font-size: 1.8rem; margin-bottom: .8rem;"
        >
          Nouvelle soumission de formulaire
        </h1>

        <div style="margin-bottom: .5rem;">
          <h2 style="font-size: 1.4rem;">Info sur le potentiel client: </h2>
          <p>
            <span>Nom complet</span>: ${data?.name || "Fullname"}
          </p>
          <p>
            <span> Adresse mail</span>: ${data?.email || "1hTnN@example.com"}
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.4rem;">Pourquoi vous nous contacter ?</h2>

          <ol>
            <li>Développement Web?: ${data?.dev_web ? "Oui" : "Non"}</li>
            <li>
              Développement Mobile ou Desktop?: ${
                data?.dev_mob_and_desk ? "Oui" : "Non"
              }
            </li>
            <li>Collaboration?:${data?.colab ? "Oui" : "Non"}</li>
            <li>Autres?: ${data?.other ? "Oui" : "Non"}</li>
          </ol>
        </div>

        <div>
          <h2 style="font-size: 1.4rem;">Votre fourchette budgétaire</h2>
          <div>
            <h3 style="font-size: 1.2rem;">Valeur venant du slider</h3>
            <p>Montant min: ${data?.minValuSlider || "500"}</p>
            <p>Montant max: ${data?.maxValueSlider || "1000"}</p>
          </div>
          <div>
            <h3 style="font-size: 1.2rem;">Valeur personnalisée</h3>
            <p>Montant min: ${data?.minValueCustom || "500"}</p>
            <p>Montant max: ${data?.maxValueCustom || "1000"}</p>
          </div>
        </div>

        <div>
          <h2 style="font-size: 1.4rem;">Votre message</h2>
          <p>
            ${
              data?.message ||
              "Ici, le Génie est au Service de vos Ambitions Numériques"
            }
          </p>
        </div>
      </div>
    </div>
  `;

  const options = {
    ...mailOptions,
    from: validatedFields.data.email,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(options);
    return {
      formStatus: "success",
      formResponse: true,
    };
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email: ", error);
    return {
      formStatus: "error",
      formResponse: true,
      errorMessage: error.response,
    };
  }
}
