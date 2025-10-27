"use client";

import { jetBrains } from "../ui/fonts";
import Reordering from "./Reordering";

const Header = () => {
  return (
    <div className="flex  h-screen bg-purple-100 dark:bg-purple-900/20 p-6 rounded-lg shadow-lg">
      <div className="flex mr-6 hidden sm:block justify-center items-center">
        {/* <Reordering /> */}
        <span>
          {" "}
          <code>{`CODE </>`}</code>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
        <span
          className={`${jetBrains.className} uppercase text-[52px] font-[400] text-black dark:text-zinc-50`}
        >
          Cleidy V. Gil A.
        </span>
        <span className="text-2xl text-zinc-600 dark:text-zinc-400">
          Software Developer & Designer
        </span>
        <span className="mt-4 text-zinc-700 dark:text-zinc-300 text-base font-medium italic">
          &quot;Construyendo soluciones web y móviles funcionales y
          responsivas.&quot;
        </span>

        {/* <Reordering /> */}
      </div>
    </div>
  );
};

export default Header;
