"use client";

import Image from "next/image";
import Link from "next/link";
import WebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenTop: { opacity: 0, y: -50 },
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

function HomeProjectSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="mt-[16rem] grid h-[64rem] grid-cols-2 gap-x-12 gap-y-[2.4rem] px-[14rem] laptop:grid-cols-1 laptop:px-20 tablet:mt-[12rem] tablet:px-10"
    >
      <motion.div
        className="relative row-start-1 row-end-3 flex flex-col items-center justify-center overflow-hidden rounded-[1rem] laptop:row-end-2"
        variants={variants}
        initial="hiddenLeft"
        animate={inView ? "visible" : "hiddenLeft"}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/web-design"
          className="group flex flex-col items-center justify-center"
        >
          <h2 className="relative z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.4rem] tablet:leading-[3.6rem]">
            Web Design
          </h2>
          <p className="relative z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-5">
            <span>View projects</span>
            <Image
              src="/shared/desktop/icon-right-arrow.svg"
              alt="View projects"
              height="10"
              width="10"
            />
          </p>
          <Image
            src={WebDesign}
            alt="Web Design"
            quality={100}
            fill
            className="z-[-1] object-cover"
            placeholder="blur"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
        </Link>
      </motion.div>

      <motion.div
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
        variants={variants}
        initial="hiddenTop"
        animate={inView ? "visible" : "hiddenTop"}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link
          href="/app-design"
          className="group flex flex-col items-center justify-center"
        >
          <h2 className="relative z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.4rem] tablet:leading-[3.6rem]">
            App Design
          </h2>
          <p className="relative z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-5">
            <span>View projects</span>
            <Image
              src="/shared/desktop/icon-right-arrow.svg"
              alt="View projects"
              height="10"
              width="10"
            />
          </p>
          <Image
            src={AppDesign}
            alt="App Design"
            quality={100}
            fill
            className="z-[-1] object-cover"
            placeholder="blur"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
        </Link>
      </motion.div>

      <motion.div
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
        variants={variants}
        initial="hiddenBottom"
        animate={inView ? "visible" : "hiddenBottom"}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          href="/graphic-design"
          className="group flex flex-col items-center justify-center"
        >
          <h2 className="relative z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.4rem] tablet:leading-[3.6rem]">
            Graphic Design
          </h2>
          <p className="relative z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-5">
            <span>View projects</span>
            <Image
              src="/shared/desktop/icon-right-arrow.svg"
              alt="View projects"
              height="10"
              width="10"
            />
          </p>
          <Image
            src={GraphicDesign}
            alt="Graphic Design"
            quality={100}
            fill
            className="z-[-1] object-cover"
            placeholder="blur"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
        </Link>
      </motion.div>
    </section>
  );
}

export default HomeProjectSection;
