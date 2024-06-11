"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import DesktopTalentImg from "@/public/about/desktop/image-world-class-talent.jpg";
import TabletTalentImg from "@/public/about/tablet/image-world-class-talent.jpg";
import MobileTalentImg from "@/public/about/mobile/image-world-class-talent.jpg";
import PatternImg from "@/public/shared/desktop/bg-pattern-two-circles.svg";
import useMediaQuery from "../_hooks/useMediaQuery";

function AboutTalent() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] pr-[9.6rem] laptop:flex-col laptop:pr-0 laptop:text-center tablet:mb-[9rem] tablet:rounded-none">
      <motion.picture
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageAnimation}
        transition={{ duration: 0.5 }}
        className="relative laptop:h-[40rem] laptop:w-full tablet:h-[32rem]"
      >
        <Image
          src={
            isDesktop
              ? DesktopTalentImg
              : isTablet
                ? TabletTalentImg
                : MobileTalentImg
          }
          alt="Talent"
          className="object-cover laptop:h-full laptop:w-full"
          placeholder="blur"
          quality={100}
        />
      </motion.picture>
      <div className="z-[3] ml-auto laptop:ml-0 laptop:py-[6.4rem]">
        <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pb-[2.4rem] text-[4rem] font-medium leading-[120%] text-[#e7816b] tablet:pb-[2.4rem] tablet:text-[3.2rem] tablet:leading-[3.6rem]"
        >
          World-class talent
        </motion.h2>

        <motion.p
          ref={paragraphRef}
          initial="hidden"
          animate={paragraphInView ? "visible" : "hidden"}
          variants={paragraphAnimation}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-[#333136] laptop:max-w-[57.2rem] tablet:px-6 tablet:text-[1.5rem] tablet:leading-[2.5rem]"
        >
          <span className="block pb-12">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </span>
          <span>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </span>
        </motion.p>
      </div>
      <Image
        src={PatternImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-[30%] object-cover"
        quality={100}
      />
    </section>
  );
}

export default AboutTalent;
