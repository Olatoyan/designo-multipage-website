"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import DesktopWebDesign from "@/public/home/desktop/image-web-design-small.jpg";
import DesktopAppDesign from "@/public/home/desktop/image-app-design.jpg";
import DesktopGraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";
import TabletWebDesign from "@/public/home/tablet/image-web-design.jpg";
import TabletAppDesign from "@/public/home/tablet/image-app-design.jpg";
import TabletGraphicDesign from "@/public/home/tablet/image-graphic-design.jpg";
import MobileWebDesign from "@/public/home/mobile/image-web-design.jpg";
import MobileAppDesign from "@/public/home/mobile/image-app-design.jpg";
import MobileGraphicDesign from "@/public/home/mobile/image-graphic-design.jpg";
import useMediaQuery from "../_hooks/useMediaQuery";
import { useInView } from "react-intersection-observer";

function DesignLinkSection({ exclude }: { exclude: string }) {
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animations = [
    {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: inView ? 1 : 0, x: inView ? 0 : -100 },
    },
    {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : -100 },
    },
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: inView ? 1 : 0, x: inView ? 0 : 100 },
    },
  ];

  return (
    <section ref={ref}>
      <div className="my-[16rem] grid h-[30rem] grid-cols-2 gap-x-12 gap-y-[2.4rem] px-[14rem] miniDesktop:px-20 laptop:h-[45rem] laptop:grid-cols-1 tablet:my-[9.6rem] tablet:h-[55rem] tablet:px-10">
        {exclude !== "web-design" && (
          <motion.div {...animations[0]} transition={{ duration: 0.5 }}>
            <Link
              href="/web-design"
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1rem] laptop:py-[8.3rem]"
            >
              <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.8rem] tablet:leading-[3.6rem] tablet:tracking-[0.14rem]">
                Web Design
              </h2>
              <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-4">
                <span>View projects</span>
                <Image
                  src="/shared/desktop/icon-right-arrow.svg"
                  alt="View projects"
                  height="10"
                  width="10"
                />
              </p>
              <Image
                src={
                  isDesktop
                    ? DesktopWebDesign
                    : isTablet
                      ? TabletWebDesign
                      : MobileWebDesign
                }
                alt="Web Design"
                quality={100}
                fill
                className="z-[-1] object-cover"
                placeholder="blur"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
            </Link>
          </motion.div>
        )}
        {exclude !== "app-design" && (
          <motion.div {...animations[1]} transition={{ duration: 0.5 }}>
            <Link
              href="/app-design"
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1rem] laptop:py-[8.3rem]"
            >
              <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.8rem] tablet:leading-[3.6rem] tablet:tracking-[0.14rem]">
                App Design
              </h2>
              <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-4">
                <span>View projects</span>
                <Image
                  src="/shared/desktop/icon-right-arrow.svg"
                  alt="View projects"
                  height="10"
                  width="10"
                />
              </p>
              <Image
                src={
                  isDesktop
                    ? DesktopAppDesign
                    : isTablet
                      ? TabletAppDesign
                      : MobileAppDesign
                }
                alt="App Design"
                quality={100}
                fill
                className="z-[-1] object-cover"
                placeholder="blur"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
            </Link>
          </motion.div>
        )}
        {exclude !== "graphic-design" && (
          <motion.div {...animations[2]} transition={{ duration: 0.5 }}>
            <Link
              href="/graphic-design"
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1rem] laptop:py-[8.3rem]"
            >
              <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white tablet:text-[2.8rem] tablet:leading-[3.6rem] tablet:tracking-[0.14rem]">
                Graphic Design
              </h2>
              <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white tablet:gap-4">
                <span>View projects</span>
                <Image
                  src="/shared/desktop/icon-right-arrow.svg"
                  alt="View projects"
                  height="10"
                  width="10"
                />
              </p>
              <Image
                src={
                  isDesktop
                    ? DesktopGraphicDesign
                    : isTablet
                      ? TabletGraphicDesign
                      : MobileGraphicDesign
                }
                alt="Graphic Design"
                quality={100}
                fill
                className="z-[-1] object-cover"
                placeholder="blur"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default DesignLinkSection;
