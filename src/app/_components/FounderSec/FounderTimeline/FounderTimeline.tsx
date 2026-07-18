"use client";

import { AnimatePresence, motion } from "motion/react";
import { FounderType } from "../../../../data/founders";

type FounderTimelineProps = {
    founder: FounderType;
};

export default function FounderTimeline({
    founder,
}: FounderTimelineProps) {

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
                className="mt-28"
                dir="rtl"
            >


                {/* Header */}

                <div className="mb-16 text-center">

                    <p className="
                        uppercase
                        tracking-[.35em]
                        text-[#C89A7B]
                        text-sm
                    ">
                        Journey
                    </p>


                    <h2 className="
                        mt-3
                        font-serif
                        md:text-4xl
                        text-2xl
                        text-[#0F4C4C]
                    ">
                        Professional Timeline
                    </h2>

                </div>



                {/* ================= MOBILE ================= */}


                <div className="
                    relative
                    block
                    lg:hidden
                ">


                    {/* Mobile Line */}

                    <div
                        className="
                            absolute
                            right-4
                            top-0
                            h-full
                            w-[2px]
                            bg-gradient-to-b
                            from-[#C89A7B]
                            via-[#EAD8C4]
                            to-[#C89A7B]
                        "
                    />


                    <div className="space-y-10">


                        {founder.timeline.map((item, index) => (

                            <motion.div
                                key={index}

                                initial={{
                                    opacity: 0,
                                    x: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    duration: .5
                                }}

                                className="
                                    relative
                                    pr-12
                                "
                            >



                                {/* Dot */}

                                <div
                                    className="
                                        absolute
                                        right-4
                                        top-8
                                        translate-x-1/2
                                    "
                                >

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1]
                                        }}

                                        transition={{
                                            repeat: Infinity,
                                            duration: 2
                                        }}

                                        className="
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-4
                                            border-white
                                            bg-[#C89A7B]
                                            shadow-xl
                                        "
                                    >

                                        <div className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-white
                                        "/>


                                    </motion.div>

                                </div>




                                {/* Card */}

                                <motion.div

                                    whileHover={{
                                        y: -5
                                    }}

                                    className="
                                        rounded-[24px]
                                        border
                                        border-[#E9DDD0]
                                        bg-white
                                        p-5
                                        shadow-[0_15px_40px_rgba(0,0,0,.08)]
                                    "
                                >


                                    <span
                                        className="
                                            rounded-full
                                            bg-[#FAF6F1]
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            text-[#C89A7B]
                                        "
                                    >
                                        {item.year}
                                    </span>


                                    <h3
                                        className="
                                            mt-5
                                            font-serif
                                            text-xl
                                            text-[#0F4C4C]
                                        "
                                        dir={item.dir}
                                    >
                                        {item.title}
                                    </h3>



                                    <p
                                        className="
                                            mt-3
                                            leading-7
                                            text-gray-600
                                        "
                                    >
                                        {item.description}
                                    </p>



                                </motion.div>



                            </motion.div>


                        ))}


                    </div>


                </div>





                {/* ================= DESKTOP ================= */}



                <div className="
                    relative
                    hidden
                    lg:block
                ">


                    {/* Center Line */}

                    <div
                        className="
                            absolute
                            left-1/2
                            top-0
                            h-full
                            w-[2px]
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-[#C89A7B]
                            via-[#EAD8C4]
                            to-[#C89A7B]
                        "
                    />



                    <div className="space-y-20">


                        {founder.timeline.map((item, index) => {

                            const reverse = index % 2 !== 0;


                            return (

                                <motion.div

                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        y: 40
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    viewport={{
                                        once: true
                                    }}

                                    transition={{
                                        duration: .6
                                    }}

                                    className="
                                        relative
                                        grid
                                        grid-cols-2
                                    "
                                >



                                    {/* Left / Right Card */}

                                    <div
                                        className={`
                                            px-10
                                            ${reverse
                                                ? "col-start-2"
                                                : "col-start-1"
                                            }
                                        `}
                                    >


                                        <motion.div

                                            whileHover={{
                                                scale: 1.03,
                                                y: -6
                                            }}

                                            className="
                                                rounded-[32px]
                                                border
                                                border-[#E9DDD0]
                                                bg-white
                                                p-8
                                                shadow-[0_20px_60px_rgba(0,0,0,.08)]
                                            "
                                        >


                                            <span
                                                className="
                                                    rounded-full
                                                    bg-[#FAF6F1]
                                                    px-5
                                                    py-2
                                                    text-2xl
                                                    font-semibold
                                                    text-[#C89A7B]
                                                "
                                            >
                                                {item.year}
                                            </span>



                                            <h3
                                                className="
                                                    mt-6
                                                    font-serif
                                                    text-2xl
                                                    text-[#0F4C4C]
                                                    font-bold
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
                                            >
                                                {item.description}
                                            </p>


                                        </motion.div>


                                    </div>





                                    {/* Dot */}

                                    <div
                                        className="
                                            absolute
                                            left-1/2
                                            top-10
                                            -translate-x-1/2
                                        "
                                    >


                                        <motion.div

                                            animate={{
                                                scale: [1, 1.25, 1]
                                            }}

                                            transition={{
                                                repeat: Infinity,
                                                duration: 2
                                            }}

                                            className="
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                border-4
                                                border-white
                                                bg-[#C89A7B]
                                                shadow-xl
                                            "
                                        >

                                            <div
                                                className="
                                                    h-2
                                                    w-2
                                                    rounded-full
                                                    bg-white
                                                "
                                            />

                                        </motion.div>


                                    </div>



                                </motion.div>


                            )

                        })}


                    </div>


                </div>



            </motion.section>


        </AnimatePresence>
    );
}