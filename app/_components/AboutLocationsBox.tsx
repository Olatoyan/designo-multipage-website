import Image from "next/image";
import Link from "next/link";
import CanadaImg from "@/public/shared/desktop/illustration-canada.svg";
import AustraliaImg from "@/public/shared/desktop/illustration-australia.svg";
import UKImg from "@/public/shared/desktop/illustration-united-kingdom.svg";

function AboutLocationsBox() {
  return (
    <section className="mb-[16rem] grid grid-cols-3 gap-8 laptop:grid-cols-1 laptop:gap-24 tablet:mb-[9rem]">
      <AboutLocationCard image={CanadaImg} country="Canada" />
      <AboutLocationCard image={AustraliaImg} country="australia" />
      <AboutLocationCard image={UKImg} country="United kingdom" />
    </section>
  );
}

function AboutLocationCard({
  image,
  country,
}: {
  image: string;
  country: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={country} />
      <h3 className="pb-[3.2rem] pt-[4.8rem] text-center text-[2rem] font-medium uppercase leading-[2.6rem] tracking-[0.5rem] text-[#333136]">
        {country}
      </h3>
      <Link
        href="/location"
        className="rounded-[0.8rem] bg-[#e7816b] px-[1.85rem] py-[1.8rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-white transition-all duration-300 hover:bg-[#ffad9b]"
      >
        See Location
      </Link>
    </div>
  );
}

export default AboutLocationsBox;
