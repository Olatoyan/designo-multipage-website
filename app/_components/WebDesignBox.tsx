import DesignCard from "./DesignCard";

const designData = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: "/web-design/desktop/image-express.jpg",
  },
  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: "/web-design/desktop/image-transfer.jpg",
  },
  {
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: "/web-design/desktop/image-photon.jpg",
  },
  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
    image: "/web-design/desktop/image-builder.jpg",
  },
  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    image: "/web-design/desktop/image-blogr.jpg",
  },
  {
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    image: "/web-design/desktop/image-camp.jpg",
  },
];

function WebDesignBox() {
  return (
    <section className="mt-[16rem] grid grid-cols-3 gap-x-12 gap-y-14">
      {designData.map((design) => (
        <DesignCard
          title={design.title}
          description={design.description}
          image={design.image}
          key={design.title}
        />
      ))}
    </section>
  );
}

export default WebDesignBox;
