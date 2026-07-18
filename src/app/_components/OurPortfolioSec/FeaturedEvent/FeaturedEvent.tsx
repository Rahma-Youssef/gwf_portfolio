"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { PortfolioItem } from "@/data/portfolio";

type FeaturedEventProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function FeaturedEvent({
  item,
  onClick,
}: FeaturedEventProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="
        group
        relative
        mb-16
        min-h-[520px]
        cursor-pointer
        overflow-hidden
        rounded-[28px]

        sm:mb-20
        sm:min-h-[560px]
        sm:rounded-[34px]

        lg:min-h-[620px]
        lg:rounded-[40px]
      "
    >
      {/* Background Image */}

      <Image
        src={item.cover}
        alt={item.title}
        fill
        priority
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 100vw,
          1200px
        "
        className="
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/35
          to-black/10

          lg:bg-gradient-to-r
          lg:from-black/75
          lg:via-black/35
          lg:to-transparent
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-6

          sm:p-10

          lg:left-12
          lg:top-1/2
          lg:bottom-auto
          lg:right-auto
          lg:max-w-[520px]
          lg:-translate-y-1/2
          lg:p-0
        "
      >
        {/* Label */}

        <span
          className="
            inline-flex
            rounded-full
            border
            border-white/30
            bg-white/15
            px-4
            py-2
            text-xs
            text-white
            backdrop-blur-md

            sm:px-5
            sm:text-sm
          "
        >
          Featured Event
        </span>

        {/* Title */}

        <h1
          className="
            mt-5
            font-serif
            text-4xl
            leading-tight
            text-white

            sm:mt-7
            sm:text-5xl

            lg:text-6xl
          "
        >
          {item.title}
        </h1>

        {/* Subtitle */}

        <p
          className="
            mt-3
            text-base
            leading-7
            text-white/85

            sm:mt-5
            sm:text-xl
          "
        >
          {item.subtitle}
        </p>

        {/* Location + Year */}

        {(item.location || item.year) && (
          <p
            className="
              mt-2
              text-sm
              text-white/70

              sm:text-base
            "
          >
            {item.location}

            {item.location && item.year && " • "}

            {item.year}
          </p>
        )}

        {/* CTA */}

        <button
          className="
            mt-7
            flex
            items-center
            gap-3
            rounded-full
            bg-white
            px-6
            py-3
            text-sm
            font-medium
            text-[#0F4C4C]
            transition-all
            duration-300

            sm:mt-10
            sm:px-8
            sm:py-4
            sm:text-base

            group-hover:gap-5
          "
        >
          Explore Event

          <ArrowRight size={19} />
        </button>
      </div>
    </motion.div>
  );
}