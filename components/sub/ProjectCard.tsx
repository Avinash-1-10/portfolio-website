"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  sourceCode:string;
  demo?:string;
  tech:string[]
}

const ProjectCard = ({ src, title, description,sourceCode, demo, tech }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex justify-between px-5 mb-2 ">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={sourceCode}
          className="p-1 button-primary text-center text-sm text-white cursor-pointer rounded-lg max-w-[200px] z-50"
        >
          code
        </motion.a>
        {demo && <motion.a
          whileHover={{ scale: 1.05 }}
          href={demo}
          className="p-1 button-primary text-center text-sm text-white cursor-pointer rounded-lg max-w-[200px] z-50"
        >
          Demo
        </motion.a>}
      </div>
    </div>
  );
};

export default ProjectCard;
