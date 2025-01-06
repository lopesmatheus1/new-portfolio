import { fetchHygraphQuery } from "@/app/_utils/fetch-hygraph-query";
import TechCard from "./tech-card";
import { TechnologiesResponse } from "@/app/_types/page-home-projects";
import HomeTitle from "@/app/_components/home-titles";

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
        <HomeTitle variant={"normal"}>
          {" "}
          Estas são as <br />
          tecnologias com as quais tenho
          <br /> trabalhado
        </HomeTitle>

        <div>
          <TechCard technologies={technologies} />
        </div>
      </div>
    </section>
  );
};

export default Techs;
