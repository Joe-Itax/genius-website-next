import { RiFacebookCircleFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import Link from "next/link";

export default function StayConnected() {
  return (
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
  );
}
