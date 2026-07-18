"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type TrustedClientsProps = {
    isInView: boolean;
};

const clients = [
    {
        name: "Al Forsan International School",
        type: "International School",
        image: "/images/clients/forsanschool.webp",
    },
    {
        name: "Smouha Sporting Club",
        type: "Sports Club",
        image: "/images/clients/smouhaclub.webp",
    },
    {
        name: "Hilton Alexandria King's Ranch & Alexandria Corniche",
        type: "Luxury Hotel",
        image: "/images/clients/hiliton.webp",
    },
    {
        name: "Sheraton Montazah Hotel",
        type: "Luxury Hotel",
        image: "/images/clients/shereton.webp",
    },
];

export default function TrustedClients({
    isInView,
}: TrustedClientsProps) {
    return (
        <motion.section
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
                delay: 0.2,
            }}
            className="
        mt-28
        border-t
        border-[#EFE3D7]
        pt-20
      "
        >
            {/* Header */}

            <div className="text-center">
                <p
                    className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#C89A7B]
          "
                >
                    Trusted Experience
                </p>

                <h2
                    className="
            mt-4
            font-serif
            text-4xl
            text-[#0F4C4C]

            sm:text-5xl
          "
                >
                    Trusted By
                </h2>

                <p
                    dir="rtl"
                    className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-gray-500

            sm:text-base
            sm:leading-8
          "
                >
                    نفخر بثقة مجموعة من أبرز المؤسسات والوجهات،
                    ونعتز بكل تجربة ساهمنا في تحويلها إلى ذكرى لا تُنسى.
                </p>
            </div>

            {/* Clients */}

            <div
                className="
          mt-14
          grid
          gap-5

          sm:grid-cols-2

          lg:grid-cols-4
        "
            >
                {clients.map((client, index) => (
                    <motion.div
                        key={client.name}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {
                                    opacity: 0,
                                    y: 25,
                                }
                        }
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                        }}
                        whileHover={{
                            y: -8,
                        }}
                        className="
              group
              relative
              min-h-[360px]
              overflow-hidden
              rounded-[28px]
              bg-[#0F4C4C]
              shadow-lg
              transition-all
              duration-500
              hover:shadow-2xl
            "
                    >
                        {/* Background Image */}

                        <Image
                            src={client.image}
                            alt={client.name}
                            fill
                            sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                25vw
              "
                            className="
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
                from-black/90
                via-black/45
                to-black/10
              "
                        />

                        {/* Number */}

                        <span
                            className="
                absolute
                right-5
                top-4
                z-10
                text-5xl
                font-serif
                text-white/70
              "
                        >
                            0{index + 1}
                        </span>

                      

                        {/* Content */}

                        <div
                            className="
                absolute
                inset-x-0
                bottom-0
                z-10
                p-6
              "
                        >
                            <p
                                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#E8B99A]
                "
                            >
                                {client.type}
                            </p>

                            <h3
                                className="
                  mt-3
                  font-serif
                  text-2xl
                  leading-tight
                  text-white
                "
                            >
                                {client.name}
                            </h3>

                            <div
                                className="
                  mt-6
                  h-px
                  w-full
                  bg-white/25
                "
                            />

                            <p
                                className="
                  mt-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
                            >
                                Our Client
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}