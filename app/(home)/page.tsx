import ScrollHandler from "../_components/scroll-handler";
import { HeroResponse } from "../_types/page-home-projects";
import { fetchHygraphQuery } from "../_utils/fetch-hygraph-query";
import AnimateBackground from "./_components/animate-background";
import Hero from "./_components/hero-section";
import Projects from "./_components/projects-section";
import Techs from "./_components/techs-section";

const getHeroData = async (): Promise<HeroResponse> => {
  const query = `query MyQuery {
  heroes {
    image {
      url
    }
    resume {
      url
    }
    description
  }
}`;

  return fetchHygraphQuery(query);
};


const Home = async () => {
  const { heroes } = await getHeroData();

  return (
    <>
      <AnimateBackground />
      <ScrollHandler />
      <Hero hero={heroes} />
      <Techs />
      <Projects />
    </>
  );
};
export default Home;
