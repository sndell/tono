import { motion } from "framer-motion";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import ModalBackground from "../../../components/Elements/ModalBackground";
import { deleteTask, updateTask } from "../api";

type TaskProps = TaskType & { toggleActive: () => void };

const Open = ({
  id,
  status,
  text,
  title,
  creator,
  toggleActive,
}: TaskProps) => {
  const [textValue, setTextValue] = useState<string>(text);
  const [statusValue, setStatusValue] = useState<TaskStatusType>(status);
  const [titleValue, setTitleValue] = useState<string>(title);

  const handleTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleStatusValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusValue(e.target.value as TaskStatusType);
  };

  const handleSave = async () => {
    const task: TaskType = {
      id,
      creator,
      status: statusValue,
      text: textValue,
      title: titleValue,
    };
    await updateTask(task);
    toggleActive();
  };

  const handleDelete = async () => {
    await deleteTask(id);
    toggleActive();
  };

  return (
    <>
      <motion.div
        transition={{ duration: 0.25 }}
        layoutId={id}
        className="fixed inset-0 z-20 grid h-screen w-full grid-cols-main justify-center p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col rounded-2xl bg-primary p-4"
        >
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <MdEdit />
                <input
                  value={titleValue}
                  onChange={handleTitleValue}
                  className="font-semibold outline-none"
                />
              </div>
              <div className="flex items-center gap-1 justify-self-end text-sm">
                <select
                  value={statusValue}
                  onChange={handleStatusValue}
                  className="outline-none"
                >
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
            <textarea
              onChange={handleTextValue}
              value={textValue}
              className="no-scrollbar w-full flex-1 cursor-text appearance-none outline-none"
            />
            <div className="flex justify-center gap-2">
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 rounded-full bg-red-500 px-3 py-2 text-white"
              >
                <FaTrash />
                Delete
              </button>
              <button
                onClick={toggleActive}
                className="flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <ModalBackground toggleActive={toggleActive} />
    </>
  );
};

export default Open;
