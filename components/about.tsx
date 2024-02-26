"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-medium">Full Stack Developer</span>, my
        journey has been fueled by a relentless curiosity for technology and a
        passion for solving complex problems. With extensive experience in{" "}
        <span className="font-medium">JavaScript technologies</span> across the
        entire stack, I specialize in crafting seamless, dynamic user
        experiences and robust backend systems.
      </p>
      <p>
        Beyond my professional endeavors, I dedicate time to unravel the
        intricacies of digital security and privacy, aiming to contribute to a
        safer, more secure online ecosystem. Whether it&apos;s through
        developing secure applications, engaging in ethical hacking to identify
        vulnerabilities, or contributing to open-source projects, my goal is to
        leave a lasting impact on the tech industry. My journey is one of
        perpetual learning, where each project brings new challenges, and every
        challenge is an opportunity for growth.
      </p>
    </motion.section>
  );
}
