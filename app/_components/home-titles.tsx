"use client";
import { motion } from "motion/react";

interface TitleProps {
  children: React.ReactNode;
  variant: string;
}

const getVariantClasses = (variant = "normal") => {
  if (variant === "small") {
    return "text-center text-3xl font-extralight lg:text-left lg:text-4xl";
  }

  if (variant === "normal") {
    return "text-4xl font-extralight lg:text-5xl";
  }
};

const HomeTitle = ({ children, variant }: TitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className={`${getVariantClasses(variant)}`}
    >
      {children}
    </motion.h2>
  );
};

export default HomeTitle;
