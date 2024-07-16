"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/app/ui/components/sheet";
import { RiAtLine, RiMenu4Line } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function NavMobile() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const setOpenState = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`min-[1170px]:hidden`}>
        <div className="menu-icon-box cursor-pointer min-[1170px]:hidden z-50 p-2 bg-[#262626] rounded-md">
          <RiMenu4Line
            size={35}
            className="menu-icon rounded-lg icon-hamburger open-menu"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full min-[400px]:w-[400px] min-[1170px]:hidden">
        <SheetHeader className="flex flex-row">
          <Link
            onClick={() => setOpenState()}
            href="/"
            className={`flex justify-center items-center`}
          >
            <RiAtLine size={40} />
            <span className="text-[2rem] font-bold">Genius</span>
          </Link>
        </SheetHeader>
        <SheetClose></SheetClose>
        <nav className={`flex justify-center items-center nav-mobile`}>
          <ul className="flex flex-col w-full">
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/"
                className={clsx("", path === "/" && "active")}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/services"
                className={clsx("", path === "/services" && "active")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/realisations"
                className={clsx("", path === "/realisations" && "active")}
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/about"
                className={clsx("", path === "/about" && "active")}
              >
                A Propos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenState()}
                href="/contact"
                className={clsx("", path === "/contact" && "active")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
