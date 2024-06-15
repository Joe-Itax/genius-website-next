import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const onScrollUpdate = () => {
  let lastScroll = 0;
  //   const scrollThreshold = window.innerHeight * 0.5;
  const scrollThreshold = 300;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Activer uniquement si le scroll dépasse 300px
    if (currentScroll >= scrollThreshold) {
      if (
        currentScroll > lastScroll &&
        !document.body.classList.contains("scroll-down")
      ) {
        document.body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        document.body.classList.contains("scroll-down")
      ) {
        document.body.classList.remove("scroll-down");
      }
      lastScroll = currentScroll;
    }
  });
};
