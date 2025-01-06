import { fetchHygraphQuery } from "@/app/_utils/fetch-hygraph-query";
import ProjectCard from "../_components/project-card";
import { ProjectResponse } from "@/app/_types/page-home-projects";
import HomeTitle from "@/app/_components/home-titles";

const getProjectsQuery = async (): Promise<ProjectResponse> => {
  const query = `query getProjects {
  projects {
    deployLink
    description
    githubLink
    title
    image {
      url
    }
     technologies {
      name
    }
  }
}`;
  return fetchHygraphQuery(query);
};

const Projects = async () => {
  const { projects } = await getProjectsQuery();

  return (
    <section className="container min-h-[600px]">
      <div className="space-y-20 py-10 text-center lg:mt-0 lg:text-left">
        <HomeTitle variant="normal">ALguns dos meus projetos</HomeTitle>

        <div>
          <ProjectCard projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
