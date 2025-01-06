"use client";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Experience } from "@/app/_types/page-experience";
import { formateDate } from "@/app/_utils/formate-date";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

type ExperienceCardProps = {
  experiences: Experience[];
};

const ExperienceCard = ({ experiences }: ExperienceCardProps) => {
  return (
    <div className="space-y-8 pb-6">
      {experiences.map((experience, i) => (
        <motion.div
          key={i + experience.title}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.4 }}
          viewport={{ once: true }}
        >
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
                    <p>{formateDate(experience.startDate)}</p>
                    <Circle
                      className="fill-current text-primary/50 transition ease-in-out hover:text-primary"
                      size={10}
                    />
                    <p>
                      {experience.title === "Diretor comercial"
                        ? `${formateDate(experience.endDate)}`
                        : "Presente"}
                    </p>
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
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceCard;
