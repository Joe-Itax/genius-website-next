import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiWhatsappFill,
  RiMapPinFill,
} from "@remixicon/react";

export default function Footer({ className }: { className?: string }) {
  const date = new Date();

  const currentYear = date.getFullYear();
  return (
    <footer
      className={`px-2 py-0 md:px-4 lg:px-8 xl:px-16 bg-[#191919] text-gray-100 flex flex-col justify-center items-center text-[1.1rem] pb-8`}
    >
      <div className={`${className} flex flex-col w-full`}>
        <div className="flex flex-col lg:flex-row justify-between items-center pt-0 lg:py-8 lg:px-0">
          <div className={`flex justify-center items-center py-8 px-0 gap-1`}>
            <i className="ri-at-line text-3xl" />
            <span className={`text-2xl font-bold`}>Genius</span>
          </div>
          <nav
            className={`w-full sm:w-auto flex flex-col lg:flex-row flex-wrap items-center justify-between font-medium border-t border-solid border-[#262626] lg:border-t-0 pt-8 lg:pt-0 gap-8 lg:gap-0`}
          >
            <ul
              className={`flex justify-center items-center flex-wrap gap-5 sm:pr-3`}
            >
              <li>
                <Link href="/" className={`hover:text-[#B97AE0]`}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className={`hover:text-[#B97AE0]`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className={`hover:text-[#B97AE0]`}>
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:text-[#B97AE0]`}>
                  A Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`hover:text-[#B97AE0]`}>
                  Contact
                </Link>
              </li>
            </ul>
            <div
              className={`flex justify-center items-center w-full sm:w-auto flex-wrap gap-4 rounded-xl py-4 pr-2 pl-5 mb-6 md:mb-0 border border-solid border-[#262626]`}
            >
              <div>
                <span>Restez Connecté</span>
              </div>
              <div className={`flex justify-center items-center gap-2`}>
                <Link
                  href="https://facebook.com/joseph-itakala.102"
                  target="_blank"
                  className={`border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}
                  aria-label="Profile Facebook de Joseph Itakala"
                  title="Profile Facebook de Joseph Itakala"
                >
                  <RiFacebookCircleFill />
                </Link>
                <Link
                  href="https://twitter.com/Joseph_Itakala"
                  target="_blank"
                  className={`border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}
                  aria-label="Profile Twitter de Joseph Itakala"
                  title="Profile Twitter de Joseph Itakala"
                >
                  <RiTwitterXFill />
                </Link>
                <Link
                  href="https://linkedin.com/in/joseph-itakala-2a6465250"
                  target="_blank"
                  className={`border border-solid border-[#2E2E2E] border-b-0 rounded-lg p-3 bg-gradient-to-b from-[#242424] from-0% to-[rgba(36, 36, 36, 0)] to-100%`}
                  aria-label="Profile Linkedin de Joseph Itakala"
                  title="Profile Linkedin de Joseph Itakala"
                >
                  <RiLinkedinBoxFill />
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          className={`flex justify-between items-center pt-0 lg:py-8 lg:px-0 border-none flex-col lg:flex-row lg:border-t lg:border-solid border-[#262626]`}
        >
          <div
            className={`flex justify-center gap-3 text-[#FDFDFF] flex-col sm:flex-row w-full sm:w-auto`}
          >
            <Link
              href="mailto: interne.genius@gmail.com"
              target="_blank"
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b border-solid border-[#262626] gap-1 cursor-pointer`}
            >
              <RiMailFill />
              <span>interne.genius@gmail.com</span>
            </Link>
            <Link
              href="https://wa.me/243977873421"
              target="_blank"
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b border-solid border-[#262626] gap-1 cursor-pointer`}
            >
              <RiWhatsappFill />
              <span>+243 977 873 421</span>
            </Link>
            <div
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b border-solid border-[#262626] gap-1 cursor-pointer`}
            >
              <RiMapPinFill />
              <span>Kinshasa-RDC</span>
            </div>
          </div>
          <div className={`text-center pt-6 lg:pt-0`}>
            <span className={`text-[#98989A]`}>
              © {currentYear} Genius. Tous droits réservés.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
