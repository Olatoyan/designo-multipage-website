import Image from "next/image";
import Link from "next/link";
import WebDesign from "@/public/home/desktop/image-web-design-small.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";

function DesignLinkSection({ exclude }: { exclude: string }) {
  return (
    <section className="my-[16rem] grid h-[30rem] grid-cols-2 gap-x-12 gap-y-[2.4rem] px-[14rem]">
      {exclude === "web-design" ? null : (
        <Link
          href="/web-design"
          className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
        >
          <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
            Web Design
          </h2>
          <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
      )}
      {exclude === "app-design" ? null : (
        <Link
          href="/app-design"
          className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
        >
          <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
            App Design
          </h2>
          <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
      )}
      {exclude === "graphic-design" ? null : (
        <Link
          href="/graphic-design"
          className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem]"
        >
          <h2 className="z-[2] pb-[2.4rem] text-[4rem] font-medium uppercase leading-[120%] tracking-[0.2rem] text-white">
            Graphic Design
          </h2>
          <p className="z-[2] flex items-center gap-8 text-[1.5rem] font-medium uppercase tracking-[0.5rem] text-white">
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
      )}
    </section>
  );
}

export default DesignLinkSection;
