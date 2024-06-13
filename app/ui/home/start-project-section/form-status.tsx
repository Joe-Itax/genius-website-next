import { RiEmotionHappyFill, RiEmotionUnhappyFill } from "@remixicon/react";

export default function FormStatus({
  formSuccess,
  formError,
}: {
  formSuccess: boolean;
  formError: boolean;
}) {
  return (
    <div className={`form-send text-center px-8 py-14 w-full`} id="status-form">
      <div
        className={`${
          formSuccess ? "flex" : "hidden"
        } true bg-[#198754] text-[1.2rem] p-4 sm:p-8 rounded-[5px] flex-col items-center w-[80%] mx-auto`}
      >
        <RiEmotionHappyFill
          size={60}
          className="icon-success text-[2rem] text-[#ffc107]"
        />
        <p>
          Merci de nous avoir contacté ! <br />
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div
        className={`${
          formError ? "flex" : "hidden"
        } false bg-[#dc3545] text-[1.2rem] p-4 sm:p-8 rounded-[5px] flex-col items-center w-[80%] mx-auto`}
      >
        <RiEmotionUnhappyFill
          size={60}
          className="icon-error text-[2rem] text-[#fff]"
        />
        <p>
          Oups, une erreur est survenue lors de l&apos;envoi du formulaire,
          veuillez réessayer s&apos;il vous plaît.
        </p>
      </div>
    </div>
  );
}
