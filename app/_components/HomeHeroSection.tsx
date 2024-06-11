"use client";
import Image from "next/image";
import Link from "next/link";
import HeroPhone from "@/public/home/desktop/image-hero-phone.png";
import BgPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";
import { motion } from "framer-motion";

function HomeHeroSection() {
  return (
    <section className="relative grid grid-cols-2 items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] desktop:px-16 miniDesktop:grid-cols-1 miniDesktop:pt-24 tablet:rounded-none tablet:px-8">
      <motion.div
        className="flex flex-col items-start miniDesktop:items-center miniDesktop:text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="max-w-[54rem] pb-4 text-[4.8rem] font-medium leading-[100%] text-white miniDesktop:pb-8 tablet:text-[3.2rem] tablet:leading-[3.6rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Award-winning custom designs and digital branding solutions
        </motion.h1>
        <motion.p
          className="max-w-[44.5rem] pb-16 text-[1.6rem] leading-[2.6rem] text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </motion.p>

        <Link
          href="/contact"
          className="inline-block rounded-[0.8rem] bg-white px-[2.4rem] py-[1.6rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136] transition-all duration-300 hover:bg-[#ffad9b] hover:text-white"
        >
          Learn more
        </Link>
      </motion.div>

      <picture className="miniDesktop:flex miniDesktop:justify-center">
        <Image
          src={HeroPhone}
          alt="Hero Phone"
          quality={100}
          className="mb-[-25rem] miniDesktop:mb-[-35rem] miniDesktop:mt-[-10rem] mobile:mb-[-20rem] mobile:mt-0"
          placeholder="blur"
        />
      </picture>

      <Image
        src={BgPattern}
        alt="Bg Pattern"
        quality={100}
        className="absolute right-0 top-0 mobile:right-[-13rem]"
      />
    </section>
  );
}

export default HomeHeroSection;
