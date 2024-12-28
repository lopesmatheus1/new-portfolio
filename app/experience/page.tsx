import ExperienceCards from "../_components/experience-card";
import { Button } from "../_components/ui/button";

const Experience = () => {
  const data = {
    title: "Front-end Software Engineer",
    locale: "Nova Friburgo, RJ - Brasil",
    employmentType: "Contract",
    startDate: "July 2023",
    endDate: "Present",
    companyName: "Company Name",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  };
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

      <div className="space-y-8 pb-6">
        <ExperienceCards experience={data} />
        <ExperienceCards experience={data} />
      </div>
    </section>
  );
};

export default Experience;
