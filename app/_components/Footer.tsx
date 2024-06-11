"use client";
import Logo from "@/public/logo-light.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const pathname = usePathname();

  const navLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const addressVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`bg-[#1d1c1e] px-[14rem] pb-28 pt-[14.4rem] desktop:px-24 laptop:px-8 ${
        pathname === "/contact" ? "laptop:pt-36" : "laptop:pt-[25rem]"
      }`}
    >
      <nav className="flex items-center justify-between border-b border-solid border-white border-opacity-10 pb-16 tablet:flex-col tablet:border-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Designo Logo"
            width="196"
            height="24"
            quality={100}
            className="tablet:pb-[3.2rem]"
          />
        </Link>

        <ul className="flex items-center gap-[4.2rem] tablet:w-full tablet:flex-col tablet:border-t tablet:border-solid tablet:border-white tablet:border-opacity-50 tablet:pt-[3.2rem]">
          <motion.li
            className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline"
            variants={navLinkVariants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          >
            <Link href="/about">Our company</Link>
          </motion.li>
          <motion.li
            className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline"
            variants={navLinkVariants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          >
            <Link href="/location">Locations</Link>
          </motion.li>
          <motion.li
            className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline"
            variants={navLinkVariants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          >
            <Link href="/contact">Contact</Link>
          </motion.li>
        </ul>
      </nav>

      <div className="flex items-end gap-12 pt-12 tablet:flex-col tablet:items-center tablet:text-center">
        <motion.address
          className="w-full max-w-[35rem] text-[1.6rem] not-italic leading-[2.6rem] text-white opacity-50 laptop:max-w-[22.3rem]"
          variants={addressVariants}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
        >
          <span className="font-bold opacity-100">Designo Central Office</span>
          <br />
          <span>3886 Wellington Street</span> <br />
          <span>Toronto, Ontario M9C 3J5</span>
        </motion.address>

        <motion.div
          className="w-full max-w-[35rem] text-[1.6rem] font-bold leading-[2.6rem] text-white opacity-50 laptop:max-w-[22.3rem]"
          variants={contactVariants}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
        >
          <span>Contact Us (Central Office):</span> <br />
          <span>
            <Link href="tel:+1 253-863-8967">P: +1 253-863-8967</Link>
            <br />
          </span>
          <span>
            <Link href="mailto:contact@designo.co">M: contact@designo.co</Link>
          </span>
        </motion.div>
        <ul className="ml-auto flex items-center gap-6 tablet:ml-0">
          {["facebook", "youtube", "twitter", "pinterest", "instagram"].map(
            (platform, index) => (
              <motion.li
                key={index}
                variants={socialVariants}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
              >
                <Image
                  src={`/shared/desktop/icon-${platform}.svg`}
                  alt={platform}
                  width="24"
                  height="24"
                />
              </motion.li>
            ),
          )}
        </ul>
      </div>
    </motion.footer>
  );
}

export default Footer;
