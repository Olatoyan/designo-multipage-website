"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type HeroBannerType = {
  title: string;
  description: string;
  image: string;
};

function HeroBanner({ title, description, image }: HeroBannerType) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative flex flex-col items-center justify-between rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] py-28 tablet:rounded-none tablet:px-10 tablet:py-[10.5rem]"
    >
      <motion.h1
        className="z-[2] pb-[2.4rem] text-center text-[4.8rem] font-medium leading-[100%] text-white tablet:text-[3.2rem] tablet:leading-[3.6rem]"
        variants={titleVariants}
      >
        {title}
      </motion.h1>
      <motion.p
        className="z-[2] max-w-[40rem] text-center text-[1.6rem] leading-[2.6rem] text-white tablet:w-full"
        variants={descriptionVariants}
      >
        {description}
      </motion.p>
      <Image src={image} alt="Bg Pattern" fill className="object-cover" />
    </motion.section>
  );
}

export default HeroBanner;
