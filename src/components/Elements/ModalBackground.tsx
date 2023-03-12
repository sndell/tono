import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalBackgroundProps = {
  toggleActive: () => void;
};

const ModalBackground = ({ toggleActive }: ModalBackgroundProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeAttribute("style");
    };
  }, []);

  return (
    <>
      {createPortal(
        <motion.div
          onMouseDown={toggleActive}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-10 h-screen w-screen bg-black/50"
        />,
        document.body
      )}
    </>
  );
};

export default ModalBackground;
