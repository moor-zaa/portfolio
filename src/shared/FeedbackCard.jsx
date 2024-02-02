import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Fragment, useEffect } from "react";

const FeedbackCard = ({
  index = 1,
  animation = true,
  testimonial,
  name,
  designation,
  company,
  image,
  onClick = () => {
    return testimonial;
  },
}) => {
  return (
    <Fragment>
      {animation ? (
        <motion.div
          variants={motion ? fadeIn("", "spring", index * 0.5, 0.75) : ""}
          className="bg-black-200 mt-[32px] p-10 rounded-3xl  w-full"
          onClick={onClick}
        >
          <p className="text-white font-black text-[48px]">{`"`}</p>
          <div className="mt-1 flex flex-col h-full">
            <div className="text-white tracking-wider text-[18px] line-clamp-6">
              {testimonial}
            </div>
            <div className="mt-[32px] flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="mt-1 text-secondary text-[12px]">
                  {designation} of {company}
                </p>
              </div>
              <img
                loading="lazy"
                src={image}
                alt={`feedback-by-${name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <div
          className="bg-black-200 mt-[32px] p-10 rounded-3xl m-0 w-full"
          onClick={onClick}
        >
          <p className="text-white font-black text-[48px]">{`"`}</p>
          <div className="mt-1 flex flex-col h-full">
            <div className="text-white tracking-wider text-[18px]">
              {testimonial}
            </div>
            <div className="mt-[32px] flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="mt-1 text-secondary text-[12px]">
                  {designation} of {company}
                </p>
              </div>
              <img
                src={image}
                loading="lazy"
                alt={`feedback-by-${name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default FeedbackCard;
