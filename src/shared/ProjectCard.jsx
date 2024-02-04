import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { fadeIn, slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import ArrowSvg from "../assets/svgs/ArrowSvg";

export const ProjectCard = ({ index, name, description, tags, image, url }) => {
  return (
    <motion.div variants={slideIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-2xl relative"
      >
        <div className="layer-one"></div>
        <div className="project-card p-2 rounded-2xl sm:w-[555px] w-full">
          <div className="relative w-full ">
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="w-full object-contain rounded-2xl"
            />
          </div>
          <div className="mt-5 relative z-10">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 relative">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="ml-auto mr-3 flex items-center"
            >
              <div className="mx-1">Explore</div>
              <div>
                <ArrowSvg />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
ProjectCard.propTypes = {
  index: PropTypes.number,
  description: PropTypes.string,
  tags: PropTypes.any,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
