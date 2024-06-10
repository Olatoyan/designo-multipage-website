import Image from "next/image";
import AboutImg from "@/public/about/desktop/image-about-hero.jpg";
import ImgPattern from "@/public/about/desktop/bg-pattern-hero-about-desktop.svg";

function AboutHeroSection() {
  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] pl-36">
      <div className="z-[3]">
        <h1 className="pb-[3.2rem] text-[4.8rem] font-medium leading-[100%] text-white">
          About Us
        </h1>
        <p className="max-w-[45.8rem] text-[1.6rem] leading-[2.6rem] text-white">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <picture className="ml-auto">
        <Image
          src={AboutImg}
          alt="About Hero Image"
          quality={100}
          placeholder="blur"
        />
      </picture>
      <Image
        src={ImgPattern}
        alt="Pattern image"
        className="absolute bottom-0 left-0 h-[64rem] w-[64rem] object-cover"
      />
    </section>
  );
}

export default AboutHeroSection;
