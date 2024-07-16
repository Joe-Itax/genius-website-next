"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop({ className }: { className?: string }) {
  const path = usePathname();
  return (
    <nav className={`flex justify-between ${className}`}>
      <ul className={`flex justify-center items-center`}>
        <li>
          <Link href="/" className={clsx("", path === "/" && "active")}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={clsx("", path === "/services" && "active")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/realisations"
            className={clsx("", path === "/realisations" && "active")}
          >
            Réalisations
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={clsx("", path === "/about" && "active")}
          >
            A Propos
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={clsx("", path === "/contact" && "active")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
