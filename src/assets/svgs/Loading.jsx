import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
    >
      <motion.circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeDasharray="1, 150"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      />
    </motion.svg>
  );
}

Loading.propTypes = {};

export default Loading;
