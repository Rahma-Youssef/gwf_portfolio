"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

import Header from "../_components/Header/Header";

export default function Contact() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      id="Contact"
      className="py-20"
    >
      <Header
        title="Contact Us"
        // description="نقدم مجموعة متكاملة من خدمات تنظيم المناسبات لتناسب جميع احتياجاتكم."
        isInView={isInView}
      />
    </section>
  );
}