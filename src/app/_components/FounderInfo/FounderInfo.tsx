"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Award,
  Building2,
  CalendarDays,
  Quote,
} from "lucide-react";

import { FounderType } from "../founders";

type FounderInfoProps = {
  founder: FounderType;
};

export default function FounderInfo({
  founder,
}: FounderInfoProps) {
  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={founder.id}
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -50,
        }}
        transition={{
          duration: .5,
        }}
      >

        {/* Badge */}

        <span
          className="
            rounded-full
            border
            border-[#E7D5C3]
            bg-white
            px-5
            py-2
            text-sm
            uppercase
            tracking-[.25em]
            text-[#C89A7B]
          "
        >
          Meet The Founder
        </span>

        {/* Name */}

        <h2
          className="
            mt-6
            font-serif
            text-4xl
            md:text-5xl
            text-[#0F4C4C]
          "
        >
          {founder.name}
        </h2>

        {/* Role */}

        <p
          className="
            mt-2
            text-lg
            uppercase
            tracking-[.3em]
            text-[#C89A7B]
          "
        >
          {founder.role}
        </p>

        {/* Quote */}

        <div
          className="
            relative
            mt-10
            rounded-[30px]
            border
            border-[#EFE5DA]
            bg-white
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,.05)]
          "
        >

          <Quote
            size={40}
            className="
              absolute
              -top-5
              left-8
              rounded-full
              bg-[#FAF7F2]
              p-2
              text-[#C89A7B]
            "
          />

          <p
            className="
              pt-3
              font-serif
              md:text-2xl
              text-lg
              italic
              leading-10
              text-[#0F4C4C]
            "
          >
            "{founder.quote}"
          </p>

        </div>

        {/* Description */}

        <p
          dir="rtl"
          className="
            mt-10
            text-lg
            leading-9
            text-gray-600
          "
        >
          {founder.description}
        </p>

        {/* Info Cards */}

        <div className="mt-12 grid gap-5 sm:grid-cols-3">

          <div
            className="
              rounded-[24px]
              bg-white
              p-6
              shadow-md
            "
          >

            <CalendarDays
              className="text-[#C89A7B]"
            />

            <h4
              className="
                mt-4
                text-sm
                uppercase
                tracking-[.2em]
                text-gray-400
              "
            >
              Experience
            </h4>

            <p
              className="
                mt-2
                text-2xl
                font-bold
                text-[#0F4C4C]
              "
            >
              Since {founder.since}
            </p>

          </div>

          <div
            className="
              rounded-[24px]
              bg-white
              p-6
              shadow-md
            "
          >

            <Building2
              className="text-[#C89A7B]"
            />

            <h4
              className="
                mt-4
                text-sm
                uppercase
                tracking-[.2em]
                text-gray-400
              "
            >
              Company
            </h4>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#0F4C4C]
              "
            >
              {founder.company}
            </p>

          </div>

          <div
            className="
              rounded-[24px]
              bg-white
              p-6
              shadow-md
            "
          >

            <Award
              className="text-[#C89A7B]"
            />

            <h4
              className="
                mt-4
                text-sm
                uppercase
                tracking-[.2em]
                text-gray-400
              "
            >
              Position
            </h4>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#0F4C4C]
              "
            >
              {founder.role}
            </p>

          </div>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}