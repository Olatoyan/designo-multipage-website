import { Metadata } from "next";
import HomeHeroSection from "@/app/_components/HomeHeroSection";
import HomeProjectSection from "@/app/_components/HomeProjectSection";
import HomeFeaturesSection from "@/app/_components/HomeFeaturesSection";
import Cta from "@/app/_components/Cta";

export const metadata: Metadata = {
  title: "Home / Designo",
};

function page() {
  return (
    <>
      <HomeHeroSection />
      <HomeProjectSection />
      <HomeFeaturesSection />
      <Cta />
    </>
  );
}

export default page;
