

"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";

import aboutImage from "./../../../public/images/aboutImage.jpg";
import bgLeaf from "./../../../public/images/bgLeaf2.png";
import { useRef } from "react";

export default function About() {



  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  return (
    <section
      id="About"

      className="relative overflow-hidden bg-[#FCFAF7] py-28"
      ref={ref}
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-[#EEDCC8]/40 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0F4C4C]/5 blur-[120px]" />

      {/* Background Word */}
      <h2 className="pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 select-none text-[65px] font-black uppercase tracking-[0.35em] text-[#0F4C4C]/5 md:text-[180px]">
        ABOUT
      </h2>

      {/* Background Leaves */}

      <Image
        src={bgLeaf}
        alt=""
        className="
          absolute
          left-0
          top-0
          h-full
          w-auto
          opacity-[0.08]
          object-cover
          pointer-events-none
          select-none
        "
      />

      <Image
        src={bgLeaf}
        alt=""
        className="
          absolute
          right-0
          bottom-0
          h-full
          w-auto
          scale-x-[-1]
          opacity-[0.08]
          object-cover
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -80 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >

          <span className="inline-flex items-center gap-3 rounded-full border border-[#E7D5C3] bg-white/70 px-6 py-2 backdrop-blur">

            <span className="h-px w-8 bg-[#C89A7B]" />

            <span className="font-allura text-4xl font-extrabold text-[#C89A7B]">
              About Us
            </span>

            <span className="h-px w-8 bg-[#C89A7B]" />

          </span>
          {/* 
          <h2 className="mt-8 font-serif text-4xl font-semibold leading-tight text-[#0F4C4C] md:text-6xl">
            The Story Behind
            <br />
            Golden Glow
          </h2> */}

          <p
            dir="rtl"
            className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-500"
          >
            نحول كل مناسبة إلى تجربة استثنائية تجمع بين الفخامة،
            والإبداع، والاهتمام بأدق التفاصيل.
          </p>

        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              scale: .9,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}
            animate={
  isInView
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: -80 }
}
            viewport={{ once: true }}
            transition={{
              duration: .9,
            }}
            className="relative mx-auto"
          >

            {/* Glow */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#F0DBC7]
        opacity-70
        blur-[120px]
      "
            />

            {/* Decorative Border */}

            <div
              className="
        absolute
        -left-6
        -top-6
        h-full
        w-full
        rounded-[60px]
        border
        border-[#D8B89A]
      "
            />

            <div
              className="
        absolute
        -bottom-6
        -right-6
        h-full
        w-full
        rounded-[60px]
        bg-[#D8B89A]/10
      "
            />

            {/* Floating Sparkle */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              
              className="
        absolute
        -top-6
        right-6
        text-4xl
        text-[#C89A7B]
      "
            >
              ✦
            </motion.div>

            {/* Image */}

            <motion.div
              initial={{
                scale: 0.95,
                rotate: -4,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              whileHover={{
                scale: 1.03,
                rotate: -2,
                y: -8,
              }}
              whileTap={{
                scale: 1.02,
                rotate: -2,
                y: -6,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              animate={
  isInView
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: -80 }
}
            >
              <Image
                src={aboutImage}
                alt="Golden Glow"
                className="
      h-[340px]
      sm:h-[420px]
      md:h-[500px]
      lg:h-[600px]
      w-full
      rounded-[22px]
      md:rounded-[30px]
      lg:rounded-[38px]
      object-cover
    "
              />

              {/* Overlay */}

              <div
                className="
      absolute
      inset-0
      rounded-[22px]
      md:rounded-[30px]
      lg:rounded-[38px]
      bg-gradient-to-t
      from-black/10
      via-transparent
      to-white/30
    "
              />
            </motion.div>

            {/* Since Card */}

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

    bottom-4
    left-4

    sm:bottom-6
    sm:left-6

    lg:-bottom-8
    lg:-left-8

    rounded-2xl
    md:rounded-[28px]

    bg-[#0F4C4C]

    px-5
    py-4

    sm:px-6
    sm:py-5

    lg:px-8
    lg:py-7

    text-white
    shadow-2xl
  "
            >
              <p
                className="
      text-[10px]
      sm:text-xs
      uppercase
      tracking-[0.25em]
      md:tracking-[0.35em]
      text-[#D8B89A]
    "
              >
                Established
              </p>

              <h3
                className="
      mt-1
      text-2xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      font-bold
    "
              >
                2025
              </h3>
            </motion.div>

            {/* Small Circle */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [.4, .8, .4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
        absolute
        right-0
        bottom-32
        h-5
        w-5
        rounded-full
        bg-[#C89A7B]
      "
            />

          </motion.div>



          {/* Text */}

          <motion.div
            dir="rtl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {/* Title */}

            {/* <span className="inline-block rounded-full bg-[#F5E8DA] px-5 py-2 text-sm font-medium tracking-[.2em] uppercase text-[#C89A7B]">
              Luxury Event Planner
            </span> */}

            <h3 className="text-4xl font-bold leading-relaxed text-[#0F4C4C] md:text-5xl">
              نصنع لحظات تستحق أن تُخلّد
            </h3>

            {/* Glass Card */}

            <div className="mt-10 rounded-[35px] border border-[#EFE3D6] bg-white/70 p-8 shadow-xl backdrop-blur-md">

              <p className="leading-9 text-gray-600 md:text-xl">
                تأسست
                <span className="mx-1 font-semibold text-[#0F4C4C]">
                  Golden Glow Events
                </span>
                في 26 يوليو 2025 بهدف تقديم تجربة متكاملة في تنظيم المناسبات
                بأعلى مستويات الجودة والإبداع.
              </p>

              <p className="mt-6 leading-9 text-gray-600 md:text-xl">
                نهتم بكل تفصيلة صغيرة، لأننا نؤمن أن التفاصيل هي التي تصنع
                الذكريات، ولذلك نقدم حلولاً مبتكرة تناسب جميع المناسبات.
              </p>

            </div>

       




          </motion.div>

        </div>

      </div>

    </section>

  );
}