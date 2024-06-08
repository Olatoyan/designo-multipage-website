import Image from "next/image";

type HeroBannerType = {
  title: string;
  description: string;
  image: string;
};

function HeroBanner({ title, description, image }: HeroBannerType) {
  return (
    <section className="relative flex flex-col items-center justify-between rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] py-24">
      <h1 className="z-[2] max-w-[26.8rem] pb-[2.4rem] text-center text-[4.8rem] font-medium leading-[100%] text-white">
        {title}
      </h1>
      <p className="z-[2] max-w-[40rem] text-center text-[1.6rem] leading-[2.6rem] text-white">
        {description}
      </p>

      <Image src={image} alt="Bg Pattern" fill className="object-cover" />
    </section>
  );
}

export default HeroBanner;