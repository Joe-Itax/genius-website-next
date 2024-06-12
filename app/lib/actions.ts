"use server";

import { z } from "zod";

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

  // Process form submission here, e.g., send data to API
  return {
    message: "Formulaire soumis avec succès",
    formSend: true,
    formData: data,
  };
}
