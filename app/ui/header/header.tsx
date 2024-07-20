"use client";
import { RiAtLine } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onScrollUpdate } from "../../lib/utils";
import { useEffect } from "react";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";
import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

export default function Header({ className }: { className?: string }) {
  useEffect(() => {
    onScrollUpdate();
  }, []);

  return (
    <header
      className={`flex justify-center items-center w-full bg-background text-text z-30 text-base border-b`}
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

        <NavDesktop className="hidden min-[1240px]:block" />
        <div className="cta-contact_us hidden min-[1240px]:flex justify-center items-center gap-2">
          <div>
            <Link
              href="/contact"
              className="btn text-[#FEFEFE] border-2 bg-primary hover:bg-primary-foreground"
            >
              Nous Contacter
            </Link>
          </div>
          <ThemeSwitcher />
        </div>

        <NavMobile />
      </div>
    </header>
  );
}
