import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import { jetBrains } from "../ui/fonts";

const Projects = () => {
  

  return (
   <div
         className={`${jetBrains.className} flex h-screen flex-col gap-4 px-6 py-4 rounded-lg shadow-lg`}
       >
        <h1 className="text-2xl font-bold">My Projects</h1>
      <motion.circle color={'red'} cx={0} cy={0} r={50} />
        
    </div>
  );
};
export default Projects;
