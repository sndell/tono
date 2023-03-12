import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

type TaskProps = TaskType & { updateActive: (task: TaskType) => void };

const Task = ({
  id,
  status,
  text,
  title,
  creator,
  updateActive,
}: TaskProps) => {
  const handleClick = () => {
    updateActive({ id, status, text, title, creator });
  };

  return (
    <motion.div
      layoutId={id}
      transition={{ duration: 0.25 }}
      onClick={handleClick}
      className="no-scrollbar cursor-pointer overflow-y-scroll rounded-2xl bg-white p-4"
    >
      <div className="flex items-start justify-between">
        <div className="font-semibold">{title}</div>
        <div className="flex items-center gap-1 text-sm capitalize">
          {status}
        </div>
      </div>
      <div className="break-words">{text}</div>
    </motion.div>
  );
};

export default Task;
