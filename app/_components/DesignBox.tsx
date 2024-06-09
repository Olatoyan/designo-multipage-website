import DesignCard from "./DesignCard";

type DesignBoxProps = {
  title: string;
  description: string;
  image: string;
};

function DesignBox({ data }: { data: DesignBoxProps[] }) {
  return (
    <section className="mt-[16rem] grid grid-cols-3 gap-x-12 gap-y-14">
      {data.map((design) => (
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

export default DesignBox;
