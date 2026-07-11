"use client";

import { motion } from "motion/react";
import { Landmark, Target, Handshake } from "lucide-react";

const items = [
  {
    title: "Our Story",
    icon: Landmark,
    text: "بدأت Golden Glow Events برؤية بسيطة، وهي تحويل كل مناسبة إلى تجربة استثنائية.",
  },
  {
    title: "Our Vision",
    icon: Target,
    text: "أن نصبح من الشركات الرائدة في تنظيم المناسبات داخل مصر.",
  },
  {
    title: "Our Commitment",
    icon: Handshake,
    text: "نلتزم بتقديم أعلى جودة والاهتمام بأدق التفاصيل في كل مناسبة.",
  },
];

export default function StoryCards() {
  return (
    <div className="mt-8 space-y-5">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              x: -6,
            }}
            className="
              rounded-[30px]
              border
              border-[#EFE3D6]
              bg-white
              p-7
              shadow-md
            "
          >
            <div className="flex items-center justify-between">

              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#F8EEE5]
              "
              >
                <Icon
                  size={28}
                  className="text-[#0F4C4C]"
                />
              </div>

              <div className="text-right">

                <h3 className="font-serif text-3xl text-[#0F4C4C]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-8">
                  {item.text}
                </p>

              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}