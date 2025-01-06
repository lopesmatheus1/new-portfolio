import FormationCard from "./_components/formation-card";
import { FormationResponse } from "../_types/page-formation";
import { fetchHygraphQuery } from "../_utils/fetch-hygraph-query";

const getFormationPageData = async (): Promise<FormationResponse> => {
  const getFormationQuery = `query getFormation {
    formations {
      certificateDescription
      endDate
      formationTitle
      startDate
      pdfCertificate {
        url
        fileName
      }
    }
  }`;

  return fetchHygraphQuery(getFormationQuery);
};

const Formation = async () => {
  const { formations } = await getFormationPageData();

  return (
    <section className="container">
      <FormationCard formations={formations} />
    </section>
  );
};

export default Formation;
