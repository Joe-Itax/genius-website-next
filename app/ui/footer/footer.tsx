import Link from "next/link";
import { RiMailFill, RiWhatsappFill, RiMapPinFill } from "@remixicon/react";
import StayConnected from "@/app/ui/footer/stay-connected";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
  const date = new Date();

  const currentYear = date.getFullYear();
  return (
    <footer
      className={`px-2 py-0 md:px-4 lg:px-8 xl:px-16 bg-inherit flex flex-col justify-center items-center text-[1.1rem] pb-8`}
    >
      <div className={`${className} flex flex-col w-full`}>
        <div className="flex flex-col min-[1100px]:flex-row justify-between items-center pt-0 lg:py-8 lg:px-0">
          <div
            className={`flex justify-center items-center py-8 px-0 gap-1  text-inherit`}
          >
            <Image
              src={"/assets/images/logo1.png"}
              width={100}
              height={100}
              alt="Logo"
            />
          </div>
          <nav
            className={`w-full sm:w-auto flex flex-col lg:flex-row flex-wrap items-center justify-between font-medium border-t lg:border-t-0 pt-8 lg:pt-0 gap-8 lg:gap-0`}
          >
            <ul
              className={`flex justify-center items-center flex-wrap gap-5 sm:pr-3`}
            >
              <li>
                <Link href="/" className={`hover:underline`}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className={`hover:underline`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className={`hover:underline`}>
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:underline`}>
                  A Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`hover:underline`}>
                  Contact
                </Link>
              </li>
            </ul>
            <StayConnected />
          </nav>
        </div>

        <div
          className={`flex justify-between items-center pt-0 lg:pt-8 min-[1100px]:py-8 lg:px-0 flex-col min-[1100px]:flex-row lg:border-t gap-8`}
        >
          <div
            className={`flex justify-center gap-3 flex-col sm:flex-row w-full sm:w-auto`}
          >
            <Link
              href="mailto:carmelcode1@gmail.com"
              target="_blank"
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b gap-1 cursor-pointer text-inherit`}
            >
              <RiMailFill className="fill-inherit dark:fill-white" />
              <span className="text-inherit ">carmelcode1@gmail.com</span>
            </Link>
            <Link
              href="https://wa.me/243977873421"
              target="_blank"
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b gap-1 cursor-pointer`}
            >
              <RiWhatsappFill className="fill-inherit dark:fill-white" />
              <span className="text-inherit">+243 977 873 421</span>
            </Link>
            <div
              className={`pb-6 sm:pb-3 pt-3 flex justify-center items-center border-b gap-1 text-inherit cursor-pointer`}
            >
              <RiMapPinFill className="fill-inherit dark:fill-white" />
              <span className="text-inherit">Kinshasa-RDC</span>
            </div>
          </div>
          <div className={`text-center pt-6 lg:pt-0`}>
            <span className={`text-[#5f5e5e] dark:text-[#98989A]`}>
              © {currentYear} <strong>Carmel Code</strong>. Tous droits
              réservés.
            </span>
            {/* <span className={`text-[#5f5e5e] dark:text-[#98989A]`}>
              Made with heart_icon by <strong>Carmel Code</strong> | Tous droits
              réservés | © {currentYear}{" "}
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
