"use client";
import { motion } from "motion/react";
import { jetBrains } from "../ui/fonts";
import LoadingCircleSpinner from "./Loading";

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
      <div className="flex mr-6 hidden sm:block justify-center items-center">
        <LoadingCircleSpinner />
        <code>{`CODE </>`}</code>
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
        <h1 className="text-2xl font-bold">About Me</h1>
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
          Soy una desarrolladora de software apasionada por crear aplicaciones
          dinámicas e intuitivas. Mi especialidad es el desarrollo front-end y
          disfruto trabajando con las últimas tecnologías para crear
          aplicaciones web adaptables y accesibles.
        </p>
      </div>
    </div>
  );
};

export default About;
