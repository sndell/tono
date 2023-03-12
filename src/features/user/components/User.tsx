import { AnimatePresence } from "framer-motion";
import useToggle from "../../../hooks/useToggle";
import { auth } from "../../../lib/firebase";
import UserModal from "./UserModal";

const User = () => {
  const [active, toggleActive] = useToggle();
  const user = auth.currentUser;

  return (
    <div className="sm:relative">
      <button
        onClick={toggleActive}
        className="relative flex h-[40px] cursor-pointer items-center gap-2 rounded-full bg-primary pr-4"
      >
        <img
          src={user?.photoURL ?? undefined}
          className="h-[40px] w-[40px] rounded-full"
        ></img>
        <div className="whitespace-nowrap">{user?.displayName}</div>
      </button>
      <AnimatePresence>
        {active && <UserModal toggleActive={toggleActive} />}
      </AnimatePresence>
    </div>
  );
};

export default User;
