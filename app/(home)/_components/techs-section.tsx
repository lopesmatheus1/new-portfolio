import { fetchHygraphQuery } from "@/app/_utils/fetch-hygraph-query";
import TechCard from "./tech-card";
import { TechnologiesResponse } from "@/app/_types/page-home-projects";

const getTechnologiesQuery = async (): Promise<TechnologiesResponse> => {
  const query = `query MyQuery {
  technologies(first:50) {
    category
    name
    iconSVG {
      url
    }
  }
}
  `;
  return fetchHygraphQuery(query);
};

const Techs = async () => {
  const { technologies } = await getTechnologiesQuery();

  return (
    <section className="container mb-10 lg:min-h-[400px]">
      <div className="mt-24 space-y-20 text-center lg:mt-0 lg:text-left">
        <h1 className="text-4xl font-extralight lg:text-5xl">
          Estas são as <br />
          tecnologias com as quais tenho
          <br /> trabalhado
        </h1>

        <div>
          <TechCard technologies={technologies} />
        </div>
      </div>
    </section>
  );
};

export default Techs;
