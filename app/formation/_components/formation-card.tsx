"use client";
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
import { formateDate } from "@/app/_utils/formate-date";
import { motion } from "motion/react";

type FormationCardProps = {
  formations: Formation[];
};

const FormationCard = ({ formations }: FormationCardProps) => {
  return (
    <div className="mt-12 flex h-full flex-col items-center justify-center gap-5 sm:mt-0">
      {formations.map((formation, i) => (
        <motion.div
          key={i + formation.formationTitle}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="w-full"
        >
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
                    <p>{formateDate(formation.startDate)}</p>
                    <Circle
                      className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                      size={10}
                    />
                    <p>{formateDate(formation.endDate)}</p>
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
        </motion.div>
      ))}
    </div>
  );
};

export default FormationCard;
