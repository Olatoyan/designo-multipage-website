"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo-dark.png";
import { useState } from "react";
import useMediaQuery from "../_hooks/useMediaQuery";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isTablet = useMediaQuery("(max-width: 700px)");

  return (
    <header className="tablet:px-10 tablet:py-14 tablet:relative z-[11] px-[14rem] py-[6.4rem] desktop:px-24">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Designo Logo"
            width="196"
            height="24"
            quality={100}
          />
        </Link>

        {(!isTablet || (isTablet && isNavOpen)) && (
          <ul className="tablet:absolute tablet:flex-col tablet:top-[9.6rem] tablet:left-0 tablet:w-full tablet:items-start tablet:bg-[#1d1c1e] tablet:z-10 tablet:py-20 tablet:px-10 flex items-center gap-[4.2rem]">
            <li className="tablet:text-white tablet:text-[1.8rem] text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline">
              <Link href="/about">Our company</Link>
            </li>
            <li className="tablet:text-white tablet:text-[1.8rem] text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline">
              <Link href="/location">Locations</Link>
            </li>
            <li className="tablet:text-white tablet:text-[1.8rem] text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        )}

        <button
          className="tablet:block hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <Image
            src="/shared/mobile/icon-hamburger.svg"
            alt="Hamburger"
            width={24}
            height={24}
            className={`${isNavOpen ? "hidden" : "false"}`}
          />
          <Image
            src="/shared/mobile/icon-close.svg"
            alt="close"
            width={24}
            height={24}
            className={`${isNavOpen ? "block" : "hidden"}`}
          />
        </button>
        {/* <div className="fixed left-0 top-0 z-[9] min-h-[100dvh] w-full bg-black/50"></div> */}
      </nav>
    </header>
  );
}

export default Navigation;
