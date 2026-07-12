"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Crown, Sparkles } from "lucide-react";
import { FounderType } from "../founders";

type FounderImageProps = {
  founder: FounderType;
};

export default function FounderImage({
  founder,
}: FounderImageProps) {
  return (
    <div className="relative flex justify-center">

      <AnimatePresence mode="wait">

        <motion.div
          key={founder.id}
          initial={{
            opacity: 0,
            scale: .92,
            rotate: -3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: .94,
            rotate: 3,
          }}
          transition={{
            duration: .6,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[580px]
          "
        >

          {/* Main Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -z-30
              h-[550px]
              w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C89A7B]/20
              blur-[140px]
            "
          />

          {/* Secondary Glow */}

          <div
            className="
              absolute
              -right-24
              top-24
              -z-20
              h-40
              w-40
              rounded-full
              bg-[#0F4C4C]/10
              blur-[90px]
            "
          />

          {/* Animated Border */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -inset-3
              rounded-[46px]
              border
              border-[#D8B89A]/30
            "
          />

          {/* Glass Card */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/50
              bg-white/40
              p-4
              backdrop-blur-xl
              shadow-[0_40px_100px_rgba(0,0,0,.14)]
            "
          >
                        {/* Founder Image */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                overflow-hidden
                rounded-[34px]
              "
            >
              <Image
                src={founder.image}
                alt={founder.name}
                priority
                className="
                  h-[450px]
                  sm:h-[570px]
                  lg:h-[560px]
                  xl:h-[600px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                "
              />

              {/* Luxury Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-black/10
                  to-white/10
                "
              />

              {/* Light Reflection */}

              <motion.div
                animate={{
                  x: ["-150%", "180%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-24
                  -skew-x-12
                  bg-white/20
                  blur-xl
                "
              />

              {/* Name */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                "
              >
                <motion.h2
                  key={founder.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: .5,
                  }}
                  className="
                    font-serif
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    text-white
                  "
                >
                  {founder.name}
                </motion.h2>

                <p
                  className="
                    mt-3
                    text-sm
                    uppercase
                    tracking-[.35em]
                    text-[#F4D8BE]
                  "
                >
                  {founder.role}
                </p>
              </div>
            </motion.div>

            {/* Floating Founder Card */}

           <motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="
    absolute

    -left-5
    top-3

    sm:left-6
    sm:top-6

    lg:-left-5
    lg:top-5

    rounded-2xl
    sm:rounded-[28px]

    border
    border-white/20

    bg-[#0F4C4C]/95

    px-4
    py-3

    sm:px-6
    sm:py-5

    lg:px-5
    lg:py-5

    shadow-[0_20px_50px_rgba(0,0,0,.35)]
    backdrop-blur-xl
  "
>
  <div className="flex items-center gap-3 sm:gap-4">

    <div
      className="
        flex
        h-10
        w-10

        sm:h-12
        sm:w-12

        lg:h-14
        lg:w-14

        items-center
        justify-center
        rounded-xl
        sm:rounded-2xl

        bg-[#C89A7B]/20
      "
    >
      <Crown
        size={20}
        className="text-[#D8B89A] sm:w-6 sm:h-6 lg:w-7 lg:h-7"
      />
    </div>

    <div>

      <p
        className="
          text-[9px]
          sm:text-[10px]
          lg:text-[11px]

          uppercase
          tracking-[.25em]
          text-[#D8B89A]
        "
      >
        Founder
      </p>

      <h3
        className="
          mt-1
          sm:mt-2

          text-sm
          sm:text-lg
          lg:text-xl

          font-bold
          text-white
        "
      >
        {founder.role}
      </h3>

      <p
        className="
          mt-1
          sm:mt-2

          text-xs
          sm:text-sm

          text-[#F4E2CF]
        "
      >
        Since {founder.since}
      </p>

    </div>

  </div>
</motion.div>

                {/* Floating Sparkle */}

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -top-5
                right-6
                text-[#C89A7B]
              "
            >
              <Sparkles size={28} />
            </motion.div>

            {/* Bottom Glow */}

            <motion.div
              animate={{
                opacity: [.3, .7, .3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-8
                right-10
                h-24
                w-24
                rounded-full
                bg-[#C89A7B]/20
                blur-3xl
              "
            />

            {/* Decorative Circle */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [.5, 1, .5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                top-20
                -left-5
                h-6
                w-6
                rounded-full
                border-2
                border-[#C89A7B]
                bg-white
              "
            />

          </div>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}