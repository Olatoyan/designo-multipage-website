import { Metadata } from "next";
import HeroBanner from "../_components/HeroBanner";
import BgImage from "@/public/web-design/desktop/bg-pattern-intro-web.svg";
import WebDesignBox from "@/app/_components/DesignBox";
import DesignLinkSection from "@/app/_components/DesignLinkSection";
import Cta from "@/app/_components/Cta";
import { webDesignData } from "@/app/data/data";

export const metadata: Metadata = {
  title: "Web-Design",
};

function WebDesign() {
  return (
    <>
      <HeroBanner
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        image={BgImage}
      />
      <WebDesignBox data={webDesignData} />
      <DesignLinkSection exclude="web-design" />
      <Cta />
    </>
  );
}

export default WebDesign;
