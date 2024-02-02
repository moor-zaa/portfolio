import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SectionHeader from "../shared/SectionHeader";
import InputWithLabel from "../shared/InputWithLabel";
import EarthCanvas from "./canvas/Earth";
import { ToastContainer, toast } from "react-toastify";
import { StarsCanvas } from "./canvas";
import { logEvent } from "firebase/analytics";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialForm);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_xu96ge8",
        "template_ybq3hmx",
        {
          from_name: form.name,
          to_name: "Morteza",
          from_name: form.email,
          to_email: "mortezaalipour1777@gmail.com",
          message: form.message,
        },
        "I8EB57sH9HO3Pdkym"
      )
      .then(() => {
        setLoading(false);
        toast("Thank you. I will get back to you as soon as possible.", {
          theme: "dark",
          type: "success",
        });
        setForm(initialForm);
      })
      .catch(() => {
        setLoading(false);
        toast("Sorry. Something went wrong!", { theme: "dark", type: "error" });
      });
  };

  const handleLog = () => {
    logEvent(analytics, "Submitted form", {
      action: "Submitted contact form",
    });
  };

  return (
    <div className="relative">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <SectionHeader
            sectionHeader={"Contact."}
            sectionParagraph={"Get in touch"}
          />
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <InputWithLabel
              type="text"
              label={"Your Name"}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
            />
            <InputWithLabel
              label={"Your Email"}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
            />
            <InputWithLabel
              label={"Your Message"}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              isTextarea={true}
            />
            <button
              type="submit"
              disabled={form.email.length === 0 || form.message.length === 0}
              onClick={handleLog}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
        <ToastContainer position="bottom-center" />
      </div>
      <StarsCanvas />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
