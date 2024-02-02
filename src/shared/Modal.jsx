// Modal.js

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal z-30" onClick={closeModal}>
        <motion.div
          variants={slideIn("up", "spring", 0.5, 5)}
          className="modal-content bg-tertiary rounded-2xl"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
