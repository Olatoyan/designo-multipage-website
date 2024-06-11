"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const h2Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const pVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function Cta() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative -mb-32 flex items-center justify-between rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] py-24 desktop:px-16 laptop:flex-col laptop:gap-16 laptop:text-center tablet:mx-10 tablet:mb-[-18rem] tablet:px-8"
    >
      <motion.div
        className="laptop:flex laptop:flex-col laptop:items-center laptop:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="max-w-[26.8rem] pb-2 text-[4rem] font-medium leading-[100%] text-white tablet:text-[3.2rem] tablet:leading-[3.6rem]"
          variants={h2Variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s talk about your project
        </motion.h2>
        <motion.p
          className="max-w-[46rem] text-[1.6rem] leading-[2.6rem] text-white"
          variants={pVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </motion.p>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          href="/contact"
          className="relative z-[2] rounded-[0.8rem] bg-white px-[1.9rem] py-[1.7rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136] transition-all duration-300 hover:bg-[#ffad9b] hover:text-white"
        >
          Get in Touch
        </Link>
      </motion.div>
      <Image
        src="/shared/desktop/bg-pattern-call-to-action.svg"
        alt="Bg Pattern"
        fill
        className="object-cover"
      />
    </section>
  );
}

export default Cta;
