import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { analytics } from "../shared/ScrollTrackingComponent";
import { logEvent } from "firebase/analytics";
import { socials } from "../constants";

const Hero = () => {
  const handleLogEvent = () => {
    logEvent(analytics, "CV downloaded", {
      action: "CV downloaded",
    });
  };

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className="purple-circle-bg"></div>
      <div className="hero-overlay"></div>
      <div className="social">
        {socials.map((social, index) => (
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.5 + 1 }}
            href={social.url}
            key={social.name}
            className="social-item"
          >
            <div className="social--item__first-layer"></div>
            <div className="social--item__second-layer"></div>
            <img className="social--item__image" src={social.image} alt="" />
          </motion.a>
        ))}
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5D86B9] relative">
            <div
              className="w-4 h-4 rounded-full bg-[#5D86B9] absolute top-[2px] left-[2px]"
              style={{ border: "3px solid black" }}
            />
          </div>
          <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-whtie`}>
            Hi, I'm <span className="text-[#5D86B9]">Mori</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces
            <br className="sm:block hidden" /> and web applications.
          </p>
          <motion.a
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 202, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, easings: "ease-out" }}
            onClick={handleLogEvent}
            href="/Resume - Mori Alipour.pdf"
            download
            className="download-cv"
          >
            <div className="dot"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Download Resume
            </motion.div>
          </motion.a>
        </div>
      </div>
      <div className="computer-canvas-container">
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[22px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-1 rounded-full bg-secondary my-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
