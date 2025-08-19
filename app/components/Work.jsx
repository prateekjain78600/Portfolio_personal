import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mb-2 text-5xl font-ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center  max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my portfolio! Here is a collection of projects that showcase
        my expertise in building end-to-end software solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-6" // Updated grid for smaller cards
      >
        {workData.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative block w-full overflow-hidden rounded-lg shadow-lg aspect-[4/3] group" // Updated aspect ratio
            style={{
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }} // Slightly increased hover scale
            transition={{ duration: 0.3 }}
          >
            {/* Permanent gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Always visible project info */}
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-md font-bold">{project?.title}</h2>
              <p className="text-xs opacity-90">{project?.description}</p>
            </div>

            {/* Hover overlay with a "View Project" CTA */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-white border border-white rounded-full">
                <span>View Project</span>
                <Image
                  src={assets.right_arrow_white}
                  alt="arrow"
                  className="w-4"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="https://github.com/prateekjain78600" // Link to your GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
      >
        See more on GitHub{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a> */}
    </motion.div>
  );
};

export default Work;