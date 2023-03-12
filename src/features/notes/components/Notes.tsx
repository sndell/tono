import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { createTask } from "../api";
import { useTasks } from "../hooks/useTasks";
import Open from "./Open";
import Task from "./Task";

const Notes = () => {
  const location = useLocation();
  const {
    tasks,
    active,
    updateActive,
    clearActive,
    updateFilter,
    clearFilter,
  } = useTasks();
  const handleNew = async () => {
    try {
      await createTask();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        clearFilter();
        break;
      case "/open":
        updateFilter("open");
        break;
      case "/closed":
        updateFilter("closed");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <div className=" grid flex-1 auto-rows-[200px] gap-2 pb-16 max-[300px]:grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            status={task.status}
            text={task.text}
            title={task.title}
            creator={task.creator}
            updateActive={updateActive}
          />
        ))}
      </div>
      <div className="pointer-events-none fixed right-0 bottom-0 flex min-h-fit w-full justify-center bg-gradient-to-t from-secondary pb-4">
        <button
          onClick={handleNew}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-black py-2 pl-3 pr-4 text-white"
        >
          <FaPlus />
          New task
        </button>
      </div>
      {createPortal(
        <AnimatePresence>
          {active && (
            <Open
              id={active.id}
              status={active.status}
              text={active.text}
              title={active.title}
              creator={active.creator}
              toggleActive={clearActive}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Notes;
