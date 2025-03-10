"use client";
import { useFormState } from "react-dom";
import DoubleSlider from "@/app/ui/double-slider";
import { submitForm } from "@/app/lib/actions";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import FormStatus from "./form-status";
import { motion } from "framer-motion";

export default function Form({
  className,
  idForm,
}: {
  className?: string;
  idForm: string;
}) {
  const [state, dispatch] = useFormState(submitForm, null);
  const [slidersValues, setSlidersValues] = useState<number[]>([500, 1000]);
  const [personalOpen, setPersonalOpen] = useState<boolean>(false);
  const personalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [formError, setFormError] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const PersonalValueTrue = () => {
    setPersonalOpen(true);
  };
  const PersonalValueFalse = () => {
    setPersonalOpen(false);
  };

  useEffect(() => {
    const personalElement = personalRef.current;
    const sliderElement = sliderRef.current;

    if (personalElement && sliderElement) {
      if (personalOpen) {
        personalElement.style.display = "block";
        requestAnimationFrame(() => {
          personalElement.style.opacity = "1";
          personalElement.style.height = personalElement.scrollHeight + "px";

          sliderElement.style.opacity = "0";
          sliderElement.style.height = "0";
        });

        setTimeout(() => {
          sliderElement.style.display = "none";
        }, 300);
      } else {
        personalElement.style.opacity = "0";
        personalElement.style.height = "0";

        sliderElement.style.display = "block";
        requestAnimationFrame(() => {
          sliderElement.style.opacity = "1";
          sliderElement.style.height = sliderElement.scrollHeight + "px";
        });
        setTimeout(() => {
          personalElement.style.display = "none";
        }, 300);
      }
    }
  }, [personalOpen]);

  useEffect(() => {
    if (state?.formResponse) {
      if (state?.formStatus == "error") {
        setFormError(true);
        setFormSuccess(false);
      } else if (state?.formStatus == "success") {
        setFormSuccess(true);
        setFormError(false);
      }

      //Scroll to the #status-form
      const statusFormElement = document.getElementById("status-form");
      if (statusFormElement) {
        statusFormElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [state]);

  // console.log("state: ", state);

  return (
    <>
      <FormStatus formSuccess={formSuccess} formError={formError} />
      <motion.form
        className={`form ${className} ${
          formSuccess ? "hidden" : "flex"
        } border flex-col justify-center gap-10 px-8 py-20 border-solid w-[70%] max-[1100px]:w-4/5 max-[920px]:w-[90%] max-[920px]:px-4 max-[920px]:py-12  max-[800px]:w-full max-[800px]:border-inherit max-[700px]:border-0`}
        id={idForm}
        action={dispatch}
        aria-describedby="form-error"
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
        <div className="name_email-box">
          <div className="name-input">
            <label htmlFor="name" className="title">
              Nom Complet *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez ici"
              aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
              aria-describedby="email-error"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
                  defaultChecked
                />
                <label htmlFor="dev_web">Développement Web</label>
              </div>
              <div className="dev_mob_and_desk">
                <input
                  type="checkbox"
                  name="dev_mob_and_desk"
                  id="dev_mob_and_desk"
                />
                <label htmlFor="dev_mob_and_desk">
                  {/* Développement Mobile ou Desktop */}
                  Refonte / Optimisation des performances / Amélioration SEO
                </label>
              </div>
            </div>
            <div className="colab_or_other">
              <div className="colab">
                <input type="checkbox" name="colab" id="colab" />
                <label htmlFor="colab">Collaboration</label>
              </div>
              <div className="other">
                <input type="checkbox" name="other" id="other" />
                <label htmlFor="other">Autres</label>
              </div>
            </div>
          </div>
        </div>
        <div className="ur_budget max-[500px]:pe-3">
          <div className="head">
            <span className="title">Votre fourchette budgétaire</span>
          </div>
          <div className="min_max flex py-8 flex-col gap-4 max-[800px]:gap-4">
            <DoubleSlider
              setSliderValues={setSlidersValues}
              className={`${personalOpen ? "hidden" : ""}`}
              sliderRef={sliderRef}
            />
            {!personalOpen && (
              <div className={`${personalOpen ? "hidden" : ""}`}>
                <input
                  type="hidden"
                  value={slidersValues[0]}
                  name="minValuSlider"
                />
                <input
                  type="hidden"
                  value={slidersValues[1]}
                  name="maxValueSlider"
                />
              </div>
            )}
            <div>
              <button
                type="button"
                className={`btn border-primary  ${
                  personalOpen
                    ? "bg-primary text-white hover:bg-primary-foreground"
                    : "dark:hover:bg-zinc-800 hover:bg-zinc-100"
                }`}
                onClick={() => {
                  if (personalOpen) {
                    PersonalValueFalse();
                  } else {
                    PersonalValueTrue();
                  }
                }}
              >
                Insérer une valeur personnalisée ?
              </button>
            </div>
            <div
              ref={personalRef}
              className={`personal ${personalOpen ? "open" : "closed"}`}
            >
              <div className="min-value">
                <label htmlFor="minValue" className="title">
                  Min
                </label>
                <input
                  type="text"
                  name="minValueCustom"
                  id="minValue"
                  placeholder="Saisissez ici"
                  defaultValue={`${slidersValues[0]}`}
                  disabled={!personalOpen}
                />
              </div>
              <div className="max-value">
                <label htmlFor="maxValue" className="title">
                  Max
                </label>
                <input
                  type="text"
                  name="maxValueCustom"
                  id="maxValue"
                  placeholder="Saisissez ici"
                  defaultValue={`${slidersValues[1]}`}
                  disabled={!personalOpen}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="message">
          <span className="title">Votre Message *</span>
          <textarea
            className="focus-visible:outline-none"
            name="message"
            placeholder="Saisissez ici"
            defaultValue={""}
            aria-describedby="message-error"
          />
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.message &&
              state.errors.message.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state?.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
        <div className="submit">
          <input
            type="submit"
            defaultValue="Envoyer"
            className="btn"
            id="btnSubmit"
          />
        </div>
      </motion.form>
    </>
  );
}
