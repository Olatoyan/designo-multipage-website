import Link from "next/link";

function HomeHeroSection() {
  return (
    <section className="rounded-[1.5rem] bg-[#e7816b]">
      <div>
        <h1 className="max-w-[54rem] pb-4 text-[4.8rem] font-medium text-white">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="pb-16 text-[1.6rem] leading-[2.6rem] text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link
          href="/contact"
          className="rounded-[0.8rem] bg-white px-[2.4rem] py-[1.6rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136]"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}

export default HomeHeroSection;
