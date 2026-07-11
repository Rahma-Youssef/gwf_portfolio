"use client";

import Image from "next/image";
import { motion } from "motion/react";

import aboutImage from "./../../../../public/images/aboutImage.jpg";

type AboutImageProps = {
  isInView: boolean;
};

export default function AboutImage({
  isInView,
}: AboutImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
        scale: 0.9,
        rotate: -6,
      }}
      animate={
        isInView
          ? {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
          }
          : {
            opacity: 0,
            x: -80,
            scale: 0.95,
          }
      }
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      {/* Luxury Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -z-20
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#EFDCC8]
        opacity-70
        blur-[130px]
      "
      />

      {/* Luxury Card */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[42px]
        bg-white
        p-4
        shadow-[0_35px_90px_rgba(0,0,0,.12)]
      "
      >
        {/* Glass Border */}

        <div
          className="
          absolute
          inset-3
          rounded-[34px]
          border
          border-[#E8D7C6]
          pointer-events-none
        "
        />

        {/* Golden Decoration */}

        <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-[#C89A7B]" />

        <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-[#C89A7B]" />

        <div className="absolute bottom-6 left-6 h-8 w-8 border-l border-b border-[#C89A7B]" />

        <div className="absolute bottom-6 right-6 h-8 w-8 border-r border-b border-[#C89A7B]" />

        {/* Floating Luxury Shape */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -right-10
            top-8
            text-[90px]
            text-[#C89A7B]/10
            select-none
          "
        >
          ✦
        </motion.div>

        {/* Image */}

        <motion.div
          whileHover={{
            scale: 1.02,
            y: -5,
            rotate: -1,
          }}
          whileTap={{
            scale: 0.99,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
          "
        >
          <Image
            src={aboutImage}
            alt="Golden Glow"
            className="
              h-[340px]
              sm:h-[430px]
              md:h-[520px]
              lg:h-[620px]
              w-full
              object-cover
            "
          />

          {/* Premium Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/30
              via-transparent
              to-[#0F4C4C]/10
            "
          />

          {/* Glass Reflection */}

          <div
            className="
              absolute
              -left-10
              top-0
              h-full
              w-24
              rotate-12
              bg-white/20
              blur-xl
            "
          />
        </motion.div>
   

        {/* Since Card */}

       <motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={
    isInView
      ? {
          opacity: 1,
          scale: 1,
          y: [0, -6, 0],
        }
      : {
          opacity: 0,
          scale: 0.8,
        }
  }
  transition={{
    duration: 0.8,
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="
    absolute

    bottom-5
    left-5

    sm:bottom-7
    sm:left-7

    md:bottom-7
    md:left-7

    lg:bottom-4
    lg:left-5

    flex
    aspect-square

    h-20
    w-20

    sm:h-24
    sm:w-24

    md:h-28
    md:w-28

    lg:h-32
    lg:w-32

    xl:h-36
    xl:w-36

    items-center
    justify-center

    rounded-full

    border-2
    border-[#D8B89A]

    bg-white/90
    backdrop-blur-xl

    shadow-[0_25px_50px_rgba(0,0,0,.15)]
  "
>
  <div className="text-center">
    <p
      className="
        text-[8px]
        sm:text-[9px]
        md:text-[10px]

        uppercase
        tracking-[0.35em]

        text-[#C89A7B]
      "
    >
      Since
    </p>

    <h2
      className="
        mt-1

        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl

        font-black
        leading-none
        text-[#0F4C4C]
      "
    >
      2025
    </h2>
  </div>
</motion.div>

        {/* Floating Ring */}

        <motion.div
          animate={
            isInView
              ? {
                rotate: [0, 360],
              }
              : {
                rotate: 0,
              }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -left-7
            top-16
            h-20
            w-20
            rounded-full
            border
            border-[#D9B38C]/40
          "
        />

        {/* Gold Dot */}

        <motion.div
          animate={
            isInView
              ? {
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }
              : {
                y: 0,
                opacity: 0.5,
              }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            right-4
            bottom-24
            h-4
            w-4
            rounded-full
            bg-[#C89A7B]
            shadow-lg
          "
        />

       

        {/* Sparkle */}

        <motion.div
          animate={
            isInView
              ? {
                scale: [1, 1.2, 1],
                rotate: [0, 12, 0],
              }
              : {
                scale: 1,
                rotate: 0,
              }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            -top-4
            left-1/2
            text-3xl
            text-[#C89A7B]
          "
        >
          ✦
        </motion.div>

      </div>
    </motion.div>
  );
}