import Title from "./Title";
import { motion } from "motion/react";
import userImage from "../assets/user.png";
const teamData = [
  {
    name: "Basliel T",
    title: "CEO & Founder",
    image: "./logo.png",
  },
  {
    name: "John M",
    title: "Co Founder",
    image: userImage,
  },
  {
    name: "Dawit B",
    title: "Co Founder",
    image: userImage,
  },
  {
    name: "Abrhame T",
    title: "Fullstack Dev",
    image: userImage,
  },
  {
    name: "Helen T",
    title: "UX/UI engineer",
    image: userImage,
  },
  {
    name: "Senna W",
    title: "Frontend Developer",
    image: userImage,
  },
  {
    name: "Temesgen T",
    title: "IOT engineer",
    image: userImage,
  },
  {
    name: "Beti H",
    title: "Iot Engineer",
    image: userImage,
  },
];

const Team = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title={"Meet the team"}
        desc={
          "A passionated team of digital experts dedicated to your brands success."
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4  rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img src={team.image} alt="" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
