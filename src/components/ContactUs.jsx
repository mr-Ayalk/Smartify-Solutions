import Title from "./Title";
import { ArrowRight, Mail, User } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "motion/react";
const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "7b4ff9d1-046c-49d8-83e3-89cfbe37f63e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ straggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Reach out to us"}
        desc={
          "From strategy to execution ,we craft digital solutions that your business forward"
        }
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div className="">
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            {/* <img src="" alt="" /> */}
            <User className="items-center mt-3" />
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 text-sm outline-none"
              required
              name="name"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <Mail className="items-center mt-3" />
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 text-sm outline-none"
              name="email"
            />
          </div>
        </div>
        <div className=" sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            name="message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <ArrowRight className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
