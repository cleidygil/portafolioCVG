"use client";
import { motion, useScroll } from "motion/react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#a200ffff",
          }}
        />
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
          className="flex flex-col gap-4 text-base font-medium sm:flex-row"
        >
          <Header key="header" />
          <About key="about" />
          <Projects key="projects" />
        </article>
      </main>
    </div>
  );
}
