import React from "react";

import { motion } from "framer-motion";

const Caret = () => {
  return (
    <motion.div
      layoutId="underline"
      transition={{ ease: "backInOut", duration: 0.2 }}
      className="absolute inset-0 rounded-full bg-white"
    ></motion.div>
  );
};

export default Caret;
