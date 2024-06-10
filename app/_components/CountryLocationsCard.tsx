import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import patternImg from "@/public/shared/desktop/bg-pattern-three-circles.svg";

function CountryLocationsCard({
  country,
  address1,
  address2,
  address3,
  tel,
  mail,
  img,
}: {
  country: string;
  address1: string;
  address2: string;
  address3: string;
  tel: string;
  mail: string;
  img: StaticImageData;
}) {
  return (
    <div className="flex gap-12">
      <div className="relative grid flex-1 grid-cols-2 gap-12 overflow-hidden rounded-[1.5rem] bg-[#fdf3f0] px-[9.5rem] py-[8.8rem]">
        <h2 className="col-start-1 col-end-3 text-[4rem] font-medium leading-[4.8rem] text-[#e7816b]">
          {country}
        </h2>
        <address className="max-w-[25.5rem] text-[1.6rem] not-italic leading-[2.6rem] text-[#333136]">
          <span className="font-bold">{address1}</span> <br />
          <span>{address2}</span> <br />
          <span>{address3}</span>
        </address>
        <div className="w-full max-w-[35rem] text-[1.6rem] font-bold leading-[2.6rem] text-[#333136] opacity-50">
          <span>Contact</span> <br />
          <span>
            <Link href={`tel:${tel}`}>P: {tel}</Link>
            <br />
          </span>
          <span>
            <Link href={`mailto:${mail}`}>M: ${mail}</Link>
          </span>
        </div>

        <Image
          src={patternImg}
          alt="pattern"
          className="absolute bottom-[2rem] left-0"
        />
      </div>

      <picture className={` ${country === "Australia" && "order-first"}`}>
        <Image
          className="rounded-[1.5rem]"
          src={img}
          alt={`Map of ${country} location`}
        />
      </picture>
    </div>
  );
}

export default CountryLocationsCard;
