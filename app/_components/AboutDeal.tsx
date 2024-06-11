"use client";
import Image from "next/image";
import DesktopRealImg from "@/public/about/desktop/image-real-deal.jpg";
import TabletRealImg from "@/public/about/tablet/image-real-deal.jpg";
import MobileRealImg from "@/public/about/mobile/image-real-deal.jpg";
import PatternImg from "@/public/shared/desktop/bg-pattern-two-circles.svg";
import useMediaQuery from "../_hooks/useMediaQuery";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function AboutDeal() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const headingAnimation = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] pl-[9.6rem] laptop:flex-col laptop:pl-0 laptop:text-center tablet:rounded-none">
      <div className="z-[3] mr-auto laptop:mr-0 laptop:py-[6.4rem]">
        <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingAnimation}
          transition={{ duration: 0.5 }}
          className="pb-[2.4rem] text-[4rem] font-medium leading-[120%] text-[#e7816b] tablet:pb-[2.4rem] tablet:text-[3.2rem] tablet:leading-[3.6rem]"
        >
          The real deal
        </motion.h2>

        <motion.p
          ref={paragraphRef}
          initial="hidden"
          animate={paragraphInView ? "visible" : "hidden"}
          variants={paragraphAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-[#333136] laptop:max-w-[57.2rem] tablet:px-6 tablet:text-[1.5rem] tablet:leading-[2.5rem]"
        >
          <span className="block pb-12">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </span>
          <span>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </span>
        </motion.p>
      </div>

      <motion.picture
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageAnimation}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative laptop:order-first laptop:h-[40rem] laptop:w-full tablet:h-[32rem]"
      >
        <Image
          src={
            isDesktop
              ? DesktopRealImg
              : isTablet
                ? TabletRealImg
                : MobileRealImg
          }
          alt="Talent"
          className="object-cover laptop:h-full laptop:w-full"
          placeholder="blur"
          quality={100}
        />
      </motion.picture>

      <Image
        src={PatternImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-0 object-cover"
        quality={100}
      />
    </section>
  );
}

export default AboutDeal;
