"use client";

import { motion } from "motion/react";

import {
    CalendarDays,
    PartyPopper,
    Sparkles,
    MapPinned,
} from "lucide-react";
import CountUp from "@/components/CountUp";

type CompanyStatsProps = {
    isInView: boolean;
};

const stats = [
    {
        icon: PartyPopper,
        number: 100,
        suffix: "+",
        title: "Events",
    },
    {
        icon: MapPinned,
        number: 2,
        suffix: "",
        title: "Branches",
    },
    {
        icon: Sparkles,
        number: 5,
        suffix: "+",
        title: "Services",
    }
];

export default function Count({


    isInView,
}: CompanyStatsProps) {
    console.log(isInView);
    return (
        <div className="mt-12 flex flex-wrap justify-center gap-8">
            {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={index}
                        whileHover={{
                            y: -10,
                            rotate: 3,
                            scale: 1.05,
                        }}
                        transition={{ duration: .35 }}
                        className="
          group
          relative
          flex
          h-40
          w-40
          flex-col
          items-center
          justify-center
          rounded-full
          border-2
          border-[#D9B38C]
          bg-gradient-to-b
          from-white
          to-[#F8F3EE]
          shadow-[0_20px_50px_rgba(0,0,0,.12)]
        "
                    >
                        {/* Inner Circle */}

                        <div
                            className="
            absolute
            inset-2
            rounded-full
            border
            border-[#EAD8C4]
          "
                        />

                        <Icon
                            size={22}
                            className="mb-2 text-[#C89A7B]"
                        />

                        <div className="flex items-end">
                            <CountUp
                                from={0}
                                to={item.number}
                                duration={2}
                                direction="up"
                                delay={index * 0.2}
                                startWhen={isInView}
                                
                                className="text-4xl font-bold text-[#0F4C4C]"
                            />

                            <span className="text-3xl font-bold text-[#C89A7B]">
                                {item.suffix}
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-[#0F4C4C]">
                            {item.title}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}