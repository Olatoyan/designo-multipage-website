import Image from "next/image";
import TalentImg from "@/public/about/desktop/image-world-class-talent.jpg";
import PatternImg from "@/public/shared/desktop/bg-pattern-two-circles.svg";

function AboutTalent() {
  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] pr-[9.6rem]">
      <picture className="relative">
        <Image
          src={TalentImg}
          alt="Talent"
          className="object-cover"
          placeholder="blur"
          quality={100}
        />
      </picture>
      <div className="z-[3] ml-auto">
        <h2 className="pb-[2.4rem] text-[4rem] font-medium leading-[120%] text-[#e7816b]">
          World-class talent
        </h2>
        <p className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-[#333136]">
          <span className="block pb-12">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </span>
          <span>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </span>
        </p>
      </div>

      <Image
        src={PatternImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-[30%] object-cover"
        quality={100}
      />
    </section>
  );
}

export default AboutTalent;
