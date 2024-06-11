import CountryLocationsCard from "@/app/_components/CountryLocationsCard";

import DesktopAustraliaImg from "@/public/locations/desktop/image-map-australia.png";
import TabletAustraliaImg from "@/public/locations/tablet/image-map-australia.png";
import DesktopCanadaImg from "@/public/locations/desktop/image-map-canada.png";
import TabletCanadaImg from "@/public/locations/tablet/image-map-canada.png";
import DesktopUnitedKingdomImg from "@/public/locations/desktop/image-map-united-kingdom.png";
import TabletUnitedKingdomImg from "@/public/locations/tablet/image-map-uk.png";

export const locations = [
  {
    country: "Canada",
    address1: "Designo Central Office",
    address2: "3886 Wellington Street",
    address3: "Toronto, Ontario M9C 3J5",
    tel: "+1 253-863-8967",
    mail: "contact@designo.co",
    DesktopImg: DesktopCanadaImg,
    TabletImg: TabletCanadaImg,
  },
  {
    country: "Australia",
    address1: "Designo AU Office",
    address2: "19 Balonne Street",
    address3: "New South Wales 2443",
    tel: "(02) 6720 9092",
    mail: "contact@designo.au",
    DesktopImg: DesktopAustraliaImg,
    TabletImg: TabletAustraliaImg,
  },
  {
    country: "United Kingdom",
    address1: "Designo UK Office",
    address2: "13 Colorado Way",
    address3: "Rhyd-y-fro SA8 9GA",
    tel: "078 3115 1400",
    mail: "contact@designo.uk",
    DesktopImg: DesktopUnitedKingdomImg,
    TabletImg: TabletUnitedKingdomImg,
  },
];

function CountryLocations() {
  return (
    <section className="mb-[16rem] flex flex-col gap-[3.2rem]">
      {locations.map((location) => (
        <CountryLocationsCard
          key={location.country}
          country={location.country}
          address1={location.address1}
          address2={location.address2}
          address3={location.address3}
          tel={location.tel}
          mail={location.mail}
          DesktopImg={location.DesktopImg}
          TabletImg={location.TabletImg}
        />
      ))}
    </section>
  );
}

export default CountryLocations;
