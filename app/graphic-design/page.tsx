import { Metadata } from "next";
import HeroBanner from "../_components/HeroBanner";
import BgImage from "@/public/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import WebDesignBox from "@/app/_components/DesignBox";
import DesignLinkSection from "@/app/_components/DesignLinkSection";
import Cta from "@/app/_components/Cta";
import { graphicDesignData } from "@/app/data/data";

export const metadata: Metadata = {
  title: "Grpahic-Design",
};

function GraphicDesign() {
  return (
    <>
      <HeroBanner
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        image={BgImage}
      />
      <WebDesignBox data={graphicDesignData} />
      <DesignLinkSection exclude="graphic-design" />
      <Cta />
    </>
  );
}

export default GraphicDesign;
