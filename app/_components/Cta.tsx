import Link from "next/link";
import Image from "next/image";

function Cta() {
  return (
    <section className="tablet:mx-10 tablet:mb-[-18rem] relative -mb-32 flex items-center justify-between rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] py-24 desktop:px-16 laptop:flex-col laptop:gap-16 laptop:text-center">
      <div className="laptop:flex laptop:flex-col laptop:items-center laptop:gap-8">
        <h2 className="tablet:text-[3.2rem] tablet:leading-[3.6rem] max-w-[26.8rem] pb-2 text-[4rem] font-medium leading-[100%] text-white">
          Let’s talk about your project
        </h2>
        <p className="max-w-[46rem] text-[1.6rem] leading-[2.6rem] text-white">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link
        href="/contact"
        className="z-[2] rounded-[0.8rem] bg-white px-[1.9rem] py-[1.7rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136] transition-all duration-300 hover:bg-[#ffad9b] hover:text-white"
      >
        Get in Touch
      </Link>

      <Image
        src="/shared/desktop/bg-pattern-call-to-action.svg"
        alt="Bg Pattern"
        fill
        className="object-cover"
      />
    </section>
  );
}

export default Cta;
