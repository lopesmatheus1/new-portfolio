import ProjectCard from "@/app/_components/project-card";

const Projects = () => {
  return (
    <section className="container min-h-[600px]">
      <div className="space-y-20 py-10 text-center lg:mt-0 lg:text-left">
        <h1 className="text-4xl font-extralight lg:text-5xl">
          Some of my projects
        </h1>

        <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
