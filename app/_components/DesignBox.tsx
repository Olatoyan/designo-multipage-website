"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DesignCard from "./DesignCard";

type DesignBoxProps = {
  title: string;
  description: string;
  image: string;
};

function DesignBox({ data }: { data: DesignBoxProps[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref}>
      <AnimatePresence>
        {/* {inView && ( */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-[16rem] grid grid-cols-3 gap-x-12 gap-y-14 laptop:grid-cols-1 tablet:mt-[9.6rem] tablet:px-10"
        >
          {data.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              style={{ position: "relative" }}
            >
              <DesignCard
                title={design.title}
                description={design.description}
                image={design.image}
              />
            </motion.div>
          ))}
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </section>
  );
}

export default DesignBox;
