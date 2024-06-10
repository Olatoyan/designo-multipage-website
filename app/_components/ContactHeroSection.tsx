import Image from "next/image";
import PatterImg from "@/public/contact/desktop/bg-pattern-hero-desktop.svg";
import ContactForm from "./ContactForm";

function ContactHeroSection() {
  return (
    <section className="relative mb-[16rem] flex items-center overflow-hidden rounded-[1.5rem] bg-[#e7816b] px-[9.5rem]">
      <div className="flex-1">
        <h1 className="pb-[3.2rem] text-[4.8rem] font-medium leading-[100%] text-white">
          Contact us
        </h1>
        <p className="max-w-[44.5rem] text-[1.6rem] leading-[2.6rem] text-white">
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
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}

export default ContactHeroSection;
