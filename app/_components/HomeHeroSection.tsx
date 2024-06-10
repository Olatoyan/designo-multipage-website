import Image from "next/image";
import Link from "next/link";
import HeroPhone from "@/public/home/desktop/image-hero-phone.png";
import BgPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";

function HomeHeroSection() {
  return (
    <section className="relative grid grid-cols-2 items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] desktop:px-16 miniDesktop:grid-cols-1 miniDesktop:pt-24 tablet:rounded-none tablet:px-8">
      <div className="flex flex-col items-start miniDesktop:items-center miniDesktop:text-center">
        <h1 className="max-w-[54rem] pb-4 text-[4.8rem] font-medium leading-[100%] text-white miniDesktop:pb-8 tablet:text-[3.2rem] tablet:leading-[3.6rem]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="max-w-[44.5rem] pb-16 text-[1.6rem] leading-[2.6rem] text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-[0.8rem] bg-white px-[2.4rem] py-[1.6rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136] transition-all duration-300 hover:bg-[#ffad9b] hover:text-white"
        >
          Learn more
        </Link>
      </div>

      <picture className="miniDesktop:flex miniDesktop:justify-center">
        <Image
          src={HeroPhone}
          alt="Hero Phone"
          quality={100}
          className="mobile:mb-[-20rem] mobile:mt-0 mb-[-25rem] miniDesktop:mb-[-35rem] miniDesktop:mt-[-10rem]"
          placeholder="blur"
        />
      </picture>

      <Image
        src={BgPattern}
        alt="Bg Pattern"
        quality={100}
        className="mobile:right-[-13rem] absolute right-0 top-0"
      />
    </section>
  );
}

export default HomeHeroSection;
