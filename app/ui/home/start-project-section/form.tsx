"use client";
import { useFormState } from "react-dom";
import DoubleSlider from "@/app/ui/double-slider";
import { submitForm, State } from "@/app/lib/actions";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { RiEmotionHappyFill, RiEmotionUnhappyFill } from "@remixicon/react";

export default function Form({ className }: { className?: string }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(submitForm, null);
  const [slidersValues, setSlidersValues] = useState<number[]>([500, 1000]);
  const [personalOpen, setPersonalOpen] = useState<boolean>(false);
  const personalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const PersonalValueTrue = () => {
    setPersonalOpen(true);
  };
  const PersonalValueFalse = () => {
    setPersonalOpen(false);
  };

  useEffect(() => {
    const personalElement = personalRef.current;

    if (personalElement) {
      if (personalOpen) {
        personalElement.style.display = "block";
        requestAnimationFrame(() => {
          personalElement.style.opacity = "1";
          personalElement.style.height = personalElement.scrollHeight + "px";
        });
      } else {
        personalElement.style.opacity = "0";
        personalElement.style.height = "0";
        setTimeout(() => {
          personalElement.style.display = "none";
        }, 300);
      }
    }
  }, [personalOpen]);

  console.log("state: ", state);

  return (
    <>
      <form
        className={`form ${className}`}
        id="contact_form"
        action={dispatch}
        // action={submitForm}
        aria-describedby="form-error"
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
                  Développement Mobile ou Desktop
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
        <div className="ur_budget">
          <div className="head">
            <span className="title">Votre fourchette budgétaire</span>
          </div>
          <div className="min_max">
            <DoubleSlider setSliderValues={setSlidersValues} />
            <div>
              <input
                type="hidden"
                value={slidersValues[0]}
                name="min-value-slider"
              />
              <input
                type="hidden"
                value={slidersValues[1]}
                name="max-value-slider"
              />
            </div>
            <div>
              <button
                className="btn border-[#a21ade] hover:bg-zinc-800"
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
                  name="min-value-custom"
                  id="minValue"
                  placeholder="Saisissez ici"
                  defaultValue={`${slidersValues[0]}`}
                />
              </div>
              <div className="max-value">
                <label htmlFor="maxValue" className="title">
                  Max
                </label>
                <input
                  type="text"
                  name="max-value-custom"
                  id="maxValue"
                  placeholder="Saisissez ici"
                  defaultValue={`${slidersValues[1]}`}
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
      </form>

      <div className="form-send text-center px-8 py-14 w-full" id="status-form">
        <div className="true bg-[#198754] hidden">
          <RiEmotionHappyFill
            size={60}
            className="icon-success text-[2rem] text-[#ffc107]"
          />
          <p>
            Merci de nous avoir contacté ! <br />
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
        <div className="false bg-[#dc3545]">
          <RiEmotionUnhappyFill
            size={60}
            className="icon-error text-[2rem] text-[#fff]"
          />
          <p>
            Une erreur s&apos;est produite lors de l&apos;envoi de votre
            formulaire, veuillez ressayer s&apos;il vous plaît.
          </p>
        </div>
      </div>
    </>
  );
}
