"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo-dark.png";
import { useState } from "react";
import useMediaQuery from "../_hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
};

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isTablet = useMediaQuery("(max-width: 700px)");

  return (
    <header className="z-[11] px-[14rem] py-[6.4rem] desktop:px-24 tablet:relative tablet:px-10 tablet:py-14">
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

        <AnimatePresence>
          {(!isTablet || (isTablet && isNavOpen)) && (
            <motion.ul
              className="flex items-center gap-[4.2rem] tablet:absolute tablet:left-0 tablet:top-[9.6rem] tablet:z-10 tablet:w-full tablet:flex-col tablet:items-start tablet:bg-[#1d1c1e] tablet:px-10 tablet:py-20"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
            >
              <motion.li
                className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline tablet:text-[1.8rem] tablet:text-white"
                variants={itemVariants}
                onClick={() => setIsNavOpen(false)}
              >
                <Link href="/about">Our company</Link>
              </motion.li>
              <motion.li
                className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline tablet:text-[1.8rem] tablet:text-white"
                variants={itemVariants}
                onClick={() => setIsNavOpen(false)}
              >
                <Link href="/location">Locations</Link>
              </motion.li>
              <motion.li
                className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136] transition-all duration-300 hover:underline tablet:text-[1.8rem] tablet:text-white"
                variants={itemVariants}
                onClick={() => setIsNavOpen(false)}
              >
                <Link href="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          className="hidden tablet:block"
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
      </nav>
    </header>
  );
}

export default Navigation;
