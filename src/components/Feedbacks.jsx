import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionHeader from "../shared/SectionHeader";
import { testimonials } from "../constants";
import FeedbackCard from "../shared/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import Modal from "../shared/Modal";
import ArrowSvg from "../assets/svgs/ArrowSvg";

const Feedbacks = () => {
  const ref = useRef();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    if (ref.current && ref.current.swiper) {
      const activeIndex = ref.current.swiper.activeIndex;
      setActiveIndex(activeIndex);
    }
  };

  const [feedbackToshow, setFeedbackToshow] = useState(null);

  const handleRef = (index) => {
    ref.current.swiper.slideTo(index);
  };

  const feedbackCardClicked = (testimonial) => {
    setFeedbackToshow(testimonial);
  };

  const closeModal = () => {
    setFeedbackToshow(null);
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] relative">
      <div
        className="layer-one"
        style={{ top: "30%", width: "80%", right: "10%" }}
      ></div>
      <div
        className={`${styles.padding} project-card rounded-2xl min-h-[300px]`}
      >
        <Modal isOpen={feedbackToshow} closeModal={closeModal}>
          {feedbackToshow && (
            <FeedbackCard
              key={feedbackToshow?.name}
              testimonial={feedbackToshow}
              {...feedbackToshow}
              animation={false}
            />
          )}
        </Modal>
        <motion.div variants={textVariant()}>
          <SectionHeader
            sectionHeader={"Recommendations."}
            sectionParagraph={"What others say"}
          />
        </motion.div>
        <Swiper
          ref={ref}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard
                onClick={() => feedbackCardClicked(testimonial)}
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            </SwiperSlide>
          ))}
          <div className="flex gap-2 mt-3">
            {testimonials.map((item, index) => (
              <div key={index} onClick={() => handleRef(index)}>
                <img
                  loading="lazy"
                  className="w-[38px] h-[38px] rounded-full"
                  style={{
                    border: activeIndex === index ? "3px solid white" : "none",
                  }}
                  src={item.image}
                />
              </div>
            ))}
            <a
            href={"https://www.linkedin.com/in/mortezaalipour/details/recommendations/?detailScreenTabIndex=0"}
            target="_blank"
            rel="noreferrer"
            className="ml-auto mr-3 flex items-center"
          >
            <div className="mx-1">See on Linkedin</div>
            <div>
              <ArrowSvg />
            </div>
          </a>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
