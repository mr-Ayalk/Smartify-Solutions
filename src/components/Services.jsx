import { Laptop } from "lucide-react";
import { motion } from "motion/react";
import herobanner from "../assets/bgImage2.png";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
const serviceData = [
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful  digital solutions that connect ,engage...",
    icon: "./logo.png",
  },
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful  digital solutions that connect ,engage...",
    icon: "./logo.png",
  },
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful  digital solutions that connect ,engage...",
    icon: "./logo.png",
  },
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful  digital solutions that connect ,engage...",
    icon: "./logo.png",
  },
];
const Services = () => {
  return (
    <motion.div
     initial="hidden"
        whileInView="visible"
        transition={{ straggerChildren:0.2 }}
        viewport={{ once: true }}

      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={herobanner}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From strategy to execution ,we craft digital solutions that move your business forward"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
