"use client";

import Image from "next/image";
import DesktopAboutImg from "@/public/about/desktop/image-about-hero.jpg";
import TabletAboutImg from "@/public/about/tablet/image-about-hero.jpg";
import MobileAboutImg from "@/public/about/mobile/image-about-hero.jpg";
import ImgPattern from "@/public/about/desktop/bg-pattern-hero-about-desktop.svg";
import useMediaQuery from "../_hooks/useMediaQuery";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AboutHeroSection() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textAnimation = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative mb-[16rem] flex items-center gap-10 overflow-hidden rounded-[1.5rem] bg-[#e7816b] pl-36 laptop:flex-col laptop:gap-0 laptop:pl-0 tablet:mb-0 tablet:rounded-none">
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textAnimation}
        transition={{ duration: 0.5 }}
        className="z-[3] laptop:py-[6.4rem] laptop:text-center"
      >
        <h1 className="pb-[3.2rem] text-[4.8rem] font-medium leading-[100%] text-white tablet:pb-[2.4rem] tablet:text-[3.2rem] tablet:leading-[3.6rem]">
          About Us
        </h1>
        <p className="max-w-[45.8rem] text-[1.6rem] leading-[2.6rem] text-white laptop:max-w-[57.3rem] tablet:px-6 tablet:text-[1.5rem] tablet:leading-[2.5rem]">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </motion.div>
      <motion.picture
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageAnimation}
        transition={{ duration: 0.5 }}
        className="ml-auto laptop:order-first laptop:ml-0 laptop:h-[40rem] laptop:w-full tablet:h-[32rem]"
      >
        <Image
          src={
            isDesktop
              ? DesktopAboutImg
              : isTablet
                ? TabletAboutImg
                : MobileAboutImg
          }
          alt="About Hero Image"
          quality={100}
          placeholder="blur"
          className="h-full w-full"
        />
      </motion.picture>
      <Image
        src={ImgPattern}
        alt="Pattern image"
        className="absolute bottom-0 left-0 h-[64rem] w-[64rem] object-cover"
      />
    </section>
  );
}

export default AboutHeroSection;
