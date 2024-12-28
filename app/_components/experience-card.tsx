import { Card, CardContent } from "./ui/card";
import { Circle } from "lucide-react";

type ExperienceCardProps = {
  experience: {
    title: string;
    locale: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    companyName: string;
    description: string[];
  };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div>
      <Card className="w-full transition ease-in-out hover:bg-card/40">
        <CardContent className="pt-6">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            {/* PARTE DA ESQUERDA */}
            <div className="max-w-[384px]">
              <h2>{experience.title}</h2>
              <span className="font-light text-primary/80">
                {experience.employmentType}
              </span>
              <div className="flex items-center justify-start gap-2 text-sm font-extralight">
                <p>{experience.startDate}</p>
                <Circle
                  className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                  size={10}
                />
                <p>{experience.endDate}</p>
              </div>
              <p className="text-sm font-extralight">{experience.locale}</p>
            </div>

            {/* PARTE DA DIREITA */}
            <div className="w-full space-y-6 lg:w-[817px]">
              <h2 className="text-primary">{experience.companyName}</h2>
              {experience.description.map((experienceDescription) => (
                <p className="text-sm font-light">{experienceDescription}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;
