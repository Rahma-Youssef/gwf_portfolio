"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import Header from "../_components/Header/Header";
import AboutImage from "../_components/AboutImage/AboutImage";
import AboutContent from "../_components/AboutContent/AboutContent.";
import Count from "../_components/count/count";




export default function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      id="About"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Header
          title="About Us"
          description="نحول كل مناسبة إلى تجربة استثنائية تجمع بين الفخامة والإبداع."
          isInView={isInView}
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <AboutImage isInView={isInView} />

          <div>
            <AboutContent />

            <Count isInView={isInView} />

          </div>


        </div>

      </div>
    </section>
  );
}