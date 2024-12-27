import { Button } from "./ui/button";
import Image from "next/image";
import developer from "../public/developer.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-40 flex h-[650px] w-full flex-col-reverse items-center justify-evenly gap-14 md:mt-0 lg:flex-row">
      <div className="container max-w-[310px] space-y-5 md:max-w-[500px]">
        <h1 className="text-4xl text-primary">Olá, meu nome é Matheus</h1>
        <p className="leading-loose">
          During these <span className="text-lg text-primary"> 4 years</span> as{" "}
          <span className="text-lg text-primary">
            Front-End Software Engineer
          </span>
          . My role has extended beyond coding to effective communication with
          various departments, to define new features and spearheading the
          development of new apps.
        </p>
        <div className="flex items-center justify-center gap-8 lg:justify-start">
          <Button variant="outline" asChild>
            <a
              rel="noopener noreferrer"
              href="/docs/CurrículoMatheusLopes.pdf"
              download
            >
              Baixar currículo
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href={"/experience"}>Ver experiências</Link>
          </Button>
        </div>
      </div>

      <div>
        <Image
          src={developer}
          alt={"Imagem programador"}
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Hero;
