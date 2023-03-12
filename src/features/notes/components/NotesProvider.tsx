import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../../lib/firebase";
import { notesContext } from "../context/notesContext";

const NotesProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<TaskType[]>([] as TaskType[]);
  const [active, setActive] = useState<TaskType | undefined>(undefined);
  const [filter, setFilters] = useState<TaskStatusType | undefined>(undefined);
  const [all, setAll] = useState<TaskType[]>([] as TaskType[]);

  const updateTasks = (notes: TaskType[]) => {};

  const updateFilter = (status: TaskStatusType) => {
    setFilters(status);
  };

  const updateActive = (note: TaskType) => {
    setActive(note);
  };

  const clearFilter = () => {
    setFilters(undefined);
  };

  const clearActive = () => {
    setActive(undefined);
  };

  const contextValue: ITasksContext = {
    tasks,
    active,
    filter,
    clearActive,
    clearFilter,
    updateActive,
    updateFilter,
    updateTasks,
  };

  useEffect(() => {
    const user = auth.currentUser;

    const tasksCollectionRef = collection(db, "tasks");
    const taskQuery = query(
      tasksCollectionRef,
      where("creator", "==", user?.uid)
    );

    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const data: TaskType[] = [];

      querySnapshot.forEach((doc) => data.push(doc.data() as TaskType));

      setAll(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (filter) setTasks(all.filter((task) => task.status === filter));
    else setTasks(all);
  }, [all, filter]);

  return (
    <notesContext.Provider value={contextValue}>
      {children}
    </notesContext.Provider>
  );
};

export default NotesProvider;
