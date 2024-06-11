"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesData = [
  {
    img: "/home/desktop/illustration-passionate.svg",
    title: "passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: "/home/desktop/illustration-resourceful.svg",
    title: "resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: "/home/desktop/illustration-friendly.svg",
    title: "friendly",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function HomeFeaturesSection() {
  return (
    <section className="my-[16rem] grid grid-cols-3 gap-[3.2rem] laptop:grid-cols-1 tablet:gap-16">
      {FeaturesData.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          img={feature.img}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </section>
  );
}

function FeatureCard({
  img,
  title,
  description,
  index,
}: {
  img: string;
  title: string;
  description: string;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center laptop:flex-row laptop:gap-20 laptop:text-start tablet:flex-col tablet:gap-0 tablet:px-10 tablet:text-center"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <Image
          src={img}
          alt={title}
          height="202"
          width="202"
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <h3 className="pb-[2.4rem] pt-[3rem] text-[2rem] font-medium uppercase leading-[130%] tracking-[0.5rem] text-[#333136] tablet:pb-[3.2rem] tablet:pt-[4.8rem] tablet:text-[2rem]">
          {title}
        </h3>
        <p className="text-[1.6rem] leading-[2.6rem] text-[#333136]">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default HomeFeaturesSection;
