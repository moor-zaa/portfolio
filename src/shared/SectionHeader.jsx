import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import PropTypes from "prop-types";

const SectionHeader = ({ sectionParagraph, sectionHeader }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{sectionParagraph}</p>

      <h2 className={styles.sectionHeadText}>{sectionHeader}</h2>
    </motion.div>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  sectionParagraph: PropTypes.string,
  sectionHeader: PropTypes.string,
};
