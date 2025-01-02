import { Button } from "../_components/ui/button";
import { ExperiencesResponse } from "../_types/page-experience";
import { fetchHygraphQuery } from "../_utils/fetch-hygraph-query";
import ExperienceCard from "./_components/experience-card";

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

const Experience = async () => {
  const { experiences }: ExperiencesResponse = await getExperiencePageData();

  return (
    <section className="container">
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-10 sm:h-[350px]">
        <div className="max-w-[312px] sm:max-w-[500px]">
          <h2 className="text-xl font-extralight sm:text-2xl">
            &lt;Here, you can know me a little more and see my whole experience
            as a{" "}
            <span className="font-light text-primary">
              Front-End Software Engineer.
            </span>{" "}
            /&gt;
          </h2>
        </div>
        <Button variant="outline">Download CV</Button>
      </div>

      <div>
        <ExperienceCard experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;
