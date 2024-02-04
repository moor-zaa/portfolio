import { motion } from "framer-motion";

function ArrowSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.54,
          repeat: Infinity,
        }}
      />
    </svg>
  );
}

ArrowSvg.propTypes = {};

export default ArrowSvg;
