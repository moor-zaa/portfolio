import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { Fragment } from "react";
import SectionHeader from "../shared/SectionHeader";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { ProjectCard } from "../shared/ProjectCard";
import { WebappProjectCard } from "../shared/WebappProjectCard";

const Works = () => {
  return (
    <Fragment>
      <SectionHeader sectionHeader={"Projects."} sectionParagraph={"My work"} />
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div key={index}>
            {project.webapp ? (
              <WebappProjectCard key={project.name} index={index} {...project} />
            ) : (
              <ProjectCard key={project.name} index={index} {...project} />
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Works, "work");
