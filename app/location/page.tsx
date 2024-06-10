import CountryLocations from "@/app/_components/CountryLocations";
import Cta from "@/app/_components/Cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations",
};

function Locations() {
  return (
    <>
      <CountryLocations />
      <Cta />
    </>
  );
}

export default Locations;
