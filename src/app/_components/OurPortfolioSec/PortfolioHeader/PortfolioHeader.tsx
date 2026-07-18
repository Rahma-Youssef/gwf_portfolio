"use client";

import { motion } from "motion/react";
import Header from "../../Header/Header";

type PortfolioHeaderProps = {
  isInView: boolean;
};

export default function PortfolioHeader({
  isInView,
}: PortfolioHeaderProps) {


  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
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
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        mb-14
        overflow-hidden
        text-center

        sm:mb-20
      "
    >
      {/* =========================
          BACKGROUND TEXT
      ========================== */}

      <h2
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap

          text-[38px]
          font-black
          uppercase
          tracking-[0.15em]
          text-[#0F4C4C]/5

          sm:top-1/3
          sm:text-[80px]
          sm:tracking-[0.2em]

          md:text-[110px]

          lg:top-1/2
          lg:text-[140px]
          lg:tracking-[0.25em]
        "
      >
        PORTFOLIO
      </h2>

      {/* =========================
          HEADER
      ========================== */}

      <Header
        title="Our Portfolio"
        isInView={isInView}
      />

      {/* =========================
          MAIN TITLE
      ========================== */}

      <h1
        className="
          relative
          mx-auto
          mt-4
          max-w-4xl
          px-4

          font-serif
          text-3xl
          leading-tight
          text-[#0F4C4C]

          sm:mt-8
          sm:text-5xl

          lg:text-6xl
        "
      >
        Every Event{" "}
        <span className="text-[#C89A7B]">
          Tells
        </span>{" "}
        A Story
      </h1>

      {/* =========================
          DESCRIPTION
      ========================== */}

      <p
        dir="rtl"
        className="
          relative
          mx-auto
          mt-5
          max-w-3xl
          px-4

          text-sm
          leading-7
          text-gray-500

          sm:mt-8
          sm:text-lg
          sm:leading-8
        "
      >
        كل مناسبة ننفذها هي قصة نجاح جديدة،
        تجمع بين الإبداع، التفاصيل الراقية،
        والتنفيذ الاحترافي الذي يترك ذكرى لا تُنسى.
      </p>

  
    </motion.div>
  );
}