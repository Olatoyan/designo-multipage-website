"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import PatterImg from "@/public/contact/desktop/bg-pattern-hero-desktop.svg";
import ContactForm from "./ContactForm";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function ContactHeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] miniDesktop:gap-5 miniDesktop:px-16 laptop:flex-col laptop:items-start laptop:py-28 tablet:rounded-none tablet:px-8 tablet:text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="flex-1 laptop:w-full tablet:flex tablet:flex-col tablet:items-center">
        <motion.h1
          className="pb-[3.2rem] text-[4.8rem] font-medium leading-[100%] text-white tablet:text-[3.2rem] tablet:leading-[3.6rem]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Contact us
        </motion.h1>
        <motion.p
          className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-white laptop:w-full"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
        >
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </motion.p>
      </div>

      <ContactForm />

      <Image
        src={PatterImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-0 laptop:top-0"
      />
    </motion.section>
  );
}

export default ContactHeroSection;
