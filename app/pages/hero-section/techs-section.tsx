import TechCard from "../../_components/tech-card";

const Techs = () => {
  return (
    <section className="container mb-10 lg:min-h-[400px]">
      <div className="mt-24 space-y-20 text-center lg:mt-0 lg:text-left">
        <h1 className="text-4xl font-extralight lg:text-5xl">
          These are the <br />
          technologies I’ve been using
        </h1>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
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
