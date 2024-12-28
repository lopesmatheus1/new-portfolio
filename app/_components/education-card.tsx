import { Circle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

type EducationCardProps = {
  education: {
    title: string;
    certificate: string;
    PDF: string;
    startDate: string;
    endDate: string;
  };
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="w-full bg-transparent">
      <CardHeader>
        <CardTitle className="text-lg font-light">{education.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div className="flex flex-col gap-1 text-sm font-extralight">
            <p className="text-sm">{education.certificate}</p>
            <div className="flex items-center gap-2 text-sm">
              <p>{education.startDate}</p>
              <Circle
                className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                size={10}
              />
              <p>{education.endDate}</p>
            </div>
          </div>
          <p className="text-sm">VIEW PDF CERTIFICATE</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
