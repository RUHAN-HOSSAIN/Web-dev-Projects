import { toast } from "react-hot-toast";
import { motion } from "motion/react";

import assets from "../assets/assets";
import Title from "./Title"

const ContactUs = () => {
  const _title = 'Reach out to us';
  const _desc = 'From strategy to execution, we craft digital solutions that move your business forward.'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/96248ceb774439f051e317e39806cb20", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (res.ok) {
        toast.success("Thank you for your Submission!");
        e.target.reset();
      } else {
        toast.error("Failed to send message!");
      }

    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title={_title} desc={_desc} />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >

        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_subject" value="New Contact Message" />
        <input type="hidden" name="_template" value="table" />

        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" required />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required />
        </div>

        <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
          Submit <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs