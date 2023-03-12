import { AnimatePresence, motion } from "framer-motion";
import ModalBackground from "../../../components/Elements/ModalBackground";
import { logout } from "../api";

type UserModalProps = {
  toggleActive: () => void;
};

const UserModal = ({ toggleActive }: UserModalProps) => {
  const handleSignOut = () => {
    logout();
    toggleActive();
  };

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.1 }}
        className="absolute right-0 top-14 z-20 w-full overflow-hidden max-sm:w-screen"
      >
        <div className="rounded-full bg-primary px-4 py-2 max-sm:m-3">
          <button onClick={handleSignOut}>Logout</button>
        </div>
      </motion.div>
      <ModalBackground toggleActive={toggleActive} />
    </>
  );
};

export default UserModal;
