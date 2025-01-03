import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/_components/ui/card";
import { Technologies } from "@/app/_types/page-home-projects";
import Image from "next/image";

interface TechCardProps {
  technologies: Technologies[];
}

const TechCard = ({ technologies }: TechCardProps) => {
  const categories = technologies
    .map((tech) => tech.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  return (
    <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {categories.map((category) => (
        <Card
          key={category.category}
          className="w-full bg-transparent lg:max-w-[280px]"
        >
          <CardHeader>
            <CardTitle className="text-xl font-light">
              {String(category)}
            </CardTitle>
          </CardHeader>
          {technologies
            .filter((tech) => tech.category === category)
            .map((tech) => (
              <CardContent key={tech.name}>
                <div className="flex items-center justify-center gap-5 lg:justify-start">
                  <div className="rounded-full bg-ring/10 p-1">
                    <img
                      className="text-primary"
                      src={tech.iconSVG.url}
                      alt={""}
                      width={25}
                      height={25}
                    />
                  </div>
                  <p className="text-lg font-light">{tech.name}</p>{" "}
                </div>
              </CardContent>
            ))}
        </Card>
      ))}
    </div>
  );
};

export default TechCard;
