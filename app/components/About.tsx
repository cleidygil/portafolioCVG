"use client";
import { motion } from "motion/react";
import { jetBrains } from "../ui/fonts";

const About = () => {
  const variants = {
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <div
      className={`${jetBrains.className} flex h-screen flex-col gap-4 px-6 py-4 rounded-lg shadow-lg`}
    >
      <h2>About Me</h2>
      <motion.div
        className="box"
        // Animate when this value changes:
        animate={{ scale: 2 }}
        // Fade in when the element enters the viewport:
        whileInView={{ opacity: 1 }}
        // Animate the component when its layout changes:
        layout
        // Style now supports indepedent transforms:
        style={{ x: 100 }}
      >
        <motion.ul animate="visible">
          <motion.li custom={0} variants={variants} />
          <motion.li custom={1} variants={variants} />
          <motion.li custom={2} variants={variants} />
        </motion.ul>
      </motion.div>
      <p>
        I am a software developer with a passion for creating dynamic and
        user-friendly applications. My expertise lies in front-end development,
        and I enjoy working with the latest technologies to build responsive and
        accessible web applications.
      </p>
    </div>
  );
};

export default About;
