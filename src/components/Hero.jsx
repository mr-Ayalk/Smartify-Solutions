import herobanner from "../assets/smarthome.png";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full  overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center "
      >
        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-500 font-semibold">
          ✨ $7.5M seed round raised
        </div>
        {/* <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
          <img src={herogroupimg} alt="groupimg" className="w-20" />
          <p className="text-xs font-medium">Trusted by 10k+ people</p>
        </div> */}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-4xl xl:text-[54px] font-medium xl:leading-[95px] max-w-5xl "
      >
        Seamlessly Syncing Sophisticated Solutions for a{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          Smarter{" "}
        </span>
        Tomorrow
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Innovative company delivering smart solutions for a sustainable and
        efficient future.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative "
      >
        <img
          src={herobanner}
          alt=""
          className="w-full max-w-6xl  shadow-blue-100 rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
