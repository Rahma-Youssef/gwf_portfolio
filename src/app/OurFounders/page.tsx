"use client";

import { useState, useRef } from "react";
import { useInView } from "motion/react";



import { founders } from "../../data/founders";
import FounderSidebar from "../_components/FounderSec/FounderSidbar/FounderSidbar";
import FounderImage from "../_components/FounderSec/FounderImage/FounderImage";
import FounderInfo from "../_components/FounderSec/FounderInfo/FounderInfo";
import FounderAchievements from "../_components/FounderSec/FounderAchievements/FounderAchievements";
import FounderTimeline from "../_components/FounderSec/FounderTimeline/FounderTimeline";
import Header from "../_components/Header/Header";

export default function OurFounders() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.1,
    once: true,
  });

  const [selectedFounder, setSelectedFounder] = useState(founders[0]);

  return (
    <section
      id="Founders"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#C89A7B]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#0F4C4C]/5 blur-[150px]" />

      <div className="container mx-auto px-6">

        <Header
          title=" Our Founders"
          description="تعرف على أصحاب الرؤية الذين يقفون وراء كل لحظة مميزة نصنعها."
          isInView={isInView}
        />

        {/* Split Layout */}

        <div className="mt-20 grid gap-12 xl:grid-cols-[300px_1fr]">

          {/* Sidebar */}

          <FounderSidebar
            founders={founders}
            selectedFounder={selectedFounder}
            onSelect={setSelectedFounder}
          />

          {/* Right Content */}

          <div className="space-y-32">

            <div className="grid items-center gap-20 xl:grid-cols-[480px_1fr]">

              <FounderImage
                founder={selectedFounder}
              />

              <FounderInfo
                founder={selectedFounder}
              />

            </div>

            <FounderAchievements
              founder={selectedFounder}
            />

            <FounderTimeline
              founder={selectedFounder}
            />

          </div>

        </div>

      </div>
    </section>
  );
}