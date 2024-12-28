import TechCard from "@/app/_components/tech-card";

const Techs = () => {
  return (
    <section className="container h-[600px]">
      <div className="mt-24 space-y-28 text-center lg:mt-0 lg:text-left">
        <h1 className="text-4xl font-extralight lg:text-5xl">
          These are the <br />
          technologies I’ve been using
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          <TechCard />
          <TechCard />
          <TechCard />
          <TechCard />
        </div>
      </div>
    </section>
  );
};

export default Techs;
