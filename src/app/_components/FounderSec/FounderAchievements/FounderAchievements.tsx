"use client";

import { AnimatePresence, motion } from "motion/react";
import { FounderType } from "../../../../data/founders";

type FounderAchievementsProps = {
  founder: FounderType;
};

export default function FounderAchievements({
  founder,
}: FounderAchievementsProps) {
  return (
    <AnimatePresence mode="wait">

      <motion.section
        key={founder.id}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: .5,
        }}
        className="mt-24"
      >

        <div className="mb-10">

          <p className="uppercase tracking-[.35em] text-[#C89A7B] text-sm">
            Highlights
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-[#0F4C4C]">
            Career Achievements
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {founder.achievements.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#E9DDD0]
                  bg-white
                  p-8
                  shadow-[0_25px_60px_rgba(0,0,0,.08)]
                  transition-all
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    bg-[#C89A7B]/10
                    blur-3xl
                    transition-all
                    group-hover:scale-125
                  "
                  dir="rtl"
                />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#FAF6F1]
                  "
                >

                  <Icon
                    size={30}
                    className="text-[#C89A7B]"
                  />

                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    md:text-2xl
                    text-xl
                    text-[#0F4C4C]
                    font-semibold
                  "
                  dir={item.dir}

                >
                  {item.title}
                </h3>

                <p

                  className="
                    mt-4
                    leading-8
                    text-gray-600
                  "
                  dir='rtl'
                >
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </motion.section>

    </AnimatePresence>
  );
}