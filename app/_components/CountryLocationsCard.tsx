"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import patternImg from "@/public/shared/desktop/bg-pattern-three-circles.svg";
import useMediaQuery from "../_hooks/useMediaQuery";

type CountryName = "Canada" | "Australia" | "United Kingdom";

function CountryLocationsCard({
  country,
  address1,
  address2,
  address3,
  tel,
  mail,
  DesktopImg,
  TabletImg,
}: {
  country: CountryName;
  address1: string;
  address2: string;
  address3: string;
  tel: string;
  mail: string;
  DesktopImg: StaticImageData;
  TabletImg: StaticImageData;
}) {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    Canada: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    Australia: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    "United Kingdom": {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex gap-12 laptop:flex-col tablet:gap-0"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants[country]}
    >
      <div className="relative grid flex-1 grid-cols-2 gap-12 overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] px-[9.5rem] py-[8.8rem] tablet:grid-cols-1 tablet:justify-items-center tablet:gap-[2.4rem] tablet:text-center">
        <motion.h2
          className="col-start-1 col-end-3 text-[4rem] font-medium leading-[4.8rem] text-[#e7816b] tablet:col-end-2 tablet:text-[3.2rem] tablet:leading-[3.6rem]"
          variants={textVariants}
        >
          {country}
        </motion.h2>
        <motion.address
          className="max-w-[25.5rem] text-[1.6rem] not-italic leading-[2.6rem] text-[#333136]"
          variants={textVariants}
        >
          <span className="font-bold">{address1}</span> <br />
          <span>{address2}</span> <br />
          <span>{address3}</span>
        </motion.address>
        <motion.div
          className="w-full max-w-[35rem] text-[1.6rem] font-bold leading-[2.6rem] text-[#333136] opacity-50"
          variants={textVariants}
        >
          <span>Contact</span> <br />
          <span>
            <Link href={`tel:${tel}`}>P: {tel}</Link>
            <br />
          </span>
          <span>
            <Link href={`mailto:${mail}`}>M: {mail}</Link>
          </span>
        </motion.div>

        <Image
          src={patternImg}
          alt="pattern"
          className="absolute bottom-[2rem] left-0"
        />
      </div>

      <picture
        className={`${
          country === "Australia" && "order-first"
        } h-full basis-[37.5rem] laptop:order-first tablet:basis-0`}
      >
        <Image
          className="rounded-[1.5rem] laptop:w-full tablet:rounded-none"
          src={isDesktop ? DesktopImg : TabletImg}
          placeholder="blur"
          alt={`Map of ${country} location`}
        />
      </picture>
    </motion.div>
  );
}

export default CountryLocationsCard;
