"use client";

import { Button } from "../../_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HeroesContents } from "@/app/_types/page-home-projects";

type HeroProps = {
  hero: HeroesContents[];
};

const Hero = ({ hero }: HeroProps) => {
  return (
    <section
      id="hero-section"
      className="z-50 mt-8 flex w-full items-center text-center md:mt-0 lg:h-[650px] lg:text-left"
    >
      {hero.map((heroContent) => (
        <div
          key={heroContent.description}
          className="container flex flex-col-reverse items-center justify-between lg:flex-row"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="max-w-[310px] space-y-5 md:max-w-[500px]"
          >
            <h1 className="text-3xl font-extralight sm:text-5xl">Sobre mim</h1>
            <p className="text-sm font-light leading-loose sm:text-base">
              {heroContent.description}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center gap-4 sm2:flex-row lg:justify-start"
            >
              <Button variant="outline" asChild>
                <a
                  rel="noopener noreferrer"
                  href={heroContent.resume.url}
                  target="_blank"
                >
                  Ver Currículo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href={"/experience"}>Ver experiências</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 0.8 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="origin-center"
          >
            <Image
              className="rounded-full sm:h-[450px] sm:w-[450px]"
              src={heroContent.image.url}
              alt={"Imagem programador"}
              width={400}
              height={400}
              unoptimized
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
