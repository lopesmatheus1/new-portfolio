"use client";
import { Button } from "@/app/_components/ui/button";
import { motion } from "motion/react";

interface TitleProps {
  children: React.ReactNode;
}

const ExperienceTitle = ({ children }: TitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={
        "flex flex-col items-center justify-center gap-3 text-xl font-extralight sm:text-2xl"
      }
    >
      {children}

      <Button variant="outline">Download CV</Button>
    </motion.div>
  );
};

export default ExperienceTitle;
