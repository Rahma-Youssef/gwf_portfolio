"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FounderType } from "../../../../data/founders";

type FounderCardProps = {
  founder: FounderType;
  active: boolean;
  onClick: () => void;
};

export default function FounderCard({
  founder,
  active,
  onClick,
}: FounderCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        bg-white
        text-left
        shadow-xl
        transition-all
        duration-500
        ${active
          ? "border-[#C89A7B] shadow-[0_25px_60px_rgba(200,154,123,.35)]"
          : "border-[#ECE4DA] hover:border-[#C89A7B]/60"
        }
      `}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
          src={founder.image}
          alt={founder.name}
          className="
            h-[430px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Selected */}

        {active && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="
              absolute
              right-5
              top-5
              rounded-full
              bg-white
              p-2
              shadow-lg
            "
          >
            <CheckCircle2
              size={22}
              className="text-[#C89A7B]"
            />
          </motion.div>
        )}

        {/* Name */}

        <div className="absolute bottom-6 left-6 text-white">

          <h3 className="font-serif text-3xl">

            {founder.name}

          </h3>

          <p className="mt-1 text-sm tracking-[.25em] uppercase text-[#F2D5BC]">

            {founder.role}

          </p>

        </div>
      </div>

      {/* Content */}

      <div className="space-y-5 p-7">

        <p
          dir="rtl"
          className="leading-8 text-gray-600"
        >
          {founder.shortDescription}
        </p>

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-[#F8F4EF] px-4 py-2 text-sm font-medium text-[#0F4C4C]">
            منذ {founder.since}
          </span>

          <motion.div
            animate={
              active
                ? { x: [0, 6, 0] }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="flex items-center gap-2 text-[#C89A7B]"
          >
            <span className="text-sm font-medium">

              عرض القصة

            </span>

            <ArrowRight size={18} />
          </motion.div>

        </div>

      </div>

      {/* Bottom Line */}

      <motion.div
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: .4,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-full
          origin-left
          bg-[#C89A7B]
        "
      />
    </motion.button>
  );
}