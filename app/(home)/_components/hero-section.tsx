import { Button } from "../../_components/ui/button";
import Image from "next/image";
import developer from "/public/developer.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-8 flex w-full items-center text-center md:mt-0 lg:h-[650px] lg:text-left">
      <div className="container flex flex-col-reverse items-center justify-between lg:flex-row">
        <div className="max-w-[310px] space-y-5 md:max-w-[500px]">
          <h1 className="text-3xl font-extralight sm:text-5xl">
            Olá, meu nome é Matheus
          </h1>
          <p className="text-sm font-light leading-loose sm:text-base">
            During these{" "}
            <span className="text-lg font-semibold text-primary"> 4 years</span>{" "}
            as{" "}
            <span className="text-lg font-semibold text-primary">
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
            className="sm:h-[400px] sm:w-[400px]"
            src={developer}
            alt={"Imagem programador"}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
