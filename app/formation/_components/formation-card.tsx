import { Circle } from "lucide-react";
import { Formation } from "@/app/_types/page-formation";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/_components/ui/card";

type FormationCardProps = {
  formations: Formation[];
};

const FormationCard = ({ formations }: FormationCardProps) => {
  return (
    <div className="mt-12 flex h-full flex-col items-center justify-center gap-10 sm:mt-0">
      {formations.map((formation) => (
        <Card className="w-full bg-transparent">
          <CardHeader>
            <CardTitle className="text-center text-xl font-light sm:text-left">
              {formation.formationTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <div className="flex flex-col gap-3 text-sm">
                <p className="text-center text-sm sm:text-left">
                  {formation.certificateDescription}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm sm:justify-start">
                  <p>
                    {new Date(formation.startDate).toLocaleDateString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <Circle
                    className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                    size={10}
                  />
                  <p>
                    {new Date(formation.endDate).toLocaleDateString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Button variant={"outline"} asChild>
                  <Link target="_blank" href={formation.pdfCertificate.url}>
                    Visualizar certificado
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FormationCard;
