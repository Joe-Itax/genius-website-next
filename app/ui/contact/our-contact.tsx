"use client";

import { RiMailFill, RiMapPinFill, RiWhatsappFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurContact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        delay: 0.8,
        easeInOut: "linear",
        duration: 3,
      }}
      className="w-full border-b flex justify-center items-center py-10 px-4"
    >
      <div className="w-full min-[950px]:w-full md:w-1/2 sm:w-2/3 flex flex-col min-[950px]:flex-row justify-center items-center gap-4 min-[810px]:gap-8">
        <div className="first-contact-block">
          <Link
            href="mailto: interne.genius@gmail.com"
            target="_blank"
            className={`link`}
          >
            <RiMailFill className="fill-primary" />
            <span className="font-medium">interne.genius@gmail.com</span>
          </Link>
        </div>

        <div className="first-contact-block">
          <Link
            href="https://wa.me/243977873421"
            target="_blank"
            className={`link`}
          >
            <RiWhatsappFill className="fill-primary" />
            <span>+243 977 873 421</span>
          </Link>
        </div>

        <div className="first-contact-block">
          <div className="link">
            <RiMapPinFill className="fill-primary" />
            <span>Kinshasa-RDC</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
