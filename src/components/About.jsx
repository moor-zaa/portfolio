import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "../shared/ServiceCard";
import SectionHeader from "../shared/SectionHeader";

const About = () => {
  return (
    <React.Fragment>
      <SectionHeader
        sectionHeader={"Overview."}
        sectionParagraph={"Introduction"}
      />
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Skilled and motivated Front-End Developer for nearly 6 years with
        a strong passion for creating engaging user experiences. Equipped with a
        solid foundation in HTML, CSS, and JavaScript, I have successfully
        designed and developed responsive websites and web applications. With a
        meticulous attention to detail and a problem-solving mindset, I am able
        to collaborate effectively with cross-functional teams to deliver
        high-quality projects on time. Constantly staying updated with the
        latest industry trends, I am committed to continuously improving my
        skills and seeking innovative solutions to deliver exceptional user
        interfaces.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(About, "about");
