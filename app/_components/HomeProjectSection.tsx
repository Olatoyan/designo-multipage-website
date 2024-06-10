import Image from "next/image";
import Link from "next/link";
import WebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";

function HomeProjectSection() {
  return (
    <section className="tablet:px-10 tablet:mt-[12rem] mt-[16rem] grid h-[64rem] grid-cols-2 gap-x-12 gap-y-[2.4rem] px-[14rem] laptop:grid-cols-1 laptop:px-20">
      <Link
        href="/web-design"
        className="group relative row-start-1 row-end-3 flex flex-col items-center justify-center overflow-hidden rounded-[1rem] laptop:row-end-2"
      >
        <h2 className="tablet:text-[2.4rem] tablet:leading-[3.6rem] z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
          Web Design
        </h2>
        <p className="tablet:gap-5 z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
      <Link
        href="/app-design"
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
      >
        <h2 className="tablet:text-[2.4rem] tablet:leading-[3.6rem] z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
          App Design
        </h2>
        <p className="tablet:gap-5 z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
          alt="Web Design"
          quality={100}
          fill
          className="z-[-1] object-cover"
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
      </Link>
      <Link
        href="/graphic-design"
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
      >
        <h2 className="tablet:text-[2.4rem] tablet:leading-[3.6rem] z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
          Graphic Design
        </h2>
        <p className="tablet:gap-5 z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
          alt="Web Design"
          quality={100}
          fill
          className="z-[-1] object-cover"
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-[#e7816b] group-hover:bg-opacity-50"></div>
      </Link>
    </section>
  );
}

export default HomeProjectSection;
