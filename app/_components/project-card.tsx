import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProjectCard = async () => {
  return (
    <div>
      <Card className="w-full bg-transparent transition-all ease-in-out hover:scale-[1.01] hover:bg-card/20 lg:max-w-[500px]">
        <CardHeader>
          <CardTitle className="font-light">Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="group flex flex-col items-center justify-center gap-5 lg:justify-start">
            <p className="text-sm font-light">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>

            <div className="max-w-[300px] space-x-1">
              <Badge
                className="ml-1 select-none ease-in-out hover:scale-[1.01] hover:bg-primary/10"
                variant="outline"
              >
                Typescript
              </Badge>
            </div>

            <Image
              className="rounded-md border-[1.5px] object-cover transition-all duration-500 group-hover:scale-[1.02]"
              src={"/image1.png"}
              unoptimized
              alt={""}
              width={300}
              height={300}
            />
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm2:flex-row">
            <Button variant="outline" asChild>
              <Link href="#">GitHub</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Deploy</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
