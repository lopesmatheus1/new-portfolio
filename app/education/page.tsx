import EducationCard from "../_components/education-card";

const Education = () => {
  const data = {
    title: "WiseUp",
    certificate: "Certificate in advanced English B2",
    PDF: "View PDF certificate",
    startDate: "Janeiro 2020",
    endDate: "Janeiro 2020",
  };
  return (
    <section className="container">
      <div className="mt-12 flex h-full flex-col items-center justify-center gap-10 sm:mt-0">
        <EducationCard education={data} />
        <EducationCard education={data} />
        <EducationCard education={data} />
      </div>
    </section>
  );
};

export default Education;
