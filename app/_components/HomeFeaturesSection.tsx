import Image from "next/image";

const FeaturesData = [
  {
    img: "/home/desktop/illustration-passionate.svg",
    title: "passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: "/home/desktop/illustration-resourceful.svg",
    title: "resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: "/home/desktop/illustration-friendly.svg",
    title: "friendly",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

function HomeFeaturesSection() {
  return (
    <section className="grid grid-cols-3 gap-[3.2rem]">
      {FeaturesData.map((feature) => (
        <FeatureCard
          key={feature.title}
          img={feature.img}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

function FeatureCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="my-[16rem] flex flex-col items-center text-center">
      <Image
        src={img}
        alt={title}
        height="202"
        width="202"
        className="rounded-full"
      />

      <h3 className="pb-[2.4rem] pt-[3rem] text-[2rem] font-medium uppercase leading-[130%] tracking-[0.5rem] text-[#333136]">
        {title}
      </h3>
      <p className="text-[1.6rem] leading-[2.6rem] text-[#333136]">
        {description}
      </p>
    </div>
  );
}

export default HomeFeaturesSection;
