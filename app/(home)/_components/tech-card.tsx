"use client";
import TechBadge from "@/app/_components/tech-badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/_components/ui/card";
import { Technologies } from "@/app/_types/page-home-projects";

interface TechCardProps {
  technologies: Technologies[];
}

const TechCard = ({ technologies }: TechCardProps) => {
  const categories = technologies
    .map((tech) => tech.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .sort();

  const formatTitle = (title: string) => {
    if (title === "backEnd") return "Back-end";
    if (title === "frontEnd") return "Front-end";
    if (title === "outros") return "Outros";
    if (title === "linguagens") return "Linguagens";
  };
  return (
    <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {categories.map((category, i) => (
        <Card
          key={`${category.category}-${i}`}
          className="w-full bg-transparent lg:max-w-[280px]"
        >
          <CardHeader>
            <CardTitle className="text-xl font-light">
              {formatTitle(String(category))}
            </CardTitle>
          </CardHeader>
          {technologies
            .filter((tech) => tech.category === category)
            .map((tech, i) => (
              <CardContent key={`${tech.name}-${i}`}>
                <TechBadge
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.2 }}
                  link={tech.iconSVG.url}
                  name={tech.name}
                />
              </CardContent>
            ))}
        </Card>
      ))}
    </div>
  );
};

export default TechCard;
