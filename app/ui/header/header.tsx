"use client";
import { RiAtLine, RiMenu4Line } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onScrollUpdate } from "../../lib/utils";
import { useEffect } from "react";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";

export default function Header({ className }: { className?: string }) {
  useEffect(() => {
    onScrollUpdate();
  }, []);

  return (
    <header
      className={`flex justify-center items-center w-full bg-[#191919] text-gray-100 z-30 text-base border-b border-solid border-[#262626]`}
    >
      <div className={`${className} w-full flex justify-between items-center`}>
        <div className="logo-box">
          <Link
            href="/"
            className={`flex justify-center items-center p-8 pl-0`}
          >
            <RiAtLine size={40} />
            <span className="text-4xl font-bold">Genius</span>
          </Link>
        </div>

        <NavDesktop className="hidden min-[1000px]:block" />
        <div className="cta-contact_us hidden min-[1000px]:block">
          <Link
            href="/contact"
            className="btn text-[#FEFEFE] border-2 border-solid bg-primary hover:bg-primary-foreground"
          >
            Nous Contacter
          </Link>
        </div>

        <NavMobile />
      </div>
    </header>
  );
}
