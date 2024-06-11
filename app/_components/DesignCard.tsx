"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type DesignCardProps = {
  title: string;
  description: string;
  image: string;
};

function DesignCard({ title, description, image }: DesignCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] text-center transition-all duration-300 hover:bg-[#e7816b] laptop:flex-row tablet:flex-col"
    >
      <div className="relative h-[38rem] w-full laptop:h-[31rem] laptop:flex-1 tablet:flex-auto">
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="laptop:flex laptop:flex-1 laptop:flex-col laptop:items-center">
        <h3 className="pb-[1.6rem] pt-12 text-[2rem] font-medium uppercase leading-[2.6rem] tracking-[0.5rem] text-[#e7816b] transition-all duration-300 group-hover:text-white">
          {title}
        </h3>

        <p className="max-w-[28.6rem] pb-[3.2rem] text-[1.6rem] leading-[2.6rem] text-[#333136] transition-all duration-300 group-hover:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default DesignCard;
