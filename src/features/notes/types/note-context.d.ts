type TaskStatusType = "open" | "closed";

type TaskType = {
  id: string;
  title: string;
  text: string;
  status: TaskStatusType;
  creator: string;
};

interface ITasksContext {
  active: TaskType | undefined;
  tasks: TaskType[];
  filter: TaskStatusType | undefined;
  updateTasks: (notes: TaskType[]) => void;
  updateActive: (note: TaskType) => void;
  updateFilter: (mode: TaskStatusType) => void;
  clearFilter: () => void;
  clearActive: () => void;
}
