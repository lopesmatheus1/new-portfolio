"use client";
import { Badge } from "@/app/_components/ui/badge";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Projects } from "@/app/_types/page-home-projects";
import { motion } from "motion/react";

interface ProjectCardProps {
  projects: Projects[];
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => (
        <motion.div
          key={i + project.title}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 * i }}
        >
          <Card
            key={project.title}
            className="w-full bg-transparent transition-all ease-in-out hover:scale-[1.01] hover:bg-card/20 lg:max-w-[500px]"
          >
            <CardHeader>
              <CardTitle className="font-light">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-auto flex-col items-center justify-between space-y-4 md2:h-[480px] lg:space-y-2">
                <p className="text-sm">{project.description}</p>

                <div className="max-w-[300px] space-x-1">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech.name}
                      className="ml-1 select-none text-primary ease-in-out hover:scale-[1.01] hover:bg-primary/10"
                      variant="outline"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>

                <Image
                  className="rounded-md border-[1.5px] object-cover transition-all duration-500 group-hover:scale-[1.02]"
                  src={`${project.image.url}`}
                  unoptimized
                  alt={""}
                  width={350}
                  height={350}
                />
              </div>

              <div className="mt-4 flex flex-col items-center justify-center gap-2 sm2:flex-row">
                <Button variant="outline" asChild>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.githubLink}
                  >
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.deployLink}
                  >
                    Aplicação
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
