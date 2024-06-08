import { Metadata } from "next";
import HomeHeroSection from "@/app/_components/HomeHeroSection";

export const metadata: Metadata = {
  title: "Home / Designo",
};

function page() {
  return (
    <>
      <HomeHeroSection />
    </>
  );
}

export default page;
