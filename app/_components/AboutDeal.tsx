import Image from "next/image";
import RealImg from "@/public/about/desktop/image-real-deal.jpg";
import PatternImg from "@/public/shared/desktop/bg-pattern-two-circles.svg";

function AboutDeal() {
  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] pl-[9.6rem]">
      <div className="z-[3] mr-auto">
        <h2 className="pb-[2.4rem] text-[4rem] font-medium leading-[120%] text-[#e7816b]">
          The real deal
        </h2>
        <p className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-[#333136]">
          <span className="block pb-12">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </span>
          <span>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </span>
        </p>
      </div>
      <picture className="relative">
        <Image
          src={RealImg}
          alt="Talent"
          className="object-cover"
          placeholder="blur"
          quality={100}
        />
      </picture>

      <Image
        src={PatternImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-0 object-cover"
        quality={100}
      />
    </section>
  );
}

export default AboutDeal;
