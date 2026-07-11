"use client";

import { motion } from "motion/react";

import { useRef } from "react";
import { useInView } from "motion/react";



export default function AboutContent() {

  const Ref = useRef(null);

const isInView = useInView(Ref, {
  amount: 0.3,
});
  return (
    <motion.div
       ref={Ref}
      dir="rtl"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >



      <h3 className="text-3xl md:text-5xl font-bold leading-relaxed text-[#0F4C4C] ">
        نصنع لحظات تستحق أن تُخلّد
      </h3>

      {/* Glass Card */}

      <div className="mt-10 rounded-[35px] border border-[#EFE3D6] bg-white/70 p-8 shadow-xl backdrop-blur-md">

        <p className="leading-9 text-gray-900 md:text-xl">
          تأسست
          <span className="mx-1 font-bold text-[#0F4C4C]">
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
  );
}