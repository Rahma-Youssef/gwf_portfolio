

"use client";

import { motion } from "motion/react";
import Image from "next/image";

import leaf from "./../../../../../public/images/leaf.webp";
import logogwg from "./../../../../../public/images/Logogwg.webp";
type HeroImageProps = {
  isActive: boolean;
};

export default function HeroImage({ isActive }: HeroImageProps) {

  return (
    <div className="relative flex items-center justify-center ">

      {/* Glow */}
      <motion.div
        animate={
          isActive
            ? {
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.15, 1],
            }
            : {
              opacity: 0.3,
              scale: 1,
            }
        }
        transition={
          isActive
            ? {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }
            : {
              duration: 0.4,
              ease: "easeOut",
            }
        }
        className="absolute h-[450px] w-[450px] rounded-full bg-[#EAD6C3]/30 blur-[120px]"
      />

      {/* Left Leaf */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={
          isActive
            ? {
              opacity: 1,
              x: 0,
              rotate: [-4, 1, -4],
            }
            : {
              opacity: 1,
              x: 0,
              rotate: 0,
            }
        }
        transition={
          isActive
            ? {
              opacity: {
                duration: 1,
              },
              x: {
                duration: 1,
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
            : {
              opacity: {
                duration: 0.4,
              },
              x: {
                duration: 0.4,
              },
              rotate: {
                duration: 0.4,
              },
            }
        }
      className="absolute bottom-6 -left-6 origin-bottom-right   lg:-left-150  xl:-left-220"
      >
      <Image
        src={leaf}
        alt="Left Leaf"
        width={0}
        height={0}
        sizes="100vw"
        className="w-23 sm:w-40 md:w-52 lg:w-40 xl:w-60 h-auto scale-x-[-1] block "
      />
    </motion.div>

      {/* Right Leaf */ }
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={
      isActive
        ? {
          opacity: 1,
          x: 0,
          rotate: [-4, 1, -4],
        }
        : {
          opacity: 1,
          x: 0,
          rotate: 0,
        }
    }
    transition={
      isActive
        ? {
          opacity: {
            duration: 1,
          },
          scale: {
            duration: 1,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }
        : {
          opacity: {
            duration: 0.4,
          },
          scale: {
            duration: 0.4,
          },
          y: {
            duration: 0.4,
          },
        }
    }
    className="absolute top-6 -right-6 origin-top-left  xl:-right-60"
  >
    <Image
      src={leaf}
      alt="Right Leaf"
      width={0}
      height={0}
      sizes="100vw"
      className="w-23 sm:w-40 md:w-52 lg:w-40 xl:w-60 h-auto block "
    />
  </motion.div>

  {/* Logo */ }
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.85,
      y: 50,
    }}
    animate={
      isActive
        ? {
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }
        : {
          opacity: 1,
          scale: 1,
          y: 0,
        }
    }
    transition={
      isActive
        ? {
          opacity: {
            duration: 1,
          },
          scale: {
            duration: 1,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }
        : {
          opacity: {
            duration: 0.4,
          },
          scale: {
            duration: 0.4,
          },
          y: {
            duration: 0.4,
          },
        }
    }
    className="relative z-10"
  >
    <Image
      src={logogwg}
      alt="Golden Glow Events"
      priority
      className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px] lg:w-[620px]"
    />
  </motion.div>

  {/* Sparkle 1 */ }
  <motion.span
    animate={
      isActive
        ? {
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.4, 1],
          rotate: [0, 15, 0],
        }
        : {
          opacity: 0.5,
          scale: 1,
          rotate: 0,
        }
    }
    transition={
      isActive
        ? {
          duration: 2,
          repeat: Infinity,
        }
        : {
          duration: 0.4,
        }
    }
    className="absolute left-10 top-12 text-2xl text-[#C89A7B]"
  >
    ✦
  </motion.span>


  {/* Sparkle 2 */ }
  <motion.span
    animate={
      isActive
        ? {
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
          rotate: [0, -15, 0],
        }
        : {
          opacity: 0.5,
          scale: 1,
          rotate: 0,
        }
    }
    transition={
      isActive
        ? {
          duration: 2.5,
          delay: 0.5,
          repeat: Infinity,
        }
        : {
          duration: 0.4,
        }
    }
    className="absolute right-12 top-24 text-xl text-[#C89A7B]"
  >
    ✦
  </motion.span>

  {/* Sparkle 3 */ }
  {/* Sparkle 3 */ }
  <motion.span
    animate={
      isActive
        ? {
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
        }
        : {
          opacity: 0.5,
          scale: 1,
          rotate: 0,
        }
    }
    transition={
      isActive
        ? {
          duration: 3,
          delay: 1,
          repeat: Infinity,
        }
        : {
          duration: 0.4,
        }
    }
    className="absolute bottom-16 left-16 text-xl text-[#C89A7B]"
  >
    ✦
  </motion.span>
    </div >
  );
}