"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.div> & {
  link: string;
  name: string;
};

const TechBadge = ({ link, name, ...props }: TechBadgeProps) => {
  return (
    <motion.div
      {...props}
      className="flex items-center justify-start gap-5 lg:justify-start"
    >
      <div className="rounded-full bg-ring/10 p-1.5">
        <Image
          className="text-primary"
          src={link}
          alt={`Icone da tecnologia ${name}`}
          width={25}
          height={25}
        />
      </div>
      <p className="text-lg font-light">{name}</p>{" "}
    </motion.div>
  );
};

export default TechBadge;
