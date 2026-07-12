"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type HeaderProps = {
  title: string;
  description?: string;
  isInView?: boolean;
};

export default function Header({
  title,
  description,
  isInView,
}: HeaderProps) {



  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
          }
          : {
            opacity: 0,
            y: 40,
          }
      }
      transition={{ duration: 0.8 }}
      className="mb-24 flex flex-col items-center text-center"
    >
      <span className="inline-flex items-center gap-3 rounded-full border border-[#E7D5C3] bg-white/70 px-6 py-2 backdrop-blur">
        <span className="h-px w-8 bg-[#C89A7B]" />

        <span className="font-allura text-4xl font-extrabold text-[#C89A7B] md:text-5xl">
          {title}
        </span>

        <span className="h-px w-8 bg-[#C89A7B]" />
      </span>

      <p
        dir="rtl"
        className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-500"
      >
        {description}
      </p>
    </motion.div>
  );
}