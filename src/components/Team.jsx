import Title from "./Title";
import { motion } from "motion/react";
import userImage from "../assets/user.png";
import lemi from "../assets/lemi.png";
import ayalk from "../assets/ayalk.jpg";
import bami from "../assets/bami.png";
const teamData = [
  {
    name: "Lemi Negeso",
    title: "Co Founder | HardWare Engineer | AI and Ml Specialist",
    image: lemi,
  },
  {
    name: "Ayalkbet Teketel",
    title: "Co Founder | Full Stack Developer | IoT Specialist",
    image: ayalk,
  },
  {
    name: "Bamlak Tadesse",
    title: "Co Founder | UX/UI Designer | IoT Specialist",
    image: bami,
  },
  {
    name: "Eyosiyas Tiruneh",
    title: "Co Founder | HardWare Engineer | Project Organizer",
    image: userImage,
  },
  {
    name: "Kenna Bayye",
    title: "Co Founder |HardWare Engineer | IoT Specialist",
    image: userImage,
  },
  {
    name: "Oli Dereje",
    title: "Software Developer",
    image: userImage,
  },
  {
    name: "Feven ",
    title: "Software Developer",
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
