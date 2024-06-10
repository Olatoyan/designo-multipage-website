import ContactHeroSection from "@/app/_components/ContactHeroSection";
import AboutLocationsBox from "@/app/_components/AboutLocationsBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

function Contact() {
  return (
    <>
      <ContactHeroSection />
      <AboutLocationsBox />
    </>
  );
}

export default Contact;
