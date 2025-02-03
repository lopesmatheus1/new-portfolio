import { ExperiencesResponse } from "../_types/page-experience";
import { fetchHygraphQuery } from "../_utils/fetch-hygraph-query";
import ExperienceCard from "./_components/experience-card";
import ExperienceTitle from "./_components/experience-titles";

const getExperiencePageData = async (): Promise<ExperiencesResponse> => {
  const getExperiencesQuery = `query getExperiences {
  experiences {
    companyName
    contractType
    description
    endDate
    startDate
    title
    experience
    location
  }
}`;

  return fetchHygraphQuery(getExperiencesQuery);
};
export const revalidate = (60 * 24 * 24)/2;

const Experience = async () => {
  const { experiences }: ExperiencesResponse = await getExperiencePageData();

  return (
    <section className="container">
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-10 sm:h-[350px]">
        <div className="max-w-[312px] sm:max-w-[500px]">
          <ExperienceTitle>
            <p>
              &lt;Aqui apresento um pouco da minha experiência profissional
              durante minha caminhada como
              <span className="font-light text-primary"> desenvolvedor. </span>
              /&gt;
            </p>
          </ExperienceTitle>
        </div>
      </div>

      <div>
        <ExperienceCard experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;
