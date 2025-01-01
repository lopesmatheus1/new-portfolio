import { Experience } from "../_types/page-experience";

import { Card, CardContent } from "./ui/card";
import { Circle } from "lucide-react";

type ExperienceCardProps = {
  experiences: Experience[];
};

const ExperienceCard = ({ experiences }: ExperienceCardProps) => {
  return (
    <div className="space-y-8 pb-6">
      {experiences.map((experience) => (
        <Card className="w-full transition ease-in-out hover:bg-card/40">
          <CardContent className="pt-6">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              {/* PARTE DA ESQUERDA */}
              <div className="max-w-[384px] space-y-1">
                <h2>{experience.title}</h2>
                <span className="font-medium text-primary/80">
                  {experience.contractType}
                </span>
                <div className="flex items-center justify-start gap-2 text-sm">
                  <p>
                    {new Date(experience.startDate).toLocaleDateString(
                      "pt-BR",
                      {
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </p>
                  <Circle
                    className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                    size={10}
                  />
                  <p>Presente</p>
                </div>
                <p className="text-sm">{experience.location}</p>
              </div>

              {/* PARTE DA DIREITA */}
              <div className="w-full space-y-6 lg:w-[817px]">
                <h2 className="text-primary">{experience.companyName}</h2>
                <p className="text-sm">{experience.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceCard;
