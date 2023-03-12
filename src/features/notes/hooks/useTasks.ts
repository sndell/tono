import { useContext } from "react";
import { notesContext } from "../context/notesContext";

export const useTasks = (): ITasksContext => {
  const context = useContext(notesContext);
  if (context === undefined)
    throw new Error("useTasks must be used within a FilterProvider");
  return context;
};
