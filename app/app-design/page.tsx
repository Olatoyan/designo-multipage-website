import BgImage from "@/public/app-design/desktop/bg-pattern-intro-app.svg";
import HeroBanner from "@/app/_components/HeroBanner";
import DesignBox from "@/app/_components/DesignBox";
import DesignLinkSection from "@/app/_components/DesignLinkSection";
import Cta from "@/app/_components/Cta";
import { appDesignData } from "@/app/data/data";

function page() {
  return (
    <>
      <HeroBanner
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        image={BgImage}
      />

      <DesignBox data={appDesignData} />
      <DesignLinkSection exclude="app-design" />
      <Cta />
    </>
  );
}

export default page;
