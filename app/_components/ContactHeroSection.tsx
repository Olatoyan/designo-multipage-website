import Image from "next/image";
import PatterImg from "@/public/contact/desktop/bg-pattern-hero-desktop.svg";
import ContactForm from "./ContactForm";

function ContactHeroSection() {
  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] px-[9.5rem] miniDesktop:gap-5 miniDesktop:px-16 laptop:flex-col laptop:items-start laptop:py-28 tablet:rounded-none tablet:px-8 tablet:text-center">
      <div className="flex-1 laptop:w-full tablet:flex tablet:flex-col tablet:items-center">
        <h1 className="pb-[3.2rem] text-[4.8rem] font-medium leading-[100%] text-white tablet:text-[3.2rem] tablet:leading-[3.6rem]">
          Contact us
        </h1>
        <p className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-white laptop:w-full">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <ContactForm />

      <Image
        src={PatterImg}
        alt="Bg Pattern"
        className="absolute bottom-0 left-0 laptop:top-0"
      />
    </section>
  );
}

export default ContactHeroSection;
