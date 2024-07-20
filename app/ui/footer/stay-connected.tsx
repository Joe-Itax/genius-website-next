"use client";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StayConnected() {
  return (
    <div
      className={`flex justify-center items-center w-full sm:w-auto flex-wrap gap-4 rounded-xl py-4 pr-2 pl-5 mb-6 md:mb-0 border`}
    >
      <div>
        <span>Restez Connecté</span>
      </div>
      <div className={`flex justify-center items-center gap-2`}>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.3,
            easeInOut: "linear",
            duration: 2,
          }}
          className="w-12 h-12 flex justify-center items-center"
        >
          <Link
            href="https://facebook.com/joseph-itakala.102"
            target="_blank"
            className={`border border-b-0 rounded-lg p-3 stay-connected-bg-icon-box`}
            aria-label="Profile Facebook de Joseph Itakala"
            title="Profile Facebook de Joseph Itakala"
          >
            <RiFacebookCircleFill />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.6,
            easeInOut: "linear",
            duration: 4,
          }}
          className="w-12 h-12 flex justify-center items-center"
        >
          <Link
            href="https://twitter.com/Joseph_Itakala"
            target="_blank"
            className={`border border-b-0 rounded-lg p-3 stay-connected-bg-icon-box`}
            aria-label="Profile Twitter de Joseph Itakala"
            title="Profile Twitter de Joseph Itakala"
          >
            <RiTwitterXFill />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.9,
            easeInOut: "linear",
            duration: 6,
          }}
          className="w-12 h-12 flex justify-center items-center"
        >
          <Link
            href="https://linkedin.com/in/joseph-itakala-2a6465250"
            target="_blank"
            className={`border border-b-0 rounded-lg p-3 stay-connected-bg-icon-box`}
            aria-label="Profile Linkedin de Joseph Itakala"
            title="Profile Linkedin de Joseph Itakala"
          >
            <RiLinkedinBoxFill />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
